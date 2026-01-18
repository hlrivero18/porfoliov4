import About from "./aboutme"
import style from "./home.module.css"
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Home(){
    return(
        <div>
           <div className={style.container}>
                <h1>
                    Hola, soy<br/>
                    Desarrollador<br/>
                    Web <span>
                            <ul>
                                <li>
                                    <a href="https://github.com/hlrivero18" target="_blank"><FaGithub/></a>
                                </li>
                                <li>
                                    <a href="https://www.linkedin.com/in/hector-luis-rivero-311578260/" target="_blank"><FaLinkedinIn/></a>
                                </li>
                                <li>
                                    <a href="mailto:hectorluisrivero14@gmail.com"><IoIosMail/></a>
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