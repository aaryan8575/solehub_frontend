import React, { useMemo } from "react"
import { medusaClient } from "@/lib/config"
import { Cart } from "@medusajs/medusa"
import { Label, Tooltip, Text, Heading } from "@medusajs/ui"
import { InformationCircleSolid } from "@medusajs/icons"
import Trash from "@/modules/common/icons/trash"
import { formatAmount, useCart, useUpdateCart } from "medusa-react"
import { useForm } from "react-hook-form"
import { useMutation } from "@tanstack/react-query"
import Button from "@/components/common/Button"
import Input from "@/components/common/formElements/Input"

type DiscountFormValues = {
  discount_code: string
}

type DiscountCodeProps = {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">
}

const DiscountCode: React.FC<DiscountCodeProps> = ({ cart }) => {
  const { id, discounts, gift_cards, region } = cart
  const { mutate, isLoading } = useUpdateCart(id)
  const { setCart } = useCart()

  const { isLoading: mutationLoading, mutate: removeDiscount } = useMutation(
    (payload: { cartId: string; code: string }) => {
      return medusaClient.carts.deleteDiscount(payload.cartId, payload.code)
    }
  )

  const appliedDiscount = useMemo(() => {
    if (!discounts || !discounts.length) {
      return undefined
    }

    switch (discounts[0].rule.type) {
      case "percentage":
        return `${discounts[0].rule.value}%`
      case "fixed":
        return `- ${formatAmount({
          amount: discounts[0].rule.value,
          region: region,
        })}`

      default:
        return "Free shipping"
    }
  }, [discounts, region])

  const {
    register,
    handleSubmit,
    setError,
    formState: { errors },
  } = useForm<DiscountFormValues>({
    mode: "onSubmit",
  })

  const onApply = (data: DiscountFormValues) => {
    mutate(
      {
        discounts: [{ code: data.discount_code }],
      },
      {
        onSuccess: ({ cart }) => setCart(cart),
        onError: () => {
          checkGiftCard(data.discount_code)
        },
      }
    )
  }

  const checkGiftCard = (code: string) => {
    mutate(
      {
        gift_cards: [
          { code: code },
          ...gift_cards.map((gc) => ({ code: gc.code })),
        ],
      },
      {
        onSuccess: ({ cart }) => setCart(cart),
        onError: () => {
          setError(
            "discount_code",
            {
              message: "Code is invalid",
            },
            {
              shouldFocus: true,
            }
          )
        },
      }
    )
  }

  const removeGiftCard = (code: string) => {
    mutate(
      {
        gift_cards: [...gift_cards]
          .filter((gc) => gc.code !== code)
          .map((gc) => ({ code: gc.code })),
      },
      {
        onSuccess: ({ cart }) => {
          setCart(cart)
        },
      }
    )
  }

  const onRemove = () => {
    removeDiscount(
      { cartId: id, code: discounts[0].code },
      {
        onSuccess: ({ cart }) => {
          setCart(cart)
        },
      }
    )
  }

  return (
    <div className="w-full flex flex-col">
      <div className="txt-medium">
        {gift_cards.length > 0 && (
          <div className="flex flex-col mb-4">
            <Heading className="txt-medium">Gift card(s) applied:</Heading>
            {gift_cards?.map((gc) => (
              <div
                className="flex items-center justify-between txt-small-plus"
                key={gc.id}
              >
                <Text className="flex gap-x-1 items-baseline">
                  <span>Code: </span>
                  <span className="truncate">{gc.code}</span>
                </Text>
                <Text className="font-semibold">
                  {formatAmount({ region: region, amount: gc.balance })}
                </Text>
                <button
                  className="flex items-center gap-x-2 !background-transparent !border-none"
                  onClick={() => removeGiftCard(gc.code)}
                  disabled={isLoading}
                >
                  <Trash size={14} />
                  <span className="sr-only">Remove gift card from order</span>
                </button>
              </div>
            ))}
          </div>
        )}

        {appliedDiscount ? (
          <div className="w-full flex items-center">
            <div className="flex flex-col w-full">
              <Heading className=" text-caption2 font-semibold">
                Discount applied:
              </Heading>
              <div className="flex items-center justify-between w-full max-w-full border border-primary p-2 rounded-md bg-primary/5">
                <Text className="flex gap-x-1 items-baseline txt-small-plus w-4/5 pr-1 *:text-caption2">
                  <span>Code:</span>
                  <span className="truncate text-primary font-semibold">
                    {discounts[0].code}
                  </span>
                  <span className="min-w-fit font-n">({appliedDiscount})</span>
                </Text>
                <button
                  className="flex items-center"
                  onClick={onRemove}
                  disabled={isLoading}
                >
                  <Trash className="w-5" />
                  <span className="sr-only">
                    Remove discount code from order
                  </span>
                </button>
              </div>
            </div>
          </div>
        ) : (
          <form onSubmit={handleSubmit(onApply)} className="w-full">
            <Label className="flex gap-x-1 mb-2">
              Gift card or discount code?
              <Tooltip content="You can add multiple gift cards, but only one discount code.">
                <InformationCircleSolid color="var(--fg-muted)" />
              </Tooltip>
            </Label>
            <div className="flex flex-col gap-4">
              <Input
                label="Please enter code"
                {...register("discount_code", {
                  required: "Code is required",
                })}
                errors={errors}
              />
              <div>
                <Button variant="fill" color="primary" disabled={isLoading}>
                  {isLoading ? "Applying..." : "Apply Coupon"}
                </Button>
              </div>
            </div>
          </form>
        )}
      </div>
    </div>
  )
}

export default DiscountCode
