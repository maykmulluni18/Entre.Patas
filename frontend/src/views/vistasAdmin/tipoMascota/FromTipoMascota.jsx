import LCard from "@mui/material/Card";
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import Footer from "examples/Footer";
import { Card } from "primereact/card";
import React, { useState, useEffect, useRef } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import "./styleFrom.css";
import { InputText } from "primereact/inputtext";
import { Button } from "primereact/button";
import { useNavigate, useParams } from "react-router-dom";
import { Toast } from "primereact/toast";
import { Link } from "react-router-dom";

import axios from "axios";
import { postApiTipoMascota, putApiTipoMascota, getIdApiTipoMascota } from "config/api";

const FromTipoMascota = () => {
  const { id } = useParams();
  const [nombre, setNombre] = useState("");
  const navigate = useNavigate();
  const toast = useRef(null);
  const [errors, setErrors] = useState({});

  console.log(id);

  async function getFrom(e) {
    e.preventDefault();

    const body = {
      name: nombre,
    };

    if (id) {
      try {
        const response = await axios.put(putApiTipoMascota + id, body);
        if (response.status === 201) {
          toast.current.show({ severity: "info", summary: "Exito", detail: "Creado Tipo Mascota" });
          navigate("/teypePets");
        }
        console.log(response);
      } catch (error) {
        console.log("datasss", error.response);
        if (error.response && error.response.data && error.response.data.errors) {
          const serverErrors = error.response.data.errors;
          setErrors(serverErrors);
          console.log("Errores del servidor:", serverErrors);
        } else {
          console.log("Error al obtener los datos", error);
        }
        console.log("Error al obtener los datos", error);
      }
    } else {
      try {
        const response = await axios.post(postApiTipoMascota, body);
        if (response.status === 201) {
          toast.current.show({
            severity: "info",
            summary: "Actualizado",
            detail: "Tipo de Mascota",
          });

          navigate("/teypePets");
        }
        console.log(response);
      } catch (error) {
        console.log("datasss", error.response);
        if (error.response && error.response.data && error.response.data.errors) {
          const serverErrors = error.response.data.errors;
          setErrors(serverErrors);
          console.log("Errores del servidor:", serverErrors);
        } else {
          console.log("Error al obtener los datos", error);
        }
        console.log("Error al obtener los datos", error);
      }
    }
  }

  async function getById() {
    try {
      const response = await axios.get(getIdApiTipoMascota + id);
      console.log(response.data);
      setNombre(response.data.data.name);
    } catch (error) {
      console.log("Error al obtener los datos", error);
    }
  }

  useEffect(() => {
    if (id) {
      getById();
    }
  }, []);

  return (
    <>
      <Toast ref={toast} />
      <ArgonBox py={3}>
        <ArgonBox mb={7}></ArgonBox>
        <LCard>
          <ArgonBox
            sx={{
              "& .MuiTableRow-root:not(:last-child)": {
                "& td": {
                  borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                    `${borderWidth[1]} solid ${borderColor}`,
                },
              },
            }}
          >
            <div style={{ display: "flex", justifyContent: "center" }}>
              <Card
                title={id ? "Actualizar Tipo de Mascota" : "Agregar Tipo de Mascota"}
                style={{ width: "90%" }}
              >
                <form>
                  <div className="formgrid grid">
                    <div className="field col-12 md:col-12 text-start">
                      <label className="text-start" style={{ textAlign: "end" }}>
                        Nombre de Mascota
                      </label>
                      <InputText
                        id="firstname6"
                        type="text"
                        value={nombre}
                        onChange={(e) => {
                          setNombre(e.target.value);
                          setErrors({ ...errors, name: "" });
                        }}
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border-900 border-round appearance-none outline-none focus:border-primary w-full"
                      />
                      {errors.name && (
                        <span style={{ color: "red" }} className="error">
                          {errors.name[0]}
                        </span>
                      )}
                    </div>
                    {/* <div className="field col-12 md:col-6">
                    <label>Lastname</label>
                    <InputText
                      id="lastname6"
                      type="text"
                      className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border-900 border-round appearance-none outline-none focus:border-primary w-full"
                    />
                  </div>
                  <div className="field col-12 md:col-6">
                    <label>City</label>
                    <InputText
                      id="city"
                      type="text"
                      className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border-900 border-round appearance-none outline-none focus:border-primary w-full"
                    />
                  </div> */}

                    <div className="field col-12 md:col-6">
                    <Link to={"/teypePets"} style={{ color: "white" }}>
                      <Button className="w-full" label="Cancelar" severity="warning" />
                    </Link>                    </div>
                    <div className="field col-12 md:col-6">
                      <Button
                        className="w-full"
                        style={{ with: "100%" }}
                        type="submit"
                        onClick={getFrom}
                        label="Guardar"
                      />
                    </div>
                  </div>

                  {/* <button type="button" className="btn-secondary">Reset</button> */}
                </form>
              </Card>
            </div>
          </ArgonBox>
        </LCard>
      </ArgonBox>
      {/* <Footer /> */}
    </>
  );
};

export default FromTipoMascota;
