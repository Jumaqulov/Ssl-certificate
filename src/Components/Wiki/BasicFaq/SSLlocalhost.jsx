import React, { useEffect } from 'react'
import { FaQuestionCircle } from 'react-icons/fa'
import image from '../../../assets/Images/Wiki-Img/localhost_image_1.png'
import image2 from '../../../assets/Images/Wiki-Img/localhost_image_2.png'
import image3 from '../../../assets/Images/Wiki-Img/localhost_image_3.png'
import image4 from '../../../assets/Images/Wiki-Img/localhost_image_4.png'
import image5 from '../../../assets/Images/Wiki-Img/localhost_image_5.png'
import image6 from '../../../assets/Images/Wiki-Img/localhost_image_6.png'

export default function SSLlocalhost() {
    useEffect(() => {
        document.title = 'SSL-сертификат для Localhost'
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
                <span className='current'>SSL-сертификат для Localhost</span>
            </div>
            <div className="wiki-main">
                <h3>SSL-сертификат для Localhost</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <FaQuestionCircle className='cert-txt-svg' />
                    </span>
                    <span>В настоящее время использование HTTPS становится обязательным для всех сайтов и веб-приложений. Однако в процессе разработки возникает проблема, связанная с корректным тестированием. Естественно, Let's Encrypt и другие CA не выдают сертификаты для localhost, так как с 1 ноября 2015 года CA/B Forum проголосовал за прекращение их выдачи. Традиционно есть два решения, описанные ниже.</span>
                </p>
                <ul className="wiki-guide">
                    <li>
                        <div className='wiki-guide-num'>
                            <span>1</span>
                        </div>
                        <div>
                            <h4 className="term-title">Решение 1: Самоподписанный SSL</h4>
                            <p>Самоподписанные сертификаты, созданные с помощью openssl или других программ. Вот самый простой способ сгенерировать закрытый ключ и самоподписанный сертификат для localhost:</p>
                            <div className='example_images'>
                                <img title='check ssl browser chrome' src={image} alt="check ssl browser chrome" />
                            </div>
                            <p>Но такой сертификат будет вызывать ошибки доверия в браузерах, поскольку в доверенном хранилище нет соответствующего центра сертификации.</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>2</span>
                        </div>
                        <div>
                            <h4 className="term-title">Решение 2: mkcert</h4>
                            <p>Хитрость заключается в том, чтобы зарегистрировать новый домен типа localhost.example.com, который локально разрешается в 127.0.0.1 (в / etc / hosts), чтобы получить обычный сертификат для этого домена. Но такое мошенничество сомнительно с точки зрения безопасности - по крайней мере, для публичных сервисов такое разрешение крайне не рекомендуется из-за возможной MiTM-атаки с изменением на враждебный IP-адрес. Если мы ограничимся только локальной машиной, то это может быть подходящим вариантом, хотя и здесь есть некоторые сомнения. Кроме того, такой сертификат может быть отозван. В любом случае есть более простой и безопасный вариант (см. ниже).</p>
                            <p>Это <i>mkcert</i>, простая утилита для генерации локально доверенных сертификатов с <b>собственным центром сертификации</b>. Она работает под всеми ОС и не требует настройки.</p>
                            <h4 className="term-title">Для Linux</h4>
                            <p>Сначала вам нужно установить certutil.</p>
                            <div className='example_images'>
                                <img title='SSL-сертификат для Localhost' src={image2} alt="SSL-сертификат для Localhost" />
                            </div>
                            <p>Тогда сделайте это:</p>
                            <div className='example_images'>
                                <img title='SSL-сертификат для Localhost' src={image3} alt="SSL-сертификат для Localhost" />
                            </div>
                            <p>или скомпилировать из исходного текста:</p>
                            <div className='example_images'>
                                <img title='SSL-сертификат для Localhost' src={image4} alt="SSL-сертификат для Localhost" />
                            </div>
                            <h4 className="term-title">Для MacOS</h4>
                            <p>Выполните следующую команду:</p>
                            <div className='example_images'>
                                <img title='SSL-сертификат для Localhost' src={image5} alt="SSL-сертификат для Localhost" />
                            </div>
                            <h4 className="term-title">Для Windows</h4>
                            <p>Вы можете загрузить <a href="https://github.com/FiloSottile/mkcert/releases">собранные двоичные</a> файлы или воспользоваться одним из менеджеров пакетов: Chocolatey или Scoop.</p>
                            <div className='example_images'>
                                <img title='SSL-сертификат для Localhost' src={image6} alt="SSL-сертификат для Localhost" />
                            </div>
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