"use client"
import ProductCard from "@/components/products/ProductCard"
import { ProductProvider } from "@/lib/context/product-context"
import { useCart, useProducts } from "medusa-react"
// import { products_more } from "@/lib/constData"
import Card from "@/components/products/most_popular_card"
import { useMemo, useState } from "react"
import { get } from "lodash"
import { usePathname } from "next/navigation"
import SectionHeader from "@/components/common/SectionHeader"
import { StoreGetProductsParams } from "@medusajs/medusa"
import { SortOptions } from "@/modules/store/components/refinement-list/sort-products"
import { useInfiniteQuery } from "@tanstack/react-query"
import { getProductsList } from "@/lib/data"
import usePreviews from "@/lib/hooks/use-previews"

// export type InfiniteProductsType = {
//   params: StoreGetProductsParams
//   sortBy?: SortOptions
// }

const ProductsGrid = () => {
  // const { products } = await medusaClient.products.list().catch(() => {
  //   notFound()
  // })

  const { cart } = useCart()

  const SALES_CHANNEL_ID = process.env.NEXT_PUBLIC_SALES_CHANNEL_ID || ""
  const { products } = useProducts({
    sales_channel_id: [SALES_CHANNEL_ID],
    limit: 8,
  })
  const pathname = usePathname()
  const displayProducts = products
    ? pathname.includes("/product")
      ? products
      : products.slice(0, 8)
    : []

  // const queryParams = useMemo(() => {
  //   const p: StoreGetProductsParams = {}

  //   if (cart?.id) {
  //     p.cart_id = cart.id
  //   }

  //   if (cart?.region?.currency_code) {
  //     p.currency_code = cart.region.currency_code
  //   }

  //   p.is_giftcard = false

  //   return {
  //     ...p,
  //     ...params,
  //   }
  // }, [cart?.id, cart?.region, params])

  // const { data, hasNextPage, fetchNextPage, isLoading, isFetchingNextPage } =
  //   useInfiniteQuery(
  //     [`infinite-products-store`, queryParams, cart],
  //     ({ pageParam }) => getProductsList({ pageParam, queryParams }),
  //     {
  //       getNextPageParam: (lastPage) => lastPage.nextPage,
  //     }
  //   )

  // const previews = usePreviews({
  //   pages: data?.pages,
  //   region: cart?.region,
  //   sortBy,
  // })

  return (
    <section className="bg-white">
      {/* {!pathname.includes("/products") && (
        <SectionHeader
          heading="Most Popular Products"
          desc="List of most popular products"
        />
      )} */}
      <div className="py-6 grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-x-4 gap-y-16">
        {displayProducts && !displayProducts.length && <span>No Products</span>}
        {displayProducts && displayProducts.length > 0 && (
          <>
            {displayProducts.map((product) => (
              <ProductProvider product={product} key={product.id}>
                {/* <ProductCard product={product} color={getRandomColor()} /> */}
                <ProductCard product={product} />
              </ProductProvider>
            ))}
          </>
        )}
      </div>
    </section>
  )
}

export default ProductsGrid
{
  /* */
}
