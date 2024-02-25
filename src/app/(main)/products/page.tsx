import ProductsGrid from "@/containers/ProductsGrid"
import ProductsTemplate from "@/containers/SortFilter"
import StoreTemplate from "@/modules/store/templates"
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
