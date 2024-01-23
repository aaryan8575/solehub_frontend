import LoginTemplate from "@/modules/account/templates/login-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your SoleHub account.",
}

export default async function Login({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  console.log(searchParams)
  const query = searchParams.q || ""
  console.log(query)

  return <LoginTemplate query={query} />
}
