import React, { useEffect, useState } from 'react';
import axios from 'axios';
import CS2 from './CS2';
import { Circles } from 'react-loader-spinner';
import { CACHE_DURATION, Url } from '../../../Requests/request.js';

export default function CS1({ productList }) {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchData = async () => {
        setLoading(true);
        try {
            const requests = productList.map(product =>
                axios.get(`${Url}products/details/${product.id}`)
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
            } else {
                await fetchData();
            }
        };

        if (productList.length > 0) {
            loadResults();
            const interval = setInterval(async () => {
                await fetchData();
            }, CACHE_DURATION);

            return () => clearInterval(interval);
        }
    }, [productList]);

    const cs = results.filter(cs => cs.product_type === "code_signing");

    return loading ? (
        <div className="loader">
            <Circles height="80" width="80" color="#dc8510" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
        </div>
    ) : (
        <CS2 cs={cs} productList={productList} />
    );
}