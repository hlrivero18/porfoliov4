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
                        Soy un desarrollador web ágil, autodidacta y responsable, apasionado por resolver
                        problemas mediante el uso de herramientas tecnológicas, me destaco por mi capacidad de resolución de problemas, 
                        autocrítica, gestión del tiempo, creatividad y trabajo en equipo, cualidades que aplico constantemente para ofrecer soluciones dinámicas y eficientes que mejoren la experiencia del cliente. <br/><br/>
                        Tengo experiencia como soporte técnico independiente, brindando soluciones
                        efectivas a usuarios, lo que me ha permitido fortalecer mis habilidades de comunicación y atención al cliente.<br/><br/>
                        Actualmente trabajo en un entorno laboral de desarrollo, donde participo en el diseño y mantenimiento de aplicaciones web, además de la resolución de bugs, optimización de rendimiento y documentación técnica de vistas, modelos y endpoints. También colaboro en el diseño de soluciones escalables bajo metodologías ágiles Scrum.
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