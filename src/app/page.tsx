import Hero from "./components/Hero";
import CardSection from "./components/CardSection";
import Image from "next/image";
import { Gallery } from "./components/Gallery";
import Link from "next/link";

export default function Home() {
  return (
    <>
      <Hero />
      <CardSection />
      <section className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-700 text-gray-100">
        {/* Contenedor principal más ancho */}
        <article className="flex flex-col max-w-5xl mx-auto overflow-hidden rounded-lg shadow-xl">
          <figure className="relative w-full h-60 sm:h-96">
            <Image
              src="/img/foto2.jpg"
              alt="Professional home remodeling team working on kitchen renovation"
              width={5000}
              height={5000}
              className="object-cover w-full h-full"
              priority
            />
          </figure>

          {/* Contenido ajustado al nuevo ancho */}
          <section className="relative p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-4xl sm:px-12 sm:mx-14 rounded-md bg-gray-200 backdrop-blur-sm">
            <header className="space-y-2">
              <h2 className="text-2xl font-semibold sm:text-3xl text-gray-800">
                <Link href="/services" className="hover:text-blue-600 transition-colors">
                  Transforming Homes, Building Trust - Your Vision, Our Expertise
                </Link>
              </h2>
            </header>

            <article className="prose-lg text-gray-800 space-y-4">
              <p className="text-lg leading-relaxed">
                At PerfectoRemodel Corp., we redefine home improvement excellence across Long Island and New York City. Our fundamental mission
                revolves around three core principles:
              </p>

              <ul className="list-disc pl-8 space-y-3 text-lg">
                <li>Delivering unparalleled craftsmanship with premium materials</li>
                <li>Creating transformative spaces that enhance daily living</li>
                <li>Building lasting relationships through transparency and reliability</li>
              </ul>

              <section className="bg-gray-100 p-6 rounded-lg mt-6">
                <h3 className="text-xl font-semibold mb-3">24/7 Service Commitment</h3>
                <article className="grid grid-cols-1 md:grid-cols-2 gap-4">
                  <section>
                    <p className="text-gray-800">
                      Nassau County:{" "}
                      <a href="tel:5162380038" className="text-blue-600 hover:underline font-medium">
                        (516) 238-0038
                      </a>
                    </p>
                  </section>
                </article>
                <p className="mt-4 text-base text-gray-600">We accept all major credit cards and offer flexible financing options</p>
              </section>
            </article>
          </section>
        </article>
      </section>
      <Gallery />
    </>
  );
}
