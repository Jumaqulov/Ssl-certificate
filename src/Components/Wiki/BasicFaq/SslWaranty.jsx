import React, { useEffect, useState } from 'react'
import { FaQuestionCircle } from 'react-icons/fa'
import Allproducts from '../../../Requests/Allproducts';
import axios from 'axios';
import { Url } from '../../../Requests/request';
import { Circles } from 'react-loader-spinner';

export default function SslWaranty() {
    const [product, setProduct] = useState([])
    const [results, setResults] = useState([]);
    const [loading, setLoading] = useState(true);

    async function products() {
        setLoading(true)
        const currentProducts = await Allproducts.getProducts()
        setProduct(currentProducts)
        setLoading(false)
    }

    const fetchData = async () => {
        setLoading(true);
        try {
            const requests = product.map(product =>
                axios.get(`${Url}/products/details/${product.id}`)
            );
            const responses = await Promise.all(requests);
            const fetchedResults = responses.map(response => response.data);
            setResults(fetchedResults);
        } catch (error) {
            console.error('Error fetching data:', error);
        }
        setLoading(false);
    };

    const firstTextColor = (text) => {
        let words = text.split(' ');
        let firstWord = words[0];
        let remainingWords = words.slice(1).join(' ');
        let highlightedProductName = (
            <>
                <span>
                    <span className='faq-ssl-title' style={{ color: firstWord === 'DigiCert' ? '#0274c4' : firstWord === 'GeoTrust' ? '#23a095' : firstWord === 'RapidSSL' ? '#9d7040' : firstWord === 'GoGetSSL' ? '#dc8510' : firstWord === 'Sectigo' ? '#00b073' : firstWord === 'Thawte' ? '#d2143ce6' : '#0274c4' }}>{firstWord}</span>
                    <span style={{ color: '#9e9e9e' }}> {remainingWords}</span>
                </span>
            </>
        );
        return highlightedProductName;
    }

    useEffect(() => {
        document.title = 'Гарантия SSL';
        products();
    }, []);

    useEffect(() => {
        if (product.length > 0) {
            fetchData();
        }
    }, [product]);
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
                <span className='current'>Гарантия SSL</span>
            </div>
            <div className="wiki-main">
                <h3>SSL-сертификаты с проверкой бизнеса</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <FaQuestionCircle className='cert-txt-svg' />
                    </span>
                    <span>Центры сертификации предоставляют дополнительную гарантию безопасности вашего онлайн-бизнеса и работы сайта. Гарантия - один из ключевых элементов сертификата и может быть весомым аргументом при его выборе. Эта гарантия выплачивается посетителям вашего сайта, которые положились на сертификат и понесли убытки непосредственно в результате транзакции по кредитной карте в Интернете и неправильного выпуска SSL-сертификата. Гарантия выплачивается на непогашенную сумму транзакции, не превышающую максимальную сумму транзакции, указанную для соответствующего типа сертификата.</span>
                </p>
                <p>Сертификаты VeriSign (Symantec) были первыми, предлагавшими гарантию в 1 миллион долларов. Сегодня у большинства ведущих центров сертификации мало продуктов с таким уровнем или выше, как правило, это сертификаты с расширенной валидностью.</p>
                <p>Число мошеннических и фишинговых сайтов растет с каждым днем, поэтому очень важно подтвердить подлинность бизнеса. Центры сертификации проводят тщательную проверку, чтобы убедиться, что ваш бизнес легален и может получить сертификаты OV или EV. Оплата SSL никогда не гарантирует, что он будет выдан, даже крупные компании могут не пройти проверку, поскольку правила одинаковы для всех.</p>
                <div>
                    <h4 className="term-title">Сумма гарантии</h4>
                    <p>Здесь приведен список всех сертификатов, которые мы продаем в нашем магазине SSL с гарантией:</p>
                    {
                        loading ?
                            <div className="loader">
                                <Circles height="80" width="80" color="#dc8510" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
                            </div>
                            :
                            <div>
                                {
                                    results.map((t, i) => {
                                        return (
                                            i % 2 !== 0 ?
                                                <p className='faq-view-ssl od-raw' key={i}>{firstTextColor(t.product_name)} <span>{t.ssl_warranty === ''  ? 'недоступно' : t.ssl_warranty}</span></p>
                                                : <p className='faq-view-ssl' key={i}>{firstTextColor(t.product_name)} <span>{t.ssl_warranty === ''  ? 'недоступно' : t.ssl_warranty}</span></p>
                                        )
                                    })
                                }
                            </div>
                    }
                </div>
            </div>
            <div className='wiki-main-link-box'>
                <a className='wiki-main-link' href="/wiki">Вернуться в SSL Wiki</a>
            </div>
        </>
    )
}