import React, { useEffect } from 'react'
import { IoIosArrowForward, IoLogoGoogle } from "react-icons/io";
import { USD } from '../../../Requests/request.js';

export default function SEObooster() {
    function arrow_link() {
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

    function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    const roundToTwoDecimalPlaces = (number) => {
        let roundedNumber = Math.ceil(number);
        let result = (Math.ceil(roundedNumber / 100) * 100).toFixed(2);
        return result;
    }

    useEffect(() => {
        document.title = 'SEO-ускоритель Google'
    }, [])
    return (
        <>
            <div className="wiki-path">
                <a href="/">Главная</a>
                <span className='next'>
                    <svg viewBox='0 0 19 32'>
                        <path
                            d="M5.66962.995l12.304 12.89c.642.643.964 1.287.961 2.144s-.326 1.501-.97 2.144l-12.353 12.839c-.539.643-1.288.856-2.254.854-.858-.001-1.609-.218-2.25-.863-1.392-1.397-1.39-2.79.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9.009-4.289.645-.641 1.396-.854 2.253-.852.966 0 1.716.218 2.25.86v.001z">
                        </path>
                    </svg>
                </span>
                <a href='/wiki'>Wiki</a>
                <span className='next'>
                    <svg viewBox='0 0 19 32'>
                        <path
                            d="M5.66962.995l12.304 12.89c.642.643.964 1.287.961 2.144s-.326 1.501-.97 2.144l-12.353 12.839c-.539.643-1.288.856-2.254.854-.858-.001-1.609-.218-2.25-.863-1.392-1.397-1.39-2.79.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9.009-4.289.645-.641 1.396-.854 2.253-.852.966 0 1.716.218 2.25.86v.001z">
                        </path>
                    </svg>
                </span>
                <a href='/wiki/ssl-basics'>Основы SSL / FAQ</a>
                <span className='next'>
                    <svg viewBox='0 0 19 32'>
                        <path
                            d="M5.66962.995l12.304 12.89c.642.643.964 1.287.961 2.144s-.326 1.501-.97 2.144l-12.353 12.839c-.539.643-1.288.856-2.254.854-.858-.001-1.609-.218-2.25-.863-1.392-1.397-1.39-2.79.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9.009-4.289.645-.641 1.396-.854 2.253-.852.966 0 1.716.218 2.25.86v.001z">
                        </path>
                    </svg>
                </span>
                <span className='current'>SEO-ускоритель Google</span>
            </div>
            <div className="wiki-main">
                <h3>SSL-сертификаты с проверкой бизнеса</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <IoLogoGoogle className='cert-txt-svg' />
                    </span>
                    <span>Добавление 2048-битного SSL-сертификата с хэш-алгоритмом SHA-256 - это законный и одобренный метод повышения рейтинга вашего сайта в поисковой выдаче Google. Google объявил, что каждый сайт с надежным SSL будет иметь более высокие позиции по сравнению с теми сайтами, у которых нет активного SSL-сертификата.</span>
                </p>
                <p>Анализ последних нескольких месяцев показал положительные результаты для многих владельцев сайтов, включая наш собственный сайт. Обратите внимание, что изменения дают легкий/незначительный прирост в рейтинге, в то время как качество контента остается главным фактором. Однако иногда даже один положительный прирост может значительно улучшить продажи и конверсию.</p>
                <h4 className="term-title">Отличные предложения для начала повышения рейтинга</h4>
                <ul className="wiki-guide">
                    <li>
                        <div className='wiki-guide-num'>
                            <span>1</span>
                        </div>
                        <div>
                            <h4 className="term-title">GoGetSSL® Доменный SSL-сертификат</h4>
                            <p>Один из самых дешевых и надежных SSL-сертификатов Domain Validation, позволяющий защитить доменное имя или поддомен в течение нескольких минут. Никаких документов не требуется. Подходит для любых онлайн-проектов и почтовых серверов. Доверяет до 99,6% браузеров и мобильных устройств благодаря полной поддержке алгоритмов ECC и RSA.</p>
                            <div className="cert-pricing">
                                <a className='ev-ov-ssl' href="/product/gogetssl-domain-ssl">
                                    <div className='arrows-link'>
                                        {arrow_link()}
                                    </div>
                                    <span>Просмотр SSL-сертификатов</span>
                                </a>
                                <span className='cert-price'>Начиная с <b className='ev-price'>{formatNumber(roundToTwoDecimalPlaces(24.00 * USD))} UZS</b> в год</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>2</span>
                        </div>
                        <div>
                            <h4 className="term-title">GoGetSSL® Wildcard SSL</h4>
                            <p>Великолепный SSL для защиты базового домена с неограниченным количеством субдоменов. Он поставляется с неограниченным лицензированием серверов, что означает, что вы можете установить его на любое количество IP-адресов, серверов и устройств без дополнительной платы. Никакой бумажной волокиты и бесплатное переоформление. 30-дневная гарантия возврата денег.</p>
                            <div className="cert-pricing">
                                <a className='ev-ov-ssl' href="/product/gogetssl-wildcard-ssl">
                                    <div className='arrows-link'>
                                        {arrow_link()}
                                    </div>
                                    <span>Просмотр SSL-сертификатов</span>
                                </a>
                                <span className='cert-price'>Начиная с <b className='ev-price'>{formatNumber(roundToTwoDecimalPlaces(72.00 * USD))} UZS</b> в год</span>
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>3</span>
                        </div>
                        <div>
                            <h4 className="term-title">GoGetSSL® Multi-Domain SSL</h4>
                            <p>Multi-Domain SSL предоставляет возможность защитить все ваши домены и поддомены одновременно. Он может иметь до 250 элементов SAN, и каждый элемент SAN может охватывать домен или поддомен. Это SSL с проверкой домена и быстрым процессом выдачи. Предоставляется возможность возврата денег в течение 30 дней.</p>
                            <div className="cert-pricing">
                                <a className='ev-ov-ssl' href="/product/gogetssl-multi-domain-ssl">
                                    <div className='arrows-link'>
                                        {arrow_link()}
                                    </div>
                                    <span>Просмотр SSL-сертификатов</span>
                                </a>
                                <span className='cert-price'>Начиная с <b className='ev-price'>{formatNumber(roundToTwoDecimalPlaces(72.00 * USD))} UZS</b> в год</span>
                            </div>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='wiki-main-link-box'>
                <a className='wiki-main-link' href="/wiki">Вернуться в SSL Wiki</a>
            </div>
        </>
    )
}