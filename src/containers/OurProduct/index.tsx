import React from "react"
import OurProducts from "@/components/ourProducts"
import Leaf from "@/public/icons/leaf.svg"
import SectionHeader from "@/components/common/SectionHeader"
import CrueltyFree from "@/public/icons/crueltyfree.svg"
import ParabensFree from "@/public/icons/parabensfree.svg"
import SulphateFree from "@/public/icons/sulphatefree.svg"
import NoHarshChemicals from "@/public/icons/noharshchemecals.svg"
import NoArtificialFragrances from "@/public/icons/noartificialfragrances.svg"

const data = [
  {
    id: "1",
    icon: <Leaf />,
    title: "Natural",
  },
  {
    id: "2",
    icon: <CrueltyFree />,
    title: "Cruelty-free",
  },
  {
    id: "3",
    icon: <ParabensFree />,
    title: "Parabens-Free",
  },
  {
    id: "4",
    icon: <SulphateFree />,
    title: "Sulphate-Free",
  },
  {
    id: "5",
    icon: <NoHarshChemicals />,
    title: "No Harsh Chemicals",
  },
  {
    id: "6",
    icon: <NoArtificialFragrances />,
    title: "No Artificial Fragrances",
  },
]

const OurProduct = () => {
  return (
    <section className="px-container bg-secondary flex flex-col gap-6 py-8">
      <SectionHeader heading="Our Products are" />
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6">
        {data.map((item) => (
          <OurProducts key={item.id} data={item} />
        ))}
      </div>
    </section>
  )
}

export default OurProduct
