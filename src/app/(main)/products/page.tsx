import ProductsGrid from "@/containers/ProductsGrid"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Store",
  description: "Explore all of our products.",
  openGraph: {
    type: "website",
  },
}

export default function ProductsPage({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const query = searchParams.q
  const category = searchParams.category
  console.log(searchParams)

  return (
    <>
      {/* <ProductsBanner /> */}
      <ProductsGrid query={query} category={category} />
      {/* <StoreTemplate /> */}
    </>
  )
}
