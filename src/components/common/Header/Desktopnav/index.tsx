import Link from "next/link"
import style from "./desktopnav.module.css"
import { NavLinksType } from "@/utils/types"
import CartBtn from "../CartBtn"
import AccountBtn from "../AccountBtn"
import MobileNav from "../Mobilenav"
import NavLinks from "../NavLinks"
import SearchButton from "@/components/searchbutton"
import Logo from "@/public/icons/SolehubLogo.svg"
import DesktopDropDown from "./Desktop-dropDown"
import { dropDownData } from "@/lib/constData"

const DesktopNav = ({ data }: { data: NavLinksType }) => {
  return (
    <>
      <div className={style.deskNav}>
        <MobileNav data={data} />

        <div className={style.contentWrapper}>
          <NavLinks links={data} />
        </div>
        <Link href={"/"} className={style.logoWrapper}>
          <Logo className="h-12 text-primary" />
        </Link>
        <div className={style.icons}>
          <SearchButton />
          <CartBtn />

          <AccountBtn />
        </div>
      </div>

      <DesktopDropDown dropdown={dropDownData} />
    </>
  )
}

export default DesktopNav
