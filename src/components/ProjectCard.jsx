import React, { useRef } from "react";

const ProjectCard = ({ project, isReversed = false }) => {
  const videoRef = useRef(null);

  const handleMouseEnter = () => {
    if (videoRef.current) {
      videoRef.current.play();
    }
  };

  const handleMouseLeave = () => {
    if (videoRef.current) {
      videoRef.current.pause();
      videoRef.current.load();
    }
  };

  const cardClasses = `bg-gray-600/70 rounded-lg shadow-2xl md:flex overflow-hidden ${
    isReversed ? "md:flex-row-reverse" : ""
  }`;

  return (
    <div className="mb-12">
      <div className={cardClasses}>
        <div
          className="group relative md:w-1/3 w-full"
          onMouseEnter={project.videoSrc ? handleMouseEnter : undefined}
          onMouseLeave={project.videoSrc ? handleMouseLeave : undefined}
        >
          <img
            src={project.poster}
            alt={project.title}
            className="w-full h-full object-cover"
          />
          {project.videoSrc && (
            <video
              ref={videoRef}
              className="absolute top-0 left-0 w-full h-full object-cover opacity-0 group-hover:opacity-100 transition-opacity duration-300"
              src={project.videoSrc}
              loop
              muted
              playsInline
            />
          )}
        </div>
        <div className="p-6 md:w-2/3">
          <h2 className="text-xl md:text-3xl mb-2 text-white-800">
            {project.title}
          </h2>
          <p className="text-gray-400">{project.description}</p>
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;