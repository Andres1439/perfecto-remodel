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
    <div className="container mx-auto py-8 p-4">
      <h2 className="text-center font-bold text-2xl py-8">Our Projects</h2>
      <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 ">
        {items.map((item, index) => (
          <div key={index} className="flex items-center bg-white rounded hover:shadow-lg transition-shadow duration-200 h-24">
            {/* Contenedor de la imagen - Versión corregida */}
            <div className="relative w-24 h-24 flex-shrink-0">
              <Image
                src={item.imageSrc} // Corregido de card.imgSrc a item.imageSrc
                alt={item.title} // Corregido de card.title a item.title
                fill
                className="object-contain py-4 scale-50"
                priority={index < 4} // Prioriza carga de primeras imágenes
              />
            </div>

            {/* Contenedor del texto */}
            <div className="flex-1 py-4">
              <h3 className="text-lg font-semibold text-gray-800 truncate">{item.title}</h3>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};
