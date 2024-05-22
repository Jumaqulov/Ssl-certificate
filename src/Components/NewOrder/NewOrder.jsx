import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { USD } from '../../Requests/request.js';
import axios from 'axios'

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
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    const roundToTwoDecimalPlaces = (number) => {
        let roundedNumber = Math.ceil(number);
        let result = (Math.ceil(roundedNumber / 100) * 100);
        return result;
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        const { firstName, lastName, email, phoneNumber } = formData;
        const { name, period, price, id } = state;
        const totalPrice = price * USD + price * USD * 0.12;

        const templateParams = {
            firstName,
            lastName,
            email,
            phoneNumber,
            name,
            period,
            totalPrice: totalPrice,
            id
        };

        try {
            const response = await fetch('/api/send-email', {
                method: 'POST',
                headers: {
                    'Content-Type': 'application/json'
                },
                body: JSON.stringify(templateParams)
            });

            if (response.ok) {
                alert('Ma\'lumotlar muvaffaqiyatli jo\'natildi!');
            } else {
                const errorText = await response.text();
                alert('Xatolik yuz berdi: ' + errorText);
            }
        } catch (error) {
            console.error('Error sending email:', error);
            alert('Xatolik yuz berdi: ' + error.message);
        }

        // const mailtoLink = `mailto:avazjonjumoqulov@gmail.com?subject=Новый%20заказ&body=Имя:%20${firstName}%0D%0AФамилия:%20${lastName}%0D%0AEmail:%20${email}%0D%0AНомер%20телефона:%20${phoneNumber}%0D%0AНазвание%20сертификата:%20${name}%0D%0AПериод:%20${period}%0D%0AЦена:%20${formatNumber(roundToTwoDecimalPlaces(totalPrice))}%20UZS%0D%0AКод%20продукта:%20${id}`;
        // window.open(mailtoLink);

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: ''
        });
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
                        <form className='reseller-form' onSubmit={handleSubmit} method='post'>
                            <input type="text" name="firstName" placeholder='Имя' value={formData.firstName} onChange={handleChange} autoComplete='on' required />
                            <input type="text" name="lastName" placeholder='Фамилия' value={formData.lastName} onChange={handleChange} autoComplete='on' required />
                            <input type="email" name="email" placeholder='Электронная почта' value={formData.email} onChange={handleChange} autoComplete='on' required />
                            <input type="number" name="phoneNumber" placeholder='Номер телефона' value={formData.phoneNumber} onChange={handleChange} autoComplete='on' required />
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