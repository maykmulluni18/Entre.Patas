import { useState } from "react";
import NabarHeader from "../componets/NabarHeader";
//postPostContact
import { postPostContact } from "../config/api";
import Swal from "sweetalert2";
import axios from "axios";

const Contact = () => {
  const [errors, setErrors] = useState({});
  const [name, setName] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [direction, setDirection] = useState("");
  const [type, setType] = useState("");

  async function sunmitData(e) {
    e.preventDefault();
    const body = {
      name: name,
      fullname: fullname,
      email: email,
      phone: phone,
      direction: direction,
      type: type,
    };

    try {
      const response = await axios.post(postPostContact, body);
      console.log(response);
      if (response.status === 201) {
        setName("");
        setFullname("");
        setEmail("");
        setPhone("");
        setDirection("");
        setType("");
        Swal.fire({
          title: "Exito",
          text: "Mensaje Enviado con Exito",
          icon: "success",
        });
      }
    } catch (error) {
      console.log("Error al enviar el mensaje", error);
      if (error.response && error.response.data.errors) {
        setErrors(error.response.data.errors);
      } else {
        console.log(error);
      }
    }
  }

  return (
    <>
      <NabarHeader />
      <div className="mx-auto">
        <div className="p-4 w-full text-center bg-white shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          {" "}
        </div>
      </div>
      <div>
        <div className=" w-full  justify-center min-h-screen bg-white dark:bg-gray-800 sm:items-center">
          <div className="">
            <div>
              <div className="grid grid-cols-1 md:grid-cols-2">
                <div className="p-6 mr-2 bg-gray-100 dark:bg-gray-800 sm:rounded-lg">
                  <h1 className="text-4xl sm:text-5xl text-gray-800 dark:text-white font-extrabold tracking-tight">
                    Entre Patas
                  </h1>
                  <p className="text-normal text-lg sm:text-2xl font-medium text-gray-600 dark:text-gray-400 mt-2">
                    Contactanos
                  </p>

                  <div className="flex items-center mt-8 text-gray-600 dark:text-gray-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-gray-500"
                    >
                      <path d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                      <path d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                      Acme Inc, Street, State, Postal Code
                    </div>
                  </div>

                  <div className="flex items-center mt-4 text-gray-600 dark:text-gray-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-gray-500"
                    >
                      <path d="M3 5a2 2 0 012-2h3.28a1 1 0 01.948.684l1.498 4.493a1 1 0 01-.502 1.21l-2.257 1.13a11.042 11.042 0 005.516 5.516l1.13-2.257a1 1 0 011.21-.502l4.493 1.498a1 1 0 01.684.949V19a2 2 0 01-2 2h-1C9.716 21 3 14.284 3 6V5z" />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                      +44 1234567890
                    </div>
                  </div>

                  <div className="flex items-center mt-2 text-gray-600 dark:text-gray-400">
                    <svg
                      fill="none"
                      stroke="currentColor"
                      viewBox="0 0 24 24"
                      className="w-8 h-8 text-gray-500"
                    >
                      <path d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z" />
                    </svg>
                    <div className="ml-4 text-md tracking-wide font-semibold w-40">
                      info@acme.org
                    </div>
                  </div>
                </div>

                <form className="p-6 w-full justify-center">
                  <div className="flex flex-col">
                    <label className="hidden">Nombres</label>
                    <input
                      type="text"
                      name="name"
                      id="name"
                      value={name}
                      onChange={(e) => {
                        setName(e.target.value);
                        setErrors({ ...errors, name: "" });
                      }}
                      placeholder="Nombre"
                      className="w-full text-white mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                    {errors.name && (
                      <span style={{ color: "red" }} className="error">
                        {errors.name[0]}
                      </span>
                    )}
                  </div>
                  <div className="flex flex-col mt-2">
                    <label className="hidden">Apellidos</label>
                    <input
                      type="text"
                      name="fullname"
                      id="fullname"
                      value={fullname}
                      onChange={(e) => {
                        setFullname(e.target.value);
                        setErrors({ ...errors, fullname: "" });
                      }}
                      placeholder="Apellido"
                      className="w-full text-white mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                    {errors.fullname && (
                      <span style={{ color: "red" }} className="error">
                        {errors.fullname[0]}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col mt-2">
                    <label className="hidden">Correo Electrónico</label>
                    <input
                      type="email"
                      name="email"
                      id="email"
                      value={email}
                      onChange={(e) => {
                        setEmail(e.target.value);
                        setErrors({ ...errors, email: "" });
                      }}
                      placeholder="Email"
                      className="w-full text-white mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                    {errors.email && (
                      <span style={{ color: "red" }} className="error">
                        {errors.email[0]}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col mt-2">
                    <label className="hidden">Teléfono</label>
                    <input
                      type="text"
                      name="phone"
                      id="phone"
                      value={phone}
                      onChange={(e) => {
                        setPhone(e.target.value);
                        setErrors({ ...errors, phone: "" });
                      }}
                      placeholder="Teléfono"
                      className="w-full text-white mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                  </div>

                  <div className="flex flex-col mt-2">
                    <label className="hidden">Dirección</label>
                    <textarea
                      type="text"
                      name="direction"
                      id="direction"
                      value={direction}
                      onChange={(e) => {
                        setDirection(e.target.value);
                        setErrors({ ...errors, direction: "" });
                      }}
                      placeholder="Dirección"
                      className="w-full text-white mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                    {errors.direction && (
                      <span style={{ color: "red" }} className="error">
                        {errors.direction[0]}
                      </span>
                    )}
                  </div>

                  <div className="flex flex-col mt-2">
                    <label className="hidden">Mensaje</label>
                    <textarea
                      type="text"
                      name="type"
                      id="type"
                      value={type}
                      onChange={(e) => {
                        setType(e.target.value);
                        setErrors({ ...errors, type: "" });
                      }}
                      placeholder="Mensaje"
                      className="w-full text-white mt-2 py-3 px-3 rounded-lg bg-white dark:bg-gray-800 border border-gray-400 dark:border-gray-700 text-gray-800 font-semibold focus:border-indigo-500 focus:outline-none"
                    />
                    {errors.type && (
                      <span style={{ color: "red" }} className="error">
                        {errors.type[0]}
                      </span>
                    )}
                  </div>

                  <button
                    type="submit"
                    onClick={sunmitData}
                    className="md:w-32 bg-indigo-600 hover:bg-indigo-500 text-white font-bold py-3 px-6 rounded-lg mt-3 transition ease-in-out duration-300"
                  >
                    Enviar
                  </button>
                </form>
              </div>
            </div>
          </div>
        </div>
      </div>
    </>
  );
};

export default Contact;
