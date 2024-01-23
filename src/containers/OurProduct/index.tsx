import React from "react"
import OurProducts from "@/components/ourProducts"
import Leaf from "@/public/icons/leaf.svg"
import SectionHeader from "@/components/common/SectionHeader"

// const data = [
//   {
//     id: "1",
//     icon: <Leaf />,
//     title: "Natural",
//   },
//   {
//     id: "2",
//     icon: <Leaf />,
//     title: "Cruelty-free",
//   },
//   {
//     id: "3",
//     icon: <Leaf />,
//     title: "Parabens-Free",
//   },
//   {
//     id: "4",
//     icon: <Leaf />,
//     title: "Sulphate-Free",
//   },
//   {
//     id: "4",
//     icon: <Leaf />,
//     title: "No Harsh Chemicals",
//   },
//   {
//     id: "4",
//     icon: <Leaf />,
//     title: "No Artificial Fragrances",
//   },
// ]

const OurProduct = () => {
  return (
    <section className="px-container bg-secondary flex flex-col gap-8">
      <SectionHeader heading="Our Products are" />
      <div className="flex justify-between items-center max-md:flex-col">
        {data.map((item) => (
          <OurProducts key={item.id} data={item} />
        ))}
      </div>
    </section>
  )
}

export default OurProduct
