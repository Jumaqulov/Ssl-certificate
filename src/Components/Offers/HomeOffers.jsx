import React from 'react'
import { CiLock, CiGlobe } from "react-icons/ci";
import { IoInfiniteSharp } from "react-icons/io5";
import AboutOffer from './AboutOffer'
import { USD } from '../../Requests/request.js';
import { Helmet } from 'react-helmet';


export default function HomeOffers() {
    function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    const roundToTwoDecimalPlaces = (number) => {
        let roundedNumber = Math.ceil(number);
        let result = (Math.ceil(roundedNumber / 100) * 100).toFixed(2);
        return result;
    }
    return (
        <>
            <Helmet>
                <meta name="keywords" content="DigiCert SSL, RapidSSL SSL, Sectigo SSL, Thawte SSL, GeoTrust SSL, SSL sotib olish, купить SSL, сертификаты SSL, узбекистан, Ташкент" />
                <meta name="description" content="Дешевые SSL-сертификаты. Профессиональные SSL-сертификаты от DigiCert, Thawte, GeoTrust, RapidSSL, GoGetSSL и Sectigo по низким ценам. DV, OV, EV, Wildcard SSL и многодоменные сертификаты" />
                <meta property="og:description" content="Дешевые SSL-сертификаты. Профессиональные SSL-сертификаты от DigiCert, Thawte, GeoTrust, RapidSSL, GoGetSSL и Sectigo по низким ценам. DV, OV, EV, Wildcard SSL и многодоменные сертификаты" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Дешевые SSL-сертификаты" />
                <meta property="og:site_name" content="SSL Certificate" />
                <meta property="og:url" content="https://sslcertificate.uz" />
                <title>Дешевые и Надежные SSL-сертификаты для вашего сайта</title>
            </Helmet>
            <div className='home-offers'>
                <div className='offer-box'>
                    <div className="offers offer-1">
                        <h4 className='title-offer'>Домен</h4>
                        <ul>
                            <li>Защита домена/поддоменов</li>
                            <li>Никакой бумажной волокиты</li>
                            <li>Выдается в течение 5 минут</li>
                        </ul>
                        <div className='offer-svg-link offer-svg-link-1'>
                            <div>
                                <span><CiLock /></span>
                                <span><CiLock /></span>
                                <span><CiLock /></span>
                            </div>
                            <a className='offer-link offer-link-1' href="/dv-ssl">Купить сейчас</a>
                        </div>
                        <h6>Начиная с <span>{formatNumber(255600)} UZS</span></h6>
                    </div>
                    <div className="offers offer-1">
                        <h4 className='title-offer'>Бизнес</h4>
                        <ul>
                            <li>Защита домена/поддоменов</li>
                            <li>Проверяет компанию</li>
                            <li>Выдается в течение 2-4 дней</li>
                        </ul>
                        <div className='offer-svg-link offer-svg-link-2'>
                            <div>
                                <span>
                                    <CiLock />
                                </span>
                                <span>
                                    <CiLock />
                                </span>
                                <span>
                                    <CiLock />
                                </span>
                            </div>
                            <a className='offer-link offer-link-2' href="/ov-ssl">Купить сейчас</a>
                        </div>
                        <h6>Начиная с <span>{formatNumber(540400)} UZS</span></h6>
                    </div>
                    <div className="offers offer-1">
                        <h4 className='title-offer'>Расширенный</h4>
                        <ul>
                            <li>Защита домена/поддоменов</li>
                            <li>Зеленый знак сайта</li>
                            <li>Выдается в течение 2-7 дней</li>
                        </ul>
                        <div className='offer-svg-link offer-svg-link-3'>
                            <div>
                                <span>
                                    <CiLock />
                                </span>
                                <span>
                                    <CiLock />
                                </span>
                                <span>
                                    <CiLock />
                                </span>
                            </div>
                            <a className='offer-link offer-link-3' href="/ev-ssl">Купить сейчас</a>
                        </div>
                        <h6>Начиная с <span>{formatNumber(1334400)} UZS</span></h6>
                    </div>
                    <div className="offers offer-2">
                        <h4 className='title-offer'>Wildcard SSL</h4>
                        <ul>
                            <li>Неограниченное количество поддоменов</li>
                            <li>Неограниченное лицензирование серверов</li>
                            <li>Выдается в течение 5 минут</li>
                        </ul>
                        <div className='offer-svg-link'>
                            <span>
                                <IoInfiniteSharp className='infinty-svg' />
                            </span>
                            <a className='offer-link offer-link-4' href="/wildcard-ssl">Купить сейчас</a>
                        </div>
                        <h6>Начиная с <span>{formatNumber(1281600)} UZS</span></h6>
                    </div>
                    <div className="offers offer-2">
                        <h4 className='title-offer'>Мультидомен</h4>
                        <ul>
                            <li>Защищает до 250 доменов</li>
                            <li>Совместимость с MS Exchange</li>
                            <li>Экономия денег и времени</li>
                        </ul>
                        <div className='offer-svg-link'>
                            <a className='offer-link offer-link-3' href="/multi-domian-ssl">Купить сейчас</a>
                            <span>
                                <CiGlobe className='san-svg' />
                            </span>
                        </div>
                        <h6>Начиная с <span>{formatNumber(778100)} UZS</span></h6>
                    </div>
                </div>
                <AboutOffer />
            </div>
        </>
    )
}