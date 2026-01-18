import foot from "../../assets/foot.png"
import { useSelector } from "react-redux"
import style from "./footer.module.css"
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Footer(){
    const menu = useSelector(state => state.menu)
    

    return(
        <footer className={style.container}>
            <div className={style.listName}>
                <ul className={style.contact}>
                    <h1>Contacto</h1>
                    <li>
                         <a href="https://www.linkedin.com/in/hector-luis-rivero-311578260/" target="_blank"><span><FaLinkedinIn/></span> LinkedIn</a>
                    </li>
                    <li>
                        <a href="mailto:hectorluisrivero14@gmail.com"><span><IoIosMail/></span> Mail</a>
                    </li>
                    <li>
                        <a href="https://github.com/hlrivero18" target="_blank"><span><FaGithub/></span> Github</a>
                    </li>
                </ul>                
                <ul>
                    <h1>Fuentes</h1>
                    <li>
                        <a href="https://portafolio-v3-sigma.vercel.app/" target="_blank">PortfolioV3</a>
                    </li>
                    <li>
                        <a href="https://portafolio-v2-blue.vercel.app/" target="_blank">PortfolioV2</a>
                    </li>
                    <li>
                        <a href="https://www.figma.com/design/WwtiUDur6Lv20yckpmT9P6/Portfolio-v4?node-id=0-1&p=f&t=Z8Ync83A86dqHwnf-0" target="_blank">Figma</a>
                    </li>
                </ul>
                <ul className={style.menu}>
                    <h1>Menú</h1>
                    {menu.map((item, index) => (
                        <li key={index}>
                            <a href={item.route}>{item.name}</a>
                        </li>
                    ))}
                </ul>
            </div>
            <figure className={style.footerImg}>
                <img src={foot} alt="imagen de pie de pagina" />
            </figure>
        </footer>
    )

}
export default Footer