import React, { useEffect } from 'react'
import WikiCategories from '../WikiCategories'


export default function Intermediate() {
    useEffect(() => {
        document.title = 'gogetssl.uz - Вики - Промежуточные сертификаты'
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
                <span className='current'>Промежуточные сертификаты</span>
            </div>
            <div className="wiki-main">
                <h3>Вики - Промежуточные сертификаты</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <svg className='cert-txt-svg' viewBox="0 0 28 32">
                            <path
                                d="M21.901 11.363v-3.36c0-4.355-3.546-7.9-7.901-7.9s-7.901 3.545-7.901 7.9v3.36H.438V16.9h27.124v-5.537h-5.66zm-12.878 0v-3.36A4.992 4.992 0 0 1 14 3.026a4.992 4.992 0 0 1 4.977 4.977v3.36H9.023zm17.109 4.417h-3.733v-3.235h3.733v3.235zM.438 24.427h27.124V18.89H.438v5.537zm21.96-4.354h3.734v3.235h-3.733v-3.235zM.439 31.955h27.124v-5.537H.438v5.537zm21.96-4.417h3.734v3.297h-3.733v-3.297z">
                            </path>
                        </svg>
                    </span>
                    <span>В данном разделе перечислены все сертификаты промежуточных и корневых центров сертификации, выпущенные центрами сертификации, с которыми мы работаем. В него входят Sectigo (ранее Comodo), GoGetSSL SUB-CA, DigiCert, RapidSSL, GeoTrust и Thawte. Большинство файлов доступны в форматах CRT и TXT.</span>
                </p>
                <ul className='wiki-guide'>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>1</span>
                        </div>
                        <div>
                            <a href="/wiki/intermediate-certificates/gogetssl-intermediate-root-certificates">Промежуточные и корневые сертификаты ЦС GoGetSSL</a>
                            <p>Подходит для всех активных продуктов, таких как: Неограниченная пробная версия, Domain SSL, Wildcard SSL, Multi-Domain SSL, BusinessTrust EV, BusinessTrust EV SAN, BusinessTrust, BusinessTrust Wildcard, BusinessTrust SAN, Code Signing SSL, EV Code Signing, Multi-Domain Wildcard SSL, Public IP SAN.</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>2</span>
                        </div>
                        <div>
                            <a href="/wiki/intermediate-certificates/sectigo-intermediate-root-certificates">Сертификаты промежуточного и корневого центров сертификации Sectigo</a>
                            <p>Подходит для всех активных продуктов, таких как: EnterpriseSSL certs, PositiveSSL certs, EssentialSSL certs, Sectigo certs, InstantSSL certs, EV Code Signing SSL и Code Signing SSL, S/MIME certs.</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>3</span>
                        </div>
                        <div>
                            <a href="/wiki/intermediate-certificates/rapidssl-intermediate-root-certificates">Промежуточные и корневые сертификаты ЦС RapidSSL</a>
                            <p>Подходит для всех активных продуктов, таких как: RapidSSL standard, RapidSSL Wildcard и 30-дневные пробные SSL-сертификаты.</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>4</span>
                        </div>
                        <div>
                            <a href="/wiki/intermediate-certificates/thawte-intermediate-root-certificates">Промежуточные и корневые сертификаты ЦС Thawte</a>
                            <p>Подходит для всех активных продуктов, таких как: SSL Web Server Multi-Domain Wildcard, SSL с подписью кода, Web Server SSL, SSL 123, Web Server EV, Wildcard SSL Certificate, SSL 123 Wildcard</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>5</span>
                        </div>
                        <div>
                            <a href="/wiki/intermediate-certificates/geotrust-intermediate-root-certificates">Промежуточные и корневые сертификаты ЦС GeoTrust</a>
                            <p>Подходит для всех активных продуктов, таких как: QuickSSL Premium SAN, TrueBusinessID SAN Wildcard, QuickSSL Premium, TrueBusinessID, TrueBusinessID Wildcard, TrueBusinessID EV, TrueBusinessID SAN, TrueBusinessID EV SAN, QuickSSL Premium Wildcard</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>6</span>
                        </div>
                        <div>
                            <a href="/wiki/intermediate-certificates/digicert-intermediate-root-certificates">Сертификаты промежуточных и корневых центров сертификации DigiCert</a>
                            <p>Подходит для всех активных продуктов, таких как: DigiCert Code Signing SSL, DigiCert Secure Site, DigiCert Secure Site PRO, DigiCert Secure Site PRO EV, DigiCert Secure Site EV, DigiCert Secure Site Wildcard, DigiCert Extended Validation Code Signing, DigiCert Secure Site PRO Wildcard</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>7</span>
                        </div>
                        <div>
                            <a href="/wiki/intermediate-certificates/sectio-addtrust-external-ca-root-expires">Sectigo AddTrust CA Root истекает в мае 2020 года</a>
                            <p>Грядущее истечение срока действия корня AddTrust - что нужно знать В настоящее время компания Sectigo предлагает возможность перекрестной подписи сертификатов с корнем AddTrust legacy, чтобы расширить поддержку очень старых систем и устройств. Срок действия этого корня истекает в конце мая 2020 года. Любые приложения или установки, зависящие от этого перекрестно подписанного корня, должны быть обновлены до мая 2020 года, иначе существует риск сбоя в работе или появления сообщения об ошибке.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <WikiCategories />
        </>
    )
}