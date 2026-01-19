import profile from '../../assets/profile.png';
import style from "./about.module.css"
import { FaJs, FaPython, FaJava, FaReact, FaNodeJs, FaGitAlt } from "react-icons/fa";
import { TbBrandCSharp, TbBrandDjango } from "react-icons/tb";
import { SiExpress, SiMysql, SiPostgresql, SiFigma } from "react-icons/si";

function About(){
    return(
        <div className={style.container} id='about'>
            <div className={style.card}>
                
                <div>
                    <div className={style.headerRow}>
                        <figure className={style.profilePhone}>
                            <img src={profile} alt="Imagen de perfil" />
                        </figure> 
                        <h2>
                            Mi nombre es Héctor Rivero y soy...  
                        </h2>
                    </div>
                    <p className={style.description}>
                        Estudiante de la Tecnicatura en Inteligencia Artificial en la UNAHUR y 
                        desarrollador web autodidacta, con enfoque en la creación de soluciones tecnológicas, eficientes y escalables.
                        <br/><br/>
                        Tengo experiencia en desarrollo y mantenimiento de aplicaciones web, resolución de bugs, optimización de rendimiento y 
                        documentación técnica, trabajando bajo metodologías ágiles como Scrum. Además, mi experiencia en soporte técnico independiente 
                        fortaleció mis habilidades de comunicación y atención al cliente.
                        <br/><br/>
                        Busco seguir creciendo profesionalmente y aportar valor en proyectos que combinen tecnología, impacto real y aprendizaje continuo.

                        <br/><br/>                    
                    </p>
                    <p className={style.skills}>
                        Tech skills:
                        <span >
                            <FaJs/> <FaPython/> <FaJava/>  <TbBrandCSharp/> <TbBrandDjango/> <FaReact/> <FaNodeJs/> <SiExpress/> <SiMysql/> <SiPostgresql/>
                            <FaGitAlt/> <SiFigma/>
                        </span>

                    </p>
                </div>
                <figure className={style.profile}>
                    <img src={profile} alt="Imagen de perfil" />
                </figure> 
            </div>
            
        </div>
    )

}
export default About