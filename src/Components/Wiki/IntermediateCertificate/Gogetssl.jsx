import React, { useEffect } from 'react'
import { FaExpeditedssl } from 'react-icons/fa'
import { GrNext } from "react-icons/gr";

export default function Gogetssl() {
    useEffect(() => {
        document.title = 'Промежуточные и корневые сертификаты CA GoGetSSL'
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
                <span className='current'>Промежуточные и корневые сертификаты CA GoGetSSL</span>
            </div>
            <div className="wiki-main">
                <h3>Промежуточные и корневые сертификаты CA GoGetSSL</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <FaExpeditedssl className='cert-txt-svg' />
                    </span>
                    <span>Мы подготовили все возможные корневые сертификаты, промежуточные сертификаты и файлы пакета, необходимые для установки любого SSL, приобретенного через наш SSL-магазин. Большинство файлов доступны в обоих форматах - CRT и TXT. Вы можете открыть TXT-файл любым блокнотом или стандартным текстовым редактором вашего устройства.</span>
                </p>
                <ul className="wiki-guide">
                    <li>
                        <div className='wiki-guide-num'>
                            <span>1</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Сертификаты GoGetSSL™</h4>
                            <p>Здесь представлен полный список всех файлов корневых и промежуточных сертификатов для нашего бренда SSL.</p>
                            <div>
                                <p className='file-title'>
                                    <span><GrNext /></span>
                                    <span>Файлы DV ECC</span>
                                </p>
                                <p className='download-file'>GoGetSSL ECC DV CA <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/gogetssl-ecc-dv-ca.crt">CRT файл</a> | <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/gogetssl-ecc-dv-ca.txt">TXT файл</a></p>
                                <p className='download-file'>USERTrust ECC CA <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/AAA_certificate_ECC.crt">CRT файл</a> | <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/AAA_certificate_ECC.txt">TXT файл</a></p>
                                <p className='download-file'>ECC DV Bundle <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/gogetssl-ecc-dv-bundle.txt">TXT файл</a></p>
                            </div>
                            <div>
                                <p className='file-title'>
                                    <span><GrNext /></span>
                                    <span>Файлы DV RSA</span>
                                </p>
                                <p className='download-file'>GoGetSSL RSA DV CA <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/gogetssl-rsa-dv-ca.crt">CRT файл</a> | <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/gogetssl-rsa-dv-ca.txt">TXT файл</a></p>
                                <p className='download-file'>USERTrust RSA CA <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/AAA_certificate_RSA.crt">CRT файл</a> | <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/AAA_certificate_RSA.txt">TXT файл</a></p>
                                <p className='download-file'>RSA DV Bundle <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/gogetssl-rsa-dv-bundle.txt">TXT файл</a></p>
                                <p className='download-file'>RSA DV Bundle with SHA-1 <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/gogetssl-rsa-dv-bundle-sha1.txt">TXT файл</a></p>
                                <p style={{ color: '#23a095cc', padding: '0 0 0 30px', fontSize: '18px' }}>Этот пакет включает SHA-1 AddTrust External Root CA, необходимый для устаревших платформ и ZIMBRA.</p>
                            </div>
                            <div>
                                <p className='file-title'>
                                    <span><GrNext /></span>
                                    <span>Файлы OV ECC</span>
                                </p>
                                <p className='download-file'>GoGetSSL ECC OV CA <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/gogetssl-ecc-ov-ca.crt">CRT файл</a> | <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/gogetssl-ecc-ov-ca.txt">TXT файл</a></p>
                                <p className='download-file'>USERTrust ECC CA <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/AAA_certificate_ECC.crt">CRT файл</a> | <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/AAA_certificate_ECC.txt">TXT файл</a></p>
                                <p className='download-file'>ECC OV Bundle <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/gogetssl-ecc-ov-bundle.txt">TXT файл</a></p>
                            </div>
                            <div>
                                <p className='file-title'>
                                    <span><GrNext /></span>
                                    <span>Файлы OV RSA</span>
                                </p>
                                <p className='download-file'>GoGetSSL RSA OV CA <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/gogetssl-rsa-ov-ca.crt">CRT файл</a> | <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/gogetssl-rsa-ov-ca.txt">TXT файл</a></p>
                                <p className='download-file'>USERTrust RSA CA <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/AAA_certificate_RSA.crt">CRT файл</a> | <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/AAA_certificate_ECC.txt">TXT файл</a></p>
                                <p className='download-file'>RSA OV Bundle <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/gogetssl-rsa-ov-bundle.txt">TXT файл</a></p>
                                <p className='download-file'>RSA OV Bundle with SHA-1 <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/gogetssl-rsa-ov-bundle-sha1.txt">TXT файл</a></p>
                                <p style={{ color: '#23a095cc', padding: '0 0 0 30px', fontSize: '18px' }}>Этот пакет включает SHA-1 AddTrust External Root CA, необходимый для устаревших платформ и ZIMBRA.</p>
                            </div>
                            <div>
                                <p className='file-title'>
                                    <span><GrNext /></span>
                                    <span>Файлы EV ECC</span>
                                </p>
                                <p className='download-file'>GoGetSSL ECC EV CA <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/gogetssl-ecc-ev-ca.crt">CRT файл</a> | <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/gogetssl-ecc-ev-ca.txt">TXT файл</a></p>
                                <p className='download-file'>USERTrust ECC CA <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/AAA_certificate_ECC.crt">CRT файл</a> | <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/AAA_certificate_ECC.txt">TXT файл</a></p>
                                <p className='download-file'>ECC EV Bundle <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/gogetssl-ecc-ev-bundle.txt">TXT файл</a></p>
                            </div>
                            <div>
                                <p className='file-title'>
                                    <span><GrNext /></span>
                                    <span>Файлы EV RSA</span>
                                </p>
                                <p className='download-file'>GoGetSSL RSA EV CA <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/gogetssl-rsa-ev-ca.crt">CRT файл</a> | <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/gogetssl-rsa-ev-ca.txt">TXT файл</a></p>
                                <p className='download-file'>USERTrust RSA CA <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/AAA_certificate_RSA.crt">CRT файл</a> | <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/AAA_certificate_RSA.txt">TXT файл</a></p>
                                <p className='download-file'>RSA EV Bundle <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/gogetssl-rsa-ev-bundle.txt">TXT файл</a></p>
                                <p className='download-file'>RSA EV Bundle with SHA-1 <a href="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/wiki/gogetssl-rsa-ev-bundle-sha1.txt">TXT файл</a></p>
                                <p style={{ color: '#23a095cc', padding: '0 0 0 30px', fontSize: '18px' }}>Этот пакет включает SHA-1 AddTrust External Root CA, необходимый для устаревших платформ и ZIMBRA.</p>
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