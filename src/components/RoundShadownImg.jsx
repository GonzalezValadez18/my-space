import React from "react";

const RoundShadownImg = ({ logos = [] }) => {
  return (
    <div className="flex items-center justify-center flex-wrap gap-16 py-12">
      {logos.map((logo, index) => (
        <a
          key={index}
          href={logo.website}
          target="_blank"
          rel="noopener noreferrer"
          className="cursor-pointer transition-transform duration-300 hover:scale-105"
        >
          <img
            src={logo.src}
            alt={logo.alt}
            className="rounded-full w-36 h-36 md:w-48 md:h-48 bg-gray-200/10 p-2 animate-float"
            title={logo.alt}
            style={{
              animationDelay: `${index * 0.7}s`,
            }}
          />
        </a>
      ))}
      <style> 
        {`
          @keyframes float {
            0% {
              box-shadow: 0 5px 15px 0px rgba(0,0,0,0.3);
              transform: translateY(0px);
            }
            50% {
              box-shadow: 0 25px 15px 0px rgba(0,0,0,0.1);
              transform: translateY(-20px);
            }
            100% {
              box-shadow: 0 5px 15px 0px rgba(0,0,0,0.3);
              transform: translateY(0px);
            }
          }
          .animate-float {
            animation: float 5s ease-in-out infinite;
          }
        `}
      </style>
    </div>
  );
};

export default RoundShadownImg;
