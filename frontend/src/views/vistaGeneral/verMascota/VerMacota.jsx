import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useNavigate, useParams } from "react-router-dom";
import NavbarGeneral from "../NavbarGeneral";
import "../general.css";
import ImgenMascot from "../../../assets/images/slide.jpg";
import { Link } from "react-router-dom";

import { getIdApiMascota } from "config/api";
import axios from "axios";

function VerMascota() {
  const [visible, setVisible] = useState(false);

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
  const [imagenPreview, setImagenPreview] = useState("");

  const { id } = useParams();

  const header = <img alt="Card" src={imagenPreview} />;
  const footer = (
    <>
      <Link to={`/vista-general/mascota/${id}/adoptar`}>
        <Button label="Adoptar" icon="pi pi-check" />
      </Link>
      <Button
        label="Regresar"
        severity="secondary"
        icon="pi pi-times"
        style={{ marginLeft: "0.5em" }}
      />
    </>
  );
  const footerContent = (
    <div>
      <Button
        label="Cancelar"
        icon="pi pi-times"
        onClick={() => setVisible(false)}
        className="p-button-text"
      />
      <Button label="Guardar" icon="pi pi-check" onClick={() => setVisible(false)} autoFocus />
    </div>
  );

  async function getData() {
    try {
      const response = await axios.get(getIdApiMascota + id);
      if (response.status === 200) {
        console.log(response.data);
        const pet = response.data.data;
        setNombre(pet.name);
        setAge(pet.age);
        setSex(pet.sex);
        setColor(pet.color);
        setDescription(pet.description);
        setDateEnd(pet.date_end);
        setPeso(pet.peso);
        setTamanio(pet.tamanio);
        setSterilized(pet.sterilized === 1 ? "SI" : "No");
        setVaccination(pet.vaccination === 1 ? "SI" : "No");
        setState(pet.state);
        setPetTypeId(pet.pet_type.name);
        setTypeRaceId(pet.type_race.name);
        setImagen(pet.imagen);
        setImagenPreview(response.data.data.imagen_url);
      }
    } catch (error) {
      console.log("Error al obtener datos", error);
    }
  }
  useEffect(() => {
    getData();
  }, []);
  return (
    <>
      <NavbarGeneral />
      <div className="viewMascot card flex justify-content-center uppercase">
        <Card
          title="Detalles de Mascota"
          subTitle={nombre}
          footer={footer}
          header={header}
          style={{ width: "60%" }}
        >
          <p className="m-0">{description}</p>
          <br />

          <lu>
            <div className="formgrid grid lisdata">
              <div className="field col-12 md:col-4">
                <li>
                  <span style={{ fontWeight: "bold" }}> Color:</span> {color}
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Raza:</span> {typeRaceId}
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Tipo de Mascota:</span> {petTypeId}
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Años:</span> {age}{" "}
                </li>
              </div>
              <div className="field col-12 md:col-4">
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Sexo:</span> {sex}
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Tamaño:</span> {tamanio}
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Esterilizado:</span> {sterilized}
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Vacunas:</span> {vaccination}
                </li>
              </div>

              <div className="field col-12 md:col-4">
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Estado:</span> {state}
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Fecha de Fin de Vida:</span> {dateEnd}
                </li>
                <li>
                  {" "}
                  <span style={{ fontWeight: "bold" }}>Peso:</span> {peso}
                </li>
              </div>
            </div>
          </lu>
        </Card>
      </div>
    </>
  );
}

export default VerMascota;
