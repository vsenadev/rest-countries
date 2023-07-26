import Header from "../../components/Header";
import Filters from "../../components/Filters";
import axios, {AxiosError, AxiosResponse} from "axios";
import React, {useEffect, useState} from "react";
import {ICountries} from "../../interface/ICountries";
import Cards from "../../components/Cards";
import styles from "./Home.module.scss";

export default function Home( ){
    const [countries, setCountries] = useState<ICountries[]>([]);
    const [darkMode, setDarkMode] = useState(false)

    async function getAllCountries() {
        await axios.get(`https://restcountries.com/v3.1/all?fields=name,flags,capital,population,region,subregion,tld,currencies,languages`)
            .then((res: AxiosResponse<any, any>) => {
                setCountries(res.data)})
            .catch((error: AxiosError) => console.log(error))
    }

    useEffect(() => {
        getAllCountries();
    }, [])

    return(
        <>
            <Header
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
            <main className={`${darkMode ? styles.dark_mode_home : ""}`}>
                <Filters
                    darkMode={darkMode}
                    setDarkMode={null}/>
                <Cards
                    data={countries}
                    darkMode={darkMode}
                    setDarkMode={null}
                />
            </main>
        </>
    )
}