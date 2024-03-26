import React from 'react'
import { SiOpera } from "react-icons/si";
import { FaInternetExplorer } from "react-icons/fa";
import { FaFirefoxBrowser, FaChrome } from "react-icons/fa";
import { ImSafari } from "react-icons/im";

export default function FooterTop() {
    return (
        <div className='footer-top gb-padding'>
            <div className='footer-top-main'>
                <div className='footer-top-left'>
                    <div className='browsers'>
                        <SiOpera className='opera-svg' />
                        <span>Opera</span>
                    </div>
                    <div className='browsers'>
                        <FaInternetExplorer className='ie-svg' />
                        <span>Explorer</span>
                    </div>
                    <div className='browsers'>
                        <FaFirefoxBrowser className='firefox-svg' />
                        <span>Firefox</span>
                    </div>
                    <div className='browsers'>
                        <ImSafari className='safari-svg' />
                        <span>Safari</span>
                    </div>
                    <div className='browsers'>
                        <FaChrome className='chrome-svg' />
                        <span>Chrome</span>
                    </div>
                </div>
                <div className='footer-top-right'>
                    <p>SSL поддерживается 99,6% браузеров и мобильных устройств</p>
                </div>
            </div>
        </div>
    )
}