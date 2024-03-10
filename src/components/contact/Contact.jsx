import React from "react";
import { FaFacebookF } from "react-icons/fa";
import { TbWorldWww } from "react-icons/tb";
import { GiPositionMarker } from "react-icons/gi";
import { FaPhoneVolume } from "react-icons/fa6";

const Contact = () => {
  const googleMapsUrl =
    "https://www.google.com/maps?q=17.316073660409202,-96.4833219216453";

  return (
    <section className="bg-unsij_secod" id="contact">
      <div className="mx-auto w-full px-4 py-16 sm:px-6 lg:px-8 lg:py-20">
        <div className="mb-4">
          <div className="mb-6 w-full text-center sm:text-center md:mx-auto md:mb-12">
            <h2 className="font-heading mb-4 font-bold tracking-tight text-gray-900 dark:text-white text-3xl sm:text-5xl">
              Información de contacto
            </h2>
          </div>
        </div>
        <div className="flex justify-around">
          <div className="flex flex-col">
            <div className="h-full pr-6">
              <p className="mt-3 mb-12 text-lg md:text-2xl text-gray-600 dark:text-slate-400">
                La Universidad de la Sierra Juárez es un organismo público
                descentralizado del gobierno del estado de Oaxaca.
              </p>
              <ul className="mb-6 md:mb-0 flex flex-col md:flex-row justify-around">
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <GiPositionMarker size={24} color="white" />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Ubicación
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      Avenida Universidad S/N
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      Ixtlán de Juárez, Oaxaca, México.
                    </p>
                    <a
                      href={googleMapsUrl}
                      className="bg-green-950 px-2 py-1 rounded-lg text-unsij_white hover:text-orange-600"
                      target="_blank"
                      rel="noopener noreferrer"
                    >
                      Clic para ver en Google Maps.
                    </a>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <FaPhoneVolume size={24} color="white" />
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Contacto
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      Teléfono: +52 (951) 553 - 63 - 62
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      Teléfono: +52 (951) 553 - 63 - 65
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      Teléfono: +52 (951) 553 - 63 - 70
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      Correo electrónico: servescolares@unsij.edu.mx
                    </p>
                    <div className="mt-3 flex-row flex gap-8 justify-around">
                      <a href="https://www.facebook.com/UNSIJ.SUNEO/?locale=es_LA"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-unsij_white text-3xl hover:text-unsij_fifth">
                        <FaFacebookF />
                      </a>
                      <a href="https://www.unsij.edu.mx/"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="text-unsij_white text-3xl hover:text-unsij_fifth">
                        <TbWorldWww />
                      </a>
                    </div>
                  </div>
                </li>
                <li className="flex">
                  <div className="flex h-10 w-10 items-center justify-center rounded bg-blue-900 text-gray-50">
                    <svg
                      xmlns="http://www.w3.org/2000/svg"
                      width="24"
                      height="24"
                      viewBox="0 0 24 24"
                      fill="none"
                      stroke="currentColor"
                      strokeWidth="2"
                      strokeLinecap="round"
                      strokeLinejoin="round"
                      className="h-6 w-6"
                    >
                      <path d="M3 12a9 9 0 1 0 18 0a9 9 0 0 0 -18 0"></path>
                      <path d="M15 7a2 2 0 0 1 2 2"></path>
                      <path d="M15 3a6 6 0 0 1 6 6"></path>
                    </svg>
                  </div>
                  <div className="ml-4 mb-4">
                    <h3 className="mb-2 text-lg font-medium leading-6 text-gray-900 dark:text-white">
                      Horario de atención
                    </h3>
                    <p className="text-gray-600 dark:text-slate-400">
                      Lunes - Viernes: 08:00 - 14:00
                    </p>
                    <p className="text-gray-600 dark:text-slate-400">
                      Lunes - Viernes: 16:00 - 19:00
                    </p>
                  </div>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Contact;
