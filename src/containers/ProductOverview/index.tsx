import Button from "@/components/common/Button"
import ProductDetails from "@/components/products/ProductDetails"
import ProductOverviewImage from "@/components/products/ProductOverviewImage"
import { ProductProvider } from "@/lib/context/product-context"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import ProductReviews from "../ProductReviews"
import RelatedProduct from "../RelatedProduct"
import Sharebtn from "@/components/common/Sharebtn"

type ProductTemplateProps = {
  product: PricedProduct
  reviewData?: any
}

const ProductOverview = ({ product, reviewData }: ProductTemplateProps) => {
  const sumRating = reviewData.productReview?.reduce((p, c) => {
    if (p.rating) return p.rating + c.rating
    else return c.rating
  }, 0)
  const avgRating = Math.ceil(sumRating / reviewData.productReview?.length)

  return (
    <>
      <ProductProvider product={product}>
        <section className=" sm:pb-20 py-5 relative grid md:grid-cols-2 items-start grid-cols-1 flex-1 gap-5 lg:gap-10">
          <div className="  h-full md:sticky top-0 ">
            <div className=" h-max md:sticky top-[100px]">
              <div className="flex items-center justify-between md:hidden">
                <h3 className="font-bold flex items-center">{product.title}</h3>
                <Button
                  as="a"
                  href="/"
                  variant="round"
                  className="aspect-square px-2 py-2"
                >
                  <Sharebtn />
                </Button>
              </div>
              <div className="w-full">
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
            </div>
          </div>
          <div className="">
            <ProductDetails
              product={product}
              rating={avgRating}
              reviewCount={reviewData.productReview?.length}
            />
          </div>
        </section>
        
        <ProductReviews product={product} reviewData={reviewData} />
        <RelatedProduct productDetailData={product} />
      </ProductProvider>
    </>
  )
}

export default ProductOverview
