"use client"
import Heart from "../../../../public/icons/heartbtn.svg"
import Button from "@/components/common/Button"
import { useProductActions } from "@/lib/context/product-context"
import BagIcon from "@/public/icons/bag.svg"
import Plus from "@/public/icons/plus.svg"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { useCart } from "medusa-react"
import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  useCallback,
  useRef,
  useState,
} from "react"
import CounterBtn from "../CounterBtn"
import Link from "next/link"
import LoadingSpinner from "@/components/common/LoadingSpinner"
import { sendGAEvent } from "@next/third-parties/google"

type Props = {
  type?: "icon" | "text"
  product: PricedProduct
  varient?: "primary" | "outlined"
}

const AddToCartBtn = ({
  type = "text",
  product,
  varient: myvar = "outlined",
}: Props) => {
  const [loading, setLoading] = useState(false)

  const { addToCart, inStock, variant } = useProductActions()

  const { cart } = useCart()

  const linkRef =
    useRef<
      DetailedHTMLProps<
        AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
      >
    >()

  const cartItem = cart?.items.find((x) => x.variant_id === variant?.id)

  const handleAddToCart = useCallback(
    (e) => {
      e.preventDefault()
      setLoading(true)
      addToCart(() => {
        setLoading(false)
        if (linkRef && linkRef.current) {
          linkRef.current.click()
        }
      })
      sendGAEvent({ event: "add_to_cart", value: "xyz" })
    },
    [addToCart]
  )

  return (
    <>
      <Link
        href="/cart"
        scroll={false}
        ref={linkRef}
        className="sr-only"
        aria-disabled
      >
        open cart
      </Link>
      {type === "icon" ? (
        <div className="flex">
          <Button
            variant="round"
            color="dark"
            onClick={handleAddToCart}
            disabled={!inStock || !variant || !!loading}
          >
            <span className="sr-only">add to card button</span>

            <Plus className="h-6" />
          </Button>
        </div>
      ) : cartItem ? (
        <CounterBtn size="md" cartItem={cartItem} />
      ) : (
        <div className="flex w-full gap-2">
          <Button
            type="submit"
            variant={myvar === "primary" ? "fill" : "outlined"}
            color={myvar === "primary" ? "primary" : "dark"}
            className={"!rounded-md text-white w-full"}
            onClick={handleAddToCart}
            disabled={!inStock || !variant || !!loading}
          >
            <BagIcon className="w-5 aspect-square" />
            <span>
              {!inStock
                ? "Out of stock"
                : !variant
                ? "Select variant"
                : "Add to cart"}
            </span>
          </Button>
          {/* <div className="border-[1px] border-primary flex  rounded-lg ">
            <Heart className="hover:fill-primary w-10 h-10 p-1" />
          </div> */}
        </div>
      )}
    </>
  )
}

export default AddToCartBtn
