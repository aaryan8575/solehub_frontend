"use client"
import { useState } from "react"
import ProductReviewCard from "../ProductReviewCard"
import { reviewProps } from "@/modules/products/templates/product-info"

type Props = {
  reviewData: reviewProps[]
}

const ProductReviewList = ({ reviewData }: Props) => {
  const [reviews, setReviews] = useState(reviewData)
  const [visibleReviews, setVisibleReviews] = useState(5)
  const showMoreReviews = () => {
    setVisibleReviews((prevVisibleReviews) => prevVisibleReviews + 5)
  }

  return (
    <div className="flex flex-col gap-4">
      <h5 className="pt-8 text-primary">Reviews</h5>
      {reviewData && reviewData.length ? (
        <>
          {/* {reviews
            ?.sort(
              (a, b) =>
                new Date(b.created_at).getTime() -
                new Date(a.created_at).getTime()
            )
            .slice(0, visibleReviews)
            .filter((item) => item.title && item.content)
            .filter((item) => item.status === "approved")
            .map((review, index) => (
              <ProductReviewCard key={index} data={review} />
            ))} */}
          {reviews?.length > visibleReviews && (
            <button onClick={showMoreReviews} className="text-primary self-end">
              Show More...
            </button>
          )}
        </>
      ) : (
        <>
          <div className="bg-bg-white/40 border border-primary p-4 rounded-xl">
            <p>No Any Reviews</p>
            <p>Be a first person to review...</p>
          </div>
        </>
      )}
    </div>
  )
}

export default ProductReviewList
