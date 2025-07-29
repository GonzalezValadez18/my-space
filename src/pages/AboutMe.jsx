import React from "react";
import { Link } from "react-router-dom";
import CardDefinition from "../components/CardDefinition";
import CardFull from "../components/CardFull";

const AboutMe = () => {
  const educationData = [
    {
      degree: "Ingeniería en Sistemas Computacionales",
      institution:
        "Tecnológico de Estudios Superiores del Oriente del Estado de México",
      period: "2019 - 2024",
    },
    {
      degree: "Bachillerato Técnico en Informática",
      institution: "Centro de Bachillerato Tecnológico No. 2 GGC",
      period: "2016-2019",
    },
    {
      degree: "Certificación de Inglés (Nivel B2)",
      institution: "Tecnológico Nacional de México",
      period: "2019-2021",
    },
    {
      degree: "Curso Avanzado de Excel",
      institution: "Udemy",
      period: "2020",
    },
  ];
  return (
    <div className="text-white flex flex-col py-5 md:py-10 px-4 md:px-10 page-fade-in">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="w-60 rounded-full overflow-hidden shadow-lg">
          <img
            src="/src/assets/photos/photo-profile.webp"
            alt="José Leonardo González Valadez"
            className="object-cover w-full"
          />
        </div>
        <div className="m-1 md:m-10 px-2">
          <h2 className="text-4xl  text-center">
            Mi nombre es José Leonardo González Valadez
          </h2>
          <br />
          <h2 className="text-4xl text-center">
            Soy Ingeniero en Sistemas Computacionales
          </h2>
          <br />
          <h3 className="text-3xl  text-center">
            Con especialidad en Aplicaciones Móviles
          </h3>
          <p className="text-lg mt-4 text-center w-3/4 m-auto">
            Soy un desarrollador de software Mexicano con experiencia en el
            desarrollo de aplicativos útiles para uso empresarial, con una
            estructura moderna, intuitiva, funcional y práctica que se adapta a
            las necesidades particulares de cada cliente.
          </p>
        </div>
        <CardFull
          imageUrl="/src/assets/logos/logo-education.png"
          imageAlt="Formación Académica"
          title="Formación Académica"
          items={educationData}
        />
        <div className="m-1 md:m-10 px-2">
          <p className="text-lg mt-4 text-center">
            Contando con 3 años de experiencia en el desarrollo de sistemas
            tales como:
          </p>
        </div>
      </div>

      <div className="flex flex-col md:flex-row mt-5 justify-center items-center gap-5">
        <CardDefinition
          imageUrl="/src/assets/icons/apps.webp"
          imageAlt="Desarrollo de Aplicaciones Móviles"
          title="Desarrollo de Aplicaciones"
          description="Creación y Mantenimiento de apps para dispositivos móviles, con diseños modernos responsivos y optimización de rendimiento, tanto del lado del backend como del lado del frontend."
        />
        <CardDefinition
          imageUrl="/src/assets/icons/web.webp"
          imageAlt="Desarrollo de Páginas Web"
          title="Desarrollo de Páginas Web"
          description="Producción de páginas web modernas, con diseño responsivo y optimización de rendimiento y SEO, tanto del lado del backend como del lado del frontend."
        />
        <CardDefinition
          imageUrl="/src/assets/icons/software.webp"
          imageAlt="Desarrollo de Software"
          title="Desarrollo de Software"
          description="Elaboración de software interno, con diseño moderno, optimización de rendimiento y manejo de maquinaria o conectividad a dispositivos de impresión."
        />
      </div>
      <div className="m-1 md:m-10 px-2">
        <p className="text-lg mt-4 text-center w-3/4 m-auto">
          Además de tener dominio en los siguientes entornos que, a su vez, se
          volvieron un plus en cuanto a manejo de diferentes tecnologías:
        </p>
      </div>
      <div className="flex flex-col md:flex-row mt-5 justify-center items-center gap-5">
        <CardDefinition
          imageUrl="/src/assets/icons/databases.webp"
          imageAlt="Gestión de bases de datos"
          title="Gestión de bases de datos"
          description="Manejo y programación en bases de datos relacionales y no relacionales, generación de reportes mediante queries, consultas complejas y manejo total de datos masivos."
        />
        <CardDefinition
          imageUrl="/src/assets/icons/3d-model.webp"
          imageAlt="Modelado 3D"
          title="Modelado 3D"
          description="Diseño y renderizado de modelos 3D (personajes y entornos) para uso en videojuegos y maquetado de espacios arquitectónicos, de espacios de vivienda y trabajo."
        />
      </div>
    </div>
  );
};

export default AboutMe;
