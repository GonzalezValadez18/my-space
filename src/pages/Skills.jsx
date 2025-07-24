import React from "react";
import { Link } from "react-router-dom";
import CardDefinitionTags from "../components/CardDefinitionTags";


const Skills = () => {
  return (
    <div className="text-white  flex flex-col py-4 px-4 sm:px-10">
      <div className="flex-1 flex flex-col items-center justify-center">
        <div className="m-1 md:m-10 px-2">
          <h2 className="text-4xl  text-center">Lenguajes de programación</h2>
        </div>
      </div>
      <div className="flex flex-col md:flex-row mt-5 justify-center items-center gap-5">
        <CardDefinitionTags
          imageUrl="/src/assets/logos/logo-php.png"
          imageAlt="Desarrollo de Aplicaciones Móviles"
          title="Utilizado para desarrollo de apis web"
          description="Lo he utilizado para responder a las peticiones de paginas web
              como de aplicaciones moviles para hacer el manejo de la
              informacion que se recibe y procesarla para responder a la
              peticion de la pagina y llas funciones CRUD de la base de datos."
          tags={["#PHP", "#API Rest", "#Backend"]}
        />
        <CardDefinitionTags
          imageUrl="/src/assets/logos/logo-java.webp"
          imageAlt="Desarrollo de Páginas Web"
          title="Para software y apps"
          description="Lo use como parte del backend en Android Studio para manejar el
              comportamiento, las peticiones y todo lo relacionado con la lógica
              de la aplicación, al igual que para aplicaciones de escritorio o
              sorftware empresarial o industrial."
          tags={["#Java", "#Android", "#Software"]}
        />
        <CardDefinitionTags
          imageUrl="/src/assets/logos/logo-js.png"
          imageAlt="Desarrollo de Software"
          title="Para paginas web"
          description="Forma parte del desarrollo de mis aplicaciones web, tanto para el
              frontend como para el backend, utilizando para tener un stack
              unificado para lo visual y el funcional y asi mantener disieños
              modernos y optimizados para cualquier dispositivo."
          tags={["#JavaScript", "#Frontend", "#Backend"]}
        />
      </div>
    </div>
  );
};

export default Skills;
