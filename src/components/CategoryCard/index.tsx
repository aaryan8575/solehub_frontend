import React from "react"
import SectionHeader from "../common/SectionHeader"
import Image from "next/image"
import { categorydata } from "../../lib/constData"
const CategoryCard = () => {
  // Dummy data for demonstration

  return (
    <section className="bg-footblack *:text-white">
      <SectionHeader
        heading="Categories"
        desc="Lorem ipsum dolor sit amet consectetur. Id mauris bibendum mauris maecenas libero etiam id sagittis."
      />
      <div className="grid grid-cols-2 gap-4 sm:grid-cols-4  sm:gap-12 md:grid-cols-4 md:gap-14 lg:grid-cols-4 lg:gap-16 mt-6 ">
        {categorydata.map((item) => (
          <div key={item.id} className="flex flex-col items-center">
            <div className="aspect-[3/4] w-full relative">
              <Image
                alt="img"
                src={item.image}
                fill
                className="object-cover rounded-xl"
              />
            </div>
            <p className="mt-2 text-center">{item.title}</p>
          </div>
        ))}
      </div>
    </section>
  )
}

export default CategoryCard
