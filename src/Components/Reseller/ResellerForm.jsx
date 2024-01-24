import React from 'react'
import Country from '../../Requests/Country'

export default function ResellerForm() {
    return (
        <div className='reseller-form' id='fill-form'>
            <h3>Become Partner NOW!</h3>
            <form action="" method=''>   {/* metod post */}
                <input type="email" autoComplete='on' placeholder='Your e-mail (login)' />
                <input type="text" autoComplete='on' placeholder='First Name (required)' />
                <input type="text" autoComplete='on' placeholder='Last Name (required)' />
                <input type="number" autoComplete='on' placeholder='Phone (required)' />
                <input type="text" autoComplete='on' placeholder='Company name' />
                <input type="text" autoComplete='on' placeholder='Company Registration number / ID' />
                <input type="text" autoComplete='on' placeholder='Company TAX/VAT/INN' />
                <input type="text" autoComplete='on' placeholder='City (required)' />
                <input type="text" autoComplete='on' placeholder='Street (required)' />
                <input type="text" autoComplete='on' placeholder='Postal Code (required)' />
                <input type="text" autoComplete='on' placeholder='State/Province/Region (required)' />
                <Country />
                <div className="radios">
                    <span>Account type:</span>
                    <div className="dept-sect">
                        <input className='radio-input' type="radio" name='client' value='Private/Individual' id="client-1" />
                        <label htmlFor='client-1'>Private/Individual</label>
                        <input className='radio-input' type="radio" name='client' value='Business/Company' id="client-2" />
                        <label htmlFor='client-2'>Business/Company</label>
                    </div>
                </div>
                <textarea className='textarea' name="message" id="message" placeholder="Any comments/Message"></textarea>
                <div className='form-submit'>
                    <button type='submit'>Submit Form</button>
                </div>
            </form>
        </div>
    )
}