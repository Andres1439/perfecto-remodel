import Image from "next/image";

const CardSection = () => {
  // Array de cartas
  const cards = [
    { id: 1, title: "Carpentry", imgSrc: "/icons/carpentry.png" },
    { id: 2, title: "Painting", imgSrc: "/icons/painting.png" },
    { id: 3, title: "Assembling", imgSrc: "/icons/assembling.png" },
    { id: 4, title: "Flooring", imgSrc: "/icons/flooring.png" },
    { id: 5, title: "Maintenance", imgSrc: "/icons/maintenance.png" },
    { id: 6, title: "Demolition", imgSrc: "/icons/demolition.png" },
  ];

  return (
    <section className="py-8 bg-gray-700 @container p-5 mt-5 w-full">
      <h2 className="text-center py-12 text-2xl sm:text-4xl font-bold text-white">Our Top Projects</h2>
      <div className="mx-auto px-2 max-w-7xl">
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {cards.map((card) => (
            <div
              key={card.id}
              className="bg-white rounded-md shadow-sm hover:shadow-md transition-shadow duration-200 flex flex-col items-center p-1.5"
            >
              {/* Título */}
              <h3 className="text-xs sm:text-sm font-medium text-gray-700 text-center mb-1">{card.title}</h3>

              {/* Contenedor de imagen ajustable */}
              <div className="relative w-full max-w-[80px] h-[60px] sm:max-w-[100px] sm:h-[75px]">
                <Image src={card.imgSrc} alt={card.title} layout="fill" objectFit="contain" className="p-2 scale-75" />
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default CardSection;
