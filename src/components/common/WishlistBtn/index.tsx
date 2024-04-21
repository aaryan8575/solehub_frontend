"use client"
import HeartIcon from "@/public/icons/heart.svg"
import Button from "@/components/common/Button"
import { useWishList } from "@/lib/context/wishlist-context"
import { useAccount } from "@/lib/context/account-context"
import { useRouter } from "next/navigation"
import clsx from "clsx"

const WishlistBtn = ({
  product_id,
  item,
  variant = "black",
}: {
  product_id: string
  item?: any
  variant?: "red" | "black"
  border?: "red" | "black"
}) => {
  const { toggleWishList, checkProductInWishList } = useWishList()
  const { loginView, customer, retrievingCustomer } = useAccount()
  const router = useRouter()

  if (!process.env.NEXT_PUBLIC_WISHLIST) {
    return null
  }

  return null

  // <>
  //   <Button
  //     onClick={() => {
  //       if (!retrievingCustomer && !customer) {
  //         return router.push("/login", { scroll: false })
  //       }
  //       toggleWishList(product_id)
  //       // const wishlistItems: GtagItemParams["items"] = [
  //       //   {
  //       //     item_id: product_id,
  //       //   },
  //       // ]
  //       // const wishlistParams: GtagItemParams = {
  //       //   currency: "INR",
  //       //   items: wishlistItems,
  //       //   value: 0,
  //       // }
  //       // if (!Boolean(checkProductInWishList(product_id)))
  //       //   mixPannel.triggerEvent("add_to_wishlist", wishlistParams)
  //     }}
  //     id="addtofavourites"
  //     aria-label="addtofavourites"
  //     className={clsx("  border border-primary !p-2 aspect-square", {
  //       "text-black border-none ": variant === "black",
  //       "text-primary ": variant === "red",
  //     })}
  //     // className="text-rose-500 border-none bg-rose-500 bg-opacity-10 "

  //     title="btn"
  //   >
  //     <HeartIcon
  //       width="24"
  //       height="24"
  //       fill={!Boolean(checkProductInWishList(product_id)) ? "none" : "red"}
  //     />
  //   </Button>
  // </>
}

export default WishlistBtn
