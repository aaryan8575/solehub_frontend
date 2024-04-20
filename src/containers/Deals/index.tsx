import { DealsData } from "@/lib/constData"
import DealCard from "@/components/DealCard"

type Props = {}

const Deals = (props: Props) => {
  return (
    <section>
      <div className="flex flex-col gap-4">
        <h3 className="font-semibold text-heading4 text-center">
          {DealsData.heading}
        </h3>
        <div className="grid md:grid-cols-3 grid-cols-1 gap-4">
          {DealsData?.DealCards?.map((item) => (
            <DealCard deal={item} key={item.id} />
          ))}
        </div>
      </div>
    </section>
  )
}

export default Deals
