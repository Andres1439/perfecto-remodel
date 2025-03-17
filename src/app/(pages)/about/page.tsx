import Image from "next/image";
import Link from "next/link";
import Carrousel from "../../components/Carrousel";

export default function AboutPage() {
  return (
    <main className="text-gray-800">
      {/* Hero Section */}
      <section className="relative h-96">
        <Image src="/about-hero.jpg" alt="Our remodeling team at work" fill className="object-cover" priority />
        <header className="absolute inset-0 bg-gray-700 flex items-center justify-center">
          <h1 className="text-4xl md:text-6xl font-bold  text-white text-center">Transforming Homes, Building Trust</h1>
        </header>
      </section>

      {/* Main Content */}
      <article className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-16">
        {/* Company Overview */}
        <section className="prose-xl text-center mb-16">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">About Perfecto Remodel</h2>
          <p className="text-lg md:text-xl leading-relaxed">
            For over a decade, Perfecto Remodel has been the premier home improvement partner for homeowners across Long Island and New York City. Our
            commitment to excellence and customer satisfaction has made us a leader in residential remodeling services.
          </p>
        </section>

        {/* Why Choose Us */}
        <section className="grid md:grid-cols-2 gap-12 mb-16 items-center">
          {/* Imagen */}
          <figure className="relative h-96  overflow-hidden flex justify-center items-center">
            <Image width={500} height={500} src="/img/profile.jpg" alt="Before and after kitchen remodel" className="rounded-lg" />
          </figure>

          {/* Contenido de texto */}
          <article className="space-y-6 text-center md:text-left">
            <header>
              <h2 className="text-3xl font-bold mb-4">Why Choose Perfecto Remodel</h2>
            </header>
            <ul className="space-y-4 list-disc pl-6">
              <li>Full-service remodeling solutions from concept to completion</li>
              <li>NY State licensed and insured professionals</li>
              <li>25+ years combined industry experience</li>
              <li>Transparent pricing with free estimates</li>
              <li>5-year workmanship warranty</li>
            </ul>
          </article>
        </section>

        {/* Our Process */}
        <section className="py-10 bg-gray-200">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Our Proven Process</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We follow a structured and transparent process to ensure your project is completed on time, within budget, and to your satisfaction.
            </p>
          </header>

          <article className="grid md:grid-cols-4 gap-8 px-4">
            {/* Paso 1: Consultation */}
            <section className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <article className="flex justify-center mb-4">
                <span className="text-4xl font-bold text-blue-600">1</span>
              </article>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Consultation</h3>
              <p className="text-gray-600 mb-4">
                We start with a free onsite evaluation to understand your needs and provide a detailed project assessment.
              </p>
            </section>

            {/* Paso 2: Planning */}
            <section className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <article className="flex justify-center mb-4">
                <span className="text-4xl font-bold text-blue-600">2</span>
              </article>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Planning</h3>
              <p className="text-gray-600 mb-4">Our team works with you to create a custom design and select the best materials for your project.</p>
            </section>

            {/* Paso 3: Execution */}
            <section className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <article className="flex justify-center mb-4">
                <span className="text-4xl font-bold text-blue-600">3</span>
              </article>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Execution</h3>
              <p className="text-gray-600 mb-4">Our licensed professionals handle every aspect of the project, ensuring quality and efficiency.</p>
            </section>

            {/* Paso 4: Completion */}
            <section className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <article className="flex justify-center mb-4">
                <span className="text-4xl font-bold text-blue-600">4</span>
              </article>
              <h3 className="text-xl font-bold mb-4 text-gray-800">Completion</h3>
              <p className="text-gray-600 mb-4">
                We conduct a final walkthrough and assist with warranty registration to ensure your complete satisfaction.
              </p>
            </section>
          </article>
        </section>

        {/* Service Areas */}
        <section className="py-16 bg-gray-200">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-4 text-gray-800">Serving All of Long Island</h2>
            <p className="text-lg text-gray-600 max-w-2xl mx-auto">
              We proudly serve communities across Long Island, offering top-quality services tailored to your needs.
            </p>
          </header>

          <article className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
            {/* Nassau County */}
            <section className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Nassau County</h3>
              <ul className="text-gray-600">
                <li className="mb-2">Great Neck</li>
                <li className="mb-2">Manhasset</li>
                <li className="mb-2">Roslyn</li>
                <li className="mb-2">Port Washington</li>
              </ul>
            </section>

            {/* Suffolk County */}
            <section className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Suffolk County</h3>
              <ul className="text-gray-600">
                <li className="mb-2">Huntington</li>
                <li className="mb-2">Smithtown</li>
                <li className="mb-2">Islip</li>
                <li className="mb-2">Brookhaven</li>
              </ul>
            </section>

            {/* Queens */}
            <section className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Queens</h3>
              <ul className="text-gray-600">
                <li className="mb-2">Bayside</li>
                <li className="mb-2">Flushing</li>
                <li className="mb-2">Little Neck</li>
                <li className="mb-2">Douglaston</li>
              </ul>
            </section>

            {/* Specialized Services */}
            <section className="text-center p-6 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow duration-300">
              <h3 className="text-xl font-bold mb-4 text-gray-800">Specialized Services</h3>
              <ul className="text-gray-600">
                <li className="mb-2">Kitchen Remodeling</li>
                <li className="mb-2">Bathroom Renovation</li>
                <li className="mb-2">Basement Finishing</li>
              </ul>
            </section>
          </article>
        </section>
      </article>

      <Carrousel />

      {/* CTA Section */}
      <section className="bg-gray-800 text-white py-16">
        <article className="max-w-4xl mx-auto text-center px-4">
          <h2 className="text-3xl md:text-4xl font-bold mb-6">Ready to Transform Your Home?</h2>
          <p className="text-xl mb-8">Schedule your free consultation today</p>
          <Link href="/contact" className="inline-block bg-blue-600 text-white px-8 py-3 rounded-lg hover:bg-blue-700 transition-colors">
            Get Started Now
          </Link>
        </article>
      </section>
    </main>
  );
}
