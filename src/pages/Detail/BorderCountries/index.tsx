import styles from './BorderCountries.module.scss';
import {IStyle} from "../../../interface/IStyle";

interface IBorderCountries extends IStyle{
    countries: string[]
}

export default function BorderCountries(props: IBorderCountries){
    return(
        <>
            <div className={styles.container}>
                <h2 className={styles.container__title}>Border countries: </h2>
                <div className={styles.container__div}>
                    {
                        props.countries?.map((element: string) => {
                            return(
                                <span className={`${styles.container__div_card} ${props.darkMode ? styles.darkmode_container__div_card : ''} `}>{element}</span>
                            )
                        })
                    }
                </div>
            </div>
        </>
    )
}