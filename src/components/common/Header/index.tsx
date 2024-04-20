import { navbarData } from "@/lib/constData"
import DesktopNav from "./Desktopnav"

const Header = () => {
  return (
    <header className="bg-floralWhite sticky top-0 z-40 shadow shadow-gold">
      <DesktopNav data={navbarData} />
    </header>
  )
}

export default Header
