import React, { useEffect, useState } from 'react';
import { FaArrowsToCircle } from "react-icons/fa6";
import { useLocation } from 'react-router-dom';
import SanRow from './SanRow';

export default function DDetail() {
    const [selectedRadio, setSelectedRadio] = useState('radio-1');

    const data = useLocation()
    const product = data.state.productDetails
    const productDetails = data.state.item

    const handleRadioChange = (event) => {
        setSelectedRadio(event.target.id);
    };

    const getResult = () => {
        switch (selectedRadio) {
            case 'radio-1':
                return <>
                    <h3 className='total-price'>{product.product_prices[0].price}$</h3>
                    <p className='total-price-txt'>ОБЩАЯ ЦЕНА</p>
                    <div className='selling-area'>
                        <a className='buying-ssl buy-ssl' href="">Купить SSL</a>
                        <a className='buying-ssl renew-ssl' href="">Обновить SSL</a>
                    </div>
                </>;
            case 'radio-2':
                return <>
                    <h3 className='total-price'>{product.product_prices[1].price}$</h3>
                    <p className='total-price-txt'>ОБЩАЯ ЦЕНА</p>
                    <div className='selling-area'>
                        <a className='buying-ssl buy-ssl' href="">Купить SSL</a>
                        <a className='buying-ssl renew-ssl' href="">Обновить SSL</a>
                        <a className='buying-ssl check-multi-year' href="/wiki/general/multi-year-subscription-ssl">Проверьте многолетние правила!</a>
                    </div>
                </>;
            case 'radio-3':
                return <>
                    <h3 className='total-price'>{product.product_prices[2].price}$</h3>
                    <p className='total-price-txt'>ОБЩАЯ ЦЕНА</p>
                    <div className='selling-area'>
                        <a className='buying-ssl buy-ssl' href="">Купить SSL</a>
                        <a className='buying-ssl renew-ssl' href="">Обновить SSL</a>
                        <a className='buying-ssl check-multi-year' href="/wiki/general/multi-year-subscription-ssl">Проверьте многолетние правила!</a>
                    </div>
                </>;
        }
    };

    const roundToTwoDecimalPlaces = (number) => {
        return Math.round(number * 100) / 100;
    }
    useEffect(() => {
        document.title = `${product.product_name}`
        setSelectedRadio('radio-1');
    }, [product.product_id]);

    return (
        product.length !== 0 ?
            <div className='certificates'>
                <div className="crt-txt">
                    <h3 className='title-certificate'>{product.product_name}</h3>
                    <form action="" className='pro-pricing'>
                        {
                            product.product_prices.length > 2 ?
                                <div className='form-left'>
                                    <div className={`offer-year ${selectedRadio === 'radio-1' ? 'offer-price-active' : ''}`}>
                                        <div className='offer-price'>
                                            <input type="radio" id={`radio-1`} name='year' checked={selectedRadio === 'radio-1'} onChange={handleRadioChange} />
                                            <label htmlFor={`radio-1`}>
                                                <span className='span-year'>1 год</span>
                                                <span className={`span-price-1 ${selectedRadio === 'radio-1' ? 'span-price-2' : ''}`}>{product.product_prices[0].price} $</span>
                                                <span className='span-txt'>В ГОД</span>
                                            </label>
                                        </div>
                                        <div className={`san-price ${selectedRadio === 'radio-1' ? 'san-price-block' : 'san-price-none'}`}>
                                            {product.product_san_prices ? product.product_san_prices[0].price : '0'}$ Дополнительный домен (SAN)
                                        </div>
                                    </div>
                                    <div className={`offer-year ${selectedRadio === 'radio-2' ? 'offer-price-active' : ''}`}>
                                        <div className='offer-price'>
                                            <input type="radio" id={`radio-2`} name='year' checked={selectedRadio === 'radio-2'} onChange={handleRadioChange} />
                                            <label htmlFor={`radio-2`}>
                                                <span className='span-year'>2 год </span>
                                                <span className={`span-price-1 ${selectedRadio === 'radio-2' ? 'span-price-2' : ''}`}>{roundToTwoDecimalPlaces(product.product_prices[1].price / 2)} $</span>
                                                <span className='span-txt'>В ГОД</span>
                                            </label>
                                        </div>
                                        <div className={`san-price ${selectedRadio === 'radio-2' ? 'san-price-block' : 'san-price-none'}`}>
                                            {product.product_san_prices ? product.product_san_prices[1].price : '0'}$ Дополнительный домен (SAN)
                                        </div>
                                    </div>
                                    <div className={`offer-year ${selectedRadio === 'radio-3' ? 'offer-price-active' : ''}`}>
                                        <div className='offer-price'>
                                            <input type="radio" id={`radio-3`} name='year' checked={selectedRadio === 'radio-3'} onChange={handleRadioChange} />
                                            <label htmlFor={`radio-3`}>
                                                <span className='span-year'>3 год </span>
                                                <span className={`span-price-1 ${selectedRadio === 'radio-3' ? 'span-price-2' : ''}`}>{roundToTwoDecimalPlaces(product.product_prices[2].price / 3)} $</span>
                                                <span className='span-txt'>В ГОД</span>
                                            </label>
                                        </div>
                                        <div className={`san-price ${selectedRadio === 'radio-3' ? 'san-price-block' : 'san-price-none'}`}>
                                            {product.product_san_prices ? product.product_san_prices[2].price : '0'}$ Дополнительный домен (SAN)
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className='form-left'>
                                    <div className={`offer-year ${selectedRadio === 'radio-1' ? 'offer-price-active' : ''}`}>
                                        <div className='offer-price'>
                                            <input type="radio" id={`radio-1`} name='year' checked={selectedRadio === 'radio-1'} onChange={handleRadioChange} />
                                            <label htmlFor={`radio-1`}>
                                                <span className='span-year'>1 год </span>
                                                <span className={`span-price-1 ${selectedRadio === 'radio-1' ? 'span-price-2' : ''}`}>{product.product_prices[0].price} $</span>
                                                <span className='span-txt'>В ГОД</span>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                        }
                        <div className="form-right">
                            {getResult()}
                        </div>
                    </form>
                    <div className="benefits-details">
                        <div className="san-prices">
                            <p className='benefits-1'><FaArrowsToCircle /> Доступна опция SAN</p>
                            <p className='benefits-2'>
                                <span>{product.product_single_san_included} SAN</span>
                                <span>В комплекте</span>
                            </p>
                            <p className='benefits-2'>
                                <span>{product.product_san_prices ? product.product_san_prices[0].price : '0'}$</span>
                                <span>Дополнительный SAN</span>
                            </p>
                            <p className='benefits-2 benefits-2_1'>
                                <span>{product.product_multidomains_maximum}</span>
                                <span>Максимальный</span>
                            </p>
                        </div>
                        <SanRow product={product} productDetails={productDetails} />
                    </div>
                </div>
            </div>
            :
            <p>Продукт не доступен</p>
    );
}