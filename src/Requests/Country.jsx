import React, { useEffect, useState } from 'react'
import axios from 'axios'

export default function Country({ onChange }) {
    const [country, setCountry] = useState([])

    const handleCountryChange = (e) => {
        const selectedCountry = e.target.value;
        onChange({
            target: {
                name: 'country',
                value: selectedCountry,
            },
        });
    };

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
        <select onChange={handleCountryChange}>
            <option selected>-- Выберите страну --</option>
            {sortedCountries.map((country, index) => (
                <option key={index} value={country.name.common}>{country.name.common}</option>
            ))}
        </select>
    )
}