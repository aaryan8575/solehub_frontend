"use client"
import ProductCard from "@/components/products/ProductCard"
import { ProductProvider } from "@/lib/context/product-context"
import { useProducts } from "medusa-react"
import { usePathname } from "next/navigation"
import SectionHeader from "@/components/common/SectionHeader"
import AnimatedLoader from "@/public/icons/animatedLoader.svg"

// const ProductsGrid = () => {
//   const [color, setcolor] = useState([
//     "pro1",
//     "pro2",
//     "pro3",
//     "pro4",
//     "pro5",
//     "pro6",
//     "pro7",
//     "pro8",
//   ])
//   const getRandomColor = () => {
//     const randomIndex = Math.floor(Math.random() * color.length)
//     return color[randomIndex]
//   }
type Props = {
  query: string
  category: string
}

const ProductsGrid = ({ query, category }: Props) => {
  // const { products } = await medusaClient.products.list().catch(() => {
  //   notFound()
  // })
  // console.log({ category })

  const SALES_CHANNEL_ID = process.env.NEXT_PUBLIC_SALES_CHANNEL_ID || ""
  const { products, isLoading } = useProducts({
    sales_channel_id: [SALES_CHANNEL_ID],
    q: query,
  })
  const pathname = usePathname()
  const displayProducts = products
    ? pathname.includes("/product")
      ? products
      : products.slice(0, 8)
    : []

  return (
    <section className="py-8">
      <div className="flex flex-col gap-6">
        {!pathname.includes("/products") && (
          <SectionHeader
            heading="Most Popular Products"
            desc="List of most popular products"
          />
        )}
        {isLoading && (
          <div className="w-full h-full md:min-h-[600px] flex justify-center items-center">
            <div className="w-16 aspect-square">
              <AnimatedLoader />
            </div>
          </div>
        )}
        <div className="grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-4 gap-y-4 max-[440px]:grid-cols-1 max-[440px]:gap-y-3">
          {/* <div className="py-6 grid lg:grid-cols-4 md:grid-cols-3 grid-cols-2 gap-x-4 gap-y-16 max-[440px]:grid-cols-1 max-[440px]:gap-y-3 justify-center items-center"> */}
          {/* {displayProducts && !displayProducts.length && (
            <span>No Products</span>
          )} */}
          {displayProducts && displayProducts.length > 0 && (
            <>
              {displayProducts.map((product) => (
                <div
                  key={product.id}
                  className="flex justify-center items-center w-full"
                >
                  <ProductProvider product={product}>
                    <ProductCard product={product} />
                  </ProductProvider>
                </div>
              ))}
            </>
          )}
        </div>
      </div>
    </section>
  )
}
export default ProductsGrid

{
  /* // "use client"
// import ProductCard from "@/components/products/ProductCard"
// import { ProductProvider } from "@/lib/context/product-context"
// import { useProducts } from "medusa-react"

// const ProductsGrid = () => {
//   const { products } = useProducts({})

//   return (
//     <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
//       {products && !products.length && <span>No Products</span>}
//       {products && products.length > 0 && (
//         <>
//           {products.map((product) => (
//             <ProductProvider key={product.id} product={product}>
//               <ProductCard product={product} />
//             </ProductProvider>
//           ))}
//         </>
//       )}
//     </section>
//   )
// }

// export default ProductsGrid */
}

{
  /* "use client"
import { getProductsList } from "@/lib/data"
import usePreviews from "@/lib/hooks/use-previews"
import getNumberOfSkeletons from "@/lib/util/get-number-of-skeletons"
import repeat from "@/lib/util/repeat"
import { StoreGetProductsParams } from "@medusajs/medusa"
import ProductPreview from "@/modules/products/components/product-preview"
import SkeletonProductPreview from "@/modules/skeletons/components/skeleton-product-preview"
import { useCart } from "medusa-react"
import { useEffect, useMemo } from "react"
import { useInView } from "react-intersection-observer"
import { useInfiniteQuery } from "@tanstack/react-query"
import { SortOptions } from "@/modules/store/components/refinement-list/sort-products"
import { ProductProvider } from "@/lib/context/product-context"
import { useProducts } from "medusa-react"

const sales_channel = process.env.NEXT_PUBLIC_SALES_CHANNEL_ID || ""

const ProductsGrid = () => {
  const { products } = useProducts({
    sales_channel_id: [sales_channel],
  })

  return (
    <section className="grid lg:grid-cols-4 md:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-4">
      {products && !products.length && <span>No Products</span>}
      {products && products.length > 0 && (
        <>
          {products.map((product) => (
            <ProductProvider key={product.id} product={product}>
              <ProductCard product={product} />
            </ProductProvider>
          ))}
        </>
      )}
    </section>
  )
} */
}
