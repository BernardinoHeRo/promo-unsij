import React, {useEffect, useState} from "react";
import Header from "../header/Header.jsx";
import AdmisionProcess from "../admision/AdmisionProcess.jsx";
import LicenciaturaPrograms from "../academicPrograms/LicenciaturaPrograms.jsx";
import Contact from "../contact/Contact.jsx";
import Footer from "../footer/Footer.jsx";
import Becas from '../becas/Becas'
import VidaUniversitaria from "../vidaUniversitaria/VidaUniversitaria";
import SubHead from "../subHeader/SubHead";


const Home = () => {
    return (
        <div>
            <Header/>
            <SubHead/>

            <div className="bg-teal-950 flex justify-center font-Garamont h-[40px] md:h-[50px] items-center"
                 id="proceso">
                <h1 className="text-unsij_white font-[800] text-2xl md:text-3xl lg:text-4xl">
                    Proceso de admisión 2024
                </h1>
            </div>
            <AdmisionProcess/>
            <div className="bg-teal-950 flex justify-center font-Garamont h-[40px] md:h-[50px] items-center"
                 id="oferta">
                <h1 className="text-unsij_white font-[800] text-2xl md:text-3xl lg:text-4xl">Oferta educativa</h1>
            </div>
            <div className="p-4 bg-gray-300 w-[98%] mx-auto my-2 rounded-3xl">
                <LicenciaturaPrograms/>
            </div>
            <div id="becas">
                <Becas/>
            </div>
            <div className="bg-[#033F4A] flex justify-center font-Garamont h-[40px] md:h-[50px] items-center"
                 id="vidaUniversitaria">
                <h1 className="text-unsij_white font-[800] text-2xl md:text-3xl lg:text-4xl">Vida universitaria</h1>
            </div>
            <div>
                <VidaUniversitaria/>
            </div>
            <Contact/>
            <Footer/>
        </div>
    );
};

export default Home;
