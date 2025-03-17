"use client";
import React from "react";
import Image from "next/image";

export default function page() {
  return (
    <>
      <section className="dark:bg-gray-100 dark:text-gray-800 pt-24 lg:pt-28">
        <article className="@container max-w-6xl p-6 mx-auto space-y-6 sm:space-y-12">
          <h2 className="font-bold text-4xl pb-8 text-center">EXPERIENCES</h2>
          <header className="max-w-sm gap-3 mx-auto sm:max-w-full group lg:grid lg:grid-cols-12 dark:bg-gray-50">
            <Image
              width={5000}
              height={5000}
              alt="masonry work"
              src="/img/trabajo7.jpg"
              className="object-cover w-full h-64 rounded sm:h-96 lg:col-span-7 dark:bg-gray-500"
            />
            <section className="p-6 space-y-2 lg:col-span-5">
              <h3 className="text-2xl font-semibold sm:text-4xl group-hover:underline group-focus:underline">
                Masonry Work: Building Strong Foundations
              </h3>
              <span className="text-xs dark:text-gray-600">October 12, 2011</span>
              <p>
                Masonry work is about creating strong, lasting structures. Whether it’s building brick walls or installing stone foundations, the
                precision and skill required are essential. The experience of working with masonry materials can be challenging, but the results are
                rewarding when you see the durable, timeless beauty of the finished product.
              </p>
            </section>
          </header>

          <section className="grid justify-center grid-cols-1 gap-6 sm:grid-cols-2 lg:grid-cols-3">
            <article className="max-w-sm mx-auto group dark:bg-gray-50">
              <Image
                width={5000}
                height={5000}
                alt="painting"
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="/img/trabajo9_small.jpg"
              />
              <section className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Painting: The Art of Transformation</h3>
                <span className="text-xs dark:text-gray-600">June 17, 2008</span>
                <p>
                  Painting a home or office is a fantastic way to bring new life into a space. It requires the right preparation and technique to
                  ensure a flawless finish. From choosing the right colors to applying the paint smoothly, the painting experience is a delicate
                  balance of creativity and precision.
                </p>
              </section>
            </article>
            <article className="max-w-sm mx-auto group dark:bg-gray-50">
              <Image
                width={5000}
                height={5000}
                alt="drywall"
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="/img/trabajo8_small.jpg"
              />
              <section className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Drywall: Creating Smooth and Durable Walls</h3>
                <span className="text-xs dark:text-gray-600">May 23, 2013</span>
                <p>
                  Drywall installation is a critical part of construction that requires precision. Whether you’re putting up new walls or repairing
                  damaged ones, the experience of working with drywall involves cutting, hanging, and finishing to create perfectly smooth surfaces
                  ready for painting or wallpaper.
                </p>
              </section>
            </article>
            <article className="max-w-sm mx-auto group dark:bg-gray-50">
              <Image
                width={5000}
                height={5000}
                alt="carpentry"
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="/img/trabajo7_small.jpg"
              />
              <section className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Carpentry: Crafting Beautiful Woodwork</h3>
                <span className="text-xs dark:text-gray-600">August 14, 2006</span>
                <p>
                  Carpentry is more than just building; it’s about shaping wood into functional and beautiful pieces. Whether it’s crafting cabinets,
                  installing trim, or building custom furniture, carpentry work requires both skill and creativity to achieve a perfect finish.
                </p>
              </section>
            </article>
            <article className="max-w-sm mx-auto group dark:bg-gray-50 hidden sm:block">
              <Image
                width={5000}
                height={5000}
                alt="asphalt"
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="/img/trabajo3.jpg"
              />
              <section className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">Asphalt Paving: Smooth Surfaces for Durability</h3>
                <span className="text-xs dark:text-gray-600">July 8, 2009</span>
                <p>
                  Asphalt paving is a crucial part of creating durable, long-lasting driveways, parking lots, and roads. The work involves laying down
                  a smooth, even surface that can withstand heavy traffic. It’s a physically demanding job that requires the right tools and
                  techniques for a flawless finish.
                </p>
              </section>
            </article>
            <article className="max-w-sm mx-auto group dark:bg-gray-50 hidden sm:block">
              <Image
                width={5000}
                height={5000}
                alt="basement"
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="/img/trabajo10_small.jpg"
              />
              <section className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  Basement Renovation: Transforming Underground Spaces
                </h3>
                <span className="text-xs dark:text-gray-600">March 3, 2012</span>
                <p>
                  Renovating a basement is an exciting project that can add valuable living space to your home. Whether you’re creating a home office,
                  entertainment room, or additional bedrooms, the process of basement renovation requires careful planning, including waterproofing
                  and proper insulation to ensure a comfortable, safe environment.
                </p>
              </section>
            </article>
            <article className="max-w-sm mx-auto group dark:bg-gray-50 hidden sm:block">
              <Image
                width={5000}
                height={5000}
                alt="Fence"
                role="presentation"
                className="object-cover w-full rounded h-44 dark:bg-gray-500"
                src="/img/trabajo1_small.jpg"
              />
              <section className="p-6 space-y-2">
                <h3 className="text-2xl font-semibold group-hover:underline group-focus:underline">
                  Fence Installation: Adding Privacy and Security
                </h3>
                <span className="text-xs dark:text-gray-600">October 17, 2015</span>
                <p>
                  Installing a fence is an essential project for homeowners seeking privacy, security, and enhanced curb appeal. Whether it’s a
                  wooden, vinyl, or metal fence, the process requires accuracy and skill to ensure it’s sturdy and aesthetically pleasing. Proper
                  installation also ensures that the fence will last for many years.
                </p>
              </section>
            </article>
          </section>
        </article>
      </section>
    </>
  );
}
