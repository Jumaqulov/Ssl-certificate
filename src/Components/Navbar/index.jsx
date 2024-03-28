import React, { useState } from 'react'
import { PiList } from "react-icons/pi";
import Certificates from './Certificates';
import Brands from './Brands';
import Support from './Support';
import Company from './Company';

export default function Navbar() {
    const [activeBtn, setActiveBtn] = useState(false)

    const handleNavActive = () => {
        setActiveBtn(!activeBtn)
    }
    return (
        <div className="nav-main">
            <nav className='nav'>
                <button onClick={handleNavActive} className={`navigation-btn ${activeBtn ? 'activeNavBtn' : ''}`}>
                    <PiList className='pi-list'/>
                    <span>Navigation</span>
                </button>
                <ul className={`nav-item ${activeBtn ? 'nav-item-responsive' : ''}`}>
                    <li className='certificate-menu nav-item-li'>
                        <a href="/ssl-certificates" aria-haspopup="true" className='nav-item-link'>SSL-сертификаты</a>
                        <Certificates />
                    </li>
                    <li className='certificate-menu nav-item-li'>
                        <a href="/" aria-haspopup="true" className='nav-item-link'>Бренды Ca</a>
                        <Brands />
                    </li>
                    <li className='nav-item-li'>
                        <a href="/lei/" aria-haspopup="true" className='nav-item-link'>Коды LEI</a>
                    </li>
                    <li className='nav-item-li'>
                        <a href="/trulytrust/" aria-haspopup="true" className='nav-item-link'>TrulyTrust®</a>
                    </li>
                    <li className='nav-item-li'>
                        <a href="/solutions/" className='nav-item-link'>Решения PKI</a>
                    </li>
                    <li className='certificate-menu nav-item-li'>
                        <a href="/support/" className='nav-item-link'>Поддержка</a>
                        <Support />
                    </li>
                    <li className='certificate-menu nav-item-li-last'>
                        <a href="/company/" className='nav-item-link'>Компания</a>
                        <Company />
                    </li>
                </ul>
            </nav>
        </div>
    )
}