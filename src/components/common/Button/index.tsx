import React, { cloneElement, memo } from "react"
import clsx from "clsx"
import styles from "./button.module.css"
import LoadingSpinner from "../LoadingSpinner"

type Props = {
  className?: any
  title?: string
  isLoading?: boolean
} & (
  | (React.ButtonHTMLAttributes<HTMLButtonElement> & { as?: "button" })
  | (React.AnchorHTMLAttributes<HTMLAnchorElement> & { as?: "a" })
) &
  (
    | {
        variant?: "fill"
        color?: "primary"
      }
    | {
        variant?: "outlined"
        color?: "dark"
      }
    | {
        variant?: "text"
        color?: "black"
      }
    | {
        variant?: "icon"
      }
  )

const Button = ({
  isLoading,
  variant,
  color,
  as: As = "button",
  className,
  title,
  ...props
}: Props) => {
  return (
    <As
      className={clsx(
        styles.btn,
        {
          [styles[`btn--fill`]]: variant === "fill",
          [styles[`btn--${variant}`]]: !!variant,
          [styles[`btn--${color}`]]: !!color,
        },
        className
      )}
      {...props}
    >
      {isLoading ? (
        <span className="block w-8 aspect-square border-white border-2 border-t-transparent rounded-full animate-spin"></span>
      ) : (
        <>{props.children}</>
      )}
      {title && <span className="sr-only">{title}</span>}
    </As>
  )
}

export default memo(Button)
