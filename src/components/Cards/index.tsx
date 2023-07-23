import {ICountries} from "../../interface/ICountries";
import styles from "./Cards.module.scss";

interface CardsProps {
    data: ICountries[];
}

export default function Cards(props: CardsProps){
    return (
        <section className={styles.container}>
            <section className={styles.container__section}>
                {
                    props.data.map((element: ICountries) => {
                        return(
                            <div key={element.name.common} className={styles.container__section_div}>
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
                        )
                    })
                }
            </section>
        </section>
    )
}