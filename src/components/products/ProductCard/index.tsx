import Image from "next/image"
import AddToCartBtn from "../AddToCartBtn"
import Price from "@/components/Price"
import Link from "next/link"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import WishlistBtn from "@/components/common/WishlistBtn"

type ProductTemplateProps = {
  product: PricedProduct
}

const bgColors = [
  "bg-[rgb(251,234,220)]",
  "bg-[rgb(254,246,202)]",
  "bg-[rgb(244,212,255)]",
  "bg-[rgb(253,223,198)]",
  "bg-[rgb(224,214,255)]",
  "bg-[rgb(255,213,246)]",
  "bg-[rgb(216,239,255)]",
  "bg-[rgb(235,252,198)]",
]

const generateRandomBgColor = () => {
  const idx = Math.floor(Math.random() * bgColors.length)
  console.log(idx)
  return bgColors[idx]
}

const ProductCard = ({ product }: ProductTemplateProps) => {
  return (
    <div className="shadow-lg rounded-xl overflow-hidden bg-white">
      <div className="relative w-full aspect-[3/4]">
        <div className="z-10 absolute top-0 w-full flex justify-end items-center mb-2 mt-4">
          {/* <div className="flex bg-footblack px-4 rounded-r-full items-center">
            <p className="">50 % off</p>
          </div> */}
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
          className={`block relative w-full aspect-[3/4]`}
        >
          {product?.thumbnail && (
            <Image
              src={product?.thumbnail}
              alt={product?.title || "image"}
              priority
              fill
              style={{ objectFit: "contain" }}
              className="self-center pb-4"
            />
          )}
        </Link>
      </div>
      <div className="flex flex-col gap-4 p-4">
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
