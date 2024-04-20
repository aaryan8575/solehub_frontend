import Image from "next/image"
import AddToCartBtn from "../AddToCartBtn"
import Button from "@/components/common/Button"
import Price from "@/components/Price"
import ReactMarkdown from "react-markdown"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { ProductProvider } from "@/lib/context/product-context"
import WishlistBtn from "@/components/common/WishlistBtn"
import Sharebtn from "@/components/common/Sharebtn"

type ProductTemplateProps = {
  product: PricedProduct
}

const ProductModal = ({ product }: ProductTemplateProps) => {
  const Bgcolor = product.variants[0].metadata?.backgroundColor

  return (
    <ProductProvider product={product}>
      <div className="grid w-full max-w-2xl lg:max-w-3xl grid-cols-1 sm:grid-cols-2 rounded-md max-sm:gap-4 gap-8">
        <div
          className={`relative w-full aspect-square  rounded-md overflow-hidden`}
          style={{ backgroundColor: `${Bgcolor}` }}
        >
          {product?.thumbnail && (
            <Image
              src={product?.thumbnail}
              alt={product?.title || "image"}
              fill
              style={{ objectFit: "cover" }}
              // sizes="(max-width: 639px) 100vw, 50vw"
              className=""
            />
          )}
        </div>
        <div className="flex flex-col justify-between gap-4">
          <h3 className="font-bold">{product?.title} </h3>
          <span className="text-gray line-clamp-3">
            <ReactMarkdown>{product?.description}</ReactMarkdown>
          </span>
          <div className="flex items-center gap-4">
            <Price id={product.id as string} />
            {/* <WishlistBtn
              product_id={product.id!}
              item={product}
              variant="red"
            /> */}
          </div>
          {/* <Rating rating={data.rating} reviewCount={data.reviewCount} /> */}
          <div className="flex flex-col gap-2">
            <div className="flex gap-3 justify-between">
              <AddToCartBtn product={product} varient="outlined" />
              <WishlistBtn
                product_id={product.id!}
                item={product}
                variant="red"
              />
              {/* <Button as="a" href="/" variant="text"> */}
              <Sharebtn />
              {/* </Button> */}
            </div>
            {/* <div className="flex items-center gap-2 w-full">
              <div className="flex-1">
                <AddToCartBtn product={product} />
              </div>
              <WishlistBtn
                product_id={product.id!}
                item={product}
                variant="red"
               
              />
              <Button as="a" href="/" variant="text">
                <Share className="w-6" />
              </Button>
            </div> */}
            <div>
              <Button
                as="a"
                variant="fill"
                color="primary"
                href={`/products/${product?.handle}`}
                className="flex-1"
              >
                More Details
              </Button>
            </div>
          </div>
        </div>
      </div>
    </ProductProvider>
  )
}

export default ProductModal
