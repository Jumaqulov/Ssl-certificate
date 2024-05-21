import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Circles } from 'react-loader-spinner';
import OV2 from './OV2';
import { Url, CACHE_DURATION } from '../../../Requests/request';

export default function OV1({ productList }) {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async (productList) => {
        try {
            const requests = productList.map(product =>
                axios.get(`${Url}/products/details/${product.id}`)
            );
            const responses = await Promise.all(requests);
            const fetchedResults = responses.map(response => response.data);
            setResults(fetchedResults);
            localStorage.setItem('results', JSON.stringify(fetchedResults));
            localStorage.setItem('resultsFetchTime', Date.now());
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
    };

    useEffect(() => {
        const loadResults = async () => {
            const cachedResults = localStorage.getItem('results');
            const cachedTime = localStorage.getItem('resultsFetchTime');

            if (cachedResults && cachedTime && (Date.now() - cachedTime < CACHE_DURATION)) {
                setResults(JSON.parse(cachedResults));
                setLoading(false);
            } else if (productList.length > 0) {
                setLoading(true);
                await fetchData(productList);
            }
        };
        loadResults();
        const interval = setInterval(async () => {
            if (productList.length > 0) {
                await fetchData(productList);
            }
        }, CACHE_DURATION);

        return () => clearInterval(interval);
    }, [productList]);

    const dv = results.filter(dv => dv.product_type === 'OV');

    return loading ? (
        <div className="loader">
            <Circles height="80" width="80" color="#dc8510" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
        </div>
    ) : (
        <OV2 dv={dv} />
    );
}