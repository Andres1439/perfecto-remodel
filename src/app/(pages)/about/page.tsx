import Image from "next/image";
import Link from "next/link";

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
        <section className="grid md:grid-cols-2 gap-12 mb-16">
          <figure className="relative h-96 rounded-lg overflow-hidden">
            <Image width={5000} height={5000} src="/img/finalizado.jpg" alt="Before and after kitchen remodel" className="object-cover" />
          </figure>
          <article className="space-y-6">
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
        <section className="py-16 bg-gray-200">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Our Proven Process</h2>
          </header>

          <article className="grid md:grid-cols-4 gap-8">
            <section className="text-center p-6">
              <h3 className="text-xl font-bold mb-4">1. Consultation</h3>
              <p>Free onsite evaluation and project assessment</p>
            </section>

            <section className="text-center p-6">
              <h3 className="text-xl font-bold mb-4">2. Planning</h3>
              <p>Custom design and material selection</p>
            </section>

            <section className="text-center p-6">
              <h3 className="text-xl font-bold mb-4">3. Execution</h3>
              <p>Licensed professionals handle all aspects</p>
            </section>

            <section className="text-center p-6">
              <h3 className="text-xl font-bold mb-4">4. Completion</h3>
              <p>Final walkthrough and warranty registration</p>
            </section>
          </article>
        </section>

        {/* Service Areas */}
        <section className="py-16">
          <header className="text-center mb-12">
            <h2 className="text-3xl md:text-4xl font-bold mb-6">Serving All of Long Island</h2>
          </header>

          <article className="grid md:grid-cols-2 lg:grid-cols-4 gap-8 text-center">
            <section>
              <h3 className="text-xl font-bold mb-4">Nassau County</h3>
              <p>Great Neck</p>
              <p>Manhasset</p>
              <p>Roslyn</p>
              <p>Port Washington</p>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4">Suffolk County</h3>
              <p>Huntington</p>
              <p>Smithtown</p>
              <p>Islip</p>
              <p>Brookhaven</p>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4">Queens</h3>
              <p>Bayside</p>
              <p>Flushing</p>
              <p>Little Neck</p>
              <p>Douglaston</p>
            </section>

            <section>
              <h3 className="text-xl font-bold mb-4">Specialized Services</h3>
              <p>Kitchen Remodeling</p>
              <p>Bathroom Renovation</p>
              <p>Basement Finishing</p>
            </section>
          </article>
        </section>
      </article>

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
