import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner'
import Allproducts from '../../../Requests/Allproducts';
import SectigoTab from './SectigoTab';
import { Helmet } from 'react-helmet';
import { CACHE_DURATION } from '../../../Requests/request.js';

export default function Sectigo() {
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

    const filteredProducts = productList.filter(product => product.brand === "comodo");

    return (
        <>
            <Helmet>
                <meta name="description" content="SSL-сертификаты от Sectigo обеспечивают надежную защиту вашего веб-сайта. Обеспечьте безопасное соединение с вашими посетителями и защитите данные вашего онлайн бизнеса." />
                <meta property="og:description" content="SSL-сертификаты от Sectigo обеспечивают надежную защиту вашего веб-сайта. Обеспечьте безопасное соединение с вашими посетителями и защитите данные вашего онлайн бизнеса." />
                <meta name="keywords" content="SSL, сертификаты, Sectigo, безопасность, онлайн безопасность, веб-сайт, защита данных, безопасное соединение, шифрование, онлайн бизнес" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Сертификаты от Sectigo" />
                <meta property="og:site_name" content="SSL Certificate" />
                <meta property="og:url" content="https://sslcertificate.uz" />
                <title>Сертификаты от Sectigo</title>
            </Helmet>
            <div className='certificates'>
                <div className="cert-txt">
                    <h1 title='SSL-сертификаты Sectigo'>SSL-сертификаты Sectigo</h1>
                    <p className='cert-txt-item'>
                        <span>
                            <svg className='sectigo-svg' viewBox='0 0 25 32'>
                                <use xlinkHref='/skin.svg#sectigo-symbol'></use>
                            </svg>
                        </span>
                        <span>Sectigo SSL (ранее Comodo CA) - второй по величине коммерческий провайдер доверия в мире. Опытные и хорошо обученные сотрудники помогают частным лицам и корпоративным клиентам защищать веб-сайты, онлайн-приложения и электронную почту. SSL-сертификаты Sectigo популярны во всем мире и хорошо представлены во всех сегментах рынка и типах SSL-сертификатов, таких как сертификаты с проверкой домена, Business и Extended Validation, Multi-Domain, Wildcard, SMIME и Code Signing.</span>
                    </p>
                    <div className='ad-brand'>
                        <div>
                            <div className='ad-brand-box'>
                                <div className='comodo'>
                                    <svg className='comodo-svg' viewBox='0 0 73 10'>
                                        <use xlinkHref='/skin.svg#comodo-logo'></use>
                                    </svg>
                                </div>
                                <div className='arrows'>
                                    <span className='arrow'>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 32">
                                                <use xlinkHref='/skin.svg#arrows'></use>
                                            </svg>
                                        </span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 32">
                                                <use xlinkHref='/skin.svg#arrows'></use>
                                            </svg>
                                        </span>
                                        <span>
                                            <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 32">
                                                <use xlinkHref='/skin.svg#arrows'></use>
                                            </svg>
                                        </span>
                                    </span>
                                </div>
                                <div className="sectigo">
                                    <svg viewBox="0 0 100 21">
                                        <use xlinkHref='/skin.svg#sectigo-logo'></use>
                                    </svg>
                                </div>
                            </div>
                            <p>Те же сертификаты, только новый бренд</p>
                        </div>
                        <a className='ad-brand-link' href="/news">Читать далее</a>
                    </div>
                    <div className='tabs'>
                        {
                            loading ? (
                                <div className="loader">
                                    <Circles height="80" width="80" color="#dc8510" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
                                </div>
                            ) : (
                                filteredProducts.length > 0 && <SectigoTab filteredProducts={filteredProducts} />
                            )
                        }
                    </div>
                </div>
            </div >
        </>
    )
}