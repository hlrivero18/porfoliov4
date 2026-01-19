import About from "./aboutme"
import style from "./home.module.css"
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";
import { useLocation } from "react-router-dom";
import { useEffect } from "react";

function Home() {
    const location = useLocation();


    useEffect(() => {
        if (location.state?.scrollTo === "about") {
            const el = document.getElementById("about");
            if (!el) return;

            // esperamos al layout final (clave)
            requestAnimationFrame(() => {
                requestAnimationFrame(() => {
                    el.scrollIntoView({
                        behavior: "smooth",
                        block: "start",
                    });
                });
            });

            // limpiamos el state para que no se repita
            window.history.replaceState({}, document.title);
        }
    }, [location]);


    return (
        <div>
            <div className={style.container}>
                <h1>
                    Hola, soy<br />
                    Desarrollador<br />
                    Web <span>
                        <ul>
                            <li>
                                <a href="https://github.com/hlrivero18" target="_blank"><FaGithub /></a>
                            </li>
                            <li>
                                <a href="https://www.linkedin.com/in/hector-luis-rivero-311578260/" target="_blank"><FaLinkedinIn /></a>
                            </li>
                            <li>
                                <a href="mailto:hectorluisrivero14@gmail.com"><IoIosMail /></a>
                            </li>
                        </ul>
                    </span>
                </h1>
            </div>
            <About></About>
        </div>

    )
}
export default Home