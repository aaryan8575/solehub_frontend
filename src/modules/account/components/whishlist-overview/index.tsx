"use client"
import { ProductProvider } from "@/lib/context/product-context"
import ProductCard from "@/components/products/ProductCard"
import { useWishList } from "@/lib/context/wishlist-context"
import Button from "@/components/common/Button"

const WishlistOverview = () => {
  const { wishListState } = useWishList()
  const wishlistItems = wishListState?.items
  // console.log(wishListState);

  if (wishlistItems?.length) {
    return (
      <div className="gap-x-2 md:gap-x-4 gap-y-4 md:gap-y-8 grid grid-cols-2 md:grid-cols-3 lg:grid-cols-3">
        {wishlistItems &&
          wishlistItems?.map((item, i) => {
            // console.log(productFromWishlist, 'productFromWishlist[i]');
            return (
              <ProductProvider key={item.id} product={item.product}>
                <ProductCard product={item.product} />
              </ProductProvider>
            )
          })}
      </div>
    )
  }

  return (
    <div className="w-full flex flex-col gap-y-4">
      <p className="text-heading5 font-semibold">Nothing to see here</p>
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
