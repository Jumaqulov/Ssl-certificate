import React, { useEffect, useState } from 'react';
import { baseUrl, apiToken } from '../../../Requests/repository';
import axios from 'axios';

export default function Digicert() {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(false);

    var config = {
        method: 'get',
        maxBodyLength: Infinity,
        url: `${baseUrl}/products?auth_key=${apiToken}`,
        headers: {}
    };

    axios(config)
        .then(function (response) {
            console.log(JSON.stringify(response.data));
        })
        .catch(function (error) {
            console.log(error);
        });

    useEffect(() => {
        document.title = 'SSL-сертификаты DigiCert | Сертификаты GoGetSSL®';
    }, []);

    return (
        <div>Digicert</div>
    );
}
