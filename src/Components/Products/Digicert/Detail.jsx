import React, { useEffect, useState } from 'react';
import axios from 'axios'
import { FaArrowsToCircle } from "react-icons/fa6";
import { Circles } from 'react-loader-spinner';
import { useNavigate, useParams } from 'react-router-dom';
import { corsUrl, SSLdetail, SSLproductDetail, token, Url, USD } from '../../../Requests/request';
import SanRow from './SanRow';
import Allproducts from '../../../Requests/Allproducts';


export default function DDetail() {
    const [list, setList] = useState([])
    const [product, setProduct] = useState()
    const [product2, setProduct2] = useState()
    const [selectedRadio, setSelectedRadio] = useState('1 год');
    const { id } = useParams()
    const navigate = useNavigate()

    const handleRadioChange = (event) => {
        setSelectedRadio(event.target.id);
    };

    const send = () => {
        let a
        if (selectedRadio === '1 год') {
            a = product.product_prices[0].price
        } else if (selectedRadio === '2 год') {
            a = product.product_prices[1].price
        } else if (selectedRadio === '3 год') {
            a = product.product_prices[2].price
        }

        navigate(`/order/product/${normalizeProductName(product.product_name)}`, {
            state: {
                name: product.product_name,
                price: a,
                period: selectedRadio,
                id: product.product_id
            }
        });
    }

    const getResult = () => {
        switch (selectedRadio) {
            case '1 год':
                return <>
                    <h3 className='total-price'>{formatNumber(roundToTwoDecimalPlaces(product.product_prices[0].price * USD + product.product_prices[0].price * USD * 0.12))} UZS</h3>
                    <p className='total-price-txt'>ОБЩАЯ ЦЕНА</p>
                    <div className='selling-area'>
                        <button className='buying-ssl buy-ssl' onClick={send}>Купить SSL</button>
                    </div>
                </>;
            case '2 год':
                return <>
                    <h3 className='total-price'>{formatNumber(roundToTwoDecimalPlaces(product.product_prices[1].price * USD + product.product_prices[1].price * USD * 0.12))} UZS</h3>
                    <p className='total-price-txt'>ОБЩАЯ ЦЕНА</p>
                    <div className='selling-area'>
                        <button className='buying-ssl buy-ssl' onClick={send}>Купить SSL</button>
                    </div>
                </>;
            case '3 год':
                return <>
                    <h3 className='total-price'>{formatNumber(roundToTwoDecimalPlaces(product.product_prices[2].price * USD + product.product_prices[2].price * USD * 0.12))} UZS</h3>
                    <p className='total-price-txt'>ОБЩАЯ ЦЕНА</p>
                    <div className='selling-area'>
                        <button className='buying-ssl buy-ssl' onClick={send}>Купить SSL</button>
                    </div>
                </>;
        }
    };

    function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    const roundToTwoDecimalPlaces = (number) => {
        let roundedNumber = Math.ceil(number);
        let result = (Math.ceil(roundedNumber / 100) * 100); 
        return result;
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
                        axios(SSLproductDetail + findID.id),
                        axios(SSLdetail + findID.id)
                        // axios(`${corsUrl}/${Url}/products/details/${findID.id}?auth_key=${token}`),
                        // axios(`${corsUrl}/${Url}/products/ssl/${findID.id}?auth_key=${token}`)
                    ]);
                    const api1 = response1.data;
                    const api2 = response2.data.product;

                    setProduct(api1);
                    setProduct2(api2);
                    document.title = api1.product_name;
                    setSelectedRadio('1 год');
                } else {
                    console.error('ID topilmadi');
                }
            } catch (error) {
                console.error(error);
            }
        };
        fetchData();
    }, [id]);
    console.log(product);
    return (
        product ?
            <div className='certificates'>
                <div className="crt-txt">
                    <h1 title={product.product_name} className='title-certificate'>{product.product_name}</h1>
                    <form className='pro-pricing'>
                        {
                            product.product_prices.length > 2 ?
                                <div className='form-left'>
                                    <div className={`offer-year ${selectedRadio === '1 год' ? 'offer-price-active' : ''}`}>
                                        <div className='offer-price'>
                                            <input type="radio" id={`1 год`} name='year' checked={selectedRadio === '1 год'} onChange={handleRadioChange} />
                                            <label htmlFor={`1 год`}>
                                                <span className='span-year'>1 год</span>
                                                <span className={`span-price-1 ${selectedRadio === '1 год' ? 'span-price-2' : ''}`}>{formatNumber(roundToTwoDecimalPlaces(product.product_prices[0].price * USD + product.product_prices[0].price * USD * 0.12))} UZS</span>
                                                <span className='span-txt'>В ГОД</span>
                                            </label>
                                        </div>
                                        <div className={`san-price ${selectedRadio === '1 год' ? 'san-price-block' : 'san-price-none'}`}>
                                            {(product.product_san_prices && product.product_san_prices.length > 0) ? formatNumber(roundToTwoDecimalPlaces(product.product_san_prices[0].price * USD + product.product_san_prices[0].price * USD * 0.12)) : '0'} UZS Дополнительный домен (SAN)
                                        </div>
                                    </div>
                                    <div className={`offer-year ${selectedRadio === '2 год' ? 'offer-price-active' : ''}`}>
                                        <div className='offer-price'>
                                            <input type="radio" id={`2 год`} name='year' checked={selectedRadio === '2 год'} onChange={handleRadioChange} />
                                            <label htmlFor={`2 год`}>
                                                <span className='span-year'>2 год </span>
                                                <span className={`span-price-1 ${selectedRadio === '2 год' ? 'span-price-2' : ''}`}>{formatNumber(roundToTwoDecimalPlaces(product.product_prices[1].price / 2 * USD + product.product_prices[1].price / 2 * USD * 0.12))} UZS</span>
                                                <span className='span-txt'>В ГОД</span>
                                            </label>
                                        </div>
                                        <div className={`san-price ${selectedRadio === '2 год' ? 'san-price-block' : 'san-price-none'}`}>
                                            {(product.product_san_prices && product.product_san_prices.length > 0) ? formatNumber(roundToTwoDecimalPlaces(product.product_san_prices[1].price * USD + product.product_san_prices[1].price * USD * 0.12)) : '0'} UZS Дополнительный домен (SAN)
                                        </div>
                                    </div>
                                    <div className={`offer-year ${selectedRadio === '3 год' ? 'offer-price-active' : ''}`}>
                                        <div className='offer-price'>
                                            <input type="radio" id={`3 год`} name='year' checked={selectedRadio === '3 год'} onChange={handleRadioChange} />
                                            <label htmlFor={`3 год`}>
                                                <span className='span-year'>3 год </span>
                                                <span className={`span-price-1 ${selectedRadio === '3 год' ? 'span-price-2' : ''}`}>{formatNumber(roundToTwoDecimalPlaces(product.product_prices[2].price / 3 * USD + product.product_prices[2].price / 3 * USD * 0.12))} UZS</span>
                                                <span className='span-txt'>В ГОД</span>
                                            </label>
                                        </div>
                                        <div className={`san-price ${selectedRadio === '3 год' ? 'san-price-block' : 'san-price-none'}`}>
                                            {(product.product_san_prices && product.product_san_prices.length > 0) ? formatNumber(roundToTwoDecimalPlaces(product.product_san_prices[2].price * USD + product.product_san_prices[2].price * USD * 0.12)) : '0'} UZS Дополнительный домен (SAN)
                                        </div>
                                    </div>
                                </div>
                                :
                                <div className='form-left'>
                                    <div className={`offer-year ${selectedRadio === '1 год' ? 'offer-price-active' : ''}`}>
                                        <div className='offer-price'>
                                            <input type="radio" id={`1 год`} name='year' checked={selectedRadio === '1 год'} onChange={handleRadioChange} />
                                            <label htmlFor={`1 год`}>
                                                <span className='span-year'>{product.terms} Месяцы </span>
                                                <span className={`span-price-1 ${selectedRadio === '1 год' ? 'span-price-2' : ''}`}>{formatNumber(roundToTwoDecimalPlaces(product.product_prices[0].price * USD + product.product_prices[0].price * USD * 0.12))} UZS</span>
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
                                <span>{(product.product_san_prices && product.product_san_prices.length > 0) ? formatNumber(roundToTwoDecimalPlaces(product.product_san_prices[0].price * USD + product.product_san_prices[0].price * USD * 0.12)) : '0'} UZS</span>
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
{/* <a className='buying-ssl buy-ssl' href={`/order/product/${product.product_id}`}>Купить SSL</a> */ }
{/* <a className='buying-ssl renew-ssl' href={`https://my-ssl-certificate.vercel.app/product/ssl/${product.product_id}`}>Обновить SSL</a> */ }
{/* <a className='buying-ssl check-multi-year' href="/wiki/general/multi-year-subscription-ssl">Проверьте многолетние правила!</a> */ }