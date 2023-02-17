import "@/styles/globals.css"
import type { AppProps } from "next/app"
import { Manrope, Inter, Work_Sans } from "@next/font/google"

const manrope = Manrope({ subsets: ["latin"] })
const inter = Inter({ subsets: ["latin"] })
const work = Work_Sans({ subsets: ["latin"] })

export default function App({ Component, pageProps }: AppProps) {
  return (
    <main>
      <Component {...pageProps} />
    </main>
  )
}
