import React from "react";

const Mision = () => {
    return (
        <div className="h-[200px] flex items-center  font-Garamont">
            <div className="flex flex-col justify-center">
                <h1 className="text-[10px] md:text-xl ml-2 ">Nuestra</h1>
                <strong className="font-bold text-base md:text-5xl pl-7">Misión</strong>
            </div>
            <div className="w-[70%] md:w-[70%] lg:w-[82%] ml-2 lg:ml-4 mx-auto">
                <p className="text-[15px] md:text-2xl lg:text-4xl text-center">
                    Impartir educación superior en los niveles de Licenciatura, Maestría y Doctorado formando
                    profesionales e investigadores altamente capacitados, para contribuir al desarrollo de la
                    investigación, educación superior, independencia económica, científica, tecnológica y cultural del
                    Estado y del Pais.
                </p>
            </div>
        </div>
    )
};

export default Mision;
