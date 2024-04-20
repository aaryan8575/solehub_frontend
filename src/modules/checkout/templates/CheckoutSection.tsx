"use client"
import CheckoutForm from "./checkout-form"
import CheckoutSummary from "./checkout-summary"
import { useCart } from "medusa-react"
import CartIcon from "@/public/icons/cart.svg"
import LoadingSpinner from "@/components/common/LoadingSpinner"

const CheckoutSection = () => {
  const { cart } = useCart()

  if (!cart?.items.length) {
    return (
      // <div className="flex flex-col gap-4 items-center justify-center h-full bg-gray/5 rounded-lg py-40">
      //   <span>
      //     <CartIcon className="w-8 h-8" />
      //   </span>
      //   <p>Your cart is empty</p>
      //   <a href="/products" className="text-blue-600">
      //     Continue Shopping
      //   </a>
      // </div>
      <div className="flex flex-col h-screen gap-4 items-center justify-center">
        <span>
          <LoadingSpinner />
        </span>
        <span>Loading...</span>
      </div>
    )
  }
  return (
    <div className="grid grid-cols-1 small:grid-cols-[1fr_416px] content-container gap-x-40 py-4">
      <CheckoutForm />
      <CheckoutSummary />
    </div>
  )
}

export default CheckoutSection
