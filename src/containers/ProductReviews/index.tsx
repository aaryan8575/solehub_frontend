"use client"
import ProductReviewCard from "@/components/products/ProductReviewCard"
import ProductReviewForm from "@/components/products/ProductReviewForm"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"

type Props = {
  product: PricedProduct
  reviewData: any
}

const ProductReviews = ({ reviewData, product }: Props) => {
  if (!process.env.NEXT_PUBLIC_REVIEW) {
    return null
  }
  return (
    <>
      <section className="flex justify-center">
        {reviewData && (
          <ProductReviewForm
            productDetailData={product}
            reviews={reviewData.productReview}
          />
        )}
      </section>
      <section className="flex flex-col  gap-4">
        {reviewData.productReview
          ?.filter((x) => x.status === "approved")
          ?.map((review) => (
            <ProductReviewCard key={review.id} data={review} />
          ))}
      </section>
    </>
  )
}

export default ProductReviews
