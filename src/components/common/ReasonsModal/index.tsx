import { useCallback, useState } from "react"
import { medusaClient } from "@/lib/config"
import clsx from "clsx"
import { useReturnReasons } from "medusa-react"
import MinusIcon from "@/public/icons/minus.svg"
import PlusIcon from "@/public/icons/plus.svg"
import Button from "../Button"
import CounterBtn from "@/components/products/CounterBtn"

export type ReasonsProps = {
  order_id: string
  item_id: string
  quantity: number
}

// type option = {
//   id: Number;
//   name: string;
//   value: string;
// };

type ListProps = {
  quantity: number
  handleChange?: (e: React.ChangeEvent<HTMLSelectElement>) => void
}

type Props = ReasonsProps &
  ListProps & {
    closeModal: () => void
  }

const ReasonsModal = ({ order_id, item_id, quantity, closeModal }: Props) => {
  const [selected, setSelected] = useState<string | undefined>(undefined)
  const [textValue, setTextValue] = useState("")
  const { return_reasons, isLoading } = useReturnReasons()

  const handleTextChange = (event) => {
    setTextValue(event.target.value)
  }

  const [returnItemCount, setreturnItemCount] = useState(1)

  const onReturnSubmit = useCallback(() => {
    medusaClient.returns
      .create({
        order_id,
        items: [
          {
            item_id,
            quantity: returnItemCount,
            reason_id: selected,
            note: textValue,
          },
        ],
      })
      .then((data) => {
        const status = data.return.status
        if (status === "requested") {
          const statusDiv = document.getElementById("statusDiv")
          if (statusDiv) {
            statusDiv.innerText = "Your order return is requested"
          }
        }
      })
      .catch((error) => {
        console.log("error")
        const statusDiv = document.getElementById("statusDiv")
        if (statusDiv) {
          statusDiv.innerText = error.message
        }
      })
      .finally(() => {
        closeModal()
      })
  }, [selected, textValue, closeModal, item_id, order_id, returnItemCount])

  return (
    <div className="bg-white p-5">
      <h5>Enter Return Reasons</h5>
      {return_reasons && !return_reasons.length && (
        <span>No Return Reasons</span>
      )}
      {isLoading && <div id="statusDiv">loading ....</div>}
      {return_reasons?.length &&
        return_reasons?.map((x) => {
          return (
            <div
              key={x?.id}
              onClick={() => setSelected(x.id)}
              className={clsx(
                "cursor-pointer select-none flex items-center gap-5 relative my-3 py-3 hover:bg-primary hover:bg-opacity-5 px-5 border  h-full w-full rounded-2xl",
                {
                  "bg-primary bg-opacity-5": selected === x?.id,
                }
              )}
            >
              <input
                type="radio"
                id={x?.id}
                name={`reasons${x.id}`}
                checked={selected === x?.id}
              />
              <span>{x.label}</span>
            </div>
          )
        })}

      <textarea
        placeholder="Enter Description"
        className="px-4 py-3 outline-none w-full placeholder:font-semibold border focus:border-black border-black rounded-2xl mb-5"
        onChange={handleTextChange}
      />
      {quantity > 1 && (
        <div className="h-12 mb-5 flex gap-5 items-center font-semibold ">
          return items
          <div className="grid grid-cols-3 gap-2 max-sm:gap-4 max-sm:px-2 sm:gap-12 sm:px-4 items-center justify-center place-items-center border border-black rounded-lg overflow-hidden">
            <button
              id="countdecrease"
              aria-label="countdecrease"
              className="text-primary flex-1 items-center"
              onClick={() => {
                setreturnItemCount((c) => c - 1)
              }}
              disabled={returnItemCount <= 1 ? true : false}
            >
              <MinusIcon width="20" height="20" />
            </button>
            <p className="text-subtitle2"> {returnItemCount} </p>
            <button
              id="countincrease"
              aria-label="countincrease"
              className="text-primary flex-1 items-center"
              onClick={() => {
                setreturnItemCount((c) => c + 1)
              }}
              disabled={quantity <= returnItemCount ? true : false}
            >
              <PlusIcon width="20" height="20" />
            </button>
          </div>
        </div>
      )}
      <div className="flex items-center justify-between gap-5">
        <Button onClick={onReturnSubmit} variant="fill" color="primary">
          Submit
        </Button>
        <Button onClick={closeModal} variant="fill" color="primary">
          Close
        </Button>
      </div>
    </div>
  )
}

export default ReasonsModal
