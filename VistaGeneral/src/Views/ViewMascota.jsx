import { useEffect, useState } from "react";
import {  useParams } from "react-router-dom";
//import { Link } from "react-router-dom";
import ModalView from "./ModalView";
import {
  getIdApiMascota,
  apiPostUserAdoption,
  apiPostAnswer,
} from "../config/api";

//import { getIdApiMascota } from "config/api";

import axios from "axios";

function ViewMascota() {
  const [nameUsers, setNamesUser] = useState("");
  const [fullnameUsers, setFullnameUser] = useState("");
  const [emailUsers, setEmailUser] = useState("");
  const [phoneUsers, setPhoneUser] = useState("");
  const [directionUsers, setDirectionUser] = useState("");

  const [errors, setErrors] = useState({});

  //
  const [showModal, setShowModal] = useState(false);
  const [responseData, setResponseData] = useState(null); // Estado para almacenar los datos del response

  // const [visible, setVisible] = useState(false);
  const [nombre, setNombre] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [color, setColor] = useState("");
  // const [imagen, setImagen] = useState("");
  const [description, setDescription] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [peso, setPeso] = useState("");
  const [tamanio, setTamanio] = useState("");
  const [sterilized, setSterilized] = useState(false);
  const [vaccination, setVaccination] = useState(false);
  const [state, setState] = useState("");
  const [petTypeId, setPetTypeId] = useState("");
  const [typeRaceId, setTypeRaceId] = useState("");
  const [imagenPreview, setImagenPreview] = useState("");

  const { id } = useParams();
  const [formError, setFormError] = useState(false);
  const [responses, setResponses] = useState({});

  const handleResponseChange = (question, value) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [question]: value,
    }));
  };

  const handleSubmit = async (e) => {
    e.preventDefault();
    const bodyUser = {
      name: nameUsers,
      fullname: fullnameUsers,
      email: emailUsers,
      phone: phoneUsers,
      direction: directionUsers,
    };
    console.log(bodyUser);

    // Verificar si todas las preguntas tienen respuesta
    const allQuestionsAnswered = questions.every(
      ({ id }) => responses[`pregunta${id}`]
    );

    if (!allQuestionsAnswered) {
      setFormError(true);
      return;
    }
    // const totalPoints = Object.values(responses).reduce(
    //   (acc, curr) => acc + curr,
    //   0
    // );
    // const transformedResponses = Object.keys(responses).map((key) => ({
    //   user_adoption_sponsorship_id: "42342342wda",
    //   adoption_questionnaire_id: parseInt(key.replace("pregunta", ""), 10), // Obtener el id numérico eliminando 'pregunta'
    //   answer: responses[key],
    // }));
    // console.log("Respuestas transformadas:", transformedResponses);
    // console.log("Puntos totales:", totalPoints);
    try {
      const response = await axios.post(apiPostUserAdoption, bodyUser);
      if (response.status === 201) {
        //  console.log(response.data.data);
        setResponseData(response.data.data.id); // Guardar los datos del response en el estado

        const transformedResponses = Object.keys(responses).map((key) => ({
          user_adoption_sponsorship_id: response.data.data.id,
          adoption_questionnaire_id: parseInt(key.replace("pregunta", ""), 10), // Obtener el id numérico eliminando 'pregunta'
          answer: responses[key],
        }));

        // console.log("Respuestas transformadas:", transformedResponses);
        // console.log("Puntos totales:", totalPoints);
        const response1 = await axios.post(apiPostAnswer, transformedResponses);
        if (response1.status === 201) {
          console.log(response1.data);
          setShowModal(true); // Mostrar el modal cuando se guarda exitosamente
        }
        //navigate("/listPets");/VistaGeneral/:id/adoptar/:idd
      }
    } catch (error) {
      //alert("Error DNI REPETIDO");
      console.log(error.response.data.message);
      //  alert(error.response.data.message);
      if (error.response && error.response.data && error.response.data.errors) {
        const serverErrors = error.response.data.errors;
        setErrors(serverErrors);
        console.log("Errores del servidor:", serverErrors);
      } else {
        console.log("Error al obtener los datos", error);
      }
    }
  };

  const questions = [
    {
      id: 1,
      question:
        "¿Por qué estás interesado en adoptar una mascota en este momento?",
      options: [
        { label: "Para tener un compañero de ejercicio", points: 1 },
        { label: "Quiero compañía y afecto", points: 3 },
        { label: "Para enseñar responsabilidad a mis hijos", points: 2 },
      ],
    },
    {
      id: 2,
      question:
        "¿Tienes alguna experiencia previa en la adopción o cuidado de mascotas?",
      options: [
        { label: "He cuidado mascotas de amigos o familiares", points: 1 },
        { label: "No, esta sería mi primera mascota", points: 2 },
        { label: "Sí, he tenido mascotas antes", points: 3 },
      ],
    },
    {
      id: 3,
      question:
        "¿Qué tipo de mascota estás buscando (perro, gato, otro)? ¿Por qué?",
      options: [
        { label: "Gato, son independientes y tranquilos", points: 2 },

        { label: "Perro, son leales y activos", points: 3 },
        {
          label: "Otro, tengo preferencias específicas por otras especies",
          points: 1,
        },
      ],
    },
    {
      id: 4,
      question: "¿Cuántas horas al día puedes dedicarle a tu mascota?",
      options: [
        { label: "Menos de 1 hora", points: 1 },
        { label: "Más de 3 horas", points: 3 },
        { label: "Entre 1 y 3 horas", points: 2 },
      ],
    },
    {
      id: 5,
      question: "¿Qué tipo de espacio tienes en tu hogar para la mascota?",
      options: [
        { label: "Otro tipo de vivienda", points: 1 },
        { label: "Apartamento pequeño", points: 2 },

        { label: "Casa con jardín", points: 3 },
      ],
    },
    {
      id: 6,
      question: "¿Cómo planeas ejercitar y socializar a tu mascota?",
      options: [
        {
          label: "Juegos en casa y citas con otros dueños de mascotas",
          points: 2,
        },
        { label: "Otra actividad específica", points: 1 },
        { label: "Paseos diarios y visitas al parque", points: 3 },
      ],
    },
    {
      id: 7,
      question:
        "¿Estás dispuesto/a a comprometerte con los gastos veterinarios y cuidados médicos de la mascota?",
      options: [
        { label: "Dependerá del costo de los cuidados médicos", points: 2 },

        { label: "Sí, estoy preparado/a para asumir esos gastos", points: 3 },
        { label: "No estoy seguro/a de poder costear esos gastos", points: 1 },
      ],
    },
    {
      id: 8,
      question:
        "¿Tienes niños en casa? ¿Cómo crees que la nueva mascota se adaptará a ellos?",
      options: [
        { label: "No estoy seguro/a de cómo reaccionarán", points: 1 },

        { label: "Sí, creo que se llevarán bien", points: 3 },
        { label: "No, no tengo niños en casa", points: 2 },
      ],
    },
    {
      id: 9,
      question:
        "¿Qué harías si la mascota presenta algún comportamiento no deseado?",
      options: [
        { label: "Intentaría corregirlo por mi cuenta", points: 2 },
        {
          label: "Buscaría ayuda profesional de un entrenador de mascotas",
          points: 3,
        },
        {
          label: "No estoy seguro/a de cómo manejaría esa situación",
          points: 1,
        },
      ],
    },
    {
      id: 10,
      question:
        "¿Qué expectativas tienes sobre la relación con tu nueva mascota?",
      options: [
        { label: "Busco una compañía ocasional", points: 2 },
        { label: "Quiero establecer un vínculo cercano y duradero", points: 3 },
        { label: "No tengo expectativas claras", points: 1 },
      ],
    },
  ];

  // const header = <img alt="Card" src={imagenPreview} />;
  // const footer = (
  //   <>
  //     {/* <Link to={`/vista-general/mascota/${id}/adoptar`}>
  //       <Button label="Adoptar" icon="pi pi-check" />
  //     </Link>
  //     <Button
  //       label="Regresar"
  //       severity="secondary"
  //       icon="pi pi-times"
  //       style={{ marginLeft: "0.5em" }}
  //     /> */}
  //   </>
  // );
  // const footerContent = (
  //   <div>
  //     {/* <Button
  //       label="Cancelar"
  //       icon="pi pi-times"
  //       onClick={() => setVisible(false)}
  //       className="p-button-text"
  //     />
  //     <Button label="Guardar" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />*/}
  //   </div>
  // );

  async function getData() {
    try {
      const response = await axios.get(getIdApiMascota + id);
      if (response.status === 200) {
        console.log(response.data);
        const pet = response.data.data;
        setNombre(pet.name);
        setAge(pet.age);
        setSex(pet.sex);
        setColor(pet.color);
        setDescription(pet.description);
        setDateEnd(pet.date_end);
        setPeso(pet.peso);
        setTamanio(pet.tamanio);
        setSterilized(pet.sterilized === 1 ? "SI" : "No");
        setVaccination(pet.vaccination === 1 ? "SI" : "No");
        setState(pet.state);
        setPetTypeId(pet.pet_type.name);
        setTypeRaceId(pet.type_race.name);
        //setImagen(pet.imagen);
        setImagenPreview(response.data.data.imagen_url);
      }
    } catch (error) {
      console.log("Error al obtener datos", error);
    }
  }
  useEffect(() => {
    getData();
  }, []);

  ///Ver Detalle de una mascota
  const ViewMascotaId = (
    <div className="relative flex w-full max-w-[26rem] flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
      <div className="relative mx-4 mt-4 overflow-hidden rounded-xl bg-blue-gray-500 bg-clip-border text-white shadow-lg shadow-blue-gray-500/40">
        <img src={imagenPreview} alt="ui/ux review check" />
        <div className="to-bg-black-10 absolute inset-0 h-full w-full bg-gradient-to-tr from-transparent via-transparent to-black/60"></div>
        <button
          className="!absolute top-4 right-4 h-8 max-h-[32px] w-8 max-w-[32px] select-none rounded-full text-center align-middle font-sans text-xs font-medium uppercase text-red-500 transition-all hover:bg-red-500/10 active:bg-red-500/30 disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
          type="button"
          data-ripple-dark="true"
        >
          <span className="absolute top-1/2 left-1/2 -translate-y-1/2 -translate-x-1/2 transform">
            <svg
              xmlns="http://www.w3.org/2000/svg"
              viewBox="0 0 24 24"
              fill="currentColor"
              aria-hidden="true"
              className="h-6 w-6"
            >
              <path d="M11.645 20.91l-.007-.003-.022-.012a15.247 15.247 0 01-.383-.218 25.18 25.18 0 01-4.244-3.17C4.688 15.36 2.25 12.174 2.25 8.25 2.25 5.322 4.714 3 7.688 3A5.5 5.5 0 0112 5.052 5.5 5.5 0 0116.313 3c2.973 0 5.437 2.322 5.437 5.25 0 3.925-2.438 7.111-4.739 9.256a25.175 25.175 0 01-4.244 3.17 15.247 15.247 0 01-.383.219l-.022.012-.007.004-.003.001a.752.752 0 01-.704 0l-.003-.001z"></path>
            </svg>
          </span>
        </button>
      </div>
      <div className="p-6">
        <div className="mb-3 flex items-center justify-between text-center">
          <div className="block font-sans text-xl font-medium leading-snug tracking-normal text-blue-gray-900 antialiased text-center">
            {nombre}
          </div>
          <p className="flex items-center gap-1.5 font-sans text-base font-normal leading-relaxed text-blue-gray-900 antialiased">
            :)
          </p>
        </div>
        <p className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
          <div className="block font-sans text-base font-light leading-relaxed text-gray-700 antialiased">
            {description}
          </div>
          <lu>
            <div className="formgrid grid lisdata">
              <br />
              <p style={{ fontWeight: "bold" }} className="text-center ">
                {" "}
                Lista de Detalles
              </p>

              <div className="field col-12 md:col-4">
                <li>
                  <span style={{ fontWeight: "bold" }}> Color:</span> {color}
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Raza:</span> {typeRaceId}
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>
                    Tipo de Mascota:
                  </span>{" "}
                  {petTypeId}
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Años:</span> {age}{" "}
                </li>
              </div>
              <div className="field col-12 md:col-4">
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Sexo:</span> {sex}
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Tamaño:</span> {tamanio}
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Esterilizado:</span>{" "}
                  {sterilized}
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Vacunas:</span>{" "}
                  {vaccination}
                </li>
              </div>

              <div className="field col-12 md:col-4">
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Estado:</span> {state}
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>
                    Fecha de Fin de Vida:
                  </span>{" "}
                  {dateEnd}
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Peso:</span> {peso}
                </li>
              </div>
            </div>
          </lu>
        </p>
      </div>
    </div>
  );

  //form de user
  const formUsers = (
    <div className="w-full max-w-screen-lg mx-auto text-gray-800 antialiased flex-col justify-center ">
      <div className="relative py-3 mx-auto text-center">
        {/* <span className="text-2xl font-light">Login to your account</span> */}
        <div className="mt-4 bg-white shadow-md rounded-lg text-left">
          {/* <div className="h-2 bg-purple-400 rounded-t-md"></div> */}
          <form>
            {" "}
            <div className="px-8 py-8 flex flex-col md:flex-row md:flex-wrap md:justify-between">
              <div className="w-full md:w-1/2 md:px-4">
                <label className="block font-semibold">Nombre</label>
                <input
                  type="text"
                  value={nameUsers}
                  onChange={(e) => {
                    setNamesUser(e.target.value);
                    setErrors({ ...errors, name: "" });
                  }}
                  className="border w-full h-12 px-3 py-2 mt-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:ring-1"
                />
                {errors.name && (
                  <span style={{ color: "red" }} className="error">
                    {errors.name[0]}
                  </span>
                )}
              </div>
              <div className="w-full md:w-1/2 md:px-4">
                <label className="block font-semibold">Apellidos</label>
                <input
                  type="text"
                  value={fullnameUsers}
                  onChange={(e) => {
                    setFullnameUser(e.target.value);
                    setErrors({ ...errors, fullname: "" });
                  }}
                  className="border w-full h-12 px-3 py-2 mt-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:ring-1"
                />
                {errors.fullname && (
                  <span style={{ color: "red" }} className="error">
                    {errors.fullname[0]}
                  </span>
                )}
              </div>
              <div className="w-full md:w-1/2 md:px-4">
                <label className="block font-semibold">Username or Email</label>
                <input
                  type="email"
                  placeholder="example@gmail.com"
                  value={emailUsers}
                  onChange={(e) => {
                    setEmailUser(e.target.value);
                    setErrors({ ...errors, email: "" });
                  }}
                  className="border w-full h-12 px-4 py-2 mt-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:ring-1"
                />
                {errors.email && (
                  <span style={{ color: "red" }} className="error">
                    {errors.email[0]}
                  </span>
                )}
              </div>
              <div className="w-full md:w-1/2 md:px-4">
                <label className="block font-semibold">Telefono</label>
                <input
                  type="text"
                  value={phoneUsers}
                  onChange={(e) => {
                    setPhoneUser(e.target.value);
                    setErrors({ ...errors, phone: "" });
                  }}
                  className="border w-full h-12 px-3 py-2 mt-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:ring-1"
                />
                {errors.phone && (
                  <span style={{ color: "red" }} className="error">
                    {errors.phone[0]}
                  </span>
                )}
              </div>
              <div className="w-full w-100 md:px-4">
                <label className="block font-semibold">Direccion</label>
                <input
                  type="text"
                  value={directionUsers}
                  onChange={(e) => {
                    setDirectionUser(e.target.value);
                    setErrors({ ...errors, direction: "" });
                  }}
                  className="border w-full h-12 px-3 py-2 mt-2 rounded-md focus:outline-none focus:ring-indigo-500 focus:ring-1"
                />
                {errors.direction && (
                  <span style={{ color: "red" }} className="error">
                    {errors.direction[0]}
                  </span>
                )}
              </div>
            </div>
          </form>
          {/* <div className="flex justify-between items-center mt-6">
            <button
              type="Guardar"
              // onClick={handleSubmit}
              className="bg-purple-500 text-white py-2 px-6 rounded-md hover:bg-purple-600"
            >
              Guardar
            </button>
          </div> */}
        </div>
      </div>
    </div>
  );

  //form questios
  const formQuestion = (
    <div className="w-full max-w-screen-lg mx-auto text-gray-800 antialiased flex-col justify-center ">
      <div className="relative py-3 mx-auto text-center">
        {/* <span className="text-2xl font-light">Login to your account</span> */}
        <div className="mt-4 bg-white shadow-md rounded-lg text-left">
          <div className="px-8 py-8 flex flex-col md:flex-row md:flex-wrap md:justify-between">
            <form className="formgrid grid" onSubmit={handleSubmit}>
              {questions.map(({ id, question, options }, index) => (
                <div className="field col-12 md:col-12" key={id}>
                  <div
                    style={{
                      display: "flex",
                      flexDirection: "column",
                      alignItems: "flex-start",
                      flex: 1,
                    }}
                  >
                    <label
                      className="text-start"
                      style={{ textAlign: "end", fontWeight: "bold" }}
                    >
                      {index + 1}: {question}
                    </label>
                    {options.map((option, idx) => (
                      <div
                        className="flex align-items-center"
                        style={{ marginLeft: "30px" }}
                        key={idx}
                      >
                        <input
                          type="radio"
                          className="form-radio"
                          id={`${id}${idx}`}
                          name={`pregunta${id}`}
                          value={option.points}
                          onChange={(e) =>
                            handleResponseChange(
                              `pregunta${id}`,
                              e.target.value
                            )
                          }
                        />
                        <label htmlFor={`${id}${idx}`} className="w-full ml-2">
                          {String.fromCharCode(97 + idx)}) {option.label}
                        </label>
                      </div>
                    ))}
                  </div>
                </div>
              ))}
              {formError && (
                <p style={{ color: "red" }}>
                  Debes completar todas las preguntas antes de enviar el
                  formulario.
                </p>
              )}

              <button
                className="block w-full select-none rounded-lg bg-gray-900 py-3.5 px-7 text-center align-middle font-sans text-sm font-bold uppercase text-white shadow-md shadow-pink-500/20 transition-all hover:shadow-lg hover:shadow-pink-500/40 focus:opacity-[0.85] focus:shadow-none active:opacity-[0.85] active:shadow-none disabled:pointer-events-none disabled:opacity-50 disabled:shadow-none"
                type="submit"
              >
                Guardar
              </button>
            </form>
          </div>{" "}
        </div>
      </div>
    </div>
  );

  // const closeModal = () => {
  //   setShowModal(false);
  //   // Aquí puedes redirigir a otra página si lo necesitas
  //   // navigate("/listPets");
  // };

  return (
    <>
      {showModal && (
        <ModalView responseData={responseData} responseData1={id} />
      )}

      <section className="bg-white dark:bg-gray-900">
        <div className="container px-6 py-12 mx-auto">
          <h1 className="text-2xl font-semibold text-center text-gray-800 lg:text-4xl dark:text-white">
            Test para adoptar una mascota
          </h1>

          <div className="mt-8 xl:mt-16 lg:flex lg:-mx-12">
            <div className="lg:mx-12">
              <h1 className="text-xl font-semibold text-gray-800 dark:text-white text-center">
                Detalles de Mascota
              </h1>

              <div className="mt-4 space-y-4 lg:mt-8">{ViewMascotaId}</div>
            </div>

            <div className="flex-1 mt-8 lg:mx-12 lg:mt-0">
              <div>
                <button className="flex items-center focus:outline-none">
                  <svg
                    className="w-6 h-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 12H4"
                    />
                  </svg>

                  <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
                    Ingresar datos de usuario
                  </h1>
                </button>

                <div className="flex w-full min-w-screen">
                  <span className="border border-blue-500"></span>

                  <p className=" px-4 text-gray-500 dark:text-gray-300">
                    {formUsers}
                    {/* <p>
                      ***********************************************************************************************************************************************************************************************
                    </p> */}
                  </p>
                </div>
              </div>

              <hr className="my-8 border-gray-200 dark:border-gray-700" />

              <div>
                <button className="flex items-center focus:outline-none">
                  <svg
                    className="w-6 h-6 text-blue-500"
                    fill="none"
                    stroke="currentColor"
                    viewBox="0 0 24 24"
                    xmlns="http://www.w3.org/2000/svg"
                  >
                    <path
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      strokeWidth="2"
                      d="M20 12H4"
                    />
                  </svg>

                  <h1 className="mx-4 text-xl text-gray-700 dark:text-white">
                    Llenar Cuestionario
                  </h1>
                </button>

                <div className="flex w-full min-w-screen">
                  <span className="border border-blue-500"></span>

                  <p className=" px-4 text-gray-500 dark:text-gray-300">
                    {formQuestion}
                    {/* <p>
                      ***********************************************************************************************************************************************************************************************
                    </p> */}
                  </p>
                </div>
              </div>

              <hr className="my-8 border-gray-200 dark:border-gray-700" />
            </div>
          </div>
        </div>
      </section>
      {/* <NavbarGeneral />
      <div className="viewMascot card flex justify-content-center uppercase">
        <Card
          title="Detalles de Mascota"
          subTitle={nombre}
          footer={footer}
          header={header}
          style={{ width: "60%" }}
        >
          <p className="m-0">{description}</p>
          <br />

          <lu>
            <div className="formgrid grid lisdata">
              <div className="field col-12 md:col-4">
                <li>
                  <span style={{ fontWeight: "bold" }}> Color:</span> {color}
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Raza:</span> {typeRaceId}
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Tipo de Mascota:</span> {petTypeId}
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Años:</span> {age}{" "}
                </li>
              </div>
              <div className="field col-12 md:col-4">
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Sexo:</span> {sex}
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Tamaño:</span> {tamanio}
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Esterilizado:</span> {sterilized}
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Vacunas:</span> {vaccination}
                </li>
              </div>

              <div className="field col-12 md:col-4">
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Estado:</span> {state}
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Fecha de Fin de Vida:</span> {dateEnd}
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Peso:</span> {peso}
                </li>
              </div>
            </div>
          </lu>
        </Card>
      </div> */}
    </>
  );
}

export default ViewMascota;
