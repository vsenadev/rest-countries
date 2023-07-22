import React from 'react';
import styles from './Filters.module.scss';
import regions from '../../assets/Data/regions.json';

export default function Filters() {
    return (
        <section className={styles.container}>
            <div className={styles.container__div}>
                <input type="text" name="search" id="search" placeholder="Search for a country..." className={styles.container__div_input} />
                <div>
                    <select className="chakra-select Filters_container__div_select__7Juk4 css-1ik61og" id="select" name="select" defaultValue="">
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
