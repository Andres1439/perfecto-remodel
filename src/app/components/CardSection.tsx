import Image from "next/image";
import Link from "next/link";

const CardSection = () => {
  const cards = [
    { id: 1, title: "Carpentry", imgSrc: "/icons/carpentry.png", href: "/blogs/carpentry" },
    { id: 2, title: "Painting", imgSrc: "/icons/painting.png", href: "/blogs/painting" },
    { id: 3, title: "Assembling", imgSrc: "/icons/assembling.png", href: "/blogs/assembling" },
    { id: 4, title: "Flooring", imgSrc: "/icons/flooring.png", href: "/blogs/flooring" },
    { id: 5, title: "Fence", imgSrc: "/icons/fence.png", href: "/blogs/fence" },
    { id: 6, title: "Basement", imgSrc: "/icons/basement.png", href: "/blogs/basement" },
  ];

  return (
    <section className="py-8 bg-gray-700 @container p-5 mt-5 w-full">
      <header className="text-center py-12">
        <h2 className="text-2xl sm:text-4xl font-bold text-white">Our Top Projects</h2>
      </header>

      <article className="mx-auto px-2 max-w-7xl">
        <nav className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-3 lg:grid-cols-6 gap-10">
          {cards.map((card) => (
            <Link
              key={card.id}
              href={card.href}
              className="group bg-white rounded-md shadow-sm hover:shadow-xl hover:scale-125 transition-shadow duration-400 flex flex-col items-center p-1.5"
              aria-label={`View ${card.title} projects`}
            >
              <article className="w-full text-center">
                <h3 className="text-xs sm:text-lg font-medium text-gray-700 mb-1">{card.title}</h3>
                <figure className="relative w-full max-w-[80px] h-[60px] sm:max-w-[100px] sm:h-[75px] mx-auto">
                  <Image
                    src={card.imgSrc}
                    alt={`${card.title} icon`}
                    fill
                    sizes="(max-width: 640px) 80px, 100px"
                    className="p-2 scale-75 object-contain"
                  />
                </figure>
              </article>
            </Link>
          ))}
        </nav>
      </article>
    </section>
  );
};

export default CardSection;
