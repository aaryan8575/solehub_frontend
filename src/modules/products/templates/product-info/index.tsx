import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { Heading, Text } from "@medusajs/ui"
import Link from "next/link"
import React from "react"

export type reviewProps = {
  id: string
  created_at: Date
  updated_at: Date
  deleted_at: Date | null
  product_id: string
  customer_id: string
  title: string
  rating: number
  content: string
  status: string
  is_deleted: boolean
}

type ProductInfoProps = {
  product: PricedProduct
}

const ProductInfo: React.FC<ProductInfoProps> = ({ product }) => {
  return (
    <div id="product-info">
      <div className="flex flex-col gap-y-4 lg:max-w-[500px] mx-auto">
        {product.collection && (
          <Link
            href={`/collections/${product.collection.handle}`}
            className="text-medium text-ui-fg-muted hover:text-ui-fg-subtle"
          >
            {product.collection.title}
          </Link>
        )}
        <Heading
          level="h2"
          className="text-heading5 leading-10 text-ui-fg-base"
        >
          {product.title}
        </Heading>

        <Text className="text-medium">{product.description}</Text>
      </div>
    </div>
  )
}

export default ProductInfo
