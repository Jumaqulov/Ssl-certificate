import React from 'react'
import { Link } from 'react-router-dom'
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
                                <Link className='title-link' to="/company">Компания</Link>
                                <Link className='box-link-item' to="/">Главная страница</Link>
                                <Link className='box-link-item' to="/reseller-program">Программа для реселлеров</Link>
                                <Link className='box-link-item' to="/refund-policy">Платежи/Возвраты</Link>
                                <Link className='box-link-item' to="/news">Корпоративные новости</Link>
                                <Link className='box-link-item' to="/terms-and-conditions">Условия и положения</Link>
                                <Link className='box-link-item' to="/support">Контакты компании</Link>
                                <Link className='box-link-item' to="/sitemap">Карта сайта</Link>
                            </li>
                            <li>
                                <Link className='title-link' to="/ssl-certificates">Поставщики</Link>
                                <Link className='box-link-item' to="/digicert">DigiCert</Link>
                                <Link className='box-link-item' to="/sslcerts">GoGetSSL</Link>
                                <Link className='box-link-item' to="/geotrust">GeoTrust</Link>
                                <Link className='box-link-item' to="/rapidssl">RapidSSL</Link>
                                <Link className='box-link-item' to="/sectigo">Sectigo</Link>
                                <Link className='box-link-item' to="/thawte">Thawte</Link>
                            </li>
                            <li>
                                <Link className='title-link' to='/dv-ssl'>Категории</Link>
                                <Link className='box-link-item' to='/dv-ssl'>Валидация домена</Link>
                                <Link className='box-link-item' to='/ov-ssl'>Валидация бизнеса</Link>
                                <Link className='box-link-item' to='/ev-ssl'>Расширенная проверка</Link>
                                <Link className='box-link-item' to='/wildcard-ssl'>Wildcard SSL</Link>
                                <Link className='box-link-item' to='/multi-domian-ssl'>Сертификаты UCC/SAN</Link>
                                <Link className='box-link-item' to='/code-signing-ssl'>CodeSigning SSL</Link>
                                <Link className='box-link-item' to='/vcm-certificates'>Сертификаты VMC</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='middle-right'>
                        <div className="box">
                            <div className="payment">
                                <img src={click} alt="click up" />
                            </div>
                            <div className="payment">
                                <img src={payme} alt="payme" />
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}