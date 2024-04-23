import React, { useEffect } from 'react'
import { FaQuestionCircle } from 'react-icons/fa'
import chromeBrowser from '../../../assets/Images/Wiki-Img/check_ssl_browser_chrome.png'
import firefox from '../../../assets/Images/Wiki-Img/check_ssl_browser_firefox.png'
import opera from '../../../assets/Images/Wiki-Img/check_ssl_browser_opera.png'
import edge from '../../../assets/Images/Wiki-Img/check_ssl_browser_edge.png'
import safari from '../../../assets/Images/Wiki-Img/check_ssl_browser_safari.png'

export default function HowToCheck() {
    useEffect(() => {
        document.title = 'Как исправить ситуацию с просмотром сведений о сертификате SSL в Chrome'
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
                <a href='/wiki/ssl-basics'>Основы SSL / FAQ</a>
                <span className='next'>
                    <svg viewBox='0 0 19 32'>
                        <path
                            d="M5.66962.995l12.304 12.89c.642.643.964 1.287.961 2.144s-.326 1.501-.97 2.144l-12.353 12.839c-.539.643-1.288.856-2.254.854-.858-.001-1.609-.218-2.25-.863-1.392-1.397-1.39-2.79.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9.009-4.289.645-.641 1.396-.854 2.253-.852.966 0 1.716.218 2.25.86v.001z">
                        </path>
                    </svg>
                </span>
                <span className='current'>Как исправить ситуацию с просмотром сведений о сертификате SSL в Chrome</span>
            </div>
            <div className="wiki-main">
                <h3>Логотип Site Seal</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <FaQuestionCircle className='cert-txt-svg' />
                    </span>
                    <span>Все больше посетителей сайтов и пользователей начинают обращать внимание на онлайн-защиту и SSL-сертификаты. Причиной тому является Google, который с июля 2018 года ввел обязательное использование HTTPS. Проверка данных сертификата в браузере - простая задача для опытных пользователей, но может стать проблемой для обычных клиентов.</span>
                </p>
                <ul className="wiki-guide">
                    <li>
                        <div className='wiki-guide-num'>
                            <span>1</span>
                        </div>
                        <div>
                            <h4 className="term-title">Какая информация доступна</h4>
                            <p>В сертификате содержится много информации, но в основном это техническая информация, которая не нужна вам как обычному пользователю сайта. Тем не менее, вам следует обратить внимание на такие основные моменты, как:</p>
                            <p>Какой центр сертификации (ЦС) выдал SSL;</p>
                            <p>Срок действия, чтобы знать, когда истекает срок действия;</p>
                            <p>Выдано на. Домен или публичный IP-адрес;</p>
                            <p>Реквизиты организации для сертификатов OV/EV;</p>
                            <p>Предметы SAN, Альтернативные доменные имена;</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>2</span>
                        </div>
                        <div>
                            <h4 className="term-title">Как просмотреть сведения о сертификате SSL</h4>
                            <p>Наша команда подготовила шорт-лист со скриншотами того, как проверить данные SSL-сертификата в браузерах Chrome, Firefox, Opera, Edge и Safari.</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>3</span>
                        </div>
                        <div>
                            <h4 className="term-title">Браузер Chrome</h4>
                            <p>1. Нажмите на значок "Блокировка" в адресной строке;</p>
                            <p>2. Нажмите кнопку "Сертификат" для просмотра установленного SSL-сертификата;</p>
                            <div className='example_images text-center'>
                                <img title='check ssl browser chrome' src={chromeBrowser} alt="check ssl browser chrome" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>4</span>
                        </div>
                        <div>
                            <h4 className="term-title">Браузер Firefox</h4>
                            <p>1. Нажмите на значок "Информация" в адресной строке;</p>
                            <p>2. Нажмите стрелку вправо в разделе "Соединение", чтобы просмотреть все подробности;</p>
                            <div className='example_images text-center'>
                                <img title='check ssl browser firefox' src={firefox} alt="check ssl browser firefox" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>5</span>
                        </div>
                        <div>
                            <h4 className="term-title">Браузер Opera</h4>
                            <p>1. Нажмите на значок "Блокировка" в адресной строке;</p>
                            <p>2. Нажмите кнопку "Просмотр сертификата", чтобы просмотреть подробную информацию о сертификате;</p>
                            <div className='example_images text-center'>
                                <img title='check ssl opera firefox' src={opera} alt="check ssl opera firefox" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>6</span>
                        </div>
                        <div>
                            <h4 className="term-title">Браузер Edge</h4>
                            <p>1. Нажмите на значок "Блокировка" в адресной строке;</p>
                            <p>2. Нажмите кнопку "Просмотр сертификата", чтобы увидеть установленный сертификат;</p>
                            <div className='example_images text-center'>
                                <img title='check ssl opera firefox' src={edge} alt="check ssl opera firefox" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>7</span>
                        </div>
                        <div>
                            <h4 className="term-title">Браузер Safari</h4>
                            <p>1. Нажмите на значок "Блокировка" в адресной строке;</p>
                            <p>2. Нажмите кнопку "Показать сертификат", чтобы увидеть все детали;</p>
                            <div className='example_images text-center'>
                                <img title='check ssl opera firefox' src={safari} alt="check ssl opera firefox" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span className='ssl-validation-txt'>✔</span>
                        </div>
                        <div>
                            <h4 className='term-title ssl-validation-txt'>Заключение</h4>
                            <p>Важно обратить внимание на безопасность посещаемого сайта. Валидный и надежный SSL-сертификат - это сигнал о том, что вы можете общаться с сайтом, заполнять контактные формы</p>
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