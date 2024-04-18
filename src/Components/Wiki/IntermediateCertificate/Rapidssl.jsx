import React, { useEffect } from 'react'
import { FaExpeditedssl } from 'react-icons/fa'
import { GrNext } from 'react-icons/gr'

export default function Rapidssl() {
    useEffect(() => {
        document.title = 'Промежуточные и корневые сертификаты CA RapidSSL'
    })
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
                <a href='/wiki/intermediate-certificates'>Промежуточные сертификаты</a>
                <span className='next'>
                    <svg viewBox='0 0 19 32'>
                        <path
                            d="M5.66962.995l12.304 12.89c.642.643.964 1.287.961 2.144s-.326 1.501-.97 2.144l-12.353 12.839c-.539.643-1.288.856-2.254.854-.858-.001-1.609-.218-2.25-.863-1.392-1.397-1.39-2.79.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9.009-4.289.645-.641 1.396-.854 2.253-.852.966 0 1.716.218 2.25.86v.001z">
                        </path>
                    </svg>
                </span>
                <span className='current'>Промежуточные и корневые сертификаты CA RapidSSL</span>
            </div>
            <div className="wiki-main">
                <h3>Промежуточные и корневые сертификаты CA RapidSSL</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <FaExpeditedssl className='cert-txt-svg' />
                    </span>
                    <span>Мы подготовили все возможные корневые сертификаты, промежуточные сертификаты и файлы пакета, необходимые для установки любого SSL, приобретенного через наш SSL-магазин. Большинство файлов доступны в обоих форматах - CRT и TXT. Вы можете открыть TXT-файл любым блокнотом или стандартным текстовым редактором вашего устройства.</span>
                </p>
                <ul className='wiki-guide'>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>1</span>
                        </div>
                        <div>
                            <h4 className='term-title' style={{ color: '#9d7040' }}>Сертификаты RapidSSL</h4>
                            <p>Здесь представлен полный список всех файлов корневых и промежуточных сертификатов для нашего бренда SSL.</p>
                            <div>
                                <p className='file-title'>
                                    <span><GrNext /></span>
                                    <span>Промежуточные центры сертификации SHA-2 (под корнем SHA-1)</span>
                                </p>
                                <p className='download-file'>RapidSSL RSA DV CA <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/RapidSSL_RSA_CA_2018.crt">CRT файл</a> | <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/RapidSSL_RSA_CA_2018.txt">TXT файл</a></p>
                                <p className='download-file'>Root RSA CA <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/DigiCert_Global_Root_CA.crt">CRT файл</a> | <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/DigiCert_Global_Root_CA.txt">TXT файл</a></p>
                                <p className='download-file'>RSA DV Bundle <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/RapidSSL_RSA_CA_2018_bundle.txt">TXT файл</a></p>
                            </div>
                            <div>
                                <p className='file-title'>
                                    <span><GrNext /></span>
                                    <span>Промежуточные центры сертификации SHA-2 (под корнем SHA-2)</span>
                                </p>
                                <p className='download-file'>RapidSSL RSA DV CA <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/RapidSSL_TLS_RSA_CA_G1.txt">CRT файл</a> | <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/RapidSSL_TLS_RSA_CA_G1.txt">TXT файл</a></p>
                                <p className='download-file'>Root RSA CA <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/DigiCert_Global_Root_G2.crt">CRT файл</a> | <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/DigiCert_Global_Root_G2.txt">TXT файл</a></p>
                                <p className='download-file'>RSA DV Bundle <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/RapidSSL_TLS_RSA_CA_G1_bundle.txt">TXT файл</a></p>
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