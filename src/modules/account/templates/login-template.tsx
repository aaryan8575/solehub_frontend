"use client"

import { useAccount } from "@/lib/context/account-context"
import { redirect } from "next/navigation"
import { useEffect } from "react"
import Login from "../components/login"

const LoginTemplate = ({ query }: { query: string }) => {
  const { customer, retrievingCustomer } = useAccount()

  useEffect(() => {
    if (!retrievingCustomer && customer) {
      redirect("/account")
    }
  }, [customer, retrievingCustomer])

  return (
    <div className="w-full flex justify-center p-4">
      <Login query={query} />
    </div>
  )
}

export default LoginTemplate
