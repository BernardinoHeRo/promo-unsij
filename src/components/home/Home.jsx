import React from "react";
import Header from "../header/Header.jsx";
import SubHeader from "../subHeader/SubHeader.jsx";
import AdmisionProcess from "../admision/AdmisionProcess.jsx";
import LicenciaturaPrograms from "../academicPrograms/LicenciaturaPrograms.jsx";
import Contact from "../contact/Contact.jsx";
import Footer from "../footer/Footer.jsx";
import {Element} from "react-scroll";

const Home = () => {

    return (
        <div>
            <Header/>
            <SubHeader/>
            <div className="bg-unsij_secod flex justify-center font-Garamont" id="proceso">
                <span className="pt-4 text-unsij_white text-2xl md:text-3xl font-[800] pb-3">Proceso de admisión 2024</span>
            </div>
            <div>
                <AdmisionProcess/>
            </div>
            <Element name="oferta">
                <div id="oferta" className="my-1 pt-2 flex flex-col items-center bg-[#033F4A] border-4 border-unsij_secod rounded-b-3xl !overflow-x-hidden">
                    <span className="w-full ml-[85px] text-xl md:text-4xl font-Garamont font-[800] text-white mb-3 text-center">Licenciaturas: Oferta educativa</span>
                    <LicenciaturaPrograms/>
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
