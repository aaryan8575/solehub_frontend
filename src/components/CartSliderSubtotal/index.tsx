"use client"
import React from "react"
import Button from "../common/Button"
import { formatAmount, useCart } from "medusa-react"
import useEnrichedLineItems from "@/lib/hooks/use-enrich-line-items"

type Props = {}

const CartSliderSubtotal = (props: Props) => {
  const { cart } = useCart()

  const items = useEnrichedLineItems()
  if (!cart) return null

  if (items && items.length) {
    return (
      <div className="flex flex-col pt-4 gap-4">
        <div className="flex flex-col gap-4 px-4">
          {/* <Button
            as="a"
            variant="outlined"
            href="/account/wishlist"
            className="w-full hover:bg-secondary"
          >
            Add item from wishlist
          </Button> */}
          <div className="flex justify-between items-center text-body2 font-semibold border-y">
            <span>Total</span>
            <span>
              {cart &&
                formatAmount({
                  amount: cart?.subtotal || 0,
                  region: cart?.region,
                  includeTaxes: false,
                })}
            </span>
          </div>
          {/* <p>Shipping and taxes calculated at checkout.</p> */}
          <p className="text-caption2">
            Shipping and taxes calculated at checkout.
          </p>
        </div>

        <div className="flex gap-2 px-2">
          <Button
            as="a"
            href="/products"
            variant="fill"
            color="primary"
            className="w-full py-2"
          >
            <span className="sr-only">Continue Shopping</span>
            Continue Shopping
          </Button>
          <Button
            as="a"
            href="/checkout"
            variant="fill"
            color="primary"
            className="w-full py-2"
          >
            Checkout
          </Button>
        </div>
      </div>
    )
  }
}

export default CartSliderSubtotal
