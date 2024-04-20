"use client"
import styles from "./newsLetter.module.css"
import Input from "../common/formElements/Input"
import SectionHeader from "../common/SectionHeader"
import Button from "@/components/common/Button"
import { emailRegex, nameRegex } from "@/lib/util/regex"
import { useState } from "react"
import { useForm } from "react-hook-form"

type FormValues = {
  name: string
  email: string
}

const NewsLetter: React.FC = (props: Props) => {
  const [submitting, setSubmitting] = useState(false)
  const [error, setError] = useState<string | undefined>(undefined)

  const {
    register,
    handleSubmit,
    formState: { errors },
    reset,
  } = useForm<FormValues>()

  const submit = handleSubmit(async (data: FormValues) => {
    setSubmitting(true)
    setError(undefined)
    setSubmitting(false)
    reset()
  })

  return (
    <section className="bg-skin py-8 flex flex-col gap-14">
      <SectionHeader
        heading="Our Newsletter"
        desc="Get insider access for limited edition offers, new launches, insights on  Hair, Skincare,
Beauty and more"
      />
      <form className={styles.newsLetterForm} onSubmit={submit}>
        <div className="max-sm:w-full w-1/3">
          <Input
            placeholder="Enter your email"
            className=""
            type="email"
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
            errors={errors}
          />
        </div>

        <Button
          variant="fill"
          color="primary"
          type="submit"
          title="Subscribe"
          isLoading={submitting}
          className="text-caption2 sm:text-caption1 h-12 max-sm:w-full w-1/6"
        >
          Subscribe
        </Button>
        {error && (
          <div className="text-primary text-small-regular py-2">{error}</div>
        )}
      </form>
    </section>
  )
}

export default NewsLetter
