"use client"
import { useState } from "react"
import StarIcon from "@/public/icons/star.svg"
import clsx from "clsx"
import Button from "@/components/common/Button"
import { useController } from "react-hook-form"

const Rating = ({ name, control }) => {
  const {
    field: { onChange, value },
  } = useController({
    name,
    control,
    defaultValue: 0,
  })

  return (
    <div className="flex gap-2">
      {[1, 2, 3, 4, 5].map((x) => (
        <button
          key={x}
          onClick={(e) => {
            e.preventDefault()
            onChange(x)
          }}
        >
          <StarIcon
            key={x}
            className={clsx("h-5 w-5  flex-shrink-0", {
              ["text-primary"]: x <= value,
              ["text-gray/20"]: x > value,
            })}
            aria-hidden="true"
          />
        </button>
      ))}
    </div>
  )
}

export default Rating
