import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { USD } from '../../Requests/request';


export default function NewOrder() {
    document.title = 'Новый заказ'
    const { state } = useLocation()

    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    });

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    function formatNumber(number) {
        let alphaNumber = number.toString().split('.');
        alphaNumber[0] = alphaNumber[0].replace(/\B(?=(\d{3})+(?!\d))/g, ' ');
        if (alphaNumber.length > 1) {
            alphaNumber[1] = alphaNumber[1].padEnd(2, '0').substring(0, 2);
        } else {
            alphaNumber.push('00');
        }
        return alphaNumber.join('.');
    }

    const roundToTwoDecimalPlaces = (number) => {
        return Math.round(number * 100) / 100;
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        const { firstName, lastName, email, phoneNumber } = formData;
        const mailtoLink = `mailto:avazbekjumoquloff@gmail.com?subject&body=First%20Name:%20${firstName}%0D%0ALast%20Name:%20${lastName}%0D%0AEmail:%20${email}%0D%0APhone%20Number:%20${phoneNumber}`;

        window.open(mailtoLink);
    };
    return (
        <div className='certificates'>
            <div className="cert-txt">
                <h1 title='SSL-сертификаты' className='text-center'>Новый заказ</h1>
                <div className='info-ssl'>
                    {state !== null ?
                        <>
                            <p>Название сертификата: {state.name}</p>
                            <p>Период: {state.period}</p>
                            <p>Цена: {formatNumber(roundToTwoDecimalPlaces(state.price * USD + state.price * USD * 0.12))} UZS</p>
                        </> :
                        <p className='ssl-err-select'>Вы не можете выбрать продукт по название. Выберите из меню, если вы хотите выбрать товар.</p>}
                </div>
                {
                    state !== null ?
                        <form className='reseller-form' onSubmit={handleSubmit} method='post' action='mailto:avazbekjumoquloff@gmail.com' encType="text/plain">
                            <input type="text" name="firstName" placeholder='Имя' value={formData.firstName} onChange={handleChange} />
                            <input type="text" name="lastName" placeholder='Фамилия' value={formData.lastName} onChange={handleChange} />
                            <input type="email" name="email" placeholder='Электронная почта' value={formData.email} onChange={handleChange} />
                            <input type="number" name="phoneNumber" placeholder='Номер телефона' value={formData.phoneNumber} onChange={handleChange} />
                            <div className='form-submit'>
                                <button type='submit'>Отправить</button>
                            </div>
                        </form>
                        : ''
                }
            </div>
        </div>
    )
}