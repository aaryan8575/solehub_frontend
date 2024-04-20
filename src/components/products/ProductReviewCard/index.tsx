import Image from "next/image"
import Rating from "../Rating"

type Props = {
  data: {
    title: string
    rating: number
    content: string
    id: number
  }
}

const ProductReviewCard = ({ data }: Props) => {
  // Use a CSS class to conditionally apply the top border
  const containerClass = `flex max-sm:flex-col pt-4 ${
    data.id !== 1 ? "border-t-[1px] border-gray" : ""
  }`

  return (
    <div className={containerClass}>
      <div className="max-sm:flex max-sm:justify-center ">
        <div className="w-14 h-14 rounded-full overflow-hidden relative">
          <Image
            src={"/images/person-1.png"}
            alt="person image"
            fill
            className="object-cover rounded-full"
          ></Image>
        </div>
      </div>

      <div className="ml-4 max-sm:ml-0 max-sm:flex max-sm:flex-col max-sm:items-center max-sm:justify-center w-full">
        <div className="flex w-full justify-between items-center"></div>
        <div className="pb-0">
          <Rating rating={data.rating} />
        </div>
        <div className="flex-1 flex  flex-wrap ">
          <div className="text-caption1">{data.title}</div>
        </div>
        <div className="text-gray text-caption1 max-sm:text-center mt-0">
          {data.content}
        </div>
      </div>
    </div>
  )
}

// const ProductReviewCard = ({ data }: Props) => {
//   return (
//     <div className="flex flex-col gap-4 rounded-xl bg-white p-[4%]">
//       <div className="flex gap-4 items-center">
//         <div className="w-[20%] max-w-[75px] rounded-full overflow-hidden relative aspect-square">
//           <Image
//             src={"/images/person-1.png"}
//             alt="person image"
//             fill
//             className="object-contain"
//           ></Image>
//         </div>
//         <div className="flex-1 flex sm:items-center max-sm:flex-col sm:gap-6 flex-wrap">
//           <h6 className="text-body2 mb-0 flex-1">{data.title}</h6>
//           <Rating rating={data.rating} />
//         </div>
//       </div>
//       <p className="text-gray text-caption1">{data.content}</p>
//     </div>
//   )
// }

export default ProductReviewCard
