"use client"
import { Fragment } from "react"
import { Dialog, Transition } from "@headlessui/react"
import CrossIcon from "@/public/icons/cross.svg"
import HamburgerIcon from "@/public/icons/hamburger.svg"
import Link from "next/link"
import style from "./mobilenav.module.css"
import Button from "../../Button"
import useToggleState from "@/lib/hooks/use-toggle-state"
import { NavLinksType } from "@/utils/types"
import { usePathname } from "next/navigation"
import clsx from "clsx"
import MobileDropDown from "./Mobilenav-dropdown"
import { dropDownData } from "@/lib/constData"
import Logo from "@/public/icons/SolehubLogo.svg"

function MobileNav({ data }: { data: NavLinksType }) {
  const { state, open, close } = useToggleState()
  const pathname = usePathname()

  return (
    <>
      <div className="lg:hidden">
        <div className={"w-14 !justify-start"} onClick={open}>
          <span className="sr-only">open menu button</span>
          <HamburgerIcon className="w-5" />
        </div>
      </div>

      <Transition.Root show={!!state} as={Fragment}>
        <Dialog as="div" className="relative lg:hidden z-40" onClose={close}>
          <Transition.Child
            as={Fragment}
            enter="transition-opacity ease-linear duration-300"
            enterFrom="opacity-0"
            enterTo="opacity-100"
            leave="transition-opacity ease-linear duration-300"
            leaveFrom="opacity-100"
            leaveTo="opacity-0"
          >
            <div className={style.blurEffect} onClick={close}></div>
          </Transition.Child>

          <div className={style.sideMenu}>
            <Transition.Child
              as={Fragment}
              enter="transition ease-in-out duration-300 transform"
              enterFrom="-translate-x-full"
              enterTo="translate-x-0"
              leave="transition ease-in-out duration-300 transform"
              leaveFrom="translate-x-0"
              leaveTo="-translate-x-full"
            >
              <Dialog.Panel className={`no-scrollbar ${style.dialogPanel}`}>
                <div className={style.container}>
                  <div className={style.menuHeader}>
                    <a href="/">
                      <Logo className="h-8 sm:h-12 text-primary" />
                    </a>
                    <a>
                      <CrossIcon className="h-5 text-black" onClick={close} />
                    </a>
                  </div>

                  <div className={style.navLinks}>
                    {data &&
                      data.navLinks.map((item) => {
                        return (
                          <Link
                            href={item.url}
                            key={item.id}
                            className={clsx(`${style.link}`, {
                              [style.active]: pathname === item.url,
                            })}
                            onClick={close}
                          >
                            {item.title}
                          </Link>
                        )
                      })}
                  </div>

                  <MobileDropDown dropdown={dropDownData} close={close} />
                </div>
              </Dialog.Panel>
            </Transition.Child>
          </div>
        </Dialog>
      </Transition.Root>
    </>
  )
}

export default MobileNav
