import React, {useState} from "react";

const AdmisionProcess = ({processType}) => {
    const [activeStep, setActiveStep] = useState(0);

    const handleStepClick = (step) => {
        setActiveStep(activeStep === step ? null : step);
    };

    const getStepsData = () => {
        const licenciaturaSteps = [
            {
                title: (<h1 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold">Fechas importantes</h1>),
                description: {
                    tokenDelivery: (<p className="text-lg md:text-2xl lg:text-3xl flex flex-col"><strong
                        className='text-lg md:text-2xl lg:text-3xl'>Entrega de fichas:</strong> Del 16 de febrero al 26
                        de junio del 2024.</p>),
                    admissionTest: (<p className="text-lg md:text-2xl lg:text-3xl flex flex-col"><strong
                        className='text-lg md:text-2xl lg:text-3xl'>Examen de admisión:</strong> 25 de mayo y 01 de
                        julio del año 2024.</p>),
                    registrationForThePreparatoryCourse: (
                        <p className="text-lg md:text-2xl lg:text-3xl flex flex-col"><strong
                            className='text-lg md:text-2xl lg:text-3xl'>Inscripción al curso propedéutico:</strong> Del
                            15
                            al 26 de julio del 2024.</p>),
                    durationOfThePreparatoryCourse: (
                        <p className="text-lg md:text-2xl lg:text-3xl flex flex-col"><strong
                            className='text-lg md:text-2xl lg:text-3xl'>Duración del curso propedéutico:</strong> Del 29
                            de
                            julio al 20 de septiembre del año 2024.</p>),
                }
            },
            {
                title: (<h1 className="mt4 text-2xl md:text-3xl lg:text-4xl font-bold">Recolección de documentos</h1>),
                description: {
                    1: (<p className="text-lg md:text-2xl lg:text-3xl">1 copia del acta de nacimiento.</p>),
                    2: (<p className="text-lg md:text-2xl lg:text-3xl">1 copia del certificado de secundaria.</p>),
                    3: (<p className="text-lg md:text-2xl lg:text-3xl">1 copia del certificado de bachillerato o
                        constancia de estudios con la tira de materias de 1° al 5° semestre.</p>),
                    4: (<p className="text-lg md:text-2xl lg:text-3xl">1 copia de la CURP.</p>),
                    5: (<p className="text-lg md:text-2xl lg:text-3xl">6 fotografías tamaño infantil b/n en papel
                        mate.</p>),
                    6: (<p className="text-lg md:text-2xl lg:text-3xl flex flex-col text-center">Original del
                        comprobante de pago de ficha
                        <strong>
                            (Realiza el pago
                            <a className="pl-2 cursor-pointer text-blue-600 text-2xl md:text-3xl"
                               href="https://siox.finanzasoaxaca.gob.mx/pagos"
                               target="_blank"
                               rel="noopener noreferrer"
                            >
                                en este enlace
                            </a>)
                        </strong>.
                    </p>),
                }
            },
            {
                title: "Ficha escolar",
                description: {
                    1: "Pago de ficha escolar:",
                    2: (
                        <a
                            className="inline-block text-blue-500 sm:text-sm md:text-xl lg:text-lg xl:text-xl"
                            href="https://siox.finanzasoaxaca.gob.mx/pagos"
                            target="_blank"
                            rel="noopener noreferrer"
                        >
                            Finanzas Oaxaca
                        </a>
                    ),
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
            <div className="w-full sm:w-[90%] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                <div className="flex mt-4 flex-col lg:flex-row justify-center items-center gap-8">
                    <span className="text-sm leading-7 text-gray-500 font-regular">
                        Colegiatura {" "} <strong className="font-bold text-xl md:text-3xl">GRATIS</strong>
                    </span>
                    <span className="text-sm leading-7 text-gray-500 font-regular">
                        Costo de ficha {" "} <strong className="font-bold text-xl md:text-3xl">$239 MXN</strong>
                    </span>
                </div>
                <div className="flex justify-around mt-8" style={{fontSize: "0.8rem"}}>
                    {stepsData.map((step, index) => (
                        <div key={`${processType}-${index}`} className="cursor-pointer">
                            <div
                                className={`flex items-center justify-center h-10 w-10 md:h-16 md:w-16 lg:w-24 lg:h-24 rounded-full bg-unsij_secod text-3xl text-white font-semibold ${
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
