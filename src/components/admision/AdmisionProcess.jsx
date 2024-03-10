import React, { useState } from "react";

const AdmisionProcess = ({ processType }) => {
    const [activeStep, setActiveStep] = useState(0);

    const handleStepClick = (step) => {
        setActiveStep(activeStep === step ? null : step);
    };

    const getStepsData = () => {
        const licenciaturaSteps = [
            {
                title: "Verificar fechas",
                description: {
                    tokenDelivery: "Entrega de fichas: Del 16 de febrero al 26 de junio del 2024.",
                    admissionTest:"Examen de admisión: 25 de mayo y 01 de julio del año 2024.",
                    registrationForThePreparatoryCourse:"Inscripción al curso propedéutico: Del 15 al 26 de julio del 2024.",
                    durationOfThePreparatoryCourse:"Duración del curso propedéutico: Del 29 de julio al 20 de septiembre del año 2024.",
                }
            },
            {
                title: "Recolección de documentos",
                description:{
                    1:"1 copia del acta de nacimiento.",
                    2:"1 copia del certificado de secundaria.",
                    3:"1 copia del certificado de bachillerato o constancia de estudios con la tira de materias de 1° al 5° semestre.",
                    4:"1 copia del CURP.",
                    5:"6 fotografías tamaño infantil b/n en papel mate.",
                    6:"Original del comprobante de pago de ficha (se obtiene en el siguiente paso).",
                }
            },
            {
                title: "Ficha escolar",
                description:{
                    1:"Pago de ficha escolar:",
                    2:"https://siox.finanzasoaxaca.gob.mx/pagos",
                }
            },
            {
                title: "Paso 4 para Licenciaturas",
                description: "Descripción para el Paso 1 de Licenciaturas",
            },
            {
                title: "Paso 5 para Licenciaturas",
                description: "Descripción para el Paso 1 de Licenciaturas",
            },
        ];

        return licenciaturaSteps; // Add this line to return the array
    };

    const stepsData = getStepsData();

    return (
        <div className="bg-unsij_white h-full pb-12 rounded-b-lg">
            <div className="w-[90%] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                <div className="flex mt-4 flex-col lg:flex-row justify-center items-center gap-8">
                    <span className="text-sm leading-7 text-gray-500 font-regular">
                        Colegiatura {" "} <strong className="font-bold text-xl md:text-3xl">GRATIS</strong>
                    </span>
                    <span className="text-sm leading-7 text-gray-500 font-regular">
                        Costo de ficha {" "} <strong className="font-bold text-xl md:text-3xl">$239 MXN</strong>
                    </span>
                </div>
                <div className="flex justify-around mt-8">
                    {stepsData.map((step, index) => (
                        <div key={`${processType}-${index}`} className="cursor-pointer">
                            <div
                                className={`flex items-center justify-center h-10 md:h-20 w-10 md:w-20 rounded-full bg-unsij_secod text-3xl text-white font-semibold ${
                                    activeStep === index ? "bg-unsij_sixth" : ""
                                }`}
                                onClick={() => handleStepClick(index)}
                            >
                                {index + 1}
                            </div>
                        </div>
                    ))}
                </div>

                {activeStep !== null && (
                    <div className="mt-4 bg-gray-100 p-5 rounded-3xl">
                        <h4 className="text-2xl text-center leading-6 font-semibold text-gray-900">
                            {stepsData[activeStep].title}
                        </h4>
                        <ul className="mt-2 text-base leading-6 text-gray-500">
                            {Object.entries(stepsData[activeStep].description).map(([key, value]) => (
                                <li key={key}>
                                    <h1 className="text-center mt-6 text-2xl">{value}</h1>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        </div>
    );
};

export default AdmisionProcess;
