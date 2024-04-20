"use client"
import React from "react"
import Button from "../Button"
import Share from "@/public/icons/share.svg"
import { usePathname } from "next/navigation"

type Props = {}

const Sharebtn = (props: Props) => {
  const pathname = usePathname()

  const handleShareClick = () => {
    if (navigator.share) {
      navigator
        .share({
          title: "Share this page",
          text: "Check out this page!",
          url: pathname,
        })
        .then(() => console.log("Share successful"))
        .catch((error) => console.error("Error sharing:", error))
    } else {
      console.warn("Web Share API not supported in this browser")
    }
  }
  return (
    <Button onClick={handleShareClick} variant="text" className="!px-2 !py-0">
      <Share className="w-6" />
    </Button>
  )
}

export default Sharebtn
