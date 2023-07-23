import Header from "../../components/Header";
import Filters from "../../components/Filters";
import axios, {AxiosError, AxiosResponse} from "axios";
import React, {useEffect, useState} from "react";
import {ICountries} from "../../interface/ICountries";
import Cards from "../../components/Cards";

export default function Home( ){
    const [countries, setCountries] = useState<ICountries[]>([]);

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
            <Header/>
            <main>
                <Filters/>
                <Cards data={countries}/>
            </main>
        </>
    )
}