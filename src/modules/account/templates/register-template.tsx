"use client"

import { useAccount } from "@/lib/context/account-context"
import Register from "@/modules/account/components/register"
import { redirect } from "next/navigation"
import { useEffect } from "react"

const RegisterTemplate = ({ query }: { query: string }) => {
  const { customer, retrievingCustomer } = useAccount()

  useEffect(() => {
    if (!retrievingCustomer && customer) {
      redirect("/account")
    }
  }, [customer, retrievingCustomer])

  return (
    <div className="w-full flex justify-center p-4">
      <Register query={query} />
    </div>
  )
}

export default RegisterTemplate
