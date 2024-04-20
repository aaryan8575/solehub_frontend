"use client"
import { useState } from "react"
import Button from "@/components/common/Button"
import Cross_icon from "@/public/icons/cross.svg"
import Search_icon from "@/public/icons/searchicons2.svg"
import { Combobox } from "@headlessui/react"
import { useRouter } from "next/navigation"
import { useProducts } from "medusa-react"
import useDebounce from "@/lib/hooks/use-debounce"
import ProductCard from "@/components/products/ProductCard"
import { ProductProvider } from "@/lib/context/product-context"
import NotFoundIcon from "@/public/icons/notFound.svg"
import AnimatedLoader from "@/public/icons/animatedLoader.svg"

import clsx from "clsx"

const Page = () => {
  const router = useRouter()
  const [query, setQuery] = useState("")

  // const [products, setProducts] = useState([])
  const SALES_CHANNEL_ID = process.env.NEXT_PUBLIC_SALES_CHANNEL_ID || ""
  const search = useDebounce(query?.trim(), 2000)

  let { products, isLoading } = useProducts({
    q: search,
    sales_channel_id: [SALES_CHANNEL_ID],
  })

  const onDismiss = () => {
    router.back()
  }

  const cardColorVarients: (
    | "pro1"
    | "pro2"
    | "pro3"
    | "pro4"
    | "pro5"
    | "pro6"
    | "pro7"
    | "pro8"
  )[] = ["pro1", "pro2", "pro3", "pro4", "pro5", "pro6", "pro7", "pro8"]

  return (
    // <SidePanel side="top">
    // <Modal>
    <div
      className="pt-4 pb-2 w-full px-container h-fit bg-floralWhite sticky top-16 lg:top-[7.5rem] left-0 z-20"
      // style={{ height: `calc(100dvh - 4rem)` }}
    >
      <Combobox
        onKeyUp={(e) => {
          if (e.key === "Enter") {
            router.push(`/products?q=${query}`)
          }
        }}
        className={"h-full w-full bg-floralWhite"}
        as="div"
      >
        <div className="flex justify-center items-center border-2 border-black/20 rounded-lg bg-white">
          <div style={{ padding: "0.5rem" }}>
            <Search_icon className="w-4 aspect-square" />
          </div>
          <Combobox.Input
            value={query}
            onChange={(event) => {
              setQuery(event?.target?.value)
            }}
            className="outline-none border-none w-full p-0 focus:bg-white "
            placeholder="Search Products ..."
          />
          <Button
            variant="fill"
            className="border-none"
            title="searchbar close"
            style={{ padding: "0.5rem" }}
            onClick={() => {
              // setQuery("")
              onDismiss()
            }}
          >
            <Cross_icon className="w-4 aspect-square stroke-black " />
          </Button>
        </div>
        {isLoading && (
          <div className="w-full h-full md:min-h-[600px] flex justify-center items-center">
            <div className="w-20 aspect-square">
              <AnimatedLoader />
            </div>
          </div>
        )}
        {products && products?.length != 0 && query != "" && !isLoading && (
          <>
            <Combobox.Label>
              <div className="w-full pt-2 text-caption2  mt-3 border-t-2  border-black/20">
                Search Results for {search}
              </div>
            </Combobox.Label>

            {/* <Combobox.Options className={"h-[400px]  "}> */}
            <Combobox.Options
              className={
                "overflow-y-scroll h-[calc(100dvh-10rem)] min-[768px]:h-[calc(100dvh)]  no-scrollbar"
              }
            >
              {/* <Combobox.Options className={"h-full max-md:overflow-y-scroll "}> */}
              <div className="sm:w-full  no-scrollbar gap-4 py-3 shrink-0 grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 flex-wrap">
                {products?.slice(0, 15)?.map((item, index) => (
                  <div
                    key={item.id}
                    className=""
                    // className={clsx(
                    //   "w-full flex justify-center  shrink-0 p-3",
                    //   {
                    //     // "sm:w-1/2": products?.length == 2,
                    //     "sm:w-1/2 md:w-1/3":
                    //       products?.length && products?.length <= 3,
                    //     "sm:w-1/2 md:w-1/3 lg:w-1/4":
                    //       products?.length && products?.length >= 4,
                    //   }
                    // )}
                  >
                    <Combobox.Option
                      className={"w-full flex justify-center items-center"}
                      value={item.title}
                    >
                      <ProductProvider product={item} key={item.id}>
                        <ProductCard
                          product={item}
                          color={
                            cardColorVarients[index % cardColorVarients.length]
                          }
                          detailsBG="white"
                        />
                      </ProductProvider>
                    </Combobox.Option>
                  </div>
                ))}
              </div>
              {products && products?.length > 6 && (
                // <Combobox.Option value={""} className={"pt-12"}>
                <div className="flex w-full justify-center py-12">
                  <Button
                    variant="fill"
                    color="primary"
                    className={"w-full md:w-1/2"}
                    as="a"
                    href="/products"
                  >
                    View All Producs
                  </Button>
                </div>
                // </Combobox.Option>
              )}
            </Combobox.Options>
          </>
        )}

        {products && products?.length == 0 && (
          <div className="text-center flex w-full h-[calc(100dvh-13rem)] md:h-[calc(100dvh-17.5rem)] md:max-h-[650px] max-md:mt-10 flex-col justify-center items-center">
            <NotFoundIcon className="w-1/4 aspect-square" />
            <p className="text-heading5">No Results Found</p>
            <p className="text-caption2">
              Try adjusting your search to find what youre looking for.
            </p>
          </div>
        )}
      </Combobox>
    </div>
  )
}

export default Page
