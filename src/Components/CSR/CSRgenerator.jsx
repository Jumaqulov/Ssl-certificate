import React, { useEffect, useState } from 'react'
import { PiGearSix } from "react-icons/pi";
import Country from '../../Requests/Country';

export default function CSRgenerator() {
    const [formData, setFormData] = useState({
        email: '',
        firstName: '',
        lastName: '',
        phoneNumber: '',
        companyName: '',
        registrationNumber: '',
        taxVATINN: '',
        city: '',
        street: '',
        state: '',
        country: '',
    });

    const handleInputChange = (e) => {
        const { name, value } = e.target;
        setFormData({
            ...formData,
            [name]: value,
        });
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        console.log(formData);
    };

    useEffect(() => {
        document.title = 'Онлайн-генератор CSR'
    }, [])

    return (
        <div className='certificates'>
            <h3 className='csr-title'>Онлайн-генератор CSR</h3>
            <div className="csr-main">
                <div>
                    <PiGearSix className='csr-svg' />
                </div>
                <div>
                    <p>Мы предоставляем профессиональный и бесплатный онлайн-генератор CSR с алгоритмом шифрования SHA-256 и размером ключа 2048 бит. Мы генерируем запрос на подписание сертификата (CSR) и закрытый ключ (ключ RSA) сразу. Пожалуйста, сохраните закрытый ключ в надежном месте! Ключ потребуется в процессе установки SSL. Используйте ваш веб-сервер и библиотеку OpenSSL, если вы хотите сгенерировать ECC (Elliptic Curve Cryptography) CSR. Сгенерированные результаты будут приняты всеми популярными центрами сертификации.</p>
                    <p>Код CSR содержит такую информацию, как общее имя, юридическое название вашей организации, подразделение организации, город, штат (регион) и электронная почта. Online CSR Generator не предназначен для работы с серверами Windows (IIS), и вам необходимо создать CSR на вашем сервере. Мы предоставляем <a href="/online-csr-decoder">онлайн-декодер CSR</a> для проверки правильности и отсутствия ошибок в коде CSR.</p>
                </div>
            </div>
            <div className="csr-form">
                <h4>Вставьте свой CSR, чтобы расшифровать его</h4>
                <p>Пожалуйста, добавьте "*." перед общим именем, чтобы <br /> сгенерировать Wildcard CSR. Пример: https://*.gogetssl.uz</p>
                <div className='reseller-form' id='fill-form'>
                    <form onSubmit={handleSubmit} action="" method=''>   {/* metod post */}
                        <input onChange={handleInputChange} type="text" name="pathName" placeholder='Общее имя, без HTTPS://' required />
                        <input onChange={handleInputChange} type="text" name='organization' placeholder='Организация' required />
                        <input onChange={handleInputChange} type="text" name='department' placeholder='Департамент (например: IT Dept)' required />
                        <input onChange={handleInputChange} type="text" name='city' placeholder='Город (например, Нью-Йорк)' required />
                        <input onChange={handleInputChange} type="text" name="state/region" placeholder='Штат/регион (например: Алабама/нет)' required />
                        <input onChange={handleInputChange} type="email" name="email" placeholder='Электронная почта' required />
                        <Country onChange={handleInputChange} required />
                        <div className='form-submit'>
                            <button type='submit'>Генерировать CSR</button>
                        </div>
                    </form>
                </div>
            </div>
        </div>
    )
}