import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import ProductReviewList from "@/components/products/ProductReviewList"
import ProductReviewForm from "@/components/products/ProductReviewForm"
import { reviewProps } from "@/modules/products/templates/product-info"

type Props = {
  product: PricedProduct
  reviewData: reviewProps[]
}

const ProductReviews = ({ reviewData, product }: Props) => {
  if (!process.env.NEXT_PUBLIC_REVIEW) {
    return null
  }
  console.log("reviewdata", reviewData)

  return (
    <section className="grid md:grid-cols-2 gap-6 pb-5">
      <ProductReviewList reviewData={reviewData} />
      {reviewData && (
        <div className="h-max md:sticky top-[50px]">
          <ProductReviewForm productDetailData={product} reviews={reviewData} />
        </div>
      )}
    </section>
  )
}

export default ProductReviews
