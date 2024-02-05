import React from 'react'

export default function Brands() {

    function handleClick(href) {
        if (href === 'digicert') {
            window.location.href = '/digicert'
        } else if (href === 'gogetssl') {
            window.location.href = '/gogetssl'
        } else if (href === 'sectigo') {
            window.location.href = '/sectigo'
        } else if (href === 'geotrust') {
            window.location.href = '/geotrust'
        } else if (href === 'rapidssl') {
            window.location.href = '/rapidssl'
        } else if (href === 'thawte') {
            window.location.href = '/thawte'
        } else if (href === 'report-better-price') {
            window.location.href = '/report-better-price'
        } else if (href === 'compare-dv-ssl') {
            window.location.href = '/compare-dv-ssl'
        }
    }

    return (
        <div className='main-sect'>
            <div className='sect-two sect-res'>
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
                        <span>Соответствие цен</span>
                    </button>
                    <button onClick={() => handleClick('compare-dv-ssl')} className='sect-two-item-btn btn-compare'>
                        <span>Сравнить</span>
                    </button>
                </div>
            </div>
        </div>
    )
}