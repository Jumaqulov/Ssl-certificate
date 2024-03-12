import React, { useEffect, useState } from 'react'
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
        document.title = 'SSL-сертификаты Wildcard'
        products()
    }, []);
    return (
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
    )
}