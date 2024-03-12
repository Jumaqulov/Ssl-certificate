import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Circles } from 'react-loader-spinner';
import EV2 from './EV2';

export default function EV1({ productList }) {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchByIds = async () => {
            setLoading(true);
            try {
                const requests = productList.map(product =>
                    axios.get(`https://cors.eu.org/https://my.gogetssl.com/api/products/details/${product.id}?auth_key=de3c2204dfbbddf09998894d39aa712746c12023`)
                );
                const responses = await Promise.all(requests);
                const fetchedResults = responses.map(response => response.data);
                setResults(fetchedResults);
            } catch (error) {
                console.error('Error fetching data:', error);
            }
            setLoading(false);
        };

        if (productList.length > 0) {
            fetchByIds();
        }
    }, [productList]);

    const ev = results.filter(result => result.product_type === 'EV');

    return loading ? (
        <div className="loader">
            <Circles height="80" width="80" color="#dc8510" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
        </div>
    ) : (
        <EV2 ev={ev} productList={productList} />
    );
}