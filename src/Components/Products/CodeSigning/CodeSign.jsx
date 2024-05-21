import React, { useEffect, useState } from 'react';
import Allproducts from '../../../Requests/Allproducts';
import { Circles } from 'react-loader-spinner';
import CS1 from './CS1';
import { Helmet } from 'react-helmet';
import { CACHE_DURATION } from '../../../Requests/request.js';


export default function CodeSign() {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    const fetchProducts = async () => {
        setLoading(true);
        const currentProducts = await Allproducts.getProducts();
        setProductList(currentProducts);
        localStorage.setItem('productList', JSON.stringify(currentProducts));
        localStorage.setItem('lastFetchTime', Date.now());
        setLoading(false);
    };

    useEffect(() => {
        const loadProducts = async () => {
            const cachedProducts = localStorage.getItem('productList');
            const cachedTime = localStorage.getItem('lastFetchTime');

            if (cachedProducts && cachedTime && (Date.now() - cachedTime < CACHE_DURATION)) {
                setProductList(JSON.parse(cachedProducts));
                setLoading(false);
            } else {
                await fetchProducts();
            }
        };
        loadProducts();
        const interval = setInterval(async () => {
            await fetchProducts();
        }, CACHE_DURATION);

        return () => clearInterval(interval);
    }, []);

    return (
        <>
            <Helmet>
                <meta name="description" content="Получите профессиональные сертификаты подписи кода от ведущих поставщиков по выгодным ценам. Обеспечьте безопасность вашего программного обеспечения и приложений." />
                <meta name="keywords" content="сертификаты подписи кода, подпись кода, безопасность приложений, кодовые сертификаты, кодовая подпись, Code Signing Ssl, Code Signing Certificate" />
                <meta property="og:description" content="Получите профессиональные сертификаты подписи кода от ведущих поставщиков по выгодным ценам. Обеспечьте безопасность вашего программного обеспечения и приложений." />
                <meta property="og:locale" content="uz_RU" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Сертификаты подписи кода" />
                <meta property="og:site_name" content="SSL Certificate" />
                <meta property="og:url" content="https://sslcertificate.uz" />
                <title>Сертификаты подписи кода</title>
            </Helmet>
            <div className='certificates'>
                {
                    loading ? (
                        <div className="loader">
                            <Circles height="80" width="80" color="#dc8510" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
                        </div>
                    ) : (
                        <CS1 productList={productList} />
                    )
                }
            </div>
        </>
    );
}