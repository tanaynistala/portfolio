import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import styles from "@/styles/Home.module.css"

export default function Home() {
  return (
    <>
      <Head>
        <title>Create Next App</title>
        <meta name="description" content="Tanay Nistala's portfolio website" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="md:max-w-lg md:my-16 mx-auto p-8 font-light">
          <div>
            <svg
              width="48"
              height="48"
              viewBox="0 0 24 24"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
            >
              <g clip-path="url(#clip0_1_2)">
                <rect width="24" height="24" rx="12" fill="white" />
                <path
                  d="M0 24L7 21L4.5 12.5C2 2 16 -1.00001 21 10.5C20.0324 11.0503 19.3739 11.1682 18 11L17.3158 17.5M24 24L17 20.5L17.3158 17.5M17.3158 17.5L15.5 16.5L14 18L12.5 17L10.5 18"
                  stroke="black"
                  stroke-linecap="round"
                  stroke-linejoin="round"
                />
                <path
                  d="M13.5 11.5C13.5 12.0523 13.0523 12.5 12.5 12.5C11.9477 12.5 11.5 12.0523 11.5 11.5C11.5 10.9477 11.9477 10.5 12.5 10.5C13.0523 10.5 13.5 10.9477 13.5 11.5Z"
                  fill="black"
                />
                <path
                  d="M17 10.5C17 11.0523 16.5523 11.5 16 11.5C15.4477 11.5 15 11.0523 15 10.5C15 9.94772 15.4477 9.5 16 9.5C16.5523 9.5 17 9.94772 17 10.5Z"
                  fill="black"
                />
              </g>
              <defs>
                <clipPath id="clip0_1_2">
                  <rect width="24" height="24" rx="12" fill="white" />
                </clipPath>
              </defs>
            </svg>
            <h1 className="mt-8">
              Tanay Nistala ∙ <span className="opacity-50">Boston, MA</span>
            </h1>
            <p className="opacity-50 mt-2 leading-relaxed">
              Studying computer science at Tufts University. I do software and
              robotics stuff, and occasionally build things on the web or take
              photos. On weekends, I play in and organize GeoGuessr tournaments.
            </p>
          </div>

          <div className="mt-8 gap-4 flex justify-between">
            <div className="flex gap-4">
              <Link
                href="https://github.com/tanaynistala"
                className="opacity-50 hover:opacity-100"
                target="_blank"
              >
                GitHub
              </Link>
              <Link
                href="https://instagram.com/tanaynistala"
                className="opacity-50 hover:opacity-100"
                target="_blank"
              >
                Instagram
              </Link>
              <Link
                href="https://twitter.com/carpographer"
                className="opacity-50 hover:opacity-100"
                target="_blank"
              >
                Twitter
              </Link>
              <Link
                href="https://youtube.com/carpographer"
                className="opacity-50 hover:opacity-100"
                target="_blank"
              >
                YouTube
              </Link>
            </div>

            <div>
              <Link
                href="mailto:t.nistala@icloud.com"
                className="opacity-50 hover:opacity-100"
                target="_blank"
              >
                Email
              </Link>
            </div>
          </div>

          <div>
            <p className="text-sm opacity-50 mt-8">
              &copy; {new Date().getFullYear()} Tanay Nistala. This website is
              built on{" "}
              <Link href="https://nextjs.org" className="underline">
                NextJS
              </Link>{" "}
              and is hosted on{" "}
              <Link href="https://vercel.com" className="underline">
                Vercel
              </Link>
              .
            </p>
          </div>
        </div>
      </main>
    </>
  )
}
