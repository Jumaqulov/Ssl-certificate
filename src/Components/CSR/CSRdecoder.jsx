import React, { useState, useEffect } from 'react'
import { BsGearWideConnected } from "react-icons/bs";
import { Helmet } from 'react-helmet';


export default function CSRdecoder() {
    const [formData, setFormData] = useState({
        message: '',
    });
    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    return (
        <>
            <Helmet>
                <meta name="description" content="Расшифруйте код CSR онлайн с помощью профессионального декодера" />
                <meta name="keywords" content="CSR, декодер, онлайн-декодер, SSL, сертификат" />
                <meta property="og:description" content="Расшифруйте код CSR онлайн с помощью профессионального декодера" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Онлайн-декодер CSR" />
                <meta property="og:site_name" content="SSL Certificate" />
                <meta property="og:url" content="https://sslcertificate.uz" />
                <title>Онлайн-декодер CSR</title>
            </Helmet>
            <div className='certificates'>
                <h1 title='about this page' className='csr-title'>Онлайн-декодер CSR</h1>
                <div className="csr-main">
                    <div>
                        <BsGearWideConnected className='decoder-svg' />
                    </div>
                    <div>
                        <p>Мы предоставляем быстрый и простой онлайн-декодер CSR, чтобы проверить, содержит ли ваш CSR (запрос на подписание сертификата) правильную информацию и не содержит ли он ошибок. Вставьте код CSR в текстовое поле и нажмите кнопку Decode CSR. CSR должен содержать строки BEGIN/END, в противном случае вы получите ошибку.</p>
                        <p>Декодер извлекает общее имя, организацию, штат/регион, страну, отдел, адрес электронной почты, элементы SAN и алгоритм шифрования. Используйте наш <a className='csr-decoder' href="/online-csr-generator">онлайн-генератор CSR</a> в случае возникновения ошибок при декодировании.</p>
                    </div>
                </div>
                <div className="csr-form">
                    <h4 className='csr-decoder'>Заполните форму для генерации CSR</h4>
                    <p>Для расшифровки вашего CSR мы используем библиотеку OpenSSL. <br /> Мы не храним и не бережем расшифрованную информацию.</p>
                    <div className='reseller-form' id='fill-form'>
                        <form onSubmit={handleSubmit} action="" method=''>   {/* metod post */}
                            <textarea className='decoder-textarea' name="message"></textarea>
                            <div className='form-submit'>
                                <button type='submit'>Декодирование CSR</button>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </>
    )
}