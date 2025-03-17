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
    content:
      "We have been a family-owned business for over 20 years, dedicated to providing homeowners and business owners in the greater Long Island area with superior asphalt paving, repair, and installation services. We will visit your home or business to provide you with a quote for your new blacktop driveway. One of our experienced technicians will assess your driveway and recommend whether it can be repaired or if a full repaving is necessary. No matter the size of your asphalt project, our highly skilled technicians will work diligently to complete it as quickly as possible without compromising quality. We can pave and seal all surfaces, and we are fully insured for your peace of mind.",
    image: "/img/asphalt.jpg",
  },
  assembling: {
    title: "Assembling",
    content:
      "An expert handyman or a team of handymen will assemble anything you purchase in a box. As always, all boxes come with a paper manual and installation instructions. We have the patience and skills to assemble anything from a box. Leave the results to the experts!",
    image: "/img/assembling.jpg",
  },
  basement: {
    title: "Basement",
    content:
      "We have over 15 years of experience in basement waterproofing systems and construction services in the Long Island, NY area. We are known for our excellent customer service and long-lasting relationships. Our goal is to provide cost-effective solutions while educating homeowners on basement issues and how to maximize their space. A dry basement increases home value and offers additional storage or a comfortable living area. If your basement has moisture, mold, or leaks, our waterproofing and crawl space encapsulation systems provide an effective solution. We also have extensive experience in custom home renovations, delivering high-quality design and construction. Our team is recognized for attention to detail, professionalism, and commitment.",
    image: "/img/basement.jpg",
  },
  // bathroom: {
  //   title: "Diseño de Baños Modernos",
  //   content: "Innovadoras soluciones para remodelación de baños...",
  //   image: "/img/bathroom.jpg",
  // },
  // blacktop: {
  //   title: "Pavimentación de Calidad",
  //   content: "Técnicas duraderas para pavimentación residencial y comercial...",
  //   image: "/img/blacktop.jpg",
  // },
  carpentry: {
    title: "Carpentry",
    content:
      "We specialize in finish carpentry and framing carpentry, offering a range of services, including: House extensions and additions Custom doors and windows, as well as store-bought options Base and top molding installation Crown molding in any size or width, anywhere in the house Shed and deck repairs, building, and maintenance Framing for walls, ceilings, and partitions Replacing wood damaged by termites Reinforcing the structure of the house or any area Plywood installation and replacement",
    image: "/img/carpentry.jpg",
  },
  // "ceramic-tile": {
  //   title: "Instalación de Cerámica",
  //   content: "Técnicas profesionales para instalación de pisos y paredes...",
  //   image: "/img/ceramic-tile.jpg",
  // },
  "commercial-work": {
    title: "Comercial Work",
    content:
      "PerfectoRemodel corporation is also a Commercial General Contractor that specializes in New Construction, Tenant Improvements, and Restaurants & Large Renovations. The mission for PerfectoRemodel corp. is to be the company of choice for commercial construction projects. Our commitment is to ensure that each and every one of our clients receive the highest level of communication, honesty and dependability before, during and upon completion of each project",
    image: "/img/comercial-work.jpg",
  },
  decks: {
    title: "Decks",
    content:
      "We offer a range of carpentry services, including finish and framing carpentry, house extensions, custom and store-bought doors and windows, molding installation (base, top, and crown), shed and deck repairs and construction, as well as framing for walls, ceilings, and partitions. We also replace termite-damaged wood, reinforce structures, and handle plywood installation and replacement. Feel free to contact John for more details.",
    image: "/img/decks.jpg",
  },
  // demolition: {
  //   title: "Servicios de Demolición",
  //   content: "Demolición controlada y segura para remodelaciones...",
  //   image: "/img/demolition.jpg",
  // },
  // "dormer-extension": {
  //   title: "Ampliación de Buhardillas",
  //   content: "Maximiza el espacio con extensiones de buhardillas...",
  //   image: "/img/dormer-extension.jpg",
  // },
  "drop-ceiling": {
    title: "Drop Ceiling",
    content:
      "We specialize in drop ceiling services, including the repair and installation of suspended ceilings for various spaces such as offices and basements. Whether you need a simple installation or a more intricate design, we offer high-quality options using 2x2 or 2x4 panels. Our team ensures a professional and clean finish, providing both functionality and aesthetic appeal to enhance the look and feel of your space. Let us help you create a modern, efficient ceiling solution tailored to your needs.",
    image: "/img/drop-ceiling.jpg",
  },
  drywall: {
    title: "Drywall",
    content:
      "We offer comprehensive drywall services, including small patch repairs for residential and commercial properties, large-scale installations, and drywall over metal studs or lumber. We also specialize in overlaying new drywall over existing surfaces, a cost-effective alternative to tearing down or skim coating old walls. Our process involves three coats of joint compound, with drying time allowed between each coat, although we can expedite the process using quick-setting compounds and equipment like fans, heaters, and dehumidifiers. We provide dustless sanding solutions, either by isolating the work area or using vacuum sanders. Additionally, we offer skim coating services to repair damaged surfaces, and in cases of severe damage, we can replace drywall altogether for a more cost-effective solution. In some situations, we also install drywall overlays for added noise or temperature protection. Contact us for a free estimate and learn more about our services.",
    image: "/img/drywall.jpg",
  },
  fence: {
    title: "Fence",
    content:
      "PerfectoRemodel Corp. offers top-quality fence installation and repair services throughout Long Island and New York City. With over 18 years of experience, our licensed and insured team uses the best materials to ensure your fence is built or repaired correctly. We provide free estimates, fast turnaround, and handle jobs of all sizes, whether residential or commercial. Our selection includes chain link, vinyl privacy and picket fences, wood privacy and picket, pool fencing, gates, dog kennels, horse and ranch fences, ornamental iron fences, and more. We also offer fence repair services, including replacing broken boards, mending chain link, and fixing rotting wood. Trust us for all your fencing needs – we guarantee quick, reliable, and professional service every time.",
    image: "/img/fence.jpg",
  },
  flooring: {
    title: "Flooring",
    content:
      "At PerfectoRemodel Corp., we offer a wide range of flooring services to enhance the beauty and functionality of your home. Whether it's the elegance and warmth of wood flooring, the variety of vinyl flooring sheets, or the convenience of peel-and-stick vinyl tiles, we provide top-notch installation. We also specialize in carpet installation, laminate floors (including Pergo), and easy-to-install interlocking pieces. Additionally, we handle marble, granite, porcelain, and ceramic flooring, providing mud work, floor leveling, and surface installation. No matter your flooring needs, we are here to make your home more comfortable and stylish with a brand-new floor.",
    image: "/img/flooring.jpg",
  },
  gutter: {
    title: "Gutter",
    content:
      "Our services include professional gutter cleaning, repairs, and installation of any size project. Whether you need standard or custom gutters, we can tailor the solution to fit your home’s unique needs. Our team ensures that all installations are done efficiently and with high-quality materials, providing long-lasting protection for your property. Contact us today for reliable and affordable gutter services that keep your home safe and dry.",
    image: "/img/flooring.jpg",
  },
  insulation: {
    title: "Insulation",
    content:
      "When winter arrives, proper insulation becomes the best solution to keep your home comfortable and energy-efficient. Insulation helps regulate the temperature inside, preventing heat from escaping during the colder months, which not only keeps your home warm but also reduces energy costs. By effectively insulating your walls, attic, and floors, you can ensure a cozy indoor environment while protecting your home from the harsh winter conditions. Additionally, insulation improves your home's energy efficiency year-round, reducing the strain on your heating system and contributing to a more sustainable living space. Let us help you choose and install the right insulation for your home, ensuring maximum comfort and savings.",
    image: "/img/insulation.jpg",
  },
  // kitchen: {
  //   title: "Remodelación de Cocinas",
  //   content: "Diseños funcionales y modernos para tu cocina...",
  //   image: "/img/kitchen.jpg",
  // },
  // maintenance: {
  //   title: "Mantenimiento Preventivo",
  //   content: "Programas de mantenimiento para instalaciones...",
  //   image: "/img/maintenance.jpg",
  // },
  masonry: {
    title: "Masonry",
    content:
      "With years of experience in masonry, we bring your dream projects to life, turning your vision of beautiful bricks, cement, and stones into reality. Whether you’re looking for concrete work like driveways, walkways, sidewalks, or patios, or brick projects such as pavers, limestone, bluestone, or cobblestone, we’ve got you covered. Our masonry services also include custom patios, stoops, sidewalks, basements, power washing, and more. We specialize in all types of stonework, including retaining walls, pillars, fire pits, and steps. If you need repairs for brick stoops, concrete cracks, or other masonry issues, we offer high-quality, affordable solutions. Let us help bring your outdoor spaces to life with professional masonry services at a great price.",
    image: "/img/masonry.jpg",
  },
  outdoor: {
    title: "Outdoor",
    content:
      "Enhance your outdoor living space and increase the value of your property with beautiful stone patios, walkways, and custom features like fireplaces, fire pits, and outdoor kitchens. Our expert team specializes in durable and versatile stone paving, ideal for patios, poolside areas, and walkways. We offer customized solutions to match your style, with a wide range of colors, patterns, and designs to choose from. Additionally, we create functional retaining walls to make the most of sloped areas in your yard. From columns and mailboxes to pergolas and stairs, we handle all aspects of hardscaping with attention to detail and craftsmanship, ensuring your outdoor area is both functional and visually stunning.",
    image: "/img/outdoor.jpg",
  },
  painting: {
    title: "Painting",
    content:
      "PerfectoRemodel Corp. offers expert interior and exterior painting services for both residential and commercial properties. With years of experience, we provide high-quality painting, including deck, shed, drywall, and flooring treatments, along with color consulting and thorough surface preparation. We ensure a smooth, hassle-free process with clear communication, competitive pricing, and flexible scheduling for commercial projects to minimize disruption. Our licensed and insured team guarantees exceptional results every time, making your home or business look its best. Contact us for a free consultation and estimate.",
    image: "/img/painting.jpg",
  },
  // portico: {
  //   title: "Construcción de Pórticos",
  //   content: "Diseño y construcción de pórticos arquitectónicos...",
  //   image: "/img/portico.jpg",
  // },
  // "retaining-walls": {
  //   title: "Muros de Contención",
  //   content: "Construcción de muros para control de erosión...",
  //   image: "/img/retaining-walls.jpg",
  // },
  power: {
    title: "Power Wash",
    content:
      "PerfectoRemodel Corp. offers top-tier power washing services for both residential and commercial properties, specializing in cleaning everything from condominiums and parking garages to roofs, decks, fences, sidewalks, and more. Using state-of-the-art commercial-grade equipment and high-quality cleaning agents, we deliver a deep, thorough clean that surpasses typical home improvement store solutions. Our skilled team ensures superior workmanship with no shortcuts, leaving your property looking pristine. Trust your valuable investment to our certified experts and experience the remarkable results of our professional exterior cleaning services.",
    image: "/img/power.jpg",
  },
  roof: {
    title: "Roof",
    content:
      "At PerfectoRemodel Corp., we specialize in professional re-roofing and roof replacement services across Long Island and New York City, prioritizing high-quality materials and exceptional service. Whether you're a homeowner or a business owner, we understand the importance of a well-maintained roof, as it protects your property and plays a crucial role in insulation, helping to keep energy costs down. With over 20 years of experience, we provide expert guidance to determine whether your roof needs simple repairs or a full replacement. After a thorough inspection, we’ll help you make an informed decision, ensuring your investment is protected and your roof functions efficiently for years to come.",
    image: "/img/roof.jpg",
  },
  shed: {
    title: "Shed",
    content:
      "At PerfectoRemodel Corp., we specialize in the installation and repair of high-quality siding, including horizontal and vertical vinyl siding, shake-style siding, and shingles. We offer customized solutions to protect your home and enhance its appearance. If your siding is damaged by storms or weather, we can quickly repair it, addressing issues like cracks, leaks, or missing panels. Additionally, new siding improves insulation, making your home more energy efficient. Whether it's installation or repair, we guarantee professional results that enhance your home's aesthetics and functionality.",
    image: "/img/shed.jpg",
  },
  siding: {
    title: "Siding",
    content:
      "En PerfectoRemodel Corp. nos especializamos en la instalación y reparación de revestimientos (siding) de alta calidad, como vinilo horizontal, vertical, y estilo shake o shingle. Ofrecemos soluciones personalizadas para proteger tu hogar y mejorar su apariencia. Si tu siding está dañado por tormentas o desgaste, podemos repararlo rápidamente, resolviendo problemas como grietas, fugas o paneles faltantes. Además, un revestimiento nuevo mejora el aislamiento, haciendo tu hogar más eficiente energéticamente. Ya sea instalación o reparación, garantizamos resultados profesionales que realzan la estética y funcionalidad de tu hogar.",
    image: "/img/siding.jpg",
  },
  site: {
    title: "Site Preparation",
    content:
      "At PerfectoRemodel Corp., we offer complete debris removal and site preparation services, including the removal of tile, kitchen cabinets, flooring, siding, walls, and ceilings, all before any remodeling project. We ensure the area is ready for construction or renovation work, ensuring everything is removed efficiently and professionally. This service is essential for any project, whether remodeling or construction, and we offer it with the highest quality and in record time.",
    image: "/img/site-preparation.jpg",
  },
  tiling: {
    title: "Tiling / Marble",
    content:
      "At PerfectoRemodel Corp., we have years of experience in installing ceramics, marble, porcelain, travertine, stone, as well as hardwood, laminate, and carpeting. We understand how important it is for our clients to have quality work, whether for residential or commercial projects. That’s why we offer personalized service with trained, experienced, and insured installers, ensuring that every project is completed quickly, cleanly, and at an affordable price. We specialize in reducing downtime and labor costs, improving overall productivity at all times. Whether it’s an installation in a kitchen, bathroom, or commercial facility, at PerfectoRemodel Corp., we provide top-quality work, ensuring you get the exact look you want. The perfect job starts with us!",
    image: "/img/tile.jpg",
  },
  wallpaper: {
    title: "Wallpaper de Papel Tapiz",
    content:
      "At PerfectoRemodel Corp., we offer efficient and expert wallpapering services for both residential and commercial properties in New York. With years of experience, our team can transform any room quickly, whether you're looking for a traditional or contemporary style. From feature walls to entire rooms, we apply all types of wallpaper and vinyls, providing color and texture consultations to ensure a perfect finish. We guarantee affordable prices and offer free quotes for all projects, making sure you get the stylish look you desire. Let us bring your space to life with beautiful wallpaper!",
    image: "/img/wallpaper.jpg",
  },
};
export async function generateMetadata({ params }: { params: { slug: string } }) {
  const post = blogPosts[params.slug];
  if (!post) {
    return {
      title: "Page Not Found",
      description: "The page you're looking for doesn't exist.",
      openGraph: {
        img: "/img/not-found.jpg",
        type: "article",
        publishedTime: new Date().toISOString(),
      },
    };
  }
  return {
    title: `${post.title} | Perfecto Remodel`,
    description: post.content,
    openGraph: {
      img: post.image,
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
    <main className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8 py-8 pt-40">
      <article className="flex flex-col md:flex-row gap-8">
        <section className="w-full md:w-1/2">
          <figure className="relative aspect-video rounded-lg overflow-hidden shadow-lg">
            <Image src={post.image} alt={post.title} fill className="object-cover" sizes="(max-width: 768px) 100vw, 50vw" />
          </figure>
        </section>

        <section className="w-full md:w-1/2">
          <h1 className="text-3xl font-bold text-gray-900">{post.title}</h1>
          <p className="mt-4 text-gray-700">{post.content}</p>
        </section>
      </article>
    </main>
  );
}
