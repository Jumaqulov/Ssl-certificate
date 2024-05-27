import React from 'react'
import { MdOutlineWorkspacePremium, MdOutlineBusinessCenter } from "react-icons/md";
import { IoIosNotificationsOutline } from "react-icons/io";
import { LiaFileContractSolid } from "react-icons/lia";
import { GiPriceTag, GiRotaryPhone } from "react-icons/gi";

export default function Company() {
    return (
        <div className='main-sect'>
            <ul className='sect-four sect-res'>
                <li className='sect-one-1'>
                    <a href="/privacy-policy" className="sect-three-link">
                        <div className='img-icon'>
                            <MdOutlineWorkspacePremium className='md-outline-workspace' />
                        </div>
                        <div className='text-box'>
                            <span className="title">Политика конфиденциальности</span>
                            <p>Конфиденциальность - наш приоритет, процедуры безопасности</p>
                        </div>
                    </a>
                </li>
                <li className='sect-one-2'>
                    <a href="/news" className="sect-three-link">
                        <div className='img-icon'>
                            <IoIosNotificationsOutline className='io-iosnotification' />
                        </div>
                        <div className='text-box'>
                            <span className="title">Корпоративные новости</span>
                            <p>Корпоративные новостиСобытия, Новые продукты, функции и планы на будущее</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/terms-and-conditions" className="sect-three-link">
                        <div className='img-icon'>
                            <LiaFileContractSolid className='lia-file-contract' />
                        </div>
                        <div className='text-box'>
                            <span className="title">Условия и положения</span>
                            <p>Правила соглашения</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/company" className="sect-three-link">
                        <div className='img-icon'>
                            <MdOutlineBusinessCenter className='md-outline-business' />
                        </div>
                        <div className='text-box'>
                            <span className="title">О нашей компании</span>
                            <p>Краткий обзор, факты, история и партнеры</p>
                        </div>
                    </a>
                </li>
                <li className='sect-one-3'>
                    <a href="/refund-policy" className="sect-three-link">
                        <div className='img-icon'>
                            <GiPriceTag className='gi-price-tag' />
                        </div>
                        <div className='text-box'>
                            <span className="title">Способы оплаты</span>
                            <p>Доступные способы оплаты, комиссии</p>
                        </div>
                    </a>
                </li>
                <li className='sect-one-4'>
                    <a href="/support" className="sect-three-link">
                        <div className='img-icon'>
                            <GiRotaryPhone className='gi-rotary-phone' />
                        </div>
                        <div className='text-box'>
                            <span className="title">Контакты компании</span>
                            <p>Информация для выставления счетов и официальные контакты</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    )
}