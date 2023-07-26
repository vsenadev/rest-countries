import React from 'react';
import styles from './Filters.module.scss';
import regions from '../../assets/Data/regions.json';
import {IStyle} from "../../interface/IStyle";

export default function Filters(props: IStyle) {
    return (
        <section className={styles.container}>
            <div className={styles.container__div}>
                <input type="text" name="search" id="search" placeholder="Search for a country..." className={`${props.darkMode ? styles.container__div_input_dark : styles.container__div_input}`} />
                <div>
                    <select className={`${props.darkMode ? styles.select_dark : "chakra - select Filters_container__div_select__7Juk4 css-1ik61og"}`} id="select" name="select" defaultValue="">
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
