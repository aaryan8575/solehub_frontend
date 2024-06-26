import Button from "@/components/common/Button"
import ProductDetails from "@/components/products/ProductDetails"
import ProductOverviewImage from "@/components/products/ProductOverviewImage"
import { ProductProvider } from "@/lib/context/product-context"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import Share from "@/public/icons/share.svg"
import ProductReviews from "../ProductReviews"
import ShareButton from "@/components/common/ShareBtn"
import RelatedProduct from "../RelatedProduct"

type ProductTemplateProps = {
  product: PricedProduct
  reviewData?: any
}

const ProductOverview = ({ product, reviewData }: ProductTemplateProps) => {
  const sumRating = reviewData?.productReview?.reduce((p, c) => {
    if (p.rating) return p.rating + c.rating
    else return c.rating
  }, 0)
  const avgRating = Math.ceil(sumRating / reviewData?.productReview?.length)

  return (
    <>
      <ProductProvider product={product}>
        <section className="relative sm:mt-0 mt-4 grid md:grid-cols-2 items-start grid-cols-1 flex-2 gap-5 lg:gap-20">
          <div className="h-max md:sticky top-[100px]">
            <div className="flex items-center pb-4 justify-between md:hidden">
              <h3 className="font-bold m-0">{product.title}</h3>
              <ShareButton url="" />
            </div>
            <ProductOverviewImage
              productImagesData={[
                {
                  id: `${product.title}-thumbnail`,
                  url: product?.thumbnail,
                },
                ...product.images,
              ]}
            />
          </div>
          <div className="">
            <ProductDetails
              product={product}
              rating={avgRating}
              reviewCount={reviewData?.productReview?.length}
            />
          </div>
        </section>
        {/* <ProductReviews product={product} reviewData={reviewData} /> */}
        <RelatedProduct productDetailData={product} />
      </ProductProvider>
    </>
  )
}

export default ProductOverview
