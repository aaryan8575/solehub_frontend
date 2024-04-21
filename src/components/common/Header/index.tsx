import { navbarData } from "@/lib/constData"
import DesktopNav from "./Desktopnav"

const Header = () => {
  return (
    <header className="bg-white sticky top-0 z-40 shadow shadow-footblack">
      <DesktopNav data={navbarData} />
    </header>
  )
}

export default Header
