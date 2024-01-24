import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Country() {
    const [country, setCountry] = useState([])

    useEffect(() => {
        const fetchData = async () => {
            try {
                const response = await axios.get('https://restcountries.com/v3.1/all');
                setCountry(response.data);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
        };

        fetchData();
    }, []);

    const sortedCountries = country.sort((a, b) => {
        const nameA = a.name.common.toUpperCase();
        const nameB = b.name.common.toUpperCase();
        if (nameA < nameB) return -1;
        if (nameA > nameB) return 1;
        return 0;
    });
    return (
        <select>
            <option selected value="">-- Select Country --</option>
            {sortedCountries.map((country, index) => (
                <option key={index}>{country.name.common}</option>
            ))}
        </select>
    )
}