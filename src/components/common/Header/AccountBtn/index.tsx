"use client"
import { Menu, Transition } from "@headlessui/react"
import { Fragment, useEffect, useRef, useState } from "react"
import UserIcon from "@/public/icons/account.svg"
import Link from "next/link"
import clsx from "clsx"
import { useAccount } from "@/lib/context/account-context"
import CheckIcon from "@/public/icons/check.svg"
import LockIcon from "@/public/icons/lock.svg"
import Button from "../../Button"

const AccountBtn = () => {
  const { customer, retrievingCustomer, handleLogout } = useAccount()

  const isWishlistEnabled = !!process.env.NEXT_PUBLIC_WISHLIST

  if (customer && !retrievingCustomer) {
    return (
      <Menu as="div" className="relative inline-block text-left">
        <div className="flex items-center">
          <Menu.Button className="flex flex-col justify-center items-center">
            <span className="sr-only">user account button</span>
            <UserIcon className="w-5 h-5" />
            <p className="text-xs max-sm:hidden">Account</p>
          </Menu.Button>
        </div>
        <Transition
          as={Fragment}
          enter="transition ease-out duration-100"
          enterFrom="transform opacity-0 scale-95"
          enterTo="transform opacity-100 scale-100"
          leave="transition ease-in duration-75"
          leaveFrom="transform opacity-100 scale-100"
          leaveTo="transform opacity-0 scale-95"
        >
          <Menu.Items className="absolute right-0 mt-2 w-56 origin-top-right rounded-md bg-white z-20 shadow-lg ring-1 ring-black/5 focus:outline-none">
            <Menu.Item>
              {({ active }) => (
                <Link
                  href={"/account"}
                  className={clsx("block px-4 py-2 ", {
                    "bg-gray/10": !!active,
                  })}
                >
                  Account
                </Link>
              )}
            </Menu.Item>
            {isWishlistEnabled && (
              <Menu.Item>
                {({ active }) => (
                  <Link
                    href={"/account/wishlist"}
                    className={clsx("block px-4 py-2 ", {
                      "bg-gray/10": !!active,
                    })}
                  >
                    Wishlist
                  </Link>
                )}
              </Menu.Item>
            )}

            <Menu.Item>
              {({ active }) => {
                return (
                  <button
                    type="button"
                    className={clsx(
                      "block px-4 py-2 w-full text-left text-rose-600",
                      {
                        "bg-gray/10": !!active,
                      }
                    )}
                    onClick={() => {
                      handleLogout()
                      // 	handleLogout();
                      // 	customerLogout();
                      // 	resetCart();
                    }}
                  >
                    Logout
                  </button>
                )
              }}
            </Menu.Item>
          </Menu.Items>
        </Transition>
      </Menu>
    )
  } else {
    return (
      <Link
        href={"/login"}
        scroll={false}
        className="flex flex-col items-center justify-center"
      >
        {/* <UserIcon className="w-5 h-5" />
        <p className="text-xs max-sm:hidden">Account</p> */}

        <Button
          variant="fill"
          color="primary"
          type="submit"
          title="login"
          className="text-caption2 sm:text-caption1 !p-1 !px-2"
        >
          Sign in
        </Button>
      </Link>
    )
  }
}

export default AccountBtn
