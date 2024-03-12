import React from "react";
import Header from "../header/Header.jsx";
import SubHeader from "../subHeader/SubHeader.jsx";
import AdmisionProcess from "../admision/AdmisionProcess.jsx";
import LicenciaturaPrograms from "../academicPrograms/LicenciaturaPrograms.jsx";
import Contact from "../contact/Contact.jsx";
import Footer from "../footer/Footer.jsx";
import {Element} from "react-scroll";
import Becas from '../becas/Becas'
import VidaUniversitaria from "../vidaUniversitaria/VidaUniversitaria";


const Home = () => {

    return (
        <div>
            <Header/>
            <SubHeader/>
            <div className="bg-unsij_secod flex justify-center font-Garamont" id="proceso">
                <span className="pt-4 text-unsij_white font-[800] pb-3 text-2xl md:text-3xl lg:text-4xl">Proceso de admisión 2024</span>
            </div>
            <div className="p-4 bg-unsij_white">
                <AdmisionProcess/>
            </div>
            <Element name="oferta">
                <div id="oferta"
                     className="bg-[#033F4A] flex justify-center font-Garamont">
                    <span className="pt-4 text-unsij_white font-[800] pb-3 text-2xl md:text-3xl lg:text-4xl">Oferta educativa</span>
                </div>
                <div className="p-4 bg-gray-300 w-[98%] mx-auto my-2 rounded-3xl">
                    <LicenciaturaPrograms/>
                </div>
            </Element>
            <Element name="becas">
                <div id="becas">
                    <Becas/>
                </div>
            </Element>
            <Element name="vidaUniversitaria">
                <div id="vidaUniversitaria" className="bg-[#033F4A]">
                    <VidaUniversitaria/>
                </div>
            </Element>
            <Element name="contact">
                <Contact/>
            </Element>
            <Footer/>
        </div>
    );
};

export default Home;
