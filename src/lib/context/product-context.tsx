"use client"

import isEqual from "lodash/isEqual"
import { formatVariantPrice, useCart, useProducts } from "medusa-react"
import React, {
  createContext,
  useContext,
  useEffect,
  useMemo,
  useState,
} from "react"
import { useStore } from "./store-context"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { canBuy } from "../util/can-buy"
import { findCheapestPrice } from "../util/prices"
import { Variant } from "@/types/medusa"
import { onlyUnique } from "../util/only-unique"

interface ProductContext {
  formattedPrice: string
  quantity: number
  disabled: boolean
  inStock: boolean
  variant?: Variant
  maxQuantityMet: boolean
  options: Record<string, string>
  updateOptions: (options: Record<string, string>) => void
  increaseQuantity: () => void
  decreaseQuantity: () => void
  addToCart: (callback: () => void) => void
  product: any
}

const ProductActionContext = createContext<ProductContext | null>(null)

interface ProductProviderProps {
  children?: React.ReactNode
  product: PricedProduct
}

const sales_channel = process.env.NEXT_PUBLIC_SALES_CHANNEL_ID || ""

export const ProductProvider = ({
  product,
  children,
}: ProductProviderProps) => {
  const [quantity, setQuantity] = useState<number>(1)
  const [options, setOptions] = useState<Record<string, string>>({})
  const [maxQuantityMet, setMaxQuantityMet] = useState<boolean>(false)
  const [inStock, setInStock] = useState<boolean>(true)
  const { products } = useProducts({
    id: product?.id,
    sales_channel_id: [sales_channel],
  })

  const productDetail = products?.length ? products[0] : {}
  const { addItem } = useStore()
  const { cart, totalItems } = useCart()
  const variants =
    (product?.variants as unknown as Variant[]) || productDetail?.variants

  useEffect(() => {
    // initialize the option state
    const optionObj: Record<string, string> = {}

    for (const option of product?.options || []) {
      const filteredOptions = option.values
        .map((v) => v.value)
        .filter(onlyUnique)

      Object.assign(optionObj, { [option.id]: filteredOptions[0] })
    }
    setOptions(optionObj)
  }, [product])

  // memoized record of the product's variants
  const variantRecord = useMemo(() => {
    const map: Record<string, Record<string, string>> = {}
    if (variants)
      for (const variant of variants) {
        const tmp: Record<string, string> = {}
        if (variant.options)
          for (const option of variant.options) {
            tmp[option.option_id] = option?.value
          }

        map[variant.id] = tmp
      }

    return map
  }, [variants])

  // memoized function to check if the current options are a valid variant
  const variant = useMemo(() => {
    let variantId: string | undefined = undefined
    for (const key of Object.keys(variantRecord)) {
      if (isEqual(variantRecord[key], options)) {
        variantId = key
      }
    }
    return variants?.find((v) => v.id === variantId)
  }, [options, variantRecord, variants])

  // if product only has one variant, then select it
  useEffect(() => {
    if (variants?.length === 1) {
      setOptions(variantRecord[variants[0].id])
    } else {
    }
  }, [variants, variantRecord])

  const disabled = useMemo(() => {
    return !variant
  }, [variant])

  // memoized function to get the price of the current variant
  const formattedPrice = useMemo(() => {
    if (variant && cart?.region) {
      return formatVariantPrice({ variant, region: cart.region })
    } else if (cart?.region) {
      return findCheapestPrice(variants, cart.region)
    } else {
      // if no variant is selected, or we couldn't find a price for the region/currency
      return "N/A"
    }
  }, [variant, variants, cart])

  useEffect(() => {
    if (variant) {
      setInStock(canBuy(variant))
    }
  }, [variant])

  const updateOptions = (update: Record<string, string>) => {
    setOptions({ ...options, ...update })
  }

  const addToCart = (callback?: () => void) => {
    if (variant) {
      addItem({
        variantId: variant?.id,
        quantity,
        callback,
      })
    } else {
      alert("please select a variant")
    }
  }

  const increaseQuantity = () => {
    const maxQuantity = variant?.inventory_quantity || 0

    if (maxQuantity > quantity + 1) {
      setQuantity(quantity + 1)
    } else {
      setMaxQuantityMet(true)
    }
  }

  const decreaseQuantity = () => {
    if (quantity > 1) {
      setQuantity(quantity - 1)

      if (maxQuantityMet) {
        setMaxQuantityMet(false)
      }
    }
  }

  return (
    <ProductActionContext.Provider
      value={{
        quantity,
        maxQuantityMet,
        disabled,
        inStock,
        options,
        variant,
        addToCart,
        updateOptions,
        decreaseQuantity,
        increaseQuantity,
        formattedPrice,
        product,
      }}
    >
      {children}
    </ProductActionContext.Provider>
  )
}

export const useProductActions = () => {
  const context = useContext(ProductActionContext)
  if (context === null) {
    throw new Error(
      "useProductActionContext must be used within a ProductActionProvider"
    )
  }
  return context
}
