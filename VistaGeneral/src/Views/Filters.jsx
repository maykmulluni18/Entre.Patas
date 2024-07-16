import { useState, useEffect } from "react";
import { listEnableApiMascota } from "../config/api";
import axios from "axios";
import { Link } from "react-router-dom";

const Filters = () => {
  // const [images, setImages] = useState(null);
  const [listaMascotas, setListaMascotas] = useState([]);

  const [petNames, setPetNames] = useState([]);
  const [petRace, setPetRace] = useState([]);
  const [petAge, setPetAges] = useState([]);
  const [petTamanio, setPetTamanio] = useState([]);
  const [petSexo, setPetSexo] = useState([]);
  const [petPeso, setPetPeso] = useState([]);

  // const [mobileFilterOpen, setMobileFilterOpen] = React.useState(false);
  // const [colorFilters, setColorFilters] = useState([]);
  // const [categoryFilters, setCategoryFilters] = useState([]);
  // const [sizeFilters, setSizeFilters] = useState([]);

  async function listMascotas() {
    console.log(listEnableApiMascota);
    try {
      const response = await axios.get(listEnableApiMascota);
      if (response.status === 200) {
        console.log(response.data.data);
        setListaMascotas(response.data.data);
        const names = [
          ...new Set(response.data.data.map((item) => item.pet_type.name)),
        ];
        setPetNames(names);

        const namesRace = [
          ...new Set(response.data.data.map((item) => item.type_race.name)),
        ];
        setPetRace(namesRace);

        const namesAge = [
          ...new Set(response.data.data.map((item) => item.age)),
        ];
        setPetAges(namesAge);

        const namesTamanio = [
          ...new Set(response.data.data.map((item) => item.tamanio)),
        ];
        setPetTamanio(namesTamanio);
        const namesPeso = [
          ...new Set(response.data.data.map((item) => item.peso)),
        ];
        setPetPeso(namesPeso);
        const namesSexo = [
          ...new Set(response.data.data.map((item) => item.sex)),
        ];
        setPetSexo(namesSexo);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  const [selectedTipoMascota, setSelectedTipoMascota] = useState([]);
  const [selectedTipoRaza, setSelectedTipoRaza] = useState([]);
  const [selectedEdad, setSelectedEdad] = useState([]);

  const [selectedSexo, setSelectedSexo] = useState([]);
  const [selectedPeso, setSelectedPeso] = useState([]);
  const [selectedTamanio, setSelectedTamanio] = useState([]);

  useEffect(() => {
    listMascotas();
  }, [
    selectedTipoMascota,
    selectedTipoRaza,
    selectedEdad,
    selectedSexo,
    selectedPeso,
    selectedTamanio,
  ]);

  // const toggleFilter = (filter, setFilter, value) => {
  //   setFilter((prev) =>
  //     prev.includes(value)
  //       ? prev.filter((item) => item !== value)
  //       : [...prev, value]
  //   );
  // };

  const handleFilterChange = (setSelectedState) => (e) => {
    const { value } = e.target;
    setSelectedState((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  const listTemplate = (listaMascotas, layout) => {
    console.log(listaMascotas);
    console.log(
      selectedTipoMascota,
      selectedTipoRaza,
      selectedEdad,
      selectedSexo,
      selectedPeso,
      selectedTamanio
    );

    const filteredList = listaMascotas.filter(
      (mascota) =>
        (selectedTipoMascota.length === 0 ||
          selectedTipoMascota.includes(mascota.pet_type.name)) &&
        (selectedTipoRaza.length === 0 ||
          selectedTipoRaza.includes(mascota.type_race.name)) &&
        (selectedEdad.length === 0 || selectedEdad.includes(mascota.age)) &&
        (selectedSexo.length === 0 || selectedSexo.includes(mascota.sex)) &&
        (selectedPeso.length === 0 || selectedPeso.includes(mascota.peso)) &&
        (selectedTamanio.length === 0 ||
          selectedTamanio.includes(mascota.tamanio))
    );

    return (
      <>
        {filteredList.map((mascota) => (
          <div
            key={mascota.id}
            className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg"
          >
            <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
              <img
                style={{ width: "200px", height: "200px" }}
                src={mascota.imagen_url}
                alt="ui/ux review check"
              />
              <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
              <button
                className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="button"
                data-ripple-dark="true"
              ></button>
            </div>
            <div className="p-6">
              <div className="mb-3 flex items-center justify-between">
                <h5 className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased">
                  {mascota.name}
                </h5>
                <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
                  :)
                </p>
              </div>
              <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
                {mascota.description}
              </p>
            </div>
            <div className="p-6 pt-3">
              <Link to={`/VistaGeneral/${mascota.id}`}>
                <button
                  className="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                  type="button"
                  data-ripple-light="true"
                >
                  Ver Mascota
                </button>
              </Link>
            </div>
          </div>
        ))}
      </>
    );
  };

  // const Footer = () => {
  //   return (
  //     <div className="w-full pt-5 px-4 mb-8 mx-auto">
  //       <div className="text-sm text-gray-700 py-1">
  //         Made with{" "}
  //         <a
  //           className="text-gray-700 font-semibold"
  //           href="https://www.material-tailwind.com/docs/html/card?ref=tailwindcomponents"
  //           target="_blank"
  //         >
  //           Material Tailwind
  //         </a>{" "}
  //         by{" "}
  //         <a
  //           href="https://www.creative-tim.com?ref=tailwindcomponents"
  //           className="text-gray-700 font-semibold"
  //           target="_blank"
  //         >
  //           {" "}
  //           Creative Tim
  //         </a>
  //         .
  //       </div>
  //     </div>
  //   );
  // };

  const containerStyle = {
    cursor: "pointer",
    position: "fixed",
    display: "flex",
    width: "100%",
    height: "100px",
    justifyContent: "center",
    background: "rgba(30, 30, 30, 0.9)",
    bottom: "0px",
    zIndex: 100000,
    transition: "all 1s ease 0s",
    left: "0px",
  };

  const closeButtonStyle = {
    right: "5px",
    top: "5px",
    width: "25px",
    cursor: "pointer",
    minWidth: "auto",
    height: "25px",
    position: "absolute",
    zIndex: 99,
    margin: "0px",
  };

  const shadowStyle = {
    position: "absolute",
    width: "100%",
    height: "100%",
    boxShadow: "rgba(0, 0, 0, 0.3) 0px -180px 100px -110px inset",
    zIndex: 9,
  };

  const arrowContainerStyle = {
    position: "absolute",
    display: "flex",
    justifyContent: "center",
    top: "0px",
    zIndex: 15,
    width: "30vw",
    minWidth: "auto",
    height: "5vh",
    maxHeight: "5vh",
  };

  const arrowImageStyle = {
    top: "5px",
    height: "1.8vh",
    maxHeight: "1.8vh",
    width: "auto",
    minWidth: "auto",
    position: "absolute",
    zIndex: 40,
    transition: "all 1s ease 0s",
    transform: "rotate(180deg)",
  };

  const iframeStyle = {
    bottom: "0px",
    left: "0px",
    width: "100%",
    position: "relative",
    height: "100%",
    transition: "all 1s ease 0s",
    border: "none",
  };

  const logoStyle = {
    left: "10px",
    top: "10px",
    width: "15px",
    minWidth: "auto",
    position: "absolute",
    zIndex: 4500,
    margin: "0px",
  };

  const [showFooter, setShowFooter] = useState(true);

  const handleClose = () => {
    setShowFooter(false);
  };

  return (
    <>
      <div className="bg-white">
        <div>
          <main className="mx-auto max-w-1xl px-4 py-16 sm:px-2 sm:py-12 lg:max-w-7xl lg:px-8">
            <div className="border-b border-gray-200 pb-10">
              <h1 className="text-4xl font-bold tracking-tight text-gray-900 text-center">
                Lista de Mascotas
              </h1>
              <p className="mt-4 text-base text-gray-500 text-center">
                Ayuda en adoptar una Mascota
              </p>
            </div>

            <div className="pt-12 lg:grid lg:grid-cols-12 lg:gap-x-8">
              <aside className="hidden lg:block lg:col-span-3">
                <h2 className="sr-only">Filters</h2>

                <form className="space-y-10 divide-y divide-gray-200">
                  <div>
                    <fieldset>
                      <legend className="block text-sm font-medium text-gray-900">
                        Tipo de Mascota:{" "}
                      </legend>

                      <div className="space-y-3 pt-6">
                        {petNames.map((name, index) => (
                          <div className="flex items-center" key={index}>
                            <input
                              id={`color-${index}`}
                              name="color[]"
                              type="checkbox"
                              value={name}
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              onChange={handleFilterChange(
                                setSelectedTipoMascota
                              )}
                              checked={selectedTipoMascota.includes(name)}
                            />
                            <label
                              htmlFor={`color-${index}`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {name.charAt(0).toUpperCase() + name.slice(1)}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                  <div className="pt-10">
                    <fieldset>
                      <legend className="block text-sm font-medium text-gray-900">
                        Tipo de Raza
                      </legend>
                      <div className="space-y-3 pt-6">
                        {petRace.map((name, index) => (
                          <div className="flex items-center" key={index}>
                            <input
                              id={`types-${index}`}
                              name="color[]"
                              type="checkbox"
                              value={name}
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              onChange={handleFilterChange(setSelectedTipoRaza)}
                              checked={selectedTipoRaza.includes(name)}
                            />
                            <label
                              htmlFor={`color-${index}`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {name.charAt(0).toUpperCase() + name.slice(1)}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                  {/* <div className="pt-10">
                  <fieldset>
                    <legend className="block text-sm font-medium text-gray-900">
                      Edad
                    </legend>
                    <div className="space-y-3 pt-6">
                      {petAge.map((name, index) => (
                        <div className="flex items-center" key={index}>
                          <input
                            id={`age-${index}`}
                            name="age[]"
                            type="checkbox"
                            value={name}
                            className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                            onChange={handleFilterChange(setSelectedEdad)}
                            checked={selectedEdad.includes(name)}
                          />
                          <label
                            htmlFor={`age-${index}`}
                            className="ml-3 text-sm text-gray-600"
                          >
                            {name}
                          </label>
                        </div>
                      ))}
                    </div>
                  </fieldset>
                </div> */}

                  <div className="pt-10">
                    <fieldset>
                      <legend className="block text-sm font-medium text-gray-900">
                        Sexo
                      </legend>
                      <div className="space-y-3 pt-6">
                        {petSexo.map((name, index) => (
                          <div className="flex items-center" key={index}>
                            <input
                              id={`sexo-${index}`}
                              name="sexo[]"
                              type="checkbox"
                              value={name}
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              onChange={handleFilterChange(setSelectedSexo)}
                              checked={selectedSexo.includes(name)}
                            />
                            <label
                              htmlFor={`sexo-${index}`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>

                  <div className="pt-10">
                    <fieldset>
                      <legend className="block text-sm font-medium text-gray-900">
                        Peso
                      </legend>
                      <div className="space-y-3 pt-6">
                        {petPeso.map((name, index) => (
                          <div className="flex items-center" key={index}>
                            <input
                              id={`peso-${index}`}
                              name="peso[]"
                              type="checkbox"
                              value={name}
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              onChange={handleFilterChange(setSelectedPeso)}
                              checked={selectedPeso.includes(name)}
                            />
                            <label
                              htmlFor={`peso-${index}`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>

                  <div className="pt-10">
                    <fieldset>
                      <legend className="block text-sm font-medium text-gray-900">
                        Tamaño
                      </legend>
                      <div className="space-y-3 pt-6">
                        {petTamanio.map((name, index) => (
                          <div className="flex items-center" key={index}>
                            <input
                              id={`tamanio-${index}`}
                              name="tamanio[]"
                              type="checkbox"
                              value={name}
                              className="h-4 w-4 rounded border-gray-300 text-indigo-600 focus:ring-indigo-500"
                              onChange={handleFilterChange(setSelectedTamanio)}
                              checked={selectedTamanio.includes(name)}
                            />
                            <label
                              htmlFor={`tamanio-${index}`}
                              className="ml-3 text-sm text-gray-600"
                            >
                              {name}
                            </label>
                          </div>
                        ))}
                      </div>
                    </fieldset>
                  </div>
                  <br></br>

                  <div className="pt-10">
                    <fieldset>
                      <legend className="block text-sm font-medium text-gray-900">
                        <br></br>
                      </legend>
                      <div className="space-y-3 pt-6"></div>
                    </fieldset>
                  </div>
                </form>
              </aside>

              <div className="lg:col-span-9">
                <div className="flex items-center ">
                  <div className="flex items-center">
                    <button
                      type="button"
                      className="inline-block text-sm font-medium text-gray-700 lg:hidden"
                      // onClick={() => setMobileFilterOpen(true)}
                    >
                      Filters
                    </button>
                  </div>
                </div>

                <section aria-labelledby="products-heading" className="pt-6">
                  <h2 id="products-heading" className="sr-only">
                    Products
                  </h2>
                  <div className="grid grid-cols-1 gap-y-10 sm:grid-cols-2 sm:gap-x-6 lg:grid-cols-3 lg:gap-x-8">
                    {/* Product items would be mapped here */}
                    {listTemplate(listaMascotas)}
                  </div>
                </section>
              </div>
            </div>
          </main>
        </div>
      </div>
      {showFooter === true ? (
        <div id="clever-45754-889974-sticky-footer" style={containerStyle}>
          <img
            id="clever-45754-889974-sticky-footer-stickyfooter-close"
            src="https://assets.cleverwebserver.com/Close.png"
            alt="close"
            style={closeButtonStyle}
            onClick={handleClose} // Agrega la función para cerrar al hacer clic
          />
          <div
            id="clever-45754-889974-sticky-footer-shadow"
            style={shadowStyle}
          ></div>
          <div
            id="clever-45754-889974-sticky-footer-arrow"
            style={arrowContainerStyle}
          >
            <img
              src="https://assets.cleverwebserver.com/ArrowMinimal.png"
              alt="arrow"
              id="clever-45754-889974-sticky-footer-arrowimg"
              style={arrowImageStyle}
            />
          </div>
          <iframe
            id="clever-45754-889974-sticky-footer-iframe"
            name="clever-core-ads"
            src="https://sender.cleverwebserver.com/group/45754?id=889974&amp;ref=aHR0cHM6Ly9lbGNvbWVyY2lvLnBlL2RlcG9ydGUtdG90YWwvY29sb21iaWEvZ29sLWNhcmFjb2wtZW4tdml2by1kb25kZS12ZXItY29sb21iaWEtdnMtYXJnZW50aW5hLWVuLXNlbmFsLWNhcmFjb2wtdHYtZ3JhdGlzLWZ1dGJvbC1saWJyZS10di1nb2wtcGxheS1vbmxpbmUtaG95LXBvci1jb3BhLWFtZXJpY2EtMjAyNC12aWRlby1jby1ub3RpY2lhLw%3D%3D&amp;ruri=aHR0cHM6Ly93d3cuZ29vZ2xlLmNvbS8%3D&amp;t=1721102391&amp;cmpId=&amp;fb=0&amp;wl=1&amp;furl=0&amp;sf=0&amp;bw=Q2hyb21l&amp;b=0&amp;m=0&amp;p=TGludXg&amp;res=1920x961&amp;app=&amp;v=2.1.8&amp;s=94b2359571d7c483df964b6fb64f01fa64d1a33d11331d44432088f33bc5ceaf&amp;bv=125&amp;cont=SA&amp;st=W&amp;sdk=&amp;iv=-1&amp;ctr=PE&amp;sz=961&amp;landing=1&amp;hei=288.30"
            title="Clever-iframe"
            frameBorder="0"
            scrolling="no"
            style={iframeStyle}
          ></iframe>
          <a
            href="https://cleveradvertising.com"
            target="_blank"
            rel="nofollow"
            style={{
              color: "rgb(255, 255, 255)",
              textDecoration: "none",
              height: "15px",
              padding: "0px",
              background: "unset",
              overflow: "unset",
            }}
          >
            <img
              id="clever-45754-889974-sticky-footer-logo"
              src="https://assets.cleverwebserver.com/Clever.png"
              alt="Close"
              style={logoStyle}
            />
          </a>
        </div>
      ) : (
        <div></div>
      )}
    </>
  );
};

export default Filters;
