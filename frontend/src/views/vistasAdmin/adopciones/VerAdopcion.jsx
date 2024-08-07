import Card from "@mui/material/Card";
// Argon Dashboard 2 MUI components
import ArgonBox from "components/ArgonBox";
import ArgonTypography from "components/ArgonTypography";
import Footer from "examples/Footer";
import React, { useState, useEffect } from "react";
import { DataTable } from "primereact/datatable";
import { Column } from "primereact/column";
import { Button } from "primereact/button";
import { Link } from "react-router-dom";
import { Tag } from "primereact/tag";
import axios from "axios";
import {
  apiAdoptionUsers,
  enableApiMascota,
  disableApiMascota,
  cancelAdoption,
  habilitarAdoption,
} from "config/api";
// Data
const VerAdopcion = () => {
  const [listData, setListData] = useState([]);

  async function getlistData() {
    try {
      const response = await axios.get(apiAdoptionUsers);
      console.log(response.data.data);
      if (response.status === 200) {
        setListData(response.data.data);
      }
    } catch (error) {
      console.log("Error al obtener los datos", error);
    }
  }

  useEffect(() => {
    getlistData();
  }, []);

  const renderHeader = () => {
    return (
      <div className="flex justify-content-end">
        {/* <Link to={"/listPets/form"} style={{ color: "#49bfd9" }}>
          <Button label="Crear" />
        </Link> */}
      </div>
    );
  };

  async function cancelFunction(rowData) {
    console.log(rowData);
    try {
      const response = await axios.patch(`${cancelAdoption}/${rowData}`);
      console.log(response);
      if (response.status === 201) {
        getlistData();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  async function habilitarFunction(rowData) {
    console.log(rowData);
    try {
      const response = await axios.patch(`${habilitarAdoption}/${rowData}`);
      console.log(response);
      if (response.status === 201) {
        getlistData();
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  // async function enableFunction(rowData) {
  //   console.log(rowData);
  //   try {
  //     const response = await axios.patch(`${enableApiMascota}${rowData}`, { low: 1 });
  //     console.log(response);
  //     if (response.status === 200) {
  //       getlistData();
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // }

  // async function disableFunction(rowData) {
  //   try {
  //     const response = await axios.patch(`${disableApiMascota}${rowData}`, { low: 0 });
  //     if (response.status === 200) {
  //       console.log(response);
  //       getlistData();
  //     }
  //   } catch (error) {
  //     console.error("Error:", error);
  //   }
  // }

  const actionBodyTemplate = (rowData) => {
    console.log(rowData);
    return (
      <React.Fragment>
        <div className="" style={{ display: "flex", alignItems: "center" }}>
          {/* <div className="">
            {" "}
            <Link to={`form/${rowData.id}`}>
              <Button
                //icon="pi pi-pencil"
                style={{ background: "#FF5733" }}
                label="Editar"
                className="p-button p-button-success p-mr-2"
              />
            </Link>
          </div>
          <div>
            <p style={{ color: "white" }}>-</p>
          </div> */}
          <div className="">
            {" "}
            {rowData.state === "Adoptado" ? (
              <Button
                label="Cancelar"
                style={{ background: "#C70039" }}
                onClick={() => cancelFunction(rowData.idMascota)}
              />
            ) : (
              <Button
                label="Habilitar"
                style={{ background: "#344767" }}
                onClick={() => habilitarFunction(rowData.idMascota)}
              />
            )}
          </div>
        </div>
      </React.Fragment>
    );
  };

  const renderStatusTag = (rowData) => {
    return (
      <Tag
        value={rowData.state === "Adoptado" ? "Adoptado" : "No Adoptado"}
        style={{ background: rowData.state === "Adoptado" ? "#344767" : "#C70039" }}
      />
    );
  };

  const renderStatusVacun = (rowData) => {
    return (
      <Tag
        value={rowData.vaccination === 1 ? "SI" : "NO"}
        style={{ background: rowData.vaccination === 1 ? "#344767" : "#C70039" }}
      />
    );
  };

  const renderImage = (rowData) => {
    return (
      <img src={rowData.imagen_url} alt={rowData.name} style={{ width: "50px", height: "50px" }} />
    );
  };

  return (
    <>
      <ArgonBox py={3}>
        <ArgonBox mb={7}>
          {/* <Card>
            <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
              <ArgonTypography variant="h6">Authors table</ArgonTypography>
            </ArgonBox>
            <ArgonBox
              sx={{
                "& .MuiTableRow-root:not(:last-child)": {
                  "& td": {
                    borderBottom: ({ borders: { borderWidth, borderColor } }) =>
                      `${borderWidth[1]} solid ${borderColor}`,
                  },
                },
              }}
            ></ArgonBox>
          </Card> */}
        </ArgonBox>
        <Card>
          <ArgonBox display="flex" justifyContent="space-between" alignItems="center" p={3}>
            <ArgonTypography variant="h6">Lista de Adopciones</ArgonTypography>
          </ArgonBox>
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
            <div className="card">
              <DataTable
                value={listData}
                paginator
                rows={5}
                header={renderHeader}
                rowsPerPageOptions={[5, 10, 25, 50]}
                tableStyle={{ minWidth: "50rem" }}
              >
                <Column field="" header="" style={{ width: "2%" }}></Column>
                {/* <Column field="id" header="ID" style={{ width: "25%" }}></Column> */}
                <Column
                  field="name"
                  header="Nombre del Adoptante"
                  style={{ width: "25%" }}
                ></Column>
                <Column field="fullname" header="Apellidos" style={{ width: "5%" }}></Column>
                <Column field="email" header="Correo" style={{ width: "35%" }}></Column>
                <Column field="phone" header="Telefono" style={{ width: "25%" }}></Column>

                <Column
                  field="type_name_masc"
                  header="Tipo Mascota"
                  style={{ width: "25%" }}
                ></Column>

                <Column
                  field="name_mascota"
                  header="Nombre Mascota"
                  style={{ width: "25%" }}
                ></Column>
                <Column
                  body={renderStatusTag}
                  header="Estado de Adopcion"
                  style={{ width: "30%" }}
                ></Column>
                <Column body={actionBodyTemplate} header="Actions" style={{ width: "25%" }} />
              </DataTable>
            </div>
          </ArgonBox>
        </Card>
      </ArgonBox>
      {/* <Footer /> */}
    </>
  );
};

export default VerAdopcion;
