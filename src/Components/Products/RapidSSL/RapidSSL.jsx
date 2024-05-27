import React, { useEffect, useState } from 'react';
import { TbLetterR } from "react-icons/tb";
import { Circles } from 'react-loader-spinner';
import Allproducts from '../../../Requests/Allproducts';
import RapidSslTab from './RapidSslTab';
import { Helmet } from 'react-helmet';
import { CACHE_DURATION } from '../../../Requests/request.js';

export default function RapidSSL() {
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

    const filteredProducts = productList.filter(product => product.brand === "rapidssl");

    return (
        <>
            <Helmet>
                <meta name="description" content="SSL-сертификаты от RapidSSL обеспечивают надежную защиту вашего веб-сайта. Обеспечьте безопасное соединение с вашими посетителями и защитите данные вашего онлайн бизнеса." />
                <meta property="og:description" content="SSL-сертификаты от RapidSSL обеспечивают надежную защиту вашего веб-сайта. Обеспечьте безопасное соединение с вашими посетителями и защитите данные вашего онлайн бизнеса." />
                <meta name="keywords" content="SSL, сертификаты, RapidSSL, безопасность, онлайн безопасность, веб-сайт, защита данных, безопасное соединение, шифрование, онлайн бизнес" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Сертификаты от RapidSSL" />
                <meta property="og:site_name" content="SSL Certificate" />
                <meta property="og:url" content="https://sslcertificate.uz" />
                <title>Сертификаты от RapidSSL</title>
            </Helmet>
            <div className='certificates'>
                <div className="cert-txt">
                    <h1 title='Сертификаты RapidSSL'>Сертификаты RapidSSL</h1>
                    <p className='cert-txt-item'>
                        <span>
                            <TbLetterR className='rapidssl-svg' />
                        </span>
                        <span>RapidSSL - это опытный центр сертификации, специализирующийся в основном на SSL-сертификатах с проверкой доменов и предлагающий стандартные и Wildcard SSL-сертификаты. После приобретения компании Digicert CA в 2017 году RapidSSL усовершенствовал технологии и начал использовать современную инфраструктуру. Компания специализируется на SSL-шифровании для малого бизнеса и веб-сайтов с базовыми решениями безопасности. Sametime обладает сильной распознаваемостью браузеров, включая все мобильные устройства. Каждый цифровой сертификат поставляется с хэш-алгоритмом SHA256 с размером ключа 2048 бит, неограниченным количеством бесплатных перевыпусков.</span>
                    </p>
                    <div className='tabs'>
                        {
                            loading ? (
                                <div className="loader">
                                    <Circles height="80" width="80" color="#dc8510" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
                                </div>
                            ) : (
                                filteredProducts.length > 0 && <RapidSslTab filteredProducts={filteredProducts} />
                            )
                        }
                    </div>
                </div>
            </div >
        </>
    );
}