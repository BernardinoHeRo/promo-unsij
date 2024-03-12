import React, {useState} from "react";
import {RiCloseLine, RiMenu3Fill} from "react-icons/ri";
import logoUnsij from "../../assets/images/unsij.png";
import {Link as ScrollLink} from "react-scroll";
import {Link} from "react-router-dom";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    return (
        <header
            className="flex items-center justify-between xl:justify-start w-full p-4 h-[10vh] bg-unsij_fisrt z-50 font-Garamont">
            <div className="xl:w-1/3">
                <Link to={"/"} className="flex justify-around items-center">
                    <img
                        src={logoUnsij}
                        alt="Logotipo universidad"
                        className="h-20 w-auto bg-unsij_white p-2 rounded-full"
                    />
                    <h1 className="md:text-2xl hidden md:inline font-[800] mx-4 text-center text-white uppercase">
                        Universidad de la Sierra Juárez
                    </h1>
                    <h1 className="text-3xl md:hidden font-[800] text-center text-white">
                        UNSIJ
                    </h1>
                </Link>
            </div>
            <nav
                className={`fixed bg-unsij_secod rounded-xl xl:w-full w-[80%] md:w-[50%] h-full ${
                    showMenu ? "left-0" : "-left-full"
                } top-0 xl:static flex-1 flex 
                flex-col xl:flex-row items-center justify-center gap-6 md:gap-7 lg:gap-10 transition-all duration-500 z-50`}
            >
                <Link
                    to={"/"}
                    className="text-xl lg:text-2xl text-white border-b hover:border-2 px-2 rounded-lg hover:text-orange-600 font-[500]"
                >
                    Inicio
                </Link>
                <ScrollLink
                    to={"oferta"}
                    smooth={true}
                    duration={500}
                    className="text-xl lg:text-2xl text-white border-b hover:border-2 px-2 rounded-lg hover:text-orange-600 font-[500] cursor-pointer"
                >
                    Oferta educativa
                </ScrollLink>
                <ScrollLink
                    to={"becas"}
                    smooth={true}
                    duration={500}
                    className="text-xl lg:text-2xl text-white border-b hover:border-2 px-2 rounded-lg hover:text-orange-600 font-[500] cursor-pointer"
                >
                    Becas
                </ScrollLink>
                <ScrollLink
                    to={"vidaUniversitaria"}
                    smooth={true}
                    duration={500}
                    href="/"
                    className="text-xl lg:text-2xl text-white border-b hover:border-2 px-2 rounded-lg
                    hover:text-orange-600 font-[500] cursor-pointer"
                >
                    Vida universitaria
                </ScrollLink>
                <ScrollLink
                    to={"contact"}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-xl lg:text-2xl text-white border-b hover:border-2 px-2 rounded-lg hover:text-orange-600 font-[500] cursor-pointer"
                >
                    Contacto
                </ScrollLink>
            </nav>
            <button
                onClick={() => setShowMenu(!showMenu)}
                className=" text-white font-bold xl:hidden text-4xl p-2"
            >
                {showMenu ? <RiCloseLine/> : <RiMenu3Fill/>}
            </button>
        </header>
    );
};
export default Header;
