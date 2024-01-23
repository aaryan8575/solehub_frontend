import Image from "next/image"
import React from "react"
import style from "./whychooseus.module.css"
import { whyChooseUs } from "@/lib/constData"
import ServiceCard from "@/components/ServiceCard"

type Props = {}

const WhyChooseUs = (props: Props) => {
  return (
    <section className="pt-20">
      <div className={style.container}>
        <div className={style.contentWrapper}>
          <div className={style.headingWrapper}>
            <h3 className="text-heading4">{whyChooseUs.heading}</h3>
            <p>{whyChooseUs.description}</p>
          </div>
          <div className={style.servicesWrapper}>
            {whyChooseUs &&
              whyChooseUs.services?.slice(0, 4).map((item) => {
                return <ServiceCard key={item.id} data={item} />
              })}
          </div>
        </div>
        <div className={style.imageWrapper}>
          <div className={style.image}>
            <Image
              src={whyChooseUs.image}
              alt="why choose us image"
              fill
              style={{ objectFit: "cover" }}
              className="rounded-2xl z-10"
            />
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseUs
