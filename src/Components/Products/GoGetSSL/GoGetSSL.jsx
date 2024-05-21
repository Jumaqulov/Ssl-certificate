import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner'
import { RiLock2Line } from "react-icons/ri";
import GoGetSslTabs from './GoGetSslTabs';
import Allproducts from '../../../Requests/Allproducts';
import { Helmet } from 'react-helmet';
import { CACHE_DURATION } from '../../../Requests/request';


export default function GoGetSSL() {
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

    const filteredProducts = productList.length > 0 ? productList.filter(digicert => {
        return digicert.brand === "comodo_ggssl";
    }) : [];
    return (
        <>
            <Helmet>
                <meta name="description" content="SSL-сертификаты от GoGetSSL обеспечивают надежную защиту вашего веб-сайта. Защитите данные ваших пользователей и обеспечьте безопасное соединение для вашего онлайн бизнеса." />
                <meta property="og:description" content="SSL-сертификаты от GoGetSSL обеспечивают надежную защиту вашего веб-сайта. Защитите данные ваших пользователей и обеспечьте безопасное соединение для вашего онлайн бизнеса." />
                <meta name="keywords" content="SSL, сертификаты, GoGetSSL, безопасность, онлайн безопасность, веб-сайт, защита данных, безопасное соединение, шифрование, онлайн бизнес" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Сертификаты от GoGetSSL" />
                <meta property="og:site_name" content="SSL Certificate" />
                <meta property="og:url" content="https://sslcertificate.uz" />
                <title>Сертификаты от GoGetSSL</title>
            </Helmet>
            <div className='certificates'>
                <div className="cert-txt">
                    <h1 title='GoGetSSL®'>GoGetSSL®</h1>
                    <p className='cert-txt-item'>
                        <span>
                            <RiLock2Line className='gogetssl-svg' />
                        </span>
                        <span>GoGetSSL® - это не просто магазин, где вы можете приобрести дешевые SSL-сертификаты от ведущих центров сертификации. Это молодой бренд цифровых сертификатов, стратегическим партнером которого является Sectigo CA. Мы предлагаем все типы сертификатов, включая однодоменные, wildcard SSL, мультидоменные (SAN) и сертификаты с подписью кода. Сертификатам, выпущенным нашим брендом, доверяют 99,6% браузеров настольных компьютеров и мобильных устройств. Каждый SSL-сертификат поставляется с бесплатным неограниченным количеством перевыпусков, бесплатным лицензированием серверов и алгоритмом шифрования ECC/RSA. Вы можете запросить полный гарантированный возврат средств в течение 30 дней с момента заказа.</span>
                    </p>
                    <div className='tabs'>
                        {
                            loading ? (
                                <div className="loader">
                                    <Circles height="80" width="80" color="#dc8510" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
                                </div>
                            ) : (
                                filteredProducts.length > 0 && <GoGetSslTabs filteredProducts={filteredProducts} />
                            )
                        }
                    </div>
                </div>
            </div >
        </>
    )
}