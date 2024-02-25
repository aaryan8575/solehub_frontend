"use client"
import Button from "@/components/common/Button"
import { useStore } from "@/lib/context/store-context"
import Modal from "@/modules/common/components/modal"
import Trash from "@/public/icons/trash.svg"
import { Dialog } from "@headlessui/react"
import { useState } from "react"
import RemoveModal from "../../common/RemoveModal"
import CancelIcon from "@/public/icons/cancel.svg"

const RemoveFromCartBtn = ({ id }: { id: string }) => {
  const { deleteItem } = useStore()
  const [showModal, setShowModal] = useState<boolean>(false)

  const closeModal = () => {
    setShowModal(false)
  }

  const openModal = () => {
    setShowModal(true)
  }

  const removeItem = () => {
    deleteItem(id)
    setShowModal(false)
  }

  return (
    <>
      <button className="flex items-center gap-x-1" onClick={openModal}>
        <span className="sr-only">Remove</span>
        <Trash className="h-6 w-6 hover:text-rose-500" />
        {/* <CancelIcon className="w-6 h-6" /> */}
      </button>
      <RemoveModal
        showModal={showModal}
        closeModal={closeModal}
        removeItem={removeItem}
        button_name="Remove"
      />
    </>
  )
}

export default RemoveFromCartBtn
