"use client";

import { Form } from "./Form";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="@container mx-auto pt-24 lg:pt-28 px-6 lg:px-8 relative">
      {/* Sección superior de contacto (siempre visible) */}
      <header className="flex justify-between items-center mb-12">
        {/* Redes sociales */}
        <nav aria-label="Redes sociales">
          <ul className="flex gap-4">
            <li>
              <Link href="#" className="text-gray-800 hover:text-gray-800">
                <Image width={27} height={27} src="/socials/facebook_black.png" alt="facebook" objectFit="cover" />
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                <Image width={30} height={30} src="/socials/instagram_black.png" alt="instagram" objectFit="cover" />
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                <Image width={30} height={30} src="/socials/whatsapp_black.png" alt="whatsapp" objectFit="cover" />
              </Link>
            </li>
            <li>
              <Link href="#" className="text-gray-600 hover:text-gray-800">
                <Image width={30} height={30} src="/socials/tiktok.png" alt="instagram" objectFit="cover" />
              </Link>
            </li>
          </ul>
        </nav>

        {/* Teléfono */}
        <address className="not-italic">
          <a href="tel:(516)828-1324" className="text-black hover:text-gray-800 font-medium text-xl sm:text-2xl">
            (+516) 828-1324
          </a>
        </address>
      </header>

      {/* Contenido principal y formulario */}
      <div className="grid lg:grid-cols-[1fr_400px] gap-8">
        {/* Contenido Principal */}
        <article className="relative isolate">
          {/* Imagen de fondo detrás del título */}
          <div className="absolute inset-0 -z-10 h-full">
            <Image width={5000} height={5000} src="/img/foto1.jpg" alt="Background" className="object-cover rounded opacity-60 h-full" />
          </div>

          {/* Efectos de fondo decorativos */}
          <div aria-hidden="true" className="absolute inset-x-0 -top-40 -z-20 transform-gpu overflow-hidden blur-3xl sm:-top-80">
            <div
              style={{
                clipPath:
                  "polygon(74.1% 44.1%, 100% 61.6%, 97.5% 26.9%, 85.5% 0.1%, 80.7% 2%, 72.5% 32.5%, 60.2% 62.4%, 52.4% 68.1%, 47.5% 58.3%, 45.2% 34.5%, 27.5% 76.7%, 0.1% 64.9%, 17.9% 100%, 27.6% 76.8%, 76.1% 97.7%, 74.1% 44.1%)",
              }}
              className="relative left-[calc(50%-11rem)] aspect-1155/678 w-[36.125rem] -translate-x-1/2 rotate-[30deg] bg-gradient-to-tr from-gray-200 to-gray-400 opacity-30 sm:left-[calc(50%-30rem)] sm:w-[72.1875rem]"
            />
          </div>

          {/* Contenido del Hero */}
          <main className="mx-auto max-w-2xl py-32 sm:py-48 lg:py-56">
            <header className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-black sm:text-6xl pb-5">
                Transform Your Home, Transform Your Life
              </h1>
              <p className="mt-8 font-bold text-pretty text-black text-base sm:text-lg">
                Have a picture, photo, or sketch in mind? Our mission is to turn your vision into a beautiful project. We’re delighted to offer
                exceptional service, earning the trust of many satisfied clients.
              </p>
            </header>

            <nav className="mt-10 flex items-center justify-center gap-x-6">
              <a
                href="#"
                className="rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
              >
                Get started
              </a>
              <a href="#" className="text-sm/6 font-semibold text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </a>
            </nav>
          </main>
        </article>

        {/* Formulario de Contacto (no pegajoso) */}
        <aside className="p-6 border-t-2 lg:border-l-2 lg:border-t-0 border-gray-100 order-1 lg:order-none">
          <Form />
        </aside>
      </div>
    </section>
  );
}
