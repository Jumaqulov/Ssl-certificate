import React from 'react'
import { PiGearSix } from "react-icons/pi";
import { SlSupport } from "react-icons/sl";
import { BsGearWideConnected } from "react-icons/bs";
import { GiGearHammer } from "react-icons/gi";
import { GiBigGear } from "react-icons/gi";
import { VscSettingsGear } from "react-icons/vsc";

export default function Support() {
    return (
        <div className='main-sect'>
            <ul className='sect-three sect-res'>
                <li className='sect-one-1'>
                    <a href="/online-csr-generator" className="sect-three-link">
                        <div className='img-icon-support'>
                            <PiGearSix className='pi-gear-six' />
                        </div>
                        <div className='text-box'>
                            <span className="title">Генератор CSR</span>
                            <p>Получите сгенерированный код CSR в течение нескольких секунд</p>
                        </div>
                    </a>
                </li>
                <li className='sect-one-2'>
                    <a href="/support" className="sect-three-link">
                        <div className='img-icon-support'>
                            <SlSupport className='nav-sl-support' />
                        </div>
                        <div className='text-box'>
                            <span className="title">Центр помощи</span>
                            <p>Отправьте нам электронное письмо или отправьте заявку в службу поддержки</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/online-csr-decoder" className="sect-three-link">
                        <div className='img-icon-support'>
                            <BsGearWideConnected className='bs-gear-wide' />
                        </div>
                        <div className='text-box'>
                            <span className="title">Декодер CSR</span>
                            <p>Декодируйте информацию из сгенерированного вами кода CSR</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/wiki" className="sect-three-link">
                        <div className='img-icon-support'>
                            <GiGearHammer  className='gi-gear-hammer'/>
                        </div>
                        <div className='text-box'>
                            <span className="title">SSL Wiki / Руководства</span>
                            <p>Генерация CSR . Установка. Ошибки и решения</p>
                        </div>
                    </a>
                </li>
                <li className='sect-one-3'>
                    <a href="/check-ssl-installation" className="sect-three-link">
                        <div className='img-icon-support'>
                            <GiBigGear className='gi-big-gear' />
                        </div>
                        <div className='text-box'>
                            <span className="title">Проверка SSL</span>
                            <p>Инструмент диагностики установки SSL-сертификата</p>
                        </div>
                    </a>
                </li>
                <li className='sect-one-4'>
                    <a href="/ssl-certificate-matcher-tool/" className="sect-three-link">
                        <div className='img-icon-support'>
                            <VscSettingsGear className='vsc-settings'/>
                        </div>
                        <div className='text-box'>
                            <span className="title">Инструмент SSL Matcher</span>
                            <p>Проверка соответствия закрытого ключа сертификату SSL</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    )
}