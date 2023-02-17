import Head from "next/head"
import Image from "next/image"
import Link from "next/link"
import photos from "@/pages/api/photos.json"

type Photo = {
  id: number
  title: string
  location: string
  date: string
}

export default function Home() {
  return (
    <>
      <Head>
        <title>Tanay Nistala</title>
        <meta name="description" content="Photo gallery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="md:max-w-lg md:my-16 mx-auto p-8 font-light">
        <div>
          <Image
            src="logo.svg"
            alt="Website logo"
            width={48}
            height={48}
            className="rounded-full border-2 border-black"
          />
          <h1 className="mt-8">
            <Link href="/" className="opacity-50 hover:opacity-100">
              ← Home
            </Link>
            {" ∙ "}
            Gallery
          </h1>
          <p className="opacity-50 mt-2 leading-relaxed">
            This is a collection of some of my favorite photos I&apos;ve taken.
            All on iPhones, from the 5s up to the 14 Pro. Most photos are shot
            in{" "}
            <Link
              href="https://lux.camera/"
              className="underline"
              target="_blank"
            >
              Halide
            </Link>
            , and edited with{" "}
            <Link
              href="https://pixelmator.com/"
              className="underline"
              target="_blank"
            >
              Pixelmator Pro
            </Link>
            . Click any photo to view it in full resolution.
          </p>
        </div>

        <div className="mt-8">
          {photos
            .sort((a, b) => {
              return Date.parse(b.date) - Date.parse(a.date)
            })
            .map((photo) => {
              const date = new Date(photo.date)
              return (
                <div key={photo.id}>
                  <Link href={`photos/photo${photo.id}.png`}>
                    <Image
                      src={`/photos/photo${photo.id}.png`}
                      alt={photo.title}
                      width={512}
                      height={512}
                      className="mt-8 mb-2"
                    />
                    <h4>{photo.title}</h4>
                    <p className="opacity-50">
                      {photo.location} &middot;{" "}
                      {date.toLocaleString("en-US", {
                        year: "numeric",
                        month: "long",
                        day: "numeric",
                      })}
                    </p>
                  </Link>
                </div>
              )
            })}
        </div>
      </main>
    </>
  )
}
