import { notFound } from "next/navigation";
import Image from "next/image";

type BlogPost = {
  title: string;
  content: string;
  image: string;
};

const blogPosts: Record<string, BlogPost> = {
  asphalt: {
    title: "Asphalt Paving",
    content: "Técnicas avanzadas para el ensamblaje de estructuras y muebles...",
    image: "/images/assembling.jpg",
  },
  assembling: {
    title: "Assembling",
    content: "Técnicas avanzadas para el ensamblaje de estructuras y muebles...",
    image: "/images/assembling.jpg",
  },
  basement: {
    title: "Basement",
    content: "Transforma tu sótano en un espacio habitable y funcional...",
    image: "/images/basement.jpg",
  },
  // bathroom: {
  //   title: "Diseño de Baños Modernos",
  //   content: "Innovadoras soluciones para remodelación de baños...",
  //   image: "/images/bathroom.jpg",
  // },
  // blacktop: {
  //   title: "Pavimentación de Calidad",
  //   content: "Técnicas duraderas para pavimentación residencial y comercial...",
  //   image: "/images/blacktop.jpg",
  // },
  carpentry: {
    title: "Carpentry",
    content: "Trabajos en madera con diseños personalizados y funcionales...",
    image: "/images/carpentry.jpg",
  },
  // "ceramic-tile": {
  //   title: "Instalación de Cerámica",
  //   content: "Técnicas profesionales para instalación de pisos y paredes...",
  //   image: "/images/ceramic-tile.jpg",
  // },
  "commercial-work": {
    title: "Comercial Work",
    content: "Soluciones integrales para espacios comerciales...",
    image: "/images/commercial-work.jpg",
  },
  decks: {
    title: "Decks",
    content: "Diseño y construcción de decks exteriores duraderos...",
    image: "/images/decks.jpg",
  },
  // demolition: {
  //   title: "Servicios de Demolición",
  //   content: "Demolición controlada y segura para remodelaciones...",
  //   image: "/images/demolition.jpg",
  // },
  // "dormer-extension": {
  //   title: "Ampliación de Buhardillas",
  //   content: "Maximiza el espacio con extensiones de buhardillas...",
  //   image: "/images/dormer-extension.jpg",
  // },
  "drop-ceiling": {
    title: "Drop Ceiling",
    content: "Instalación profesional de techos suspendidos...",
    image: "/images/drop-ceiling.jpg",
  },
  drywall: {
    title: "Drywall",
    content: "Instalación y reparación de paredes de yeso...",
    image: "/images/drywall.jpg",
  },
  fence: {
    title: "Fence",
    content: "Cercas de seguridad y decorativas para tu propiedad...",
    image: "/images/fence.jpg",
  },
  flooring: {
    title: "Flooring",
    content: "Instalación de diversos tipos de pisos y acabados...",
    image: "/images/flooring.jpg",
  },
  gutter: {
    title: "Gutter",
    content: "Instalación de diversos tipos de pisos y acabados...",
    image: "/images/flooring.jpg",
  },
  insulation: {
    title: "Insulation",
    content: "Soluciones de aislamiento para eficiencia energética...",
    image: "/images/insulation.jpg",
  },
  // kitchen: {
  //   title: "Remodelación de Cocinas",
  //   content: "Diseños funcionales y modernos para tu cocina...",
  //   image: "/images/kitchen.jpg",
  // },
  // maintenance: {
  //   title: "Mantenimiento Preventivo",
  //   content: "Programas de mantenimiento para instalaciones...",
  //   image: "/images/maintenance.jpg",
  // },
  masonry: {
    title: "Masonry",
    content: "Construcción y reparación de estructuras de mampostería...",
    image: "/images/masonry.jpg",
  },
  outdoor: {
    title: "Outdoor",
    content: "Construcción y reparación de estructuras de mampostería...",
    image: "/images/masonry.jpg",
  },
  painting: {
    title: "Painting",
    content: "Servicios de pintura interior y exterior...",
    image: "/images/painting.jpg",
  },
  // portico: {
  //   title: "Construcción de Pórticos",
  //   content: "Diseño y construcción de pórticos arquitectónicos...",
  //   image: "/images/portico.jpg",
  // },
  // "retaining-walls": {
  //   title: "Muros de Contención",
  //   content: "Construcción de muros para control de erosión...",
  //   image: "/images/retaining-walls.jpg",
  // },
  power: {
    title: "Power Wash",
    content: "Instalación y mantenimiento de cubiertas...",
    image: "/images/roof.jpg",
  },
  roof: {
    title: "Roof",
    content: "Instalación y mantenimiento de cubiertas...",
    image: "/images/roof.jpg",
  },
  shed: {
    title: "Shed",
    content: "Construcción de cobertizos y almacenes...",
    image: "/images/shed.jpg",
  },
  siding: {
    title: "Siding",
    content: "Instalación de sistemas de revestimiento...",
    image: "/images/siding.jpg",
  },
  site: {
    title: "Site Preparation",
    content: "Instalación de sistemas de revestimiento...",
    image: "/images/siding.jpg",
  },
  tiling: {
    title: "Tiling / Marble",
    content: "Instalación de sistemas de revestimiento...",
    image: "/images/siding.jpg",
  },
  wallpaper: {
    title: "Wallpaper de Papel Tapiz",
    content: "Aplicación profesional de papel mural...",
    image: "/images/wallpaper.jpg",
  },
};

export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];
  return {
    title: `${post?.title} | Perfecto Remodel`,
    description: post?.content,
    openGraph: {
      images: post?.image,
      type: "article",
      publishedTime: new Date().toISOString(),
    },
  };
}

export default function BlogPostPage({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];

  if (!post) {
    notFound();
  }

  return (
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 mt-40">
      <article className="flex flex-col md:flex-row gap-8">
        <section className="w-full md:w-1/2">
          <figure className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image
              src={post.image}
              alt={`Imagen destacada de ${post.title}`}
              fill
              className="object-cover"
              sizes="(max-width: 768px) 100vw, 50vw"
              priority
            />
          </figure>
        </section>

        <section className="w-full md:w-1/2 space-y-6">
          <header>
            <h1 className="text-3xl md:text-4xl font-bold text-gray-900 mb-4">{post.title}</h1>
          </header>

          <section className="prose prose-lg max-w-none text-gray-600">
            <p className="lead">{post.content}</p>

            <section aria-labelledby="detalles-servicio">
              <h2 id="detalles-servicio" className="text-2xl font-semibold text-gray-900 mt-6 mb-4">
                Detalles del Servicio
              </h2>
              <ul className="list-disc pl-6 space-y-2">
                <li>Materiales de primera calidad</li>
                <li>Personal certificado</li>
                <li>Garantía por escrito</li>
                <li>Cumplimiento de normas de seguridad</li>
              </ul>
            </section>
          </section>
        </section>
      </article>
    </main>
  );
}
