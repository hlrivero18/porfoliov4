import React, { use, useCallback, useState, useEffect, useRef } from "react";
import style from "./certifications.module.css"
import { IoIosArrowForward, IoIosArrowBack } from "react-icons/io";
import { motion, AnimatePresence } from "framer-motion";
import { IoIosInformationCircleOutline } from "react-icons/io";


//imagenes
import jS from "../../assets/certifications/javascript.png"
import gitCourses from "../../assets/certifications/git.jpeg"
import reactCourse from "../../assets/certifications/react.jpeg"
import jpMorgan from "../../assets/certifications/jpmorgan.jpg"
import javaCourse from "../../assets/certifications/java.jpeg"
import maquetador from "../../assets/certifications/maquetador.jpeg"
import reparacion from "../../assets/certifications/reparacion.jpg"

export default function Certifications() {
    const certificaciones = [
        {
            id: 1,
            url: jpMorgan,
            title: 'Programación web fullstack',
            description: `Certificación completa en desarrollo web fullstack, abarcando tanto frontend como backend, 
            utilizando tecnologías modernas y mejores prácticas, curso becado por JPMorgan Chase & Co y Fundación Pescar.`
        },
        {
            id: 2,
            url: jS,
            title: 'Javascript avanzado',
            description: 'Certificación en JavaScript avanzado que abarca conceptos como closures, promesas, asincronía y patrones de diseño.'
        },
        {
            id: 3,
            url: javaCourse,
            title: 'Introducción a Java',
            description: `Certificación en introducción a Java, cubriendo conceptos fundamentales del lenguaje, 
            estructuras de control y programación orientada a objetos.`
        },
        {
            id: 4,
            url: gitCourses,
            title: 'Control de versiones con Git y GitHub',
            description: `Certificación en control de versiones con Git y GitHub, cubriendo conceptos fundamentales del sistema de control de versiones, 
            gestión de ramas, colaboración en equipo y buenas prácticas en el desarrollo de software.`
        },
        {
            id: 5,
            url: reactCourse,
            title: 'Desarrollo de aplicaciones con React',
            description: 'Certificación en desarrollo de aplicaciones con React, cubriendo componentes, estado, props y patrones de diseño.'
        },
        {
            id: 6,
            url: maquetador,
            title: 'Maquetador web',
            description: 'Certificación en maquetación web, cubriendo conceptos fundamentales de diseño responsivo, estructura HTML y estilos CSS.'
        },
        {
            id: 7,
            url: reparacion,
            title: 'Técnico en reparación de computadoras',
            description: 'Certificación en reparación de computadoras, cubriendo diagnóstico de fallas, mantenimiento y reparación de hardware y software.'
        }
    ];

    const [currentIndex, setCurrentIndex] = useState(0)
    const [direction, setDirection] = useState("right");


    const touchStartX = useRef(null);
    const touchEndX = useRef(null);

    const minSwipeDistance = 50;

    const nextSlide = useCallback(() => {
        setDirection("right");
        setCurrentIndex((prevIndex) =>
            prevIndex === certificaciones.length - 1 ? 0 : prevIndex + 1
        );
    }, [certificaciones.length]);

    const prevSlide = useCallback(() => {
        setDirection("left");
        setCurrentIndex((prevIndex) =>
            prevIndex === 0 ? certificaciones.length - 1 : prevIndex - 1
        );
    }, [certificaciones.length]);

    const onTouchStart = (e) => {
        touchEndX.current = null;
        touchStartX.current = e.targetTouches[0].clientX;
    }

    const onTouchMove = (e) => {
        touchEndX.current = e.targetTouches[0].clientX;
    }

    const onTouchEnd = () => {
        if (!touchStartX.current || !touchEndX.current) return;
        const distance = touchStartX.current - touchEndX.current;
        const isLeftSwipe = distance > minSwipeDistance;
        const isRightSwipe = distance < -minSwipeDistance;

        if (isLeftSwipe) {
            nextSlide();
        } else if (isRightSwipe) {
            prevSlide();
        }
    }

    useEffect(() => {
        const handleKeyDown = (event) => {
            if (event.key === 'ArrowLeft') prevSlide();
            if (event.key === 'ArrowRight') nextSlide()
        };

        window.addEventListener('keydown', handleKeyDown);
        return () => {
            window.removeEventListener('keydown', handleKeyDown);
        };
    }, [nextSlide, prevSlide]);

    const currentCertifications = certificaciones[currentIndex];

    const variants = {
        enter: (direction) => ({
            x: direction === "right" ? 100 : -100,
            opacity: 0,
        }),
        center: {
            x: 0,
            opacity: 1,
        },
        exit: (direction) => ({
            x: direction === "right" ? -100 : 100,
            opacity: 0,
        }),
    };

    return (
        <motion.section
            className={style.container}
            initial={{ opacity: 0, y: 20 }}
            animate={{ opacity: 1, y: 0 }}
            exit={{ opacity: 0, y: -20 }}
            transition={{ duration: 0.4, ease: "easeOut" }}
        >
            <h1>Certificaciones</h1>
            <div className={style.certificationsContainer}>
                <div className={style.arrowButton}>
                    <IoIosArrowBack size={40} onClick={prevSlide} style={{ cursor: 'pointer' }} />
                </div>
                <figure className={style.imageContainer}
                    onTouchStart={onTouchStart}
                    onTouchMove={onTouchMove}
                    onTouchEnd={onTouchEnd}
                >
                    <AnimatePresence mode="wait" custom={direction}>
                        <motion.img
                            key={currentCertifications.id}
                            src={currentCertifications.url}
                            alt={currentCertifications.title}
                            custom={direction}
                            variants={variants}
                            initial="enter"
                            animate="center"
                            exit="exit"
                            transition={{ duration: 0.4, ease: "easeOut" }}
                        />
                    </AnimatePresence>
                </figure>
                <div className={style.arrowButton}>
                    <IoIosArrowForward size={40} onClick={nextSlide} style={{ cursor: 'pointer' }} />
                </div>

            </div>
            <div className={style.infoContainer}>
                <h2>{currentCertifications.title}</h2>
                <p>{currentCertifications.description}</p>
            </div>

            <div className={style.indexContainer}>
                {certificaciones.map((_, index) => (
                    <button
                        key={index}
                        onClick={() => setCurrentIndex(index)}
                        className={`${style.indexButton} ${index === currentIndex ? style.indexTrue : style.indexFalse
                            }`}
                    />
                ))}
            </div>
            <div className={style.leggend}>
                ← <IoIosInformationCircleOutline /> Desliza para navegar →
            </div>
        </motion.section>
    )
}