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

  return (
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
                <div className="pt-10">
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
                </div>

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
  );
};

export default Filters;
