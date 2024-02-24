import ContactUsSection from "@/containers/ContactUsSection"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Contact Us",
  description: "Contact Us Here",
}

type Props = {}

const page = (props: Props) => {
  return (
    <>
      <ContactUsSection />
    </>
  )
}

export default page
