import React from 'react'
import { IoIosArrowForward } from 'react-icons/io'
import { LiaShieldAltSolid } from 'react-icons/lia'
import { USD } from '../../../Requests/request'

export default function CS2({ cs }) {
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
        let result = (Math.ceil(roundedNumber / 100) * 100).toFixed(2);
        return result;
    }

    const normalizeProductName = (productName) => {
        return productName.split(' ').map(word => word.toLowerCase()).join('-');
    };

    return (
        <div className='cert-txt'>
            <h1 title='Сертификаты подписи кода'>Сертификаты подписи кода</h1>
            <p className='cert-txt-item'>
                <span className='validation-icon-box'>
                    <LiaShieldAltSolid className='cs-navshield icon-navshield' />
                    <span className='icon-box-c icon-box'>C</span>
                </span>
                <span>Сегодня наступила эра Интернета, когда цифровые покупки и загрузки избавляют от необходимости устанавливать программное обеспечение с CD или DVD-дисков. Загрузка программного обеспечения в Интернете - это простой и быстрый способ получить любое приложение, но так ли это безопасно, как CD или DVD? Когда мы покупаем программное обеспечение через Интернет, мы знаем, что диск получен от издателя и никакие сторонние разработчики не добавили на него вредоносный код. Однако когда мы скачиваем программное обеспечение в Интернете, мы не уверены, что код является оригинальным и не содержит вредоносных программ. <br /><br /> SSL-сертификаты Code Signing помогают издателям и пользователям программного обеспечения быть уверенными в том, что файлы получены непосредственно от издателя и подписаны цифровой подписью. Мы настоятельно рекомендуем не устанавливать программное обеспечение без подписи автора/издателя.</span>
            </p>
            <br /><br /><br /><br />
            <table className='table-list'>
                <thead>
                    <tr className='title-details'>
                        <th className='domian-product-title'>Название продукта</th>
                        <th>Цена/год</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        cs.map((item, index) => {
                            return (
                                <tr key={index} className='product-list-details'>
                                    <td className='product-name'>{firstTextColor(item.product_name)}</td>
                                    <td className='product-price'>{formatNumber(roundToTwoDecimalPlaces(item.product_prices[0].price * USD + item.product_prices[0].price * USD * 0.12))} UZS</td>
                                    <td className='details-btn'>
                                        <a href={`/product/${normalizeProductName(item.product_name)}`} className='details-arrow-btn'>
                                            {arrow_link()}
                                            <span>Подробности</span>
                                        </a>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <br />
            <h5 className='other-brands'>Самые популярные сертификаты подписи кода</h5>
            <p>Сертификат подписи кода - это цифровой сертификат, который содержит информацию, полностью идентифицирующую организацию, и выдается центром сертификации, таким как GlobalSign. Цифровой сертификат связывает идентификационные данные организации с открытым ключом, который математически связан с парой закрытых ключей.</p>
        </div>
    )
}