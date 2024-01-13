import React, { useState } from 'react'
import Certificates from './Certificates';
import Brands from './Brands';
import Support from './Support';
import Company from './Company';

export default function Navbar() {
    const [activeBtn, setActiveBtn] = useState(false)

    const handleNavActive = () => {
        setActiveBtn(!activeBtn)
        console.log("salom");
    }

    return (
        <div className="nav-main">
            <nav className='nav'>
                <button onClick={handleNavActive} className={`navigation-btn ${activeBtn ? 'activeNavBtn' : ''}`}>
                    <svg className='navigation-svg' width={'20px'} height={'20px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 32">
                        <path d="M31.88165 22.78803v2.61207c0 .36371-.07315.7254-.3627.94485-.21843.28955-.58113.3627-.94485.43484H1.40652c-.36372 0-.65429-.14529-.94486-.43586-.21843-.29056-.3627-.58012-.3627-.94383v-2.61207c0-.36372.07315-.65327.3627-.94486.29057-.21742.58114-.3627.94486-.3627h29.1686c.36371 0 .65428.07315.94485.36372s.43484.58012.3627.94384h-.00102zm.00102-10.59457v2.61308c0 .3627-.07315.65327-.3627.94384a.94689.94689 0 0 1-.94486.3627H1.40651c-.3637 0-.65428-.07315-.94485-.3627-.21843-.21843-.3627-.50799-.3627-.94485v-2.61106c0-.36371.07315-.65428.3627-.94485s.58114-.43484.94486-.3627h29.1686c.36371 0 .65428.07315.94485.3627.28955.21843.43484.50799.3627.94485v-.00101zm0-10.59356v2.61207c0 .36372-.07315.65327-.3627.94486-.21844.21741-.58114.3627-.94486.3627H1.40651c-.3637 0-.65428-.07315-.94485-.36372-.21945-.29057-.3627-.58012-.3627-.94384V1.5999c0-.36371.07315-.7254.3627-1.01597.29057-.21843.58114-.36372.94486-.36372h29.1686c.36371 0 .65428.14529.94485.36372.28955.29057.43484.58012.3627 1.01597z"></path>
                    </svg>
                    <span>Navigation</span>
                </button>
                <ul className={`nav-item ${activeBtn ? 'nav-item-responsive' : ''}`}>
                    <li className='certificate-menu nav-item-li'>
                        <a href="/ssl-certificates" aria-haspopup="true" className='nav-item-link'>SSL Certificates</a>
                        <Certificates />
                    </li>
                    <li className='certificate-menu nav-item-li'>
                        <a href="/" aria-haspopup="true" className='nav-item-link'>Ca Brands</a>
                        <Brands />
                    </li>
                    <li className='nav-item-li'>
                        <a href="/reseller-program" aria-haspopup="true" className='nav-item-link'>Reseller Program</a>
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
                        <Support />
                    </li>
                    <li className='certificate-menu nav-item-li-last'>
                        <a href="/company/" className='nav-item-link'>Company</a>
                        <Company />
                    </li>
                </ul>
            </nav>
        </div>
    )
}