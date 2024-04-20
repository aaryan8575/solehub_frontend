import React from "react"
import SectionHeader from "../common/SectionHeader"
import Image from "next/image"
import { categorydata } from "../../lib/constData"
import Link from "next/link"
const CategoryCard = () => {
  // Dummy data for demonstration

  return (
    <section className="py-8">
      <SectionHeader
        heading="Categories"
        desc="Lorem ipsum dolor sit amet consectetur. Id mauris bibendum mauris maecenas libero etiam id sagittis."
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4  sm:gap-12 md:grid-cols-4 md:gap-14 lg:grid-cols-4 lg:gap-16 mt-6 ">
        {categorydata.map((item) => (
          <Link
            key={item.id}
            className="flex flex-col items-center"
            href={item.link}
          >
            <div className="w-full">
              <Image alt="img" src={item.image} width={332} height={471} />
            </div>
            <p className="mt-2 text-center">{item.title}</p>
          </Link>
        ))}
      </div>
    </section>
  )
}

export default CategoryCard
