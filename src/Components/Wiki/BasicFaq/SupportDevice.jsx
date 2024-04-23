import React, { useEffect } from 'react'
import { MdOutlineDevicesOther } from "react-icons/md";

export default function SupportDevice() {
    useEffect(() => {
        document.title = 'Устройства с поддержкой SSL'
    }, [])
    return (
        <>
            <div className="wiki-path">
                <a href="/">Главная</a>
                <span className='next'>
                    <svg viewBox='0 0 19 32'>
                        <path
                            d="M5.66962.995l12.304 12.89c.642.643.964 1.287.961 2.144s-.326 1.501-.97 2.144l-12.353 12.839c-.539.643-1.288.856-2.254.854-.858-.001-1.609-.218-2.25-.863-1.392-1.397-1.39-2.79.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9.009-4.289.645-.641 1.396-.854 2.253-.852.966 0 1.716.218 2.25.86v.001z">
                        </path>
                    </svg>
                </span>
                <a href='/wiki'>Wiki</a>
                <span className='next'>
                    <svg viewBox='0 0 19 32'>
                        <path
                            d="M5.66962.995l12.304 12.89c.642.643.964 1.287.961 2.144s-.326 1.501-.97 2.144l-12.353 12.839c-.539.643-1.288.856-2.254.854-.858-.001-1.609-.218-2.25-.863-1.392-1.397-1.39-2.79.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9.009-4.289.645-.641 1.396-.854 2.253-.852.966 0 1.716.218 2.25.86v.001z">
                        </path>
                    </svg>
                </span>
                <a href='/wiki/ssl-basics'>Основы SSL / FAQ</a>
                <span className='next'>
                    <svg viewBox='0 0 19 32'>
                        <path
                            d="M5.66962.995l12.304 12.89c.642.643.964 1.287.961 2.144s-.326 1.501-.97 2.144l-12.353 12.839c-.539.643-1.288.856-2.254.854-.858-.001-1.609-.218-2.25-.863-1.392-1.397-1.39-2.79.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9.009-4.289.645-.641 1.396-.854 2.253-.852.966 0 1.716.218 2.25.86v.001z">
                        </path>
                    </svg>
                </span>
                <span className='current'>Устройства с поддержкой SSL</span>
            </div>
            <div className="wiki-main">
                <h3>Устройства с поддержкой SSL</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <MdOutlineDevicesOther className='cert-txt-svg' />
                    </span>
                    <span>Совместимость с устройствами - одна из важнейших характеристик любого SSL-сертификата. Если устройство не поддерживает SSL-сертификат, конечные клиенты получат ошибку, и защита данных будет невозможна. Именно поэтому мы продаем SSL-сертификаты от крупнейших центров сертификации (CA), чтобы обеспечить наилучшее качество. Ниже приведен список наиболее распространенных поддерживаемых устройств.</span>
                </p>
                <div className="wiki-bg-dark">
                    <h4 className='term-title'>Веб-браузеры</h4>
                    <div className="flex-box">
                        <ul className='pri-policy-lists'>
                            <li>AOL 5+</li>
                            <li>Camino 1.0+</li>
                            <li>Flock 1.0+</li>
                            <li>Konqueror (KDE)</li>
                            <li>Maxthon 2+</li>
                            <li>Microsoft IE 5.01+</li>
                            <li>Microsoft IE 7+ (Windows XP)</li>
                            <li>Microsoft WebTV</li>
                            <li>Mozilla Suite 1.0+</li>
                            <li>MSN Explorer</li>
                            <li>Opera 5+</li>
                            <li>Safari (Mac OS) 10+ and higher</li>
                        </ul>
                        <ul className='pri-policy-lists'>
                            <li>Apple Safari 1+</li>
                            <li>Firefox 1.0+</li>
                            <li>Google Chrome 1+</li>
                            <li>Konqueror 2.2.1+</li>
                            <li>Microsoft WebTV</li>
                            <li>Microsoft IE 7+ (Vista)</li>
                            <li>Microsoft Edge</li>
                            <li>Mozilla Firefox 1.0+</li>
                            <li>Mozilla 0.6 +</li>
                            <li>Netscape Communicator 4.51+</li>
                            <li>Red Hat Linux Konqueror</li>
                            <li>Sony Playstation</li>
                        </ul>
                    </div>
                </div>
                <div className="wiki-bg-dark">
                    <h4 className='term-title'>Micro Browsers /PDAs</h4>
                    <div className="flex-box">
                        <ul className='pri-policy-lists'>
                            <li>ACCESS NetFront Browser v3.4 +</li>
                            <li>ACCESS NetFront™ — 3.3 and higher</li>
                            <li>Apple iOS 2.0+</li>
                            <li>BlackBerry® — 4.1 and higher</li>
                            <li>iPad™ — All versions</li>
                            <li>KDDI Openwave v6.2.0.12 +</li>
                            <li>Kyocera</li>
                            <li>Microsoft IE Smartphone 2003</li>
                            <li>Microsoft IE Pocket PC 2003</li>
                            <li>Microsoft Windows CE 2003</li>
                            <li>Netfront 3.0+</li>
                            <li>Nintendo Wii</li>
                            <li>Nokia® devices</li>
                            <li>NTT Docomo</li>
                            <li>Opera 7.0+</li>
                            <li>Opera mini</li>
                            <li>Palm / Handspring Blazer 2.0+</li>
                            <li>Palm Treo</li>
                            <li>RIM BlackBerry Tablet OS</li>
                            <li>SoftBank Mobile</li>
                            <li>Sony Netjuke audio</li>
                            <li>Sony PlayStation Portable®</li>
                            <li>Sprint® devices</li>
                            <li>Symbian OS based handsets (Levono, Nokia, Orange, Panasonic, Samsung, Siemens, Sony-Ericsson)</li>
                            <li>Vodaphone</li>
                            <li>Windows CE</li>
                            <li>Windows Mobile 5 and 6**</li>
                            <li>Windows Phone 7+</li>
                        </ul>
                        <ul className="pri-policy-lists">
                            <li>Access NetFront</li>
                            <li>Android™ — All versions</li>
                            <li>AT&T</li>
                            <li>Brew</li>
                            <li>iPhone® — All versions</li>
                            <li>Kindle® — All versions</li>
                            <li>Microsoft IE Pocket PC 2003</li>
                            <li>Microsoft Windows CE 2003</li>
                            <li>Microsoft IE Smartphone 2003</li>
                            <li>Motorola® phones</li>
                            <li>Netscape Communicator 4.51+</li>
                            <li>Nokia phones</li>
                            <li>Nook®</li>
                            <li>Openwave mobile browser</li>
                            <li>Opera Mini v3+</li>
                            <li>Opera Mobile 6+</li>
                            <li>Palm OS® — 6.1 and higher</li>
                            <li>RIM BlackBerry OS</li>
                            <li>RIM Blackberry v4.2.1 +</li>
                            <li>Sony Netjuke audio</li>
                            <li>Sony Playstation 3</li>
                            <li>Sony-Ericsson phones</li>
                            <li>Sun Java Runtime® (JRE)</li>
                            <li>TorchMobile Iris Browser</li>
                            <li>webOS</li>
                            <li>Windows Mobile 2003+, 5+</li>
                            <li>Windows Mobile® 2005 AKU 2 and higher</li>
                            <li>Microsoft Windows Mobile 5/6*</li>
                        </ul>
                    </div>
                </div>
                <div className="wiki-bg-dark">
                    <h4 className='term-title'>Серверные платформы</h4>
                    <div className="flex-box">
                        <ul className="pri-policy-lists">
                            <li>Apache + MOD SSL</li>
                            <li>Apache + Raven</li>
                            <li>BEA WebLogic</li>
                            <li>Cobalt RaQ3/RaQ4 "Main Site"</li>
                            <li>Ensim Control Panel</li>
                            <li>IBM HTTP Server</li>
                            <li>iPlanet Server / Sun One</li>
                            <li>Lotus Domino 4.6 and higher</li>
                            <li>Microsoft IE Server 5.0 & 6.0</li>
                            <li>Microsoft ISA</li>
                            <li>Netscape Enterprise/Fast Track</li>
                            <li>O'Reilly / DWP 2.X / 3.X</li>
                            <li>Stronghold 3</li>
                            <li>WebSTAR 4</li>
                        </ul>
                        <ul className="pri-policy-lists">
                            <li>Apache + Raven 1.5x</li>
                            <li>Apache + SSLeay</li>
                            <li>C2Net Stronghold</li>
                            <li>cPanel / WHM</li>
                            <li>HSphere</li>
                            <li>iPlanet Enterprise Server 4.1</li>
                            <li>Java Web Server (Javasoft / Sun)</li>
                            <li>Microsoft IE Server 4.0</li>
                            <li>Microsoft IIS</li>
                            <li>Microsoft Live Communication Server</li>
                            <li>Novell ConsoleOne</li>
                            <li>Plesk</li>
                            <li>Tomcat</li>
                            <li>Zeus Web Server v3</li>
                        </ul>
                    </div>
                </div>
                <div className="wiki-bg-dark">
                    <h4 className="term-title">Прикладные комплекты</h4>
                    <div className="flex-box">
                        <ul className="pri-policy-lists">
                            <li>Adobe AIR</li>
                            <li>IBM Web Sphere Micro Environment (WME)</li>
                            <li>Mozilla Suite 1.0+</li>
                            <li>Sun J2EE 1.4.2_02</li>
                            <li>Visual Basic for Applications (VBA)</li>
                        </ul>
                        <ul className="pri-policy-lists">
                            <li>IBM Web Sphere Custom Environment (WCE)</li>
                            <li>Microsoft Authenticode</li>
                            <li>Sea Monkey</li>
                            <li>Sun Java SE 1.4.2+</li>
                        </ul>
                    </div>
                </div>
                <div className="wiki-bg-dark">
                    <h4 className="term-title">Дополнительные приложения</h4>
                    <div className="flex-box">
                        <ul className="pri-policy-lists">
                            <li>Google Checkout</li>
                            <li>Internet Explorer 7: (XP)</li>
                            <li>SeaMonkey</li>
                        </ul>
                        <ul className="pri-policy-lists">
                            <li>Internet Explorer 7: (Vista)</li>
                            <li>Mozilla Firefox 3.</li>
                            <li>Sun Java 1.4.2</li>
                        </ul>
                    </div>
                </div>
                <div className="wiki-bg-dark">
                    <h4 className="term-title">Почтовые серверы</h4>
                    <div className="flex-box">
                        <ul className="pri-policy-lists">
                            <li>Courier IMAP</li>
                            <li>CPPop (cPanel mail server) and other stunnel based mail servers</li>
                            <li>IPswitch IMAIL</li>
                        </ul>
                        <ul className="pri-policy-lists">
                            <li>CPopper</li>
                            <li>Exchange 5 / 2000 / 2003 (Outlook Web Access)</li>
                            <li>Postfix</li>
                        </ul>
                    </div>
                </div>
                <div className="wiki-bg-dark">
                    <h4 className="term-title">Платформы для защиты документов</h4>
                    <div className="flex-box">
                        <ul className="pri-policy-lists">
                            <li>Microsoft Office(Word, Excel, Powerpoint, Access, InfoPath)</li>
                            <li>Microsft Outlook 2013/2010/2007/2003, Windows Live Mail, Mozilla Thunderbird, MAC OS X Mail, Apple Mail, Eudora, iOS, Android and more.</li>
                        </ul>
                    </div>
                </div>
                <div className="wiki-bg-dark">
                    <h4 className="term-title">Клиенты электронной почты (S/MIME)</h4>
                    <div className="flex-box">
                        <ul className="pri-policy-lists">
                            <li>Lotus Notes</li>
                            <li>Microsoft Outlook 99+</li>
                            <li>Microsoft Entourage (OS/X)</li>
                            <li>Microsoft Outlook Express 5+</li>
                            <li>Mulberry Email 3.1.6+</li>
                            <li>Qualcomm Eudora 6.2+</li>
                            <li>Microsoft Outlook 99+</li>
                        </ul>
                        <ul className="pri-policy-lists">
                            <p>Mail.app (Mac OS X)</p>
                            <p>Microsoft / Windows Mail 1.0+ (Vista)</p>
                            <p>Microsoft Outlook 99+</p>
                            <p>Mozilla Thunderbird 1.0+</p>
                            <p>Netscape Communicator 4.51+</p>
                            <p>The Bat 1+</p>
                        </ul>
                    </div>
                </div>
            </div>
            <div className='wiki-main-link-box'>
                <a className='wiki-main-link' href="/wiki">Вернуться в SSL Wiki</a>
            </div>
        </>
    )
}