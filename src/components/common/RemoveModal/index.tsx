import Button from "@/components/common/Button"
import Modal from "@/modules/common/components/modal"
import React from "react"
// import ReasonsModal from "../ReasonsModal"

type Props = {
  showModal: boolean
  closeModal: () => void
  removeItem: () => void
  title: string
  description: string
  button_name: string
}

const RemoveModal = ({
  showModal,
  closeModal,
  removeItem,
  title,
  button_name,
  description,
}: Props) => {
  return (
    <Modal size="small" isOpen={showModal} close={closeModal}>
      <p className="text-heading5 mb-4">Remove item?</p>
      <p className="text-caption1 text-gray-500">
        Are you sure you would like to remove?
      </p>

      <div className="mt-4 flex gap-4 justify-center items-center flex-wrap">
        <Button
          variant="outlined"
          color="dark"
          className=""
          onClick={closeModal}
        >
          Cancel
        </Button>
        <Button
          variant="fill"
          color="primary"
          className="duration-300"
          onClick={removeItem}
        >
          {button_name}
        </Button>
      </div>
    </Modal>
  )
}

export default RemoveModal
