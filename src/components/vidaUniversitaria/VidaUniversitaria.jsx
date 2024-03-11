import React, {useEffect, useState} from 'react';
import Modal from 'react-modal';
import image1 from '../../assets/images/carreras/info/1.jpg';
import image2 from '../../assets/images/carreras/info/2.jpg';
import image3 from '../../assets/images/carreras/info/3.jpg';
import image4 from '../../assets/images/carreras/info/4.jpg';
import image5 from '../../assets/images/carreras/info/5.jpg';
import image6 from '../../assets/images/carreras/info/6.jpg';
import image7 from '../../assets/images/carreras/info/7.jpg';
import image8 from '../../assets/images/carreras/info/8.jpg';

Modal.setAppElement('#root'); // Necesario para la accesibilidad del modal

const ImageGallery = () => {
    const [selectedImage, setSelectedImage] = useState(null);
    const [imageDimensions, setImageDimensions] = useState({width: 0, height: 0});

    const openModal = (imageSrc) => {
        setSelectedImage(imageSrc);
    };

    const closeModal = () => {
        setSelectedImage(null);
    };

    const images = [image1, image2, image3, image4, image5, image6, image7, image8];

    useEffect(() => {
        const img = new Image();
        img.src = selectedImage;

        img.onload = () => {
            setImageDimensions({width: img.width, height: img.height});
        };
    }, [selectedImage]);

    const calculateMaxHeight = () => {
        const aspectRatio = imageDimensions.height / imageDimensions.width;
        return aspectRatio * 80 + 'vw'; // Ajusta el valor multiplicador según tus necesidades
    };
    return (
        <div className="container mx-auto px-5 py-2 lg:px-32 lg:pt-2 bg-transparent">
            <h1 className=" mt-4 text-center text-2xl md:text-3xl lg:text-4xl font-bold mb-3 text-unsij_white">Vida
                universitaria</h1>
            <div className="-m-1 flex flex-wrap md:-m-2">
                <div className="flex w-1/2 flex-wrap">
                    {images.slice(0, 4).map((imageSrc, index) => (
                        <div key={index} className="w-1/2 p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                                src={imageSrc}
                                onClick={() => openModal(imageSrc)}
                            />
                        </div>
                    ))}
                </div>
                <div className="flex w-1/2 flex-wrap">
                    {images.slice(3, 6).map((imageSrc, index) => (
                        <div key={index} className="w-full p-1 md:p-2">
                            <img
                                alt="gallery"
                                className="block h-full w-full rounded-lg object-cover object-center cursor-pointer"
                                src={imageSrc}
                                onClick={() => openModal(imageSrc)}
                            />
                        </div>
                    ))}
                </div>
            </div>

            {/* Modal */}
            <Modal
                isOpen={!!selectedImage}
                onRequestClose={closeModal}
                contentLabel="Imagen en pantalla completa"
                style={{
                    content: {
                        maxWidth: '80%', // Ajusta este valor según tus necesidades
                        maxHeight: calculateMaxHeight(),
                        margin: 'auto',
                    },
                }}
            >
                <img
                    alt="gallery-fullscreen"
                    className="block w-full h-auto mx-auto"
                    src={selectedImage}
                    style={{maxHeight: `${imageDimensions.height}px`}}
                />
            </Modal>
        </div>
    );
};

export default ImageGallery;
