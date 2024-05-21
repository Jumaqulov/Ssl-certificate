import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import Allproducts from '../../../Requests/Allproducts';
import DV1 from './DV1';
import { Helmet } from 'react-helmet';
import { CACHE_DURATION } from '../../../Requests/request.js';

export default function DVSSL() {
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
                <meta name="description" content="SSL-сертификаты домена обеспечивают безопасное и защищенное соединение между вашим веб-сайтом и его посетителями. Получите надежные сертификаты для вашего домена и обеспечьте безопасность и доверие вашим пользователям." />
                <meta property="og:description" content="SSL-сертификаты домена обеспечивают безопасное и защищенное соединение между вашим веб-сайтом и его посетителями. Получите надежные сертификаты для вашего домена и обеспечьте безопасность и доверие вашим пользователям." />
                <meta name="keywords" content="SSL, сертификаты, домен, безопасность, онлайн безопасность, веб-сайт, защита данных, безопасное соединение, шифрование, онлайн бизнес" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="SSL-сертификаты домена" />
                <meta property="og:site_name" content="SSL Certificate" />
                <meta property="og:url" content="https://sslcertificate.uz" />
                <title>SSL-сертификаты домена</title>
            </Helmet>
            <div className='certificates'>
                {
                    loading ? (
                        <div className="loader">
                            <Circles height="80" width="80" color="#dc8510" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
                        </div>
                    ) : (
                        <DV1 productList={productList} />
                    )
                }
            </div>
        </>
    );
}