import { Order } from "@medusajs/medusa"
import { formatAmount } from "medusa-react"
import Link from "next/link"
import { useMemo } from "react"
import Image from "next/image"
import Button from "@/components/common/Button"
import CancelItem from "@/components/common/CancelItem"
import ReturnItem from "@/components/common/ReturnItem"

type OrderCardProps = {
  order: Omit<Order, "beforeInsert">
}

const OrderCard = ({ order }: OrderCardProps) => {
  const numberOfLines = useMemo(() => {
    return order.items.reduce((acc, item) => {
      return acc + item.quantity
    }, 0)
  }, [order])

  const numberOfProducts = useMemo(() => {
    return order.items.length
  }, [order])

  const returnEnabled = !!process.env.NEXT_PUBLIC_PRODUCT_RETURN || false
  return (
    <div className="border border-primary rounded-lg overflow-hidden">
      <div className="flex justify-between bg-primary bg-opacity-5 p-4 flex-wrap gap-4 max-md:flex-col">
        <div className="flex flex-1 items-center flex-wrap text-caption2 text-gray-700 gap-4 *:flex *:flex-col">
          <div>
            <p className="text-caption2 font-semibold">ORDER PLACED</p>
            <span> {new Date(order.created_at).toDateString()}</span>
          </div>
          <div>
            <p className="text-caption2 font-semibold">TOTAL</p>
            <span className="text-primary font-semibold">
              {formatAmount({
                amount: order.total,
                region: order.region,
                includeTaxes: false,
              })}
            </span>
          </div>
          <div>
            <p className="text-caption2 font-semibold">ITEMS</p>
            <span className="text-center">{numberOfLines}</span>
            {/* {product.quantity} */}
          </div>
        </div>
        <div>
          <p className="text-caption2"># {order.id}</p>
          <Link
            href={`/order/details/${order.id}`}
            className="text-caption2 text-primary"
          >
            View Order Details
          </Link>
        </div>
      </div>
      <div className="text-body2 font-semibold px-4 capitalize">
        {order.status}
      </div>
      <div className="divide-y-2 px-4 divide-primary">
        {order.items.map((product) => {
          return (
            <div
              key={product.id}
              className="flex max-sm:flex-col gap-4 py-4 overflow-hidden"
            >
              <div className="flex-1 flex items-center gap-4">
                <a
                  href={`/products/${product.handle}`}
                  className="relative max-w-[75px] rounded-md w-full aspect-square overflow-hidden bg-primary bg-opacity-5"
                >
                  <Image
                    src={product.thumbnail || ""}
                    alt={product.id}
                    fill
                    sizes="25vw"
                  />
                </a>
                <div className="flex flex-1 items-center text-small-regular text-gray-700">
                  <a
                    href={`/products/${product.handle}`}
                    // scroll={false}
                    className="text-gray-900 font-semibold line-clamp-2"
                  >
                    {product.title}
                  </a>
                  <span className="ml-2">x</span>
                  <span>{product.quantity}</span>
                </div>
              </div>
              <div className="flex flex-col gap-2">
                {/* <Button
                  className="min-w-[200px] !py-1 bg-primary bg-opacity-5 text-primary border border-primary"
                  as="a"
                  href={`/order/details/${order.id}`}
                >
                  Order Details
                </Button> */}
                <Button
                  className="min-w-[200px] !py-1  bg-primary bg-opacity-5 text-primary border border-primary"
                  as="a"
                  href={`/products/${product.handle}`}
                >
                  Review a Product
                </Button>
                {returnEnabled &&
                  order.fulfillment_status === "not_fulfilled" && (
                    <CancelItem />
                  )}
                {returnEnabled &&
                  order.fulfillment_status === "not_fulfilled" && (
                    <ReturnItem item={product} order_id={order.id} />
                  )}
              </div>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default OrderCard
