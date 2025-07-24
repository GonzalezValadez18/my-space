function CardFull({ imageUrl, imageAlt, title, items = [] }) {
  return (
    <div className="flex flex-col md:flex-row w-full bg-black/30 my-10 mx-10 px-2 md:px-10 py-10 rounded-xl shadow-xl items-center">
      {/* Contenido visible */}
      <img
        className="w-3/4 md:w-1/3 m-auto relative z-10 rounded-md drop-shadow-lg p-5 bg-white/20"
        src={imageUrl}
        alt={imageAlt}
      />
      <div className="px-6 py-4 relative z-10 flex-1">
        <h2 className="text-3xl text-white mb-4">{title}</h2>
        <ul className="list-disc list-inside text-gray-300 text-lg space-y-3">
          {items.map((item, index) => (
            <li key={index}>
              <span className="text-blue-600">{item.degree}:</span>{" "}
              {item.institution} ({item.period}).
            </li>
          ))}
        </ul>
      </div>
    </div>
  );
}

export default CardFull;
