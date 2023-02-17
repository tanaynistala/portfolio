import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import photos from "@/pages/api/photos.json"

export default function Home() {
  const randomPhoto = photos[Math.floor(Math.random() * photos.length)]

  return (
    <>
      <Head>
        <title>Tanay Nistala</title>
        <meta name="description" content="Portfolio home" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main>
        <div className="md:max-w-lg md:my-16 mx-auto p-8 font-light">
          <div>
            <Image
              src="logo.svg"
              alt="Website logo"
              width={48}
              height={48}
              className="rounded-full border-2 border-black"
            />
            <h1 className="mt-8">
              Tanay Nistala ∙ <span className="opacity-50">Boston, MA</span>
            </h1>
            <p className="opacity-50 mt-2 leading-relaxed">
              Studying computer science at Tufts University. I do software and
              robotics stuff, and occasionally build things on the web or take
              photos. On weekends, I play in and organize GeoGuessr tournaments.
            </p>
          </div>

          <div className="mt-8 mb-2">
            <Link href="/gallery" className="opacity-50 hover:opacity-100">
              Gallery →
            </Link>
            <img
              src={`photos/photo${randomPhoto.id}.png`}
              alt={randomPhoto.title}
              className="mt-2"
            />
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
