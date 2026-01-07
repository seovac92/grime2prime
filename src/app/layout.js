import { Bungee } from "next/font/google"
import "./globals.css"

const bungee = Bungee({
  variable: "--font-bungee",
  subsets: ["latin"],
  weight: "400",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={`${bungee.variable} antialiased`}>{children}</body>
    </html>
  )
}
