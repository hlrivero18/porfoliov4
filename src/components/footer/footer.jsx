import foot from "../../assets/foot.png"
import { useSelector } from "react-redux"
import style from "./footer.module.css"
import { FaGithub, FaLinkedinIn } from "react-icons/fa";
import { IoIosMail } from "react-icons/io";

function Footer(){
    const menu = useSelector(state => state.menu)
    const contact = useSelector(state => state.contact)
    

    return(
        <footer className={style.container}>
            <div className={style.listName}>
                <ul className={style.contact}>
                    <h1>Contacto</h1>
                    <li>
                         <a href=""><span><FaLinkedinIn/></span> LinkedIn</a>
                    </li>
                    <li>
                        <a href=""><span><IoIosMail/></span> Mail</a>
                    </li>
                    <li>
                        <a href=""><span><FaGithub/></span> Github</a>
                    </li>
                </ul>                
                <ul>
                    <h1>Fuentes</h1>
                    <li>
                        <a href="">PortfolioV3</a>
                    </li>
                    <li>
                        <a href="">PortfolioV2</a>
                    </li>
                    <li>
                        <a href="">Figma</a>
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