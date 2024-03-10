import React, {useCallback, useEffect, useState} from "react";
import {CiCircleMore} from "react-icons/ci";
import {FaFacebook} from "react-icons/fa";
import {Link} from "react-router-dom";
import forestalImage from '../../assets/images/forestalImage.jpg';
import biologiaImage from '../../assets/images/biologiaImage.jpg';
import informaticaImage from '../../assets/images/informaticaImage.jpeg';
import ambientalImage from '../../assets/images/ambientalImage.jpg';
import turisticaImage from '../../assets/images/turisticaImage.jpg';
import {GrCaretNext, GrCaretPrevious} from "react-icons/gr";

const LicenciaturaPrograms = () => {
    // Estado para el índice de la licenciatura actual
    const [currentProgramIndex, setCurrentProgramIndex] = useState(0);

    // Estado para controlar el recorrido automático
    const [autoScroll, setAutoScroll] = useState(true);

    // Estado para determinar la cantidad de tarjetas visibles en función del tamaño de la pantalla
    const [visiblePrograms, setVisiblePrograms] = useState(1);
    // Datos relacionados a las licenciaturas
    const programsData = [
        {
            id: 1,
            "infoColor": "#18592F",
            nombre: 'Ingeniería Forestal',
            informacion:'Formación para liderar la gestión sostenible de bosques. Oportunidades emocionantes en entidades gubernamentales, ONGs y emprendimiento. Únete para explorar, conservar y liderar el cambio hacia un futuro sustentable y dinámico.',
            imagen: forestalImage,
            facebook: "https://www.facebook.com/p/Ingenier%C3%ADa-Forestal-UNSIJ-100085260390818/",
        },
        {
            id: 2,
            "infoColor": "#32A643",
            nombre: 'Licenciatura en Biología',
            informacion: 'Formamos líderes en conocimiento de la vida, conservación de la biodiversidad e investigación. Únete para contribuir al desarrollo sustentable y explorar la fascinante ciencia de la vida.',
            imagen: biologiaImage,
        },
        {
            id: 3,
            "infoColor": "#023E73",
            nombre: 'Desarrollo de software y sistemas inteligentes',
            informacion: 'Forma líderes analíticos y emprendedores capaces de desarrollar sistemas, administrar recursos informáticos y contribuir al cambio tecnológico. Únete para transformar el futuro.',
            imagen: informaticaImage,
            facebook: "https://www.facebook.com/InformaticaUNSIJ/?locale=es_LA",
        },
        {
            id: 4,
            "infoColor": "#124022",
            nombre: 'Licenciatura en Ciencias Ambientales',
            informacion: 'Analiza ecosistemas, propone soluciones sostenibles y aplica técnicas de remediación. Plan de estudios integral y amplio campo de acción. Únete para liderar el cambio hacia un futuro ambientalmente consciente.',
            imagen: ambientalImage,
            facebook: "https://www.facebook.com/Licenciatura.en.Ciencias.Ambientales.UNSIJ/?locale=es_LA",
        },
        {
            id: 5,
            "infoColor": "#275D8C",
            nombre: 'Licenciatura en Administración Turística',
            informacion: 'Formamos líderes en Administración Turística para dirigir, innovar y promover destinos. Únete para explorar el mundo del turismo y contribuir al desarrollo sostenible de comunidades locales.',
            imagen: turisticaImage,
            facebook: "https://www.facebook.com/turismoUNSIJ/",
        },
    ];

    // Función para avanzar a la siguiente licenciatura
    const handleNextProgram = useCallback(() => {
        setCurrentProgramIndex((prevIndex) =>
            prevIndex === programsData.length - visiblePrograms ? 0 : prevIndex + 1
        );
    },[programsData.length, visiblePrograms])

    // Función para retroceder a la licenciatura anterior
    const handlePrevProgram = () => {
        setCurrentProgramIndex((prevIndex) => {
            const newIndex = prevIndex === 0 ? programsData.length - visiblePrograms : prevIndex - 1;
            console.log("Current Index:", newIndex); // Agrega este log
            return newIndex;
        });
    };

    // Efecto para manejar el recorrido automático
    useEffect(() => {
        let intervalId;

        // Iniciar el recorrido automático si está habilitado
        if (autoScroll) {
            intervalId = setInterval(() => {
                handleNextProgram();
            }, 3000); // Ajusta el valor para la velocidad del recorrido automático
        }

        // Limpiar el intervalo al desmontar el componente
        return () => clearInterval(intervalId);
    }, [autoScroll, handleNextProgram, currentProgramIndex, visiblePrograms]);

    // Manejar eventos de entrada y salida del ratón para detener el recorrido automático
    const handleMouseEnter = () => {
        setAutoScroll(false);
    };

    const handleMouseLeave = () => {
        setAutoScroll(true);
    };

    // Efecto para determinar la cantidad de tarjetas visibles en función del tamaño de la pantalla
    useEffect(() => {
        const handleResize = () => {
            const windowWidth = window.innerWidth;

            // Ajustar la cantidad de tarjetas visibles según el tamaño de la pantalla
            if (windowWidth >= 1920) {
                setVisiblePrograms(4);
            } else if (windowWidth >= 1280) {
                setVisiblePrograms(3);
            } else if (windowWidth >= 768) {
                setVisiblePrograms(2);
            } else {
                setVisiblePrograms(1);
            }
        };

        // Llamar a la función al inicio y suscribirse a eventos de cambio de tamaño
        handleResize();

        window.addEventListener("resize", handleResize);

        // Limpiar el evento al desmontar el componente
        return () => {
            window.removeEventListener("resize", handleResize);
        };
    }, []);

    // Obtener las licenciaturas que se mostrarán actualmente
    const displayedPrograms = programsData.slice(currentProgramIndex, currentProgramIndex + visiblePrograms);

    return (
        <div className="mt-20 mb-3 w-[90%] flex flex-row justify-around relative" onMouseEnter={handleMouseEnter}
             onMouseLeave={handleMouseLeave}>
            {/* Flecha izquierda para retroceder */}
            <div className="absolute left-0 top-1/4 transform -translate-y-1/2 cursor-pointer transition-transform duration-300 ease-in-out
            bg-orange-600 p-2 rounded-full text-white font-bold text-3xl
            hover:bg-orange-950" onClick={handlePrevProgram} style={{zIndex: 1}}>
                <GrCaretPrevious/>
            </div>
            {/* Mapear y mostrar las licenciaturas */}
            {displayedPrograms.map((programa, index) => (
                <div key={programa.id}
                     className={`mt-10 px-6 pt-16 pb-20 shadow-2xl shadow-black/[0.1] rounded-3xl flex flex-col justify-between
                    min-w-[200px] max-w-[300px] md:max-w-[330px] 
                    min-h-[450px] max-h-[450px] md:max-h-[500px] 
                    transition-all duration-500 ease-in-out transform ${
                         index === 0 ? "translate-x-0" : `translate-x-${index * 2}0%`
                     }`} style={{backgroundColor: programa.infoColor}}>
                    {/* Imagen de la licenciatura */}
                    <img src={programa.imagen}
                         className="shadow-lg shadow-white/[0.2] rounded-3xl min-h-60 max-h-60 min-w-75 max-w-75 mx-1 -mt-40 transition-transform duration-300 ease-in-out transform"
                         style={{userSelect: 'none'}} alt="avatar"/>
                    {/* Título y contenido de la licenciatura */}
                    <h1 className="mt-4 text-xl font-bold text-slate-800 dark:text-white text-center" style={{userSelect: 'none'}}>{programa.nombre}</h1>
                    <hr className="mt-2 w-full mx-auto"/>
                    <p className="mt-6 text-unsij_white text-justify text-[13px] md:text-[16px]" style={{userSelect: 'none'}}>{programa.informacion}</p>
                    <hr className="mt-5 w-[100%] mx-auto"/>
                    {/* Enlaces a Facebook y Más Información */}
                    <div className="mt-6 flex justify-around">{programa.facebook && (
                        <a href={programa.facebook} target="_blank" rel="noopener noreferrer"
                           className="bg-sky-600 font-bold text-white px-4 py-1 rounded-lg flex items-center space-x-2 transform-gpu transition-all
                               duration-200 active:scale-90 cursor-pointer hover:bg-sky-700">
                            <FaFacebook/><span style={{userSelect: 'none'}}>Facebook</span></a>
                    )}
                        <Link to={`/more-info-l/${programa.id}`}
                              className="bg-orange-600 font-bold text-white px-4 py-2 rounded-lg flex items-center space-x-2 transform-gpu transition-all duration-200
                              hover:bg-orange-700 active:scale-90" style={{userSelect: 'none'}}>
                            <CiCircleMore/>
                            <span>Ver más</span>
                        </Link>
                    </div>
                </div>
            ))}
            {/* Flecha derecha para avanzar */}
            <div className="absolute right-0 top-1/4 transform -translate-y-1/2 cursor-pointer transition-transform duration-300 ease-in-out
            bg-orange-600 p-2 rounded-full text-white font-bold text-3xl
            hover:bg-orange-950" onClick={handleNextProgram}>
                <GrCaretNext/>
            </div>
        </div>
    );
};

export default LicenciaturaPrograms;
