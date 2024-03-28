import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { FaArrowsToCircle } from "react-icons/fa6";
import { Circles } from 'react-loader-spinner';
import { useParams } from 'react-router-dom';
import { corsUrl, token, Url, USD } from '../../../Requests/request';
import SanRow from './SanRow';
import Allproducts from '../../../Requests/Allproducts';


export default function DDetail() {
    const [list, setList] = useState([])
    const [product, setProduct] = useState()
    const [product2, setProduct2] = useState()
    const [selectedRadio, setSelectedRadio] = useState('radio-1');
    const { id } = useParams()

    const handleRadioChange = (event) => {
        setSelectedRadio(event.target.id);
    };

    const getResult = () => {
        switch (selectedRadio) {
            case 'radio-1':
                return <>
                    <h3 className='total-price'>{formatNumber(roundToTwoDecimalPlaces(product.product_prices[0].price * USD) + roundToTwoDecimalPlaces(product.product_prices[0].price * USD * 0.12))} UZS</h3>
                    <p className='total-price-txt'>ОБЩАЯ ЦЕНА</p>
                    <div className='selling-area'>
                        <a className='buying-ssl buy-ssl' href={`https://my-ssl-certificate.vercel.app/product/ssl/${product.product_id}`}>Купить SSL</a>
                        {/* <a className='buying-ssl renew-ssl' href={`https://my-ssl-certificate.vercel.app/product/ssl/${product.product_id}`}>Обновить SSL</a> */}
                    </div>
                </>;
            case 'radio-2':
                return <>
                    <h3 className='total-price'>{formatNumber(roundToTwoDecimalPlaces(product.product_prices[1].price * USD) + roundToTwoDecimalPlaces(product.product_prices[1].price * USD * 0.12))} UZS</h3>
                    <p className='total-price-txt'>ОБЩАЯ ЦЕНА</p>
                    <div className='selling-area'>
                        <a className='buying-ssl buy-ssl' href={`https://my-ssl-certificate.vercel.app/product/ssl/${product.product_id}`}>Купить SSL</a>
                        {/* <a className='buying-ssl renew-ssl' href={`https://my-ssl-certificate.vercel.app/product/ssl/${product.product_id}`}>Обновить SSL</a> */}
                        {/* <a className='buying-ssl check-multi-year' href="/wiki/general/multi-year-subscription-ssl">Проверьте многолетние правила!</a> */}
                    </div>
                </>;
            case 'radio-3':
                return <>
                    <h3 className='total-price'>{formatNumber(roundToTwoDecimalPlaces(product.product_prices[2].price * USD) + roundToTwoDecimalPlaces(product.product_prices[2].price * USD * 0.12))} UZS</h3>
                    <p className='total-price-txt'>ОБЩАЯ ЦЕНА</p>
                    <div className='selling-area'>
                        <a className='buying-ssl buy-ssl' href={`https://my-ssl-certificate.vercel.app/product/ssl/${product.product_id}`}>Купить SSL</a>
                        {/* <a className='buying-ssl renew-ssl' href={`https://my-ssl-certificate.vercel.app/product/ssl/${product.product_id}`}>Обновить SSL</a> */}
                        {/* <a className='buying-ssl check-multi-year' href="/wiki/general/multi-year-subscription-ssl">Проверьте многолетние правила!</a> */}
                    </div>
                </>;
        }
    };

    function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    const roundToTwoDecimalPlaces = (number) => {
        return Math.round(number * 100) / 100;
    }

    const normalizeProductName = (productName) => {
        return productName.split(' ').map(word => word.toLowerCase()).join('-');
    };

    useEffect(() => {
        const fetchData = async () => {
            try {
                const prodList = await Allproducts.getProducts();
                setList(prodList);

                const findID = prodList.find(prodName => normalizeProductName(prodName.product) === id);

                if (findID) {
                    const [response1, response2] = await Promise.all([
                        axios(`${corsUrl}/${Url}/products/details/${findID.id}?auth_key=${token}`),
                        axios(`${corsUrl}/${Url}/products/ssl/${findID.id}?auth_key=${token}`)
                    ]);

                    const api1 = response1.data;
                    const api2 = response2.data.product;

                    setProduct(api1);
                    setProduct2(api2);
                    document.title = api1.product_name;
                    setSelectedRadio('radio-1');
                } else {
                    console.error('ID topilmadi');
                }
            } catch (error) {
                console.error('Xatolik yuz berdi:', error);
            }
        };
        fetchData();
    }, [id]);
    return (
        product ?
            <div className='certificates'>
                <div className="crt-txt">
                    <h1 title={product.product_name} className='title-certificate'>{product.product_name}</h1>
                    <form action="" className='pro-pricing'>
                        {
                            product.product_prices.length > 2 ?
                                <div className='form-left'>
                                    <div className={`offer-year ${selectedRadio === 'radio-1' ? 'offer-price-active' : ''}`}>
                                        <div className='offer-price'>
                                            <input type="radio" id={`radio-1`} name='year' checked={selectedRadio === 'radio-1'} onChange={handleRadioChange} />
                                            <label htmlFor={`radio-1`}>
                                                <span className='span-year'>1 год</span>
                                                <span className={`span-price-1 ${selectedRadio === 'radio-1' ? 'span-price-2' : ''}`}>{formatNumber(roundToTwoDecimalPlaces(product.product_prices[0].price * USD) + roundToTwoDecimalPlaces(product.product_prices[0].price * USD * 0.12))} UZS</span>
                                                <span className='span-txt'>В ГОД</span>
                                            </label>
                                        </div>
                                        <div className={`san-price ${selectedRadio === 'radio-1' ? 'san-price-block' : 'san-price-none'}`}>
                                            {product.product_san_prices ? formatNumber(roundToTwoDecimalPlaces(product.product_san_prices[0].price * USD) + roundToTwoDecimalPlaces(product.product_san_prices[0].price * USD * 0.12)) : '0'} UZS Дополнительный домен (SAN)
                                        </div>
                                    </div>
                                    <div className={`offer-year ${selectedRadio === 'radio-2' ? 'offer-price-active' : ''}`}>
                                        <div className='offer-price'>
                                            <input type="radio" id={`radio-2`} name='year' checked={selectedRadio === 'radio-2'} onChange={handleRadioChange} />
                                            <label htmlFor={`radio-2`}>
                                                <span className='span-year'>2 год </span>
                                                <span className={`span-price-1 ${selectedRadio === 'radio-2' ? 'span-price-2' : ''}`}>{formatNumber(roundToTwoDecimalPlaces(product.product_prices[1].price / 2 * USD) + roundToTwoDecimalPlaces(product.product_prices[1].price / 2 * USD * 0.12))} UZS</span>
                                                <span className='span-txt'>В ГОД</span>
                                            </label>
                                        </div>
                                        <div className={`san-price ${selectedRadio === 'radio-2' ? 'san-price-block' : 'san-price-none'}`}>
                                            {product.product_san_prices ? formatNumber(roundToTwoDecimalPlaces(product.product_san_prices[1].price * USD) + roundToTwoDecimalPlaces(product.product_san_prices[1].price * USD * 0.12)) : '0'} UZS Дополнительный домен (SAN)
                                        </div>
                                    </div>
                                    <div className={`offer-year ${selectedRadio === 'radio-3' ? 'offer-price-active' : ''}`}>
                                        <div className='offer-price'>
                                            <input type="radio" id={`radio-3`} name='year' checked={selectedRadio === 'radio-3'} onChange={handleRadioChange} />
                                            <label htmlFor={`radio-3`}>
                                                <span className='span-year'>3 год </span>
                                                <span className={`span-price-1 ${selectedRadio === 'radio-3' ? 'span-price-2' : ''}`}>{formatNumber(roundToTwoDecimalPlaces(product.product_prices[2].price / 3 * USD) + roundToTwoDecimalPlaces(product.product_prices[2].price / 3 * USD * 0.12))} UZS</span>
                                                <span className='span-txt'>В ГОД</span>
                                            </label>
                                        </div>
                                        <div className={`san-price ${selectedRadio === 'radio-3' ? 'san-price-block' : 'san-price-none'}`}>
                                            {product.product_san_prices ? formatNumber(roundToTwoDecimalPlaces(product.product_san_prices[2].price * USD) + roundToTwoDecimalPlaces(product.product_san_prices[2].price * USD * 0.12)) : '0'} UZS Дополнительный домен (SAN)
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className='form-left'>
                                    <div className={`offer-year ${selectedRadio === 'radio-1' ? 'offer-price-active' : ''}`}>
                                        <div className='offer-price'>
                                            <input type="radio" id={`radio-1`} name='year' checked={selectedRadio === 'radio-1'} onChange={handleRadioChange} />
                                            <label htmlFor={`radio-1`}>
                                                <span className='span-year'>{product.terms} Месяцы </span>
                                                <span className={`span-price-1 ${selectedRadio === 'radio-1' ? 'span-price-2' : ''}`}>{formatNumber(roundToTwoDecimalPlaces(product.product_prices[0].price * USD) + roundToTwoDecimalPlaces(product.product_prices[0].price * USD * 0.12))} UZS</span>
                                                {/* <span className='span-txt'>В Месяцы</span> */}
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
                                <span>{product.product_san_prices ? formatNumber(roundToTwoDecimalPlaces(product.product_san_prices[0].price * USD) + roundToTwoDecimalPlaces(product.product_san_prices[0].price * USD * 0.12)) : '0'} UZS</span>
                                <span>Дополнительный SAN</span>
                            </p>
                            <p className='benefits-2 benefits-2_1'>
                                <span>{product.product_multidomains_maximum}</span>
                                <span>Максимальный</span>
                            </p>
                        </div>
                        <SanRow product={product} product2={product2} />
                    </div>
                </div>
            </div>
            :
            <div className="loader">
                <Circles height="80" width="80" color="#dc8510" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
            </div>
    );
}