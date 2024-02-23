"use client"
import Button from "@/components/common/Button"
import Input from "@/components/common/formElements/Input"
import TextArea from "@/components/common/formElements/TextArea"
import { createProductReview } from "@/lib/data"
import { reviewProps } from "@/modules/products/templates/product-info"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import Link from "next/link"
import { useState } from "react"
import { SubmitHandler, useForm } from "react-hook-form"
import RatingInput from "@/components/products/RatingInput"

type Inputs = {
  content: string
  title: string
  rating: number
}

type Props = {
  productDetailData: PricedProduct
  reviews: reviewProps[]
  customer: any
}

const ProductReviewForm = ({ productDetailData, reviews, customer }: Props) => {
  const {
    control,
    register,
    handleSubmit,
    reset,
    watch,
    formState: { errors, isSubmitting },
  } = useForm<Inputs>()
  const [reviewList, setReviewList] = useState(reviews)
  const isReviewAdded = reviewList
  // ?.find(
  //   (x) => x?.customer_id === customer?.id && x.status !== "declined"
  // )
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

        setReviewList((prev) => [...prev, response?.productReview])
      }
    } catch (error) {
      console.log("ERROR:::::", error)
    } finally {
      reset()
    }
  }
  return (
    <div>
      <h5 className="pt-8 pb-4 text-primary">Leave a Review</h5>
      <>
        {!customer ? (
          <>
            {isReviewAdded?.status === "pending" && (
              <p className="bg-secondary border border-primary p-4 rounded-xl">
                Your response is under review !!!!!
              </p>
            )}
            {isReviewAdded?.status === "approved" && (
              <div className="bg-secondary border border-primary text-primary p-4 rounded-xl">
                <p>Your review has been added!!!</p>
              </div>
            )}
            {
              <>
                <form
                  className="flex flex-col gap-6"
                  onSubmit={handleSubmit(onSubmit)}
                >
                  <RatingInput control={control} name={"rating"} />

                  <Input
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
                    placeholder="Enter Your Review"
                    rows={5}
                    errors={errors}
                    autoComplete="Description"
                    className="border-2 placeholder:text-primary/60"
                    {...register("content", {
                      required: {
                        message: "Review is required...",
                        value: true,
                      },
                    })}
                  />
                  <Button
                    variant="fill"
                    color="primary"
                    type="submit"
                    isLoading={isSubmitting}
                  >
                    <span className="sr-only">Submit review</span>
                    Submit
                  </Button>
                </form>
              </>
            }
          </>
        ) : (
          <div className="flex flex-col gap-4 bg-white/40 border border-primary text-primary p-4 rounded-xl">
            <p>Please Login to add a review</p>
            <Link
              href={"/account"}
              scroll={false}
              className="px-3 py-2 bg-primary text-white rounded-md w-max duration-300 hover:scale-95"
            >
              Click to Login
            </Link>
          </div>
        )}
      </>
    </div>
  )
}

export default ProductReviewForm
