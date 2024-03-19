import React from 'react'
import { CiWarning } from 'react-icons/ci'
import example1 from '../../../assets/Images/Wiki-Img/windows_not_enough_information.png'

export default function WindowDoesNot() {
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
                <a href='/wiki/problems'>Проблемы и вопросы</a>
                <span className='next'>
                    <svg viewBox='0 0 19 32'>
                        <path
                            d="M5.66962.995l12.304 12.89c.642.643.964 1.287.961 2.144s-.326 1.501-.97 2.144l-12.353 12.839c-.539.643-1.288.856-2.254.854-.858-.001-1.609-.218-2.25-.863-1.392-1.397-1.39-2.79.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9.009-4.289.645-.641 1.396-.854 2.253-.852.966 0 1.716.218 2.25.86v.001z">
                        </path>
                    </svg>
                </span>
                <span className='current'>Windows не располагает достаточной информацией для проверки этого сертификата</span>
            </div>
            <div className="wiki-main">
                <h3>Windows не располагает достаточной информацией для проверки этого сертификата</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <CiWarning className='cert-txt-svg' />
                    </span>
                    <span>Необычная ошибка, возникающая в Windows, появляется, когда промежуточные сертификаты не установлены. Посмотрите на скриншот ниже.</span>
                </p>
                <div className='example_images text-center'>
                    <img src={example1} alt="Как исправить ошибку ERR_CERT_DATE_INVALID , How to FIX ERR_CERT_DATE_INVALID" />
                </div>
                <ul className="wiki-guide">
                    <li>
                        <div className='wiki-guide-num'>
                            <span className='ssl-validation-txt'>✔</span>
                        </div>
                        <div>
                            <h4 className='term-title ssl-validation-txt'>Решение</h4>
                            <p>Решить эту проблему очень просто. Все, что вам нужно, - это установить все сертификаты, которые были предоставлены вам в рамках вашего заказа. Проверьте наш магазин <a href="/wiki/intermediate-certificates">промежуточных сертификатов</a>.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='wiki-main-link-box'>
                <a className='wiki-main-link' href="/wiki">Вернуться в SSL Wiki</a>
            </div>
        </>
    )
}