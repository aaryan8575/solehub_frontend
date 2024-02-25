"use client"
import React, { useState } from "react"
import RefinementList from "@/modules/store/components/refinement-list"
import { SortOptions } from "@/modules/store/components/refinement-list/sort-products"
import { StoreGetProductsParams } from "@medusajs/medusa"
import ProductsGrid from "../ProductsGrid"

type Props = {}

const ProductsTemplate = (props: Props) => {
  const [params, setParams] = useState<StoreGetProductsParams>({})
  const [sortBy, setSortBy] = useState<SortOptions>("created_at")
  return (
    <>
      {/* <RefinementList
        refinementList={params}
        setRefinementList={setParams}
        sortBy={sortBy}
        setSortBy={setSortBy}
      /> */}
      <ProductsGrid params={params} sortBy={sortBy} />
    </>
  )
}

export default ProductsTemplate
