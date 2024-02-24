"use client"
import useToggleState from "@/lib/hooks/use-toggle-state"
import DesktopSearchModal from "@/modules/search/templates/desktop-search-modal"
import SearchIcon from "@/public/icons/Search.svg"
import Link from "next/link"
import { usePathname, useRouter } from "next/navigation"
// import { useRef, useState } from "react"

type Props = {}

const SearchButton = (props: Props) => {
  const pathname = usePathname()
  const router = useRouter()

  // const {
  //   state: searchModalState,
  //   close: searchModalClose,
  //   open: searchModalOpen,
  // } = useToggleState()

  const onLinkClick = () => {
    if (pathname == "/search") {
      router.back()
    } else {
      router.push("/search", { scroll: false })
    }
  }
  return (
    <>
      <div
        onClick={onLinkClick}
        className="flex flex-col justify-center items-center"
      >
        <SearchIcon className="w-5" />
        {/* <p className="text-xs text-footblack max-sm:hidden">Search</p> */}
      </div>

      {/* <DesktopSearchModal
        state={searchModalState}
        close={searchModalClose}
        open={searchModalOpen}
      /> */}
    </>
  )
}

export default SearchButton
