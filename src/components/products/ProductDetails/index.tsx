import AddToCartBtn from "../AddToCartBtn"
import Price from "@/components/Price"
import ReactMarkdown from "react-markdown"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import style from "./productDetails.module.css"
import WishlistBtn from "@/components/common/WishlistBtn"
import ShareBtn from "@/components/common/ShareBtn"
import ShareButton from "@/components/common/ShareBtn"
type ProductTemplateProps = {
  product: PricedProduct
}

const ProductDetails = ({ product }: ProductTemplateProps) => {
  return (
    <div className="flex flex-col justify-between gap-4">
      <div className="flex items-center justify-between max-md:hidden ">
        <h3 className="font-bold mb-0">{product?.title}</h3>
        <ShareButton url="" />
      </div>
      <p className="font-bold text-body2">{product?.subtitle}</p>
      <div className="flex gap-4 items-center">
        <Price id={product.id as string} />
        <WishlistBtn product_id={product.id!} item={product} />
      </div>
      {/* <Rating reviewCount={5} rating={3} /> */}
      <div>
        {product.variants?.map((variant) => {
          return (
            <>
              {variant.options?.map((option, index) => {
                return (
                  <p key={option.id} className="flex flex-wrap gap-2">
                    <span className="font-bold capitalize">
                      {product?.options && product?.options[index].title}:
                    </span>
                    <span>{option.value}</span>
                  </p>
                )
              })}
            </>
          )
        })}
        <p className="flex flex-wrap gap-2">
          <span className="font-bold">Category: </span>
          {product?.categories?.map((category) => {
            return <span key={category.id}>{category.name}</span>
          })}
        </p>
      </div>
      <AddToCartBtn product={product} />
      <div className={`${style.prose} prose`}>
        <ReactMarkdown>{product?.description}</ReactMarkdown>
      </div>
      {product.metadata &&
        Object.entries(product?.metadata).map(([key, value]) => (
          <span key={key} className="flex flex-wrap gap-2">
            {/* <p className="font-bold uppercase">{key}:</p> */}
            <div className={`${style.prose} prose`}>
              <ReactMarkdown>{value}</ReactMarkdown>
            </div>
          </span>
        ))}
    </div>
  )
}

export default ProductDetails

// "use client"
// import React, { useState } from "react"
// import AddToCartBtn from "../AddToCartBtn"
// import Price from "@/components/Price"
// import ReactMarkdown from "react-markdown"
// import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
// import Rating from "../Rating"
// import Star from "@/public/icons/star.svg"
// import Down from "../../../../public/icons/chevron-down.svg"
// import WishlistBtn from "@/components/common/WishlistBtn"
// import ShareButton from "@/components/common/ShareBtn"
// type ProductTemplateProps = {
//   product: PricedProduct
//   rating: number
//   reviewCount: number
// }

// const ProductDetails = ({
//   product,
//   rating,
//   reviewCount,
// }: ProductTemplateProps) => {
//   const [dropdown3Open, setDropdown3Open] = useState(false)

//   const toggleDropdown3 = () => {
//     setDropdown3Open(!dropdown3Open)
//   }

//   return (
//     <div className=" flex flex-col justify-between gap-4">
//       <h3 className="font-bold max-md:hidden m-0 py-2 items-center flex justify-between">
//         {product?.title}
//         <ShareButton url="" />
//       </h3>
//       {/* <Rating reviewCount={reviewCount} rating={rating} /> */}
//       {/* <div>
//         <p className="flex items-center gap-1">
//           Rating : 4.5
//           <span>
//             <Star className="w-5 text-primary" />
//           </span>
//         </p>
//       </div> */}
//       <p className="font-bold max-md:hidden text-body2">{product?.subtitle}</p>
//       <div className=" flex gap-4 items-center">
//         <Price id={product.id as string} />
//         <div className=" flex items-center"> ( MRP including all Taxes) </div>
//       </div>

//       {product?.options?.map((option) => {
//         return (
//           <p key={option.id} className="text-slate-950">
//             <span className="font-bold capitalize ">{option?.title}: </span>

//             <span className="flex flex-wrap gap-4">
//               {option.values.map((value) => {
//                 return (
//                   <span
//                     key={value.id}
//                     className="border px-4 py-1 rounded-md hover:bg-primary hover:border-footblack hover:text-white"
//                   >
//                     {value?.value}
//                   </span>
//                 )
//               })}
//             </span>
//           </p>
//         )
//       })}

//       {/* <div>
//         <div>RECOMMENDED FOR: </div>
//         <div className="flex text-black gap-1 ">
//           <div className="flex gap-1 text-gray text-caption1 max-sm:text-caption2">
//             <Circle className="mt-1 max-sm:mt-0 " />
//             <div>All types of skins</div>
//           </div>
//           <div className="flex gap-1 text-gray text-caption1 max-sm:text-caption2 ">
//             <Drop className="mt-1 max-sm:mt-0" />
//             <div>Combo to Dryness</div>
//           </div>
//           <div className="flex gap-1 text-gray text-caption1 max-sm:text-caption2 ">
//             <Drop className="mt-1 max-sm:mt-0" />
//             <div> Dryness</div>
//           </div>
//         </div>
//       </div> */}

//       <div className="flex gap-4 justify-between">
//         <AddToCartBtn product={product} varient="primary" />
//         <WishlistBtn product_id={product.id!} item={product} variant="red" />
//       </div>

//       <div>
//         <button
//           onClick={toggleDropdown3}
//           className={`w-full text-left px-3 text-subtitle2 flex justify-between items-center py-2 ${
//             dropdown3Open ? "bg-secondary" : "border-gray border-y-[1px]"
//           }`}
//         >
//           WHAT MAKES IT GOOD
//           <Down
//             className={`w-7 h-7 transform ${
//               dropdown3Open ? "rotate-180 " : ""
//             }`}
//           />
//         </button>
//         {dropdown3Open && (
//           <div>
//             <span className={`prose-sm overflow-hidden`}>
//               <ReactMarkdown>{product?.description}</ReactMarkdown>
//             </span>
//           </div>
//         )}
//       </div>
//     </div>
//   )
// }

// export default ProductDetails
