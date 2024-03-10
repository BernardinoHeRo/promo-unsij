import React, { useState } from "react";
import { IoIosArrowDown, IoIosArrowUp } from "react-icons/io";

const AdmisionMenu = ({ onAdmisionClick, type }) => {
    const processType = type === "Postgrados" ? "Postgrado" : "Licenciatura"; // Cambiado a "postgrado" y "licenciatura"
    const [isExpanded, setIsExpanded] = useState(false);

    const handleToggleClick = () => {
        onAdmisionClick(processType);
        setIsExpanded(!isExpanded);
    };

    return (
        <div
            className="bg-unsij_secod flex items-center justify-around font-Garamont cursor-pointer"
            onClick={handleToggleClick}
        >
            <div className="flex items-center text-lg md:text-4xl">
                {isExpanded ? (
                    <IoIosArrowUp className="text-white mr-2" />
                ) : (
                    <IoIosArrowDown className="text-white mr-2" />
                )}
                <p className="text-white py-1 font-[600] md:font-[800] md:text-2xl mt-1 hover:text-unsij_fifth text-justify">
                    {`${processType}`}
                </p>
            </div>
        </div>
    );
};

export default AdmisionMenu;
