import React from 'react'
import { CiLock } from 'react-icons/ci'
import { Helmet } from 'react-helmet';


export default function Company() {
    return (
        <>
            <Helmet>
                <meta name="description" content="SSL Certificate.uz - надежные SSL-сертификаты для вашего веб-сайта. Узнайте больше о безопасности онлайн и защитите свой сайт прямо сейчас!" />
                <meta name='keywords' content='Starlab Ssl, starlab ssl, ssl sertificate, сертификаты ssl' />
                <meta property="og:description" content="SSL Certificate.uz - надежные SSL-сертификаты для вашего веб-сайта. Узнайте больше о безопасности онлайн и защитите свой сайт прямо сейчас!" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Обзор о SSL Certificate.uz" />
                <meta property="og:site_name" content="SSL Certificate" />
                <meta property="og:url" content="https://sslcertificate.uz" />
                <title>Обзор о SSL Certificate.uz</title>
            </Helmet>
            <div className='certificates'>
                <div className='cert-txt'>
                    <h1 title='about this page'>О нашей компании SSL</h1>
                    <p className='cert-txt-item'>
                        <span>
                            <CiLock className='cert-txt-svg' />
                        </span>
                        <span>sslcertificate.uz является одним из крупнейших поставщиков SSL-сертификатов в мире и принадлежит компании Starlab. Наша цель - сделать использование Всемирной паутины безопасным и защищенным с помощью различных услуг, которые мы предоставляем, таких как SSL-сертификаты, средства защиты от вредоносного ПО и сканеры, печати сайта и коды LEI. В настоящее время мы предоставляем сертификаты доменной, бизнес и расширенной валидации, Wildcard, мультидоменные (SAN), сертификаты с подписью кода и S/MIME.</span>
                    </p>
                    <p>Наша компания предоставляет услугу по продаже лицензионных программ в Ташкенте. Мы предлагаем широкий выбор программ для бизнеса, офиса и дома, а также специализированные решения для различных отраслей.
                        Важно отметить, что мы работаем только с официальными поставщиками и гарантируем подлинность каждой программы. Это обеспечивает безопасность использования, а также предоставляет право на обновления и поддержку программного обеспечения.
                        Кроме того, наши специалисты всегда готовы оказать помощь в выборе программы и ее установке. Мы ценим своих клиентов и всегда нацелены на долгосрочное сотрудничество, поэтому предлагаем конкурентные цены и высокое качество обслуживания.
                        Если вы ищете надежного официального партнера для приобретения лицензионных программ в Ташкенте, обращайтесь к нам. Мы готовы помочь вам решить любые задачи по автоматизации бизнеса и повышению эффективности работы компьютеров.{}</p>
                    {/* <div className="info-block">
                        <div>
                            <span>1,700,000+</span>
                            <span>Выданные сертификаты</span>
                        </div>
                        <div>
                            <span>101,500+</span>
                            <span>Клиенты</span>
                        </div>
                        <div>
                            <span>9,000+</span>
                            <span>Партнеры по всему миру</span>
                        </div>
                    </div> */}
                    {/* <h2 className='be-partner'>
                        <a className='be-partner-1'>
                            <FaHandshake />
                            <span>Наши основные партнеры</span>
                        </a>
                        <a className='be-partner-2'>
                            <span>Наши основные партнеры</span>
                        </a>
                    </h2> */}
                    {/* <div className='company-extra'>
                        <div>
                            <p>RapidLEI</p>
                        </div>
                        <div>
                            <h3>Стратегический партнер RapidLEI</h3>
                            <p>Миссия SSL-сертификатов от RapidSSL - предоставить вам SSL-сертификат как можно быстрее, поэтому все процессы полностью автоматизированы. Никакой бумажной волокиты, все, что вам нужно для получения SSL, - это подтвердить владение доменом по электронной почте. RapidSSL принадлежит и управляется компанией GeoTrust. Получите дополнительную информацию на сайте <a href="https://www.rapidssl.com/" target='_blank'>www.rapidssl.com</a>.</p>
                        </div>
                    </div> */}
                </div>
            </div>
        </>
    )
}