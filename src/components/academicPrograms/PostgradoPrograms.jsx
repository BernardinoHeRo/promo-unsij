import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { CiCircleMore } from "react-icons/ci";
import { FaFacebook } from "react-icons/fa";
import { GrCaretNext, GrCaretPrevious } from "react-icons/gr";
import forestalesImage from "../../assets/images/forestalImage.jpg";
import ambientalImage from "../../assets/images/ambientalImage.jpg";

const PostgradoPrograms = () => {
  const programas = [
    {
      id: 1,
      nombre: "Maestría en Ciencias en Conservación de los Recursos Forestales",
      informacion:
        "Formación integral respaldada por CONACYT. Desarrolla habilidades multidisciplinarias para liderar la gestión sostenible, equitativa y rentable de recursos forestales, contribuyendo al desarrollo local y global.",
      imagen: forestalesImage,
      infoColor: "#18592F",
      facebook: "https://www.facebook.com/turismoUNSIJ/",
    },
    {
      id: 2,
      nombre: "Maestría en Ciencias en Gestión Ambiental",
      informacion:
        "Un programa interdisciplinario respaldado por CONACYT. Desarrolla habilidades para identificar, analizar y proponer soluciones innovadoras para la gestión integral y sostenible del medio ambiente a nivel local, estatal y nacional.",
      imagen: ambientalImage,
      infoColor: "#124022",
      facebook: "https://www.facebook.com/turismoUNSIJ/",
    },
  ];

  const [currentProgramIndex, setCurrentProgramIndex] = useState(0);
  const [visiblePrograms, setVisiblePrograms] = useState(1);

  useEffect(() => {
    const handleResize = () => {
      const windowWidth = window.innerWidth;
      setVisiblePrograms(windowWidth >= 600 ? 2 : 1); // Punto de ruptura ajustado
    };
  
    handleResize();
    window.addEventListener("resize", handleResize);
  
    return () => window.removeEventListener("resize", handleResize);
  }, []);
  
  // Forzar renderizado en montaje inicial
  useEffect(() => {
    setVisiblePrograms(visiblePrograms);
  }, [visiblePrograms]);
  return (
    <div className="mt-20 mb-3 w-[90%] flex flex-row justify-around relative">
      {/* Mapear y mostrar los programas de posgrado */}
      {programas.map((programa, index) => (
        <div
          key={programa.id}
          className={`mt-10 px-6 pt-16 pb-20 shadow-2xl shadow-black/[0.1] rounded-3xl flex flex-col justify-between
                    min-w-[200px] max-w-[300px] md:max-w-[330px] 
                    min-h-[450px] max-h-[450px] md:max-h-[500px] 
                    transition-all duration-500 ease-in-out transform ${
                      index === currentProgramIndex
                        ? "translate-x-0"
                        : `translate-x-${(index - currentProgramIndex) * visiblePrograms * 50}%`
                    }`}
          style={{ backgroundColor: programa.infoColor }}
        >
          {/* Imagen del programa de posgrado */}
          <img
            src={programa.imagen}
            className="shadow-lg shadow-white/[0.2] rounded-3xl min-h-60 max-h-60 min-w-75 max-w-75 mx-1 -mt-40 transition-transform duration-300 ease-in-out transform"
            style={{ userSelect: "none" }}
            alt="avatar"
          />
          {/* Título del programa de posgrado */}
          <h1
            className="mt-2 text-xl font-bold text-slate-800 dark:text-white text-center"
            style={{ userSelect: "none" }}
          >
            {programa.nombre}
          </h1>
          <hr className="mt-2 w-full mx-auto" />
          <p
            className="mt-2 text-unsij_white text-justify text-[13px] md:text-[16px]"
            style={{ userSelect: "none" }}
          >
            {programa.informacion}
          </p>
          <hr className="mt-5 w-[100%] mx-auto" />
          {/* Enlace a Más Información */}
          <div className="mt-2 flex justify-around">
            {programa.facebook && (
              <a
                href={programa.facebook}
                target="_blank"
                rel="noopener noreferrer"
                className="bg-sky-600 font-bold text-white px-4 py-1 rounded-lg flex items-center space-x-2 transform-gpu transition-all
                               duration-200 active:scale-90 cursor-pointer hover:bg-sky-700"
              >
                <FaFacebook />
                <span style={{ userSelect: "none" }}>Facebook</span>
              </a>
            )}
            <Link
              to={`/more-info-l/${programa.id}`}
              className="bg-orange-600 font-bold text-white px-4 py-2 rounded-lg flex items-center space-x-2 transform-gpu transition-all duration-200
                              hover:bg-orange-700 active:scale-90"
              style={{ userSelect: "none" }}
            >
              <CiCircleMore />
              <span>Ver más</span>
            </Link>
          </div>
        </div>
      ))}
    </div>
  );
};

export default PostgradoPrograms;
