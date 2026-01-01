import style from "./Experience.module.css"
import lKaizen from "../../assets/experience/KaiZen2b.png"
import lDia from "../../assets/experience/dia.png"
import { FaTools } from "react-icons/fa";

function Experience() {
    const experiences = [
        {
            id: 1,
            title: "Desarrollador Web",
            company: "Kaizen 2B",
            period: "Abril 2024 - actualidad",
            description: `Trabajo en el desarrollo y mantenimiento de aplicaciones web orientadas a la optimización de procesos internos
             y la creación de soluciones escalables. Participo activamente en la identificación y resolución de incidencias, 
             así como en la mejora continua del rendimiento y la calidad del código. Formo parte de equipos ágiles que trabajan bajo la metodología Scrum, 
             colaborando en la planificación, estimación y ejecución de tareas. Además, elaboro documentación técnica clara y detallada de vistas, modelos y endpoints, 
             contribuyendo a la mantenibilidad, escalabilidad y comprensión de los sistemas a largo plazo.`,
            img: lKaizen
        },
        {
            id: 2,
            title: "Inventarista",
            company: "Día Argentina S.A.",
            period: "Diciembre 2023 - Enero 2026",
            description: `Responsable de la gestión y control de inventarios mediante el uso de sistemas digitales,
             asegurando la precisión de los registros y la disponibilidad de productos. Realicé auditorías físicas periódicas y validaciones de stock, 
             detectando y corrigiendo inconsistencias. Trabajé en coordinación con distintas personas dentro del equipo para garantizar el conteo de mercaderías, 
             generando reportes actualizados que permitieron una mejor toma de decisiones operativas.`,
            img: lDia
        },
        {
            id: 3,
            title: "Soporte Técnico",
            company: "Independiente",
            period: "2014 - 2023",
            description: `Brindé soporte técnico integral, tanto de forma remota como presencial, 
            atendiendo a usuarios finales con distintos niveles de conocimiento tecnológico. Me especialicé en el diagnóstico y resolución de problemas de hardware y software, 
            así como en la instalación y configuración de sistemas operativos y aplicaciones. Además, acompañé y capacité a los usuarios en el uso adecuado de sus equipos, 
            priorizando una atención clara, empática y orientada a la solución efectiva de problemas.`
        }
    ];


    return (
        <section className={style.container}>
            <h1>Experiencia</h1>
            <div className={style.cardContainer}>

                {experiences.map((element, index) => {
                    return (
                        <>
                            {console.log(index)}
                            <div className={style.card}
                                key={index}
                                style={index % 2 === 0 ?
                                    { gridColumn: "1" } : { gridColumn: "2" }}
                            >
                                <h3>{element.title}</h3>
                                <p className={style.company}>{element.company} <br />{`(${element.period})`}</p>
                                <p className={style.description}>
                                    {element.description}
                                </p>
                            </div>
                            <div
                                style={index % 2 === 1 ?
                                    { gridColumn: "1" } : { gridColumn: "2" }}
                            >
                                {!element.img ? <FaTools /> : <img src={element.img} alt={element.company} className={style.logo} />}
                                {console.log(element.img)}
                            </div>
                        </>
                    )
                })}

                {/* <div>

                </div>
                <div className={style.card}>
                    <h3>Desarrollador Web</h3>
                    <p className={style.company}>Kaizen 2B <br />{"(Abril 2024 - actualidad)"}</p>
                    <p className={style.description}>
                        Desarrollo y mantenimiento de aplicaciones web orientadas
                        a procesos internos y soluciones escalables. Participación activa en la resolución de bugs,
                        optimización del rendimiento y mejora continua del código. Trabajo colaborativo en equipos ágiles
                        bajo la metodología Scrum, contribuyendo a la planificación y ejecución de tareas. Elaboración de documentación
                        técnica detallada de vistas, modelos y endpoints para facilitar la mantenibilidad y escalabilidad de los sistemas.
                    </p>
                </div> */}
            </div>
        </section>
    )

}
export default Experience