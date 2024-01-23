"use client"
import Link from "next/link"
import CartIcon from "@/public/icons/bag.svg"
import { useCart } from "medusa-react"

type Props = {}

const CartBtn = (props: Props) => {
  const { cart, totalItems } = useCart()

  return (
    <Link href={"/cart"} scroll={false} className="relative">
      <span className="sr-only">go to cart button</span>
      <div className="flex flex-col justify-center items-center">
        <CartIcon className="w-5" />
        <p className="text-xs max-sm:hidden">Bag</p>
      </div>
      <span className="absolute top-0 right-0 bg-gold rounded-full w-full aspect-square text-[10px] m-0 flex items-center justify-center translate-x-1/2 -translate-y-1/2">
        {totalItems}
      </span>
    </Link>
  )
}

export default CartBtn
