import React from 'react';
import styles from './Filters.module.scss';
import regions from '../../assets/Data/regions.json';
import {IStyle} from "../../interface/IStyle";

interface filters extends  IStyle{
    search: React.Dispatch<string>,
    value: string,
    filter: React.Dispatch<string>,
    valueFilter: string
}

export default function Filters(props: filters) {
    return (
        <section className={styles.container}>
            <div className={styles.container__div}>
                <input
                    type="text"
                    name="search"
                    id="search"
                    placeholder="Search for a country..."
                    value={props.value}
                    onChange={(event: any) => props.search(event.target.value)}
                    className={`${props.darkMode ? styles.container__div_input_dark : styles.container__div_input}`}
                />
                <div>
                    <select className={`${props.darkMode ? styles.select_dark : "chakra - select Filters_container__div_select__7Juk4 css-1ik61og"}`} id="select" name="select" value={props.valueFilter} onChange={(event) => props.filter(event.target.value)}>
                        <option value="" hidden={true}>Filter by region</option>
                        {regions.region.map((region: string) => (
                            <option key={region} value={region}>
                                {region}
                            </option>
                        ))}
                    </select>
                </div>
            </div>
        </section>
    );
}
