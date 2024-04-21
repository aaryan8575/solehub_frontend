import React from "react"
import SectionHeader from "@/components/common/SectionHeader"
import Image from "next/image"

type Props = {}

const WhyChooseOurProduct = (props: Props) => {
  return (
    <section className="flex flex-col gap-10 pb-0 bg-footblack">
      <div className="text-center *:text-white">
        <SectionHeader
          heading="Why Choose Our Product"
          desc="Lorem ipsum dolor sit amet consectetur. Id mauris bibendum mauris maecenas libero etiam id sagittis."
        />
      </div>
      <div className="flex gap-[2rem] lg:gap-[8rem] items-center max-md:flex-col *:text-white">
        <div className="flex flex-col gap-24 max-sm:gap-10">
          <div className="flex flex-col gap-2 items-center text-center">
            {/* <div className="bg-white p-4 rounded-full">
              <LeafIcon className="w-5 h-5" />
            </div> */}
            <p className="text-subtitle2">Who we are</p>
            <p className="text-caption1">
              Elevate every step with chic, comfortable footwear – where style,
              quality, and comfort unite flawlessly.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center text-center">
            {/* <div className="bg-white p-4 rounded-full">
              <LeafIcon className="w-5 h-5" />
            </div> */}
            <p className="text-subtitle2">How we work</p>
            <p className="text-caption1">
              Efficiency is our ethos. At SoleHub, we streamline every step to
              swiftly bring you fashion-forward footwear.
            </p>
          </div>
        </div>
        <div className="flex flex-col items-center bg-cyan-200 rounded-t-full w-full">
          <div className="flex w-full flex-col items-center *:text-footblack text-center gap-4 pt-24 px-6">
            <p className="text-subtitle2">Our Story</p>
            <p className="text-caption1">
              SoleHub began with a shared love for shoes and a vision to
              redefine footwear. Founded by enthusiasts driven by quality and
              style, we embarked on a journey to curate a collection that
              mirrors our passion. Each step in our story is woven with
              dedication, innovation, and a commitment to exceptional footwear.
            </p>
          </div>
          <div>
            <Image
              src="/images/whychooseproduct.png"
              alt={"serum image"}
              width={350}
              height={350}
            />
          </div>
        </div>

        <div className="flex flex-col gap-24 max-sm:gap-10">
          <div className="flex flex-col gap-2 items-center text-center">
            {/* <div className="bg-white p-4 rounded-full">
              <LeafIcon className="w-5 h-5" />
            </div> */}
            <p className="text-subtitle2">Quality Products</p>
            <p className="text-caption1">
              Crafted with precision, SoleHub guarantees footwear excellence.
              Elevate your style with our commitment to unparalleled quality.
            </p>
          </div>
          <div className="flex flex-col gap-2 items-center text-center">
            {/* <div className="bg-white p-4 rounded-full">
              <LeafIcon className="w-5 h-5" />
            </div> */}
            <p className="text-subtitle2">Guarantee</p>
            <p className="text-caption1">
              Quality assured, satisfaction guaranteed - step confidently with
              SoleHub, where excellence meets your every expectation.
            </p>
          </div>
        </div>
      </div>
    </section>
  )
}

export default WhyChooseOurProduct
