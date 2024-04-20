import React from "react"
import Link from "next/link"
import Image from "next/image"
import Button from "@/components/common/Button"
import clsx from "clsx"

const index = ({ product, color }) => {
  return (
    <>
      <div className=" shadow-lg w-full max-w-[327px]  rounded-xl overflow-hidden flex flex-col gap-2  ">
        <div className="">
          <div
            className={clsx("py-4  flex flex-col ", {
              [`bg-[rgb(251,234,220)]`]: color === "pro1",
              [`bg-[rgb(254,246,202)]`]: color === "pro2",
              [` bg-[rgb(244,212,255)]`]: color === "pro3",
              [`bg-[rgb(253,223,198)]`]: color === "pro4",
              [`bg-[rgb(224,214,255)]`]: color === "pro5",
              [`bg-[rgb(255,213,246)]`]: color === "pro6",
              [`bg-[rgb(216,239,255)]`]: color === "pro7",
              [`bg-[rgb(235,252,198)]`]: color === "pro8",
            })}
          >
            <div className="flex justify-between items-center">
              {product?.discount.show ? (
                <div className="block bg-gold px-4 rounded-r-full ">
                  <p className="">{product.discount.percentage}% off</p>
                </div>
              ) : (
                <div className="px-4 rounded-r-full ">
                  <p className="text-transparent">
                    {product.discount.percentage} off
                  </p>
                </div>
              )}
              <div className="pr-4">
                <button>
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    width="23"
                    height="23"
                    viewBox="0 0 23 23"
                    fill="none"
                    className=""
                  >
                    <g clip-path="url(#clip0_393_934)">
                      <path
                        d="M11.1716 4.56604L10.1862 3.55323C7.87337 1.17578 3.63244 1.99621 2.10153 4.98519C1.3828 6.39104 1.22064 8.4208 2.53305 11.0113C3.79735 13.5055 6.42766 16.4931 11.1716 19.7473C15.9155 16.4931 18.5444 13.5055 19.8101 11.0113C21.1225 8.41943 20.9617 6.39104 20.2416 4.98519C18.7107 1.99621 14.4697 1.17441 12.1569 3.55185L11.1716 4.56604ZM11.1716 21.4033C-9.89975 7.47944 4.68374 -3.38809 10.9297 2.36038C11.0121 2.43596 11.0932 2.5143 11.1716 2.59538C11.2491 2.51437 11.3298 2.43644 11.4134 2.36175C17.658 -3.39084 32.2429 7.47807 11.1716 21.4033Z"
                        fill="#403F3D"
                      />
                    </g>
                    <defs>
                      <clipPath id="clip0_393_934">
                        <rect
                          width="21.9879"
                          height="21.9879"
                          fill="white"
                          transform="translate(0.177734 0.789551)"
                        />
                      </clipPath>
                    </defs>
                  </svg>
                </button>
              </div>
            </div>
            {product?.image && (
              <Image
                src={product.image}
                alt={product?.name || "image"}
                style={{ objectFit: "cover" }}
                height={217}
                width={218}
                className="self-center"
              />
            )}
          </div>
        </div>
        <div className="flex flex-col ">
          <div className="px-4">
            <p className="">{product?.name}</p>
          </div>
          <div className="flex flex-col ">
            {product?.discount?.show ? (
              <div className="px-4 text-subtitle1">
                ₹
                {Number(product?.price) -
                  (Number(product?.price) *
                    Number(product?.discount?.percentage)) /
                    100}
              </div>
            ) : (
              <div className="px-4 text-subtitle1">₹{product?.price}</div>
            )}
            {product?.discount?.show ? (
              <div className="px-4 line-through font-extralight text-black/40">
                ₹{product?.price}
              </div>
            ) : (
              <div className="px-4 line-through text-transparent font-light">
                ₹{product?.price}
              </div>
            )}
          </div>
          <Button className="border-2 border-black mx-4 my-4">
            {product?.btn_text}
          </Button>
        </div>
      </div>
    </>
  )
}

export default index
