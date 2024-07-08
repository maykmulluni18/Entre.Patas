/**
=========================================================
* Argon Dashboard 2 MUI - v3.0.1
=========================================================

* Product Page: https://www.creative-tim.com/product/argon-dashboard-material-ui
* Copyright 2023 Creative Tim (https://www.creative-tim.com)

Coded by www.creative-tim.com

 =========================================================

* The above copyright notice and this permission notice shall be included in all copies or substantial portions of the Software.
*/

import { useState } from "react";

// react-router-dom components
import { Link } from "react-router-dom";

// @mui material components
import Switch from "@mui/material/Switch";

// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import ArgonInput from "components/ArgonInput";
import ArgonButton from "components/ArgonButton";
import axios from "axios";
// Authentication layout components
import IllustrationLayout from "layouts/authentication/components/IllustrationLayout";
import { Api_LOGIN } from "config/api";
// Image
const bgImage =
  "https://raw.githubusercontent.com/creativetimofficial/public-assets/master/argon-dashboard-pro/assets/img/signin-ill.jpg";

function Illustration() {
  const [rememberMe, setRememberMe] = useState(false);

  const handleSetRememberMe = () => setRememberMe(!rememberMe);

  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = async (event) => {
    event.preventDefault();

    try {
      const response = await axios.post(Api_LOGIN, {
        email: email,
        password: password,
      });
      console.log(response.data); // Maneja la respuesta según lo necesites, por ejemplo, almacenando el token de autenticación en el estado
    } catch (error) {
      console.error("Error al iniciar sesión:", error); // Muestra el mensaje de error devuelto por la API
    }
  };

  return (
    <IllustrationLayout
      title="Iniciar Session"
      description="Ingrese su correo y contraseña"
      illustration={{
        image: bgImage,
        title: '"Attention is the new currency"',
        description:
          "The more effortless the writing looks, the more effort the writer actually put into the process.",
      }}
    >
      <ArgonBox component="form" role="form" onSubmit={handleSubmit}>
        <ArgonBox mb={2}>
          <ArgonInput
            type="email"
            placeholder="Email"
            size="large"
            value={email}
            onChange={(e) => setEmail(e.target.value)}
          />
        </ArgonBox>
        <ArgonBox mb={2}>
          <ArgonInput
            type="password"
            placeholder="Contraseña"
            size="large"
            value={password}
            onChange={(e) => setPassword(e.target.value)}
          />
        </ArgonBox>
        {/* <ArgonBox display="flex" alignItems="center">
          <Switch checked={rememberMe} onChange={handleSetRememberMe} />
          <ArgonTypography
            variant="button"
            fontWeight="regular"
            onClick={handleSetRememberMe}
            sx={{ cursor: "pointer", userSelect: "none" }}
          >
            &nbsp;&nbsp;Remember me
          </ArgonTypography>
        </ArgonBox> */}
        <ArgonBox mt={4} mb={1}>
          <ArgonButton color="info" size="large" type="submit" fullWidth>
            Iniciar Session
          </ArgonButton>
        </ArgonBox>
        <ArgonBox mt={3} textAlign="center">
          <ArgonTypography variant="button" color="text" fontWeight="regular">
            {/* //Registrarse aqui?{" "} */}
            <ArgonTypography
              component={Link}
              // to="/authentication/sign-up"
              variant="button"
              color="info"
              fontWeight="medium"
            >
              {/* Iniciar Session */}
            </ArgonTypography>
          </ArgonTypography>
        </ArgonBox>
      </ArgonBox>
    </IllustrationLayout>
  );
}

export default Illustration;
