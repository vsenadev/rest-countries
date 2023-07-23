import styles from "./Header.module.scss";
import {ReactComponent as DarkModeLogo} from "../../assets/images/moon-svgrepo-com.svg";

export default function Header(){
    return(
        <header>
            <section className={styles.container}>
                <h1 className={styles.container__title}>Where in the world ?</h1>
                <div className={styles.container__div}>
                    <DarkModeLogo />
                    <span>Dark Mode</span>
                </div>
            </section>
        </header>
    )
}