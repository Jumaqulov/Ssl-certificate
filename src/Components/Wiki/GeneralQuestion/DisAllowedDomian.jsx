import React, { useEffect } from 'react'
import { MdOutlineBusinessCenter } from "react-icons/md";

export default function DisAllowedDomian() {
    useEffect(() => {
        document.title = 'Запрещенные доменные имена | SSL Wiki'
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
                <a href='/wiki/general'>Общие вопросы</a>
                <span className='next'>
                    <svg viewBox='0 0 19 32'>
                        <path
                            d="M5.66962.995l12.304 12.89c.642.643.964 1.287.961 2.144s-.326 1.501-.97 2.144l-12.353 12.839c-.539.643-1.288.856-2.254.854-.858-.001-1.609-.218-2.25-.863-1.392-1.397-1.39-2.79.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9.009-4.289.645-.641 1.396-.854 2.253-.852.966 0 1.716.218 2.25.86v.001z">
                        </path>
                    </svg>
                </span>
                <span className='current'>Запрещенные доменные имена / регионы</span>
            </div>
            <div className="wiki-main">
                <h3>Запрещенные доменные имена / регионы</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <MdOutlineBusinessCenter className='cert-txt-svg'/>
                    </span>
                    <span>У каждого центра сертификации (ЦС) есть свои правила и список запрещенных доменных имен или запрещенных регионов/стран. На эти правила также влияют правила эмбарго страны, в которой находится штаб-квартира центра сертификации.</span>
                </p>
                <div className='wiki-bg-dark'>
                    <h4 className='term-title'>Ограничения от Sectigo, Comodo, GoGetSSL</h4>
                    <ul className='pri-policy-lists'>
                        <li>BY - Республика Беларусь</li>
                        <li>ИР - Иран</li>
                        <li>RU - Российская Федерация</li>
                        <li>VE - Венесуэла (организации, принадлежащие/контролируемые правительством)</li>
                        <li>Крым</li>
                        <li>Луганская народная республика</li>
                        <li>CU - Куба</li>
                        <li>КП - Корея, Народно-Демократическая Республика</li>
                        <li>SY - Сирийская Арабская Республика</li>
                        <li>GOV.VE - Венесуэла</li>
                        <li>Донецкая народная республика</li>
                    </ul>
                </div>
                <div className="wiki-bg-dark">
                    <h4 className='term-title'>Ограничения от DigiCert, RapidSSL, Thawte, Geotrust</h4>
                    <ul className='pri-policy-lists'>
                        <li>RU - Российская Федерация</li>
                        <li>BY - Республика Беларусь</li>
                        <li>CU-Cuba</li>
                        <li>IR-Иран</li>
                        <li>SY-Сирия</li>
                        <li>КП Корея, Народно-Демократическая Республика</li>
                        <li>Крым</li>
                        <li>Донецкая народная республика</li>
                        <li>Луганская народная республика</li>
                        <li>Венесуэла</li>
                    </ul>
                </div>
            </div>
            <div className='wiki-main-link-box'>
                <a className='wiki-main-link' href="/wiki">Вернуться в SSL Wiki</a>
            </div>
        </>
    )
}