import style from "./navbar.module.css"
import logo from "../../assets/logo.png"

function NavBar(){
    const li = ["Proyectos", "Experiencia", "Certificaciones"]
    return(
        <nav className={style.navBar}>
            <a href="/" className={style.logo}>
                <img src={logo} alt="home" />
            </a>
            <div className={style.menu}>
                <ul>
                    {li.map((e, i)=>{
                        return(
                            <li key={i}>
                                {e}
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className={style.aboutMe}>
                <a href="#about">Acerca de mi</a>
            </div>
        </nav>
    )
}

export default NavBar