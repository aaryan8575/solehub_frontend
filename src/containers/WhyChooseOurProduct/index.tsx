import React from "react"
import LeafPrimary from "@/public/icons/leafprimary.svg"
import SectionHeader from "@/components/common/SectionHeader"
import Image from "next/image"
import Leaf from "@/public/icons/leaf1.svg"
import QualityProduct from "@/public/icons/qualityproducts.svg"
import FlowWork from "@/public/icons/flowwework.svg"

type Props = {}

const WhyChooseOurProduct = (props: Props) => {
  return (
    <section className="bg-secondary flex flex-col gap-10 pb-0 pt-8 max-md:py-8">
      <div className="text-center">
        <SectionHeader
          heading="Why Choose Our Product"
          desc="Lorem ipsum dolor sit amet consectetur. Id mauris bibendum mauris maecenas libero etiam id sagittis."
        />
      </div>
      <div className="flex gap-[2rem] lg:gap-[8rem] items-center max-md:flex-col">
        <div className="flex flex-col gap-24 max-sm:gap-10">
          <div className="flex flex-col gap-2 items-center text-center">
            <div className="bg-primary p-4 rounded-full">
              <LeafPrimary className="w-5 h-5" />
            </div>
            <p className="text-subtitle2">Who we are</p>
            <p className="text-caption1">
              Lorem ipsum dolor sit amet consectetur. Id mauris bibendum mauris
              maecenas libero etiam id sagittis.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center text-center">
            <div className="bg-primary p-4 rounded-full">
              <FlowWork className="w-5 h-5" />
            </div>
            <p className="text-subtitle2">How we work</p>
            <p className="text-caption1">
              Lorem ipsum dolor sit amet consectetur. Id mauris bibendum mauris
              maecenas libero etiam id sagittis.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center bg-skin rounded-t-full w-full">
          <div className="flex max-md:w-[80%] w-full flex-col items-center text-center gap-4 pt-24 px-6">
            <p className="text-subtitle1">Our Story</p>
            <p className="text-caption1">
              Lorem ipsum dolor sit amet consectetur. Porta vivamus dapibus
              venenatis id enim a bibendum. Elit gravida ut nisl tristique
              interdum in. Magna nisl nibh diam risus risus.
            </p>
            <p className="text-caption1">
              Lorem ipsum dolor sit amet consectetur. Porta vivamus dapibus
              venenatis id enim a bibendum.
            </p>
          </div>
          <div>
            <Image
              src="/images/serum.png"
              alt={"serum image"}
              width={400}
              height={400}
            />
          </div>
        </div>

        <div className="flex flex-col gap-24 max-sm:gap-10">
          <div className="flex flex-col gap-2 items-center text-center">
            <div className="bg-primary p-4 rounded-full">
              <QualityProduct className="w-5 h-5" />
            </div>
            <p className="text-subtitle2">Quality Products</p>
            <p className="text-caption1">
              Lorem ipsum dolor sit amet consectetur. Id mauris bibendum mauris
              maecenas libero etiam id sagittis.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center text-center">
            <div className="bg-primary p-4 rounded-full">
              <Leaf className="w-5 h-5" />
            </div>
            <p className="text-subtitle2">100% Organic</p>
            <p className="text-caption1">
              Lorem ipsum dolor sit amet consectetur. Id mauris bibendum mauris
              maecenas libero etiam id sagittis.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseOurProduct
