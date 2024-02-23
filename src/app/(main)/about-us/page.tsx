import AboutUsContent from "@/components/AboutUsContent"
import TestimonialCarousel from "@/containers/TestimonialCarousel"
import WhyChooseOurProduct from "@/containers/WhyChooseOurProduct"
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "About Us",
  description: "About our SoleHub",
}

const page = () => {
  return (
    <>
      <AboutUsContent />
      <WhyChooseOurProduct />
      <TestimonialCarousel />
    </>
  )
}

export default page
