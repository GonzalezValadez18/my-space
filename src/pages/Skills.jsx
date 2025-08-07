import React from "react";
import { Link } from "react-router-dom";
import CardDefinitionTags from "../components/CardDefinitionTags";
import InfiniteSlider from "../components/InfiniteSlider";
import TableRank from "../components/TableRank";

const techLogos = [
  {
    logo: "/assets/logos/logo-react.webp",
    alt: "React",
  },
  {
    logo: "/assets/logos/logo-laravel.webp",
    alt: "Laravel",
  },
  {
    logo: "/assets/logos/logo-next.png",
    alt: "Next.js",
  },
  {
    logo: "/assets/logos/logo-node.svg",
    alt: "Node.js",
  },
  {
    logo: "/assets/logos/logo-android-s.png",
    alt: "Android Studio",
  },
  {
    logo: "/assets/logos/logo-tailwind.png",
    alt: "Tailwind CSS",
  },
  {
    logo: "/assets/logos/logo-bootstrap.png",
    alt: "Bootstrap",
  },
  {
    logo: "/assets/logos/logo-php.webp",
    alt: "PHP",
  },
  {
    logo: "/assets/logos/logo-java.webp",
    alt: "Java",
  },
  {
    logo: "/assets/logos/logo-js.webp",
    alt: "JavaScript",
  },
  {
    logo: "/assets/logos/logo-sqlserver.webp",
    alt: "SQL Server",
  },
  {
    logo: "/assets/logos/logo-mysql.webp",
    alt: "MySQL",
  },
  {
    logo: "/assets/logos/logo-postgresql.webp",
    alt: "PostgreSQL",
  },
  {
    logo: "/assets/logos/logo-oracle.webp",
    alt: "Oracle",
  },
  {
    logo: "/assets/logos/logo-autocad.webp",
    alt: "AutoCAD",
  },
  {
    logo: "/assets/logos/logo-blender.webp",
    alt: "Blender",
  },
  {
    logo: "/assets/logos/logo-c++.webp",
    alt: "C++",
  },
  {
    logo: "/assets/logos/logo-github.webp",
    alt: "GitHub",
  },
  {
    logo: "/assets/logos/logo-wordpress.webp",
    alt: "WordPress",
  },
  {
    logo: "/assets/logos/logo-hubspot.webp",
    alt: "HubSpot",
  },
];

const tableColumns = ["", "", "Nivel de dominio", "Habilidades"];

const tableRows = [
  {
    logo: "/assets/logos/logo-word.webp",
    alt: "Microsoft Word",
    tipo: "Experto",
    area: "Creación de documentos profesionales, formato avanzado, uso de estilos, referencias cruzadas, combinación de correspondencia, y plantillas personalizadas",
  },
  {
    logo: "/assets/logos/logo-excel.webp",
    alt: "Microsoft Excel",
    tipo: "Experto",
    area: "Gestión de datos, fórmulas complejas, tablas dinámicas, gráficos, macros con VBA, y automatización de procesos",
  },
  {
    logo: "/assets/logos/logo-pp.webp",
    alt: "Microsoft PowerPoint",
    tipo: "Avanzado",
    area: "Diseño de presentaciones profesionales, animaciones y transiciones, uso de temas y plantillas, integración de multimedia, y storytelling visual",
  },
  {
    logo: "/assets/logos/logo-access.webp",
    alt: "Microsoft Access",
    tipo: "Avanzado",
    area: "Diseño de bases de datos, relaciones entre tablas, consultas SQL, formularios interactivos, y generación de informes",
  },
];

const Skills = () => {
  return (
    <div className="text-white  flex flex-col py-4 px-4 sm:px-10 page-fade-in">
      <div className="m-1 md:m-10 px-2">
        <h2
          className="text-4xl text-sky-400 text-center"
          style={{ filter: "drop-shadow(0 0 15px #ffffff)" }}
        >
          Mis Habilidades
        </h2>
      </div>
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="m-1 md:m-10 px-2">
          <h2 className="text-4xl  text-center">
            Lenguajes que Hablo con el Código
          </h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-5 justify-center items-center gap-5">
        <CardDefinitionTags
          imageUrl="/assets/logos/logo-php.webp"
          imageAlt="Desarrollo de Aplicaciones Móviles"
          title="Utilizado para desarrollo de apis web"
          description="Lo he utilizado para responder a las peticiones de paginas web
              como de aplicaciones moviles para hacer el manejo de la
              informacion que se recibe y procesarla para responder a la
              peticion de la pagina y las funciones CRUD de la base de datos."
          tags={["#PHP", "#API Rest", "#Backend"]}
        />
        <CardDefinitionTags
          imageUrl="/assets/logos/logo-java.webp"
          imageAlt="Desarrollo de Páginas Web"
          title="Para software y apps"
          description="Lo use como parte del backend en Android Studio para manejar el
              comportamiento, las peticiones y todo lo relacionado con la lógica
              de la aplicación, al igual que para aplicaciones de escritorio o
              sorftware empresarial o industrial."
          tags={["#Java", "#Android", "#Software"]}
        />
        <CardDefinitionTags
          imageUrl="/assets/logos/logo-js.webp"
          imageAlt="Desarrollo de Software"
          title="Para paginas web"
          description="Forma parte del desarrollo de mis aplicaciones web, tanto para el
              frontend como para el backend, utilizando para tener un stack
              unificado para lo visual y el funcional y asi mantener disieños
              modernos y optimizados para cualquier dispositivo."
          tags={["#JavaScript", "#Frontend", "#Backend"]}
        />
      </div>
      <div className="m-1 md:m-10 px-2">
        <h2 className="text-4xl  text-center">Mas tecnologias que manejo</h2>
      </div>
      <div className="flex flex-col md:flex-row mt-5 justify-center items-center gap-5">
        <CardDefinitionTags
          imageUrl="/assets/logos/logo-sql.png"
          imageAlt="Gestión de Bases de Datos"
          title="Gestión de Bases de Datos"
          description="Diseño, implementación y mantenimiento de bases de datos relacionales utilizando SQL. Optimización de consultas, integridad de datos y eficiencia en el manejo de grandes volúmenes de información para aplicaciones modernas."
          tags={[
            { src: "/assets/logos/logo-sqlserver.webp", alt: "SQLServer" },
            { src: "/assets/logos/logo-mysql.webp", alt: "MySQL" },
            {
              src: "/assets/logos/logo-postgresql.webp",
              alt: "PostgreSQL",
            },
            {
              src: "/assets/logos/logo-oracle.webp",
              alt: "Oracle",
            },
          ]}
        />
        <CardDefinitionTags
          imageUrl="/assets/logos/logo-model3d.webp"
          imageAlt="Modelado 3D y Diseño de Planos"
          title="Modelado 3D y Diseño de Planos"
          description="Creación de modelos tridimensionales y planos detallados para representar estructuras, espacios y componentes arquitectónicos. Uso de herramientas especializadas para visualización, planificación y documentación técnica de proyectos."
          tags={[
            { src: "/assets/logos/logo-sketchup.webp", alt: "SketchUp" },
            { src: "/assets/logos/logo-autocad.webp", alt: "AutoCAD" },
            { src: "/assets/logos/logo-blender.webp", alt: "Blender" },
          ]}
        />
      </div>
      <div className="m-1 md:m-10 px-2">
        <h2 className="text-4xl  text-center">
          Mi Caja de Herramientas Tecnológicas
        </h2>
      </div>
      <div className="my-8">
        <InfiniteSlider items={techLogos} duration="60s" />
      </div>
      <div className="m-1 md:m-10 px-2">
        <h2 className="text-4xl  text-center">
          Lenguajes y Paqueterías que manejo como experto
        </h2>
      </div>
      <div className="m-1 md:m-10 px-2">
        <TableRank rows={tableRows} columns={tableColumns} />
      </div>
      <div className="m-1 md:m-10 px-2">
        <h2 className="text-4xl  text-center mb-8">
          Optimizacion y posicionamiento web
        </h2>
        <img
          src="/assets/logos/logo-seo.webp"
          alt="Portfolio"
          className="m-auto w-full md:w-2/5"
          style={{ filter: "drop-shadow(0 0 10px rgba(0, 0, 0, 0.9))" }}
        />
      </div>
    </div>
  );
};

export default Skills;
