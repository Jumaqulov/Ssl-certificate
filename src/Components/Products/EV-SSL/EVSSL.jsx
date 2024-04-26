import React, { useEffect, useState } from 'react'
import { Circles } from 'react-loader-spinner'
import Allproducts from '../../../Requests/Allproducts'
import EV1 from './EV1';
import { Helmet } from 'react-helmet';

export default function EVSSL() {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    async function products() {
        setLoading(true)
        const currentProducts = await Allproducts.getProducts()
        setProductList(currentProducts)
        setLoading(false)
    }

    useEffect(() => {
        products()
    }, []);
    return (
        <>
            <Helmet>
                <meta name="description" content="SSL-сертификаты с расширенной проверкой обеспечивают максимальный уровень безопасности для вашего веб-сайта. Получите надежные сертификаты с расширенной проверкой и защитите данные ваших пользователей." />
                <meta property="og:description" content="SSL-сертификаты с расширенной проверкой обеспечивают максимальный уровень безопасности для вашего веб-сайта. Получите надежные сертификаты с расширенной проверкой и защитите данные ваших пользователей." />
                <meta name="keywords" content="SSL, сертификаты, расширенная проверка, безопасность, онлайн безопасность, веб-сайт, защита данных, безопасное соединение, шифрование, онлайн бизнес" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="SSL-сертификаты с расширенной проверкой" />
                <meta property="og:site_name" content="SSL Certificate" />
                <meta property="og:url" content="https://sslcertificate.uz" />
                <title>SSL-сертификаты с расширенной проверкой</title>
            </Helmet>
            <div className='certificates'>
                {
                    loading ? (
                        <div className="loader">
                            <Circles height="80" width="80" color="#dc8510" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
                        </div>
                    ) : (
                        <EV1 productList={productList} />
                    )
                }
            </div>
        </>
    )
}