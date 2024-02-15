import React, { useEffect, useState } from 'react'
import axios from 'axios';
import { Oval } from 'react-loader-spinner'
import DV2 from './DV2';

export default function DV1({ productList }) {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchByIds = async () => {
        setLoading(true)
        const fetchedResults = [];
        for (const product of productList) {
            try {
                const response = await axios.get(`https://my.gogetssl.com/api/products/details/${product.id}?auth_key=3e317d975d4cd3206b13a56167d8bbeaac41a872`);
                fetchedResults.push(response.data);
            } catch (error) {
                console.error(`Error fetching data for product ID ${product.id}:`, error);
            }
        }
        setResults(fetchedResults);
        setLoading(false)
    };

    const dv = results.filter(dv => {
        return dv.product_type === "DV"
    })

    useEffect(() => {
        if (productList.length > 0) {
            fetchByIds()
        }
    }, [productList]);
    return (
        loading ? (
            <div className="loader">
                <Oval height="80" width="80" color="#4fa94d" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
            </div>
        )
            :
            <DV2 dv={dv} />
    )
}