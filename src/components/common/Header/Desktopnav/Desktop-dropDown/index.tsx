"use client"
import { dropDownDataType } from "@/utils/types"
import Link from "next/link"
import React, { useEffect, useState } from "react"
import { usePathname } from "next/navigation"
import Styles from "./desktopdropdown.module.css"

const DesktopDropDown = ({
  options,
  dropdown,
}: {
  dropdown: dropDownDataType
}) => {
  const [openMenu, setOpenMenu] = useState(null)

  const toggleMenu = (index) => {
    setOpenMenu(openMenu === index ? null : index)
  }

  const closeMenu = () => {
    setOpenMenu(null)
  }
  const pathname = usePathname()

  useEffect(() => {
    const handleDocumentClick = (event) => {
      // Check if the click occurred outside the menu
      if (
        openMenu !== null &&
        event.target.closest(`#menu-button-${openMenu}`) === null
      ) {
        closeMenu()
      }
    }

    // Add the event listener when the component mounts
    document.addEventListener("click", handleDocumentClick)

    // Remove the event listener when the component unmounts
    return () => {
      document.removeEventListener("click", handleDocumentClick)
    }
  }, [openMenu]) // Re-run the effect when openMenu changes

  return (
    <div className={Styles.main}>
      {dropdown &&
        dropdown.navData.map((option, index) => {
          const isActiveLink = pathname === option.url
          return (
            <div key={index} className={Styles.subdiv}>
              {option.subtitle ? (
                <>
                  {/* <Link href={option.url ?? ""}> */}
                  <button
                    type="button"
                    className={`${Styles.buttontag} ${
                      isActiveLink ? "text-primary" : "text-gray-900"
                    } `}
                    id={`menu-button-${index}`}
                    aria-expanded={openMenu === index}
                    aria-haspopup="true"
                    onClick={() => toggleMenu(index)}
                  >
                    {option.title}
                    {option.subtitle && (
                      <svg
                        className={`-mr-1 h-5 w-5 text-gray-400 transform ${
                          openMenu === index ? "rotate-180" : ""
                        }`}
                        viewBox="0 0 20 20"
                        fill="currentColor"
                        aria-hidden="true"
                      >
                        <path
                          fillRule="evenodd"
                          d="M5.23 7.21a.75.75 0 011.06.02L10 11.168l3.71-3.938a.75.75 0 111.08 1.04l-4.25 4.5a.75.75 0 01-1.08 0l-4.25-4.5a.75.75 0 01.02-1.06z"
                          clipRule="evenodd"
                        />
                      </svg>
                    )}
                  </button>
                  {/* </Link> */}

                  {openMenu === index && (
                    <div className={Styles.openMenuDiv}>
                      <div className="py-1" role="none">
                        {option.subtitle?.map((item, itemIndex) => {
                          const isActiveSublink = pathname === item.url
                          return (
                            <a
                              key={itemIndex}
                              href={item.url}
                              className={`${Styles.anchortag} ${
                                isActiveSublink ? "text-primary" : ""
                              }`}
                              role="menuitem"
                              tabIndex="-1"
                            >
                              {item.title}
                            </a>
                          )
                        })}
                      </div>
                    </div>
                  )}
                </>
              ) : (
                // Render only the title if there are no subtitles
                <div>
                  <button
                    type="button"
                    className={Styles.renderButton}
                    id={`menu-button-${index}`}
                  >
                    <Link
                      href={option.url ?? ""}
                      className={`${Styles.link} ${
                        isActiveLink ? "text-primary" : "text-gray-900"
                      }`}
                    >
                      {option.title}
                    </Link>
                  </button>
                </div>
              )}
            </div>
          )
        })}
    </div>
  )
}

export default DesktopDropDown
