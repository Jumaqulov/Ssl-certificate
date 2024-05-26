import React, { useState } from 'react'
import { useLocation } from 'react-router-dom';
import { USD } from '../../Requests/request.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import axios from 'axios'
import emailjs from 'emailjs-com';

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
            totalPrice: `${formatNumber(roundToTwoDecimalPlaces(totalPrice))} UZS`,
            id
        };

        try {
            await emailjs.send('service_j920sen', 'template_j84z1ig', templateParams, '_zOQzKQ4JtCIVxySx');
            toast.success('Заказ отправлен!', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
        } catch (error) {
            // console.error('Failed to send email:', error);
        }

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: ''
        });
    };

    return (
        <div className='certificates'>
            <ToastContainer />
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