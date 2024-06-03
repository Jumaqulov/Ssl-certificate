import React from 'react'
import { LazyLoadImage } from 'react-lazy-load-image-component';
import { FaInstagram, FaFacebook, FaYoutube, FaTelegram } from "react-icons/fa";
import { TfiEmail } from "react-icons/tfi";
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
                                <a className='box-link-item' href="/refund-policy">Платежи</a>
                                {/* <a className='box-link-item' href="/news">Корпоративные новости</a> */}
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
                            </li>
                        </ul>
                    </div>
                    <div className='middle-right'>
                        <div className="box">
                            <div className="payment">
                                <LazyLoadImage width={153} height={62} src={click} title='Click up' alt="Click up" />
                            </div>
                            <div className="payment">
                                <LazyLoadImage width={153} height={44} src={payme} title='Payme' alt="Payme" />
                            </div>
                            <div className="social-links">
                                <div className="social-row">
                                    <a href="https://www.instagram.com/starlab.uz" target='_blank' className='instagram' title='Instagram' name='Instagram' rel='noopener' aria-label='Instagram sahifamizga obuna bo‘ling'>
                                        <FaInstagram aria-hidden="true" />
                                    </a>
                                    <a href="https://www.facebook.com/starlab.uz" target='_blank' className='facebook' title='Facebook' name='Facebook' rel='noopener' aria-label='Facebook sahifamizga obuna bo‘ling'>
                                        <FaFacebook aria-hidden="true" />
                                    </a>
                                    <a href="https://www.youtube.com/channel/UCqshldoZsm4jd9DScHqZhdQ" target='_blank' className='youtube' name='YouTube' rel='noopener' aria-label='YouTube kanalimizga obuna bo‘ling'>
                                        <FaYoutube aria-hidden="true" />
                                    </a>
                                </div>
                                <div className="social-row">
                                    <a href="https://t.me/starlabuz" target='_blank' title='Telegram' className='telegram' name='Telegram' rel='noopener' aria-label='Telegram kanalimizga qo‘shiling'>
                                        <FaTelegram aria-hidden="true" />
                                    </a>
                                    <a href="mailto:info@starlab.uz" target='_blank' title='Email' className='email' name='Email' rel='noopener' aria-label='Bizga elektron pochta orqali xabar yuboring'>
                                        <TfiEmail aria-hidden="true" />
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div >
    )
}