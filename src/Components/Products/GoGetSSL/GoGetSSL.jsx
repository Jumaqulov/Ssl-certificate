import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner'
import { RiLock2Line } from "react-icons/ri";
import GoGetSslTabs from './GoGetSslTabs';
import Allproducts from '../../../Requests/Allproducts';


export default function GoGetSSL() {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    async function products() {
        setLoading(true)
        const currentProducts = await Allproducts.getProducts()
        setProductList(currentProducts)
        setLoading(false)
    }

    const filteredProducts = productList.length > 0 ? productList.filter(digicert => {
        return digicert.brand === "comodo_ggssl";
    }) : [];

    useEffect(() => {
        document.title = 'Сертификаты от GoGetSSL'
        products()
    }, []);
    return (
        <div className='certificates'>
            <div className="cert-txt">
                <h3>GoGetSSL®</h3>
                <p className='cert-txt-item'>
                    <span>
                        <RiLock2Line className='gogetssl-svg'/>
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
    )
}