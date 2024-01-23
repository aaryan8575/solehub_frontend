import Providers from "@/modules/providers"
import { Inter } from "next/font/google"
import "./globals.css"
import Header from "@/components/common/Header"
import Footer from "@/components/common/Footer"
import localFont from "next/font/local"

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
