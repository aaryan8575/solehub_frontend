import LoginTemplate from "@/modules/account/templates/login-template"
import RegisterTemplate from "@/modules/account/templates/register-template"
import { Metadata } from "next"

export const metadata: Metadata = {
  title: "Sign in",
  description: "Sign in to your account.",
}

export default async function Register({
  searchParams,
}: {
  searchParams: { [key: string]: string | string[] | undefined }
}) {
  const query = searchParams.q || ""

  return <RegisterTemplate query={query} />
}
