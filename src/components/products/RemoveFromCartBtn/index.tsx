"use client"
import Button from "@/components/common/Button"
import { useStore } from "@/lib/context/store-context"
import Modal from "@/modules/common/components/modal"
import Trash from "@/modules/common/icons/trash"
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
        {/* <Trash size={14} />
        <span>Remove</span> */}
        <CancelIcon className="w-6 h-6" />
      </button>
      <RemoveModal
        showModal={showModal}
        closeModal={closeModal}
        removeItem={removeItem}
      />
    </>
  )
}

export default RemoveFromCartBtn
