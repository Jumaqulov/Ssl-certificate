import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { LiaShieldAltSolid } from "react-icons/lia";
import { USD } from '../../../Requests/request.js';
import { Link } from 'react-router-dom';

export default function WS2({ ws }) {
    const arrow_link = () => {
        return (
            <span className='arrow-link'>
                <span>
                    <IoIosArrowForward className='arrow-1' />
                </span>
                <span>
                    <IoIosArrowForward className='arrow-2' />
                </span>
                <span>
                    <IoIosArrowForward className='arrow-3' />
                </span>
            </span>
        )
    }

    const firstTextColor = (text) => {
        let words = text.split(' ');
        let firstWord = words[0];
        let remainingWords = words.slice(1).join(' ');
        let highlightedProductName = (
            <>
                <span style={{ color: firstWord === 'DigiCert' ? '#0274c4' : firstWord === 'GeoTrust' ? '#23a095' : firstWord === 'RapidSSL' ? '#9d7040' : firstWord === 'GoGetSSL' ? '#dc8510' : firstWord === 'Sectigo' ? '#00b073' : firstWord === 'Thawte' ? '#d2143ce6' : '#0274c4' }}>{firstWord}</span>
                <span style={{ color: '#9e9e9e' }}> {remainingWords}</span>
            </>
        );
        return highlightedProductName;
    }

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
    return (
        <div className='cert-txt'>
            <h1 title='SSL-сертификаты Wildcard'>SSL-сертификаты Wildcard</h1>
            <p className='cert-txt-item'>
                <span className='validation-icon-box'>
                    <LiaShieldAltSolid className='wild-navshield icon-navshield' />
                    <span className='icon-box-w'>W</span>
                </span>
                <span>Сертификаты Wildcard SSL очень популярны среди всех типов клиентов. Они имеют прочную репутацию экономичных и выгодных продуктов, обеспечивающих защиту неограниченного количества поддоменов в рамках одного доменного имени. Больше не нужно покупать и управлять несколькими отдельными сертификатами. <br /><br />    Большинство сертификатов Wildcard предоставляют неограниченное количество серверных лицензий, что означает, что вы можете установить SSL на все свои серверы и среды. На все заказы распространяется неограниченное количество бесплатных перевыпусков и 30-дневная гарантия возврата денег по любой причине.</span>
            </p>
            <br /><br /><br /><br />
            <table className='table-list'>
                <thead>
                    <tr className='title-details'>
                        <th className='wild-product-title'>Название продукта</th>
                        <th>Цена/год</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ws.map((item, index) => {
                            return (
                                <tr key={index} className='product-list-details'>
                                    <td className='product-name'>{firstTextColor(item.product_name)}</td>
                                    <td className='product-price'>{formatNumber(roundToTwoDecimalPlaces(item.product_prices[0].price * USD + item.product_prices[0].price * USD * 0.12))} UZS</td>
                                    <td className='details-btn'>
                                        <Link to={`/product/${normalizeProductName(item.product_name)}`} className='details-arrow-btn'>
                                            {arrow_link()}
                                            <span>Подробности</span>
                                        </Link>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <br />
            <h5 className='other-brands'>Популярные сертификаты Wildcard</h5>
            <p>Здесь представлен краткий обзор наиболее популярных SSL-сертификатов Wildcard, продаваемых через наш интернет-магазин. Пожалуйста, ознакомьтесь с полным списком всех предлагаемых нами продуктов в таблице выше.</p>
        </div>
    )
}
