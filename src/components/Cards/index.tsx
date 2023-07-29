import {ICountries} from "../../interface/ICountries";
import styles from "./Cards.module.scss";
import {IStyle} from "../../interface/IStyle";
import {Link} from "react-router-dom";

interface CardsProps {
    data: ICountries[];
}

export interface blendedInterface extends CardsProps, IStyle {}

export default function Cards(props: blendedInterface){
    return (
        <section className={styles.container}>
            <section className={styles.container__section}>
                {
                    props.data.map((element: ICountries, index: number) => {
                        return(
                            <Link to={`/country/${element.name.common}`} className={styles.container__section_empty} key={`${element.name.common}`}>
                                <div key={`${element.name.common}`} className={` ${styles.mobile_container__section} ${props.darkMode ? styles.container__section_div_dark_card : styles.container__section_div}`}>
                                    <div className={styles.container__section_div_div}>
                                        <img src={element.flags.png} alt={element.name.official} className={styles.container__section_div_div_img}/>
                                    </div>
                                    <h2 className={styles.container__section_div_title}>{element.name.common}</h2>
                                    <div className={styles.container__section_div_desc}>
                                        <h3 className={styles.container__section_div_desc_title}>Population: <span className={styles.container__section_div_desc_info}>{element.population.toLocaleString('pt-br')}</span></h3>
                                        <h3 className={styles.container__section_div_desc_title}>Region: <span className={styles.container__section_div_desc_info}>{element.region}</span></h3>
                                        <h3 className={styles.container__section_div_desc_title}>Capital: <span className={styles.container__section_div_desc_info}>{element.capital}</span></h3>
                                    </div>
                                </div>
                            </Link>
                        )
                    })
                }
            </section>
        </section>
    )
}