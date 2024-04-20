import SectionHeader from "@/components/common/SectionHeader"
import AboutUsBanner from "@/containers/AboutUsBanner"
import TestimonialCarousel from "@/containers/TestimonialCarousel"
import WhyChooseUs from "@/containers/WhyChooseUs"
import { Metadata } from "next"
import React from "react"

export const metadata: Metadata = {
  title: "About Us",
  description: "About our Bea You",
}

const page = () => {
  return (
    <section>
      <SectionHeader heading="Comming Soon..." />
    </section>
  )
}

export default page
