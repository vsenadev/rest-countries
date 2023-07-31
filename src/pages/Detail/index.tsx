import styles from "./Detail.module.scss";
import Header from "../../components/Header";
import {useNavigate, useParams} from "react-router-dom";
import {useEffect, useState} from "react";
import {ReactComponent as Back} from "../../assets/images/back-svgrepo-com.svg";
import BorderCountries from "./BorderCountries";
import http from "../../environments/environment";
import {AxiosError, AxiosResponse} from "axios";
import {ICountries} from "../../interface/ICountries";

export default function Detail(){
    const navigate = useNavigate();
    const { state } =  useParams();
    const { common} = useParams();
    const [ darkMode, setDarkMode] = useState(false);
    const [ country, setCountry ] = useState<ICountries[]>()

    async function getCountry(){
        await http.get(`name/${common?.toLowerCase()}`)
            .then((res: AxiosResponse) => {
                setCountry(res.data)
            })
            .catch((error: AxiosError) => console.log(error))
    }

    function backForHome(){
        navigate(-1)
    }


    useEffect(() => {
        state === 'true' ? setDarkMode(true) : setDarkMode(false)
    }, [state])

    useEffect(() => {
        getCountry();
    }, [common]);

    return(
        <>
            <Header
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
            <section className={styles.container}>
                {
                    country?.map((element: ICountries) => {
                        const coin: [] | any  = Object.values(element.currencies);
                        const languages: [] | any = Object.values(element.languages);
                        return(
                            <>
                                <div className={styles.container__back} onClick={() => backForHome()}>
                                    <Back />
                                    <span>Back</span>
                                </div>
                                <div className={styles.container__content}>
                                    <div className={styles.container__content_image}>
                                        <img src={element.flags.png} alt="Imagem país" className={styles.container__content_image_img}/>
                                    </div>
                                    <div className={styles.container__content_description}>
                                        <h1 className={styles.container__content_description_title}>{element.name.common}</h1>
                                        <div className={styles.container__content_description_div}>
                                            <span className={styles.container__content_description_div_title}>Native Name: <span className={styles.container__content_description_div_info}>{element.altSpellings[2]}</span></span>
                                            <span className={styles.container__content_description_div_title}>Population: <span className={styles.container__content_description_div_info}>{element.population.toLocaleString('pt-br')}</span></span>
                                            <span className={styles.container__content_description_div_title}>Region: <span className={styles.container__content_description_div_info}>{element.region}</span></span>
                                            <span className={styles.container__content_description_div_title}>Sub Region: <span className={styles.container__content_description_div_info}>{element.subregion}</span></span>
                                            <span className={styles.container__content_description_div_title}>Capital: <span className={styles.container__content_description_div_info}>{element.capital}</span></span>
                                            <span className={styles.container__content_description_div_title}>Top Level Domain: <span className={styles.container__content_description_div_info}>{element.tld}</span></span>
                                            <span className={styles.container__content_description_div_title}>Currencies: <span className={styles.container__content_description_div_info}>{coin[0]['name']}</span></span>
                                            <span className={styles.container__content_description_div_title}>Languages: {languages.map((value : string) => {return (<span className={styles.container__content_description_div_info}>{value}  </span>)})}</span>
                                        </div>
                                    </div>
                                    <BorderCountries  countries={element.borders}/>
                                </div>
                            </>
                        )
                    })
                }
            </section>
        </>
    )
}