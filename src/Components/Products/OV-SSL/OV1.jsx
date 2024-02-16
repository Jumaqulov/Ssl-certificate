import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Oval } from 'react-loader-spinner';
import OV2 from './OV2';

export default function OV1({ productList }) {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const requests = productList.map(product =>
                    axios.get(`https://my.gogetssl.com/api/products/details/${product.id}?auth_key=3e317d975d4cd3206b13a56167d8bbeaac41a872`)
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
            fetchData();
        }
    }, [productList]);

    const dv = results.filter(dv => dv.product_type === 'OV');

    return loading ? (
        <div className="loader">
            <Oval height="80" width="80" color="#4fa94d" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
        </div>
    ) : (
        <OV2 dv={dv} productList={productList} />
    );
}