import React from 'react'
import { LiaShieldAltSolid } from "react-icons/lia";

export default function Certificates() {
    return (
        <div className='main-sect main-sect-res'>
            <ul className='sect-one sect-res'>
                <li className='sect-one-1'>
                    <a href="/dv-ssl/" className="dv nav-link-box">
                        <div className='img-text-icon'>
                            <LiaShieldAltSolid className='lia-shield-alt-solid shield-d' />
                            <span className="symbol-letter symbol-d">D</span>
                        </div>
                        <div className='text-box'>
                            <span className="title">Валидация домена</span>
                            <p>Выдается в течение 2-3 минут<br />Низкий уровень доверия. Нет бумажной волокиты</p>
                        </div>
                    </a>
                </li>
                <li className='sect-one-2'>
                    <a href="/multi-domain-ssl/" className="dv nav-link-box">
                        <div className='img-text-icon'>
                            <LiaShieldAltSolid className='lia-shield-alt-solid shield-s' />
                            <span className="symbol-letter symbol-s">S</span>
                        </div>
                        <div className='text-box'>
                            <span className="title">Мультидомен (SAN)</span>
                            <p>Защитите до 250 доменов с помощью одного SSL-сертификата</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/ov-ssl/" className="dv nav-link-box">
                        <div className='img-text-icon'>
                            <LiaShieldAltSolid className='lia-shield-alt-solid shield-b' />
                            <span className="symbol-letter symbol-b">B</span>
                        </div>
                        <div className='text-box'>
                            <span className="title">Удостоверение бизнеса</span>
                            <p>Выдается в течение 1-3 дней<br />Повышенный уровень доверия</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/wildcard-ssl/" className="dv nav-link-box">
                        <div className='img-text-icon'>
                            <LiaShieldAltSolid className='lia-shield-alt-solid shield-w' />
                            <span className="symbol-w">W</span>
                        </div>
                        <div className='text-box'>
                            <span className="title">Сертификаты Wildcard</span>
                            <p>Защитите неограниченное количество субдоменов<br /> одним SSL-сертификатом</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/ev-ssl/" className="dv nav-link-box">
                        <div className='img-text-icon'>
                            <LiaShieldAltSolid className='lia-shield-alt-solid shield-e' />
                            <span className="symbol-e symbol-letter">E</span>
                        </div>
                        <div className='text-box'>
                            <span className="title">Расширенная проверка</span>
                            <p>Выдается в течение 2-7 дней<br />Высший уровень доверия</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/smime-ssl/" className="dv nav-link-box">
                        <div className='img-text-icon'>
                            <LiaShieldAltSolid className='lia-shield-alt-solid shield-a' />
                            <span className="symbol-a symbol-letter">@</span>
                        </div>
                        <div className='text-box'>
                            <span className="title">Подписание электронной почты и документов</span>
                            <p>Разработан для сред MS Exchange и OCS</p>
                        </div>
                    </a>
                </li>
                <li className='sect-one-3'>
                    <a href="/code-signing-ssl/" className="dv nav-link-box">
                        <div className='img-text-icon'>
                            <LiaShieldAltSolid className='lia-shield-alt-solid shield-c' />
                            <span className="symbol-c symbol-letter">C</span>
                        </div>
                        <div className='text-box'>
                            <span className="title">Сертификаты подписи кода</span>
                            <p>Доверие при загрузке программного обеспечения путем проверки целостности кода</p>
                        </div>
                    </a>
                </li>
                <li className='sect-one-4'>
                    <a href="/digicert/vmc-certificates/" className="dv nav-link-box">
                        <div className='img-text-icon'>
                            <LiaShieldAltSolid className='lia-shield-alt-solid shield-v' />
                            <span className="symbol-v symbol-letter">V</span>
                        </div>
                        <div className='text-box'>
                            <span className="title">Сертификаты VMC</span>
                            <p>Отображение логотипа вашей компании в почтовых ящиках получателей.</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    )
}