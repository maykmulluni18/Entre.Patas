import IMGmascota from "../componets/petImg.jpg";

const DonarTarjeta = () => {
  

  return (
    <>
      {/* dasdasd */}
      <div className="min-w-screen min-h-screen py-5">
        <div className="px-5">
          <div className="mb-2"></div>
        </div>
        <div className="w-full bg-white border-t border-b border-gray-200 px-5 py-10 text-gray-800">
          <div className="w-full">
            <div className="-mx-3 md:flex items-start">
              <div className="px-3 md:w-7/12 lg:pr-10">
                <div className="w-full mx-auto text-gray-800 font-light mb-6 border-b border-gray-200 pb-6">
                  <div className="w-full flex items-center">
                    <div className="overflow-hidden rounded-lg w-16 h-16 bg-gray-50 border border-gray-200">
                      <img src={ IMGmascota } alt="" />
                    </div>
                    <div className="flex-grow pl-3">
                      <h6 className="font-semibold uppercase text-gray-600">
                        Donacion Para Mascotas.
                      </h6>
                      <p className="text-gray-400">x 1</p>
                    </div>
                  </div>
                </div>
                <div className="mb-6 pb-6 border-b border-gray-200">
                  <div className="-mx-2 flex items-end justify-end">
                    <div className="flex-grow px-2 lg:max-w-xs">
                      <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                        Cantidad
                      </label>
                      <div>
                        <input
                          className="w-full px-3 py-2 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                          placeholder="0.00"
                          type="text"
                        />
                      </div>
                    </div>
                  </div>
                </div>
                <div className="mb-6 pb-6 border-b border-gray-200 text-gray-800">
                  <div className="w-full flex mb-3 items-center">
                    <div className="flex-grow">
                      <span className="text-gray-600">Subtotal</span>
                    </div>
                    <div className="pl-3">
                      <span className="font-semibold">s/190.91</span>
                    </div>
                  </div>
                  <div className="w-full flex items-center">
                    <div className="flex-grow">
                      <span className="text-gray-600">C (Comocion)</span>
                    </div>
                    <div className="pl-3">
                      <span className="font-semibold">s/0.9</span>
                    </div>
                  </div>
                </div>
                <div className="mb-6 pb-6 border-b border-gray-200 md:border-none text-gray-800 text-xl">
                  <div className="w-full flex items-center">
                    <div className="flex-grow">
                      <span className="text-gray-600">Total</span>
                    </div>
                    <div className="pl-3">
                      <span className="font-semibold text-gray-400 text-sm">
                        AUD
                      </span>{" "}
                      <span className="font-semibold">s/191.00</span>
                    </div>
                  </div>
                </div>
              </div>
              <div className="px-3 md:w-5/12">
                <div className="w-full mx-auto rounded-lg bg-white border border-gray-200 p-3 text-gray-800 font-light mb-6">
                  <div className="w-full flex mb-3 items-center">
                    <div className="w-32">
                      <span className="text-gray-600 font-semibold">
                        Contacto
                      </span>
                    </div>
                    <div className="flex-grow pl-3">
                      <span>Entre Patas</span>
                    </div>
                  </div>
                  {/* <div className="w-full flex items-center">
                    <div className="w-32">
                      <span className="text-gray-600 font-semibold">
                        Billing Address
                      </span>
                    </div>
                    <div className="flex-grow pl-3">
                      <span>123 George Street, Sydney, NSW 2000 Australia</span>
                    </div>
                  </div> */}
                </div>
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
                      <div className="mb-3">
                        <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                          Nombre de Tarjeta
                        </label>
                        <div>
                          <input
                            className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                            placeholder="John Smith"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="mb-3">
                        <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                          Numero de Tarjeta
                        </label>
                        <div>
                          <input
                            className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                            placeholder="0000 0000 0000 0000"
                            type="text"
                          />
                        </div>
                      </div>
                      <div className="mb-3 -mx-2 flex items-end">
                        <div className="px-2 w-1/4">
                          <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                            Fecha de Expiracion
                          </label>
                          <div>
                            <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                              <option value="01">01 - Enero</option>
                              <option value="02">02 - Febrero</option>
                              <option value="03">03 - Marzo</option>
                              <option value="04">04 - Abril</option>
                              <option value="05">05 - Mayo</option>
                              <option value="06">06 - Junio</option>
                              <option value="07">07 - Julio</option>
                              <option value="08">08 - Agosto</option>
                              <option value="09">09 - Septiembre</option>
                              <option value="10">10 - Octubre</option>
                              <option value="11">11 - Noviembre</option>
                              <option value="12">12 - Diciembre</option>
                            </select>
                          </div>
                        </div>
                        <div className="px-2 w-1/4">
                          <select className="form-select w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors cursor-pointer">
                            <option value="2020">2020</option>
                            <option value="2021">2021</option>
                            <option value="2022">2022</option>
                            <option value="2023">2023</option>
                            <option value="2024">2024</option>
                            <option value="2025">2025</option>
                            <option value="2026">2026</option>
                            <option value="2027">2027</option>
                            <option value="2028">2028</option>
                            <option value="2029">2029</option>
                          </select>
                        </div>
                        <div className="px-2 w-1/4">
                          <label className="text-gray-600 font-semibold text-sm mb-2 ml-1">
                            Codigo de Seguridad
                          </label>
                          <div>
                            <input
                              className="w-full px-3 py-2 mb-1 border border-gray-200 rounded-md focus:outline-none focus:border-indigo-500 transition-colors"
                              placeholder="000"
                              type="text"
                            />
                          </div>
                        </div>
                      </div>
                    </div>
                  </div>
                  <div className="w-full p-3">
                    <label
                      htmlFor="type2"
                      className="flex items-center cursor-pointer"
                    >
                      <input
                        type="radio"
                        className="form-radio h-5 w-5 text-indigo-500"
                        name="type"
                        id="type2"
                      />
                      <img
                        src="https://upload.wikimedia.org/wikipedia/commons/b/b5/PayPal.svg"
                        className="h-6 ml-3"
                      />
                    </label>
                  </div>
                </div>
                <div>
                  <button className="block w-full mx-auto border border-transparent bg-indigo-500 hover:bg-indigo-600 focus:bg-indigo-700 text-white rounded-lg px-3 py-2 font-semibold">
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

export default DonarTarjeta;
