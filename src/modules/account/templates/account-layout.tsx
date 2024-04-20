"use client"

import { useAccount } from "@/lib/context/account-context"
import UnderlineLink from "@/modules/common/components/interactive-link"
import Spinner from "@/modules/common/icons/spinner"
import React, { useEffect } from "react"
import AccountNav from "../components/account-nav"

const AccountLayout: React.FC = ({ children }) => {
  const { customer, retrievingCustomer, checkSession } = useAccount()

  useEffect(() => {
    checkSession()
  }, [checkSession])

  if (retrievingCustomer || !customer) {
    return (
      <div className="flex items-center justify-center w-full min-h-[640px] h-full text-gray-900">
        <Spinner size={36} />
      </div>
    )
  }

  return (
    <div className="flex-1 small:py-12 px-container">
      <div className="flex-1 h-full bg-white flex flex-col">
        <div className="grid grid-cols-1 small:grid-cols-[240px_1fr] px-4 pt-4 pb-4">
          <div>
            <AccountNav />
          </div>
          <div className="flex-1">{children}</div>
        </div>
        <div className="flex flex-col sm:flex-row justify-between small:border-t border-gray-200 px-4 pt-4 pb-8 gap-x-8">
          <div className="flex flex-col gap-2">
            <p className="text-subtitle1 font-semibold">Got questions?</p>
            <span className="text-small-regular">
              You can ask questions on our customer service page.
            </span>
          </div>
          <div className="flex items-end">
            <UnderlineLink href="/contact-us">Customer Service</UnderlineLink>
          </div>
        </div>
      </div>
    </div>
  )
}

export default AccountLayout
