import clsx from "clsx"
import Link from "next/link"
import { ProductPreviewType } from "@/types/global"
import Thumbnail from "../thumbnail"
import { Text } from "@medusajs/ui"
import WishlistBtn from "@/components/common/WishlistBtn"
import Image from "next/image"
import Price from "@/components/Price"
import AddToCartBtn from "@/components/products/AddToCartBtn"
import Wishlist from "@/public/icons/heart.svg"
import { ProductProvider } from "@/lib/context/product-context"

const ProductPreview = ({
  id,
  title,
  handle,
  thumbnail,
  price,
  isFeatured,
  created_at,
}: ProductPreviewType) => {
  return (
    <div className="shadow-lg rounded-xl overflow-hidden bg-white">
      <div className="relative w-full aspect-[3/4]">
        <div className="z-10 absolute top-0 w-full flex justify-end items-center mb-2 mt-4">
          <div className="pr-5">
            {/* <WishlistBtn
              product_id={product.id!}
              item={product}
              variant="black"
            /> */}
            <Wishlist className="h-6" />
          </div>
        </div>
        <Link
          scroll={false}
          href={`/products/${handle}`}
          className={`block relative w-full aspect-[3/4]`}
        >
          {thumbnail && (
            <Image
              src={thumbnail}
              alt={title || "image"}
              priority
              fill
              style={{ objectFit: "contain" }}
              className="self-center pb-4"
            />
          )}
        </Link>
      </div>
      <div className="flex flex-col gap-4 p-4">
        <p>{title}</p>
        <ProductProvider key={id}>
          <Price id={id as string} />
          <AddToCartBtn />
        </ProductProvider>
      </div>
    </div>
    // <Link href={`/products/${handle}`} className="group">
    //   <div>
    //     <Thumbnail thumbnail={thumbnail} size="full" isFeatured={isFeatured} />
    //     <div className="flex txt-compact-medium mt-4 justify-between">
    //       <Text className="text-ui-fg-subtle">{title}</Text>
    //       <div className="flex items-center gap-x-2">
    //         {price ? (
    //           <>
    //             {price.price_type === "sale" && (
    //               <Text className="line-through text-ui-fg-muted">
    //                 {price.original_price}
    //               </Text>
    //             )}
    //             <Text
    //               className={clsx("text-ui-fg-muted", {
    //                 "text-ui-fg-interactive": price.price_type === "sale",
    //               })}
    //             >
    //               {price.calculated_price}
    //             </Text>
    //           </>
    //         ) : (
    //           <div className="w-20 h-6 animate-pulse bg-gray-100"></div>
    //         )}
    //       </div>
    //     </div>
    //   </div>
    // </Link>
  )
}

export default ProductPreview
