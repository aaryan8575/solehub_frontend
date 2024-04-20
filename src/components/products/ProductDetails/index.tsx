"use client"
import React, { useState, useEffect } from "react"
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
import Sharebtn from "@/components/common/Sharebtn"
import DownArrow from "@/public/icons/chevron-down.svg"
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
  // const [dropdown3Open, setDropdown3Open] = useState(false)

  // const toggleDropdown3 = () => {
  //   setDropdown3Open(!dropdown3Open)
  // }

  useEffect(() => {
    const All_Details = document.querySelectorAll("details")

    const toggleOpenOneOnly = (e: Event) => {
      const target = e.target as HTMLDetailsElement

      if (target.open) {
        All_Details.forEach((deet) => {
          if (deet !== target && deet.open) deet.open = false
        })
      }
    }

    All_Details.forEach((deet) => {
      deet.addEventListener("toggle", toggleOpenOneOnly)
    })
    return () => {
      // Clean up the event listeners when the component unmounts
      All_Details.forEach((deet) => {
        deet.removeEventListener("toggle", toggleOpenOneOnly)
      })
    }
  }, [])

  return (
    <div className="lg:ml-8 flex flex-col justify-between gap-3">
      <div className="font-bold max-md:hidden flex justify-between items-center">
        <h3>{product?.title}</h3>
        <Sharebtn />
      </div>
      <Rating reviewCount={reviewCount} rating={rating} />
      <p className="font-bold max-md:hidden text-caption1">
        {product?.subtitle}
      </p>

      <div className="flex gap-4 items-center">
        <Price id={product.id as string} />
        <div className="flex items-center">(MRP including all Taxes)</div>
      </div>

      {product?.options?.map((option) => (
        <p key={option.id} className="">
          <span className="font-bold capitalize ">{option?.title}:</span>
          <span className="flex flex-wrap gap-4 ">
            {option.values.map((value) => (
              <span
                key={value.id}
                className="border px-4  hover:bg-gold hover:border-gold hover:text-white"
              >
                {value?.value}
              </span>
            ))}
          </span>
        </p>
      ))}

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

      <div className="flex flex-col gap-3 sm:h-56 mt-4 ">
        <details className="group" open>
          <summary className="w-full px-3 flex justify-between items-center py-2 group-open:bg-secondary group-open:border-none border-gray/40 border-y">
            <div className="font-bold text-caption1">WHAT MAKES IT GOOD</div>
            <div className="group-open:rotate-180">
              <DownArrow className="h-5 w-5" />
            </div>
          </summary>
          <div className="py-2 text-btn text-gray px-3 text-justify">
            {product?.description}
          </div>
        </details>
        {Object.keys(product?.metadata)?.map((key) => {
          return (
            <details key={key} className="group">
              <summary className="w-full px-3 flex justify-between items-center py-2 group-open:bg-secondary group-open:border-none border-gray/40 border-y">
                <div className="font-bold text-caption1">{key}</div>
                <div className="group-open:rotate-180">
                  <DownArrow className="h-5 w-5" />
                </div>
              </summary>
              <div className="py-2 px-3 text-justify text-btn text-gray">
                {product?.metadata[key]}
              </div>
            </details>
          )
        })}
      </div>
    </div>
  )
}

export default ProductDetails
