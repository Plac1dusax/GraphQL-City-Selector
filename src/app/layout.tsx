import type { Metadata } from "next"
import QueryFetchProvider from "@/context/QueryFetchContext"
import { Manrope } from "next/font/google"
import { Barlow_Condensed } from "next/font/google"
import "../styles/globals.css"

const manrope = Manrope({
  subsets: ["latin"],
  variable: "--header-primary",
  weight: "700",
})

const barlowCondensed = Barlow_Condensed({
  subsets: ["latin"],
  variable: "--font-primary",
  weight: "600",
})

export const metadata: Metadata = {
  title: "Country Selector",
  description:
    "Application where you can filter countries according to continents and see the countries on the map.",
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <QueryFetchProvider>
      <html lang="en">
        <body className={`${manrope.className} ${barlowCondensed.className}`}>
          {children}
        </body>
      </html>
    </QueryFetchProvider>
  )
}
