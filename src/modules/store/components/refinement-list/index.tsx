import { StoreGetProductsParams } from "@medusajs/medusa"
import SortProducts, { SortOptions } from "./sort-products"
import CollectionFilter from "./collection-filter"

type RefinementListProps = {
  refinementList: StoreGetProductsParams
  setRefinementList: (refinementList: StoreGetProductsParams) => void
  sortBy: SortOptions
  setSortBy: (...args: any[]) => void
  search?: boolean
}

const RefinementList = ({
  refinementList,
  setRefinementList,
  sortBy,
  setSortBy,
  search = false,
}: RefinementListProps) => {
  return (
    <section className="flex gap-12 small:min-w-[250px] small:ml-[1.675rem]">
      <SortProducts sortBy={sortBy} setSortBy={setSortBy} />
      {!search && (
        <CollectionFilter
          refinementList={refinementList}
          setRefinementList={setRefinementList}
        />
      )}
    </section>
  )
}

export default RefinementList
