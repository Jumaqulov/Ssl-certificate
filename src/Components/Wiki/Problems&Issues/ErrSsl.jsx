import React, { useEffect } from 'react'
import { CiWarning } from 'react-icons/ci'
import example1 from '../../../assets/Images/Wiki-Img/err_ssl_version_or_cipher_mismatch.png'
import example2 from '../../../assets/Images/Wiki-Img/err_ssl_version_or_cipher_mismatch2.png'
import example3 from '../../../assets/Images/Wiki-Img/err_ssl_version_or_cipher_mismatch5.png'
import example4 from '../../../assets/Images/Wiki-Img/err_ssl_version_or_cipher_mismatch3.png'
import example5 from '../../../assets/Images/Wiki-Img/err_ssl_version_or_cipher_mismatch4.png'

export default function ErrSsl() {
    useEffect(()=>{
        document.title = 'Как исправить ошибку ERR_SSL_VERSION_OR_CIPHER_MISMATCH'
    },[])
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
                <span className='current'>Как исправить ошибку ERR_SSL_VERSION_OR_CIPHER_MISMATCH</span>
            </div>
            <div className="wiki-main">
                <h3>Как исправить ошибку ERR_SSL_VERSION_OR_CIPHER_MISMATCH</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <CiWarning className='cert-txt-svg' />
                    </span>
                    <span>Вы находитесь в правильном месте, чтобы найти решение, получающее ошибку ERR_SSL_VERSION_OR_CIPHER_MISMATCH. Вы не одиноки - тысячи веб-мастеров и посетителей сайтов ежедневно сталкиваются с этой распространенной проблемой. Существует множество вариаций этой ошибки, например "Ошибка 113 (net::err_ssl_version_or_cipher_mismatch): неизвестная ошибка ИЛИ "Клиент и сервер не поддерживают общую версию протокола SSL или набор шифров.</span>
                </p>
                <p>Даже опытные веб-мастера могут получить эту ошибку, если никогда не сталкивались с ней раньше. В основном причиной ошибки является обесценивание шифра RC4. Браузер Chrome пытается предотвратить опасность для посетителей и пользователей из-за небезопасного шифра RC4.</p>
                <div className='example_images text-center'>
                    <img src={example1} alt="Как исправить ошибку ERR_SSL_VERSION_OR_CIPHER_MISMATCH , How to FIX ERR_SSL_VERSION_OR_CIPHER_MISMATCH" />
                </div>
                <p>Наши эксперты по безопасности подготовили несколько рабочих решений для устранения ошибки ERR_SSL_VERSION_OR_CIPHER_MISMATCH. Мы надеемся, что вы найдете подходящий для себя вариант.</p>
                <ul className="wiki-guide">
                    <li>
                        <div className='wiki-guide-num'>
                            <span>1</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Шаг 1: Проверьте сертификат SSL/TLS</h4>
                            <p>Мы настоятельно рекомендуем начать проверку вашего сертификата SSL/TLS с помощью самого профессионального инструмента <a href="https://www.ssllabs.com/ssltest/">тестирования SSL</a> от SSL Labs. Вы получите множество сообщений об ошибках, если ваш сертификат сломан или устарел. Есть возможность скрыть результаты от общественности, установив флажок "Не показывать результаты на форумах". Проверка вашего веб-сервера займет около двух минут. Для начала введите имя вашего домена в поле "Имя хоста" и нажмите "Отправить".</p>
                            <div className='example_images text-center'>
                                <img src={example2} alt="Как исправить ошибку ERR_SSL_VERSION_OR_CIPHER_MISMATCH , How to FIX ERR_SSL_VERSION_OR_CIPHER_MISMATCH" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>2</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Шаг 2: Проверка несоответствия имени сертификата</h4>
                            <p>Процесс проверки начинается с несоответствия имени сертификата как одной из наиболее распространенных причин возникновения проблемы. SSL Test покажет вам возможные причины, помогая диагностировать источник ошибки.</p>
                            <p>Сайт может использовать CDN (сеть доставки контента) без поддержки SSL;</p>
                            <p>Ваш сайт больше не существует, но IP-адрес указывает на старый/новый сайт с другим доменным именем и используемым SSL;</p>
                            <p>Установленный SSL не покрывает проверяемое доменное имя;</p>
                            <div className='example_images text-center'>
                                <img src={example3} alt="Как исправить ошибку ERR_SSL_VERSION_OR_CIPHER_MISMATCH , How to FIX ERR_SSL_VERSION_OR_CIPHER_MISMATCH" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>3</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Шаг 3: Старая используемая версия TLS</h4>
                            <p>Старая версия TLS, установленная на вашем хостинг-сервере, является возможной причиной возникновения проблем. Мы рекомендуем использовать как минимум версию TLS 1.2 или даже TLS 1.3. Опять же, программа проверки SSL Lab легко определит, какие версии используются на сервере. Следите за тем, чтобы сервер всегда был в актуальном состоянии.</p>
                            <div className='example_images text-center'>
                                <img src={example4} alt="Как исправить ошибку ERR_SSL_VERSION_OR_CIPHER_MISMATCH , How to FIX ERR_SSL_VERSION_OR_CIPHER_MISMATCH" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>4</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Проверка набора шифров RC4</h4>
                            <p>В документации Google говорится, что ошибка ERR_SSL_VERSION_OR_CIPHER_MISMATCH появляется после того, как Chrome удаляет набор шифров RC4, начиная с версии 48. Инженеры по безопасности Microsoft и Google настоятельно рекомендуют отключить RC4 для обеспечения наилучшей безопасности. С помощью SSL-теста вы можете узнать все шифры и версии, используемые на вашем сервере.</p>
                            <div className='example_images text-center'>
                                <img src={example5} alt="Как исправить ошибку ERR_SSL_VERSION_OR_CIPHER_MISMATCH , How to FIX ERR_SSL_VERSION_OR_CIPHER_MISMATCH" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span className='ssl-validation-txt'>✔</span>
                        </div>
                        <div>
                            <h4 className='term-title ssl-validation-txt'>Выводы для подведения итогов</h4>
                            <p>Если вы столкнулись с проблемой ERR_SSL_VERSION_OR_CIPHER_MISMATCH во время работы в Интернете, вы можете сделать несколько вещей. В большинстве случаев использования SSL Labs будет достаточно, чтобы выяснить, что не так с конфигурацией вашего сервера для быстрого обновления.</p>
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