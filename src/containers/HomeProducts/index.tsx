"use client"
import { topProduct } from "@/lib/constData"
import Button from "@/components/common/Button"
import ProductCard from "@/components/products/ProductCard"
import { notFound } from "next/navigation"
import { medusaClient } from "@/lib/config"
import { ProductProvider } from "@/lib/context/product-context"
import { useProducts } from "medusa-react"

type Props = {}

const HomeProducts = (props: Props) => {
  // const { products } = await medusaClient.products.list().catch((err) => {
  //   notFound()
  // })

  const { products } = useProducts({
    limit: 3,
  })

  return (
    <section
      id="top-products"
      className="grid lg:grid-cols-[25%_1fr] grid-cols-1 items-center gap-2"
    >
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-heading4">{topProduct.heading}</h3>
        <p className="text-caption2 text-gray mb-2">{topProduct.description}</p>
        <Button
          variant="fill"
          color="black"
          className="w-max !rounded-full"
          as="a"
          href="/products"
        >
          {topProduct.actionBtn}
        </Button>
      </div>
      {products && !products.length && <span>No Products</span>}
      {products && products.length > 0 && (
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          {products?.map((product) => (
            <ProductProvider key={product.id} product={product}>
              <ProductCard key={product.id} product={product} />
            </ProductProvider>
          ))}
        </div>
      )}
    </section>
  )
}

export default HomeProducts
