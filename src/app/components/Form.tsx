import React from "react";

export const Form = () => {
  // Función para manejar el envío del formulario
  const handleSubmit = async (event: React.FormEvent<HTMLFormElement>) => {
    event.preventDefault();

    const form = event.currentTarget;
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
    <section className="px-1 py-10 text-gray-200">
      <form
        onSubmit={handleSubmit}
        action="https://formspree.io/f/xkgjrorn"
        method="POST"
        className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-600"
      >
        <header>
          <h2 className="w-full text-3xl font-bold leading-tight text-center">Contact us</h2>
        </header>

        <fieldset className="space-y-6">
          {/* Nombre */}
          <label className="block space-y-2">
            <span className="block mb-1 ml-1">Name</span>
            <input
              id="name"
              name="name"
              type="text"
              required
              minLength={3}
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 bg-gray-100 text-black"
              pattern="[A-Za-z ]+"
              title="Please enter a valid name (letters and spaces only)"
            />
          </label>

          {/* Email */}
          <label className="block space-y-2">
            <span className="block mb-1 ml-1">Email</span>
            <input
              id="email"
              name="email"
              type="email"
              required
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 bg-gray-100 text-black"
              pattern="[a-z0-9._%+-]+@[a-z0-9.-]+\.[a-z]{2,4}$"
            />
          </label>

          {/* Teléfono */}
          <label className="block space-y-2">
            <span className="block mb-1 ml-1">Phone Number</span>
            <input
              id="phone"
              name="phone"
              type="tel"
              required
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 bg-gray-100 text-black"
              placeholder=""
              pattern="[0-9+() -]{8,20}"
              title="Please enter a valid phone number (numbers and + - () symbols)"
            />
          </label>

          {/* Mensaje */}
          <label className="block space-y-2">
            <span className="block mb-1 ml-1">Message</span>
            <textarea
              id="message"
              name="message"
              required
              minLength={10}
              className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 bg-gray-100 text-black"
              rows={5}
              placeholder="Your message..."
            />
          </label>

          {/* Botón de envío */}
          <menu className="mt-6">
            <button
              type="submit"
              className="w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 hover:bg-gray-800 bg-gray-700 text-white transition-colors"
            >
              Send
            </button>
          </menu>
        </fieldset>
      </form>
    </section>
  );
};
