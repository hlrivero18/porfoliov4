import style from "./navbar.module.css"
import logo from "../../assets/logo.png"
import { useState } from "react"
import { useSelector } from "react-redux"
import { Link } from "react-router-dom"

function NavBar() {
    const [openMenu, setOpenMenu] = useState(false)
    const routes = useSelector(state => state.menu)

    const handleChange = () => {
        setOpenMenu(prev => !prev);
    };

    return (
        <nav className={style.navBar}>
            <Link to="/" className={style.logo}>
                <img src={logo} alt="home" />
            </Link>
            <div className={style.menu}>
                <ul>
                    {routes.map((e, i) => {
                        return (
                            <li key={i}>
                                <Link to={e.route}>{e.name}</Link>
                            </li>
                        )
                    })}
                </ul>
            </div>
            <div className={style.aboutMe}>
                <Link to="/" state={{scrollTo: "about"}}>Acerca de mi</Link>
            </div>

            {/* Hamburger menu */}
            <label className={style.hamburger}>
                <input type="checkbox" checked={openMenu} onChange={handleChange} />
                <svg viewBox="0 0 32 32">
                    <path className={style.lineTopBottom + " " + style.line} d="M27 10 13 10C10.8 10 9 8.2 9 6 9 3.5 10.8 2 13 2 15.2 2 17 3.8 17 6L17 26C17 28.2 18.8 30 21 30 23.2 30 25 28.2 25 26 25 23.8 23.2 22 21 22L7 22"></path>
                    <path className={style.line} d="M7 16 27 16"></path>
                </svg>
            </label>

            <div className={`${style.fullMenu} ${openMenu ? style.show : ""}`}>
                <ul>
                    <li onClick={handleChange}>
                        <Link to="/#about">Acerca de mi</Link>
                    </li>
                    {routes.map((e, i) => (
                        <li key={i} onClick={handleChange}>
                            <Link to={e.route}>{e.name}</Link>
                        </li>
                    ))}
                </ul>
            </div>
        </nav>
    )
}

export default NavBar