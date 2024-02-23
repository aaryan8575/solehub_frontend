"use client"
import {
  Control,
  FieldValue,
  FieldValues,
  useController,
} from "react-hook-form"
import StarIcon from "@/public/icons/star.svg"
import Button from "@/components/common/Button"
import clsx from "clsx"
type Props = {
  name: string
  control: any
}
const RatingInput = ({ name, control }: Props) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
    defaultValue: 4,
  })

  return (
    <div className="flex">
      {[1, 2, 3, 4, 5].map((x) => (
        <Button
          variant="icon"
          key={x}
          onClick={(e: React.MouseEvent<HTMLElement>) => {
            e.preventDefault()
            onChange(x)
          }}
        >
          <StarIcon
            key={x}
            className={clsx("h-5 w-5 flex-shrink-0", {
              ["fill-primary"]: x <= value,
              ["fill-transparent"]: x > value,
            })}
            aria-hidden="true"
          />
        </Button>
      ))}
    </div>
  )
}

export default RatingInput
