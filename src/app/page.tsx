import Hero from "./components/Hero";
import CardSection from "./components/CardSection";
import Image from "next/image";
import { Gallery } from "./components/Gallery";

export default function Home() {
  return (
    <>
      <Hero />
      <CardSection />
      {/* Description */}
      <div className="p-5 mx-auto sm:p-10 md:p-16 bg-gray-700 dark:text-gray-800">
        <div className="flex flex-col max-w-3xl mx-auto overflow-hidden rounded">
          <Image width={5000} height={5000} src="/img/foto2.jpg" alt="remodelacion" className="w-full h-60 sm:h-96 dark:bg-gray-500" />
          <div className="p-6 pb-12 m-4 mx-auto -mt-16 space-y-6 lg:max-w-2xl sm:px-10 sm:mx-12 lg:rounded-md bg-gray-200">
            <div className="space-y-2">
              <a rel="noopener noreferrer" href="/services" className="inline-block text-2xl font-semibold sm:text-3xl">
                Our goal and mission – upload picture, draw on top, we will see too at the same time{" "}
              </a>
              <p className="text-xs dark:text-gray-600">
                By
                <a rel="noopener noreferrer" href="#" className="text-xs hover:underline">
                  John
                </a>
              </p>
            </div>
            <div className="dark:text-gray-800">
              <p>
                PerfectoRemodel corp. provide best quality home improvements and remodeling needs all over Long island – New York city. Our mission is
                to serve customers with such a focus and desire that our customers deserve with respect trust happy enjoyable, exciting, and most
                importantly successful for everyone. One phone call does everything.
              </p>
              <p>Open 24 hours / 7 days – We accept credit card.</p>
              <p>Nassau county (516) 238-0038 Suffolk county (631)629-4242</p>
            </div>
          </div>
        </div>
      </div>
      <Gallery />
    </>
  );
}
