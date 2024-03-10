import React from 'react';
import utmLogo from "../../assets/images/suneo/utm.png"
import umarLogo from "../../assets/images/suneo/umar.png"
import uncaLogo from "../../assets/images/suneo/unca.png"
import uncosLogo from "../../assets/images/suneo/uncos.png"
import unichaLogo from "../../assets/images/suneo/unicha.png"
import unitsmoLogo from "../../assets/images/suneo/unitsmo.png"
import unpaLogo from "../../assets/images/suneo/unpa.png"
import unsijLogo_2 from "../../assets/images/suneo/unsij_2.png"
import unsisLogo from "../../assets/images/suneo/unsis.png"
import novaLogo from "../../assets/images/suneo/nova.png"



const Footer = () => {
    return (
        <footer className="w-full py-10 px-6 bg-unsij_white">
            <div className="max-w-[98%] flex flex-col items-center">
                <div className="flex flex-col items-center justify-center">
                    <h3 className="font-bold uppercase text-gray-700 text-center text-2xl">Universidades del SUNEO</h3>
                    <ul className="mt-4 text-gray-700 flex flex-col md:flex-row md:flex-wrap gap-0 md:gap-8">
                        <li><a href="https://www.utm.mx/" className="flex items-center" target="_blank" rel="noopener noreferrer"><img alt="UTM Logo" className="h-10 w-10" src={utmLogo}/> UTM</a></li>
                        <li><a href="https://www.umar.mx/web/" className="flex items-center" target="_blank" rel="noopener noreferrer"><img alt="UMAR Logo" className="h-10 w-10" src={umarLogo}/> UMAR</a></li>
                        <li><a href="http://www.unistmo.edu.mx/" className="flex items-center" target="_blank" rel="noopener noreferrer"><img alt="UNISTMO Logo" className="h-10 w-10" src={unitsmoLogo}/> UNISTMO</a></li>
                        <li><a href="https://www.unpa.edu.mx/" className="flex items-center" target="_blank" rel="noopener noreferrer"><img alt="UNPA Logo" className="h-10 w-10" src={unpaLogo}/> UNPA</a></li>
                        <li><a href="https://www.unsis.edu.mx/" className="flex items-center" target="_blank" rel="noopener noreferrer"><img alt="UNSIS Logo" className="h-10 w-10" src={unsisLogo}/> UNSIS</a></li>
                        <li><a href="https://www.unsij.edu.mx/" className="flex items-center" target="_blank" rel="noopener noreferrer"><img alt="UNSIJ Logo" className="h-10 w-10" src={unsijLogo_2}/> UNSIJ</a></li>
                        <li><a href="https://www.unca.edu.mx/" className="flex items-center" target="_blank" rel="noopener noreferrer"><img alt="UNCA Logo" className="h-10 w-10" src={uncaLogo}/> UNCA</a></li>
                        <li><a href="https://www.novauniversitas.edu.mx/" className="flex items-center" target="_blank" rel="noopener noreferrer"><img alt="NOVA UNIVERSITAS Logo" className="h-10 w-10" src={novaLogo}/> NOVA UNIVERSITAS</a></li>
                        <li><a href="https://www.uncos.edu.mx/" className="flex items-center" target="_blank" rel="noopener noreferrer"><img alt="UNCOS Logo" className="h-10 w-10" src={uncosLogo}/> UNCOS</a></li>
                        <li><a href="https://www.unicha.edu.mx/" className="flex items-center" target="_blank" rel="noopener noreferrer"><img alt="UNICHA Logo" className="h-10 w-10" src={unichaLogo}/> UNICHA</a></li>
                    </ul>
                </div>
                <div className="flex justify-between text-sm text-gray-700">
                    <p className="mt-4 text-center text-base">© 2024 Universidad de la Sierra Juárez - Licenciatura en
                        Informática.</p>
                </div>
            </div>
        </footer>
    );
};

export default Footer;
