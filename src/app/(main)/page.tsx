import Blogs from "@/containers/BlogSection"
import CategoryCard from "@/components/CategoryCard"
import NewsLetter from "@/components/NewsLetter"
import HomeBanner from "@/containers/HomeBanner"
import OurProduct from "@/containers/OurProduct"
import ProductsGrid from "@/containers/ProductsGrid"
import TestimonialCarousel from "@/containers/TestimonialCarousel"
import WhyChooseOurProduct from "@/containers/WhyChooseOurProduct"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Fleurveda",
  description: "Fleurveda",
  // description:
  //   "High-performance ecommerce store built with Next.js, Vercel, and Medusa.",
  // openGraph: {
  //   type: "website",
  // },
}

export default async function Home() {
  return (
    <>
      <HomeBanner />
      <CategoryCard />
      <OurProduct />
      <ProductsGrid />
      <WhyChooseOurProduct />
      <TestimonialCarousel />
      <NewsLetter />
      <Blogs />
    </>
  )
}
