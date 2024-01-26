"use client"
import React, { useState } from "react"
import AddToCartBtn from "../AddToCartBtn"
import Price from "@/components/Price"
import ReactMarkdown from "react-markdown"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import Rating from "../Rating"
import Heart from "../../../../public/icons/heartbtn.svg"
import Button from "@/components/common/Button"
import Drop from "../../../../public/icons/drop.svg"
import Circle from "../../../../public/icons/circle.svg"
import Down from "../../../../public/icons/chevron-down.svg"
import Share from "@/public/icons/share.svg"
import WishlistBtn from "@/components/common/WishlistBtn"
type ProductTemplateProps = {
  product: PricedProduct
  rating: number
  reviewCount: number
}

const ProductDetails = ({
  product,
  rating,
  reviewCount,
}: ProductTemplateProps) => {
  const [dropdown3Open, setDropdown3Open] = useState(false)

  const toggleDropdown3 = () => {
    setDropdown3Open(!dropdown3Open)
  }

  return (
    <div className=" flex  flex-col justify-between gap-4">
      <h3 className="font-bold max-md:hidden flex justify-between">
        {product?.title}

        <Share className="w-8 h-8  m-2" />
      </h3>
      <Rating reviewCount={reviewCount} rating={rating} />
      <p className="font-bold max-md:hidden text-body2">{product?.subtitle}</p>
      <div className=" flex gap-4 items-center">
        <Price id={product.id as string} />
        <div className=" flex items-center"> ( MRP including all Taxes) </div>
      </div>

      {product?.options?.map((option) => {
        return (
          <p key={option.id} className="text-slate-950">
            <span className="font-bold capitalize ">{option?.title}: </span>

            <span className="flex flex-wrap gap-4">
              {option.values.map((value) => {
                return (
                  <span
                    key={value.id}
                    className="border px-4 py-1 hover:bg-footblack hover:border-footblack hover:text-white"
                  >
                    {value?.value}
                  </span>
                )
              })}
            </span>
          </p>
        )
      })}

      <div>
        <div>RECOMMENDED FOR: </div>
        <div className="flex text-black gap-1 ">
          <div className="flex gap-1 text-gray text-caption1 max-sm:text-caption2">
            <Circle className="mt-1 max-sm:mt-0 " />
            <div>All types of skins</div>
          </div>
          <div className="flex gap-1 text-gray text-caption1 max-sm:text-caption2 ">
            <Drop className="mt-1 max-sm:mt-0" />
            <div>Combo to Dryness</div>
          </div>
          <div className="flex gap-1 text-gray text-caption1 max-sm:text-caption2 ">
            <Drop className="mt-1 max-sm:mt-0" />
            <div> Dryness</div>
          </div>
        </div>
      </div>

      <div className="flex gap-4 justify-between">
        <AddToCartBtn product={product} varient="primary" />
        <WishlistBtn product_id={product.id!} item={product} variant="red" />
      </div>

      <div>
        <button
          onClick={toggleDropdown3}
          className={`w-full text-left px-3 text-subtitle2 flex justify-between items-center py-2 ${
            dropdown3Open ? "bg-secondary" : "border-gray border-y-[1px]"
          }`}
        >
          WHAT MAKES IT GOOD
          <Down
            className={`w-7 h-7 transform ${
              dropdown3Open ? "rotate-180 " : ""
            }`}
          />
        </button>
        {dropdown3Open && (
          <div>
            <span className={`prose-sm overflow-hidden`}>
              <ReactMarkdown>{product?.description}</ReactMarkdown>
            </span>
          </div>
        )}
      </div>
    </div>
  )
}

export default ProductDetails
