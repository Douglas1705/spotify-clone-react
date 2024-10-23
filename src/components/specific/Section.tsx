function Section() {
  const sectionGlobal =
    'container mx-auto max-w-screen-2xl min-h-screen bg-blue-600  bg-Spotify bg-cover bg-no-repeat bg-center flex justify-center items-center';
  return (
    <section className={`${sectionGlobal} lg:gap-0 `}>
      <div className="flex flex-col text-center sm:justify-center sm:items-center gap-10 px-4 sm:gap-20 sm:px-8 lg:gap-12">
        <h2 className="text-5xl font-bold text-green-400 sm:text-20rem lg:text-8xl lg:text-teal-800 lg:w-4/5 lg:mt-20 xl:text-9xl ">
          Escutar muda tudo
        </h2>
        <p className="text-base text-white sm:text-4xl lg:text-2xl">
          Milhares de músicas e podcast para explorar. E nem precisa de cartão
          de crédito
        </p>
        <button className="text-2xl text-white bg-green-400 py-5 rounded-full hover:bg-green-900 sm:w-[50%] lg:w-[25%] lg:text-lg">
          OBTENHA O SPOTIFY FREE
        </button>
      </div>
    </section>
  );
}

export default Section;
