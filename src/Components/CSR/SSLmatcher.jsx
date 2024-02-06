import React, { useEffect, useState } from 'react'
import { VscSettingsGear } from "react-icons/vsc";

export default function SSLmatcher() {
    const [compareType, setCompareType] = useState('key');

    const handleRadioChange = (event) => {
        setCompareType(event.target.value);
    };

    useEffect(() => {
        document.title = 'Инструмент для сопоставления SSL-сертификатов'
    }, [])
    return (
        <div className='certificates'>
            <h3 className='csr-title'>Инструмент сопоставления SSL</h3>
            <div className="csr-main">
                <div>
                    <VscSettingsGear className='matcher-svg' />
                </div>
                <div>
                    <p>Инструмент SSL Matcher Tool опубликован, чтобы помочь определить возможные проблемы при управлении или установке SSL. В случае управления несколькими серверами или сертификатами очень легко несовместить правильный закрытый ключ с сертификатом SSL. Вы можете проверить, соответствует ли ваш SSL сертификату CSR (Certificate Signing Request) или закрытому ключу.</p>
                    <p>Мы не сохраняем информацию, которую вы предоставляете в рамках SSL Matching. Инструмент работает "на лету" и в режиме онлайн. Настоятельно рекомендуется проверять все на вашем сервере с помощью команд OpenSSL.</p>
                </div>
            </div>
            <form action="" className='csr-checker'>
                <fieldset className='selectors'>
                    <div>
                        <input type="radio" id='key_cert' name='compare_type' value='key' checked={compareType === 'key'} onChange={handleRadioChange} />
                        <label htmlFor="key_cert">Проверьте, совпадают ли сертификат и закрытый ключ</label>
                        <div className="check"></div>
                    </div>
                    <div>
                        <input type="radio" id='csr_cert' name='compare_type' value='csr' checked={compareType === 'csr'} onChange={handleRadioChange} />
                        <label htmlFor="csr_cert">Проверьте, совпадают ли сертификат и закрытый ключ</label>
                        <div className="check"></div>
                    </div>
                </fieldset>
                <div>
                    <p>Введите свой сертификат:</p>
                    <textarea name="" id=""></textarea>
                </div>
                <div>
                    <p>Введите свой CSR:</p>
                    <textarea name="" id=""></textarea>
                </div>
            </form>
        </div>
    )
}