import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { Circles } from 'react-loader-spinner';
import DV2 from './DV2';
import { Url, corsUrl, token } from '../../../Requests/request';

export default function DV1({ productList }) {
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    useEffect(() => {
        const fetchData = async () => {
            setLoading(true);
            try {
                const requests = productList.map(product =>
                    axios.get(`${corsUrl}/${Url}/products/details/${product.id}?auth_key=${token}`)
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

    const dv = results.filter(dv => dv.product_type === 'DV');

    return loading ? (
        <div className="loader">
            <Circles height="80" width="80" color="#dc8510" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
        </div>
    ) : (
        <DV2 dv={dv} productList={productList} />
    );
}