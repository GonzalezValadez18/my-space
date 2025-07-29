import React from "react";
import TimeLine from "../components/TimeLine";
import RoundShadownImg from "../components/RoundShadownImg";

const Experience = () => {
  const timelineData = [
    {
      period: "Mar 2023 - Feb 2024",
      title: "ETN Turistar Lujo",
      position: "Desarrollador Web SEO",
      logo: "/src/assets/logos/logo-etn.webp",
      website: "https://etn.com.mx/",
      description:
        "Desarrollo de nueva imagen de la Plataformas Web de grupo IAMSA responsivas, utilizando modularizarían en “web components” con HTML, JavaScript y SASS (CSS) utilizando las mejores prácticas y cuidando la huella y el SEO de dichas páginas, manejo del blog de rápidos de colima con WordPress SEO, creación de “Landing pages”, envió de mail links por medio de HubSpot.",
    },
    {
      period: "Ene 2022 - Feb 2023",
      title: "Progela SA de CV",
      position: "Programador Android",
      logo: "/src/assets/logos/logo-progela.webp",
      website: "https://www.progela.com.mx/",
      description:
        "Desarrollo de una aplicación móvil y web CRM en Android Studio, Java y PHP utilizando el framework (Laravel), implementando el patrón de diseño MVVC (Modelo Vista-Vista-Controlador). Administración de bases de datos en SQL Server, manejo de peticiones API mediante Retrofit hacia endpoints desarrollados en PHP nativo. Realización de pruebas de API con Postman y control de versiones en GitHub. Creación de manuales de usuario y planes de trabajo en Project.",
    },
    {
      period: "Jun 2021 - Dic 2021",
      title: "Dyl Veterinaria",
      position: "Desarrollador de Aplicaciones Móviles",
      logo: "/src/assets/logos/logo-dyl.webp",
      website: "https://veterinaria-dyl.vercel.app/",
      description:
        "Desarrollo de cero de una aplicación en Android Studio en lenguaje Java de gestión de citas para el consultorio veterinario la cual puede ser utilizada por el doctor y por el paciente, conectado a una base de datos MySQL en un servidor de la cual se toman los datos que se muestran a ambas partes, realizando de igual forma el manual técnico, al igual que la creación de una pagina web con optimización SEO desarrollada en React desplegada en vercel y actual mantenimiento de la misma.",
    },
    {
      period: "Mar 2023 - Feb 2024",
      title: "Jeg Dev Studios",
      position: "Desarrollador BACKEND",
      logo: "/src/assets/logos/logo-jeg.webp",
      website: "https://jegdevstudios.com/",
      description:
        "Desarrollo de paginas web, aplicaciones moviles y software a la medida, utilizando las mejores prácticas de desarrollo, optimización SEO y seguridad, así como el uso de bases de datos SQL y NoSQL. Implementación de servicios en la nube y mantenimiento de servidores.",
    },
  ];

  const companyLogos = timelineData.map((job) => ({
    src: job.logo,
    alt: `${job.title} logo`,
    website: job.website,
  }));

  return (
    <div className="text-white flex flex-col py-5 md:py-10 px-4 md:px-10 page-fade-in">
      <div className="m-1 md:m-10 px-2">
        <h2
          className="text-4xl text-sky-400 text-center"
          style={{ filter: "drop-shadow(0 0 15px #ffffff)" }}
        >
          Experiencia Laboral
        </h2>
      </div>
      <div className="m-1 md:m-10 px-2">
        <h3 className="text-xl  text-center">
          Estoy orgulloso de haber colaborado con algunas empresas increíbles:{" "}
        </h3>
      </div>
      <RoundShadownImg logos={companyLogos} />

      <TimeLine events={timelineData} />
    </div>
  );
};

export default Experience;
