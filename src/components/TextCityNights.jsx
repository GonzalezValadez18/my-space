function TextCityNights() {
  return (
    <section className="flex flex-col md:flex-row w-full h-[100vh] justify-center items-center gap-4">
      <img
        src="./src/assets/photos/photo-profile.webp"
        className="w-[70%] md:w-1/5 rounded-full shadow-lg shadow-indigo-500/50"
        alt=""
        style={{ animation: "fadeInLeft 1s ease-in-out" }}
      />
      <article>
        <p class="city-nights">Hola, soy</p>
        <p class="city-nights">Jose Leonardo Gonzalez Valadez</p>
        <p class="city-nights">
          Ing. Sistemas Computacionales 
        </p>
      </article>
    </section>
  );
}

export default TextCityNights;
