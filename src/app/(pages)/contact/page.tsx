"use client";
import React from "react";

// Componente reutilizable para íconos SVG
const LocationIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6" aria-hidden="true">
    <path fillRule="evenodd" d="M5.05 4.05a7 7 0 119.9 9.9L10 18.9l-4.95-4.95a7 7 0 010-9.9zM10 11a2 2 0 100-4 2 2 0 000 4z" clipRule="evenodd" />
  </svg>
);

const PhoneIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6" aria-hidden="true">
    <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 5V3z" />
  </svg>
);

const EmailIcon = () => (
  <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 20 20" fill="currentColor" className="w-5 h-5 mr-2 sm:mr-6" aria-hidden="true">
    <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884zM18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
  </svg>
);

export default function Contact() {
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault(); // Evita el envío normal del formulario

    const form = event.currentTarget; // Usamos currentTarget en lugar de target
    const formData = new FormData(form);

    try {
      const response = await fetch(form.action, {
        method: "POST",
        body: formData,
        headers: {
          Accept: "application/json",
        },
      });

      if (response.ok) {
        alert("Thank you for your message!"); // Mensaje de éxito
        form.reset(); // Limpia el formulario
      } else {
        const data = await response.json();
        if (data.errors) {
          alert(data.errors.map((error: { message: string }) => error.message).join(", "));
        } else {
          alert("Oops! There was a problem submitting your form.");
        }
      }
    } catch (error) {
      console.error("Error submitting form:", error); // Muestra el error en la consola
      alert("Oops! There was a problem submitting your form.");
    }
  };

  return (
    <section className="dark:text-gray-900 pt-24 lg:pt-28 my-20">
      <h2 className="font-bold text-4xl pb-12 text-center">CONTACT US</h2>
      <article className="max-w-6xl px-6 mx-auto lg:px-8 grid md:grid-cols-2 md:divide-x">
        {/* Información de Contacto */}
        <aside className="py-6 md:py-6 md:px-6 space-y-6">
          <header>
            <h1 className="text-4xl font-bold">Get in touch</h1>
            <p className="pt-2 pb-4">Fill in the form to start a conversation</p>
          </header>

          <address className="not-italic space-y-4">
            <ul className="space-y-4">
              <li className="flex items-center">
                <LocationIcon />
                <span>10 east 19th street, Huntington station ny 11746</span>
              </li>
              <li>
                <p className="text-red-500">Internal main office: it&apos;s not open for the public</p>
              </li>
              <li className="flex items-center">
                <PhoneIcon />
                <a href="tel:5162380038" className="hover:text-blue-600 transition-colors">
                  (516) 238-0038
                </a>
              </li>
              <li className="flex items-center">
                <EmailIcon />
                <a href="mailto:prybar@perfectoremodel.com" className="hover:text-blue-600 transition-colors">
                  prybar@perfectoremodel.com
                </a>
              </li>
            </ul>
          </address>
        </aside>

        {/* Formulario */}
        <form
          onSubmit={handleSubmit}
          action="https://formspree.io/f/xkgjrorn"
          method="POST"
          className="flex flex-col py-6 space-y-6 md:py-6 md:px-6 bg-gray-300"
        >
          <fieldset className="space-y-6">
            <legend className="sr-only">Contact Information</legend>

            {/* Nombre completo */}
            <label className="block space-y-2">
              <span className="block text-sm font-medium">Full name</span>
              <input
                type="text"
                name="name"
                required
                className="w-full px-4 py-2 rounded-md border focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-100"
              />
            </label>

            {/* Correo electrónico */}
            <label className="block space-y-2">
              <span className="block text-sm font-medium">Email address</span>
              <input
                type="email"
                name="email"
                required
                className="w-full px-4 py-2 rounded-md border focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-100"
              />
            </label>

            {/* Mensaje */}
            <label className="block space-y-2">
              <span className="block text-sm font-medium">Message</span>
              <textarea
                name="message"
                rows={4}
                required
                className="w-full px-4 py-2 rounded-md border focus:ring-2 focus:ring-blue-500 focus:border-transparent dark:bg-gray-100"
                placeholder="How can we help you?"
              ></textarea>
            </label>

            {/* Botón de envío */}
            <button
              type="submit"
              className="w-full md:w-auto px-6 py-3 font-medium rounded-md bg-blue-600 text-white hover:bg-blue-700 transition-colors focus:ring-2 focus:ring-blue-500 focus:ring-offset-2"
            >
              Send Message
            </button>
          </fieldset>
        </form>
      </article>
    </section>
  );
}
