import ProductsGrid from "@/containers/ProductsGrid"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Store",
  description: "Explore all of our products.",
}

export default function ProductsPage() {
  return (
    <>
      {/* <ProductsBanner /> */}
      {/* <ProductsTemplate /> */}
      <ProductsGrid />
      {/* <StoreTemplate /> */}
    </>
  )
}
