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
  weight:"1 999",
  variable: "--Font-GatwickVariable",
})

const MonumentExtended = localFont({
  src: "../../public/typeface/MonumentExtended-Bold.otf",
  weight:"1 999",
  variable: "--Font-MonumentExtended",
})

export default function RootLayout({ children }) {
  return (
    <html lang="en">
      <body className={GatwickVariable.className}>
      <div className={MonumentExtended.className}>
        <Nav/>
      </div>
      <div className="h-16">
      </div>
        {children}

        <footer className="rounded-lg shadow m-4">
          <div className="w-full mx-auto max-w-screen-xl p-4 md:flex md:items-left md:justify-between">
            <span className="text-sm text-slate-400 sm:text-center dark:text-gray-400">© 2025 <a href="https://cgidoggs.world//" className="hover:underline">cgistudio</a>. All Swag Reserved 1-800-welovegraphix
            </span>
            <ul className="flex flex-wrap items-center text-sm font-medium">
              {/* <li>
                <a href="#" className="hover:underline me-4 md:me-6">About</a>
              </li>
              <li>
                <a href="#" className="hover:underline">Contact</a>
              </li> */}
            </ul>
          </div>
        </footer>
      </body>
    </html>
  )
}
