import React from 'react'
import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";
import { LiaShieldAltSolid } from "react-icons/lia";


export default function DV2({ dv, productList }) {
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
    // console.log("results=>", productList);
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
        setTimeout(() => {
            navigate(`/product/${data.product_id}`, {
                state: { productDetails: data, item }
            });
        }, 1000);
    }

    return (
        <div className='cert-txt'>
            <h3>SSL-сертификаты с проверкой домена</h3>
            <p className='cert-txt-item'>
                <span className='validation-icon-box'>
                    <LiaShieldAltSolid className='dv-navshield icon-navshield' />
                    <span className='icon-box-d icon-box'>D</span>
                </span>
                <span>SSL-сертификаты Domain Validation доступны всем физическим лицам, индивидуальным предпринимателям, предприятиям, организациям и государственным структурам. Не нужно предоставлять никаких документов или обрабатывать обратные вызовы. Все, что вам нужно, - пройти проверку владения доменом одним из доступных способов. Вы можете защитить как личные сайты, так и порталы компаний и проекты электронной коммерции. <br /> <br /> Даже дешевые SSL-сертификаты предоставляют логотип Static Site Seal, неограниченное количество бесплатных перевыпусков, неограниченное количество лицензий для серверов, Google Rank booster и 30-дневную гарантию возврата денег. Мы рекомендуем их для небольших сайтов и проектов, которым не требуется повышенный уровень доверия со стороны конечных клиентов.</span>
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
                        dv.map((item, index) => {
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
            <h5 className='other-brands'>Самые популярные и дешевые SSL-сертификаты</h5>
            <p>Здесь представлен краткий обзор наиболее популярных DV-сертификатов от ведущих центров сертификации, продаваемых через наш интернет-магазин. Пожалуйста, ознакомьтесь с полным списком всех предлагаемых нами продуктов в таблице выше. Свяжитесь с нашей командой, если вас интересуют продукты DV, не представленные на нашем сайте.</p>
        </div>
    )
}