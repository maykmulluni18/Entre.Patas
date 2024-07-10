import { Link } from "react-router-dom";
import PropTypes from "prop-types"; // Importar PropTypes

const ModalView = ({ responseData, responseData1 }) => {
  return (
    <div className="fixed inset-0 flex items-center justify-center z-50">
      <div className="bg-white w-1/2 p-6 rounded-lg shadow-lg">
        <h2 className="text-2xl font-bold mb-4">¡Gracias por participar!</h2>
        <p className="text-gray-700 mb-4">
          Gracias por tu participación en la adopción de mascota.
        </p>
        {/* <div className="mt-4">
          <p className="font-semibold">Datos adicionales:</p>
          <pre className="text-gray-700">{responseData}</pre>
        </div> */}
        <Link to={`/VistaGeneral/${responseData1}/adoptar/${responseData}`}>
          <button className="bg-blue-500 hover:bg-blue-600 text-white font-bold py-2 px-4 rounded mt-4 focus:outline-none focus:shadow-outline">
            Continuar
          </button>
        </Link>
      </div>
    </div>
  );
};

// Definir PropTypes para onClose y responseDataadoptar
ModalView.propTypes = {
  responseData: PropTypes.object, // responseData puede ser cualquier tipo de objeto (ajustar según la estructura)
  responseData1: PropTypes.any, // responseData puede ser cualquier tipo de objeto (ajustar según la estructura)

};

export default ModalView;
