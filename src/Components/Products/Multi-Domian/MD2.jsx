import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { LiaShieldAltSolid } from "react-icons/lia";
import { USD } from '../../../Requests/request';


export default function MD2({ md, productList }) {
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

    function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    const roundToTwoDecimalPlaces = (number) => {
        return Math.round(number * 100) / 100;
    }
    return (
        <div className='cert-txt'>
            <h3>Многодоменный SSL</h3>
            <p className='cert-txt-item'>
                <span className='validation-icon-box'>
                    <LiaShieldAltSolid className='mt-navshield icon-navshield' />
                    <span className='icon-box-s icon-box'>S</span>
                </span>
                <span>Многодоменные SSL-сертификаты, также известные как сертификаты с альтернативным именем субъекта (SAN) или сертификаты унифицированных коммуникаций (UCC). SAN-сертификаты созданы для защиты дополнительных доменов для офисных коммуникационных серверов и серверов Microsoft Exchange. Это делает управление простым и быстрым, у вас есть тот же CSR/Key, та же проверка и те же файлы для установки. <br /><br /> Многодоменные SSL-сертификаты поддерживают до 250 доменов и поддоменов на неограниченном количестве серверов. Вы можете добавлять или изменять доменные имена, используя бесплатные и неограниченные перевыпуски с помощью нашей платформы управления SSL.</span>
            </p>
            <br /><br /><br /><br />
            <table className='table-list'>
                <thead>
                    <tr className='title-details'>
                        <th className='multi-product-title'>Название продукта</th>
                        <th>Цена/год</th>
                        <th></th>
                    </tr>
                </thead>
                <tbody>
                    {
                        md.map((item, index) => {
                            return (
                                <tr key={index} className='product-list-details'>
                                    <td className='product-name'>{firstTextColor(item.product_name)}</td>
                                    <td className='product-price'>{formatNumber(roundToTwoDecimalPlaces(item.product_prices[0].price * USD + item.product_prices[0].price * USD * 0.12))} UZS</td>
                                    <td className='details-btn'>
                                        <a href={`/product/${item.product_id}`} className='details-arrow-btn'>
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
            <h5 className='other-brands'>Самые популярные многодоменные SSL-сертификаты</h5>
            <p>Здесь представлен краткий обзор самых популярных DV-сертификатов от ведущих центров сертификации. В таблице выше представлен список всех SAN-сертификатов, доступных через наш SSL-магазин. Свяжитесь с нашими менеджерами, если вы не можете найти конкретный сертификат.</p>
        </div>
    )
}
