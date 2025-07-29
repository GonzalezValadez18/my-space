import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="text-white min-h-screen flex flex-col py-4 px-4 sm:px-10 page-fade-in">
      {/* Sección principal */}
      <div className="flex-1 flex items-center justify-center px-4 sm:px-6 py-12">
        <div className="max-w-6xl w-full flex flex-col md:flex-row items-center gap-10">
          {/* Foto de perfil */}
          <div className="w-60 h-60 rounded-full overflow-hidden shadow-lg">
            <img
              src="/src/assets/photos/picture-profile.webp"
              alt="José Leonardo González Valadez"
              className="object-cover w-full h-full"
            />
          </div>

          {/* Texto de bienvenida */}
          <div className="flex-1 text-center md:text-left">
            <h1 className="text-4xl md:text-5xl font-bold text-white leading-tight mb-4">
              ¡Hola! Soy{" "}
              <span className="text-indigo-400">
                José Leonardo González Valadez
              </span>
            </h1>
            <p className="text-lg sm:text-xl text-gray-300 mb-6">
              Desarrollador Full Stack con experiencia en desarrollo de páginas
              web, aplicaciones móviles, modelado 3D y bases de datos.
              <br />
              Apasionado por construir soluciones eficientes, limpias y
              escalables.
            </p>

            <div className="flex flex-col sm:flex-row justify-center md:justify-start items-center gap-4">
              <a
                href="#/Contact"
                className="inline-flex items-center justify-center bg-indigo-600 text-white px-6 py-2 rounded-full hover:bg-indigo-700 transition text-sm sm:text-base text-center"
              >
                Contáctame
              </a>
              <a
                href="/CV_Jose_Leonardo_Gonzalez_Valadez.pdf"
                className="inline-flex items-center justify-center border border-indigo-600 text-indigo-400 px-6 py-2 rounded-full hover:bg-indigo-50 transition text-sm sm:text-base text-center"
                target="_blank"
                rel="noopener noreferrer"
              >
                Descargar CV
              </a>
            </div>
          </div>
        </div>
      </div>

      {/* Banner inferior */}
      <div className="w-full h-auto md:h-80 flex items-center justify-center">
        <img
          src="/src/assets/banners/hero-devices.svg"
          alt="Banner principal"
          className="h-full object-contain"
        />
      </div>
    </div>
  );
};

export default Home;
