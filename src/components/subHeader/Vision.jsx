// Vision.jsx
import React from "react";

const Vision = () => {
    return (
        <div className="h-[200px] flex items-center font-Garamont">
            <div className="flex flex-col justify-center">
                <h1 className="text-[10px] md:text-xl ml-2 ">Nuestra</h1>
                <strong className="font-bold text-base md:text-5xl pl-7">Visión</strong>
            </div>
            <div className="w-[70%] md:w-[70%] lg:w-[82%] ml-2 lg:ml-4 mx-auto">
                <p className="text-[13px] md:text-xl lg:text-3xl text-center">
                    Consolidarse como una Universidad de calidad en educación superior, comprometida con la excelencia
                    académica, líder en el desarrollo científico, tecnológico y cultural, con reconocimiento nacional e internacional.
                </p>
            </div>
        </div>
    );
};

export default Vision;
