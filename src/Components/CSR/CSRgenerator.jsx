import React, { useEffect, useState } from 'react'
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

    useEffect(()=>{
        document.title = 'Онлайн-генератор CSR'
    },[])

    return (
        <div className='certificates'>
            <h3 className='csr-title'>Онлайн-генератор CSR</h3>
            <div className="csr-main">
                <div>
                    <svg className='csr-svg' viewBox='0 0 32 32'>
                        <path
                            d="M13.886 31.576h4.242c.185-1.6.43-3.197.738-4.858a11.394 11.394 0 0 0 2.704-1.106c1.353.983 2.643 1.966 3.935 2.89 1.046-.983 1.966-1.966 3.012-2.95-.983-1.291-1.966-2.583-2.89-3.935.43-.86.861-1.783 1.108-2.766l4.793-.738a46.681 46.681 0 0 0 0-4.18c-1.597-.246-3.134-.492-4.732-.737a16.125 16.125 0 0 0-1.169-2.828c.922-1.292 1.907-2.582 2.89-3.872l-3.012-3.012c-1.292.983-2.582 1.904-3.873 2.887-.922-.49-1.844-.92-2.827-1.167A147.586 147.586 0 0 1 18.128.47a48.055 48.055 0 0 0-4.242 0l-.738 4.795c-.983.245-1.903.676-2.765 1.106-1.292-.983-2.643-1.905-3.935-2.89-.983 1.046-1.966 1.968-2.95 3.012.921 1.292 1.904 2.582 2.89 3.935a10.03 10.03 0 0 0-1.107 2.644c-.063.123-.247.123-.369.123-1.476.245-3.011.491-4.487.736v4.182c1.598.245 3.195.49 4.856.737.246.92.615 1.905 1.108 2.704-.985 1.353-1.97 2.643-2.89 3.995l2.949 2.952c1.353-.922 2.643-1.905 3.996-2.89a11.394 11.394 0 0 0 2.704 1.108c.247 1.659.493 3.257.738 4.856m1.046-6.332c-2.643-.368-5.103-1.845-6.577-3.995a9.353 9.353 0 0 1-1.6-5.842 9.397 9.397 0 0 1 2.706-6.023 9.377 9.377 0 0 1 5.532-2.645c2.028-.245 4.12.246 5.84 1.292 1.782 1.045 3.135 2.704 3.873 4.61a9.498 9.498 0 0 1 .061 6.516c-.675 1.905-2.028 3.565-3.75 4.672-1.783 1.106-3.994 1.658-6.085 1.413v.002z">
                        </path>
                        <path
                            d="M15.177 24.445c2.95.368 6.025-1.046 7.746-3.505 1.29-1.72 1.844-3.994 1.537-6.148-.308-2.457-1.782-4.793-3.873-6.146-2.029-1.228-4.488-1.598-6.7-1.046-2.828.738-5.225 2.953-6.086 5.78a8.545 8.545 0 0 0 1.721 8.237c1.476 1.598 3.505 2.644 5.655 2.828m.062-2.336c-1.66-.184-3.319-1.169-4.303-2.582a6.282 6.282 0 0 1-.921-5.225c.676-3.011 3.932-5.102 7.006-4.487 3.198.491 5.657 3.81 5.103 7.006-.368 3.26-3.627 5.719-6.885 5.288z"
                            fill="currentColor"></path>
                    </svg>
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