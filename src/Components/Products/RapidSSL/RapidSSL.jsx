import React, { useEffect, useState } from 'react';
import { TbLetterR } from "react-icons/tb";
import { Circles } from 'react-loader-spinner'
import Allproducts from '../../../Requests/Allproducts';
import RapidSslTab from './RapidSslTab';


export default function RapidSSL() {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    async function products() {
        setLoading(true)
        const currentProducts = await Allproducts.getProducts()
        setProductList(currentProducts)
        setLoading(false)
    }

    const filteredProducts = productList.length > 0 ? productList.filter(digicert => {
        return digicert.brand === "rapidssl";
    }) : [];

    useEffect(() => {
        document.title = 'Сертификаты от RapidSSL'
        products()
    }, []);
    return (
        <div className='certificates'>
            <div className="cert-txt">
                <h1 title='Сертификаты RapidSSL'>Сертификаты RapidSSL</h1>
                <p className='cert-txt-item'>
                    <span>
                        <TbLetterR className='rapidssl-svg' />
                    </span>
                    <span>RapidSSL - это опытный центр сертификации, специализирующийся в основном на SSL-сертификатах с проверкой доменов и предлагающий стандартные и Wildcard SSL-сертификаты. После приобретения компании Digicert CA в 2017 году RapidSSL усовершенствовал технологии и начал использовать современную инфраструктуру. Компания специализируется на SSL-шифровании для малого бизнеса и веб-сайтов с базовыми решениями безопасности. Sametime обладает сильной распознаваемостью браузеров, включая все мобильные устройства. Каждый цифровой сертификат поставляется с хэш-алгоритмом SHA256 с размером ключа 2048 бит, неограниченным количеством бесплатных перевыпусков, неограниченным лицензированием серверов и 30-дневной гарантией возврата денег от компании GoGetSSL®.</span>
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
    )
}