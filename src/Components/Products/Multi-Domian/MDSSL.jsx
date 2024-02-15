import React, { useEffect, useState } from 'react'
import { Oval } from 'react-loader-spinner'
import Allproducts from '../../../Requests/Allproducts'
import MD1 from './MD1';

export default function MDSSL() {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    async function products() {
        setLoading(true)
        const currentProducts = await Allproducts.getProducts()
        setProductList(currentProducts)
        setLoading(false)
    }

    useEffect(() => {
        document.title = 'Многодоменные SSL-сертификаты'
        products()
    }, []);
    return (
        <div className='certificates'>
            {
                loading ? (
                    <div className="loader">
                        <Oval height="80" width="80" color="#4fa94d" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
                    </div>
                ) : (
                    <MD1 productList={productList} />
                )
            }
        </div>
    )
}