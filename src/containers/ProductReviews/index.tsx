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
    // <div className=" px-container p-3 md:p-6">
    //   <div className="flex flex-col gap-5">
    //     <div className="flex justify-center max-sm:py-2">
    //       {reviewData && (
    //         <ProductReviewForm
    //           productDetailData={product}
    //           reviews={reviewData.productReview}
    //         />
    //       )}
    //     </div>
    //     {reviewData.productReview.length > 0 && (
    //       <div className="flex flex-col  gap-4 px-container">
    //         {reviewData.productReview
    //           ?.filter((x) => x.status === "approved")
    //           ?.map((review) => (
    //             <ProductReviewCard key={review.id} data={review} />
    //           ))}
    //       </div>
    //     )}
    //   </div>
    // </div>

    <div className=" px-container p-3 md:p-6">
      <div className="flex flex-col gap-10">
        <div className="flex justify-center max-sm:py-2">
          {reviewData && (
            <ProductReviewForm
              productDetailData={product}
              reviews={reviewData.productReview}
            />
          )}
        </div>
        {
          <div className="flex flex-col  gap-4 px-container">
            {reviewData.productReview
              ?.filter((x) => x.status === "approved")
              ?.map((review) => (
                <ProductReviewCard key={review.id} data={review} />
              ))}
          </div>
        }
      </div>
    </div>
  )
}

export default ProductReviews
