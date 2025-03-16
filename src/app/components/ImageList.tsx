import Image from "next/image";
import Link from "next/link";

export const ImageList = () => {
  const items = [
    {
      title: "Assembling",
      imageSrc: "/icons/assembling.png",
      link: "/blogs/assembling",
    },
    {
      title: "Basement",
      imageSrc: "/icons/basement.png",
      link: "/blogs/basement",
    },
    {
      title: "Bathroom",
      imageSrc: "/icons/bathroom.png",
      link: "/blogs/bathroom",
    },
    {
      title: "Blacktop",
      imageSrc: "/icons/blacktop.png",
      link: "/blogs/blacktop",
    },
    {
      title: "Carpentry",
      imageSrc: "/icons/carpentry.png",
      link: "/blogs/carpentry",
    },
    {
      title: "Ceramic-tile",
      imageSrc: "/icons/ceramic.png",
      link: "/blogs/ceramic-tile",
    },
    {
      title: "Commercial work",
      imageSrc: "/icons/commercial.png",
      link: "/blogs/commercial-work",
    },
    {
      title: "Decks",
      imageSrc: "/icons/decks.png",
      link: "/blogs/decks",
    },
    {
      title: "Demolition",
      imageSrc: "/icons/demolition.png",
      link: "/blogs/demolition",
    },
    {
      title: "Dormer-extension",
      imageSrc: "/icons/dormer.png",
      link: "/blogs/dormer-extension",
    },
    {
      title: "Drop-ceiling",
      imageSrc: "/icons/drop.png",
      link: "/blogs/drop-ceiling",
    },
    {
      title: "Drywall",
      imageSrc: "/icons/drywall.png",
      link: "/blogs/drywall",
    },
    {
      title: "Fence",
      imageSrc: "/icons/fence.png",
      link: "/blogs/fence",
    },
    {
      title: "Flooring",
      imageSrc: "/icons/flooring.png",
      link: "/blogs/flooring",
    },
    {
      title: "Insulation",
      imageSrc: "/icons/insulation.png",
      link: "/blogs/insulation",
    },
    {
      title: "Kitchen",
      imageSrc: "/icons/kitchen.png",
      link: "/blogs/kitchen",
    },
    {
      title: "Maintenance",
      imageSrc: "/icons/maintenance.png",
      link: "/blogs/maintenance",
    },
    {
      title: "Masonry",
      imageSrc: "/icons/masonry.png",
      link: "/blogs/masonry",
    },
    {
      title: "Painting",
      imageSrc: "/icons/painting.png",
      link: "/blogs/painting",
    },
    {
      title: "Portico",
      imageSrc: "/icons/portico.png",
      link: "/blogs/portico",
    },
    {
      title: "Retaining walls",
      imageSrc: "/icons/wall.png",
      link: "/blogs/retaining-walls",
    },
    {
      title: "Roof",
      imageSrc: "/icons/roof.png",
      link: "/blogs/roof",
    },
    {
      title: "Shed",
      imageSrc: "/icons/shed.png",
      link: "/blogs/shed",
    },
    {
      title: "Siding",
      imageSrc: "/icons/siding.png",
      link: "/blogs/siding",
    },
    {
      title: "Wallpaper",
      imageSrc: "/icons/wallpaper.png",
      link: "/blogs/wallpaper",
    },
  ];

  return (
    <section className="@container mx-auto py-8 px-4 max-w-7xl mb-5">
      <header className="text-center">
        <h2 className="font-bold text-4xl pb-8">OUR PROJECTS</h2>
      </header>

      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex flex-col items-center justify-center bg-white rounded-lg hover:shadow-2xl transition-shadow duration-300 p-4 h-40 @sm:h-36 w-full max-w-[200px] mx-auto"
          >
            <Link href={item.link} className="flex flex-col items-center justify-center h-full w-full space-y-2">
              <figure className="relative w-16 h-16 @sm:w-14 @sm:h-14 flex items-center justify-center">
                <Image
                  width={5000}
                  height={5000}
                  src={item.imageSrc}
                  alt={item.title}
                  className="object-contain p-1"
                  sizes="(max-width: 768px) 50vw, 20vw"
                  priority={index < 8}
                />
              </figure>

              <h3 className="text-base @sm:text-sm font-semibold text-gray-800 leading-tight text-center px-2">{item.title}</h3>
            </Link>
          </li>
        ))}
      </ul>
    </section>
  );
};
