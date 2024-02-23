import Button from "@/components/common/Button"
import Input from "@/components/common/formElements/Input"
import { medusaClient } from "@/lib/config"
import { LOGIN_VIEW, useAccount } from "@/lib/context/account-context"
import { emailRegex } from "@/lib/util/regex"
import { Spinner } from "@medusajs/icons"
import { redirect, useRouter } from "next/navigation"
import {
  AnchorHTMLAttributes,
  DetailedHTMLProps,
  useRef,
  useState,
} from "react"
import { FieldValues, useForm } from "react-hook-form"
import Logo from "@/public/icons/SolehubLogo.svg"

interface SignInCredentials extends FieldValues {
  email: string
  password: string
}

const Login = ({ query }: { query: string }) => {
  const { loginView, refetchCustomer } = useAccount()
  const [_, setCurrentView] = loginView
  const [authError, setAuthError] = useState<string | undefined>(undefined)

  const linkRef =
    useRef<
      DetailedHTMLProps<
        AnchorHTMLAttributes<HTMLAnchorElement>,
        HTMLAnchorElement
      >
    >()

  const handleError = (_e: Error) => {
    const statusCode = _e.response?.status
    if (statusCode === 401)
      setAuthError(
        "Invalid login credentials, please provide valid credentials..."
      )
    else if (statusCode === 403) setAuthError("User not found")
    else setAuthError("Something went Wrong, please try again...")
  }

  const {
    register,
    handleSubmit,
    formState: { errors, isSubmitting },
  } = useForm<SignInCredentials>()

  const router = useRouter()

  const onSubmit = handleSubmit(async (credentials) => {
    await medusaClient.auth
      .authenticate(credentials)
      .then(() => {
        refetchCustomer()
        if (query === "back") {
          return router.back()
        } else {
          if (linkRef && linkRef.current) {
            linkRef.current.click()
          } else {
            redirect("/")
          }
        }
      })
      .catch(handleError)
  })

  return (
    <div className="max-w-sm w-full flex flex-col gap-4 items-center">
      <a href="/account" ref={linkRef} aria-hidden />
      {isSubmitting && (
        <div className="z-10 fixed inset-0 bg-white bg-opacity-50 flex items-center justify-center">
          <Spinner />
        </div>
      )}
      <div className="flex justify-center">
        <Logo className="h-12 text-primary" />
      </div>
      <div className="flex flex-col gap-2 items-center">
        <p className="text-heading4 font-bold">Welcome back</p>
        <p className="text-center text-base-regular text-gray-700 ">
          Please enter your registered mobile number to Sign in
        </p>
      </div>
      <form className="w-full" onSubmit={onSubmit}>
        <div className="flex flex-col w-full gap-y-2">
          <Input
            label="Email"
            placeholder="Enter email"
            {...register("email", {
              required: {
                message: "Email is required...",
                value: true,
              },
              pattern: {
                value: emailRegex,
                message: "Enter valid email",
              },
            })}
            autoComplete="mail"
            errors={errors}
          />
          <Input
            label="Password"
            placeholder="Enter password"
            {...register("password", { required: "Password is required" })}
            type="password"
            autoComplete="current-password"
            errors={errors}
          />
        </div>
        {authError && (
          <div>
            <span className="text-primary w-full text-small-regular">
              These credentials do not match our records
            </span>
          </div>
        )}
        <Button
          className="mt-6 w-full !rounded-lg  tracking-widest"
          variant="fill"
          color="primary"
        >
          Submit
        </Button>
      </form>
      <span className="text-center text-gray-700 text-small-regular mt-6">
        Dont&apos;t have an account?{" "}
        <button
          onClick={() => setCurrentView(LOGIN_VIEW.REGISTER)}
          className="text-primary"
        >
          Sign up here
        </button>
        .
      </span>
    </div>
  )
}

export default Login
