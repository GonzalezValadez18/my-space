function CardDefinition({
    imageUrl,
    imageAlt,
    title,
    description
}) {
  return (
    <div className="relative group max-w-sm rounded-xl overflow-hidden shadow-xl bg-black/30 backdrop-blur-lg transform transition-all duration-1000 ease-in-out hover:scale-[1.02] cursor-pointer">
      {/* Brillo diagonal */}
      <div className="absolute inset-0 z-0 overflow-hidden pointer-events-none">
        <div className="absolute w-[200%] h-[200%] bg-gradient-to-br from-transparent via-white/20 to-transparent rotate-12 -translate-x-[120%] -translate-y-[120%] group-hover:animate-diagonal-shine" />
      </div>

      {/* Contenido visible */}
      <img
        className="w-3/4 m-auto relative z-10 rounded-md mt-6"
        src={imageUrl}
        alt={imageAlt}
      />
      <div className="px-6 py-4 relative z-10">
        <h2 className="text-2xl text-white mb-2">{title}</h2>
        <p className="text-gray-300 text-l">{description}</p>
      </div>
    </div>
  );
}

export default CardDefinition;
