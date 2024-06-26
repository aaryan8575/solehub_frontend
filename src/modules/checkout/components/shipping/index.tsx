import { useCheckout } from "@/lib/context/checkout-context"
import { Heading, Text, clx } from "@medusajs/ui"
import { CheckCircleSolid } from "@medusajs/icons"
import Spinner from "@/modules/common/icons/spinner"
import Divider from "@/modules/common/components/divider"
import { useForm } from "react-hook-form"
import { RadioGroup } from "@headlessui/react"
import Radio from "@/modules/common/components/radio"
import { ErrorMessage } from "@hookform/error-message"
import { formatAmount, useCart, useCartShippingOptions } from "medusa-react"
import { memo, useEffect, useMemo, useState } from "react"
import { Cart } from "@medusajs/medusa"
import Button from "@/components/common/Button"
import Edit from "@/public/icons/edit.svg"

type ShippingOption = {
  value?: string
  label?: string
  price: string
}

type ShippingProps = {
  cart: Omit<Cart, "refundable_amount" | "refunded_total">
}

const Shipping: React.FC<ShippingProps> = ({ cart }) => {
  const {
    editAddresses: { state: isAddressesOpen, close: closeAddresses },
    editShipping: { state: isOpen, open, close },
    editPayment: {
      state: isPaymentOpen,
      open: openPayment,
      close: closePayment,
    },
    addressReady,
    shippingReady,
  } = useCheckout()

  const currentShippingOption =
    cart.shipping_methods?.[0]?.shipping_option.id || ""

  const [shippingOptionId, setShippingOptionId] = useState(
    currentShippingOption
  )
  const { addShippingMethod, setCart } = useCart()
  const {
    setError,
    formState: { errors },
  } = useForm()
  // Fetch shipping options
  const { shipping_options, refetch } = useCartShippingOptions(cart.id, {
    enabled: !!cart.id,
  })

  // Any time the cart changes we need to ensure that we are displaying valid shipping options
  useEffect(() => {
    const refetchShipping = async () => {
      await refetch()
    }

    // if (shippingMethods.length === 1 && shippingMethods[0].value) {
    //   setShippingOptionId(shippingMethods[0].value)
    //   submitShippingOption(shippingOptionId)
    // }

    refetchShipping()
  }, [cart, refetch])

  const submitShippingOption = (soId: string) => {
    addShippingMethod.mutate(
      { option_id: soId },
      {
        onSuccess: ({ cart }) => {
          setCart(cart)
          close()
          openPayment()
        },
        onError: () =>
          setError(
            "soId",
            {
              type: "validate",
              message:
                "An error occurred while adding shipping. Please try again.",
            },
            { shouldFocus: true }
          ),
      }
    )
  }

  const handleChange = (value: string) => {
    setShippingOptionId(value)
  }

  const handleEdit = () => {
    open()
    closeAddresses()
    closePayment()
  }

  const editingOtherSteps = isAddressesOpen || isPaymentOpen

  // Memoized shipping method options
  const shippingMethods: ShippingOption[] = useMemo(() => {
    if (shipping_options && cart?.region) {
      return shipping_options?.map((option) => ({
        value: option.id,
        label: option.name,
        price: formatAmount({
          amount: option.amount || 0,
          region: cart.region,
        }),
      }))
    }

    return []
  }, [shipping_options])

  // if (shippingMethods.length === 1) {
  //   return null
  // }
  useEffect(() => {
    if (shippingMethods.length === 1) {
      submitShippingOption(shippingMethods[0].value!)
    }
  }, [shippingMethods])

  if (shippingMethods.length === 1) {
    return null
  }
  return (
    <div className="bg-white">
      <div className="flex flex-row items-center justify-between ">
        <h2
          className={clx("flex flex-row text-subtitle1 gap-x-2 items-center", {
            "opacity-50 pointer-events-none select-none":
              editingOtherSteps && !shippingReady,
          })}
        >
          Delivery
          <span className="text-primary">
            {!isOpen && currentShippingOption && shippingReady && (
              <CheckCircleSolid />
            )}
          </span>
        </h2>
        {!isOpen && addressReady && (
          <Button onClick={handleEdit} variant="icon" className="text-primary">
            <Edit className="w-6" />
          </Button>
        )}
      </div>
      {!editingOtherSteps && isOpen ? (
        <div className="pb-8">
          <div>
            <RadioGroup
              value={shippingOptionId}
              onChange={(value: string) => handleChange(value)}
            >
              {shippingMethods && shippingMethods.length ? (
                shippingMethods.map((option) => {
                  return (
                    <RadioGroup.Option
                      key={option.value}
                      value={option.value}
                      className={clx(
                        "flex items-center justify-between text-small-regular cursor-pointer py-4 border bg-primary bg-opacity-5 border-primary rounded-rounded px-8 mb-2 hover:shadow-md",
                        {
                          "shadow-md": option.value === shippingOptionId,
                        }
                      )}
                    >
                      <div className="flex items-center gap-x-4">
                        <Radio checked={shippingOptionId === option.value} />
                        <span className="text-base-regular">
                          {option.label}
                        </span>
                      </div>
                      <span className="justify-self-end text-gray-700">
                        {option.price}
                      </span>
                    </RadioGroup.Option>
                  )
                })
              ) : (
                <div className="flex flex-col items-center justify-center px-4 py-8 text-gray-900">
                  <Spinner />
                </div>
              )}
            </RadioGroup>
            <ErrorMessage
              errors={errors}
              name="soId"
              render={({ message }) => {
                return (
                  <div className="pt-2 text-rose-500 text-small-regular">
                    <span>{message}</span>
                  </div>
                )
              }}
            />
          </div>

          <Button
            variant="fill"
            color="primary"
            onClick={() => submitShippingOption(shippingOptionId)}
          >
            Continue to Payment
          </Button>
        </div>
      ) : (
        <div>
          <div className="text-small-regular">
            {cart && shippingReady && (
              <div className="flex flex-col w-1/3">
                <Text className="txt-medium font-semibold mb-1">Method</Text>
                <Text className="txt-medium">
                  {cart.shipping_methods[0].shipping_option.name} (
                  {formatAmount({
                    amount: cart.shipping_methods[0].price,
                    region: cart.region,
                  })
                    .replace(/,/g, "")
                    .replace(/\./g, ",")}
                  )
                </Text>
              </div>
            )}
          </div>
        </div>
      )}
      <Divider className="mt-8" />
    </div>
  )
}

export default Shipping
