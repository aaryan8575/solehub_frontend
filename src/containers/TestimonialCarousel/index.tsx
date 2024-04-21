"use client"
import TestimonialCard from "@/components/TestimonialCard"
import { testimonialData } from "@/lib/constData"
import PrevIcon from "@/public/icons/chevron-left.svg"
import NextIcon from "@/public/icons/chevron-right.svg"
import styles from "./testimonialCarousel.module.css"
import Image from "next/image"
import { Swiper, SwiperSlide } from "swiper/react"
import { Navigation } from "swiper/modules"
import "swiper/css"
import "swiper/css/navigation"
import "swiper/css/pagination"
import { EffectCards } from "swiper/modules"
import { useState } from "react"
import clsx from "clsx"

type Props = {}

const TestimonialCarousel = (props: Props) => {
  const [activeSlide, setActiveSlide] = useState(0)
  const [isLastSlide, setIsLastSlide] = useState(false)

  const handleSlideChange = (swiper: any) => {
    setActiveSlide(swiper.realIndex)
    setIsLastSlide(swiper.isEnd)
  }

  return (
    <section className="bg-white text-footblack px-container relative">
      <h2 className={styles.heading}>{testimonialData.heading}</h2>
      {/* <div className={styles.svg_bg}></div> */}
      <div className="relative overflow-visible ">
        <Swiper
          slidesPerView={1}
          modules={[Navigation, EffectCards]}
          effect={"cards"}
          navigation={{
            prevEl: ".testimonial-carousel-prev-btn",
            nextEl: ".testimonial-carousel-next-btn",
          }}
          pagination={{
            clickable: true,
          }}
          cardsEffect={{
            slideShadows: false,
            rotate: false,
          }}
          spaceBetween={20}
          coverflowEffect={{
            rotate: 0,
            stretch: 300,
            depth: 300,
            modifier: 1,
            slideShadows: false,
          }}
          initialSlide={1}
          className={styles.swiper_cs}
          style={{ overflow: "visible" }}
          onSlideChange={(swiper) => handleSlideChange(swiper)}
        >
          {testimonialData.testimonialCards.map((item, i) => (
            <SwiperSlide
              key={item.id}
              className={clsx(
                "bg-footblack text-white rounded-3xl shadow-white shadow-2xl relative swiper-custom-slide",
                {
                  "text-transparent bg-footblack": activeSlide !== i,
                }
              )}
            >
              <div
                className={clsx(
                  "max-w-40 w-[40%] aspect-square absolute top-[0%] left-[50%] translate-x-[-50%] translate-y-[-50%] rounded-full overflow-hidden",
                  {
                    ["hidden"]: activeSlide !== i,
                  }
                )}
              >
                <Image src={item.image} alt="testimonial person" fill />
              </div>
              <TestimonialCard data={item} />
            </SwiperSlide>
          ))}
        </Swiper>
        <button
          type="button"
          className={clsx(
            "testimonial-carousel-prev-btn swiper-custom-navigation-btn -translate-y-[calc(40px+50%)] left-0 disabled:opacity-20"
          )}
        >
          <span className="sr-only">testimonial carousel previous button</span>
          <PrevIcon className={styles.btnIcon} />
        </button>
        <button
          type="button"
          className={clsx(
            "testimonial-carousel-next-btn swiper-custom-navigation-btn -translate-y-[calc(40px+50%)] right-0 "
          )}
        >
          <span className="sr-only ">testimonial carousel next button</span>
          <NextIcon className={styles.btnIcon} />
        </button>
      </div>
    </section>
  )
}

export default TestimonialCarousel
