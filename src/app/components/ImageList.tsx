import Image from "next/image";

export const ImageList = () => {
  const items = [
    { title: "Assembling", imageSrc: "/icons/assembling.png" },
    { title: "Basement", imageSrc: "/icons/basement.png" },
    { title: "Bathroom", imageSrc: "/icons/bathroom.png" },
    { title: "Blacktop", imageSrc: "/icons/blacktop.png" },
    { title: "Carpentry", imageSrc: "/icons/carpentry.png" },
    { title: "Ceramic-tile", imageSrc: "/icons/ceramic.png" },
    { title: "Commercial work", imageSrc: "/icons/commercial.png" },
    { title: "Decks", imageSrc: "/icons/decks.png" },
    { title: "Demolition", imageSrc: "/icons/demolition.png" },
    { title: "Dormer-extension", imageSrc: "/icons/dormer.png" },
    { title: "Drop-ceiling", imageSrc: "/icons/drop.png" },
    { title: "Drywall", imageSrc: "/icons/drywall.png" },
    { title: "Fence", imageSrc: "/icons/fence.png" },
    { title: "Flooring", imageSrc: "/icons/flooring.png" },
    { title: "Insulation", imageSrc: "/icons/insulation.png" },
    { title: "Kitchen", imageSrc: "/icons/kitchen.png" },
    { title: "Maintenance", imageSrc: "/icons/maintenance.png" },
    { title: "Masonry", imageSrc: "/icons/masonry.png" },
    { title: "Painting", imageSrc: "/icons/painting.png" },
    { title: "Portico", imageSrc: "/icons/portico.png" },
    { title: "Retaining walls", imageSrc: "/icons/wall.png" },
    { title: "Roof", imageSrc: "/icons/roof.png" },
    { title: "Shed", imageSrc: "/icons/shed.png" },
    { title: "Siding", imageSrc: "/icons/siding.png" },
    { title: "Wallpaper", imageSrc: "/icons/wallpaper.png" },
  ];

  return (
    <section className="hidden md:block @container mx-auto py-8 px-4 max-w-7xl">
      <header className="text-center">
        <h2 className="font-bold text-2xl pb-8">Our Projects</h2>
      </header>

      <ul className="grid grid-cols-1 md:grid-cols-3 lg:grid-cols-5 gap-4">
        {items.map((item, index) => (
          <li
            key={index}
            className="flex flex-col items-center justify-between bg-white rounded-lg hover:shadow-lg transition-shadow duration-300 p-4 h-40 @sm:h-36 w-full max-w-[200px] mx-auto"
          >
            <figure className="relative w-16 h-16 @sm:w-14 @sm:h-14">
              <Image
                src={item.imageSrc}
                alt={item.title}
                fill
                className="object-contain p-1"
                sizes="(max-width: 768px) 50vw, 20vw"
                priority={index < 8}
              />
            </figure>

            <h3 className="text-base @sm:text-sm font-semibold text-gray-800 leading-tight text-center px-2 mt-2">{item.title}</h3>
          </li>
        ))}
      </ul>
    </section>
  );
};
