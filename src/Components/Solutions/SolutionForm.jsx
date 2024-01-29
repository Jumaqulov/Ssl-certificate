import React from 'react';
import Country from '../../Requests/Country';

export default function SolutionForm() {
    return (
        <form action="">
            <div className='solution-cols'>
                <label htmlFor="firstName">Имя<b>*</b></label>
                <input type="text" id="firstName" />
            </div>
            <div className='solution-cols'>
                <label htmlFor="lastName">Фамилия<b>*</b></label>
                <input type="text" id="lastName" />
            </div>
            <div className='solution-cols'>
                <label htmlFor="email">Электронная почта<b>*</b></label>
                <input type="email" id="email" />
            </div>
            <div className='solution-cols'>
                <label htmlFor="phoneNumber">Номер телефона<b>*</b></label>
                <input type="text" id="phoneNumber" />
            </div>
            <div className='solution-cols'>
                <label htmlFor="companyName">Название компании<b>*</b></label>
                <input type="text" id="companyName" />
            </div>
            <div className='solution-cols'>
                <label htmlFor="country">Страна<b>*</b></label>
                <Country />
            </div>
            <div className="solution-cols">
                <label htmlFor="">Тип сертификатов<b>*</b></label>
                <ul>
                    <li role='checkbox'>
                        <input type="checkbox" id="publicSslTls" />
                        <label htmlFor="publicSslTls">Публичный SSL/TLS</label>
                    </li>
                    <li role='checkbox'>
                        <input type="checkbox" id="privateCA" />
                        <label htmlFor="privateCA">Частный CA</label>
                    </li>
                    <li role='checkbox'>
                        <input type="checkbox" id="codeSigning" />
                        <label htmlFor="codeSigning">Подписание кодов</label>
                    </li>
                    <li role='checkbox'>
                        <input type="checkbox" id="emailDoc" />
                        <label htmlFor="emailDoc">Электронная почта и подписание документов</label>
                    </li>
                    <li role='checkbox'>
                        <input type="checkbox" id="microsoftCa" />
                        <label htmlFor="microsoftCa">Microsoft CA</label>
                    </li>
                    <li role='checkbox'>
                        <input type="checkbox" id="iotDevice" />
                        <label htmlFor="iotDevice">IoT и устройства</label>
                    </li>
                    <li role='checkbox'>
                        <input type="checkbox" id="matterIot" />
                        <label htmlFor="matterIot">Matter IoT</label>
                    </li>
                    <li role='checkbox'>
                        <input type="checkbox" id="matterIot" />
                        <label htmlFor="matterIot">Клиент</label>
                    </li>
                </ul>
            </div>
            <div className="solution-cols">
                <label htmlFor="numCertificate"></label>
                <select name="Number certificate" id="numCertificate">
                    <option value="">Пожалуйста, выберите</option>
                    <option value="">{'<10'}</option>
                    <option value="">10 - 99</option>
                    <option value="">100 - 999</option>
                    <option value="">1000 - 9999</option>
                    <option value="">10000 +</option>
                </select>
            </div>
            <div className="solution-cols">
                <label htmlFor="helpCenter">Чем мы можем вам помочь?<b>*</b></label>
                <textarea name="Help Center" id="helpCenter"></textarea>
            </div>
            <button className='solution-submit' type='submit'>Отправить</button>
        </form>
    );
}
