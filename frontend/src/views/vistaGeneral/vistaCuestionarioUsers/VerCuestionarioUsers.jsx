import React, { useEffect, useState } from "react";
import { Card } from "primereact/card";
import { Button } from "primereact/button";
import { Dialog } from "primereact/dialog";
import { InputText } from "primereact/inputtext";
import { useNavigate, useParams } from "react-router-dom";
import NavbarGeneral from "../NavbarGeneral";
import { RadioButton } from "primereact/radiobutton";
import "../general.css";
import ImgenMascot from "../../../assets/images/slide.jpg";
import { getIdApiMascota, apiListQuestions } from "config/api";
import axios from "axios";

function VerCuestionarioUsers() {
  const [visible, setVisible] = useState(false);
  const [nameUsers, setNamesUser] = useState("");
  const [fullnameUsers, setFullnameUser] = useState("");
  const [emailUsers, setEmailUser] = useState("");
  const [phoneUsers, setPhoneUser] = useState("");
  const [directionUsers, setDirectionUser] = useState("");

  const [errors, setErrors] = useState({});
  const [listQuestion, setLisQuestion] = useState([]);

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

  const [responses, setResponses] = useState({});

  const handleResponseChange = (question, value) => {
    setResponses((prevResponses) => ({
      ...prevResponses,
      [question]: value,
    }));
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    const totalPoints = Object.values(responses).reduce((acc, curr) => acc + curr, 0);
    const transformedResponses = Object.keys(responses).map((key) => ({
      user_adoption_sponsorship_id: "42342342wda",
      adoption_questionnaire_id: parseInt(key.replace("pregunta", ""), 10), // Obtener el id numérico eliminando 'pregunta'
      answer: responses[key],
    }));
    console.log("Respuestas transformadas:", transformedResponses);
    console.log("Puntos totales:", totalPoints);
  };

  const questions = [
    {
      id: 31,
      question: "¿Por qué estás interesado en adoptar una mascota en este momento?",
      options: [
        { label: "Quiero compañía y afecto", points: 3 },
        { label: "Para enseñar responsabilidad a mis hijos", points: 2 },
        { label: "Para tener un compañero de ejercicio", points: 1 },
      ],
    },
    {
      id: 32,
      question: "¿Tienes alguna experiencia previa en la adopción o cuidado de mascotas?",
      options: [
        { label: "Sí, he tenido mascotas antes", points: 3 },
        { label: "No, esta sería mi primera mascota", points: 2 },
        { label: "He cuidado mascotas de amigos o familiares", points: 1 },
      ],
    },
    {
      id: 33,
      question: "¿Qué tipo de mascota estás buscando (perro, gato, otro)? ¿Por qué?",
      options: [
        { label: "Perro, son leales y activos", points: 3 },
        { label: "Gato, son independientes y tranquilos", points: 2 },
        { label: "Otro, tengo preferencias específicas por otras especies", points: 1 },
      ],
    },
    {
      id: 34,
      question: "¿Cuántas horas al día puedes dedicarle a tu mascota?",
      options: [
        { label: "Menos de 1 hora", points: 1 },
        { label: "Entre 1 y 3 horas", points: 2 },
        { label: "Más de 3 horas", points: 3 },
      ],
    },
    {
      id: 35,
      question: "¿Qué tipo de espacio tienes en tu hogar para la mascota?",
      options: [
        { label: "Casa con jardín", points: 3 },
        { label: "Apartamento pequeño", points: 2 },
        { label: "Otro tipo de vivienda", points: 1 },
      ],
    },
    {
      id: 36,
      question: "¿Cómo planeas ejercitar y socializar a tu mascota?",
      options: [
        { label: "Paseos diarios y visitas al parque", points: 3 },
        { label: "Juegos en casa y citas con otros dueños de mascotas", points: 2 },
        { label: "Otra actividad específica", points: 1 },
      ],
    },
    {
      id: 37,
      question:
        "¿Estás dispuesto/a a comprometerte con los gastos veterinarios y cuidados médicos de la mascota?",
      options: [
        { label: "Sí, estoy preparado/a para asumir esos gastos", points: 3 },
        { label: "Dependerá del costo de los cuidados médicos", points: 2 },
        { label: "No estoy seguro/a de poder costear esos gastos", points: 1 },
      ],
    },
    {
      id: 38,
      question: "¿Tienes niños en casa? ¿Cómo crees que la nueva mascota se adaptará a ellos?",
      options: [
        { label: "Sí, creo que se llevarán bien", points: 3 },
        { label: "No, no tengo niños en casa", points: 2 },
        { label: "No estoy seguro/a de cómo reaccionarán", points: 1 },
      ],
    },
    {
      id: 39,
      question: "¿Qué harías si la mascota presenta algún comportamiento no deseado?",
      options: [
        { label: "Buscaría ayuda profesional de un entrenador de mascotas", points: 3 },
        { label: "Intentaría corregirlo por mi cuenta", points: 2 },
        { label: "No estoy seguro/a de cómo manejaría esa situación", points: 1 },
      ],
    },
    {
      id: 40,
      question: "¿Qué expectativas tienes sobre la relación con tu nueva mascota?",
      options: [
        { label: "Quiero establecer un vínculo cercano y duradero", points: 3 },
        { label: "Busco una compañía ocasional", points: 2 },
        { label: "No tengo expectativas claras", points: 1 },
      ],
    },
  ];

  const header = <img alt="Card" src={imagenPreview} />;
  const footer = (
    <>
      <Button label="Adoptar" icon="pi pi-check" onClick={() => setVisible(true)} />
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

  async function getQuestion() {
    try {
      const response = await axios.get(apiListQuestions);
      if (response.status === 200) {
        console.log(response.data.data);
        // setPregunta1(response.data.data[0].question);
        // setPregunta2(response.data.data[1].question);
        // setPregunta3(response.data.data[2].question);
        // setPregunta4(response.data.data[3].question);
        // setPregunta5(response.data.data[4].question);
        // setPregunta6(response.data.data[5].question);
        // setPregunta7(response.data.data[6].question);
        // setPregunta8(response.data.data[7].question);
        // setPregunta9(response.data.data[8].question);
        // setPregunta10(response.data.data[9].question);
        // setLisQuestion(response.data.data);
      }
    } catch (error) {
      console.log("Error al obtener datos", error);
    }
  }

  useEffect(() => {
    getData();
    getQuestion();
  }, []);

  return (
    <>
      <NavbarGeneral />
      <div className="formgrid grid">
        <div className="field col-12 md:col-5">
          <div className="viewMascot card flex justify-content-center uppercase">
            <Card
              title="Detalles de Mascota"
              subTitle={nombre}
              footer={footer}
              header={header}
              style={{ width: "100%", height: "100%" }}
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
        </div>
        <div className="field col-12 md:col-7">
          <Card
            title="TEST PARA ADOPTAR MASCOTA"
            style={{ width: "98%", marginTop: "1%", height: "100%" }}
          >
            <div className="formgrid grid">
              <div className="field col-12 md:col-6 text-start">
                <label className="text-start" style={{ textAlign: "end" }}>
                  Nombre
                </label>
                <InputText
                  id="username"
                  label="Username"
                  value={nameUsers}
                  onChange={(e) => {
                    setNamesUser(e.target.value);
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

              <div className="field col-12 md:col-6">
                <label className="text-start" style={{ textAlign: "end" }}>
                  Apellidos
                </label>
                <InputText
                  id="fullname"
                  label="fullname"
                  value={fullnameUsers}
                  onChange={(e) => {
                    setFullnameUser(e.target.value);
                    setErrors({ ...errors, fullname: "" });
                  }}
                  className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border-900 border-round appearance-none outline-none focus:border-primary w-full"
                  type="text"
                />
                {errors.fullname && (
                  <span style={{ color: "red" }} className="error">
                    {errors.fullname[0]}
                  </span>
                )}
              </div>
              <div className="field col-12 md:col-6">
                <label className="text-start" style={{ textAlign: "end" }}>
                  Correo Electronico
                </label>
                <InputText
                  id="email"
                  label="email"
                  value={emailUsers}
                  onChange={(e) => {
                    setEmailUser(e.target.value);
                    setErrors({ ...errors, email: "" });
                  }}
                  className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border-900 border-round appearance-none outline-none focus:border-primary w-full"
                  type="email"
                  placeholder="example@gmail.com"
                />
                {errors.email && (
                  <span style={{ color: "red" }} className="error">
                    {errors.email[0]}
                  </span>
                )}
              </div>
              <div className="field col-12 md:col-6">
                <label className="text-start" style={{ textAlign: "end" }}>
                  Telefono
                </label>
                <InputText
                  id="phone"
                  label="phone"
                  value={phoneUsers}
                  onChange={(e) => {
                    setPhoneUser(e.target.value);
                    setErrors({ ...errors, phone: "" });
                  }}
                  className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border-900 border-round appearance-none outline-none focus:border-primary w-full"
                  type="number"
                />
                {errors.phone && (
                  <span style={{ color: "red" }} className="error">
                    {errors.phone[0]}
                  </span>
                )}
              </div>
              <div className="field col-12 md:col-12">
                <label className="text-start" style={{ textAlign: "end" }}>
                  Direccion
                </label>
                <InputText
                  id="direccion"
                  label="direccion"
                  value={directionUsers}
                  onChange={(e) => {
                    setDirectionUser(e.target.value);
                    setErrors({ ...errors, direction: "" });
                  }}
                  className="text-base text-color surface-overlay p-2 border-1 border-solid surface-border-900 border-round appearance-none outline-none focus:border-primary w-full"
                />
                {errors.direction && (
                  <span style={{ color: "red" }} className="error">
                    {errors.direction[0]}
                  </span>
                )}
              </div>
            </div>
            <br />
            <div
              className="text-center"
              style={{
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
                height: "100%",
              }}
            >
              <label style={{ fontSize: "20px", fontWeight: "bold" }}>Lista de Cuestionarios</label>
            </div>
          </Card>
        </div>
      </div>

      <form className="formgrid grid" onSubmit={handleSubmit}>
        {questions.map(({ id, question, options }, index) => (
          <div className="field col-12 md:col-12" key={id}>
            <div
              style={{
                display: "flex",
                flexDirection: "column",
                alignItems: "flex-start",
                flex: 1,
              }}
            >
              <label className="text-start" style={{ textAlign: "end", fontWeight: "bold" }}>
                {index + 1}: {question}
              </label>
              {options.map((option, idx) => (
                <div className="flex align-items-center" style={{ marginLeft: "30px" }} key={idx}>
                  <RadioButton
                    inputId={`${id}${idx}`}
                    name={`pregunta${id}`}
                    value={option.points}
                    onChange={(e) => handleResponseChange(`pregunta${id}`, e.value)}
                    checked={responses[`pregunta${id}`] === option.points}
                  />
                  <label htmlFor={`${id}${idx}`} className="ml-2">
                    {String.fromCharCode(97 + idx)}) {option.label}
                  </label>
                </div>
              ))}
            </div>
          </div>
        ))}
        <button type="submit">Enviar</button>
      </form>
    </>
  );
}

export default VerCuestionarioUsers;
