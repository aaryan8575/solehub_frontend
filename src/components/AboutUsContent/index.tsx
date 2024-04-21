import React from "react"
import { aboutUsContent } from "@/lib/constData"

type Props = {}

const AboutUsContent: React.FC<Props> = (props: Props) => {
  return (
    <section>
      {aboutUsContent?.map((item) => {
        return (
          <div key={item.id} className="py-4">
            <p className="text-heading4 font-semibold">{item.title}</p>
            <p className="text-body2">{item.description}</p>
          </div>
        )
      })}
      <p className="text-center font-bold text-heading6 py-4">
        Thank you for choosing SoleHub - where every step is a statement!
      </p>
    </section>
  )
}

export default AboutUsContent
