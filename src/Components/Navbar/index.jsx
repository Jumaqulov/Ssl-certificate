import React, { useState } from 'react'
import Certiificates from './certiificates'
import CaBrands from './caBrands';

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
                    <Certiificates />
                </li>
                <li className='certificate-menu nav-item-li'>
                    <a href="/" aria-haspopup="true">Ca Brands</a>
                    <CaBrands/>
                </li>
                <li className='nav-item-li'>
                    <a href="/reseller-program/" aria-haspopup="true">Reseller Program</a>
                </li>
                <li className='nav-item-li'>
                    <a href="/lei/" aria-haspopup="true">LEI Codes</a>
                </li>
                <li className='nav-item-li'>
                    <a href="/trulytrust/" aria-haspopup="true">TrulyTrust®</a>
                </li>
                <li className='nav-item-li'>
                    <a href="/solutions/">PKI Solutions</a>
                </li>
                <li className='nav-item-li'>
                    <a href="/support/">Support</a>
                </li>
                <li className='nav-item-li'>
                    <a href="/company/">Company</a>
                </li>
            </ul>
            <div className='currency'>
                <button onClick={() => handleCurrencyChange('$')} className={active === '$' ? 'curr-active' : ''}>$</button>
                <button onClick={() => handleCurrencyChange('€')} className={active === '€' ? 'curr-active' : ''}>€</button>
            </div>
        </nav>
    )
}