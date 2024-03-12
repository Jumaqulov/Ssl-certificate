import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner'
import Allproducts from '../../../Requests/Allproducts';
import GeoTrustTabs from './GeoTrustTabs';

export default function GeoTrust() {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    async function products() {
        setLoading(true)
        const currentProducts = await Allproducts.getProducts()
        setProductList(currentProducts)
        setLoading(false)
    }
    
    const filteredProducts = productList.length > 0 ? productList.filter(digicert => {
        return digicert.brand === "geotrust";
    }) : [];

    useEffect(() => {
        document.title = 'SSL-сертификатов от GeoTrust '
        products()
    }, []);

    return (
        <div className='certificates'>
            <div className="cert-txt">
                <h3>SSL-сертификаты GeoTrust</h3>
                <p className='cert-txt-item'>
                    <span>
                        <svg viewBox="0 0 33 33" className='geotrust-svg'>
                            <path fill="currentColor"
                                d="M13.235 7.08c2.857-1.951 5.898-2.71 8.42-2.34V.202H.114v21.746H7.48a6.09 6.09 0 0 1-.245-.466c-2.04-4.303.645-10.75 6-14.403z">
                            </path>
                            <path
                                d="M21.538 7.223c-5.683 0-10.289 4.607-10.289 10.29 0 .646.06 1.277.174 1.89.257 1.111.848 1.457 1.396 1.692.27.115.504.16.636.177 1.089.081 2.227-.187 3.3-.854 1.457-.906 2.537-2.382 3.117-4.061a71.392 71.392 0 0 0-5.235.8l.033-3.225 11.556-.77-.08 10.897-3.492.236c0-.006.003-.01.003-.016l.053-.342a57.612 57.612 0 0 0 .485-4.44 12.089 12.089 0 0 1-1.504 1.63 12.606 12.606 0 0 1-2.823 1.916 12.369 12.369 0 0 1-2.397.895c-.659.169-1.817.248-2.73.283a10.262 10.262 0 0 0 7.799 3.577c5.681 0 10.287-4.605 10.287-10.286-.002-5.682-4.608-10.289-10.29-10.289z">
                            </path>
                            <path
                                d="M21.6 7.223c-5.683 0-10.289 4.607-10.289 10.29 0 .646.062 1.277.175 1.89.256 1.111.848 1.457 1.396 1.692.27.115.504.16.637.177 1.088.081 2.226-.187 3.298-.854 1.458-.906 2.537-2.382 3.117-4.061a71.392 71.392 0 0 0-5.235.8l.033-3.225 11.556-.77-.08 10.897-3.493.236c0-.006.003-.01.003-.016l.053-.342a57.612 57.612 0 0 0 .484-4.44 12.089 12.089 0 0 1-1.504 1.63 12.542 12.542 0 0 1-5.221 2.81c-.659.17-1.816.25-2.728.284a10.26 10.26 0 0 0 7.798 3.577c5.681 0 10.287-4.605 10.287-10.286 0-5.682-4.606-10.289-10.287-10.289z">
                            </path>
                        </svg>
                    </span>
                    <span>GeoTrust принадлежит компании DigiCert CA и обслуживает более 110 000 клиентов по всему миру. Это поставщик решений мирового класса в области веб-безопасности для всех сертификатов SSL/TLS. Каждый цифровой сертификат использует высокоуровневый хэш-алгоритм SHA-256 с размером ключа 2048 бит. SSL-сертификаты GeoTrust идеально совместимы со всеми современными браузерами и мобильными устройствами. При каждом заказе вы получаете динамический логотип с печатью сайта для привлечения ваших потенциальных клиентов. Мы предоставляем все стандартные возможности, такие как неограниченное количество бесплатных повторных выпусков и 30-дневная гарантия возврата денег.</span>
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
    )
}