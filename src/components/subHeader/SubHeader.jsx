import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Mision from "./Mision.jsx";
import Vision from "./Vision";
import Slogan from "./Slogan"

const SubHeader = () => {
    const settings = {
        infinite: true,
        speed: 500,
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 10000,
    };

    return (
        <div className="!overflow-x-hidden">
            <Slider {...settings}>
                <div className="w-full">
                    <Slogan/>
                </div>
                <div className="w-full">
                    <Mision/>
                </div>
                <div className="w-full">
                    <Vision/>
                </div>
            </Slider>

        </div>
    );
};

export default SubHeader;
