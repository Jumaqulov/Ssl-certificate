import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import Perproduct from '../../../Requests/Perproduct';


export default function DDetail() {
    const [item, setItem] = useState({})
    const id = useParams();

    async function getItem() {
        const curentItem = await Perproduct.getPerProduct(id.id)
        setItem(curentItem)
    }

    const price1 = item.product_prices && item.product_prices[0];
    const price2 = item.product_prices && item.product_prices[1];
    const price3 = item.product_prices && item.product_prices[2];

    console.log(item.product_name);
    useEffect(() => {
        document.title = item.product_name
        getItem()
    }, [])
    return (
        <div className='certificates'>
            <div className="crt-txt">
                <h3 className='title-certificate'>{item.product_name}</h3>
                <form action="" className='pro-pricing'>
                    <div className='form-left'>
                        {price1 && (
                            <div>
                                <input type="radio" id={`radio-1`} name='year' />
                                <label htmlFor={`radio-1`}>
                                    <span className='span-year'>1 год </span>
                                    <span className='span-price'>{price1.price}$ </span>
                                    <span className='span-txt'>В ГОД</span>
                                </label>
                            </div>
                        )}
                        {price2 && (
                            <div>
                                <input type="radio" id={`radio-2`} name='year' />
                                <label htmlFor={`radio-2`}>
                                    <span className='span-year'>2 год </span>
                                    <span className='span-price'>{price2.price}$ </span>
                                    <span className='span-txt'>В ГОД</span>
                                </label>
                            </div>
                        )}
                        {price3 && (
                            <div>
                                <input type="radio" id={`radio-3`} name='year' />
                                <label htmlFor={`radio-3`}>
                                    <span className='span-year'>3 год </span>
                                    <span className='span-price'>{price3.price}$ </span>
                                    <span className='span-txt'>В ГОД</span>
                                </label>
                            </div>
                        )}
                    </div>
                </form>
            </div>
        </div>
    )
}