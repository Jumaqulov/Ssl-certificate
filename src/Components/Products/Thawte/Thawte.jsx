import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import Allproducts from '../../../Requests/Allproducts';
import ThawteTab from './ThawteTab';
import { Helmet } from 'react-helmet';
import { CACHE_DURATION } from '../../../Requests/request';

export default function Thawte() {
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

    const filteredProducts = productList.filter(product => product.brand === "thawte");

    return (
        <>
            <Helmet>
                <meta name="description" content="SSL-сертификаты от Thawte обеспечивают надежную защиту вашего веб-сайта. Обеспечьте безопасное соединение с вашими посетителями и защитите данные вашего онлайн бизнеса." />
                <meta property="og:description" content="SSL-сертификаты от Thawte обеспечивают надежную защиту вашего веб-сайта. Обеспечьте безопасное соединение с вашими посетителями и защитите данные вашего онлайн бизнеса." />
                <meta name="keywords" content="SSL, сертификаты, Thawte, безопасность, онлайн безопасность, веб-сайт, защита данных, безопасное соединение, шифрование, онлайн бизнес" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Сертификаты от Thawte" />
                <meta property="og:site_name" content="SSL Certificate" />
                <meta property="og:url" content="https://sslcertificate.uz" />
                <title>Сертификаты от Thawte</title>
            </Helmet>
            <div className='certificates'>
                <div className="cert-txt">
                    <h1 title='SSL-сертификаты Thawte'>SSL-сертификаты Thawte</h1>
                    <p className='cert-txt-item'>
                        <span>
                            <svg className='thawte-svg' viewBox='0 0 32 32'>
                                <use xlinkHref='/skin.svg#thawte-symbol'></use>
                            </svg>
                        </span>
                        <span>Thawte - один из ведущих мировых центров сертификации, предлагающий различные решения в области безопасности. Мы предлагаем стандартные цифровые сертификаты, включая DV, OV, EV и Wildcard. Мы настоятельно рекомендуем использовать их продукты для наиболее надежных и профессиональных процедур проверки. Без сомнения, это самый быстрый способ получить организационный или расширенный сертификат SSL. В комплект каждого сертификата входит надежное шифрование, динамический логотип с печатью сайта для большего доверия посетителей, неограниченное количество перевыпусков и лицензирование сервера.</span>
                    </p>
                    <div className='tabs'>
                        {
                            loading ? (
                                <div className="loader">
                                    <Circles height="80" width="80" color="#dc8510" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
                                </div>
                            ) : (
                                filteredProducts.length > 0 && <ThawteTab filteredProducts={filteredProducts} />
                            )
                        }
                    </div>
                </div>
            </div >
        </>
    );
}