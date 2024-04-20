import Image from "next/image"
import Link from "next/link"
import { LineItem } from "@medusajs/medusa"
import CounterBtn from "../products/CounterBtn"
import RemoveFromCartBtn from "../products/RemoveFromCartBtn"

type Props = {
  item: LineItem
}

const CartItem = ({ item }: Props) => {
  return (
    // <div className="grid grid-cols-[25%_1fr] max-sm:grid-cols-[150px_1fr] items-center bg-white">
    // <div className="overflow-hidden max-sm:max-w-[150px] max-w-full relative aspect-square bg-skin">
    //   <Image
    //     src={item.thumbnail}
    //     alt={item.title}
    //     fill
    //     style={{ objectFit: "contain" }}
    //     sizes="25vw"
    //   />
    // </div>

    // <div className="flex flex-col h-[150px] gap-2 justify-between px-2">
    //   <div className="flex justify-between items-center">
    //     <Link
    //       href={`/products/${item.variant.product.handle}`}
    //       className="text-body2 font-semibold line-clamp-1"
    //     >
    //       {item.title}
    //     </Link>

    //     <div>
    //       <RemoveFromCartBtn id={item.id} />
    //     </div>
    //   </div>
    //   <CounterBtn size="sm" cartItem={item} />

    //   <span className="text-body2 font-semibold">
    //     ₹{Number((item?.unit_price * item.quantity) / 100).toFixed(2)}
    //   </span>
    // </div>
    // </div>
    <div className="flex bg-white">
      <div className="overflow-hidden sm:w-1/3 w-1/2 relative aspect-square bg-skin">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          style={{ objectFit: "contain" }}
          sizes="25vw"
        />
      </div>
      <div className="flex flex-col w-full justify-between px-2">
        <div className="flex justify-between items-center">
          <Link
            href={`/products/${item.variant.product.handle}`}
            className="text-body2 font-semibold line-clamp-1"
          >
            {item.title}
          </Link>

          <div>
            <RemoveFromCartBtn id={item.id} />
          </div>
        </div>
        <CounterBtn size="sm" cartItem={item} />

        <span className="text-body2 font-semibold">
          ₹{Number((item?.unit_price * item.quantity) / 100).toFixed(2)}
        </span>
      </div>
    </div>

    // <div className="grid grid-cols-[122px_1fr] gap-x-4">
    //   <div className="overflow-hidden rounded-md border max-w-[150px] relative border-gray/30 aspect-square">
    //     <Image
    //       src={item.thumbnail}
    //       alt={item.title}
    //       fill
    //       style={{ objectFit: "contain" }}
    //     />
    //   </div>
    //   <div className="flex flex-col justify-between flex-1">
    //     <div className="flex flex-col flex-1">
    //       <div className="flex items-start justify-between">
    //         <div>
    //           <h3 className="text-base-regular overflow-ellipsis overflow-hidden whitespace-nowrap mr-4 w-[130px]">
    //             <Link href={`/products/${item.variant.product.handle}`}>
    //               {item.title}
    //             </Link>
    //           </h3>
    //           {/* <LineItemOptions variant={item.variant} /> */}
    //           <span>Quantity: {item.quantity}</span>
    //         </div>
    //         <div className="flex justify-end">
    //           {/* <LineItemPrice region={cart?.region} item={item} style="tight" /> */}
    //           <span>
    //             {Number((item?.unit_price * item.quantity) / 100).toFixed(2)}
    //           </span>
    //         </div>
    //       </div>
    //     </div>
    //     <div className="flex items-end justify-between text-small-regular flex-1">
    //       <div>
    //         <button
    //           className="flex items-center gap-x-1 text-gray-500"
    //           onClick={() => deleteItem(item.id)}
    //         >
    //           <Trash size={14} />
    //           <span>Remove</span>
    //         </button>
    //       </div>
    //     </div>
    //   </div>
    // </div>
  )
}

export default CartItem
