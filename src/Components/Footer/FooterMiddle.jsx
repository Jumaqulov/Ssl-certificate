import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import click from '../../assets/svg/click-up.svg'
import payme from '../../assets/Images/payme_05.svg'

export default function FooterMiddle() {
    return (
        <div className="footer-middle-contain gb-padding">
            <div className='wrapper'>
                <div className="content">
                    <div className='middle-left'>
                        <ul className='link-box'>
                            <li>
                                <a className='title-link' href="/company">Компания</a>
                                <a className='box-link-item' href="/">Главная страница</a>
                                <a className='box-link-item' href="/refund-policy">Платежи/Возвраты</a>
                                <a className='box-link-item' href="/news">Корпоративные новости</a>
                                <a className='box-link-item' href="/terms-and-conditions">Условия и положения</a>
                                <a className='box-link-item' href="/support">Контакты компании</a>
                                <a className='box-link-item' href="/sitemap">Карта сайта</a>
                            </li>
                            <li>
                                <a className='title-link' href="/ssl-certificates">Поставщики</a>
                                <a className='box-link-item' href="/digicert">DigiCert</a>
                                <a className='box-link-item' href="/ssl-certs">GoGetSSL</a>
                                <a className='box-link-item' href="/geotrust">GeoTrust</a>
                                <a className='box-link-item' href="/rapidssl">RapidSSL</a>
                                <a className='box-link-item' href="/sectigo">Sectigo</a>
                                <a className='box-link-item' href="/thawte">Thawte</a>
                            </li>
                            <li>
                                <a className='title-link' href='/dv-ssl'>Категории</a>
                                <a className='box-link-item' href='/dv-ssl'>Валидация домена</a>
                                <a className='box-link-item' href='/ov-ssl'>Валидация бизнеса</a>
                                <a className='box-link-item' href='/ev-ssl'>Расширенная проверка</a>
                                <a className='box-link-item' href='/wildcard-ssl'>Wildcard SSL</a>
                                <a className='box-link-item' href='/multi-domian-ssl'>Сертификаты UCC/SAN</a>
                                <a className='box-link-item' href='/code-signing-ssl'>CodeSigning SSL</a>
                                <a className='box-link-item' href='/vcm-certificates'>Сертификаты VMC</a>
                            </li>
                        </ul>
                    </div>
                    <div className='middle-right'>
                        <div className="box">
                            <div className="payment">
                                <LazyLoadImage width={153} height={62} src={click} title='Click up' alt="Click up"/>
                            </div>
                            <div className="payment">
                                <LazyLoadImage width={153} height={44} src={payme} title='Payme' alt="Payme"/>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}