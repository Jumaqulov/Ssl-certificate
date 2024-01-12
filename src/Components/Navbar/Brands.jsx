import React from 'react'

export default function Brands() {

    function handleClick(href) {
        if (href == 'digicert') {
            window.location.href = '/digicert'
        } else if (href == 'gogetssl') {
            window.location.href = '/gogetssl'
        } else if (href == 'sectigo') {
            window.location.href = '/sectigo'
        } else if (href == 'geotrust') {
            window.location.href = '/geotrust'
        } else if (href == 'rapidssl') {
            window.location.href = '/rapidssl'
        } else if (href == 'thawte') {
            window.location.href = '/thawte'
        } else if (href == 'report-better-price') {
            window.location.href = '/report-better-price'
        } else if (href == 'compare-dv-ssl') {
            window.location.href = '/compare-dv-ssl'
        }
    }

    return (
        <div className='main-sect'>
            <div className='sect-two'>
                <div className='sect-two-item'>
                    <button onClick={() => handleClick('digicert')} className='sect-two-item-btn btn-digicert'>Digicert</button>
                    <a href="">Basic OV (FLEX)</a>
                    <a href="">Basic EV</a>
                    <a href="">Wildcard SSL</a>
                    <a href="">Secure Site (FLEX)</a>
                    <a href="">Secure Site EV</a>
                    <a href="">Secure Site Pro (FLEX)</a>
                    <a href="">Secure Site Pro EV</a>
                    <a href="">Secure Site Wildcard</a>
                    <a href="">Code Signing SSL</a>
                    <a href="">Code Signing EV SSL</a>
                    <a href="">VMC Certificate</a>
                    <a href="">Document Signing SSL</a>
                    <a href="">S/MIME Certificate</a>
                </div>
                <div className='sect-two-item'>
                    <button onClick={() => handleClick('gogetssl')} className='sect-two-item-btn btn-gogetssl'>GoGetSSL</button>
                    <a href="">90-day Trial SSL</a>
                    <a href="">Secure Domain SSL (FLEX)</a>
                    <a href="">Domain SSL</a>
                    <a href="">Multi-Domain (FLEX)</a>
                    <a href="">Wildcard SSL</a>
                    <a href="">BusinessTrust SSL</a>
                    <a href="">BusinessTrust Wildcard</a>
                    <a href="">BusinessTrust EV</a>
                    <a href="">Public IP SAN</a>
                    <a href="">Code Signing SSL</a>
                    <a href="">Code Signing EV SSL</a>
                </div>
                <div className='sect-two-item'>
                    <button onClick={() => handleClick('sectigo')} className='sect-two-item-btn btn-sectigo'>Sectigo</button>
                    <a href="">EssentialSSL</a>
                    <a href="">EssentialSSL Wildcard</a>
                    <a href="">InstantSSL Premium</a>
                    <a href="">Multi-domain SSL</a>
                    <a href="">Multi-domain EV SSL</a>
                    <a href="">Multi-domain Wildcard</a>
                    <a href="">PositiveSSL</a>
                    <a href="">PositiveSSL EV</a>
                    <a href="">PositiveSSL Wildcard</a>
                    <a href="">PositiveSSL Multi-Domain</a>
                    <a href="">Code Signing SSL</a>
                    <a href="">EV Code Signing SSL</a>
                </div>
                <div className='sect-two-item'>
                    <button onClick={() => handleClick('geotrust')} className='sect-two-item-btn btn-geotrust'>GeoTrust</button>
                    <a href="">True BusinessID OV (FLEX)</a>
                    <a href="">True BusinessID OV SAN</a>
                    <a href="">True BusinessID EV</a>
                    <a href="">True BusinessID EV SAN</a>
                    <a href="">True BusinessID Wildcard</a>
                    <a href="">QuickSSL Premium (FLEX)</a>
                    <a href="">QuickSSL Wildcard</a>
                    <button onClick={() => handleClick('rapidssl')} className='sect-two-item-btn btn-rapidssl'>RapidSSL</button>
                    <a href="">Standard Certificate</a>
                    <a href="">Wildcard Certificate</a>
                </div>
                <div className='sect-two-item'>
                    <button onClick={() => handleClick('thawte')} className='sect-two-item-btn btn-thawte'>Thawte</button>
                    <a href="">SSL 123 (Flex)</a>
                    <a href="">SSL 123 Wildcard</a>
                    <a href="">Web Server OV (FLEX)</a>
                    <a href="">Web Server EV</a>
                    <a href="">Wildcard SSL</a>
                    <button onClick={() => handleClick('report-better-price')} className='sect-two-item-btn btn-target'>
                        <svg width={'30px'} height={'30px'} xmlns="http://www.w3.org/2000/svg" fill='#dc8510' viewBox='0 0 32 32'>
                            <path d="M13.8268 14.56184c.18679 0 .37358 0 .56038.06226l2.80192-2.8642c-.93397-.49811-2.117-.80944-3.3623-.80944-3.98497 0-7.22275 3.23779-7.22275 7.22275 0 3.98496 3.23778 7.22274 7.22274 7.22274s7.22274-3.23779 7.22274-7.22275c0-1.2453-.31132-2.42833-.80944-3.3623l-2.8642 2.80192c.06227.1868.06227.37359.06227.56039 0 1.99247-1.61889 3.5491-3.61137 3.5491s-3.5491-1.55662-3.5491-3.5491c0-1.99249 1.55662-3.61138 3.5491-3.61138zm8.46804-1.93022c1.0585 1.61889 1.68115 3.48684 1.68115 5.54159 0 5.54158-4.54534 10.1492-10.1492 10.1492-5.54158 0-10.1492-4.60762-10.1492-10.1492 0-5.60386 4.60762-10.1492 10.1492-10.1492 2.05475 0 3.9227.62265 5.54159 1.68115l2.61513-2.61513c-2.3038-1.68115-5.10573-2.6774-8.15672-2.6774-7.59633 0-13.76056 6.16424-13.76056 13.76058 0 7.59633 6.16423 13.76056 13.76056 13.76056s13.76057-6.16423 13.76057-13.76056c0-3.051-.99624-5.85292-2.6774-8.15672l-2.61513 2.61513zm9.5888-8.21898c-.06226-.24906-.31132-.49812-.56038-.56039L28.5836 3.4164 28.14775.67674c-.06227-.24906-.31133-.49812-.56039-.56039-.24906-.12453-.56038 0-.74718.1868l-2.117 2.05474c-.12454.12453-.1868.31133-.1868.56039v3.11325l-11.3945 11.3945c-.37359.37358-.37359.99623 0 1.43209.43585.37359 1.0585.37359 1.4321 0l11.3945-11.3945h3.11324c.24906 0 .43586-.06226.56039-.1868l2.05474-2.117c.1868-.1868.31133-.49812.1868-.74718z"></path>
                        </svg>
                        <span>Price Match</span>
                    </button>
                    <button onClick={() => handleClick('compare-dv-ssl')} className='sect-two-item-btn btn-compare'>
                        <svg width={'30px'} height={'30px'} xmlns="http://www.w3.org/2000/svg" viewBox='0 0 32 32'>
                            <g fill="#4b4b4b" stroke="null"><path d="M.063 3.542H16V21.25H.063v3.542H16a3.54 3.54 0 0 0 3.542-3.542V3.542A3.54 3.54 0 0 0 16 0H.063v3.542z"></path><path d="M16 23.083h-3.542v5.313A3.54 3.54 0 0 0 16 31.937h15.937v-3.541H16v-5.313zM17.771 7.146h14.167v3.542H17.771z"></path></g><g fill="#DC8510"><path stroke="null" d="M5.438 7.083l5.312 5.313-5.312 5.312z"></path><path stroke="#DC8510" strokeWidth="2" strokeMiterlimit="10" d="M8.979 12.396H.125"></path></g><g fill="#78a22e"><path stroke="null" d="M26.687 14.292l-5.312 5.312 5.312 5.313z"></path><path stroke="#78a22e" strokeWidth="2" strokeMiterlimit="10" d="M24.854 19.542h7.083"></path></g>
                        </svg>
                        <span>Compare</span>
                    </button>
                </div>
            </div>
        </div>
    )
}