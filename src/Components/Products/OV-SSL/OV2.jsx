import React from 'react'
import { IoIosArrowForward } from "react-icons/io";
import { LiaShieldAltSolid } from "react-icons/lia";
import { USD } from '../../../Requests/request.js';
import { Link } from 'react-router-dom';

export default function OV2({ dv }) {
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
            <h1 title='SSL-сертификаты с проверкой бизнеса'>SSL-сертификаты с проверкой бизнеса</h1>
            <p className='cert-txt-item'>
                <div className='validation-icon-box'>
                    <LiaShieldAltSolid className='ov-navshield icon-navshield' />
                    <span className='icon-box-b icon-box'>B</span>
                </div>
                <span>Бизнес-сертификаты SSL, также известные как организационные сертификаты, становятся все более популярными на рынке, позволяя конечным пользователям проверять название, адрес и телефон компании, на сайт которой они заходят. Это помогает установить доверительные отношения и повысить конверсию. Выпускаемые OV-сертификаты имеют значительно более высокий уровень гарантии по сравнению с сертификатами проверки домена. <br /><br /> Мы предлагаем различные SSL-сертификаты с проверкой организации от ведущих центров сертификации (CA). Мы настоятельно рекомендуем GeoTrust True BusinessID и другие сертификаты GeoTrust, Thawte, DigiCert. Они имеют один из лучших опытов проверки. Обычно проверка занимает несколько рабочих дней, но может занять и больше времени, поэтому наберитесь терпения. 30-дневная гарантия возврата денег, предоставляемая при каждой покупке.</span>
            </p>
            <br /><br /><br /><br />
            <table className='table-list'>
                <thead>
                    <tr className='title-details'>
                        <th className='business-product-title'>Название продукта</th>
                        <th>Цена/год</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        dv.map((item, index) => {
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
            <h5 className='other-brands'>Самые популярные OV/BV SSL</h5>
            <p>Здесь представлен краткий обзор наиболее популярных DV-сертификатов от ведущих центров сертификации, продаваемых через наш интернет-магазин. Пожалуйста, ознакомьтесь с полным списком всех продуктов, которые мы предлагаем, в таблице выше. Свяжитесь с нашей командой, если вы заинтересованы в продукте DV, не указанном на нашем сайте.</p>
        </div>
    )
}
