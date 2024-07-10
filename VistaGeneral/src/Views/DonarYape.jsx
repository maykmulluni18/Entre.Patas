import YapeIMG from "./yape1.jpg";
import { postDonation } from "../config/api";
import { useState } from "react";
import axios from "axios";
import Swal from "sweetalert2";

const DonarYape = () => {
  /* 'name',
  'fullname',
  'email',
  'phone',
  'quantity',
  'low'*/
  const [errors, setErrors] = useState({});

  const [name, setName] = useState("");
  const [fullname, setFullname] = useState("");
  const [email, setEmail] = useState("");
  const [phone, setPhone] = useState("");
  const [quantity, setQuantity] = useState(0);

  async function submitFrom(e) {
    e.preventDefault();
    const body = {
      name: name,
      fullname: fullname,
      email: email,
      phone: phone,
      quantity: quantity,
    };
    try {
      const response = await axios.post(postDonation, body);
      if (response.status === 201) {
        setName("");
        setFullname("");
        setEmail("");
        setPhone("");
        setQuantity(0);

        Swal.fire({
          title: "Donado con Exito",
          text: "Gracias por su Donacion",
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
      {/* dasdasd */}
      <div className="min-w-screen min-h-screen  py-5">
        <div className="px-5">
          <div className="mb-2"></div>
        </div>
        <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
          <div className="w-full">
            <div className="mx-3 md:flex items-start">
              <img
                className="px-3 md:w-3/12 lg:pr-10"
                src={YapeIMG}
                style={{ width: "100%", height: "100%", objectFit: "cover" }}
              />
              <div className="px-3 md:w-10/12">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 text-gray-800 font-light mb-6">
                  <div className="w-full p-3 border-b border-gray-200">
                    <div className="mb-5">
                      <label
                        htmlFor="type1"
                        className="flex items-center cursor-pointer"
                      >
                        <input
                          type="radio"
                          className="form-radio h-5 w-5 text-indigo-500"
                          name="type"
                          id="type1"
                          defaultChecked
                        />
                        <img
                          src="https://leadershipmemphis.org/wp-content/uploads/2020/08/780370.png"
                          className="h-6 ml-3"
                        />
                      </label>
                    </div>
                    <div>
                      <div className="mb-3 -mx-2 flex items-start">
                        <div className="px-2 w-1/2">
                          <label className="text-gray-600 font-semibold text-lg  mb-2 ml-1">
                            Nombre
                          </label>
                          <div>
                            <input
                              className="w-full px-3 py-2 mb-1 text-lg  border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                              placeholder="John Smith"
                              value={name}
                              onChange={(e) => {
                                setName(e.target.value);
                                setErrors({ ...errors, name: "" });
                              }}
                              type="text"
                            />
                          </div>
                          {errors.name && (
                            <span style={{ color: "red" }} className="error">
                              {errors.name[0]}
                            </span>
                          )}
                        </div>
                        <div className="px-2 w-1/2">
                          <label className="text-gray-600 font-semibold text-lg mb-2 ml-1">
                            Apellido
                          </label>
                          <div>
                            <input
                              className="w-full px-3 py-2 mb-1 text-lg  border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                              placeholder="Doe"
                              value={fullname}
                              onChange={(e) => {
                                setFullname(e.target.value);
                                setErrors({ ...errors, fullname: "" });
                              }}
                              type="text"
                            />
                          </div>
                          {errors.fullname && (
                            <span style={{ color: "red" }} className="error">
                              {errors.fullname[0]}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="text-gray-600 font-semibold text-lg  mb-2 ml-1">
                          Correo Electronico
                        </label>
                        <div>
                          <input
                            className="w-full px-3 py-2 mb-1 text-lg  border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                            placeholder="john.doe@example.com"
                            value={email}
                            onChange={(e) => {
                              setEmail(e.target.value);
                              setErrors({ ...errors, email: "" });
                            }}
                            type="email"
                          />
                        </div>
                        {errors.email && (
                          <span style={{ color: "red" }} className="error">
                            {errors.email[0]}
                          </span>
                        )}
                      </div>

                      <div className="mb-3 -mx-2 flex items-end">
                        <div className="px-2 w-1/2">
                          <label className="text-gray-600 font-semibold text-lg text-start mb-2 ml-1">
                            Telefono
                          </label>
                          <div>
                            <input
                              className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                              placeholder="94567890"
                              value={phone}
                              onChange={(e) => {
                                setPhone(e.target.value);
                                setErrors({ ...errors, phone: "" });
                              }}
                              type="tel"
                            />
                          </div>
                          {errors.phone && (
                            <span style={{ color: "red" }} className="error">
                              {errors.phone[0]}
                            </span>
                          )}
                        </div>
                        <div className="px-2 w-1/2">
                          <label className="text-gray-600 font-semibold text-lg mb-2 ml-1">
                            Monto a Donar (S/)
                          </label>
                          <div>
                            <input
                              className="w-full px-3 py-2 mb-1 text-lg  border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                              placeholder="0"
                              value={quantity}
                              onChange={(e) => {
                                setQuantity(e.target.value);
                                setErrors({ ...errors, quantity: "" });
                              }}
                              type="number"
                            />
                          </div>
                          {errors.quantity && (
                            <span style={{ color: "red" }} className="error">
                              {errors.quantity[0]}
                            </span>
                          )}
                        </div>
                      </div>

                      <div className="mb-3">
                        <label className="text-gray-600 font-semibold text-lg  mb-2 ml-1">
                          Codigo de Verificacion de Yape
                        </label>
                        <div>
                          <input
                            className="w-full px-3 py-2 mb-1 text-lg  border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                            type="text"
                          />
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
                <div>
                  <button
                    onClick={submitFrom}
                    className="block w-full mx-auto border border-transparent bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold"
                  >
                    DONAR
                  </button>
                </div>
              </div>
            </div>
          </div>
        </div>
        <div className="px-5 py-10 text-gray-400">
          <div className="text-center">&copy; 2024 - Entre Patas</div>
        </div>
      </div>
      );
    </>
  );
};

export default DonarYape;
