import Header from "../../components/Header";
import Filters from "../../components/Filters";
import {AxiosError, AxiosResponse} from "axios";
import React, {useEffect, useState} from "react";
import {ICountries} from "../../interface/ICountries";
import Cards from "../../components/Cards";
import styles from "./Home.module.scss";
import http from "../../environments/environment"

export default function Home( ){
    const [countries, setCountries] = useState<ICountries[]>([]);
    const [darkMode, setDarkMode] = useState(false)
    const [search, setSearch] = useState('')
    const [filter, setFilter] = useState('')

    async function getAllCountries() {
        await http.get(`all?fields=name,flags,capital,population,region,subregion,tld,currencies,languages`)
            .then((res: AxiosResponse<ICountries[]>) => {
                setCountries(res.data)})
            .catch((error: AxiosError) => console.log(error))
    }

    async function getCountriesForRegion(){
        if(filter !== ''){
            await http.get(`region/${filter.toLowerCase()}`).then((res: AxiosResponse<ICountries[]>) => {
                setCountries(res.data)
            } ).catch((error: AxiosError) => console.log(error))
        }
    }

    useEffect(() => {
        getAllCountries();
    }, [])

    useEffect(() => {
        getCountriesForRegion();
        // eslint-disable-next-line react-hooks/exhaustive-deps
    }, [filter]);

    const lowerSearch: string = search.toLowerCase()
    const countriesFilter = countries.filter((element) => element.name.common.toLowerCase().includes(lowerSearch))

    return(
        <>
            <Header
                darkMode={darkMode}
                setDarkMode={setDarkMode}
            />
            <main className={`${darkMode ? styles.dark_mode_home : ""}`}>
                <Filters
                    darkMode={darkMode}
                    setDarkMode={null}
                    search={setSearch}
                    value={search}
                    filter={setFilter}
                    valueFilter={filter}
                />
                <Cards
                    data={countriesFilter}
                    darkMode={darkMode}
                    setDarkMode={null}
                />
            </main>
        </>
    )
}