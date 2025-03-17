import React from "react";
import Image from "next/image";
import Link from "next/link";

export const Gallery = () => {
  return (
    <>
      <section className="py-6 dark:bg-gray-100 dark:text-gray-900">
        <div className="container grid grid-cols-2 gap-4 p-4 mx-auto md:grid-cols-4">
          <Image
            src="/img/trabajo3.jpg"
            width={5000}
            height={5000}
            alt="Carpentry Services"
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-3 md:row-start-1 dark:bg-gray-500 aspect-square"
          />
          <Image
            src="/img/trabajo1_small.jpg"
            width={500}
            height={500}
            alt="Custom Woodwork
"
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          <Image
            src="/img/trabajo3_small.jpg"
            width={500}
            height={500}
            alt="Home Renovation
"
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          <Image
            src="/img/trabajo4_small.jpg"
            width={500}
            height={500}
            alt="Residential Construction
"
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          <Image
            src="/img/trabajo5_small.jpg"
            width={500}
            height={500}
            alt="Commercial Construction
"
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          <Image
            src="/img/trabajo2.jpg"
            width={500}
            height={500}
            alt="Home Improvement
"
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          <Image
            src="/img/trabajo1.jpg"
            width={500}
            height={500}
            alt="Professional Carpenter
"
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          <Image
            src="/img/trabajo7.jpg"
            width={5000}
            height={5000}
            alt="Woodworking Services
"
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          <Image
            src="/img/trabajo7_small.jpg"
            width={500}
            height={500}
            alt="Custom Furniture
"
            className="w-full h-full rounded shadow-sm min-h-48 dark:bg-gray-500 aspect-square"
          />
          <Image
            src="/img/trabajo4.jpg"
            width={500}
            height={500}
            alt="Interior Design
"
            className="w-full h-full col-span-2 row-span-2 rounded shadow-sm min-h-96 md:col-start-1 md:row-start-3 dark:bg-gray-500 aspect-square"
          />
        </div>
        <Link href={"https://www.flickr.com/photos/handymanprice/"} target="_noblank" rel="noreferrer">
          <p className="ml-50">To see more, press here...</p>
        </Link>
      </section>
    </>
  );
};
