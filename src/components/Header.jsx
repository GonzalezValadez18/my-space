import { useState, useEffect } from "react";
import { Link, NavLink } from "react-router-dom";

const navLinks = [
  { to: "/", text: "Home" },
  { to: "/about", text: "About Me" },
  { to: "/projects", text: "Projects" },
  { to: "/skills", text: "Skills" },
  { to: "/experience", text: "Experience" },
  { to: "/contact", text: "Contact" },
];

function Header() {
  const [isOpen, setIsOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);

  const toggleMenu = () => setIsOpen(!isOpen);
  const closeMenu = () => setIsOpen(false);

  // Desactiva scroll cuando el menú móvil está abierto
  useEffect(() => {
    document.body.style.overflow = isOpen ? "hidden" : "auto";
    return () => {
      document.body.style.overflow = "auto";
    };
  }, [isOpen]);

  // Detectar scroll para hacer fondo sólido
  useEffect(() => {
    const handleScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  const activeLinkStyle = {
    color: "#67e8f9",
  };

  return (
    <>
      <header
        className={`${
          !scrolled ? "bg-violet-950" : "bg-violet-950/80 backdrop-blur-sm"
        } text-white py-2 px-4 sm:px-10 shadow-lg sticky top-0 z-50 transition-colors duration-300`}
      >
        <div className="container mx-auto flex items-center justify-between">
          {/* Logo */}
          <Link to="/" className="flex items-center gap-4" onClick={closeMenu}>
            <img
              src="/assets/logos/logo-brand.webp"
              alt="Logo"
              className="h-12 sm:h-16"
            />
            <div className="hidden sm:flex flex-col justify-center">
              <span className="font-bold text-lg leading-tight">
                José Leonardo
              </span>
              <span className="text-sm leading-tight text-gray-300">
                González Valadez
              </span>
            </div>
          </Link>

          {/* Navegación Desktop */}
          <nav className="hidden md:block">
            <ul className="flex items-center space-x-6">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="hover:text-cyan-300 transition-colors duration-200"
                    style={({ isActive }) =>
                      isActive ? activeLinkStyle : undefined
                    }
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>

          {/* Botón Hamburguesa */}
          <button
            className="md:hidden flex flex-col justify-center items-center w-8 h-8 group z-50"
            onClick={toggleMenu}
            aria-label="Toggle menu"
            aria-expanded={isOpen}
          >
            <span
              className={`block h-0.5 w-6 bg-cyan-300 rounded transform transition duration-300 ease-in-out
                ${isOpen ? "rotate-45 translate-y-1.5" : "-translate-y-1"}`}
            />
            <span
              className={`block h-0.5 w-6 bg-cyan-300 rounded my-1 transition-opacity duration-300 ease-in-out
                ${isOpen ? "opacity-0" : "opacity-100"}`}
            />
            <span
              className={`block h-0.5 w-6 bg-cyan-300 rounded transform transition duration-300 ease-in-out
                ${isOpen ? "-rotate-45 -translate-y-1.5" : "translate-y-1"}`}
            />
          </button>
        </div>

        {/* Menú Móvil */}
        <div
          className={`fixed top-0 right-0 w-full h-screen bg-violet-950/95 backdrop-blur-sm z-40 transition-transform duration-300 ease-in-out
            ${isOpen ? "translate-x-0" : "translate-x-full"}`}
        >
          <nav className="h-full overflow-y-auto flex flex-col justify-center">
            <ul className="flex flex-col items-center space-y-10 py-20">
              {navLinks.map((link) => (
                <li key={link.to}>
                  <NavLink
                    to={link.to}
                    className="text-2xl font-semibold hover:text-cyan-300 transition-colors duration-200"
                    style={({ isActive }) =>
                      isActive ? activeLinkStyle : undefined
                    }
                    onClick={closeMenu}
                  >
                    {link.text}
                  </NavLink>
                </li>
              ))}
            </ul>
          </nav>
        </div>
      </header>
    </>
  );
}

export default Header;
