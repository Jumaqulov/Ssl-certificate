import React, { useState, useRef } from 'react';
import { useLocation } from 'react-router-dom';
import { USD } from '../../Requests/request.js';
import { ToastContainer, toast } from 'react-toastify';
import 'react-toastify/dist/ReactToastify.css';
import ReCAPTCHA from 'react-google-recaptcha';
import axios from 'axios';

export default function NewOrder() {
    document.title = 'Новый заказ';
    const { state } = useLocation();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        firstName: '',
        lastName: '',
        email: '',
        phoneNumber: ''
    });
    const [captchaValue, setCaptchaValue] = useState(null);
    const recaptchaRef = useRef(null);

    const handleChange = (e) => {
        const { name, value } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: value
        }));
    };

    const handleCaptchaChange = (value) => {
        setCaptchaValue(value);
    };

    function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    const roundToTwoDecimalPlaces = (number) => {
        let roundedNumber = Math.ceil(number);
        let result = (Math.ceil(roundedNumber / 100) * 100);
        return result;
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        if (!captchaValue) {
            toast.error('Пожалуйста, заполните reCAPTCHA', {
                position: "top-center",
                autoClose: 3000,
                hideProgressBar: false,
                closeOnClick: true,
                pauseOnHover: true,
                draggable: true,
                progress: undefined,
                theme: "dark",
            });
            return;
        }
        setLoading(true);
        const { firstName, lastName, email, phoneNumber } = formData;
        const { name, period, price, id } = state;
        const totalPrice = price * USD + price * USD * 0.12;

        const templateParams = {
            first_name: firstName.trim(),
            last_name: lastName.trim(),
            email: email.trim(),
            phone: phoneNumber.trim(),
            product_name: name,
            period: parseFloat(period),
            price: `${formatNumber(roundToTwoDecimalPlaces(totalPrice))} UZS`,
            id: id,
            // 'g-recaptcha-response': captchaValue
        };
        // console.log('Sending data:', templateParams);

        try {
            const response = await axios.post('http://127.0.0.1:8000/products/buy-form/', templateParams);
            // console.log('Response:', response); 
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
            console.error('Error:', error.response ? error.response.data : error.message);
            toast.error('Ошибка отправки электронной почты');
        } finally {
            setLoading(false);
        }

        setFormData({
            firstName: '',
            lastName: '',
            email: '',
            phoneNumber: ''
        });
        setCaptchaValue(null);
        if (recaptchaRef.current) {
            recaptchaRef.current.reset();
        }
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
                            <ReCAPTCHA ref={recaptchaRef} sitekey="6Ld4TvApAAAAAMjSt5cP1ALRvNyL-pw-FdlaetT8" onChange={handleCaptchaChange} />
                            <div className='form-submit'>
                                <button type='submit'>{loading ? <div className="spinner"></div> : 'Отправить'}</button>
                            </div>
                        </form>
                        : ''
                }
            </div>
        </div>
    );
}