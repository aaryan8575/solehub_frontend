"use client"
import { dropDownDataType } from "@/utils/types"
import Link from "next/link"
import React, { useState } from "react"
import Downerrow from "@/public/icons/down-line.svg"
import { usePathname } from "next/navigation"
import index from "@/components/products/most_popular_card"
import useToggleState from "@/lib/hooks/use-toggle-state"
import Styles from "./mobiledropdown.module.css"

const MobileDropDown = ({
  dropdown,
  close,
}: {
  dropdown: dropDownDataType
  close: () => void
}) => {
  const { state: isOpen, toggle } = useToggleState()

  const handleArrowClick = (categoryId: string) => {
    toggle()
  }
  const pathname = usePathname()
  return (
    <div className={Styles.main}>
      {dropdown &&
        dropdown.navData.map((data) => {
          const isActiveLink = pathname === data.url
          return (
            <details key={data.id} className={`group ${Styles.detailsTag}`}>
              <summary
                className={`${Styles.summaryTag} ${
                  isActiveLink ? "text-primary" : ""
                }`}
                onClick={() => handleArrowClick(data.id)}
              >
                {!data.subtitle && (
                  <Link
                    href={data.url ?? ""}
                    className={
                      isActiveLink ? "text-primary" : "focus:text-primary"
                    }
                    onClick={close}
                  >
                    {data.title}
                  </Link>
                )}
                {data.subtitle && (
                  <>
                    <div
                      className={`${Styles.subtitlediv}  ${
                        isActiveLink ? "text-primary" : ""
                      }`}
                    >
                      {data.title}
                    </div>

                    <span className={Styles.spanDiv}>
                      <Downerrow className="w-4 h-4 items-center group-open:rotate-180" />
                    </span>
                  </>
                )}
              </summary>

              {data.subtitle?.map((property, index) => {
                const isActiveSublink = pathname === property.url
                return (
                  <Link
                    key={property.id}
                    href={property.url ?? ""}
                    className={`flex flex-col text-[#555] text-caption1 font-semibold hover:text-primary ${
                      isActiveSublink ? "text-primary" : ""
                    }`}
                    onClick={close}
                  >
                    <div
                      className={`p-2 ${
                        data.subtitle?.length - 1 == index ? "pb-2" : ""
                      }`}
                    >
                      {property.title}
                    </div>
                  </Link>
                )
              })}
            </details>
          )
        })}
    </div>
  )
}

export default MobileDropDown
function setIsOpen(arg0: (prevOpen: any) => boolean) {
  throw new Error("Function not implemented.")
}
