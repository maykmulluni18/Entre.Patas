import { useState } from "react";
import NabarHeader from "../../componets/NabarHeader";
import { postLoginUsers } from "../../config/api";
import axios from "axios";

const Login = () => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(postLoginUsers, {
        email: email,
        password: password,
      });
      console.log(response.status);
      if (response.status === 201) {
        console.log(response);
        sessionStorage.setItem("token", response.data.token);
        sessionStorage.setItem("usr", response.data.user);
        sessionStorage.setItem("usr_id", response.data.user[0].user_adoption_id);
        sessionStorage.setItem("usr_name", response.data.user[0].name);

        // return response()->json(['token' => $token, 'user' => $userData], 201);

        // Redirige a la página principal después de logearse con éxito
        window.location.href = "/dasboard";
      }
    } catch (error) {
      console.log(error);
      if (error) {
        console.log(error);
        setError(error?.response?.data?.message);
      }
    }
  };

  return (
    <>
      <NabarHeader />
      <div className="flex flex-wrap min-h-screen w-full content-center justify-center dark:bg-gray-800 py-10">
        <div className="flex shadow-md">
          <div
            className="flex flex-wrap content-center justify-center rounded-l-md bg-white"
            style={{
              width: "24rem",
              height: "32rem",
            }}
          >
            <div className="w-72">
              <h1 className="text-xl font-semibold">
                Bienvenidos a Entre Patas
              </h1>
              <small className="text-gray-400">
                Bienvenidos! Ingrese sus credenciales
              </small>
              <br></br>
              <span style={{ color: "red" }}>{error}</span>

              <form className="mt-4" onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Correo Electrónico
                  </label>
                  <input
                    type="email"
                    value={email}
                    onChange={(e) => {
                      setEmail(e.target.value);
                      setError(""); // Limpiar el error
                    }}
                    placeholder="Ingrese un correo"
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  />
                </div>

                <div className="mb-3">
                  <label className="mb-2 block text-xs font-semibold">
                    Contraseña
                  </label>
                  <input
                    type="password"
                    placeholder="*****"
                    onChange={(e) => {
                      setPassword(e.target.value);
                      setError(""); // Limpiar el error
                    }}
                    className="block w-full rounded-md border border-gray-300 focus:border-purple-700 focus:outline-none focus:ring-1 focus:ring-purple-700 py-1 px-1.5 text-gray-500"
                  />
                </div>

                {/* <div className="mb-3 flex flex-wrap content-center">
                  <input
                    id="remember"
                    type="checkbox"
                    className="mr-1 checked:bg-purple-700"
                  />{" "}
                  <label className="mr-auto text-xs font-semibold">
                    Remember for 30 days
                  </label>
                  <a href="#" className="text-xs font-semibold text-purple-700">
                    Forgot password?
                  </a>
                </div> */}

                <div className="mb-3">
                  <button
                    type="submit"
                    className="mb-1.5 block w-full text-center text-white bg-purple-700 hover:bg-purple-900 px-2 py-1.5 rounded-md"
                  >
                    Iniciar Session
                  </button>
                  {/* <button className="flex flex-wrap justify-center w-full border border-gray-300 hover:border-gray-500 px-2 py-1.5 rounded-md">
                    <img
                      className="w-5 mr-2"
                      src="https://lh3.googleusercontent.com/COxitqgJr1sJnIDe8-jiKhxDx1FrYbtRHKJ9z_hELisAlapwE9LUPh6fcXIfb5vwpbMl4xl9H9TRFPc5NOO8Sb3VSgIBrfRYvW6cUA"
                    />
                    Sign in with Google
                  </button> */}
                </div>
              </form>

              {/* <div className="text-center">
                <span className="text-xs text-gray-400 font-semibold">
                  Dont have account?
                </span>
                <a href="#" className="text-xs font-semibold text-purple-700">
                  Sign up
                </a>
              </div> */}
            </div>
          </div>

          <div
            className="flex flex-wrap content-center justify-center rounded-r-md"
            style={{
              width: "24rem",
              height: "32rem",
            }}
          >
            <img
              className="w-full h-full bg-center bg-no-repeat bg-cover rounded-r-md"
              src="https://i.imgur.com/9l1A4OS.jpeg"
            />
          </div>
        </div>

        {/* <div className="mt-3 w-full">
          <p className="text-center">
            Made by{" "}
            <a
              target="_blank"
              href="https://www.instagram.com/_inubayuaji/"
              className="text-purple-700"
            >
              Inu Bayu Aji
            </a>{" "}
            and ispired by{" "}
            <a
              target="_blank"
              href="https://dribbble.com/shots/17564792-Log-in-page-Untitled-UI"
              className="text-purple-700"
            >
              this
            </a>
            .
          </p>
        </div> */}
      </div>
    </>
  );
};

export default Login;
