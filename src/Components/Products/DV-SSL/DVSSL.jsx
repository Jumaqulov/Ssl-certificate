import React, { useEffect, useState } from 'react'
import { Oval } from 'react-loader-spinner'
import Allproducts from '../../../Requests/Allproducts'
import DV1 from './DV1';

export default function DVSSL() {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    async function products() {
        setLoading(true)
        const currentProducts = await Allproducts.getProducts()
        setProductList(currentProducts)
        setLoading(false)
    }

    useEffect(() => {
        document.title = 'SSL-сертификаты домена'
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
                            <DV1 productList={productList} />
                        )
                    }
        </div>
    )
}