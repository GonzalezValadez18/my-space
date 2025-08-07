function Footer() {
  return (
    <footer className="bg-violet-950 text-white p-10 flex items-center justify-between shadow-lg">
      <div className="max-w-6xl mx-auto flex flex-col items-center gap-4 text-center">
        {/* Redes sociales */}
        <div className="flex gap-4">
          <a
            href="https://github.com/jackmercury"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="GitHub"
          >
            <img
              src="/assets/logos/github.svg"
              alt="GitHub"
              className="w-10 h-10 hover:opacity-75 transition"
            />
          </a>
          <a
            href="https://linkedin.com/in/jackmercury"
            target="_blank"
            rel="noopener noreferrer"
            aria-label="LinkedIn"
          >
            <img
              src="/assets/logos/facebook.svg"
              alt="LinkedIn"
              className="w-10 h-10 hover:opacity-75 transition"
            />
          </a>
          <a href="mailto:jack.mercury@correo.com" aria-label="Correo">
            <img
              src="/assets/logos/gmail.svg"
              alt="Correo"
              className="w-10 h-10 hover:opacity-75 transition"
            />
          </a>
        </div>

        {/* Firma */}
        <div className="text-sm">
          © {new Date().getFullYear()} Jack Mercury. Todos los derechos
          reservados.
        </div>
      </div>
    </footer>
  );
}
export default Footer;
