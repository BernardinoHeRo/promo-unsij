import React, { useState } from "react";
import Header2 from "../header/Header2.jsx";
import Footer from "../footer/Footer.jsx";
import Objetive from "./partials/objetive";
import Perfil from "./partials/Perfil";
import { carreras } from "../data/carreras.js";
import { useParams } from "react-router-dom";

const InfoLic = () => {
  // Get the "id" parameter from the route
  const { id } = useParams();
  // Busca la carrera correspondiente por su id
  const carrera = carreras.find((c) => c.id.toString() === id);
  // Verifica si la carrera fue encontrada
  if (!carrera) {
    return <div>Carrera no encontrada</div>;
  }

  // Accede a las propiedades específicas de la carrera
  const { nombre, jefe, objetivos, perfil, campo, plan, email } = carrera;
  //console.log(id, nombre);
  const [selectedTab, setSelectedTab] = useState("objetivos");
  const handleTabClick = (tab) => {
    setSelectedTab(tab);
  };

  return (
    <div>
      <Header2 />

      <div className="w-full flex flex-col items-center">
        {/* Información general*/}
        <div className="flex flex-col items-center mt-16">
          <span className="text-3xl font-[600]">{nombre}</span>
          <span className="text-lg font-[500]">{jefe}</span>
          <span className="text-base font-[400]">{email}</span>
        </div>
        {/* Menú con la información*/}
        <div className="w-full mt-10 flex flex-col items-center">
          {/* Menú */}
          <div className=" w-[90%] lg:w-[50%] bg-unsij_fisrt rounded-lg px-4 py-1">
            <ul className="flex items-center justify-around bg-unsij_secod rounded-lg">
              <li
                className={`text-[12px] text-center md:text-lg font-[400] px-3 py-2 rounded-lg text-unsij_white hover:bg-orange-600 ${
                  selectedTab === "objetivos" ? "bg-orange-600" : ""
                }`}
              >
                <a href="#" onClick={() => handleTabClick("objetivos")}>
                  Información general
                </a>
              </li>
              <li
                className={`text-[12px] text-center md:text-lg  font-[400] px-3 py-2 rounded-lg text-unsij_white hover:bg-orange-600 ${
                  selectedTab === "perfil" ? "bg-orange-600" : ""
                }`}
              >
                <a href="#" onClick={() => handleTabClick("perfil")}>
                  Perfil del egresado
                </a>
              </li>
              <li
                className={`text-[12px] text-center md:text-lg  font-[400] px-3 py-2 rounded-lg text-unsij_white hover:bg-orange-600 ${
                  selectedTab === "campo" ? "bg-orange-600" : ""
                }`}
              >
                <a href="#" onClick={() => handleTabClick("campo")}>
                  Campo de acción
                </a>
              </li>
              <li
                className={`text-[12px] text-center md:text-lg font-[400] px-3 py-2 rounded-lg text-unsij_white hover:bg-orange-600 ${
                  selectedTab === "plan" ? "bg-orange-600" : ""
                }`}
              >
                <a href="#" onClick={() => handleTabClick("plan")}>
                  Plan de estudios
                </a>
              </li>
            </ul>
          </div>
          {/* Contenido del menú */}
          <div className="flex flex-col items-center md:w-[90%]">
            {selectedTab === "objetivos" && (
              <div id="objetivos">
                <p className="mt-8 px-10 text-sm md:text-xl lg:text-2xl text-center">
                <h1 className="font-bold text-lg md:text-2xl mb-4">Objetivo general</h1>
                  {objetivos.general}
                </p>
                {objetivos.mision &&(
                <p className="mt-8 px-10 text-sm md:text-xl lg:text-2xl text-center">
                  <h1 className="font-bold text-lg md:text-2xl mb-4">Misión</h1>
                  {objetivos.mision}
                </p>
                )}
                {objetivos.vision && (
                <p className="mt-8 px-10 text-sm md:text-xl lg:text-2xl text-center">
                <h1 className="font-bold text-lg ms:text-2xl mb-4">Visión</h1>
                  {objetivos.vision}
                </p>
                )}
              </div>
            )}
            {selectedTab === "perfil" && (
              <div id="perfil" className="w-[95%]">
                <ul className="mt-8 px-10">
                  {Object.keys(perfil).map((key) => (
                    <li className="pt-4 text-sm md:text-xl lg:text-2xl text-justify" key={key}>
                      {perfil[key]}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {selectedTab === "campo" && (
              <div id="campo" className="w-[95%]">
                <ul className="mt-8 px-10">
                  {Object.keys(campo).map((key) => (
                    <li className="pt-4 text-sm md:text-xl lg:text-2xl text-justify" key={key}>
                      {campo[key]}
                    </li>
                  ))}
                </ul>
              </div>
            )}
            {selectedTab === "plan" && (
              <div id="plan">
                <p className="mt-8 px-10 text-xl text-justify">
                  Datos de plan educativo
                </p>
              </div>
            )}
          </div>
        </div>
      </div>
      <Footer />
    </div>
  );
};

export default InfoLic;
