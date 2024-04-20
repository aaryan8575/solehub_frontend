"use client"
import Button from "@/components/common/Button"
import Input from "@/components/common/formElements/Input"
import TextArea from "@/components/common/formElements/TextArea"
import RatingInput from "../RatingInput"
import { useForm, SubmitHandler } from "react-hook-form"
import { useAccount } from "@/lib/context/account-context"
import { createProductReview } from "@/lib/data"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import LoadingSpinner from "@/components/common/LoadingSpinner"
import Link from "next/link"
import Rating from "../Rating"
import { useState } from "react"
import useToggleState from "@/lib/hooks/use-toggle-state"
import Modal from "@/modules/common/components/modal"
import OpenModal from "@/components/common/OpenModal"

type Inputs = {
  content: string
  title: string
  rating: number
}

type Props = {
  productDetailData: PricedProduct
  reviews: any
}

const ProductReviewForm = ({ productDetailData, reviews }: Props) => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>()

  const { customer, retrievingCustomer } = useAccount()
  const [reviewList, setReviewList] = useState(reviews)
  const { state, open, close } = useToggleState()

  const isReviewAdded = reviewList?.find(
    (x: { customer_id: string | undefined; status: string }) =>
      x?.customer_id === customer?.id && x.status !== "declined"
  )

  const onSubmit: SubmitHandler<Inputs> = async ({
    content,
    title,
    rating,
  }: {
    content: string
    title: string
    rating: number
  }) => {
    try {
      const data = {
        content,
        title,
        customer_id: customer?.id,
        product_id: productDetailData?.id as string,
        rating,
      }
      if (data.customer_id && data.product_id) {
        const response = await createProductReview(data)

        setReviewList((prev: any) => [...prev, response?.productReview])
        setProductHandle((prev) => ({
          ...prev,
          reviews: [...prev.reviews, response?.productReview],
        }))
      }
    } catch (error) {
      console.log("ERROR:::::", error)
    } finally {
      reset()
    }
  }

  if (retrievingCustomer) {
    return (
      <div className="h-full flex flex-col justify-center items-center gap-4">
        <LoadingSpinner />
        <span>Loading...</span>
      </div>
    )
  }

  const sumRating = reviews?.reduce((p, c) => {
    if (p.rating) return p.rating + c.rating
    else return c.rating
  }, 0)
  const avgRating = Math.ceil(sumRating / reviews?.length)

  return (
    <div>
      <div className="justify center flex flex-col items-center ">
        <div className="text-heading3 text-bold">Read the reviews</div>
        <div className="text-caption1 text-gray">Rated</div>
        <div className=" flex py-2">
          <Rating rating={avgRating} />
        </div>
        <div className="text-caption1 text-gray pb-4">
          from {reviews?.length} reviews
        </div>
        <div className="w-full">
          {customer ? (
            <>
              {isReviewAdded?.status === "pending" && (
                <p className="bg-floralWhite border border-primary p-4 rounded-xl">
                  Your response is under review !!!!!
                </p>
              )}
              {isReviewAdded?.status === "approved" && (
                <div className="bg-floralWhite border border-primary text-green p-4 rounded-xl">
                  <p>Your review has been added!!!</p>
                </div>
              )}
              {!isReviewAdded && (
                <>
                  <button
                    onClick={open}
                    className="w-full text-gray bg-white border-2 border-gray py-2 rounded-md"
                  >
                    Write a Review
                  </button>

                  <Modal isOpen={state} close={close} type="full">
                    <>
                      <h4>Write a Review</h4>
                      <form
                        className=" w-screen max-w-screen-sm "
                        onSubmit={handleSubmit(onSubmit)}
                      >
                        <div className="w-[90%] md:w-[100%] flex flex-col gap-6">
                          <Input
                            className=""
                            placeholder="Enter Title"
                            type="text"
                            errors={errors}
                            {...register("title", {
                              required: {
                                message: "title is required...",
                                value: true,
                              },
                              maxLength: {
                                value: 50,
                                message: "title is too long",
                              },
                              minLength: {
                                value: 2,
                                message: "title is too short",
                              },
                            })}
                          />
                          <TextArea
                            placeholder="Enter you Review"
                            rows={5}
                            errors={errors}
                            autoComplete="Description"
                            {...register("content", {
                              required: {
                                message: "Review is required...",
                                value: true,
                              },
                            })}
                          />
                          <RatingInput control={control} name={"rating"} />
                          <Button
                            variant="fill"
                            color="primary"
                            type="submit"
                            disabled={isSubmitting}
                          >
                            <span className="sr-only">Submit review</span>
                            {/* <SendIcon /> */}
                            {isSubmitting ? <LoadingSpinner /> : "Submit"}
                          </Button>
                        </div>
                      </form>
                    </>
                  </Modal>
                </>
              )}
            </>
          ) : (
            <div className="flex flex-col gap-4   text-green p-4 rounded-xl">
              <div className="flex justify-center">
                Please Login to add a review
              </div>
              <div className="flex justify-center">
                <Link
                  href={"/login"}
                  scroll={false}
                  className="px-3 py-2 bg-primary text-white rounded-md w-max duration-300 hover:scale-95 "
                >
                  Click to Login
                </Link>
              </div>
            </div>
          )}
        </div>
      </div>
    </div>
  )
}

export default ProductReviewForm
function setProductHandle(arg0: (prev: any) => any) {
  throw new Error("Function not implemented.")
}
