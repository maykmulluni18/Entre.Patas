import { Link } from "react-router-dom";
import { getApiListReport } from "../../config/api";
import { useEffect, useState } from "react";
import axios from "axios";

const ReportarPerdida = () => {
  const [data, setData] = useState([]);

  const getData = async () => {
    const response = await axios.get(getApiListReport);
    setData(response.data.data);
  };
  console.log(data);
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <div className="min-h-screen justify-center overflow-hidden dark:bg-gray-800 sm:py-41">
        <div className="max-w-screen-2xl mx-auto py-4">
          <div className="rounded-lg overflow-hidden mt-10 relative before:absolute before:z-20 before:bg-black before:h-full before:w-full before:bg-gradient-to-tr before:from-black before:to-emerald-600 before:opacity-80">
            <img
              src="https://loremflickr.com/320/240?random=1"
              className="absolute z-10 object-cover h-80 w-full h-full"
              alt=""
            />
            <div
              href=""
              className="absolute z-20  top-1/2  right-20 text-white -translate-y-1/2"
            >
              <Link to={`/perdida-mascota/registrar`}>
                <button
                  className="middle none center mr-3 rounded-lg border border-white-500 py-3 px-6 font-sans text-xs font-bold uppercase  transition-all hover:bg-[#ffff] hover:text-black focus:ring active:opacity-[0.85] disabled:pointer-events-none "
                  data-ripple-dark="true"
                >
                  Registrar perdida{" "}
                </button>
              </Link>
            </div>
            <div className="relative z-20 p-10 h-full w-1/2">
              <h2 className="text-white text-3xl font-semibold">
                Reportar Perdida de una Mascotas
              </h2>
              <h3 className="text-white text-xl">Encuentrame</h3>
              <p className="text-sm text-slate-200 mt-4">
                Ayuda a encontrar mascotas perdidas con sus dueños
              </p>
              <div className="flex gap-4 items-center pt-4 border-t border-slate-300 text-slate-300 mt-6">
                {/* <span className="flex gap-1 items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4"
                  >
                    <path d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                    <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                  </svg>
                  35
                </span> */}
                <span className="flex gap-1 items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="text-sky-400 w-4 h-4"
                  >
                    <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                  </svg>
                  {/* 20 */}
                </span>
                {/* <span className="flex gap-1 items-center text-sm">
                  <svg
                    xmlns="http://www.w3.org/2000/svg"
                    fill="none"
                    viewBox="0 0 24 24"
                    stroke="currentColor"
                    className="w-4 h-4 text-lime-500"
                  >
                    <path d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                  </svg>
                  15
                </span> */}
              </div>
            </div>
          </div>
          <div className="mt-5 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-1">
            {data.map((loss) => (
              <div
                key={loss.id}
                className="mt-lg-10 bg-white shadow rounded-lg overflow-hidden flex flex-col"
              >
                <h2 className="text-center mt-1 mb-1 font-bold text-lg">
                  Encuentrame
                </h2>

                <img
                  src={loss.imagen_url}
                  // className="object-cover h-52 w-full"
                  style={{ width: "100%", height: "300px" }}
                  alt=""
                />
                <div className="p-6 flex flex-col flex-1">
                  <span className="block text-slate-700 font-semibold text-sm">
                    Fecha de Publicacion: {loss.date_end}
                  </span>
                  <h3 className="mt-3 mb-2 font-bold text-lg text-center">
                    <a href="https://play.tailwindcss.com/TGny89rOkl?layout=horizontal">
                      {loss.name}
                    </a>
                  </h3>
                  <h2 className="text-lg text-slate-800 mb-3 capitalize">
                    {loss.description}
                  </h2>
                  <ul>
                    <li>
                      <span className="font-bold text">Color : </span>{" "}
                      {loss.color}
                    </li>
                    <li>
                      <span className="font-bold text">Sexo :</span> {loss.sex}
                    </li>
                  </ul>
                  <div className="flex gap-4 items-center mt-auto pt-4 border-t border-slate-300">
                    {/* <span className="flex gap-1 items-center text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-4 h-4"
                      >
                        <path d="M2.036 12.322a1.012 1.012 0 0 1 0-.639C3.423 7.51 7.36 4.5 12 4.5c4.638 0 8.573 3.007 9.963 7.178.07.207.07.431 0 .639C20.577 16.49 16.64 19.5 12 19.5c-4.638 0-8.573-3.007-9.963-7.178Z" />
                        <path d="M15 12a3 3 0 1 1-6 0 3 3 0 0 1 6 0Z" />
                      </svg>
                      35
                    </span> */}
                    {/* <span className="flex gap-1 items-center text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="text-sky-400 w-4 h-4"
                      >
                        <path d="M21 8.25c0-2.485-2.099-4.5-4.688-4.5-1.935 0-3.597 1.126-4.312 2.733-.715-1.607-2.377-2.733-4.313-2.733C5.1 3.75 3 5.765 3 8.25c0 7.22 9 12 9 12s9-4.78 9-12Z" />
                      </svg>
                      20
                    </span> */}
                    <span className="flex gap-1 items-center text-sm">
                      <svg
                        xmlns="http://www.w3.org/2000/svg"
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                        className="w-4 h-4 text-lime-900"
                      >
                        <path d="M7.5 8.25h9m-9 3H12m-9.75 1.51c0 1.6 1.123 2.994 2.707 3.227 1.129.166 2.27.293 3.423.379.35.026.67.21.865.501L12 21l2.755-4.133a1.14 1.14 0 0 1 .865-.501 48.172 48.172 0 0 0 3.423-.379c1.584-.233 2.707-1.626 2.707-3.228V6.741c0-1.602-1.123-2.995-2.707-3.228A48.394 48.394 0 0 0 12 3c-2.392 0-4.744.175-7.043.513C3.373 3.746 2.25 5.14 2.25 6.741v6.018Z" />
                      </svg>
                     <span className="font-bold">Contactarse a: </span>  {loss.telefono}
                    </span>
                  </div>
                </div>
              </div>
            ))}
          </div>
        </div>
      </div>
    </>
  );
};

export default ReportarPerdida;
