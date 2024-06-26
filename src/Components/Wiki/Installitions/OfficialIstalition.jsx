import React, { useEffect } from 'react'
import { GiGearHammer } from "react-icons/gi";


export default function OfficialIstalition() {
    useEffect(() => {
        document.title = 'Руководства по установке DigiCert и Sectigo SSL'
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
                <a href='/wiki/installation'>Руководства по установке</a>
                <span className='next'>
                    <svg viewBox='0 0 19 32'>
                        <path
                            d="M5.66962.995l12.304 12.89c.642.643.964 1.287.961 2.144s-.326 1.501-.97 2.144l-12.353 12.839c-.539.643-1.288.856-2.254.854-.858-.001-1.609-.218-2.25-.863-1.392-1.397-1.39-2.79.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9.009-4.289.645-.641 1.396-.854 2.253-.852.966 0 1.716.218 2.25.86v.001z">
                        </path>
                    </svg>
                </span>
                <span className='current'>Руководства по установке DigiCert и Sectigo SSL</span>
            </div>
            <div className="wiki-main">
                <h3>Руководства по установке DigiCert и Sectigo SSL</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <GiGearHammer className='cert-txt-svg' />
                    </span>
                    <span>Наша команда подготовила список наиболее распространенных ресурсов, которые помогут вам сгенерировать код CSR, установить SSL-сертификат на ваш сервер и проверить правильность установки. Чтобы заказать SSL-сертификат, необходимо сгенерировать пару из запроса на подписание сертификата (CSR) и ключа RSA.</span>
                </p>
                <div className="wiki-bg-dark">
                    <div className='manuals-ssl'>
                        <h2><span style={{color: '#00b073'}}>Sectigo</span> (ранее Comodo CA)</h2>
                        <a href="https://sectigo.com/resources?type=technical-documents&topic=how-to-guides">Генерировать CSR</a>
                        <a href="https://sectigo.com/resources?type=technical-documents&topic=how-to-guides">Установите SSL-сертификат</a>
                        <a href="https://www.ssllabs.com/ssltest/">Проверка SSL</a>
                    </div>
                    <div className='manuals-ssl'>
                        <h2>DigiCert (RapidSSL, GeoTrust, Thawte)</h2>
                        <a href="https://www.digicert.com/csr-creation.htm">Генерировать CSR</a>
                        <a href="https://www.digicert.com/ssl-certificate-installation.htm">Установите SSL-сертификат</a>
                        <a href="https://ssltools.digicert.com/checker/">Проверка SSL</a>
                    </div>
                    <div className='manuals-ssl'>
                        <h2><span style={{color: '#dc8510'}}>GoGetSSL®</span> SSL сертификаты</h2>
                        <a href="https://sectigo.com/resources?type=technical-documents&topic=how-to-guides">Генерировать CSR</a>
                        <a href="https://sectigo.com/resources?type=technical-documents&topic=how-to-guides">Установите SSL-сертификат</a>
                        <a href="https://www.ssllabs.com/ssltest/">Проверка SSL</a>
                    </div>
                </div>
            </div>
            <div className='wiki-main-link-box'>
                <a className='wiki-main-link' href="/wiki">Вернуться в SSL Wiki</a>
            </div>
        </>
    )
}