import React, { useEffect, useState } from "react";
import { Galleria } from "primereact/galleria";
import { ServicioImagen } from "./ServicioImagen";
import { Button } from "primereact/button";
import { DataView, DataViewLayoutOptions } from "primereact/dataview";
import { Tag } from "primereact/tag";
import { Card } from "primereact/card";
import { Link } from "react-router-dom";
import { Checkbox } from "primereact/checkbox";
import { classNames } from "primereact/utils";
import NavbarGeneral from "./NavbarGeneral";

import { listEnableApiMascota } from "config/api";

import "./general.css";
import axios from "axios";

function VistaGeneral() {
  const [images, setImages] = useState(null);
  const [listaMascotas, setListaMascotas] = useState([]);

  const [petNames, setPetNames] = useState([]);
  const [petRace, setPetRace] = useState([]);
  const [petAge, setPetAges] = useState([]);
  const [petTamanio, setPetTamanio] = useState([]);
  const [petSexo, setPetSexo] = useState([]);
  const [petPeso, setPetPeso] = useState([]);


  const responsiveOptions = [
    {
      numVisible: 4,
    },
    {
      numVisible: 3,
    },
    {
      breakpoint: "575px",
      numVisible: 1,
    },
  ];

  useEffect(() => {
    ServicioImagen.getImages().then((data) => setImages(data));
  }, []);

  const itemTemplate = (item) => {
    return (
      <img src={item.itemImageSrc} alt={item.alt} style={{ maxWidth: "100%", maxHeight: "100%" }} />
    );
  };

  const thumbnailTemplate = (item) => {
    return (
      <img
        src={item.thumbnailImageSrc}
        alt={item.alt}
        style={{ maxWidth: "100%", maxHeight: "100%" }}
      />
    );
  };

  const caption = (item) => {
    return (
      <React.Fragment>
        <div className="text-xl mb-2 font-bold text-center">{item.title}</div>
        <p className="text-white text-center">{item.alt}</p>
      </React.Fragment>
    );
  };

  /// Traer lista de Mascotas

  async function listMascotas() {
    console.log(listEnableApiMascota);
    try {
      const response = await axios.get(listEnableApiMascota);
      if (response.status === 200) {
        console.log(response.data.data);
        setListaMascotas(response.data.data);
        const names = [...new Set(response.data.data.map((item) => item.pet_type.name))];
        setPetNames(names);

        const namesRace = [...new Set(response.data.data.map((item) => item.type_race.name))];
        setPetRace(namesRace);

        const namesAge = [...new Set(response.data.data.map((item) => item.age))];
        setPetAges(namesAge);
        console.log(petAge);
        const namesTamanio = [...new Set(response.data.data.map((item) => item.tamanio))];
        setPetTamanio(namesTamanio);
        const namesPeso = [...new Set(response.data.data.map((item) => item.peso))];
        setPetPeso(namesPeso);
        const namesSexo = [...new Set(response.data.data.map((item) => item.sex))];
        setPetSexo(namesSexo);
      }
    } catch (error) {
      console.error("Error:", error);
    }
  }

  //
  const [layout, setLayout] = useState("grid");

  // useEffect(() => {
  //   listaMascotaservice.getlistaMascotas().then((data) => setlistaMascotas(data.slice(0, 12)));
  // }, []);


  const listItem = (product, index) => {
    return (
      <div className="col-12" key={product.id}>
        <div
          className={classNames("flex flex-column xl:flex-row xl:align-items-start p-4 gap-4", {
            "border-top-1 surface-border": index !== 0,
          })}
        >
          <img
            className="block xl:block mx-auto border-round"
            src={product.imagen_url}
            style={{ width: "260px", height: "250px" }}
            //alt={}
          />
          <div className="flex flex-column sm:flex-row justify-content-between align-items-center xl:align-items-start flex-1 gap-4">
            <div className="flex flex-column align-items-center sm:align-items-start gap-3">
              <div className="text-2xl font-bold text-900">{product.name}</div>
              <div className="text-2xl ">{product.description}</div>

              {/* <Rating value={product.rating} readOnly cancel={false}></Rating> */}
              <div className="flex align-items-center gap-3">
                <span className="flex align-items-center gap-2">
                  {/* <span className="font-semibold">{product.category}</span> */}
                </span>
                {/* <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag> */}
              </div>
            </div>
            <div className="flex sm:flex-column align-items-center sm:align-items-end gap-3 sm:gap-2">
              <Button
                icon=""
                className=""
                label="Mas Detalles"
                //disabled={product.inventoryStatus === "OUTOFSTOCK"}
              ></Button>
            </div>
          </div>
        </div>
      </div>
    );
  };

  const gridItem = (product) => {
    return (
      <div className="col-12 sm:col-6 lg:col-12 xl:col-4 p-2" key={product.id}>
        <div className="p-4 border-1 surface-border surface-card border-round">
          <div className="flex flex-wrap align-items-center justify-content-between gap-2">
            <div className="flex align-items-center gap-2">
              {/* <span className="font-semibold">{product.category}</span> */}
            </div>
            {/* <Tag value={product.inventoryStatus} severity={getSeverity(product)}></Tag> */}
          </div>
          <div className="flex flex-column align-items-center gap-3 py-5">
            <img
              className="w-9 shadow-2 border-round"
              src={product.imagen_url}
              alt={product.name}
              style={{ width: "200px", height: "250px" }}
            />
            <div className="text-2xl font-bold">{product.name}</div>
            <div className="text-2xl ">{product.description}</div>

            {/* <Rating value={product.rating} readOnly cancel={false}></Rating> */}
          </div>
          <div className="flex align-items-center justify-content-between">
            <span className="text-2xl font-semibold"></span>
            <Link to={`/vista-general/mascota/${product.id}`}>
              <Button
                icon=""
                className=""
                label="Mas Detalles"
                //disabled={product.inventoryStatus === "OUTOFSTOCK"}
              ></Button>
            </Link>
          </div>
        </div>
      </div>
    );
  };

  const itemTemplate1 = (product, layout, index) => {
    if (!product) {
      return;
    }

    if (layout === "list") return listItem(product, index);
    else if (layout === "grid") return gridItem(product);
  };

  // const listTemplate = (listaMascotas, layout) => {
  //   return (
  //     <div className="grid grid-nogutter">
  //       {listaMascotas.map((product, index) => itemTemplate1(product, layout, index))}
  //     </div>
  //   );
  // };

  // const header = () => {
  //   return (
  //     <div className="flex justify-content-end">
  //       <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
  //     </div>
  //   );
  // };

  const [selectedTipoMascota, setSelectedTipoMascota] = useState([]);
  const [selectedTipoRaza, setSelectedTipoRaza] = useState([]);
  const [selectedEdad, setSelectedEdad] = useState([]);

  const [selectedSexo, setSelectedSexo] = useState([]);
  const [selectedPeso, setSelectedPeso] = useState([]);
  const [selectedTamanio, setSelectedTamanio] = useState([]);

  useEffect(() => {
    listMascotas();
  }, [
    selectedTipoMascota,
    selectedTipoRaza,
    selectedEdad,
    selectedSexo,
    selectedPeso,
    selectedTamanio,
  ]);

  const handleFilterChange = (setSelectedState) => (e) => {
    const { value } = e.target;
    setSelectedState((prevSelected) =>
      prevSelected.includes(value)
        ? prevSelected.filter((item) => item !== value)
        : [...prevSelected, value]
    );
  };

  const listTemplate = (listaMascotas, layout) => {
    console.log(listMascotas);
    console.log(selectedTipoMascota, selectedTipoRaza, selectedEdad, selectedSexo);
    const filteredList = listaMascotas.filter(
      (mascota) =>
        (selectedTipoMascota.length === 0 || selectedTipoMascota.includes(mascota.pet_type.name)) &&
        (selectedTipoRaza.length === 0 || selectedTipoRaza.includes(mascota.type_race.name)) &&
        (selectedEdad.length === 0 || selectedEdad.includes(mascota.age)) &&
        (selectedSexo.length === 0 || selectedSexo.includes(mascota.sex)) &&
        (selectedPeso.length === 0 || selectedPeso.includes(mascota.peso)) &&
        (selectedTamanio.length === 0 || selectedTamanio.includes(mascota.tamanio))
    );

    return (
      <div className="grid grid-nogutter">
        {filteredList.map((product, index) => itemTemplate1(product, layout, index))}
      </div>
    );
  };

  const header = () => {
    return (
      <div className="flex justify-content-end">
        <DataViewLayoutOptions layout={layout} onChange={(e) => setLayout(e.value)} />
      </div>
    );
  };


  return (
    <div className="fondeGeneral">
      {" "}
      <NavbarGeneral />
      <div className="galleria-container">
        {" "}
        <Galleria
          value={images}
          responsiveOptions={responsiveOptions}
          showItemNavigators
          showItemNavigatorsOnHover
          showIndicators
          numVisible={5}
          circular
          caption={caption}
          showThumbnails={false}
          item={itemTemplate}
          thumbnail={thumbnailTemplate}
          autoPlay
          transitionInterval={2000}
        />
      </div>
      <div className="card">
        <div className="formgrid grid">
          <div className="field col-12 md:col-2">
            <Card
              title="Lista de Filtros"
              style={{ width: "100%", height: "100%" }}
            >
              <div className="filters">
                <label style={{ fontWeight: "bold" }}> Tipo de Mascota: </label>
                {petNames.map((name, index) => (
                  <div className="filter" key={index}>
                    <Checkbox
                      inputId={`filter-${index}`}
                      value={name}
                      onChange={handleFilterChange(setSelectedTipoMascota)}
                      checked={selectedTipoMascota.includes(name)}
                    />
                    <label htmlFor={`filter-${index}`} className="p-3">
                      {name}
                    </label>
                  </div>
                ))}

                <br />

                <label style={{ fontWeight: "bold" }}> Tipo de Raza: </label>
                {petRace.map((name, index) => (
                  <div className="filter" key={index}>
                    <Checkbox
                      inputId={`filter-${index}`}
                      value={name}
                      onChange={handleFilterChange(setSelectedTipoRaza)}
                      checked={selectedTipoRaza.includes(name)}
                    />
                    <label htmlFor={`filter-${index}`} className="p-3">
                      {name}
                    </label>
                  </div>
                ))}
                <br />
                <label style={{ fontWeight: "bold" }}> Edad: </label>
                {petAge.map((name, index) => (
                  <div className="filter" key={index}>
                    <Checkbox
                      inputId={`filter-${index}`}
                      value={name}
                      onChange={handleFilterChange(setSelectedEdad)}
                      checked={selectedEdad.includes(name)}
                    />
                    <label htmlFor={`filter-${index}`} className="p-3">
                      {name} Años
                    </label>{" "}
                  </div>
                ))}
                <br />
                <label style={{ fontWeight: "bold" }}> Sexo: </label>
                {petSexo.map((name, index) => (
                  <div className="filter" key={index}>
                    <Checkbox
                      inputId={`filter-${index}`}
                      value={name}
                      onChange={handleFilterChange(setSelectedSexo)}
                      checked={selectedSexo.includes(name)}
                    />
                    <label htmlFor={`filter-${index}`} className="p-3">
                      {name}
                    </label>{" "}
                  </div>
                ))}
                <br />
                <label style={{ fontWeight: "bold" }}> Peso: </label>
                {petAge.map((name, index) => (
                  <div className="filter" key={index}>
                    <Checkbox
                      inputId={`filter-${index}`}
                      value={name}
                      onChange={handleFilterChange(setSelectedPeso)}
                      checked={selectedPeso.includes(name)}
                    />
                    <label htmlFor={`filter-${index}`} className="p-3">
                      {name} KG
                    </label>{" "}
                  </div>
                ))}
                <br />
                <label style={{ fontWeight: "bold" }}> Edad: </label>
                {petTamanio.map((name, index) => (
                  <div className="filter" key={index}>
                    <Checkbox
                      inputId={`filter-${index}`}
                      value={name}
                      onChange={handleFilterChange(setSelectedTamanio)}
                      checked={selectedTamanio.includes(name)}
                    />
                    <label htmlFor={`filter-${index}`} className="p-3">
                      {name}
                    </label>{" "}
                  </div>
                ))}
                {/* Agrega más checkbox para los otros filtros */}
                {/* Tipo de raza */}
                {/* Edad */}
                {/* Sexo */}
                {/* Color */}
              </div>{" "}
            </Card>
          </div>
          <div className="field col-12 md:col-10">
            <DataView
              value={listaMascotas}
              listTemplate={listTemplate}
              layout={layout}
              header={header()}
              paginator
              rows={6}
              style={{ width: "100%" }}
            />{" "}
          </div>
        </div>
      </div>
    </div>
  );
}

export default VistaGeneral;
