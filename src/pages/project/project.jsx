import style from "./project.module.css"
import { FaTools } from "react-icons/fa";
import botimg1 from "../../assets/project/bot/img1.png"
import pokemonimg1 from "../../assets/project/pokemon/img2.png"
import crudJavaimg1 from "../../assets/project/crudjava/img1.png"
import { IoIosInformationCircleOutline } from "react-icons/io";

function Project() {
    const projects = [
        {
            id: 1,
            title: "Bot de WhatsApp",
            techSkills: "Node.js, Builder-Bot",
            repo: "https://github.com/hlrivero18/bot_ws",
            deploy: "",
            description: `Desarrollé un bot de WhatsApp que hace una serie de preguntas y de acuerdo a cada respuesta el bot va generando
            carpetas en google drive y en el servidor donde se aloja, al finalizar los pasos el usuario sube un documento y/o imagen y este se
            guarda dentro de las carpetas creadas, esta aplicación esta hecha con nodejs con el framework builder-bot.`,
            img: [botimg1]
        },
        {
            id: 2,
            title: "Pokemon",
            techSkills: "React, Express, PostgreSQL",
            repo: "https://github.com/hlrivero18/pokemon",
            deploy: "https://pokemon-omega-three.vercel.app/",
            description: `Desarrolle una aplicación web que permite visualizar una galeria de pokemones con funcionalidades como paginado, creación de un pokemon, persistencia
            en la base de datos y la posibilidad de eliminarlo.`,
            img: [pokemonimg1]
        },
        {
            id: 3,
            title: "CRUD administrador de tareas",
            techSkills: "Java, Spring Boot, MySQL",
            repo: "https://github.com/hlrivero18?tab=repositories",
            deploy: "",
            description: `Esta aplicación backend demuestra las funcionalidades CRUD (Crear, Leer, Actualizar y Eliminar) de una aplicación de administración de tareas, 
            desarrollada en Java.`,
            img: [crudJavaimg1]
        },
    ];


    return (
        <section className={style.container}>
            <h1>Proyectos</h1>
            <p className={style.leggend}>
                <IoIosInformationCircleOutline /> Clickea el titulo del proyecto para ver el deploy o el repositorio.
            </p>
            <div className={style.cardContainer}>

                {projects.map((element, index) => {
                    return (
                        <div className={style.card} key={index} style={index % 2 === 0 ? { direction: "ltr" } : { direction: "rtl" }}>
                            <div className={style.textContainer}>
                                <a href={element.deploy ? element.deploy : element.repo} target="_blank">
                                    <h3>{element.title}</h3>
                                </a>
                                <p className={style.company}>
                                    {`Tech skills: ${element.techSkills}`}</p>
                                <p className={style.description}>
                                    {element.description} <br /><a className={style.repo} href={element.repo} target="_blank"> Click aqui para ir al repositorio.</a>
                                </p>
                            </div>
                            <figure className={style.logoContainer}>
                                {!element.img ? <FaTools /> : <img src={element.img} alt={element.techSkills} className={style.logo} />}
                            </figure>
                        </div>
                    )
                })}

            </div>
        </section>
    )

}
export default Project