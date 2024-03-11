import React, {useState} from "react";

const AdmisionProcess = ({processType}) => {
    const [activeStep, setActiveStep] = useState(0);

    const handleStepClick = (step) => {
        setActiveStep(activeStep === step ? null : step);
    };

    const getStepsData = () => {
        const licenciaturaSteps = [
            {
                title: (
                    <h1 className="mt-4 text-2xl md:text-3xl lg:text-4xl font-bold">Verificar fechas importantes</h1>),
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
                title: (<h1 className="mt4 text-2xl md:text-3xl lg:text-4xl font-bold">Reunir documentación</h1>),
                description: {
                    1: (<p className="text-lg md:text-2xl lg:text-3xl">1 copia del acta de nacimiento.</p>),
                    2: (<p className="text-lg md:text-2xl lg:text-3xl">1 copia del certificado de secundaria.</p>),
                    3: (<p className="text-lg md:text-2xl lg:text-3xl">1 copia del certificado de bachillerato o
                        constancia de estudios con la tira de materias de 1° al 5° semestre.</p>),
                    4: (<p className="text-lg md:text-2xl lg:text-3xl">1 copia de la CURP.</p>),
                    5: (<p className="text-lg md:text-2xl lg:text-3xl">6 fotografías tamaño infantil b/n en papel
                        mate.</p>),
                    6: (<p className="text-lg md:text-2xl lg:text-3xl flex flex-col text-center">Original y copia del
                        comprobante de pago de ficha.</p>),
                    7: (<p className="text-lg md:text-2xl lg:text-3xl">Realiza el pago de ficha:
                        <a className="pl-2 cursor-pointer text-blue-600 text-lg md:text-2xl lg:text-3xl underline"
                           href="https://siox.finanzasoaxaca.gob.mx/pagos"
                           target="_blank"
                           rel="noopener noreferrer">
                            Aquí
                        </a>
                    </p>),
                    8: (<p className="text-lg md:text-2xl lg:text-3xl">
                            Ver el manual de pago de ficha:
                            <a
                                className="pl-2 cursor-pointer text-blue-600 text-lg md:text-2xl lg:text-3xl underline"
                                href="/lineaDeCaptura.pdf"
                                target="_blank"
                            >
                                Aquí
                            </a>
                        </p>
                    ),
                    9: (<p className="text-lg md:text-2xl lg:text-3xl">
                        <strong className="text-red-800 pr-2">*</strong>
                        Los documentos deben ser escaneados si hará el trámite en línea
                    </p>)
                }
            },
            {
                title: (<h1 className="mt4 text-2xl md:text-3xl lg:text-4xl font-bold">Tramite de ficha escolar</h1>),
                description: {
                    0: (<h1 className="text-xl font-bold md:text-3xl text-unsij_fisrt">Trámite físico</h1>),
                    1: (<div className="bg-unsij_third rounded-3xl p-4 text-black">
                        <h1 className="text-xl font-bold md:text-3xl mb-4">Entregar toda la documentación cualquiera de
                            los
                            siguientes lugares:</h1>
                        <ul className="mt-2 flex flex-col gap-4 text-black">
                            <li className="text-lg md:text-2xl lg:text-3xl">En las instalaciones de la UNSIJ, Av.
                                Universidad S/N Ixtlán de Juárez, Oaxaca
                            </li>
                            <li className="text-lg md:text-2xl lg:text-3xl">Oficinas en Oaxaca, Pino Suárez 509, Col.
                                Centro, Tel. (951) 132 69 58
                            </li>
                            <li className="text-lg md:text-2xl lg:text-3xl">Librería universitaria Av. 16 de septiembre
                                s/n Planta baja de la biblioteca municipal Ixtlán de Juárez, Oaxaca
                            </li>
                            <li className="text-lg md:text-2xl lg:text-3xl">En cualquiera de las universidades del
                                SUNEO: UTM, UMAR, UNISTMO, UNPA, UNSIS, UNCA, NU, UNCOS y UNICHA
                            </li>
                            <li className="text-lg md:text-2xl lg:text-3xl">Oficinas en la Cd. de México, ubicadas en
                                Sacramento 347, Col. del Valle, C.P. 03100, México, D.F.
                            </li>
                        </ul>
                    </div>),
                    2: (<h1 className="text-xl font-bold md:text-3xl text-unsij_fisrt">Trámite en línea</h1>),
                    3: (<div className="bg-unsij_third rounded-3xl p-4 text-black">
                        <ul className="mt-2 flex flex-col gap-4 text-black">
                            <li>
                                <p className="text-lg md:text-2xl lg:text-3xl">Ingresa al sitio para registro:
                                    <a className="pl-2 cursor-pointer text-blue-600 text-lg md:text-2xl lg:text-3xl underline"
                                       href="https://inscripciones.unsij.edu.mx/login"
                                       target="_blank"
                                       rel="noopener noreferrer">
                                        Aquí
                                    </a>
                                </p>
                            </li>
                            <li>
                                <p className="text-lg md:text-2xl lg:text-3xl">Ver el manual de tramite de ficha:
                                    <a
                                        className="pl-2 cursor-pointer text-blue-600 text-lg md:text-2xl lg:text-3xl underline"
                                        href="/fichaEscolar.pdf"
                                        target="_blank"
                                    >
                                        Aquí
                                    </a>
                                </p>
                            </li>
                            <li>
                                <p>
                                    <strong className="text-lg md:text-2xl lg:text-3xl">Nota:</strong>
                                    <span className="text-lg md:text-2xl lg:text-3xl pl-2">
                            Ten a la mano tus documentos, se deben adjuntar en este paso, además, se necesitan los siguientes datos:
                        <ul className="mt-2">
                            <li>
                                <strong className="text-center text-red-800">*</strong> CURP
                            </li>
                            <li><strong className="text-center text-red-800">*</strong> Dirección de correo electrónico personal</li>
                            <li><strong
                                className="text-center text-red-800">*</strong> Una contraseña (no la olvides)</li>
                        </ul>
                        </span>
                                </p>
                            </li>
                        </ul>


                    </div>),
                }
            },
            {
                title: (<h1 className="mt4 text-2xl md:text-3xl lg:text-4xl font-bold">Examen de admisión</h1>),
                description: {
                    1: (<div>
                        <p className="text-lg md:text-2xl lg:text-3xl">
                            El examen de admisión se presentará en el lugar y fecha indicado el día del tramite de
                            ficha.
                        </p>
                        <p className="text-lg md:text-2xl lg:text-3xl">
                            <strong className="text-center text-red-800 mr-2">
                                *
                            </strong>
                            Las fechas para presentar el examen de admisión son:
                            <ul className="mt-2 flex flex-col gap-4 text-black">
                                <li> 25 de mayo del 2024.</li>
                                <li> 01 de julio del año 2024.</li>
                            </ul>
                        </p>
                    </div>),
                },
            },
            {
                title: (<h1 className="mt4 text-2xl md:text-3xl lg:text-4xl font-bold">Curso propedéutico</h1>),
                description: {
                    0: (<h1 className="text-xl font-bold md:text-3xl text-unsij_fisrt">Inscripción</h1>),
                    1: (<div className="bg-unsij_third rounded-3xl p-4">
                        <p className="text-lg md:text-2xl lg:text-3xl text-black">Realizar el trámite correspondiente en
                            las instalaciones de la Universidad de la Sierra Juárez</p>
                        <p className="mt-2 text-lg md:text-2xl lg:text-3xl text-black">Del 15 de julio al 26 de julio
                            del 2024.</p>
                    </div>),
                    2: (<h1 className="text-xl font-bold md:text-3xl text-unsij_fisrt">Curso</h1>),
                    3: (<div className="bg-unsij_third rounded-3xl p-4">
                        <p className="text-lg md:text-2xl lg:text-3xl text-black">El curso propedéutico se realiza de
                            manera presencial</p>
                        <p className=" mt-2 text-lg md:text-2xl lg:text-3xl text-black">Del 29 de julio del 2024 al 20
                            de septiembre del 2024.</p>
                    </div>),
                    4: (<p className="text-lg md:text-2xl lg:text-3xl">
                            <a
                                className="cursor-pointer text-blue-600 text-lg md:text-2xl lg:text-3xl underline"
                                href="https://www.google.com/maps?q=17.316075202079233,-96.48332542866517"
                                target="_blank"
                                rel="noopener noreferrer"
                            >
                                Ubicación de la universidad
                            </a>
                        </p>
                    ),
                },
            },
        ];

        return licenciaturaSteps; // Add this line to return the array
    };

    const stepsData = getStepsData();

    return (
        <div className="bg-unsij_white h-full pb-12 rounded-b-lg">
            <div className="w-full sm:w-[90%] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
                <div className="flex mt-4 flex-col lg:flex-row justify-center items-center gap-2 md:gap-4 lg:gap-8">
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
