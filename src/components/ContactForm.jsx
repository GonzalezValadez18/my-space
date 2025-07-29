import { useForm, ValidationError } from "@formspree/react";

function ContactForm() {
  const [state, handleSubmit] = useForm("mzzvglbr");

  if (state.succeeded) {
    return (
      <div className="w-full max-w-2xl mx-auto my-10 p-6 md:p-10 rounded-xl shadow-xl bg-black/30 backdrop-blur-lg text-center">
        <h3 className="text-2xl font-bold text-white mb-4">
          ¡Gracias por tu mensaje!
        </h3>
        <p className="text-gray-300">Me pondré en contacto contigo pronto.</p>
      </div>
    );
  }

  return (
    <div className="w-full max-w-2xl mx-auto my-10 rounded-xl shadow-xl bg-black/30 backdrop-blur-lg">
      <div className="p-6 md:p-10">
        <form onSubmit={handleSubmit}>
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
            <input
              id="nombre"
              type="text"
              name="nombre"
              className="bg-zinc-800/50 border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 placeholder:text-gray-400 transition-colors"
              placeholder="Nombre"
              required
            />
            <input
              id="apellido"
              type="text"
              name="apellido"
              className="bg-zinc-800/50 border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 placeholder:text-gray-400 transition-colors"
              placeholder="Apellido"
            />
            <input
              id="email"
              type="email"
              name="email"
              className="bg-zinc-800/50 border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 placeholder:text-gray-400 transition-colors col-span-1 md:col-span-2"
              placeholder="Correo Electrónico"
              required
            />
            <ValidationError
              prefix="Email"
              field="email"
              errors={state.errors}
              className="text-red-500 text-sm col-span-1 md:col-span-2 -mt-4"
            />
            <input
              id="telefono"
              type="tel"
              name="telefono"
              className="bg-zinc-800/50 border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 placeholder:text-gray-400 transition-colors col-span-1 md:col-span-2"
              placeholder="Teléfono"
            />
            <textarea
              id="mensaje"
              name="mensaje"
              cols="10"
              rows="5"
              className="bg-zinc-800/50 border border-gray-700 text-white px-4 py-3 rounded-md focus:outline-none focus:border-sky-500 focus:ring-1 focus:ring-sky-500 placeholder:text-gray-400 transition-colors col-span-1 md:col-span-2"
              placeholder="Escribe tu mensaje..."
              required
            ></textarea>
            <ValidationError
              prefix="Message"
              field="mensaje"
              errors={state.errors}
              className="text-red-500 text-sm col-span-1 md:col-span-2 -mt-4"
            />
          </div>
          <button
            type="submit"
            disabled={state.submitting}
            className="focus:outline-none mt-6 bg-purple-600 hover:bg-purple-700 disabled:bg-purple-800 disabled:cursor-not-allowed transition-colors duration-300 px-4 py-3 text-white w-full rounded-md cursor-pointer"
          >
            {state.submitting ? "Enviando..." : "Enviar Mensaje"}
          </button>
        </form>
      </div>
    </div>
  );
}

export default ContactForm;
