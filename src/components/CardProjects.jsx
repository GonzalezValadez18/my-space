import ProjectLinkIcon from "./ProjectLinkIcon";

function CardProjects({ projectsData }) {
  return (
    <div className="flex flex-col gap-5">
      {projectsData.map((project) => (
        <article
          key={project.id}
          className="flex flex-col md:flex-row gap-5 w-full shadow-lg shadow-indigo-500/50 rounded-md m-auto mb-3"
        >
          <img
            src={project.imageSrc}
            className="w-[90%] md:w-2/5 rounded-l-md rounded-r-md md:rounded-r-none m-auto"
            alt={project.altText}
          />
          <div className="flex flex-col justify-center p-5 gap-4">
            <p className="text-blue-100 text-lg md:text-xl">
              {project.description}
            </p>
            <div className="flex flex-wrap gap-4 mt-4">
              {project.links?.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noreferrer"
                  className="font-bold py-2 px-4 rounded-md shadow-lg shadow-indigo-500/50 bg-purple-800 hover:bg-purple-700 transition-colors text-white flex items-center"
                >
                  <ProjectLinkIcon type={link.type} />
                  <span className="hidden md:inline ml-2">{link.text}</span>
                </a>
              ))}
            </div>
          </div>
        </article>
      ))}
    </div>
  );
}

export default CardProjects;
