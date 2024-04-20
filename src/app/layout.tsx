import Providers from "@/modules/providers"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import localFont from "next/font/local"

const TWITTER_CREATOR = "@thespecialcharacter"
const TWITTER_SITE = "https://thespecialcharacter.com"
const SITE_NAME = "Bea You"

const baseUrl = process.env.NEXT_PUBLIC_BASE_URL
  ? `https://${process.env.NEXT_PUBLIC_BASE_URL}`
  : "http://localhost:8000"

export const metadata = {
  metadataBase: new URL(baseUrl),
  title: {
    default: SITE_NAME!,
    template: `%s | ${SITE_NAME}`,
  },
  robots: {
    follow: true,
    index: true,
  },
  ...(TWITTER_CREATOR &&
    TWITTER_SITE && {
      twitter: {
        card: "summary_large_image",
        creator: TWITTER_CREATOR,
        site: TWITTER_SITE,
      },
    }),
}

const inter = Inter({
  style: ["normal"],
  subsets: ["latin"],
  variable: "--font-inter",
  preload: true,
})

const luxia = localFont({
  src: [
    {
      path: "../../public/fonts/Luxia.woff",
      weight: "900",
    },
  ],
  variable: "--font-luxia",
})

export default function RootLayout({
  children,
  modal,
}: {
  children: React.ReactNode
  modal: React.ReactNode
}) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} ${luxia.variable} relative font-sans`}
      >
        <Providers>
          <Header />
          {modal}
          {children}
          <Footer />
        </Providers>
      </body>
    </html>
  )
}
