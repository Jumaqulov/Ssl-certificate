import React from 'react'
import { CiLock, CiGlobe } from "react-icons/ci";
import { IoInfiniteSharp } from "react-icons/io5";
import AboutOffer from './AboutOffer'

export default function HomeOffers() {
    return (
        <div className='home-offers'>
            <div className='offer-box'>
                <div className="offers offer-1">
                    <p className='title-offer'>Домен</p>
                    <ul>
                        <li>Защита домена/поддоменов</li>
                        <li>Никакой бумажной волокиты</li>
                        <li>Выдается в течение 5 минут</li>
                    </ul>
                    <div className='offer-svg-link offer-svg-link-1'>
                        <div>
                            <span>
                                <CiLock />
                            </span>
                            <span>
                                <CiLock />
                            </span>
                            <span>
                                <CiLock />
                            </span>
                        </div>
                        <a className='offer-link offer-link-1' href="/dv-ssl">Купить сейчас</a>
                    </div>
                    <h6>Начиная с <span>$14.21</span></h6>
                </div>
                <div className="offers offer-1">
                    <p className='title-offer'>Бизнес</p>
                    <ul>
                        <li>Защита домена/поддоменов</li>
                        <li>Проверяет компанию</li>
                        <li>Выдается в течение 2-4 дней</li>
                    </ul>
                    <div className='offer-svg-link offer-svg-link-2'>
                        <div>
                            <span>
                                <CiLock />
                            </span>
                            <span>
                                <CiLock />
                            </span>
                            <span>
                                <CiLock />
                            </span>
                        </div>
                        <a className='offer-link offer-link-2' href="/ov-ssl">Купить сейчас</a>
                    </div>
                    <h6>Начиная с <span>$30.36</span></h6>
                </div>
                <div className="offers offer-1">
                    <p className='title-offer'>Расширенный</p>
                    <ul>
                        <li>Защита домена/поддоменов</li>
                        <li>Зеленый знак сайта</li>
                        <li>Выдается в течение 2-7 дней</li>
                    </ul>
                    <div className='offer-svg-link offer-svg-link-3'>
                        <div>
                            <span>
                                <CiLock />
                            </span>
                            <span>
                                <CiLock />
                            </span>
                            <span>
                                <CiLock />
                            </span>
                        </div>
                        <a className='offer-link offer-link-3' href="/ev-ssl">Купить сейчас</a>
                    </div>
                    <h6>Начиная с <span>$74.97</span></h6>
                </div>
                <div className="offers offer-2">
                    <p className='title-offer'>Wildcard SSL</p>
                    <ul>
                        <li>Неограниченное количество поддоменов</li>
                        <li>Неограниченное лицензирование серверов</li>
                        <li>Выдается в течение 5 минут</li>
                    </ul>
                    <div className='offer-svg-link'>
                        <span>
                            <IoInfiniteSharp className='infinty-svg' />
                        </span>
                        <a className='offer-link offer-link-4' href="/wildcard-ssl">Купить сейчас</a>
                    </div>
                    <h6>Начиная с <span>$72.00</span></h6>
                </div>
                <div className="offers offer-2">
                    <p className='title-offer'>Мультидомен</p>
                    <ul>
                        <li>Защищает до 250 доменов</li>
                        <li>Совместимость с MS Exchange</li>
                        <li>Экономия денег и времени</li>
                    </ul>
                    <div className='offer-svg-link'>
                        <a className='offer-link offer-link-3' href="/multi-domain-ssl">Купить сейчас</a>
                        <span>
                            <CiGlobe className='san-svg' />
                        </span>
                    </div>
                    <h6>Начиная с <span>$72.00</span></h6>
                </div>
            </div>
            <AboutOffer />
        </div>
    )
}