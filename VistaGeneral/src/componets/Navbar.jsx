import ImgPortada from "./petImg.jpg";

const Navbar = () => {

  return (
    <div className="w-full">
   
      <div className="flex bg-white" style={{ height: "600px" }}>
        <div className="flex items-center text-center lg:text-left px-8 md:px-12 lg:w-1/2">
          <div>
            <h2 className="font-semibold text-gray-800  text-4xl">
              Salvamento y Bienestar Animal
              <span className="text-indigo-600"> Compañía y Amor</span>
            </h2>
            <p className="mt-2 text-xl text-gray-500 ">
              Adoptar una mascota es una decisión que no solo beneficia al
              animal adoptado, sino también al adoptante y a la comunidad en
              general. Ofrece la oportunidad de salvar y mejorar la vida de un
              animal necesitado, proporciona compañía y amor incondicional,
              promueve la salud mental y emocional, enseña responsabilidad y
              compromiso, fortalece los lazos comunitarios al apoyar a
              organizaciones locales, y puede ser una experiencia enriquecedora
              que aporta felicidad y bienestar tanto a las mascotas como a sus
              dueños.
            </p>
            <div className="flex justify-center lg:justify-start mt-6">
              <a
                className="px-4 py-3 bg-gray-900 text-gray-200 text-lg font-semibold rounded hover:bg-gray-800"
                href="#"
              >
                Contactanos
              </a>
              <a
                className="mx-4 px-4 py-3 bg-gray-300 text-gray-900 text-lg font-semibold
                 rounded hover:bg-gray-400"
                href="#"
              >
                Donar
              </a>
            </div>
          </div>
        </div>
        <div
          className="hidden lg:block lg:w-1/2"
          style={{ clipPath: "polygon(10% 0, 100% 0%, 100% 100%, 0 100%)" }}
        >
          <div
            className="h-full object-cover"
            style={{
              backgroundImage: `url(${ImgPortada})`,
            }}
          >
            <div className="h-full bg-black opacity-25"></div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Navbar;
