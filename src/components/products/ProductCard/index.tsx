import Image from "next/image"
import AddToCartBtn from "../AddToCartBtn"
import Price from "@/components/Price"
import Link from "next/link"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import WishlistBtn from "@/components/common/WishlistBtn"
import useProductPrice from "@/lib/hooks/use-product-price"
import { useProductActions } from "@/lib/context/product-context"
import { log } from "console"

type ProductTemplateProps = {
  product: PricedProduct
}

// const bgColors = [
//   "bg-[rgb(251,234,220)]",
//   "bg-[rgb(254,246,202)]",
//   "bg-[rgb(244,212,255)]",
//   "bg-[rgb(253,223,198)]",
//   "bg-[rgb(224,214,255)]",
//   "bg-[rgb(255,213,246)]",
//   "bg-[rgb(216,239,255)]",
//   "bg-[rgb(235,252,198)]",
// ]

// const generateRandomBgColor = () => {
//   const idx = Math.floor(Math.random() * bgColors.length)
//   return bgColors[idx]
// }

const ProductCard = ({ product }: ProductTemplateProps) => {
  const { variant } = useProductActions()
  const price = useProductPrice({
    id: product.id,
    variantId: variant?.id,
  })
  const Bgcolor =
    (product?.variants && product?.variants[0]?.metadata?.backgroundColor) ||
    "#fff"

  // const randomColor = generateRandomBgColor()
  return (
    <div className="shadow-lg rounded-xl w-full max-w-[320px] overflow-hidden bg-white">
      <div
        className={`
       relative w-full  aspect-[1/1]`}
        style={{ backgroundColor: `${Bgcolor}` }}
      >
        <div className="z-10 absolute top-0 w-full flex justify-between items-center mb-2 mt-4">
          <div className="flex bg-gold px-3 rounded-r-full items-center">
            {price?.variantPrice?.percentage_diff != "0" && (
              <p className="text-btn">
                {/* {price?.variantPrice?.percentage_diff}% off */}
              </p>
            )}
          </div>
          <div className="pr-5">
            <WishlistBtn
              product_id={product.id!}
              item={product}
              variant="black"
            />
          </div>
        </div>
        <Link
          scroll={false}
          href={`/products/${product?.handle}`}
          className={`flex justify-self-center absolute  top-[50%] left-[50%] translate-x-[-50%] translate-y-[-50%] w-[80%] aspect-square `}
        >
          {product?.thumbnail && (
            <Image
              src={product?.thumbnail}
              alt={product?.title || "image"}
              priority
              fill
              style={{ objectFit: "contain" }}
              className="self-center"
            />
          )}
        </Link>
      </div>
      <div className="flex flex-col gap-2 p-4">
        <p className="text-body2 font-semibold line-clamp-1">
          {product?.title}
        </p>
        <Price id={product.id as string} />
        <AddToCartBtn product={product} />
      </div>
    </div>
  )
}

export default ProductCard
