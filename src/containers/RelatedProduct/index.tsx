"use client"
import style from "./relatedproduct.module.css"
import { memo } from "react"
import { useProducts } from "medusa-react"
import { PricedProduct } from "@medusajs/medusa/dist/types/pricing"
import { ProductProvider } from "@/lib/context/product-context"
import ProductCard from "@/components/products/ProductCard"
import { Swiper, SwiperSlide } from "swiper/react"
import PrevIcon from "@/public/icons/chevron-left.svg"
import NextIcon from "@/public/icons/chevron-right.svg"
import { Navigation, Pagination } from "swiper/modules"

type Props = {
  productDetailData: PricedProduct
}

const RelatedProduct = ({ productDetailData }: Props) => {
  // const { products} = useProducts({
  //   category_id: productDetailData?.categories?.map((x) => x.id),
  // expand: "categories,variants",
  // })
  const SALES_CHANNEL_ID = process.env.NEXT_PUBLIC_SALES_CHANNEL_ID || ""
  const { products: productList } = useProducts({
    sales_channel_id: [SALES_CHANNEL_ID],
    limit: 8,
  })
  const productcollection = productList?.filter(
    (x) => x.collection_id == productDetailData?.collection_id
  )

  const products = productcollection?.filter(
    (x) => x.id !== productDetailData?.id
  )

  return (
    <div className={style.section}>
      <h4 className={style.title}>Related Products</h4>
      {products && products?.length > 0 ? (
        <div className="relative">
          <Swiper
            slidesPerView={1}
            spaceBetween={20}
            breakpoints={{
              425: {
                slidesPerView: 2,
              },
              768: {
                slidesPerView: 3,
              },
              1024: {
                slidesPerView: 4,
                slidesOffsetBefore: 0,
              },
            }}
            pagination={{
              clickable: true,
            }}
            modules={[Navigation, Pagination]}
            navigation={{
              prevEl: ".related-products-carousel-prev-btn",
              nextEl: ".related-products-carousel-next-btn",
            }}
          >
            {products?.map((item) => {
              return (
                <SwiperSlide key={item.id} className="pb-12">
                  <ProductProvider product={item}>
                    <div className="flex justify-center items-center">
                      <ProductCard product={item} />
                    </div>
                  </ProductProvider>
                </SwiperSlide>
              )
            })}
          </Swiper>
          <button
            type="button"
            className="related-products-carousel-prev-btn swiper-custom-navigation-btn -translate-y-[calc(40px+50%)] xl:translate-x-[-50%] left-0 "
          >
            <span className="sr-only">
              related products carousel previous button
            </span>
            <PrevIcon className="w-6 aspect-square" />
          </button>
          <button
            type="button"
            className="related-products-carousel-next-btn swiper-custom-navigation-btn -translate-y-[calc(40px+50%)] xl:translate-x-[50%] right-0"
          >
            <span className="sr-only">
              related products carousel next button
            </span>
            <NextIcon className="w-6 aspect-square" />
          </button>
        </div>
      ) : (
        <section className="text-center py-0">No Related Product Found</section>
      )}
    </div>
  )
}

export default memo(RelatedProduct)
