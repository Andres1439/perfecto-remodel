"use client"; // Marca este componente como un Client Component

import Image from "next/image";
import React, { useState, useRef, useEffect } from "react";

const ImageCarousel: React.FC = () => {
  const images = [
    { id: 1, src: "/img/licence1.jpg", alt: "licencia 1" },
    { id: 2, src: "/img/licence2.jpg", alt: "licencia 2" },
    { id: 3, src: "/img/licence3.jpg", alt: "licencia 3" },
    { id: 4, src: "/img/licence4.jpg", alt: "licencia 4" },
    { id: 5, src: "/img/licence5.jpeg", alt: "licencia 5" },
    { id: 6, src: "/img/licence6.jpg", alt: "licencia 6" },
    { id: 7, src: "/img/licence7.jpg", alt: "licencia 7" },
    { id: 8, src: "/img/licence8.jpeg", alt: "licencia 8" },
    { id: 9, src: "/img/licence9.jpg", alt: "licencia 9" },
    { id: 10, src: "/img/licence10.jpg", alt: "licencia 10" },
  ];

  const [selectedImage, setSelectedImage] = useState<string | null>(null);
  const carouselRef = useRef<HTMLDivElement>(null);
  const modalRef = useRef<HTMLDivElement>(null);

  const handleImageClick = (src: string) => {
    setSelectedImage(src);
  };

  const closeModal = () => {
    setSelectedImage(null);
  };

  const scroll = (direction: "left" | "right") => {
    if (carouselRef.current) {
      const { scrollLeft, clientWidth } = carouselRef.current;
      const scrollTo = direction === "left" ? scrollLeft - clientWidth : scrollLeft + clientWidth;
      carouselRef.current.scrollTo({ left: scrollTo, behavior: "smooth" });
    }
  };

  // Cerrar el modal al hacer clic fuera de la imagen
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (modalRef.current && !modalRef.current.contains(event.target as Node)) {
        closeModal();
      }
    };

    if (selectedImage) {
      document.addEventListener("mousedown", handleClickOutside);
    }

    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [selectedImage]);

  return (
    <section className="max-w-6xl mx-auto px-4 mb-15">
      <h2 className="text-4xl font-bold text-center mb-10">Licences</h2>
      <article className="relative flex items-center justify-center w-full dark:text-gray-900">
        <button
          aria-label="Slide back"
          type="button"
          onClick={() => scroll("left")}
          className="absolute left-0 z-30 p-2 ml-4 bg-opacity-50 rounded-full focus:outline-none focus:dark:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:dark:ring-gray-600 dark:bg-gray-50"
          title="Anterior"
        >
          <svg width="8" height="14" fill="none" viewBox="0 0 8 14" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
            <path d="M7 1L1 7L7 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </button>

        <article ref={carouselRef} className="flex items-center justify-start w-full h-full gap-6 py-4 mx-auto overflow-auto lg:gap-8 scroll-snap">
          {images.map((image) => (
            <figure key={image.id} className="relative flex-shrink-0 w-full sm:w-auto cursor-pointer" onClick={() => handleImageClick(image.src)}>
              <Image src={image.src} alt={image.alt} width={500} height={500} className="dark:bg-gray-500 h-96 aspect-square" priority />
            </figure>
          ))}
        </article>

        <button
          aria-label="Slide forward"
          type="button"
          onClick={() => scroll("right")}
          className="absolute right-0 z-30 p-2 mr-4 bg-opacity-50 rounded-full focus:outline-none focus:dark:bg-gray-600 focus:ring-2 focus:ring-offset-2 focus:dark:ring-gray-600 dark:bg-gray-50"
          title="Siguiente"
        >
          <svg width="8" height="14" viewBox="0 0 8 14" fill="none" xmlns="http://www.w3.org/2000/svg" className="w-4 h-4">
            <path d="M1 1L7 7L1 13" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round"></path>
          </svg>
        </button>
      </article>

      {selectedImage && (
        <section className="fixed inset-0 z-50 flex items-center justify-center backdrop-blur-sm bg-opacity-50">
          <article ref={modalRef} className="relative max-w-4xl max-h-full">
            <Image src={selectedImage} alt="Selected Image" width={800} height={600} className="object-contain max-w-full max-h-full" />
            <button
              onClick={closeModal}
              className="absolute top-0 right-0 p-2 m-4 text-white bg-gray-800 rounded-full hover:bg-gray-700"
              aria-label="Cerrar modal"
              title="Cerrar"
            >
              <svg width="24" height="24" fill="none" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
                <path d="M18 6L6 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
                <path d="M6 6L18 18" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round" />
              </svg>
            </button>
          </article>
        </section>
      )}
    </section>
  );
};

export default ImageCarousel;
