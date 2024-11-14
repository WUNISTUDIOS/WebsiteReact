import { Inter } from "next/font/google";
import "./globals.css"
import Nav from "@/components/navigation/nav"
import localFont from "next/font/local"


const inter = Inter({ subsets: ["latin"] })

export const metadata = {
  title: "cgiPortfolio",
  description: "A portfolio site for Denzel Arthur",
}
const GatwickVariable = localFont({
  src: "../../public/typeface/Gatwick-Variable.ttf",
  weight:"300",
  variable: "--Font-GatwickVariable",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GatwickVariable.className}>
      <Nav/>
      <div className="h-16">
      </div>
        {children}

        <footer className="rounded-lg shadow m-4 dark:bg-blue-800">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-left md:justify-between">
            <span className="text-sm text-gray-500 sm:text-center dark:text-gray-400">© 2024 <a href="https://cgidoggs.world//" className="hover:underline">cgistudio</a>. All Rights Reserved.
            </span>
            <ul className="flex flex-wrap items-center mt-3 text-sm font-medium text-gray-500 dark:text-gray-400 sm:mt-0">
              <li>
                <a href="#" className="hover:underline me-4 md:me-6">About</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Contact</a>
              </li>
            </ul>
          </div>
        </footer>
      </body>
    </html>
  )
}
