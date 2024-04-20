import CartSummary from "@/components/CartSummary"
import Banner from "@/components/common/Banner"
import CartItemList from "@/containers/CartItemList"
import RelatedProduct from "@/containers/RelatedProduct"
import { cartPageBanner } from "@/lib/constData"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Cart",
  description: "View your cart",
}

export default function Cart() {
  return (
    <>
      {/* <Banner data={cartPageBanner} /> */}
      <section className="grid  grid-cols-1 md:grid-cols-[1fr_40%] justify-center bg-secondary py-10 max-md:py-6 gap-2">
        
        <CartItemList />
        <div className="flex flex-col gap-14 h-max sticky top-[100px] m-4">
          <CartSummary />
        </div>
      </section>
    </>
  )
}
