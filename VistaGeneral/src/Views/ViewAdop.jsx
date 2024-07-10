import { useEffect, useState } from "react";
import { useNavigate, useParams } from "react-router-dom";
//import { Link } from "react-router-dom";
import Swal from "sweetalert2";

import {
  getIdApiMascota,
  apiPostUserAdoption,
  apiPostAnswer,
  getApiIdPostAnswer,
  adoptions_generate,
  postPetState,
} from "../config/api";

//import { getIdApiMascota } from "config/api";

import axios from "axios";

import NabarHeader from "../componets/NabarHeader";

const ViewAdop = () => {
  const navigate = useNavigate();

  const [nameUsers, setNamesUser] = useState("");
  const [fullnameUsers, setFullnameUser] = useState("");
  const [emailUsers, setEmailUser] = useState("");
  const [phoneUsers, setPhoneUser] = useState("");
  const [directionUsers, setDirectionUser] = useState("");
  const [answer, setAsnwer] = useState("");

  const [idPet, setIdPet] = useState("");
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

  const { id, idd } = useParams();

  async function getDataResult() {
    try {
      const response = await axios.get(getApiIdPostAnswer + idd);
      if (response.status === 200) {
        console.log(response.data.data[0].name);
        /*
         {
        id: '3851d719-d581-4eb6-bd64-114290dfcf94',
        name: 'dsadsa',
        fullname: 'dasd',
        email: 'mauk@gmail.com',
        direction: 'dadasd',
        phone: '4234',
        suma_answer: 25
      }
        */
        const pet = response.data.data[0];
        setNamesUser(pet.name);
        setFullnameUser(pet.fullname);
        setEmailUser(pet.email);
        setPhoneUser(pet.phone);
        setDirectionUser(pet.direction);
        setAsnwer(pet.suma_answer);
      }
    } catch (error) {
      console.log("Error al obtener datos", error);
    }
  }

  async function getData() {
    try {
      const response = await axios.get(getIdApiMascota + id);
      if (response.status === 200) {
        console.log(response.data);
        const pet = response.data.data;
        setIdPet(pet.id);
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
    getDataResult();
  }, []);

  async function submitAdopted() {
    console.log(adoptions_generate, {
      pet_id: id,
      user_adop_spon_id: idd,
    });
    try {
      const response = await axios.post(adoptions_generate, {
        pet_id: id,
        user_adop_spon_id: idd,
      });
      if (response.status === 201) {
        const response1 = await axios.patch(postPetState + idPet);
        if (response1.status === 201) {
          console.log(response.data);
          Swal.fire({
            title: "Adoptado con exito",
            text: "Contactese con nosotros para el tramite Correspondiente",
            icon: "success",
          });
          navigate("/");
        }
      }
    } catch (error) {
      console.log("Error al adoptar", error);
    }
  }

  ///Ver Detalle de una mascota
  const ViewMascotaId = (
    <div className="flex-col rounded-xl bg-white bg-clip-border text-gray-700 shadow-lg">
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
  return (
    <>
      <NabarHeader />
      <div className="  dark:bg-gray-900">
        <div className="container m-auto px-6 py-10 md:px-12 lg:px-20">
          <div className="m-auto text-center lg:w-8/12 xl:w-7/12">
            <h2 className="text-2xl text-white font-bold md:text-4xl">
              Aqui se Muestra el resultado si es apto para la adopción de una
              Mascota
            </h2>
          </div>
          <div className="mt-12 m-auto -space-y-4 items-center justify-center md:flex md:space-y-0 md:-space-x-4 xl:w-10/12">
            <div className="relative z-10 -mx-4 group md:w-6/12 md:mx-0 lg:w-5/12">
              <div
                aria-hidden="true"
                className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-xl transition duration-500 group-hover:scale-105 lg:group-hover:scale-110"
              ></div>
              <div className="relative p-6 space-y-6 lg:p-8">
                <h3 className="text-3xl text-gray-700 font-semibold text-center">
                  Puntaje
                </h3>
                <div>
                  <div className="relative flex justify-around">
                    <div className="flex items-end">
                      <span className="text-8xl text-gray-800 font-bold leading-0">
                        {answer}
                      </span>
                      <div className="pb-2">
                        <span className="block text-2xl text-gray-700 font-bold">
                          {answer >= 20 ? "Apto" : "No Apto"}
                        </span>
                        <span className="block text-xl text-purple-500 font-bold">
                          PT
                        </span>
                      </div>
                    </div>
                  </div>
                </div>
                <ul
                  role="list"
                  className="w-max space-y-4 py-6 m-auto text-gray-600"
                >
                  <li className="space-x-2">
                    <span className="text-purple-500 font-semibold">
                      Nombre:
                    </span>
                    <span>
                      {nameUsers} {fullnameUsers}
                    </span>
                  </li>
                  <li className="space-x-2">
                    <span className="text-purple-500 font-semibold">
                      Correo;
                    </span>
                    <span>{emailUsers}</span>
                  </li>
                  <li className="space-x-2">
                    <span className="text-purple-500 font-semibold">
                      Telefono;
                    </span>
                    <span>{phoneUsers}</span>
                  </li>
                </ul>
                <p className="flex items-center justify-center space-x-4 text-lg text-gray-600 text-center">
                  <span>Entre Patas</span>
                  <a
                    href="tel:+24300"
                    className="flex space-x-2 items-center text-purple-600"
                  >
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      fill="currentColor"
                      className="w-6"
                      viewBox="0 0 16 16"
                    >
                      <path d="M3.654 1.328a.678.678 0 0 0-1.015-.063L1.605 2.3c-.483.484-.661 1.169-.45 1.77a17.568 17.568 0 0 0 4.168 6.608 17.569 17.569 0 0 0 6.608 4.168c.601.211 1.286.033 1.77-.45l1.034-1.034a.678.678 0 0 0-.063-1.015l-2.307-1.794a.678.678 0 0 0-.58-.122l-2.19.547a1.745 1.745 0 0 1-1.657-.459L5.482 8.062a1.745 1.745 0 0 1-.46-1.657l.548-2.19a.678.678 0 0 0-.122-.58L3.654 1.328zM1.884.511a1.745 1.745 0 0 1 2.612.163L6.29 2.98c.329.423.445.974.315 1.494l-.547 2.19a.678.678 0 0 0 .178.643l2.457 2.457a.678.678 0 0 0 .644.178l2.189-.547a1.745 1.745 0 0 1 1.494.315l2.306 1.794c.829.645.905 1.87.163 2.611l-1.034 1.034c-.74.74-1.846 1.065-2.877.702a18.634 18.634 0 0 1-7.01-4.42 18.634 18.634 0 0 1-4.42-7.009c-.362-1.03-.037-2.137.703-2.877L1.885.511z" />
                    </svg>
                    <span className="font-semibold">+1 000 000</span>
                  </a>
                  <span></span>
                </p>
                {answer >= 20 ? (
                  <button
                    type="submit"
                    title="Submit"
                    onClick={submitAdopted}
                    className="block w-full py-3 px-6 text-center rounded-xl transition dark:bg-gray-900 hover:bg-purple-700 active:bg-purple-800 focus:bg-indigo-600"
                  >
                    <span className="text-white font-semibold">Adoptar</span>
                  </button>
                ) : (
                  ""
                )}
              </div>
            </div>

            <div className="relative group md:w-6/12 lg:w-7/12">
              <div
                aria-hidden="true"
                className="absolute top-0 w-full h-full rounded-2xl bg-white shadow-lg transition duration-500 group-hover:scale-105"
              ></div>
              <div className="relative p-6 pt-16 md:p-8 md:pl-12 md:rounded-r-2xl lg:pl-20 lg:p-16">
                {ViewMascotaId}
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 py-10 text-gray-400">
          <div className="text-center">&copy; 2024 - Entre Patas</div>
        </div>
      </div>
    </>
  );
};

export default ViewAdop;
