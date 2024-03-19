import React, {useEffect, useState} from 'react';
import unsijImage from "./../../assets/images/unsij/unsij.jpeg";

export const SubHead = () => {
    const [backgroundHeight, setBackgroundHeight] = useState(0);

    useEffect(() => {
        const calculateBackgroundHeight = () => {
            const navbarHeightLg = 150; // Altura del navbar en píxeles para tamaños grandes
            const navbarHeightMd = 130; // Altura del navbar en píxeles para tamaños medianos
            const navbarHeightSm = 100; // Altura del navbar en píxeles para tamaños medianos
            const windowHeight = window.innerHeight;
            const screenWidth = window.innerWidth;

            let backgroundHeight;

            if (screenWidth >= 1440) {
                backgroundHeight = windowHeight - navbarHeightLg;
            } else {
                if (screenWidth >= 768) { // Pantallas medianas y grandes
                    backgroundHeight = windowHeight - navbarHeightMd;
                } else { // Pantallas pequeñas
                    backgroundHeight = windowHeight - navbarHeightSm;
                }
            }

            setBackgroundHeight(backgroundHeight);
        };

        calculateBackgroundHeight();

        const handleResize = () => {
            calculateBackgroundHeight();
            // También puedes ejecutar otras acciones en caso de cambio de tamaño de ventana
        };

        window.addEventListener('resize', handleResize);

        return () => {
            window.removeEventListener('resize', handleResize);
        };
    }, []);

    return (<div className="relative !overflow-x-hidden">
            {/* Ajustar la imagen de fondo para que ocupe el 100% del ancho y alto */}
            <div className="h-full w-full bg-cover bg-center"
                 style={{backgroundImage: `url(${unsijImage})`, height: `${backgroundHeight}px`}}>
                {/* Contenedor del eslogan */}
                <div className="absolute inset-0 flex items-center justify-center">
                    <div className="relative -mt-80 md:-mt-96 md:w-[85%] lg:w-[60%] mx-auto
                    bg-green-950 bg-opacity-70 flex flex-col items-center px-2 pb-8 rounded-xl">
                        <p className="text-[70px] md:text-[100px] lg:text-[150px] font-Garamont font-[800] text-white
                        -mb-6 md:-mb-8 lg:-mb-16">UNSIJ</p>
                        <p className="text-lg md:text-3xl lg:text-4xl font-Garamont font-[800] text-white
                        lg:-mb-3">Educación con identidad y compromiso social</p>
                        <p className="hidden md:inline md:text-xl lg:text-2xl
                        text-gray-300 font-[400] font-Garamont">Sembrando conocimiento, cosechando oportunidades</p>
                    </div>
                </div>
            </div>
        </div>);

};

export default SubHead;
