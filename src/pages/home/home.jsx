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
                                <li><FaGithub/></li>
                                <li><FaLinkedinIn/></li>
                                <li><IoIosMail/></li>
                            </ul>
                         </span>
                </h1>
            </div>
            <About></About>  
        </div>
       
    )
}
export default Home