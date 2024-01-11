import React, { useState } from 'react'
import Certificates from './Certificates';
import Brands from './Brands';
import Support from './Support';
import Company from './Company';

export default function Navbar() {
    const [active, setActive] = useState('$')

    const handleCurrencyChange = (currency) => {
        setActive(currency);
    };

    return (
        <nav className='nav'>
            <ul className='nav-item'>
                <li className='certificate-menu nav-item-li'>
                    <a href="/ssl-certificates/" aria-haspopup="true" className='nav-item-link'>SSL Certificates</a>
                    <Certificates />
                </li>
                <li className='certificate-menu nav-item-li'>
                    <a href="/" aria-haspopup="true" className='nav-item-link'>Ca Brands</a>
                    <Brands/>
                </li>
                <li className='nav-item-li'>
                    <a href="/reseller-program/" aria-haspopup="true" className='nav-item-link'>Reseller Program</a>
                </li>
                <li className='nav-item-li'>
                    <a href="/lei/" aria-haspopup="true" className='nav-item-link'>LEI Codes</a>
                </li>
                <li className='nav-item-li'>
                    <a href="/trulytrust/" aria-haspopup="true" className='nav-item-link'>TrulyTrust®</a>
                </li>
                <li className='nav-item-li'>
                    <a href="/solutions/" className='nav-item-link'>PKI Solutions</a>
                </li>
                <li className='certificate-menu nav-item-li'>
                    <a href="/support/" className='nav-item-link'>Support</a>
                    <Support/>
                </li>
                <li className='certificate-menu nav-item-li'>
                    <a href="/company/" className='nav-item-link'>Company</a>
                    <Company/>
                </li>
            </ul>
            <div className='currency'>
                <button onClick={() => handleCurrencyChange('$')} className={active === '$' ? 'curr-active' : ''}>$</button>
                <button onClick={() => handleCurrencyChange('€')} className={active === '€' ? 'curr-active' : ''}>€</button>
            </div>
        </nav>
    )
}