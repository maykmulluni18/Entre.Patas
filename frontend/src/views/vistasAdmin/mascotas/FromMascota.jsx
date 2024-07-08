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
import { Dropdown } from "primereact/dropdown";
import { InputTextarea } from "primereact/inputtextarea";
import { Link } from "react-router-dom";

import axios from "axios";
import {
  postApiMascota,
  putApiMascota,
  getIdApiMascota,
  listEnableApiTipoMascota,
  listEnableApiTipoRaza,
} from "config/api";

const FromMascota = () => {
  // 'name' => 'required|string|max:255',
  //               'age' => 'required|integer',
  //               'sex' => 'required|string',
  //               'color' => 'required|string|max:255',
  //               'imagen' => 'nullable',
  //               'description' => 'nullable',
  //               'date_end' => 'nullable',
  //               'sterilized' => 'required',
  //               'vaccination' => 'required',
  //               'state' => 'required',
  //               'pet_type_id' => 'required',
  //               'type_race_id' => 'required',
  const { id } = useParams();
  const [nombre, setNombre] = useState("");
  const [age, setAge] = useState("");
  const [sex, setSex] = useState("");
  const [color, setColor] = useState("");
  const [imagen, setImagen] = useState("");
  const [description, setDescription] = useState("");
  const [dateEnd, setDateEnd] = useState("");
  const [peso, setPeso] = useState("");
  const [tamanio, setTamanio] = useState("");
  const [sterilized, setSterilized] = useState(false);
  const [vaccination, setVaccination] = useState(false);
  const [state, setState] = useState("");
  const [petTypeId, setPetTypeId] = useState("");
  const [typeRaceId, setTypeRaceId] = useState("");

  //
  const [listTipoMascota, setListTipoMascota] = useState([]);
  const [listRazaMascota, setListRazaMascota] = useState([]);
  const [imagenPreview, setImagenPreview] = useState("");
  const [errors, setErrors] = useState({});

  const navigate = useNavigate();
  const toast = useRef(null);
  //  console.log(id);

  // const handleInputChange = (e) => {
  //   const { name, value, type, checked } = e.target;
  //   if (type === "checkbox") {
  //     if (name === "sterilized") setSterilized(checked);
  //     if (name === "vaccination") setVaccination(checked);
  //   } else {
  //     if (name === "name") setNombre(value);
  //     if (name === "age") setAge(value);
  //     if (name === "sex") setSex(value);
  //     if (name === "color") setColor(value);
  //     if (name === "description") setDescription(value);
  //     if (name === "date_end") setDateEnd(value);
  //     if (name === "state") setState(value);
  //     if (name === "pet_type_id") setPetTypeId(value);
  //     if (name === "type_race_id") setTypeRaceId(value);
  //   }
  // };

  async function getFrom(e) {
    e.preventDefault();

    const body = {
      name: nombre,
      age: age,
      sex: sex,
      color: color,
      imagen: imagen,
      description: description,
      date_end: dateEnd,
      peso: peso,
      tamanio: tamanio,
      sterilized: sterilized,
      vaccination: vaccination,
      state: state,
      pet_type_id: petTypeId,
      type_race_id: typeRaceId,
    };

    const data = new FormData();
    data.append("name", nombre);
    data.append("age", age);
    data.append("sex", sex);
    data.append("color", color);
    data.append("imagen", imagen);
    data.append("description", description);
    data.append("date_end", dateEnd);
    data.append("peso", peso);
    data.append("tamanio", tamanio);
    data.append("sterilized", sterilized);
    data.append("vaccination", vaccination);
    data.append("state", "No Adoptado");
    data.append("pet_type_id", petTypeId);
    data.append("type_race_id", typeRaceId);

    if (id) {
      try {
        console.log(body);
        const response = await axios.post(`${putApiMascota}${id}`, body, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (response.status === 201) {
          toast.current.show({
            severity: "info",
            summary: "Actualización",
            detail: "Mascota actualizada con éxito",
          });
          navigate("/listPets");
        }
      } catch (error) {
        console.log("datasss", error.response);
        if (error.response && error.response.data && error.response.data.errors) {
          const serverErrors = error.response.data.errors;
          setErrors(serverErrors);
          console.log("Errores del servidor:", serverErrors);
        } else {
          console.log("Error al obtener los datos", error);
        }
      }
    } else {
      try {
        console.log(data);
        const response = await axios.post(postApiMascota, data, {
          headers: {
            "Content-Type": "multipart/form-data",
          },
        });
        if (response.status === 201) {
          toast.current.show({
            severity: "info",
            summary: "Actualizacion",
            detail: "De Mascota",
          });

          navigate("/listPets");
        }
      } catch (error) {
        if (error.response && error.response.data && error.response.data.errors) {
          const serverErrors = error.response.data.errors;
          setErrors(serverErrors);
          console.log("Errores del servidor:", serverErrors);
        } else {
          console.log("Error al obtener los datos", error);
        }
      }
    }
  }

  const getById = async () => {
    try {
      const response = await axios.get(`${getIdApiMascota}${id}`);
      // console.log(response);
      // console.log(response.data.data.imagen_url);
      const pet = response.data.data;
      setNombre(pet.name);
      setAge(pet.age);
      setSex(pet.sex);
      setColor(pet.color);
      setDescription(pet.description);
      setDateEnd(pet.date_end);
      setPeso(pet.peso);
      setTamanio(pet.tamanio);
      setSterilized(pet.sterilized);
      setVaccination(pet.vaccination);
      setState(pet.state);
      setPetTypeId(pet.pet_type_id);
      setTypeRaceId(pet.type_race_id);
      setImagen(pet.imagen);
      setImagenPreview(response.data.data.imagen_url); // Set preview for existing image
    } catch (error) {
      console.log("Error al obtener los datos", error);
    }
  };

  useEffect(() => {
    if (id) {
      getById();
    }
  }, []);

  const selectEst = [
    { name: "SI", value: 1 },
    { name: "NO", value: 0 },
  ];

  const selectVac = [
    { name: "SI", value: 1 },
    { name: "NO", value: 0 },
  ];

  const selectSex = [
    { name: "Macho", value: "Macho" },
    { name: "Hembra", value: "Hembra" },
  ];
  const selectTam = [
    { name: "Grande", value: "Grande" },
    { name: "Mediano", value: "Mediano" },
    { name: "Pequeño", value: "Pequeño" },
  ];
  const selectSt = [
    { name: "SI", value: 1 },
    { name: "NO", value: 0 },
  ];

  const inputFileRef = useRef(null);

  const handleFileChange = (e) => {
    const file = e.target.files[0];
    setImagen(file);
    console.log(file);
    if (file) {
      const reader = new FileReader();
      reader.readAsDataURL(file);
      reader.onload = (event) => {
        setImagenPreview(event.target.result);
      };
    }
  };

  async function getlistTipoMascota() {
    try {
      const response = await axios.get(listEnableApiTipoMascota);
      if (response.status === 200) {
        setListTipoMascota(response.data.data);
        console.log(response);
      }
    } catch (error) {
      console.log("Error al obtener los datos", error);
    }
  }
  async function getlistTipoRaza() {
    try {
      const response = await axios.get(listEnableApiTipoRaza);
      if (response.status === 200) {
        setListRazaMascota(response.data.data);
      }
    } catch (error) {
      console.log("Error al obtener los datos", error);
    }
  }

  useEffect(() => {
    getlistTipoMascota();
    getlistTipoRaza();
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
                title={id ? "Actualizar  Mascota" : "Agregar Nueva Mascota"}
                style={{ width: "90%" }}
              >
                <form>
                  <div className="formgrid grid">
                    <div className="field col-12 md:col-6">
                      <label>Imagen</label>
                      <InputText
                        id="imagen"
                        type="file"
                        accept="image/*"
                        //value={imagen}
                        ref={inputFileRef}
                        onChange={handleFileChange}
                        // onChange={(e) => setImagen(e.target.value)}
                        //onChange={handleImageChange}
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border-900 border-round appearance-none outline-none focus:border-primary w-full"
                      />{" "}
                    </div>

                    <div className="field col-12 md:col-6 text-start">
                      <label className="text-start" style={{ textAlign: "end" }}>
                        Nombre de Mascota
                      </label>
                      <InputText
                        id="firstname6"
                        type="text"
                        value={nombre}
                        onChange={(e) => {
                          setNombre(e.target.value), setErrors({ ...errors, name: "" });
                        }}
                        //onChange={handleInputChange}
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border-900 border-round appearance-none outline-none focus:border-primary w-full"
                      />
                      {errors.name && (
                        <span style={{ color: "red" }} className="error">
                          {errors.name[0]}
                        </span>
                      )}
                    </div>
                    <div className="field col-12 md:col-6 text-center">
                      {imagenPreview && (
                        <div>
                          {/* <h4>Imagen de Mascota:</h4> */}
                          <img src={imagenPreview} alt="Selected" height="200px" width="250px" />
                        </div>
                      )}
                    </div>
                    <div className="field col-12 md:col-6">
                      <label>Descripcion</label>
                      <InputTextarea
                        id="description"
                        type="text"
                        value={description}
                        rows={10}
                        cols={35}
                        //onChange={handleInputChange}
                        onChange={(e) => {
                          setDescription(e.target.value);
                          setErrors({ ...errors, description: "" });
                        }}
                        className="text-base text-color  surface-overlay p-2 border-1 border-solid surface-border-900 border-round appearance-none outline-none focus:border-primary w-full"
                      />
                      {errors.description && (
                        <span style={{ color: "red" }} className="error">
                          {errors.description[0]}
                        </span>
                      )}
                    </div>
                    <div className="field col-12 md:col-6">
                      <label>Edad</label>
                      <InputText
                        id="age"
                        type="number"
                        value={age}
                        onChange={(e) => {
                          setAge(e.target.value);
                          setErrors({ ...errors, age: "" });
                        }}
                        //onChange={handleInputChange}
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border-900 border-round appearance-none outline-none focus:border-primary w-full"
                      />
                      {errors.age && (
                        <span style={{ color: "red" }} className="error">
                          {errors.age[0]}
                        </span>
                      )}
                    </div>
                    <div className="field col-12 md:col-6">
                      <label>Peso (KG)</label>
                      <InputText
                        id="peso"
                        type="text"
                        value={peso}
                        onChange={(e) => {
                          setPeso(e.target.value);
                          setErrors({ ...errors, peso: "" });
                        }}
                        //onChange={handleInputChange}
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border-900 border-round appearance-none outline-none focus:border-primary w-full"
                      />
                      {errors.peso && (
                        <span style={{ color: "red" }} className="error">
                          {errors.peso[0]}
                        </span>
                      )}
                    </div>
                    <div className="field col-12 md:col-6">
                      <label>Color</label>
                      <InputText
                        id="color"
                        type="text"
                        value={color}
                        onChange={(e) => {
                          setColor(e.target.value);
                          setErrors({ ...errors, color: "" });
                        }}
                        //onChange={handleInputChange}
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border-900 border-round appearance-none outline-none focus:border-primary w-full"
                      />
                      {errors.color && (
                        <span style={{ color: "red" }} className="error">
                          {errors.color[0]}
                        </span>
                      )}
                    </div>

                 
                    <div className="field col-12 md:col-6">
                      <label>Fecha de Fin</label>
                      <InputText
                        id="dateEnd"
                        type="date"
                        value={dateEnd}
                        onChange={(e) => {
                          setDateEnd(e.target.value);
                          setErrors({ ...errors, date_end: "" });
                        }}
                        //onChange={handleInputChange}
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border-900 border-round appearance-none outline-none focus:border-primary w-full"
                      />
                      {errors.date_end && (
                        <span style={{ color: "red" }} className="error">
                          {errors.date_end[0]}
                        </span>
                      )}
                    </div>

                    <div className="field col-12 md:col-6">
                      <label>Tamaño ( CM )</label>
                      <Dropdown
                        id="tamanio"
                        type="text"
                        value={tamanio}
                        options={selectTam}
                        optionLabel="name"
                        optionValue="value"
                        onChange={(e) => {
                          setTamanio(e.target.value);
                          setErrors({ ...errors, tamanio: "" });
                        }}
                        //onChange={handleInputChange}
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border-900 border-round appearance-none outline-none focus:border-primary w-full"
                      />
                      {errors.tamanio && (
                        <span style={{ color: "red" }} className="error">
                          {errors.tamanio[0]}
                        </span>
                      )}
                    </div>
                    <div className="field col-12 md:col-6">
                      <label>Sexo</label>
                      <Dropdown
                        id="sex"
                        type="text"
                        options={selectSex}
                        optionLabel="name"
                        optionValue="value"
                        value={sex}
                        onChange={(e) => {
                          setSex(e.target.value);
                          setErrors({ ...errors, sex: "" });
                        }}
                        //onChange={handleInputChange}
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border-900 border-round appearance-none outline-none focus:border-primary w-full"
                      />
                      {errors.sex && (
                        <span style={{ color: "red" }} className="error">
                          {errors.sex[0]}
                        </span>
                      )}
                    </div>
                    <div className="field col-12 md:col-6">
                      <label>Vacunado</label>
                      <Dropdown
                        value={vaccination}
                        //onChange={handleInputChange}
                        onChange={(e) => {
                          setVaccination(e.target.value);
                          setErrors({ ...errors, vaccination: "" });
                        }}
                        options={selectVac}
                        optionLabel="name"
                        optionValue="value"
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border-900 border-round appearance-none outline-none focus:border-primary w-full"
                      />
                      {errors.vaccination && (
                        <span style={{ color: "red" }} className="error">
                          {errors.vaccination[0]}
                        </span>
                      )}
                    </div>
                    <div className="field col-12 md:col-6">
                      <label>Esterilizado ?</label>
                      <Dropdown
                        value={sterilized}
                        //onChange={handleInputChange}
                        onChange={(e) => {
                          setSterilized(e.target.value);
                          setErrors({ ...errors, sterilized: "" });
                        }}
                        options={selectEst}
                        optionLabel="name"
                        optionValue="value"
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border-900 border-round appearance-none outline-none focus:border-primary w-full"
                      />
                      {errors.sterilized && (
                        <span style={{ color: "red" }} className="error">
                          {errors.sterilized[0]}
                        </span>
                      )}
                    </div>
                    {/* <div className="field col-12 md:col-6">
                      <label>Estado</label>
                      <InputText
                        value={state}
                        //onChange={handleInputChange}
                        onChange={(e) => {
                          setState(e.target.value);
                          setErrors({ ...errors, state: "" });
                        }}
                        // options={selectSt}
                        // optionLabel="name"
                        // optionValue="value"
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border-900 border-round appearance-none outline-none focus:border-primary w-full"
                      />
                      {errors.state && (
                        <span style={{ color: "red" }} className="error">
                          {errors.state[0]}
                        </span>
                      )}
                    </div> */}
                    <div className="field col-12 md:col-6">
                      <label>Raza</label>
                      <Dropdown
                        id="race"
                        type="text"
                        value={typeRaceId}
                        //onChange={handleInputChange}
                        onChange={(e) => {
                          setTypeRaceId(e.target.value);
                          setErrors({ ...errors, type_race_id: "" });
                        }}
                        options={listRazaMascota}
                        optionLabel="name"
                        optionValue="id"
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border-900 border-round appearance-none outline-none focus:border-primary w-full"
                      />
                      {errors.type_race_id && (
                        <span style={{ color: "red" }} className="error">
                          {errors.type_race_id[0]}
                        </span>
                      )}
                    </div>
                    <div className="field col-12 md:col-6">
                      <label>Tipo</label>
                      <Dropdown
                        id="type"
                        type="text"
                        value={petTypeId}
                        //onChange={handleInputChange}
                        onChange={(e) => {
                          setPetTypeId(e.target.value);
                          setErrors({ ...errors, pet_type_id: "" });
                        }}
                        options={listTipoMascota}
                        optionLabel="name"
                        optionValue="id"
                        className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border-900 border-round appearance-none outline-none focus:border-primary w-full"
                      />
                      {errors.pet_type_id && (
                        <span style={{ color: "red" }} className="error">
                          {errors.pet_type_id[0]}
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
                  </div>

                  {/* <button type="button" className="btn-secondary">Reset</button> */}
                </form>
                <div className="formgrid grid">
                  <div className="field col-12 md:col-6">
                    <Link to={"/listPets"} style={{ color: "white" }}>
                      <Button className="w-full" label="Cancelar" severity="warning" />
                    </Link>
                  </div>
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
              </Card>
            </div>
          </ArgonBox>
        </LCard>
      </ArgonBox>
      {/* <Footer /> */}
    </>
  );
};

export default FromMascota;
