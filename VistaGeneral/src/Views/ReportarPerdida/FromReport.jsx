import { useState, useRef } from "react";
import { useNavigate } from "react-router-dom";
import axios from "axios";
import { postApiReportLoos } from "../../config/api";

const FromReport = () => {
  const [nombre, setNombre] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [color, setColor] = useState("");
  // const [anio, setAnio] = useState("");
  const [imagen, setImagen] = useState("");
  const [description, setDescription] = useState("");
  const [imagenPreview, setImagenPreview] = useState("");
  const [number, setNumber] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  //const toast = useRef(null);

  const inputFileRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImagen(file);
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        setImagenPreview(event.target.result);
      };
    }
  };

  async function getFrom(e) {
    e.preventDefault();

    const body = {
      name: nombre,
      age: age,
      sex: sex,
      color: color,
      imagen: imagen,
      description: description,
      telefono: number,
    };

    try {
      console.log(body);
      const response = await axios.post(postApiReportLoos, body, {
        headers: {
          "Content-Type": "multipart/form-data",
        },
      });
      console.log(response.status)
      if (response.status === 201) {
        console.log('ds')
        // toast.current.show({
        //   severity: "info",
        //   summary: "Actualizacion",
        //   detail: "De Mascota",
        // });

        navigate("/perdida-mascota");
      }
    } catch (error) {
      if (error.response && error.response.data && error.response.data.errors) {
        const serverErrors = error.response.data.errors;
        setErrors(serverErrors);
        console.log("Errores del servidor:", serverErrors);
      } else {
        console.log("Error al obtener los datos", error);
      }
    }
  }

  return (
    <div className="min-h-screen p-6 bg-gray-100 dark:bg-gray-800  flex items-center justify-center sm:items-center">
      <div className="container max-w-screen-lg ">
        <div>
          <div className="bg-white rounded shadow-lg p-4 px-4 md:p-8 mb-6">
            <from>
              <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 lg:grid-cols-3">
                <div className="text-gray-600">
                  {/* <p className="font-medium text-lg">Personal Details</p> */}
                  <p>Seleccionar Imagen.</p>
                  <div className="md:col-span-1">
                    <input
                      id="imagen"
                      type="file"
                      accept="image/*"
                      //value={imagen}
                      ref={inputFileRef}
                      onChange={handleFileChange}
                      className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      value=""
                      placeholder=""
                    />
                  </div>
                  <div>
                    {imagenPreview && (
                      <div>
                        {/* <h4>Imagen de Mascota:</h4> */}
                        <img
                          src={imagenPreview}
                          alt="Selected"
                          height="500px"
                          width="550px"
                        />
                      </div>
                    )}
                  </div>
                </div>

                <div className="lg:col-span-2">
                  <div className="grid gap-4 gap-y-2 text-sm grid-cols-1 md:grid-cols-5">
                    <div className="md:col-span-5">
                      <label>Nombre Mascota</label>
                      <input
                        type="text"
                        name="full_name"
                        value={nombre}
                        onChange={(e) => {
                          setNombre(e.target.value),
                            setErrors({ ...errors, name: "" });
                        }}
                        id="full_name"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      />
                      {errors.name && (
                        <span style={{ color: "red" }} className="error">
                          {errors.name[0]}
                        </span>
                      )}
                    </div>
                    <div className="md:col-span-1">
                      <label>Edad</label>
                      <input
                        type="number"
                        name="age"
                        id="age"
                        value={age}
                        onChange={(e) => {
                          setAge(e.target.value),
                            setErrors({ ...errors, age: "" });
                        }}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                      />
                      {errors.age && (
                        <span style={{ color: "red" }} className="error">
                          {errors.age[0]}
                        </span>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label>Sexo</label>
                      <input
                        type="text"
                        name="sex"
                        id="sex"
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        value={sex}
                        onChange={(e) => {
                          setSex(e.target.value),
                            setErrors({ ...errors, sex: "" });
                        }}
                        placeholder=""
                      />
                      {errors.sex && (
                        <span style={{ color: "red" }} className="error">
                          {errors.sex[0]}
                        </span>
                      )}
                    </div>

                    <div className="md:col-span-2">
                      <label>Color</label>
                      <input
                        type="text"
                        name="color"
                        id="color"
                        value={color}
                        onChange={(e) => {
                          setColor(e.target.value),
                            setErrors({ ...errors, color: "" });
                        }}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                      />
                      {errors.color && (
                        <span style={{ color: "red" }} className="error">
                          {errors.color[0]}
                        </span>
                      )}
                    </div>
                    <div className="md:col-span-5">
                      <label>Descripcion de Mascota</label>
                      <input
                        type="text"
                        name="description"
                        id="description"
                        value={description}
                        onChange={(e) => {
                          setDescription(e.target.value),
                            setErrors({ ...errors, description: "" });
                        }}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                      />
                      {errors.description && (
                        <span style={{ color: "red" }} className="error">
                          {errors.description[0]}
                        </span>
                      )}
                    </div>
                    <div className="md:col-span-5">
                      <label>Numero de Contacto</label>
                      <input
                        type="text"
                        name="number"
                        id="number"
                        value={number}
                        onChange={(e) => {
                          setNumber(e.target.value),
                            setErrors({ ...errors, number: "" });
                        }}
                        className="h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                        placeholder=""
                      />
                      {errors.number && (
                        <span style={{ color: "red" }} className="error">
                          {errors.number[0]}
                        </span>
                      )}
                    </div>

                    {/* <div className="md:col-span-2">
                    <label>Country / region</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="country"
                        id="country"
                        placeholder="Country"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value=""
                      />
                      <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                        <svg
                          className="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                      <button className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                        <svg
                          className="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div> */}

                    {/* <div className="md:col-span-2">
                    <label>State / province</label>
                    <div className="h-10 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <input
                        name="state"
                        id="state"
                        placeholder="State"
                        className="px-4 appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value=""
                      />
                      <button className="cursor-pointer outline-none focus:outline-none transition-all text-gray-300 hover:text-red-600">
                        <svg
                          className="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <line x1="18" y1="6" x2="6" y2="18"></line>
                          <line x1="6" y1="6" x2="18" y2="18"></line>
                        </svg>
                      </button>
                      <button className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-300 hover:text-blue-600">
                        <svg
                          className="w-4 h-4 mx-2 fill-current"
                          xmlns="http://www.w3.org/2000/svg"
                          viewBox="0 0 24 24"
                          stroke="currentColor"
                        >
                          <polyline points="18 15 12 9 6 15"></polyline>
                        </svg>
                      </button>
                    </div>
                  </div> */}

                    {/* <div className="md:col-span-1">
                    <label>Zipcode</label>
                    <input
                      type="text"
                      name="zipcode"
                      id="zipcode"
                      className="transition-all flex items-center h-10 border mt-1 rounded px-4 w-full bg-gray-50"
                      placeholder=""
                      value=""
                    />
                  </div> */}

                    {/* <div className="md:col-span-5">
                    <div className="inline-flex items-center">
                      <input
                        type="checkbox"
                        name="billing_same"
                        id="billing_same"
                        className="form-checkbox"
                      />
                      <label className="ml-2">
                        My billing address is different than above.
                      </label>
                    </div>
                  </div>

                  <div className="md:col-span-2">
                    <label>How many soda pops?</label>
                    <div className="h-10 w-28 bg-gray-50 flex border border-gray-200 rounded items-center mt-1">
                      <button className="cursor-pointer outline-none focus:outline-none border-r border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mx-2"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M5.293 7.293a1 1 0 011.414 0L10 10.586l3.293-3.293a1 1 0 111.414 1.414l-4 4a1 1 0 01-1.414 0l-4-4a1 1 0 010-1.414z" />
                        </svg>
                      </button>
                      <input
                        name="soda"
                        id="soda"
                        placeholder="0"
                        className="px-2 text-center appearance-none outline-none text-gray-800 w-full bg-transparent"
                        value="0"
                      />
                      <button className="cursor-pointer outline-none focus:outline-none border-l border-gray-200 transition-all text-gray-500 hover:text-blue-600">
                        <svg
                          xmlns="http://www.w3.org/2000/svg"
                          className="h-4 w-4 mx-2 fill-current"
                          viewBox="0 0 20 20"
                          fill="currentColor"
                        >
                          <path d="M14.707 12.707a1 1 0 01-1.414 0L10 9.414l-3.293 3.293a1 1 0 01-1.414-1.414l4-4a1 1 0 011.414 0l4 4a1 1 0 010 1.414z" />
                        </svg>
                      </button>
                    </div>
                  </div> */}

                    <div className="md:col-span-5 text-right">
                      <div className="inline-flex items-end">
                        <button
                          onClick={getFrom}
                          className="dark:bg-gray-800 hover:bg-white hover:text-black text-white font-bold py-2 px-4 rounded border border-transparent hover:border-black"
                        >
                          PUBLICAR
                        </button>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            </from>
          </div>
        </div>
      </div>
    </div>
  );
};

export default FromReport;
