import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import DigicertTabs from './DigicertTabs';
import Allproducts from '../../../Requests/Allproducts';
import { Helmet } from 'react-helmet';
import { CACHE_DURATION } from '../../../Requests/request.js';

export default function Digicert() {
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

    const filteredProducts = productList.filter(digicert => digicert.brand === "digicert");

    return (
        <>
            <Helmet>
                <meta name="description" content="SSL-сертификаты от DigiCert обеспечивают безопасное соединение между вашим веб-сайтом и его посетителями. Защитите данные своих пользователей и повысьте доверие к вашему сайту с помощью надежных SSL-сертификатов." />
                <meta property="og:description" content="SSL-сертификаты от DigiCert обеспечивают безопасное соединение между вашим веб-сайтом и его посетителями. Защитите данные своих пользователей и повысьте доверие к вашему сайту с помощью надежных SSL-сертификатов." />
                <meta name="keywords" content="SSL, сертификаты, безопасность, DigiCert, защита данных, шифрование, онлайн безопасность, веб-сайт, защита пользователей, безопасное соединение" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Сертификаты SSL от DigiCert" />
                <meta property="og:site_name" content="SSL Certificate" />
                <meta property="og:url" content="https://sslcertificate.uz" />
                <title>Сертификаты SSL от DigiCert</title>
            </Helmet>
            <div className='certificates'>
                <div className="cert-txt">
                    <h1 title='DigiCert SSL'>DigiCert SSL</h1>
                    <p className='cert-txt-item'>
                        <span>
                            <svg viewBox="0 0 33 33" className='digicert-svg'>
                                <use xlinkHref='/skin.svg#digicert-symbol'></use>
                            </svg>
                        </span>
                        <span>SSL-сертификаты защищают все конфиденциальные и частные данные, передаваемые через веб-сайты и онлайн-системы. SSL-сертификаты вызывают доверие у конечных покупателей и повышают продажи за счет увеличения конверсии. Сертификаты помогают занять более высокие позиции в рейтинге, поскольку Google добавил SSL-сертификаты в свой алгоритм. GoGetSSL предоставляет все возможные SSL-сертификаты, доступные на рынке, начиная с сертификатов с проверкой домена и заканчивая сертификатами с расширенной проверкой.</span>
                    </p>
                    <div className='tabs'>
                        {
                            loading ? (
                                <div className="loader">
                                    <Circles height="80" width="80" color="#dc8510" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
                                </div>
                            ) : (
                                filteredProducts.length > 0 && <DigicertTabs filteredProducts={filteredProducts} />
                            )
                        }
                    </div>
                </div>
            </div >
        </>
    );
}