import SectionHeader from "@/components/common/SectionHeader"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Assortment",
  description: "Assortment",
}

const page = () => {
  return (
    <section>
      <SectionHeader heading="Comming Soon..." />
    </section>
  )
}

export default page
