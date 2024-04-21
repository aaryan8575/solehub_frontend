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
    <div className="grid grid-cols-[25%_1fr] max-sm:grid-cols-[40%_1fr] py-2 items-center">
      <div className="overflow-hidden max-w-[1540px] relative aspect-square">
        <Image
          src={item.thumbnail}
          alt={item.title}
          fill
          style={{ objectFit: "contain" }}
        />
      </div>

      <div className="flex flex-col gap-2 justify-between px-2 h-full">
        <div className="flex justify-between items-center">
          {/* <p className="text-body1 font-bold">{item.title}</p> */}
          <Link
            href={`/products/${item.variant.product.handle}`}
            className="text-body2 font-semibold line-clamp-1  "
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
  )
}

export default CartItem
