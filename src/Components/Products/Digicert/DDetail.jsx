import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams, useLocation } from 'react-router-dom';

export default function DDetail() {
    const [radio, setRadio] = useState({});
    const [selectedRadio, setSelectedRadio] = useState('radio-1');
    const id = useParams();

    const data = useLocation()
    const product = data.state.productDetails

    const handleRadioChange = (event) => {
        setSelectedRadio(event.target.id);
    };

    console.log(product);

    useEffect(() => {
        document.title = `${product.product_name}`
        setSelectedRadio('radio-1');
    }, []);

    return (
        product.length !== 0 ?
            <div className='certificates'>
                <div className="crt-txt">
                    <h3 className='title-certificate'></h3>
                    <form action="" className='pro-pricing'>
                        <div className='form-left'>
                            <div className={`offer-year ${selectedRadio === 'radio-1' ? 'offer-price-active' : ''}`}>
                                <div className='offer-price'>
                                    <input type="radio" id={`radio-1`} name='year' checked={selectedRadio === 'radio-1'} onChange={handleRadioChange} />
                                    <label htmlFor={`radio-1`}>
                                        <span className='span-year'>1 год </span>
                                        <span className='span-price'>{product.product_prices[0].price} $</span>
                                        <span className='span-txt'>В ГОД</span>
                                    </label>
                                </div>
                                <div className={`san-price ${selectedRadio === 'radio-1' ? 'san-price-block' : 'san-price-none'}`}>
                                    {product.product_san_prices[0].price}$
                                </div>
                            </div>
                            <div className={`offer-year ${selectedRadio === 'radio-2' ? 'offer-price-active' : ''}`}>
                                <div className='offer-price'>
                                    <input type="radio" id={`radio-2`} name='year' checked={selectedRadio === 'radio-2'} onChange={handleRadioChange} />
                                    <label htmlFor={`radio-2`}>
                                        <span className='span-year'>2 год </span>
                                        <span className='span-price'>{product.product_prices[1].price} $</span>
                                        <span className='span-txt'>В ГОД</span>
                                    </label>
                                </div>
                                <div className={`san-price ${selectedRadio === 'radio-2' ? 'san-price-block' : 'san-price-none'}`}>
                                    {product.product_san_prices[1].price}$
                                </div>
                            </div>
                            <div className={`offer-year ${selectedRadio === 'radio-3' ? 'offer-price-active' : ''}`}>
                                <div className='offer-price'>
                                    <input type="radio" id={`radio-3`} name='year' checked={selectedRadio === 'radio-3'} onChange={handleRadioChange} />
                                    <label htmlFor={`radio-3`}>
                                        <span className='span-year'>3 год </span>
                                        <span className='span-price'>{product.product_prices[2].price} $</span>     
                                        <span className='span-txt'>В ГОД</span>
                                    </label>
                                </div>
                                <div className={`san-price ${selectedRadio === 'radio-3' ? 'san-price-block' : 'san-price-none'}`}>
                                    {product.product_san_prices[2].price}$
                                </div>
                            </div>
                        </div>
                    </form>
                </div>
            </div>
            :
            <p>Продукт не доступен</p>
    );
}