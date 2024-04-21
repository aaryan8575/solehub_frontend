import CategoryCard from "@/components/CategoryCard"
import NewsLetter from "@/components/NewsLetter"
import HomeBanner from "@/containers/HomeBanner"
import ProductsGrid from "@/containers/ProductsGrid"
import TestimonialCarousel from "@/containers/TestimonialCarousel"
import WhyChooseOurProduct from "@/containers/WhyChooseOurProduct"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Solehub",
  description: "Solehub",
}

export default async function Home() {
  return (
    <>
      <HomeBanner />
      <CategoryCard />
      {/* <OurProduct /> */}
      <ProductsGrid />
      <WhyChooseOurProduct />
      <TestimonialCarousel />
      <NewsLetter />
      {/* <Blogs /> */}
    </>
  )
}
