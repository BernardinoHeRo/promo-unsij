import React, { useState, useEffect, useRef } from "react";
import { RiCloseLine, RiMenu3Fill } from "react-icons/ri";
import logoUnsij from "../../assets/images/unsij.png";
import { Link as ScrollLink } from "react-scroll";
import { Link } from "react-router-dom";

const Header = () => {
    const [showMenu, setShowMenu] = useState(false);
    const menuRef = useRef(null);

    useEffect(() => {
        function handleClickOutside(event) {
            if (menuRef.current && !menuRef.current.contains(event.target)) {
                setShowMenu(false);
            }
        }

        document.addEventListener("mousedown", handleClickOutside);
        return () => {
            document.removeEventListener("mousedown", handleClickOutside);
        };
    }, []);

    return (
        <header className="bg-unsij_main_0 flex items-center justify-between xl:justify-start w-full p-4
    h-[60px] md:h-[80px] lg:h-[100px] z-50 font-Garamont"
        >
            {/* Logotipo e imagen */}
            <div className="lg:w-1/3">
                <Link to={"/"} className="flex justify-around items-center">
                    <img
                        src={logoUnsij}
                        alt="Logotipo universidad"
                        className=" w-10 md:w-16 lg:w-20 bg-white p-2 rounded-full"
                    />
                    <h1 className="md:text-xl hidden md:inline font-[800] mx-4 text-center text-white uppercase">
                        Universidad de la Sierra Juárez
                    </h1>
                    <h1 className="text-3xl md:hidden font-[800] text-center text-white">
                        UNSIJ
                    </h1>
                </Link>
            </div>
            {/* Navbar */}
            <nav
                ref={menuRef}
                className={`fixed bg-unsij_main_0 rounded-xl xl:w-full w-[60%] md:w-[50%] h-full ${
                    showMenu ? "left-0" : "-left-full"
                } top-0 xl:static flex-1 flex 
                flex-col xl:flex-row items-center justify-center gap-6 md:gap-7 lg:gap-10 transition-all duration-500 z-50`}
            >
                <ScrollLink
                    to={"proceso"}
                    className="text-lg lg:text-xl xl:text-lg text-unsij_white border-b hover:border-2 px-2 rounded-lg hover:text-orange-600 font-[500] cursor-pointer"
                >
                    Admisión
                </ScrollLink>
                <Link
                    to={"/"}
                    className="text-lg lg:text-xl xl:text-lg text-white border-b hover:border-2 px-2 rounded-lg hover:text-orange-600 font-[500]"
                >
                    Acerca de.
                </Link>
                <ScrollLink
                    to={"oferta"}
                    smooth={true}
                    duration={500}
                    className="text-lg lg:text-xl xl:text-lg text-white border-b hover:border-2 px-2 rounded-lg hover:text-orange-600 font-[500] cursor-pointer"
                >
                    Oferta educativa
                </ScrollLink>
                <ScrollLink
                    to={"becas"}
                    smooth={true}
                    duration={500}
                    className="text-lg lg:text-xl xl:text-lg text-white border-b hover:border-2 px-2 rounded-lg hover:text-orange-600 font-[500] cursor-pointer"
                >
                    Becas
                </ScrollLink>
                <ScrollLink
                    to={"vidaUniversitaria"}
                    smooth={true}
                    duration={500}
                    href="/"
                    className="text-lg lg:text-xl xl:text-lg text-white border-b hover:border-2 px-2 rounded-lg
                    hover:text-orange-600 font-[500] cursor-pointer"
                >
                    Vida universitaria
                </ScrollLink>
                <ScrollLink
                    to={"contact"}
                    spy={true}
                    smooth={true}
                    duration={500}
                    className="text-lg lg:text-xl xl:text-lg text-white border-b hover:border-2 px-2 rounded-lg hover:text-orange-600 font-[500] cursor-pointer"
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
