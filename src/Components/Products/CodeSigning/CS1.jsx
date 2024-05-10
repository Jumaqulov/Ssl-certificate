import React, { useEffect, useState } from 'react'
import { Url, corsUrl, token } from '../../../Requests/request';
import axios from 'axios';
import CS2 from './CS2';
import { Circles } from 'react-loader-spinner';

export default function CS1({ productList }) {
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

    const cs = results.filter(cs => cs.product_type === "code_signing");

    return loading ? (
        <div className="loader">
            <Circles height="80" width="80" color="#dc8510" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
        </div>
    ) : (
        <CS2 cs={cs} productList={productList} />
    );
}