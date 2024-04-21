"use client"
import CartItem from "@/components/CartItem"
import Button from "@/components/common/Button"
import Image from "next/image"
import LoadingSpinner from "@/components/common/LoadingSpinner"
import useEnrichedLineItems from "@/lib/hooks/use-enrich-line-items"
import CartIcon from "@/public/icons/cart.svg"
import { useCart, useMeCustomer } from "medusa-react"

const CartItemList = () => {
  const { cart } = useCart()
  const { isLoading, customer } = useMeCustomer()
  const items = useEnrichedLineItems()

  if (!cart || !cart?.id?.length || isLoading) {
    return (
      <div className="flex flex-col gap-4 items-center justify-center h-full bg-gray/5 rounded-lg py-40">
        <span>
          <LoadingSpinner />
        </span>
        <span>Loading...</span>
      </div>
    )
  }

  return (
    <>
      {cart.items.length ? (
        <ul
          role="list"
          className="divide-y divide-gray/30 bg-primary/5 rounded-lg mx-4 flex flex-col p-2"
        >
          {items &&
            items
              .sort((a, b) => {
                return a.created_at > b.created_at ? -1 : 1
              })
              .map((item) => <CartItem key={item.id} item={item} />)}
        </ul>
      ) : (
        <div className="flex flex-col gap-8 items-center justify-center h-full p-2">
          <div className="flex-1 flex flex-col items-center justify-center gap-2">
            <span>
              <CartIcon className="w-20 h-20" />
            </span>
            <div className="flex flex-col items-center">
              <h5>Your bag is empty.</h5>
              <a className="text-caption2" href="/products">
                Start adding product now.
              </a>
            </div>
          </div>
          <div className="flex flex-col gap-4 w-full">
            {/* {customer && (
              <Button as="a" variant="outlined" href="/account/wishlist">
                Add item from wishlist
              </Button>
            )} */}

            <Button
              as="a"
              variant="fill"
              href="/products"
              color="primary"
              className=""
            >
              Continue Shopping
            </Button>
          </div>
        </div>
      )}
    </>
  )
}

export default CartItemList
