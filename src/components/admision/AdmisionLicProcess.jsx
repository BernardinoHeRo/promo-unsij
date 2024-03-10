import React from "react";

const AdmisionLicProcess = () => {
    return (
        <section
            className="mt-[1px] bg-unsij_white grid grid-cols-1 md:grid-cols-12 uppercase font-Garamont border-solid border-4 border-unsij_third rounded-lg">
            <div className="col-span-12">
                <div
                    className="flex flex-row items-center justify-around p-2 text-white font-bold bg-unsij_third shadow-md">
                    <a href="#"
                       className="text-center px-3 py-1 transition-all duration-300 hover:scale-105 hover:text-white hover:bg-red-700 rounded-md">Paso
                        1</a>
                    <a href="#"
                       className="text-center px-3 py-1 transition-all duration-300 hover:scale-105 hover:text-white hover:bg-red-700 rounded-md">Paso
                        2</a>
                    <a href="#"
                       className="text-center px-3 py-1 transition-all duration-300 hover:scale-105 hover:text-white hover:bg-red-700 rounded-md">Paso
                        3</a>
                    <a href="#"
                       className="text-center px-3 py-1 transition-all duration-300 hover:scale-105 hover:text-white hover:bg-red-700 rounded-md">Paso
                        4</a>
                    <a href="#"
                       className="text-center px-3 py-1 transition-all duration-300 hover:scale-105 hover:text-white hover:bg-red-700 rounded-md">Paso
                        5</a>
                    <a href="#"
                       className="text-center px-3 py-1 transition-all duration-300 hover:scale-105 hover:text-white hover:bg-red-700 rounded-md">Paso
                        6</a>
                </div>
                <div className="flex flex-col items-center">
                    <p className="text-justify p-6">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusamus
                        amet commodi corporis
                        deserunt ducimus est facilis ipsa magnam molestias nesciunt perferendis quia, quidem reiciendis
                        rem repellat similique unde, vitae voluptas!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi consectetur consequatur dolor
                        exercitationem fugit hic magni natus, porro provident qui, reprehenderit repudiandae tenetur
                        voluptatum. Deserunt distinctio est nihil repellat vero!
                        Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium adipisci alias aspernatur
                        beatae cupiditate debitis delectus eaque eum eveniet iste iure laboriosam magni maiores pariatur
                        perferendis, placeat ullam veniam voluptatum.
                    </p>
                </div>
                <div className="flex flex-col items-center">
                    <span className="text-unsij_white w-full text-center p-2 bg-unsij_fisrt font-[800]">Dirección y contacto</span>
                    <span className="text-center">Avenida universidad S/N Ixtlán de Juárez, Oaxaca.</span>
                    <span
                        className="text-center"><strong>951 - 598 - 654 - 21</strong>,<strong>951 - 598 - 654 - 22</strong> <strong>ext: 505</strong></span>
                </div>
            </div>
            <div className="bg-unsij_white col-span-12 flex flex-col gap-3 items-center uppercase md:col-span-12 md:gap-6 pb-2 md:hidden">
                <h1 className="text-unsij_white w-full text-center p-2 bg-unsij_fisrt">¡Importante!</h1>
                <div className="flex flex-col md:flex-row gap-1 md:gap-8 items-center">
                    <div className="flex flex-row gap-1 items-center">
                        <span className="align-bottom">Costo de ficha</span>
                        <p className="text-3xl font-bold">$500.00 MXN</p>
                    </div>
                    <div className="flex flex-row gap-1 items-center">
                        <span>Colegiatura</span>
                        {/*<span className="hidden md:inline">Totalmente</span>*/}
                        <p className="text-3xl font-bold">gratis</p>
                    </div>
                </div>
                {/*<div className="flex flex-col items-center">
                    <span className="hidden md:inline">Inicio de clases</span>
                    <strong className="hidden md:inline">29 - febrero - 2024</strong>
                </div>*/}
            </div>
            <div
                className="col-span-12 h-[24] mt-1 mb-2 flex items-center flex-col justify-around md:flex-row md:justify-around md:h-10 bg-unsij_third font-[700]">
                <a href="#"
                   className="text-unsij_white text-center px-3 py-1 transition-all duration-300 hover:scale-105 hover:text-white hover:bg-red-700 rounded-md md:text-[14px]">
                    Descargar proceso de admisión
                </a>
                <a href="#"
                   className="text-unsij_white text-center px-3 py-1 transition-all duration-300 hover:scale-105 hover:text-white hover:bg-red-700 rounded-md md:text-[14px]">
                    Descargar convocatoria 2024
                </a>
                <a href="#"
                   className="text-unsij_white text-center px-3 py-1 transition-all duration-300 hover:scale-105 hover:text-white hover:bg-red-700 rounded-md md:text-[14px]">
                    Descargar calendario escolar 2024
                </a>
            </div>
        </section>
    )
}

export default AdmisionLicProcess;