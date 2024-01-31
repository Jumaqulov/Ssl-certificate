import React, { useState } from 'react'
import Country from '../../Requests/Country'

export default function ResellerForm() {
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
        postalCode: '',
        state: '',
        country: '',
        message: '',
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
    return (
        <div className='reseller-form' id='fill-form'>
            <h3>Станьте партнером СЕЙЧАС!</h3>
            <form onSubmit={handleSubmit} action="" method=''>   {/* metod post */}
                <input onChange={handleInputChange} type="email" name="email" placeholder='Ваш e-mail (логин)' required />
                <input onChange={handleInputChange} type="text" name='firstName' placeholder='Имя (обязательно)' required />
                <input onChange={handleInputChange} type="text" name='lastName' placeholder='Фамилия (обязательно)' required />
                <input onChange={handleInputChange} type="number" name='phoneNumber' placeholder='Телефон (обязательно)' required />
                <input onChange={handleInputChange} type="text" name='companyName' placeholder='Название компании' required />
                <input onChange={handleInputChange} type="text" name='registrationNumber' placeholder='Регистрационный номер / ID компании' required />
                <input onChange={handleInputChange} type="text" name='taxVATINN' placeholder='Компания Налог/НДС/Инн' required />
                <input onChange={handleInputChange} type="text" name="city" placeholder='Город (обязательно)' required />
                <input onChange={handleInputChange} type="text" name="street" placeholder='Улица (обязательно)' required />
                <input onChange={handleInputChange} type="text" name="postalCode" placeholder='Почтовый индекс (обязательно)' required />
                <input onChange={handleInputChange} type="text" name="state" placeholder='Штат/провинция/регион (обязательно)' required />
                <Country onChange={handleInputChange} required />
                <div className="radios">
                    <span>Тип аккаунта:</span>
                    <div className="dept-sect">
                        <input onChange={handleInputChange} className='radio-input' type="radio" name='client' value='Private/Individual' id="client-1" />
                        <label htmlFor='client-1'>Частный/индивидуальный</label>
                        <input onChange={handleInputChange} className='radio-input' type="radio" name='client' value='Business/Company' id="client-2" />
                        <label htmlFor='client-2'>Бизнес/Компания</label>
                    </div>
                </div>
                <div className='textarea'>
                    <textarea onChange={handleInputChange} name="message" id="message" placeholder="Любые комментарии/сообщения"></textarea>
                </div>
                <div className='form-submit'>
                    <button type='submit'>Отправить форму</button>
                </div>
            </form>
        </div>
    )
}