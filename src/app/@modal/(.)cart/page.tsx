import CartSliderSubtotal from "@/components/CartSliderSubtotal"
import SidePanel from "@/components/common/SidePanel"
import CartItemList from "@/containers/CartItemList"

const Cart = () => {
  return (
    <SidePanel side="right">
      <div className="flex-1 flex flex-col py-2 overflow-y-scroll no-scrollbar">
        <div className="flow-root overflow-hidden overflow-y-auto flex-1 no-scrollbar">
          <CartItemList />
        </div>

        <CartSliderSubtotal />
      </div>
    </SidePanel>
  )
}

export default Cart
