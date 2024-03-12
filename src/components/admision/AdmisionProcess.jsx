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
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-unsij_fisrt">Verificar fechas
                                importantes</h1>
                        ),
                        description: {
                            1: (
                                <div className="w-full bg-white rounded-3xl p-2">
                                    <ul className="flex flex-col gap-2 md:gap-4">
                                        <li>
                                            <h1 className='text-lg md:text-xl lg:text-2xl mb-2 font-bold'>Entrega de fichas</h1>
                                            <span className="text-base md:text-lg lg:text-xl">Del 16 de febrero al 26 de junio del 2024</span>
                                        </li>
                                        <li>
                                            <h1 className='text-lg md:text-xl lg:text-2xl mb-2 font-bold'>Examen de
                                                admisión</h1>
                                            <span className="text-base md:text-lg lg:text-xl">25 de mayo del 2024 y 01 de julio del 2024</span>
                                        </li>
                                        <li>
                                            <h1 className='text-lg md:text-xl lg:text-2xl mb-2 font-bold'>Inscripción al curso
                                                propedéutico</h1>
                                            <spa className="text-base md:text-lg lg:text-xl">Del 15 al 26 de julio del 2024
                                            </spa>
                                        </li>
                                        <li>
                                            <h1 className='text-lg md:text-xl lg:text-2xl mb-2 font-bold'>Duración del curso
                                                propedéutico</h1>
                                            <span className="text-base md:text-lg lg:text-xl">
                                    Del 29 de julio al 20 de septiembre del 2024
                                </span>
                                        </li>
                                    </ul>
                                </div>
                            ),
                        },
                    },
                    {
                        title: (
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-unsij_fisrt">Requisitos para entrega
                                de ficha</h1>),
                        description: {
                            0: (
                                <div className="w-full bg-white rounded-3xl p-2">
                                    <ul className="flex flex-col gap-3 md:gap-5">
                                        <li>
                                            <h1 className='text-lg md:text-xl lg:text-2xl mb-2 font-bold'>Acta de
                                                nacimiento</h1>
                                            <p className="text-base md:text-lg lg:text-xl">Original y copia</p>
                                        </li>
                                        <li>
                                            <h1 className='text-lg md:text-xl lg:text-2xl mb-2 font-bold'>Certificado de
                                                secundaria</h1>
                                            <p className="text-base md:text-lg lg:text-xl">Original y copia</p>
                                        </li>
                                        <li>
                                            <h1 className='text-lg md:text-xl lg:text-2xl mb-2 font-bold'>Certificado de
                                                bachillerato</h1>
                                            <p className="text-base md:text-lg lg:text-xl">Original y copia o
                                                constancia de estudios con la tira de materias de 1° al 5° semestre.</p>
                                        </li>
                                        <li>
                                            <h1 className='text-lg md:text-xl lg:text-2xl mb-2 font-bold'>CURP</h1>
                                            <p className="text-base md:text-lg lg:text-xl">1 copia</p>
                                        </li>
                                        <li>
                                            <h1 className='text-lg md:text-xl lg:text-2xl mb-2 font-bold'>Fotografías</h1>
                                            <p className="text-base md:text-lg lg:text-xl">6 fotografías tamaño infantil blanco
                                                y negro en papel mate.</p>
                                        </li>
                                        <li className="mx-auto bg-gray-200 p-4 inline-block rounded-lg max-w-lg shadow-gray-500 shadow-lg">
                                            <h1 className='text-lg md:text-xl lg:text-2xl mb-2 font-bold'>Comprobante
                                                del pago
                                                de ficha</h1>
                                            <p className="text-base md:text-lg lg:text-xl">Original y copia del comprobante de
                                                pago de ficha.</p>
                                            <p className="text-base md:text-lg lg:text-xl">Realiza el pago de ficha:
                                                <a className="pl-2 cursor-pointer text-blue-600 underline"
                                                   href="https://siox.finanzasoaxaca.gob.mx/pagos"
                                                   target="_blank"
                                                   rel="noopener noreferrer">
                                                    Aquí
                                                </a>
                                            </p>
                                            <p className="text-base md:text-lg lg:text-xl">
                                                Ver el manual de pago de ficha:
                                                <a
                                                    className="pl-2 cursor-pointer text-blue-600 underline"
                                                    href="/lineaDeCaptura.pdf"
                                                    target="_blank"
                                                >
                                                    Aquí
                                                </a>
                                            </p>
                                        </li>
                                        <li>
                                            <p className="text-lg md:text-xl lg:text-2xl text-black">
                                                <strong
                                                    className="text-red-800 pr-2 text-xl md:text-2xl lg:text-3xl">Nota!</strong>
                                                Los documentos deben ser escaneados si hará el trámite en línea.
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            ),
                        }
                    },
                    {
                        title: (<h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-unsij_fisrt">Tramite de ficha
                            escolar</h1>),
                        description: {
                            0: (<h1 className="text-black font-bold text-xl md:text-2xl lg:rounded-3xl">Trámite físico</h1>),
                            1: (<div>
                                <ul className=" py-2 bg-unsij_white flex flex-col gap-3 md:gap-5 mx-auto max-w-6xl shadow-gray-500 shadow-lg rounded-2xl">
                                    <li>
                                        <p className="text-lg md:text-xl lg:text-2xl font-bold mb-4">Entregar toda la
                                            documentación cualquiera de
                                            los
                                            siguientes lugares:</p>
                                    </li>
                                    <li>
                                        <h1 className='text-lg md:text-xl lg:text-2xl mb-2 font-bold'>Instalaciones de
                                            la UNSIJ</h1>
                                        <p className="text-base md:text-lg lg:text-xl">Av. Universidad S/N Ixtlán de Juárez,
                                            Oaxaca</p>
                                    </li>
                                    <li>
                                        <h1 className='text-lg md:text-xl lg:text-2xl mb-2 font-bold'>Oficinas en Oaxaca</h1>
                                        <p className="text-base md:text-lg lg:text-xl">Pino Suárez 509, Col. Centro, Tel. (951)
                                            132 69 58</p>
                                    </li>
                                    <li>
                                        <h1 className='text-lg md:text-xl lg:text-2xl mb-2 font-bold'>Librería
                                            Universitaria</h1>
                                        <p className="text-base md:text-lg lg:text-xl">Avenida 16 de septiembre s/n Planta baja
                                            de la biblioteca municipal Ixtlán de Juárez, Oaxaca</p>
                                    </li>
                                    <li>
                                        <h1 className='text-lg md:text-xl lg:text-2xl mb-2 font-bold'>SUNEO: UTM, UMAR, UNISTMO,
                                            UNPA, UNSIS, UNCA, NU, UNCOS y UNICHA</h1>
                                        <p className="text-base md:text-lg lg:text-xl">En cualquiera de las universidades</p>
                                    </li>
                                    <li>
                                        <h1 className='text-lg md:text-xl lg:text-2xl mb-2 font-bold'>Oficinas en la Ciudad de
                                            México</h1>
                                        <p className="text-base md:text-lg lg:text-xl">Sacramento 347, Col. del Valle, C.P.
                                            03100, México, D.F.</p>
                                    </li>
                                </ul>
                            </div>),
                            2: (<h1 className="text-black font-bold text-xl md:text-2xl lg:rounded-3xl">Trámite en línea</h1>),
                            3: (<div>
                                <ul className=" py-2 bg-unsij_white flex flex-col gap-3 md:gap-5 mx-auto max-w-6xl shadow-gray-500 shadow-lg rounded-2xl">
                                    <li>
                                        <p className="text-lg md:text-xl lg:text-2xl">Ingresa al sitio para registro:
                                            <a className="pl-2 cursor-pointer text-blue-600 underline"
                                               href="https://inscripciones.unsij.edu.mx/login"
                                               target="_blank"
                                               rel="noopener noreferrer">
                                                Aquí
                                            </a>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-lg md:text-xl lg:text-2xl">Ver el manual de tramite de ficha:
                                            <a
                                                className="pl-2 cursor-pointer text-blue-600 underline"
                                                href="/fichaEscolar.pdf"
                                                target="_blank"
                                            >
                                                Aquí
                                            </a>
                                        </p>
                                    </li>
                                    <li>
                                        <p className="text-lg md:text-xl lg:text-2xl text-black">
                                            <strong className="text-red-800 pr-2 text-xl md:text-2xl lg:text-3xl">Nota!</strong>Los
                                            documentos se deben adjuntar en el sitio de registro.
                                        </p>
                                    </li>
                                </ul>


                            </div>),
                        }
                    },
                    {
                        title: (
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-unsij_fisrt">Examen de admisión</h1>),
                        description: {
                            1: (<div className="w-full bg-white rounded-3xl p-8">
                                    <ul className="flex flex-col gap-2 md:gap-4">
                                        <li>
                                            <p className="text-lg md:text-xl lg:text-2xl">
                                                Se presentará en el lugar y fecha indicado el día del tramite de ficha.
                                            </p>
                                        </li>
                                        <li className="mx-auto bg-gray-200 p-4 inline-block rounded-lg max-w-3xl shadow-gray-500 shadow-lg">
                                            <p className="text-lg md:text-xl lg:text-2xl">
                                                <strong className="text-center text-red-800 mr-2">
                                                    Nota!
                                                </strong>
                                                Las fechas para presentar el examen de admisión son:
                                                <ul className="mt-2 flex flex-col gap-4 text-black">
                                                    <li> 25 de mayo del 2024.</li>
                                                    <li> 01 de julio del año 2024.</li>
                                                </ul>
                                            </p>
                                        </li>
                                    </ul>
                                </div>
                            ),
                        },
                    },
                    {
                        title: (
                            <h1 className="text-xl md:text-2xl lg:text-3xl font-bold text-unsij_fisrt">Curso propedéutico</h1>),
                        description: {
                            0: (<h1 className="text-black font-bold text-xl md:text-2xl lg:rounded-3xl">Inscripción</h1>),
                            1: (<div>
                                <ul className=" py-2 bg-unsij_white flex flex-col gap-3 md:gap-5 mx-auto max-w-6xl shadow-gray-500 shadow-lg rounded-2xl">
                                    <li>
                                        <p className="text-lg md:text-xl lg:text-2xl mb-2">Realizar el trámite correspondiente
                                            en
                                            las instalaciones de la Universidad de la Sierra Juárez</p>
                                    </li>
                                    <li>
                                        <p className="text-lg md:text-xl lg:text-2xl text-black">Del 15 de julio al 26 de julio
                                            del 2024.</p>
                                    </li>
                                </ul>
                            </div>),
                            2: (<h1 className="text-black font-bold text-xl md:text-2xl lg:rounded-3xl">Curso</h1>),
                            3: (<div>
                                <ul className=" py-2 bg-unsij_white flex flex-col gap-3 md:gap-5 mx-auto max-w-6xl shadow-gray-500 shadow-lg rounded-2xl">
                                    <li>
                                        <p className="text-lg md:text-xl lg:text-2xl mb-2">El curso propedéutico se realiza de
                                            manera presencial</p>
                                    </li>
                                    <li>
                                        <p className="text-lg md:text-xl lg:text-2xl text-black">Del 29 de julio del 2024 al 20
                                            de septiembre del 2024.</p>
                                    </li>
                                    <li>
                                        <p className="text-lg md:text-xl lg:text-2xl">
                                            <a
                                                className="cursor-pointer text-blue-600 underline"
                                                href="https://www.google.com/maps?q=17.316075202079233,-96.48332542866517"
                                                target="_blank"
                                                rel="noopener noreferrer"
                                            >
                                                Ubicación de la universidad
                                            </a>
                                        </p>
                                    </li>
                                </ul>
                            </div>),
                        },
                    },
                ];

                return licenciaturaSteps;
            }
        ;

        const stepsData = getStepsData();

        return (
            <div className="w-full sm:w-[98%] mx-auto px-4 sm:px-6 lg:px-8 h-full flex flex-col justify-center">
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
                    <div className="mt-2 bg-gray-300 p-5 rounded-3xl">
                        <h4 className="text-center">
                            {stepsData[activeStep].title}
                        </h4>
                        <ul className="leading-6 text-gray-500">
                            {Object.entries(stepsData[activeStep].description).map(([key, value]) => (
                                <li key={key}>
                                    <h1 className="text-center mt-2">{value}</h1>
                                </li>
                            ))}
                        </ul>
                    </div>
                )}
            </div>
        );
    }
;

export default AdmisionProcess;
