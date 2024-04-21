"use client"
import React from "react"
import Share from "@/public/icons/share.svg"
import { toast } from "react-toastify"
import useShare from "@/lib/hooks/useShare"
type ShareProps = {
  url: string
}
const ShareButton = ({ url }: ShareProps) => {
  const { share, isSupported, isReady, isShared } = useShare({
    onSuccess: () => {
      toast.success("Sharing successful!")
    },
    onError: (error) => {
      toast.error("Error sharing:", error)
    },
    fallback: () => {
      toast.success("Fallback sharing method used.")
    },
  })

  const handleClick = () => {
    if (isSupported && isReady) {
      share({
        title: "Example Title",
        text: "Example Text",
        url: `${url}`,
      })
    } else {
      toast.error("Sharing not supported or ready.")
    }
  }

  return (
    <>
      <button
        type="button"
        onClick={handleClick}
        disabled={!isSupported || isShared}
        className="self-center"
      >
        <Share className="w-6" />
      </button>
    </>
  )
}

export default ShareButton
