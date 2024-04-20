"use client"
import { ProductProvider } from "@/lib/context/product-context"
import ProductCard from "@/components/products/ProductCard"
import { useWishList } from "@/lib/context/wishlist-context"
import Button from "@/components/common/Button"
import { useState } from "react"

const WishlistOverview = () => {
  const { wishListState } = useWishList()
  const [visibleWishlist, setvisibleWishlist] = useState(3)

  const wishlistItems = wishListState?.items.filter((item) => item.product)

  const showMoreWishlist = () => {
    setvisibleWishlist((prevVisibleWishlist) => prevVisibleWishlist + 3)
  }

  if (wishlistItems?.length) {
    return (
      <>
        <div className="gap-x-2 md:gap-x-4 gap-y-4 md:gap-y-8 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3">
          {wishlistItems &&
            wishlistItems?.slice(0, visibleWishlist).map((item) => {
              if (item.product)
                return (
                  <ProductProvider key={item.id} product={item.product}>
                    <ProductCard product={item.product} />
                  </ProductProvider>
                )
              else null
            })}
        </div>
        <div className="flex justify-end">
          {wishlistItems?.length > visibleWishlist && (
            <button
              onClick={showMoreWishlist}
              className="font-semibold text-primary "
            >
              Show More
            </button>
          )}
        </div>
      </>
    )
  }

  return (
    <div className="w-full flex flex-col gap-y-4">
      <p className="text-heading5">Nothing to see here</p>
      <p className="text-caption1">
        You don&apos;t have any Wishlist yet, let us change that {":)"}
      </p>
      <div className="flex">
        <Button variant="fill" color="primary" as="a" href="/products">
          Continue shopping
        </Button>
      </div>
    </div>
  )
}

export default WishlistOverview
