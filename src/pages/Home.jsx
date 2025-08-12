import React from "react";
import Cube from "../components/Cube";
import CardPhotoText from "../components/CardPhotoText";
import TextCityNights from "../components/TextCityNights";
import CardProjects from "../components/CardProjects";
import SectionTitle from "../components/SectionTitle";

const projectsData = [
  {
    id: 1,
    imageSrc: "./assets/img/project-dyl.webp",
    altText: "Proyecto Clínica Veterinaria Dyl",
    description:
      "Proyecto Desarrollado para la Clinica Veterinaria Dyl para mostrar los servicios que ofrece, da la posibilidad de agendar una cita via whasapp, muestra la ubicacion y tiene excelente optimizacion SEO. El proyecto fue desarrollado con React y React-Router, para el diseño se utilizo Bootstrap 4, y para la optimizacion de SEO se utilizo Google Tag Manager.",
    links: [
      {
        type: "live",
        url: "https://clinicadyl.com/",
        text: "Ver Demo",
      },
    ],
  },
  {
    id: 2,
    imageSrc: "./assets/img/project-jeg.webp",
    altText: "Portafolio Personal",
    description:
      "Este es mi portafolio personal, donde muestro mis proyectos y habilidades. Creado con React, Tailwind CSS y Vite. Incluye animaciones y un diseño responsivo.",
    links: [
      {
        type: "github",
        url: "https://github.com/GonzalezValadez18/mi-space",
        text: "GitHub",
      },
      { type: "live", url: "https://my-space-kzvt.vercel.app/", text: "Ver Demo" },
    ],
  },
  {
    id: 3,
    imageSrc: "./assets/img/project-progela.webp",
    altText: "Proyecto Progela",
    description:
      "Plataforma web para la gestión de inventario y ventas de la empresa Progela. Desarrollado con el stack MERN (MongoDB, Express, React, Node.js).",
    links: [{ type: "github", url: "#", text: "GitHub (Privado)" }],
  },
];


const Home = () => {
  return (
    <section className="w-full h-100">
      <TextCityNights />
      <SectionTitle title="Acerca de mi" />

      <CardPhotoText />
      <SectionTitle title="Proyectos" />
      <CardProjects projectsData={projectsData} />
      <SectionTitle title="Experiencia" />

      <SectionTitle title="Contactame" />
    </section>
  );
};

export default Home;
