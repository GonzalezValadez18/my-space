import React, { useRef, useState, useEffect, useCallback } from "react";

const ProjectCard = ({ project, isReversed = false }) => {
  const videoRef = useRef(null);
  const cardRef = useRef(null);
  const [isPlaying, setIsPlaying] = useState(false);

  // Alternar reproducción en móviles
  const handleTogglePlay = () => {
    if (window.innerWidth < 1024 && project.videoSrc) {
      setIsPlaying(!isPlaying);
    }
  };

  // Hover en escritorio
  const handleMouseEnter = () => {
    if (window.innerWidth >= 1024 && project.videoSrc) {
      setIsPlaying(true);
    }
  };

  const handleMouseLeave = () => {
    if (window.innerWidth >= 1024 && project.videoSrc) {
      setIsPlaying(false);
    }
  };

  // Control de reproducción según isPlaying
  useEffect(() => {
    const videoElement = videoRef.current;
    if (videoElement) {
      if (isPlaying) {
        videoElement.play().catch((error) => {
          console.error("Error al intentar reproducir el video:", error);
          setIsPlaying(false);
        });
      } else {
        videoElement.pause();
        videoElement.load(); // Volver al póster
      }
    }
  }, [isPlaying]);

  // Intersection Observer → pausa si sale de vista
  const handleIntersection = useCallback(
    (entries) => {
      const [entry] = entries;
      if (!entry.isIntersecting && isPlaying) {
        setIsPlaying(false);
      }
    },
    [isPlaying]
  );

  useEffect(() => {
    const observer = new IntersectionObserver(handleIntersection, {
      threshold: 0.2,
    });

    const currentCard = cardRef.current;
    if (currentCard) observer.observe(currentCard);

    return () => {
      if (currentCard) observer.unobserve(currentCard);
    };
  }, [handleIntersection]);

  const cardClasses = `bg-gray-600/70 rounded-lg shadow-2xl lg:flex overflow-hidden ${
    isReversed ? "md:flex-row-reverse" : ""
  }`;

  return (
    <div className="mb-12" ref={cardRef}>
      <div className={cardClasses}>
        <div
          className="group relative lg:w-1/3 w-full cursor-pointer"
          onClick={handleTogglePlay}
          onMouseEnter={handleMouseEnter}
          onMouseLeave={handleMouseLeave}
        >
          <img
            src={project.poster}
            alt={project.title}
            className="w-full h-full object-cover"
          />

          {project.videoSrc && (
            <>
              <video
                ref={videoRef}
                className={`absolute top-0 left-0 w-full h-full object-cover transition-opacity duration-300 ${
                  isPlaying ? "opacity-100" : "opacity-0"
                }`}
                src={project.videoSrc}
                loop
                muted
                playsInline
                poster={project.poster}
              />
              {!isPlaying && (
                <div className="lg:hidden absolute inset-0 flex items-center justify-center bg-black/40 pointer-events-none transition-all duration-300">
                  <svg
                    className="w-16 h-16 text-white opacity-80 group-hover:opacity-100 transform group-hover:scale-110 transition-transform duration-300"
                    fill="currentColor"
                    viewBox="0 0 20 20"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      fillRule="evenodd"
                      d="M10 18a8 8 0 100-16 8 8 0 000 16zM9.555 7.168A1 1 0 008 8v4a1 1 0 001.555.832l3-2a1 1 0 000-1.664l-3-2z"
                      clipRule="evenodd"
                    ></path>
                  </svg>
                </div>
              )}
            </>
          )}
        </div>
        <div className="p-6 md:w-2/3">
          <h2 className="text-xl md:text-3xl mb-2 text-white-800">
            {project.title}
          </h2>
          <p className="text-gray-400 mb-4">{project.description}</p>
          {project.links && project.links.length > 0 && (
            <div className="flex flex-wrap gap-3">
              {project.links.map((link, index) => (
                <a
                  key={index}
                  href={link.url}
                  target="_blank"
                  rel="noopener noreferrer"
                  className="bg-sky-500 hover:bg-sky-600 text-white font-bold py-2 px-4 rounded-full transition-colors duration-300 text-sm shadow-lg hover:shadow-sky-500/50"
                >
                  {link.label}
                </a>
              ))}
            </div>
          )}
        </div>
      </div>
    </div>
  );
};

export default ProjectCard;
