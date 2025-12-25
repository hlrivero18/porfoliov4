import style from "./loader.module.css"
import { motion } from "framer-motion";
function Loader() {
    return (
        <motion.div 
        className={style.container}
        initial={{ opacity: 1 }}
        animate={{ opacity: 1 }}
        exit={{ opacity: 0 }}
        transition={{ duration: 0.4, ease: "easeInOut" }}
        >
            <span className={style.spinner}></span>
        </motion.div>
    );
}

export default Loader;
