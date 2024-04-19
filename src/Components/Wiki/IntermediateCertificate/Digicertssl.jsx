import React, { useEffect } from 'react'
import { FaExpeditedssl } from 'react-icons/fa'
import { GrNext } from 'react-icons/gr'

export default function Digicertssl() {
    useEffect(() => {
        document.title = 'Промежуточные и корневые сертификаты CA DigiCert'
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
                <span className='current'>Промежуточные и корневые сертификаты CA DigiCert</span>
            </div>
            <div className="wiki-main">
                <h3>Промежуточные и корневые сертификаты CA DigiCert</h3>
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
                            <h4 className='term-title' style={{ color: '#0274c4' }}>Сертификаты DigiCert</h4>
                            <p>Здесь представлен полный список всех файлов корневых и промежуточных сертификатов для нашего бренда SSL.</p>
                            <div>
                                <p className='file-title'>
                                    <span><GrNext /></span>
                                    <span>Файлы DigiCert OV (RSA)</span>
                                </p>
                                <p className='download-file'>DigiCert SHA2 Secure Server CA <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/digicert-sha2-secure-server-ca.crt">CRT файл</a> | <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/digicert-sha2-secure-server-ca.txt">TXT файл</a></p>
                                <p className='download-file'>DigiCert Global Root CA (SHA1) <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/digicert-global-root-ca-sha1.crt">CRT файл</a> | <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/digicert-global-root-ca-sha1.txt">TXT файл</a></p>
                                <p className='download-file'>DigiCert RSA OV Bundle <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/digicert-sha2-secure-server-ca-bundle.txt">TXT файл</a></p>
                            </div>
                            <div>
                                <p className='file-title'>
                                    <span><GrNext /></span>
                                    <span>Файлы DigiCert EV (RSA)</span>
                                </p>
                                <p className='download-file'>DigiCert EV RSA CA <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/digicert-sha2-ev-ca.crt">CRT файл</a> | <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/digicert-sha2-ev-ca.txt">TXT файл</a></p>
                                <p className='download-file'>DigiCert HA EV Root CA (SHA1) <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/digicert-ha-ev-root-ca-sha1.crt">CRT файл</a> | <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/digicert-ha-ev-root-ca-sha1.txt">TXT файл</a></p>
                                <p className='download-file'>DigiCert EV Bundle <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/digicert-sha2-ev-ca-bundle.txt">TXT файл</a></p>
                            </div>
                            <div>
                                <p className='file-title'>
                                    <span><GrNext /></span>
                                    <span>Файлы DigiCert OV (ECC)</span>
                                </p>
                                <p className='download-file'>DigiCert ECC CA <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/DigiCertGlobalCAG3.crt">CRT файл</a> | <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/DigiCertGlobalCAG3.txt">TXT файл</a></p>
                                <p className='download-file'>DigiCert ECC Root <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/DigiCert_Global_Root_G3.crt">CRT файл</a> | <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/DigiCert_Global_Root_G3.txt">TXT файл</a></p>
                                <p className='download-file'>DigiCert ECC OV Bundle <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/DigiCertGlobalCAG3-bundle.txt">TXT файл</a></p>
                            </div>
                            <div>
                                <p className='file-title'>
                                    <span><GrNext /></span>
                                    <span>Файлы DigiCert EV (ECC)</span>
                                </p>
                                <p className='download-file'>DigiCert EV ECC CA <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/DigiCertExtendedValidationCAG3.crt">CRT файл</a> | <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/DigiCertExtendedValidationCAG3.txt">TXT файл</a></p>
                                <p className='download-file'>DDigiCert ECC Root <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/DigiCert_Global_Root_G3.crt">CRT файл</a> | <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/DigiCert_Global_Root_G3.txt">TXT файл</a></p>
                                <p className='download-file'>DigiCert ECC EV Bundle <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/DigiCertExtendedValidationCAG3-bundle.txt">TXT файл</a></p>
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