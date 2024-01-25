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
            <h3>Become Partner NOW!</h3>
            <form onSubmit={handleSubmit} action="" method=''>   {/* metod post */}
                <input onChange={handleInputChange} type="email" name="email" placeholder='Your e-mail (login)' />
                <input onChange={handleInputChange} type="text" name='firstName' placeholder='First Name (required)' />
                <input onChange={handleInputChange} type="text" name='lastName' placeholder='Last Name (required)' />
                <input onChange={handleInputChange} type="number" name='phoneNumber' placeholder='Phone (required)' />
                <input onChange={handleInputChange} type="text" name='companyName' placeholder='Company name' />
                <input onChange={handleInputChange} type="text" name='registrationNumber' placeholder='Company Registration number / ID' />
                <input onChange={handleInputChange} type="text" name='taxVATINN' placeholder='Company TAX/VAT/INN' />
                <input onChange={handleInputChange} type="text" name="city" placeholder='City (required)' />
                <input onChange={handleInputChange} type="text" name="street" placeholder='Street (required)' />
                <input onChange={handleInputChange} type="text" name="postalCode" placeholder='Postal Code (required)' />
                <input onChange={handleInputChange} type="text" name="state" placeholder='State/Province/Region (required)' />
                <Country onChange={handleInputChange} />
                <div className="radios">
                    <span>Account type:</span>
                    <div className="dept-sect">
                        <input onChange={handleInputChange} className='radio-input' type="radio" name='client' value='Private/Individual' id="client-1" />
                        <label htmlFor='client-1'>Private/Individual</label>
                        <input onChange={handleInputChange} className='radio-input' type="radio" name='client' value='Business/Company' id="client-2" />
                        <label htmlFor='client-2'>Business/Company</label>
                    </div>
                </div>
                <div className='textarea'>
                    <textarea onChange={handleInputChange} name="message" id="message" placeholder="Any comments/Message"></textarea>
                </div>
                <div className='form-submit'>
                    <button type='submit'>Submit Form</button>
                </div>
            </form>
        </div>
    )
}