import Image from "next/image"
import AddToCartBtn from "../AddToCartBtn"
import Button from "@/components/common/Button"
import Price from "@/components/Price"
import ReactMarkdown from "react-markdown"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { ProductProvider } from "@/lib/context/product-context"
import WishlistBtn from "@/components/common/WishlistBtn"
import ShareButton from "@/components/common/ShareBtn"

type ProductTemplateProps = {
  product: PricedProduct
}

const ProductModal = ({ product }: ProductTemplateProps) => {
  return (
    <ProductProvider product={product}>
      <div className="grid w-full max-w-2xl lg:max-w-3xl grid-cols-1 sm:grid-cols-2 rounded-md gap-8">
        <div className="relative w-full aspect-square">
          {product?.thumbnail && (
            <Image
              src={product?.thumbnail}
              alt={product?.title || "image"}
              fill
              style={{ objectFit: "cover" }}
            />
          )}
        </div>
        <div className="flex flex-col justify-between gap-2">
          <h3 className="font-bold m-0">{product?.title} </h3>
          <span className="text-gray line-clamp-3">
            <ReactMarkdown>{product?.description}</ReactMarkdown>
          </span>
          <div className="flex items-center gap-4">
            <Price id={product.id as string} />
            <WishlistBtn
              product_id={product.id!}
              item={product}
              variant="red"
            />
            <ShareButton url="" />
          </div>
          {/* <Rating rating={data.rating} reviewCount={data.reviewCount} /> */}
          <div className="flex items-center gap-2 w-full flex-wrap">
            <AddToCartBtn product={product} />
            <Button
              as="a"
              variant="fill"
              color="primary"
              href={`/products/${product?.handle}`}
              className="w-full"
            >
              More Details
            </Button>
          </div>
        </div>
      </div>
    </ProductProvider>
  )
}

export default ProductModal
