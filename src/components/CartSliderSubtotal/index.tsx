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
      <div className="flex flex-col gap-4">
        {/* <div className="flex flex-col gap-4 pt-4 px-4">
          <Button
            as="a"
            variant="outlined"
            href="/account/wishlist"
            className="w-full"
          >
            Add item from wishlist
          </Button>
          <div className="flex justify-between items-center text-body2 font-semibold bg-white px-6 py-2 rounded-md">
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
          <p className="text-caption2 text-gray">
          Shipping and taxes calculated at checkout.
        </p>
        </div> */}
        {/* <Button
          as="a"
          href="/checkout"
          variant="fill"
          color="primary"
          className="!rounded-xl"
        >
          <span className="sr-only">Checkout</span>
          Checkout
        </Button> */}
        <div className="flex justify-between">
          <div className="flex justify-between items-center text-body2 font-semibold bg-white px-6 py-2 w-full">
            <span>Total</span>
            <span>
              {cart &&
                formatAmount({
                  amount: cart?.total || 0,
                  region: cart?.region,
                  includeTaxes: false,
                })}
            </span>
          </div>
          <Button
            as="a"
            href="/checkout"
            variant="fill"
            color="primary"
            className="w-full !rounded-none py-2"
          >
            Continue
          </Button>
        </div>
      </div>
    )
  }
}

export default CartSliderSubtotal
