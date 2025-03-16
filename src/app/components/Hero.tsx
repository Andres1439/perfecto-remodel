"use client";
import { Form } from "./Form";
import Image from "next/image";
import Link from "next/link";

export default function Hero() {
  return (
    <section className="@container mx-auto pt-20 px-6 lg:px-8 relative">
      {/* Sección superior de contacto (siempre visible) */}
      <header className="flex justify-between items-center mb-4">
        {/* Redes sociales */}
        <nav aria-label="Redes sociales" className="pt-3">
          <ul className="flex gap-4">
            <li>
              <Link
                href="https://www.facebook.com/p/Perfectoremodel-100067177120371/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-800 hover:text-gray-800"
                aria-label="Facebook de PerfectoRemodel"
              >
                <Image width={27} height={27} src="/socials/facebook_black.png" alt="facebook" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.instagram.com/perfectoremodel/"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
                aria-label="Instagram de PerfectoRemodel"
              >
                <Image width={30} height={30} src="/socials/instagram_black.png" alt="instagram" />
              </Link>
            </li>
            <li>
              <Link
                href="https://wa.me/+15163870059?text=Hello,%20I%20want%20to%20contact%20you%20about%20your%20services"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
                aria-label="Contactar por Whatsapp"
              >
                <Image width={30} height={30} src="/socials/whatsapp_black.png" alt="whatsapp" />
              </Link>
            </li>
            <li>
              <Link
                href="https://www.tiktok.com/@perfectoremodelnewyork?lang=en"
                target="_blank"
                rel="noopener noreferrer"
                className="text-gray-600 hover:text-gray-800"
                aria-label="Tiktok de PerfectoRemodel"
              >
                <Image width={30} height={30} src="/socials/tiktok.png" alt="instagram" />
              </Link>
            </li>
          </ul>
        </nav>

        {/* Teléfono */}
        <address className="not-italic">
          <Link href="tel:(516)2380038" className="text-black hover:text-gray-800 font-medium text-xl sm:text-2xl">
            (+516) 238-0038
          </Link>
        </address>
      </header>

      {/* Contenido principal y formulario */}
      <section className="grid lg:grid-cols-[1fr_400px] gap-8">
        {/* Contenido Principal */}
        <article className="relative isolate">
          {/* Imagen de fondo detrás del título */}
          <section className="absolute inset-0 -z-10 h-full">
            <Image width={5000} height={5000} src="/img/foto1.jpg" alt="Background" className="object-cover rounded opacity-60 h-full" />
          </section>

          {/* Contenido del Hero */}
          <main className="mx-auto max-w-2xl py-32 sm:py-30 lg:pb-36">
            <header className="text-center">
              <h1 className="text-5xl font-semibold tracking-tight text-balance text-black sm:text-7xl pb-4">
                Transform Your Home, Transform Your Life
              </h1>
              <p className="mt-8 font-bold text-pretty text-black text-base sm:text-xl">
                Have a picture, photo, or sketch in mind? Our mission is to turn your vision into a beautiful project. We’re delighted to offer
                exceptional service, earning the trust of many satisfied clients.
              </p>
            </header>

            <nav className="mt-10 flex items-center justify-center gap-x-6">
              <Link
                href="/contact"
                className="rounded-md bg-gray-800 px-3.5 py-2.5 text-sm font-semibold text-white shadow-xs hover:bg-gray-700 focus-visible:outline-2 focus-visible:outline-offset-2 focus-visible:outline-gray-800"
              >
                Get started
              </Link>
              <Link href="/services" className="text-sm/6 font-semibold text-gray-900">
                Learn more <span aria-hidden="true">→</span>
              </Link>
            </nav>
          </main>
        </article>

        {/* Formulario de Contacto (no pegajoso) */}
        <aside className="p-6 border-t-2 lg:border-l-2 lg:border-t-0 border-gray-100 order-1 lg:order-none">
          <Form />
        </aside>
      </section>
    </section>
  );
}
