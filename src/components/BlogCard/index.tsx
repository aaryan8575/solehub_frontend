import Image from "next/image"
import Link from "next/link"
import React from "react"
import Arrow from "@/public/icons/arrow.svg"

type Props = {}

const BlogCard = ({ data }: Props) => {
  return (
    <div className="border-2 border-gold rounded-xl p-4 text-gray flex flex-col gap-4">
      <div className="relative aspect-[16/9] flex justify-center ">
        <Image alt="img" src={data.image} fill />
      </div>
      <div className="flex items-center justify-between gap-2">
        <p className="font-extrabold text-subtitle1 line-clamp-1">
          {data.title}
        </p>
        <p className="text-xxs text-nowrap">{data.date}</p>
      </div>
      <p className="text-caption2 line-clamp-4">{data.desc}</p>
      <div className="flex items-center justify-between">
        <p className="text-btn">{data.time}</p>
        <Link className="text-gold flex gap-2 items-center" href={data.link}>
          <span>Read More</span>
          <span>
            <Arrow />
          </span>
        </Link>
      </div>
    </div>
  )
}

export default BlogCard
