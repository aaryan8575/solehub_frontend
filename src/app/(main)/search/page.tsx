"use client"
import { useRef, useState } from "react"
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
import clsx from "clsx"
import AnimatedLoader from "@/public/icons/animatedLoader.svg"
type Props = {}

const Search = ({ searchParams }: Props) => {
  const router = useRouter()
  const [query, setQuery] = useState("")
  // const [products, setProducts] = useState([])
  const search = useDebounce(query?.trim(), 2000)
  const SALES_CHANNEL_ID = process.env.NEXT_PUBLIC_SALES_CHANNEL_ID || ""
  const { products, isLoading } = useProducts({
    q: search,
    sales_channel_id: [SALES_CHANNEL_ID],
  })

  const onDismiss = () => {
    router.back()
  }
  const searchPlaceholderRef = useRef(null)
  const updatePlaceholder = (open: boolean) => {
    if (open && searchPlaceholderRef.current) {
      searchPlaceholderRef.current.style.opacity = "0"
    }
    if (!open && searchPlaceholderRef.current) {
      searchPlaceholderRef.current.style.opacity = "1"
    }
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
    <section className="bg-floralWhite min-h-screen py-0 ">
      <div className="px-2 py-4 h-full w-full ">
        <Combobox
          onKeyUp={(e) => {
            if (e.key === "Enter") {
              router.push(`/products?q=${query}`)
            }
          }}
          className={" bg-floralWhite"}
          as="div"
        >
          {({ open }) => {
            updatePlaceholder(open)
            return (
              <>
                <div className="flex bg-white justify-center items-center border-2 border-black/20 rounded-lg">
                  <Button
                    variant="fill"
                    className="border-none"
                    aria-label="search button"
                  >
                    <Search_icon className="w-4 aspect-square" />
                  </Button>
                  <Combobox.Input
                    value={query}
                    onChange={(event) => {
                      setQuery(event?.target?.value)
                    }}
                    className="outline-none border-none w-full p-0 bg-inherit focus:bg-inherit "
                    placeholder="Search Products ..."
                  />
                  <Button
                    variant="fill"
                    className="border-none"
                    title="searchbar close"
                    onClick={onDismiss}
                  >
                    <Cross_icon className="w-4 aspect-square stroke-black" />
                  </Button>
                </div>

                {open && (
                  <Combobox.Options static className={"h-full "}>
                    {isLoading && (
                      <div className="w-full h-full md:min-h-[400px] flex justify-center items-center">
                        <div className="w-20 aspect-square">
                          {" "}
                          <AnimatedLoader />{" "}
                        </div>
                      </div>
                    )}
                    {!isLoading && products && products?.length == 0 ? (
                      <div className="text-center flex w-full h-full max-md:mt-10 md:min-h-[800px] flex-col justify-center items-center">
                        <NotFoundIcon className="w-1/4 aspect-square" />
                        <p className="text-heading5">No Results Found</p>
                        <p className="text-caption2">
                          Try adjusting your search to find what youre looking
                          for.
                        </p>
                      </div>
                    ) : (
                      <>
                        <div className="h-fit  sm:w-full  no-scrollbar   py-3 shrink-0  grid grid-cols-1 min-[420px]:grid-cols-2 md:grid-cols-3 lg:grid-cols-4   flex-wrap gap-4 justify-center items-center ">
                          {products?.slice(0, 15)?.map((item, index) => (
                            <div
                              key={item.id}
                              className={clsx(
                                "flex w-full justify-center items-center",
                                {
                                  // "sm:w-1/2": products?.length == 2,
                                  // "sm:w-1/2 md:w-1/3": products?.length == 3,
                                  // "sm:w-1/2 md:w-1/3 lg:w-1/4":
                                  //   products?.length && products?.length >= 4,
                                }
                              )}
                            >
                              <Combobox.Option
                                className={"w-[260px]"}
                                value={item.title}
                              >
                                <ProductProvider product={item} key={item.id}>
                                  <ProductCard
                                    product={item}
                                    color={
                                      cardColorVarients[
                                        index % cardColorVarients.length
                                      ]
                                    }
                                    detailsBG="white"
                                  />
                                </ProductProvider>
                              </Combobox.Option>
                            </div>
                          ))}
                        </div>
                        {products && products?.length > 6 && (
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
                        )}
                      </>
                    )}
                  </Combobox.Options>
                )}
              </>
            )
          }}
        </Combobox>
      </div>
      <div
        className="w-full h-fit md:h-96 flex justify-center items-center "
        ref={searchPlaceholderRef}
      >
        <NotFoundIcon className="w-1/4 max-w-52 aspect-square " />
      </div>
      {/* <NotFoundIcon className="w-1/4 max-w-52 aspect-square absolute top-24 left-1/2 -translate-x-1/2 z-10" /> */}
    </section>
  )
}

export default Search
