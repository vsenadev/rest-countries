import styles from "./Header.module.scss";
import {ReactComponent as DarkModeLogo} from "../../assets/images/moon-svgrepo-com.svg";
import {IStyle} from "../../interface/IStyle";

export default function Header(props: IStyle){
    function changeMode(){
        // @ts-ignore
        props.darkMode ? props.setDarkMode(false) : props.setDarkMode(true)
    }

    return(
        <header className={`${props.darkMode ? styles.dark_mode_container : ''}`}>
            <section className={`${styles.container} ${styles.mobile__container} ${props.darkMode ? styles.dark_mode : ''}`}>
                <h1 className={styles.container__title}>Where in the world ?</h1>
                <div className={styles.container__div} onClick={() => changeMode()}>
                    <DarkModeLogo fill={props.darkMode ? 'white' : 'black'} />
                    <span>Dark Mode</span>
                </div>
            </section>
        </header>
    )
}