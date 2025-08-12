import React, { useState, useEffect, useRef } from "react";
import throttle from "lodash/throttle";

function useVerticalScrollDirection() {
  const [direction, setDirection] = useState("up");
  const prevScrollY = useRef(window.scrollY);

  useEffect(() => {
    const handleScroll = throttle(() => {
      const currentScrollY = window.scrollY;

      if (currentScrollY > prevScrollY.current) {
        setDirection("down");
      } else {
        setDirection("up");
      }

      prevScrollY.current = currentScrollY;
    }, 200);

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return direction;
}

function Header() {
  //constante del estado del menú en mobiles
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const scrollDirection = useVerticalScrollDirection();

  return (
    <header
      className={`
    fixed top-0 left-0 right-0 z-50
    flex items-center justify-between
    w-full h-[70px] lg:h-[100px]
    px-[20px] lg:px-[300px]
    bg-purple-950 shadow-lg shadow-indigo-500/50
    transition-transform duration-300 ease-in-out
    ${scrollDirection === "down" ? "-translate-y-full" : "translate-y-0"}
  `}
    >
      <div className="flex row h-[90%] w-auto items-center gap-5">
        <a href="/" className="flex h-full">
          <img
            src="./src/assets/photos/picture-profile.webp"
            alt="Jose Leonardo Gonzalez Valadez"
          />
        </a>
        <h1 className="text-gray-100 text-xl">Jose Leonardo</h1>
      </div>
      <ul className="hidden row gap-5 lg:flex ">
        <li className="text-gray-100 hover:bg-purple-800 p-[10px] rounded-lg transition-all duration-300 ease-in-out">
          <a href="">Sobre mi</a>
        </li>
        <li className="text-gray-100 hover:bg-purple-800 p-[10px] rounded-lg transition-all duration-300 ease-in-out">
          <a href="">Proyectos</a>
        </li>
        <li className="text-gray-100 hover:bg-purple-800 p-[10px] rounded-lg transition-all duration-300 ease-in-out">
          <a href="">Experiencia</a>
        </li>
        <li className="text-gray-100 hover:bg-purple-800 p-[10px] rounded-lg transition-all duration-300 ease-in-out">
          <a href="">Contactame</a>
        </li>
      </ul>
      <button
        aria-label="Menú"
        className="lg:hidden me-2"
        onClick={() => setIsMenuOpen(!isMenuOpen)}
      >
        <svg
          width="34"
          height="34"
          viewBox="0 0 34 34"
          fill="none"
          stroke="white"
          strokeWidth="4"
          strokeLinecap="round"
          strokeLinejoin="round"
        >
          <line
            className={`line line1 ${isMenuOpen ? "open" : ""}`}
            x1="5"
            y1="9"
            x2="29"
            y2="9"
          />
          <line
            className={`line line2 ${isMenuOpen ? "open" : ""}`}
            x1="5"
            y1="17"
            x2="29"
            y2="17"
          />
          <line
            className={`line line3 ${isMenuOpen ? "open" : ""}`}
            x1="5"
            y1="25"
            x2="29"
            y2="25"
          />
        </svg>
      </button>
      <div
        className={`${
          isMenuOpen
            ? "transform translate-x-100"
            : "transform translate-x-[100%]"
        } flex lg:hidden absolute top-0 right-0 mt-[70px] w-full h-[100vh] md:w-1/2 bg-purple-950/90 justify-center transition-all duration-500 ease-in-out`}
      >
        <ul className="flex-col lg:hidden w-full">
          <li className="flex text-gray-100 text-2xl active:bg-purple-800 p-[10px] rounded-lg transition-all duration-300 ease-in-out justify-center">
            <a href="">Sobre mi</a>
          </li>
          <li className="flex text-gray-100 text-2xl hover:bg-purple-800 p-[10px] rounded-lg transition-all duration-300 ease-in-out justify-center">
            <a href="">Proyectos</a>
          </li>
          <li className="flex text-gray-100 text-2xl hover:bg-purple-800 p-[10px] rounded-lg transition-all duration-300 ease-in-out justify-center">
            <a href="">Experiencia</a>
          </li>
          <li className="flex text-gray-100 text-2xl hover:bg-purple-800 p-[10px] rounded-lg transition-all duration-300 ease-in-out justify-center">
            <a href="">Contactame</a>
          </li>
        </ul>
      </div>
    </header>
  );
}
export default Header;
