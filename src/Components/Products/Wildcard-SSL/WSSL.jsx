import React, { useEffect, useState } from 'react'
import { Helmet } from 'react-helmet';
import { Circles } from 'react-loader-spinner'
import Allproducts from '../../../Requests/Allproducts'
import WS1 from './WS1';

export default function WSSL() {
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
                <meta name="description" content="SSL-сертификаты Wildcard обеспечивают защиту для вашего основного домена и всех его поддоменов. Получите надежные сертификаты Wildcard и обеспечьте безопасность для всего вашего веб-сайта." />
                <meta property="og:description" content="SSL-сертификаты Wildcard обеспечивают защиту для вашего основного домена и всех его поддоменов. Получите надежные сертификаты Wildcard и обеспечьте безопасность для всего вашего веб-сайта." />
                <meta name="keywords" content="SSL, сертификаты, Wildcard, безопасность, онлайн безопасность, веб-сайт, защита данных, безопасное соединение, шифрование, онлайн бизнес" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="SSL-сертификаты Wildcard" />
                <meta property="og:site_name" content="SSL Certificate" />
                <meta property="og:url" content="https://sslcertificate.uz" />
                <title>SSL-сертификаты Wildcard</title>
            </Helmet>
            <div className='certificates'>
                {
                    loading ? (
                        <div className="loader">
                            <Circles height="80" width="80" color="#dc8510" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
                        </div>
                    ) : (
                        <WS1 productList={productList} />
                    )
                }
            </div>
        </>
    )
}