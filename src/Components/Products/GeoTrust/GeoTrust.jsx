import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import Allproducts from '../../../Requests/Allproducts';
import GeoTrustTabs from './GeoTrustTabs';
import { Helmet } from 'react-helmet';
import { CACHE_DURATION } from '../../../Requests/request';

export default function GeoTrust() {
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

    const filteredProducts = productList.length > 0 ? productList.filter(product => product.brand === "geotrust") : []

    return (
        <>
            <Helmet>
                <meta name="description" content="SSL-сертификаты от GeoTrust обеспечивают надежную защиту вашего веб-сайта. Обеспечьте безопасное соединение с вашими посетителями и повысьте доверие к вашему онлайн бизнесу." />
                <meta property="og:description" content="SSL-сертификаты от GeoTrust обеспечивают надежную защиту вашего веб-сайта. Обеспечьте безопасное соединение с вашими посетителями и повысьте доверие к вашему онлайн бизнесу." />
                <meta name="keywords" content="SSL, сертификаты, GeoTrust, безопасность, онлайн безопасность, веб-сайт, защита данных, безопасное соединение, шифрование, онлайн бизнес" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="SSL-сертификатов от GeoTrust" />
                <meta property="og:site_name" content="SSL Certificate" />
                <meta property="og:url" content="https://sslcertificate.uz" />
                <title>SSL-сертификатов от GeoTrust</title>
            </Helmet>
            <div className='certificates'>
                <div className="cert-txt">
                    <h1 title='SSL-сертификаты GeoTrust'>SSL-сертификаты GeoTrust</h1>
                    <p className='cert-txt-item'>
                        <span>
                            <svg viewBox="0 0 33 33" className='geotrust-svg'>
                                <use xlinkHref='/skin.svg#geotrust-symbol'></use>
                            </svg>
                        </span>
                        <span>GeoTrust принадлежит компании DigiCert CA и обслуживает более 110 000 клиентов по всему миру. Это поставщик решений мирового класса в области веб-безопасности для всех сертификатов SSL/TLS. Каждый цифровой сертификат использует высокоуровневый хэш-алгоритм SHA-256 с размером ключа 2048 бит. SSL-сертификаты GeoTrust идеально совместимы со всеми современными браузерами и мобильными устройствами. При каждом заказе вы получаете динамический логотип с печатью сайта для привлечения ваших потенциальных клиентов. Мы предоставляем все стандартные возможности.</span>
                    </p>
                    <div className='tabs'>
                        {
                            loading ? (
                                <div className="loader">
                                    <Circles height="80" width="80" color="#dc8510" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
                                </div>
                            ) : (
                                filteredProducts.length > 0 && <GeoTrustTabs filteredProducts={filteredProducts} />
                            )
                        }
                    </div>
                </div>
            </div >
        </>
    );
}