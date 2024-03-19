import React from "react";
import {TbClockHour2, TbWorldWww} from "react-icons/tb";
import {GiPositionMarker} from "react-icons/gi";
import {FaPhoneVolume} from "react-icons/fa6";
import {FaFacebookF} from "react-icons/fa";

const Contact = () => {
    const googleMapsUrl =
        "https://www.google.com/maps?q=17.316073660409202,-96.4833219216453";

    return (
        <section className="bg-unsij_main_0" id="contact">
            <div className="mx-auto w-full px-4 pt-4 sm:px-4 lg:px-10 lg:pt-10">
                <div className="mb-6 w-full text-center sm:text-center md:mx-auto md:mb-12">
                    <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-2xl md:text-3xl lg:text-4xl">
                        Información de contacto
                    </h2>
                </div>
                <div className="flex justify-around">
                    <div className="flex flex-col">
                        <div className="h-full pr-6">
                            <p className="mt-3 mb-12 text-lg md:text-xl lg:text-2xl text-gray-600 dark:text-unsij_white text-center">
                                La Universidad de la Sierra Juárez es un organismo público descentralizado del gobierno
                                del estado de Oaxaca.
                            </p>
                            <ul className="mb-6 md:mb-0 flex flex-col md:flex-row justify-around">
                                <li className="flex">
                                    <div
                                        className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                        <GiPositionMarker size={24} color="white"/>
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-2 text-lg md:text-xl lg:text-2xl font-medium leading-6 text-gray-900 dark:text-white">
                                            Ubicación
                                        </h3>
                                        <ul>
                                            <li className="text-gray-600 dark:text-unsij_white text-base">
                                                Avenida Universidad S/N
                                            </li>
                                            <li className="text-gray-600 dark:text-unsij_white text-base">
                                                Ixtlán de Juárez, Oaxaca, México.
                                            </li>
                                            <li>
                                                <a href={googleMapsUrl}
                                                   className="text-orange-600 px-2 py-1 rounded-lg hover:bg-unsij_fisrt text-base"
                                                   target="_blank"
                                                   rel="noopener noreferrer"
                                                >
                                                    Clic para ver en Google Maps.
                                                </a>
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="flex justify-around">
                                    <div
                                        className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                        <FaPhoneVolume size={24} color="white"/>
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-2 text-lg md:text-xl lg:text-2xl font-medium leading-6 text-gray-900 dark:text-white">
                                            Contacto
                                        </h3>
                                        <ul>
                                            <li className="text-gray-600 dark:text-unsij_white">Teléfono: +52 (951) 553
                                                - 63 - 62
                                            </li>
                                            <li className="text-gray-600 dark:text-unsij_white">Teléfono: +52 (951) 553
                                                - 63 - 65
                                            </li>
                                            <li className="text-gray-600 dark:text-unsij_white">Teléfono: +52 (951) 553
                                                - 63 - 70
                                            </li>
                                            <li className="text-gray-600 dark:text-unsij_white">Correo electrónico:
                                                servescolares@unsij.edu.mx
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                                <li className="flex">
                                    <div
                                        className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                                        <TbClockHour2 size={24} color="white"/>
                                    </div>
                                    <div className="ml-4 mb-4">
                                        <h3 className="mb-2 text-lg md:text-xl lg:text-2xl font-medium leading-6 text-gray-900 dark:text-white">
                                            Horario de atención
                                        </h3>
                                        <ul>
                                            <li className="text-gray-600 dark:text-unsij_white">
                                                Lunes - Viernes: 08:00 - 14:00
                                            </li>
                                            <li className="text-gray-600 dark:text-unsij_white">
                                                Lunes - Viernes: 16:00 - 19:00
                                            </li>
                                        </ul>
                                    </div>
                                </li>
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
            <div className="flex-row flex items-center justify-center gap-20 pb-4">
                <a href="https://www.facebook.com/UNSIJ.SUNEO/?locale=es_LA"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-orange-600 text-3xl hover:bg-unsij_fisrt rounded-full">
                    <FaFacebookF/>
                </a>
                <a href="https://www.unsij.edu.mx/"
                   target="_blank"
                   rel="noopener noreferrer"
                   className="text-orange-600 text-3xl hover:bg-unsij_fisrt rounded-full">
                    <TbWorldWww/>
                </a>
            </div>
        </section>
    )
        ;
};

export default Contact;
