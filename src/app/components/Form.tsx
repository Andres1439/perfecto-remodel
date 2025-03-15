import React from "react";

export const Form = () => {
  return (
    <>
      <section className="px-1 py-10 text-gray-200">
        <form noValidate className="container w-full max-w-xl p-8 mx-auto space-y-6 rounded-md shadow bg-gray-600">
          <header>
            <h2 className="w-full text-3xl font-bold leading-tight text-center">Contact us</h2>
          </header>

          <fieldset className="space-y-6">
            {/* Campo Nombre */}
            <label className="block space-y-2 ">
              <span className="block mb-1 ml-1">Name</span>
              <input
                id="name"
                type="text"
                placeholder=""
                required
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 bg-gray-100"
              />
            </label>

            {/* Campo Email */}
            <label className="block space-y-2">
              <span className="block mb-1 ml-1">Email</span>
              <input
                id="email"
                type="email"
                placeholder=""
                required
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 bg-gray-100"
              />
            </label>

            {/* Nuevo Campo Teléfono */}
            <label className="block space-y-2">
              <span className="block mb-1 ml-1">Phone Number</span>
              <input
                id="phone"
                type="tel"
                placeholder=""
                pattern="[0-9]{3}-[0-9]{3}-[0-9]{4}"
                className="block w-full p-2 rounded focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 bg-gray-100"
              />
            </label>

            {/* Campo Mensaje */}
            <label className="block space-y-2">
              <span className="block mb-1 ml-1">Message</span>
              <textarea
                id="message"
                placeholder="Message..."
                className="block w-full p-2 rounded autoexpand focus:outline-none focus:ring focus:ring-opacity-25 focus:dark:ring-violet-600 bg-gray-100"
                rows={5}
              />
            </label>

            {/* Botón de envío */}
            <menu className="mt-6">
              <button
                type="submit"
                className=" w-full px-4 py-2 font-bold rounded shadow focus:outline-none focus:ring hover:ring focus:ring-opacity-50 focus:dark:ring-violet-600 hover:dark:ring-violet-600 dark:text-gray-50"
              >
                Send
              </button>
            </menu>
          </fieldset>
        </form>
      </section>
    </>
  );
};
