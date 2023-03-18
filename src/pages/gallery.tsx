import { useState } from "react";
import Head from "next/head";
import Image from "next/image";
import Link from "next/link";
import photos from "@/pages/api/photos.json";

export type Photo = {
  id: number;
  title: string;
  location: string;
  date: string;
};

export default function Gallery() {
  const [numVisiblePhotos, showPhotos] = useState(10);
  const [useGrid, setViewType] = useState(false);

  function toggleViewType() {
    setViewType(!useGrid);
  }

  return (
    <>
      <Head>
        <title>Tanay Nistala ∙ Gallery</title>
        <meta name="description" content="Photo gallery" />
        <meta name="viewport" content="width=device-width, initial-scale=1" />
        <link rel="icon" href="/favicon.ico" />
      </Head>
      <main className="p-8 font-light">
        <div className="md:max-w-lg md:my-16 mx-auto">
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

        <button
          onClick={toggleViewType}
          className="mt-4 px-8 flex mx-auto opacity-50 hover:opacity-100"
        >
          {useGrid ? "List View" : "Grid View"}
        </button>

        <div
          className={`mt-8 mx-auto gap-8 ${
            useGrid
              ? "grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 md:gap-4"
              : "flex flex-col"
          }`}
        >
          {photos
            .sort((a, b) => {
              return Date.parse(b.date) - Date.parse(a.date);
            })
            .slice(0, numVisiblePhotos)
            .map((photo) => {
              const date = new Date(photo.date);
              return (
                <div key={photo.id} className="mx-auto">
                  <Link href={`photos/photo${photo.id}.png`}>
                    <Image
                      src={`/photos/photo${photo.id}.png`}
                      title={photo.title}
                      alt={`${photo.title}, from ${photo.location}`}
                      width={512}
                      height={512}
                      className="mb-2"
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
              );
            })}

          <div className="w-full mt-8 flex justify-center col-span-3">
            {numVisiblePhotos < photos.length && (
              <button
                className="opacity-50 hover:opacity-100 flex flex-col items-center"
                onClick={() => {
                  showPhotos(Math.min(numVisiblePhotos + 10, photos.length));
                }}
              >
                Show More
                <div>
                  <svg
                    width="15"
                    height="15"
                    viewBox="0 0 15 15"
                    fill="none"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      d="M7.5 2C7.77614 2 8 2.22386 8 2.5L8 11.2929L11.1464 8.14645C11.3417 7.95118 11.6583 7.95118 11.8536 8.14645C12.0488 8.34171 12.0488 8.65829 11.8536 8.85355L7.85355 12.8536C7.75979 12.9473 7.63261 13 7.5 13C7.36739 13 7.24021 12.9473 7.14645 12.8536L3.14645 8.85355C2.95118 8.65829 2.95118 8.34171 3.14645 8.14645C3.34171 7.95118 3.65829 7.95118 3.85355 8.14645L7 11.2929L7 2.5C7 2.22386 7.22386 2 7.5 2Z"
                      fill="currentColor"
                      fillRule="evenodd"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              </button>
            )}
          </div>
        </div>
      </main>
    </>
  );
}
