import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { LiaShieldAltSolid } from "react-icons/lia";


export default function EV2({ ev, productList }) {
    const navigate = useNavigate();

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

    const send = (data) => {
        const item = productList.filter(id => id.id === data.product_id)
        navigate(`/product/${data.product_id}`, {
            state: { productDetails: data, item }
        });
    }

    return (
        <div className='cert-txt'>
            <h3>SSL-сертификаты с расширенной проверкой</h3>
            <p className='cert-txt-item'>
                <div className='validation-icon-box'>
                    <LiaShieldAltSolid className='ev-navshield icon-navshield' />
                    <span className='icon-box-e icon-box'>E</span>
                </div>
                <span>SSL-сертификаты расширенной валидации - самые уважаемые и ценные продукты, которые у нас есть. Они обеспечивают высочайший уровень безопасности и защиты сайта. Зеленый логотип Site Seal - это хороший индикатор безопасности в Интернете, поскольку он показывает проверенное имя компании. Кроме того, EV-сертификаты повышают доверие конечных клиентов и посетителей сайта, а также могут увеличить конверсию на 17,3 %. <br /><br /> Сумма гарантии гораздо выше по сравнению с сертификатами DV или OV и составляет от 1 000 000 долларов. Мы настоятельно рекомендуем использовать сертификаты расширенной валидации для электронной коммерции, банков, государственных учреждений и любых сайтов, предоставляющих онлайн-услуги и принимающих платежи.</span>
            </p>
            <br /><br /><br /><br />
            <table className='table-list'>
                <thead>
                    <tr className='title-details'>
                        <th className='extended-product-title'>Название продукта</th>
                        <th>Цена/год</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        ev.map((item, index) => {
                            return (
                                <tr key={index} className='product-list-details'>
                                    <td className='product-name'>{firstTextColor(item.product_name)}</td>
                                    <td className='product-price'>{item.product_prices[0].price} $</td>
                                    <td className='details-btn'>
                                        <button onClick={() => send(item)} className='details-arrow-btn'>
                                            {arrow_link()}
                                            <span>Подробности</span>
                                        </button>
                                    </td>
                                </tr>
                            )
                        })
                    }
                </tbody>
            </table>
            <br />
            <h5 className='other-brands'>Самые популярные EV SSL-церты</h5>
            <p>Здесь представлен краткий обзор наиболее популярных сертификатов EV, продаваемых через наш интернет-магазин. Пожалуйста, ознакомьтесь с полным списком всех предлагаемых нами продуктов в таблице выше. Свяжитесь с нашей командой, если вы заинтересованы в продукте EV, не указанном на нашем сайте.</p>
        </div>
    )
}
