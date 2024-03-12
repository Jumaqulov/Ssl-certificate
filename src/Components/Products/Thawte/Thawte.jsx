import React, { useEffect, useState } from 'react';
import { TbLetterR } from "react-icons/tb";
import { Circles } from 'react-loader-spinner'
import Allproducts from '../../../Requests/Allproducts';
import ThawteTab from './ThawteTab';

export default function Thawte() {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    async function products() {
        setLoading(true)
        const currentProducts = await Allproducts.getProducts()
        setProductList(currentProducts)
        setLoading(false)
    }

    const filteredProducts = productList.length > 0 ? productList.filter(digicert => {
        return digicert.brand === "thawte";
    }) : [];

    useEffect(() => {
        document.title = 'Сертификаты от Thawte'
        products()
    }, []);
    return (
        <div className='certificates'>
            <div className="cert-txt">
                <h3>SSL-сертификаты Thawte</h3>
                <p className='cert-txt-item'>
                    <span>
                        <svg className='thawte-svg' viewBox='0 0 32 32'>
                            <path
                                d="M17.485 8.252h-4.133l-2.046 12.09c-.183 1.083-.212 2.167.792 3.034 1.052.941 2.688 1.012 3.432 1.012 2.052 0 3.265-.554 4.27-.987l-.366-.771c-.517.12-.973.242-1.626.242-.31 0-1.554 0-2.115-1.086-.243-.409-.344-.915-.168-1.95l.95-5.619h3.345l.44-2.6h-3.344l.57-3.365z">
                            </path>
                            <path
                                d="M.156 16C.156 24.75 7.25 31.844 16 31.844S31.844 24.75 31.844 16 24.75.156 16 .156.156 7.25.156 16zm3.245 0C3.401 9.042 9.042 3.401 16 3.401S28.599 9.042 28.599 16 22.958 28.599 16 28.599 3.401 22.958 3.401 16z">
                            </path>
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
    )
}