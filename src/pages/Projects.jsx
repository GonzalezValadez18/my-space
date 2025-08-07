import React from "react";
import ProjectCard from "../components/ProjectCard";

const Projects = () => {
  // El JSON de proyectos ahora se define directamente aquí
  const projects = [
    {
      id: 1,
      title: "Proximamente - Rediseño de la web de ETN Turistar Lujo",
      description:
        "Se esta rediseñando actualmente la web de ETN Turistar Lujo y de todas sus filiales como son Costa Line, Autovias y Rapidos de Colima, con una nueva interfaz de usuario y una mejor experiencia de usuario. Utilizando Web Components y reestructurando para que se tenga un mayor alcance SEO y GEO.",
      videoSrc: "", // Reemplaza con la URL de tu video
      poster: "/src/assets/img/project-etn.webp",
      // Este proyecto no tiene links para demostrar que el espacio no se muestra.
    },
    {
      id: 2,
      title: "App CRM Progela",
      description:
        "Desarrollo de la aplicación CRM para Progela, una empresa dedicada a la venta de medicamentos y suplementos. Esta aplicación permite gestionar clientes, pedidos y productos de manera eficiente, mejorando la productividad y la organización del equipo de ventas.",
      videoSrc: "/src/assets/media/video-progela.mp4", // Reemplaza con la URL de tu video
      poster: "/src/assets/img/project-progela.webp",
      links: [
        { label: "Ver Documento", url: "/Manual-CRM-Progela-V1.pdf" },
        {
          label: "Ver en GitHub",
          url: "https://github.com/GonzalezValadez18/CrmProgela",
        }, // URL de ejemplo
      ],
    },
    {
      id: 3,
      title: "Pagina web DYL Veterinaria",
      description:
        "Desarrollada con React y Boostrap CSS, esta web se centra en la atención de pacientes de la veterinaria DYL, ofreciendo información sobre los servicios y la atención que se brinda. Además, se incluyen opciones para realizar reservas de citas médicas mediante whatsapp, así como un formulario para contactar con el equipo de atención al cliente. La página se adapta a diferentes dispositivos y tiene un diseño moderno y limpio, lo que facilita la navegación y la experiencia del usuario, al igual que la creacion y administracion de su blog en blogger.",
      videoSrc: "/src/assets/media/video-dyl.mp4",
      poster: "/src/assets/img/project-dyl.webp", // Optional poster image
      links: [
        { label: "Ver en Vivo", url: "https://veterinaria-dyl.vercel.app/" },
        {
          label: "Ver Blog",
          url: "https://dyl-cuidando-huellitas.blogspot.com/",
        },
        {
          label: "Ver App",
          url: "/Mi-mejor-amigo.pdf",
        },
      ],
    },
    {
      id: 4,
      title: "Pagina web de JEG Dev Studio",
      description:
        "Pagina web desarrollada con React, Next.JS y Bootstrap CSS, enfocada en mostrar los servicios de desarrollo web y aplicaciones móviles de JEG Dev Studio. Incluye un portafolio interactivo, testimonios de clientes y un formulario de contacto para consultas. El diseño es responsivo y moderno, optimizado para una excelente experiencia de usuario en todos los dispositivos. Al igual que la administracion de su blog en blogger.",
      videoSrc: "/src/assets/media/video-jeg.mp4",
      poster: "/src/assets/img/project-jeg.webp",
      links: [
        { label: "Ver en Vivo", url: "https://www.jegdevstudios.com/" },
        { label: "Ver Blog", url: "https://blog.jegdevstudios.com/" },
      ],
    },
    // Puedes agregar más proyectos aquí
  ];

  return (
    <div className="text-white min-h-screen flex flex-col py-4 px-4 sm:px-10 page-fade-in">
      <div className="m-1 md:m-10 px-2">
        <h2
          className="text-4xl text-sky-400 text-center"
          style={{ filter: "drop-shadow(0 0 15px #ffffff)" }}
        >
          Mis Proyectos
        </h2>
      </div>
      <div className="p-4 sm:p-20 bg-black-600/50">
        {projects.map((project, index) => (
          <ProjectCard
            key={project.id}
            project={project}
            isReversed={index % 2 !== 0}
          />
        ))}
      </div>
    </div>
  );
};

export default Projects;
