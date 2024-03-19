import React from 'react'
import { CiWarning } from 'react-icons/ci'
import example1 from '../../../assets/Images/Wiki-Img/err_ssl_pinned_key_not_in_cert_chain.png'
import example2 from '../../../assets/Images/Wiki-Img/err_ssl_pinned_key_not_in_cert_chain2.png'

export default function ErrPinnedKey() {
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
                <span className='current'>Как исправить ошибку ERR_SSL_PINNED_KEY_NOT_IN_CERT_CHAIN</span>
            </div>
            <div className="wiki-main">
                <h3>Как исправить ошибку ERR_SSL_PINNED_KEY_NOT_IN_CERT_CHAIN</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <CiWarning className='cert-txt-svg' />
                    </span>
                    <span>Использование "Public Key Pinning" может вызвать трудности, и ваш сайт может перестать открываться в браузере Chrome. Обычно это происходит после обновления SSL-сертификата. В этом случае время, выбранное администратором, может превышать срок действия сертификата или его обновления.</span>
                </p>
                <p>В результате посетитель сайта получит ошибку NET::ERR_SSL_PINNED_KEY_NOT_IN_CERT_CHAIN, как на скриншоте ниже.</p>
                <div className='example_images text-center'>
                    <img src={example1} alt="Как исправить ошибку ERR_SSL_PINNED_KEY_NOT_IN_CERT_CHAIN , How to FIX ERR_SSL_PINNED_KEY_NOT_IN_CERT_CHAIN" />
                </div>
                <p>HSTS - это HTTPS Strict Transport Security. Эта настройка заставляет браузер всегда использовать HTTPS для определенного сайта. Это делается с помощью специальных инструкций от веб-сервера, обслуживающего сайт. В качестве дополнительного уровня безопасности можно использовать HPKP - HTTP Public Key Pinning. Эта настройка позволяет веб-мастеру указать, какой открытый ключ, связанный с SSL-сертификатом, является хорошим. Браузер посетителя сохранит эти параметры на время, указанное в настройках веб-сервера.</p>
                <p>Иногда что-то идет не так, веб-мастера допускают ошибки при настройке серверов, в результате чего сайт становится недоступным. В этом случае вы можете вручную удалить связанные с ним ключи в настройках браузера. Это не сработает, если ключи загружены в браузер заранее (например, Facebook). В этом случае может помочь обновление браузера.</p>
                <ul className="wiki-guide">
                    <li>
                        <div className='wiki-guide-num'>
                            <span>1</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Решение: Удаление фиксированного ключа HSTS</h4>
                            <p>К счастью, возможные проблемы можно решить довольно просто - достаточно удалить ключ из базы данных HSTS браузера Google Chrome.</p>
                            <p>1. Вставьте этот текст chrome://net-internals/#hsts в адресную строку вашего браузера;</p>
                            <p>2. Укажите имя проблемного домена в поле "Удалить политики безопасности домена" и нажмите кнопку "Удалить";</p>
                            <p>3. Повторите попытку посещения сайта.</p>
                            <div className='example_images text-center'>
                                <img src={example2} alt="Как исправить ошибку ERR_SSL_PINNED_KEY_NOT_IN_CERT_CHAIN , How to FIX ERR_SSL_PINNED_KEY_NOT_IN_CERT_CHAIN" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span className='ssl-validation-txt'>✔</span>
                        </div>
                        <div>
                            <h4 className='term-title ssl-validation-txt'>Заключение</h4>
                            <p><b>Веб-мастера:</b> Пожалуйста, перестаньте прикреплять свои ключи!</p>
                            <p><b>Посетители:</b> Используйте функцию Chrome для удаления ключа HSTS</p>
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