import React from "react";

const InfiniteSlider = ({ items, duration = "40s", reverse = false }) => {
  return (
    <div
      className="relative w-full overflow-hidden"
      style={{
        maskImage:
          "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
        WebkitMaskImage:
          "linear-gradient(to right, transparent, black 20%, black 80%, transparent)",
      }}
    >
      <div
        className="flex w-max animate-scroll"
        style={{
          animationDuration: duration,
          animationDirection: reverse ? "reverse" : "normal",
        }}
      >
        {/* Renderiza los items dos veces para un bucle perfecto */}
        {[...items, ...items].map((item, index) => (
          <div
            key={index}
            className="flex-shrink-0 mx-8 flex items-center justify-center"
            style={{ height: "80px" }}
          >
            <img
              src={item.logo}
              alt={item.alt}
              className="max-h-16 max-w-full"
              title={item.alt}
            />
          </div>
        ))}
      </div>
      <style>
        {`
          @keyframes scroll {
            from { transform: translateX(0); }
            to { transform: translateX(-50%); }
          }
          .animate-scroll { animation: scroll linear infinite; }
        `}
      </style>
    </div>
  );
};

export default InfiniteSlider;
