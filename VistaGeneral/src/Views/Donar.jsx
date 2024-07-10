import { useState } from "react";
import NabarHeader from "../componets/NabarHeader";
import DonarYape from "./DonarYape";
import DonarTarjeta from "./DonarTarjeta";

const Donar = () => {
  const [selectedMethod, setSelectedMethod] = useState("Yape");

  const handleSelectMethod = (method) => {
    setSelectedMethod(method);
  };

  return (
    <>
      <NabarHeader />
      <div className="mx-auto">
        <div className="p-4 w-full text-center bg-white shadow-md sm:p-8 dark:bg-gray-800 dark:border-gray-700">
          <h3 className="mb-2 text-3xl font-bold text-gray-900 dark:text-white">
            Seleccionar tipo de Donación
          </h3>
          <div className="justify-center items-center space-y-4 sm:flex sm:space-y-0 sm:space-x-4">
            <a
              href="#"
              className="w-full sm:w-auto flex bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
              onClick={() => handleSelectMethod("Yape")}
            >
              <svg
                className="mr-3 w-7 h-7"
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 16 16 12 12 8" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
              <div className="text-left">
                <button className="-mt-1 font-sans text-sm font-semibold">
                  DONAR POR YAPE
                </button>
              </div>
            </a>
            <a
              href="#"
              className="w-full sm:w-auto flex bg-gray-800 hover:bg-gray-700 focus:ring-4 focus:ring-gray-300 text-white rounded-lg inline-flex items-center justify-center px-4 py-2.5 dark:bg-gray-700 dark:hover:bg-gray-600 dark:focus:ring-gray-700"
              onClick={() => handleSelectMethod("Tarjeta")}
            >
              <svg
                className="mr-3 w-7 h-7 "
                viewBox="0 0 24 24"
                fill="none"
                stroke="currentColor"
              >
                <circle cx="12" cy="12" r="10" />
                <polyline points="12 16 16 12 12 8" />
                <line x1="8" y1="12" x2="16" y2="12" />
              </svg>
              <div className="text-left">
                <button className="-mt-1 font-sans text-sm font-semibold">
                  DONAR POR TARJETA
                </button>
              </div>
            </a>
          </div>{" "}
          <div className="mt-4">
            {selectedMethod === "Yape" ? (
              <div>
                <DonarYape />
              </div>
            ) : (
              <div>
                <DonarTarjeta />
              </div>
            )}
          </div>
        </div>
      </div>
    </>
  );
};

export default Donar;
