import { log } from "console"
import Image from "next/image"
import React from "react"

type DealsTemplateProps = {
  id: number
  image: string
  title: string
}

const DealCard = ({ deal }: { deal: DealsTemplateProps }) => {
  return (
    <div className="flex flex-col gap-4">
      <div className="relative aspect-[4/3] w-full rounded-xl overflow-hidden">
        <Image src={deal.image} alt="deal" fill className="object-cover" />
      </div>
      <div className="text-center">
        <p>{deal.title}</p>
      </div>
    </div>
  )
}

export default DealCard
