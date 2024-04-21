"use client"
import Image from "next/image"
import Button from "../Button"
import { BannerPropsType } from "@/utils/types"

// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react"
// import required modules
import { Pagination } from "swiper/modules"
// Import Swiper styles
import "swiper/css"
import "swiper/css/pagination"
// import "swiper/css/navigation"

const Banner = ({ data }: { data: any }) => {
  return (
    <>
      <Swiper
        slidesPerView={1}
        loop={true}
        modules={[Pagination]}
        pagination={true}
        // onSlideChange={() => console.log('slide change')}
        // onSwiper={(swiper) => console.log(swiper)}
        className="h-[calc(100vh-64px)] lg:h-[calc(100vh-128px)]"
      >
        {data.map((item: any) => {
          return (
            // <SwiperSlide> <div>sliddde</div> </SwiperSlide>
            <SwiperSlide key={item.id}>
              <section className="relative bg-orange-200 w-full h-full">
                <Image
                  alt={`home page banner with heading ${item.heading}`}
                  fill
                  sizes="100vw"
                  className="object-cover object-center max-md:hidden w-full aspect-[16/9]"
                  src={item.backgroundBannerImage}
                />
                <Image
                  alt={`home page banner with heading ${item.heading}`}
                  fill
                  sizes="100vw"
                  className="object-cover object-center md:hidden w-full aspect-[9/16]"
                  src={item.backgroundBannerImageMobile}
                />
                <div className="absolute flex flex-col gap-3 md:gap-5 text-center top-1/2 h-fit w-fit left-1/2  -translate-x-1/2 -translate-y-1/2 ">
                  <h3 className="min-w-64 text-primary">{item.heading}</h3>
                  <p className="line-clamp-2 text-primary text-caption1">
                    {item.description}
                  </p>
                  <div className="flex gap-2 w-full justify-center">
                    {/* {item.actionBtn1 && (
                      <Button variant="fill" color="primary">
                        <p className="text-caption1">{item.actionBtn1}</p>
                      </Button>
                    )} */}

                    {item.actionBtn2 && (
                      <Button
                        as="a"
                        variant="fill"
                        color="primary"
                        href="/products"
                      >
                        <p className="text-caption1">{item.actionBtn2}</p>
                      </Button>
                    )}
                  </div>
                </div>
              </section>
              <div className="h-10 w-full"></div>
            </SwiperSlide>
          )
        })}
      </Swiper>
    </>
  )
}

export default Banner
