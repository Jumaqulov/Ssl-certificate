import React, { useEffect } from 'react'
import WikiCategories from '../WikiCategories'


export default function Problems_Issues() {
    useEffect(() => {
        document.title = 'gogetssl.uz - Wiki - Problems & Issues'
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
                <span className='current'>Проблемы и вопросы</span>
            </div>
            <div className="wiki-main">
                <h3>Вики - Проблемы и вопросы</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <svg className='cert-txt-svg' viewBox="0 0 32 26">
                            <path
                                d="M18.3145 24.72v-3.375c0-.188-.063-.313-.188-.438s-.25-.188-.438-.188h-3.375c-.188 0-.313.063-.438.188s-.188.25-.188.438v3.375c0 .188.063.313.188.438.125.063.25.125.438.125h3.375c.188 0 .313-.063.438-.125a.568.568 0 0 0 .188-.438zm-.063-6.688l.313-8.188c0-.125-.063-.25-.188-.375s-.25-.188-.438-.188h-3.875c-.188 0-.313.063-.438.188s-.188.25-.188.375l.313 8.188c0 .125.063.188.188.313.063.063.25.125.375.125h3.313c.188 0 .313-.063.438-.125.125-.125.188-.188.188-.313h-.001zm-.252-16.688l13.688 25.125c.438.75.438 1.5 0 2.25-.188.375-.5.625-.813.875-.375.188-.75.25-1.188.25H2.3135c-.438 0-.813-.063-1.188-.25-.313-.25-.625-.5-.813-.875-.438-.75-.438-1.5 0-2.25l13.688-25.125c.188-.375.5-.625.813-.875.375-.188.75-.313 1.188-.313s.813.125 1.188.313c.313.25.625.5.813.875h-.003z">
                            </path>
                        </svg>
                    </span>
                    <span>В данном разделе перечислены наиболее распространенные и популярные проблемы, связанные с SSL-сертификатами. У нас есть рабочие решения для большинства проблем, с которыми вы можете столкнуться при установке или использовании SSL в основных браузерах. Вы узнаете, как восстановить закрытый ключ или почему в браузере нет замка.</span>
                </p>
                <ul className='wiki-guide'>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>1</span>
                        </div>
                        <div>
                            <a href="/wiki/problems/how-to-fix-modulus-missmatch-error">Ошибка "несоответствие модуля"</a>
                            <p>Менеджеры сертификационного центра Sectigo/DigiCert требуют вручную пересмотреть все заказы, если заказ помечен как "ручная проверка". Обычно проверка, выдача или отклонение заказа занимает около 24-48 часов...</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>2</span>
                        </div>
                        <div>
                            <a href="/wiki/problems/err_cert_common_name_invalid">"CERT_COMMON_NAME_INVALID"</a>
                            <p>ERR_CERT_COMMON_NAME_INVALID - очень популярная ошибка SSL при загрузке сайта. В большинстве случаев проблема связана с неправильной конфигурацией сертификата на сервере...</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>3</span>
                        </div>
                        <div>
                            <a href="/wiki/problems/err_ssl_version_or_cipher_mismatch">"SSL_VERSION_OR_CIPHER_MISMATCH"</a>
                            <p>Вы находитесь в правильном месте, чтобы найти решение, получающее ошибку ERR_SSL_VERSION_OR_CIPHER_MISMATCH. Вы не одиноки - тысячи веб-мастеров и посетителей сайтов ежедневно сталкиваются с этой распространенной проблемой.</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>4</span>
                        </div>
                        <div>
                            <a href="/wiki/problems/err_ssl_protocol_error">"SSL_PROTOCOL_ERROR"</a>
                            <p>Google Chrome - один из самых популярных и надежных браузеров для большинства пользователей Интернета, однако иногда во время интернет-серфинга вы можете увидеть ошибку SSL "Этот сайт не может обеспечить безопасное соединение - ERR_SSL_PROTOCOL_ERROR"...</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>5</span>
                        </div>
                        <div>
                            <a href="/wiki/problems/err_ssl_pinned_key_not_in_cert_chain">"SSL_PINNED_KEY_NOT_IN_CERT_CHAIN"</a>
                            <p>Использование "Public Key Pinning" может вызвать трудности, и ваш сайт может перестать открываться в браузере Chrome. Обычно это происходит после обновления SSL-сертификата. В этом случае время, выбранное администратором, может превышать срок действия сертификата или его обновления...</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>6</span>
                        </div>
                        <div>
                            <a href="/wiki/problems/ssl_error_rx_record_too_long">"SSL_ERROR_RX_RECORD_TOO_LONG"</a>
                            <p>Наиболее распространенная проблема в браузере Mozilla Firefox возникает в результате неправильной настройки сертификата на сервере хостинга. Порт, к которому пытается подключиться клиент, открыт на сервере, однако на стороне сервера для этого порта не найден правильно сконфигурированный SSL-сертификат...</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>7</span>
                        </div>
                        <div>
                            <a href="/wiki/problems/err_certificate_transparency_required">"ERR_CERTIFICATE_TRANSPARENCY_REQUIRED"</a>
                            <p>Наиболее распространенной проблемой при получении ошибки ERR_CERTIFICATE_TRANSPARENCY_REQUIRED в браузере Chrome является проблема с журналами CT, поскольку SSL поврежден, неправильно настроен или истек срок действия. Прозрачность сертификата (CT) требует, чтобы каждый сертификат должным образом регистрировался...</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>8</span>
                        </div>
                        <div>
                            <a href="/wiki/problems/err_cert_date_invalid">"ERR_CERT_DATE_INVALID"</a>
                            <p>Сообщение NET::ERR_CERT_DATE_INVALID указывает на то, что Chrome "считает" запрашиваемый сайт небезопасным. Он "сомневается" в надежности SSL-сертификата ресурса...</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>9</span>
                        </div>
                        <div>
                            <a href="/wiki/problems/sec_error_expired_certificate">"SEC_ERROR_EXPIRED_CERTIFICATE"</a>
                            <p>Наиболее распространенная проблема получения ошибки "SEC_ERROR_EXPIRED_CERTIFICATE" означает, что владелец сайта забыл обновить SSL-сертификат, что является очень плохой практикой. Однако даже такие крупные проекты, как LinkedIn или Instagram, пропускают процесс продления...</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>10</span>
                        </div>
                        <div>
                            <a href="/wiki/problems/sec_error_unknown_issuer">"SEC_ERROR_UNKNOWN_ISSUER"</a>
                            <p>На сайтах, которые должны быть защищены (адрес начинается с "https: //"), Firefox должен убедиться в том, что сертификат, предоставленный сайтом, действителен. Если сертификат не может быть проверен, Firefox прекратит подключение к сайту и отобразит вместо него страницу с ошибкой "Предупреждение: Потенциальный риск безопасности"...</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>11</span>
                        </div>
                        <div>
                            <a href="/wiki/problems/windows-does-not-have-enough-information-to-verify-certificate">Ошибка "Windows не располагает достаточной информацией для проверки этого сертификата".</a>
                            <p>Необычная ошибка, возникающая в Windows, появляется, когда промежуточные сертификаты не установлены...</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>12</span>
                        </div>
                        <div>
                            <a href="/wiki/problems/lost-private-key">Потерянный личный ключ</a>
                            <p>Потеря закрытого ключа - самая распространенная проблема, с которой сталкиваются веб-мастера при установке SSL-сертификата. Эта статья поможет вам решить эту проблему и поможет понять возможные сценарии восстановления ключа или регенерации и повторного выпуска SSL...</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>13</span>
                        </div>
                        <div>
                            <a href="/wiki/problems/common-name-missmatch-error">Ошибка несоответствия общего имени</a>
                            <p>Ошибка несоответствия общего имени возникает, когда общее имя или значение SAN в вашем многодоменном SSL-сертификате не соответствует домену. Вы можете увидеть разные сообщения об ошибке, это зависит от используемого браузера...</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>14</span>
                        </div>
                        <div>
                            <a href="/wiki/problems/why-no-padlock">Почему нет замка</a>
                            <p>Очень распространенная проблема, связанная с SSL, заключается в том, что клиенты и владельцы сайтов не видят зеленого/серого замка в адресной строке. Это может происходить во всех браузерах, включая Chrome, Firefox, MS Edge, Safari и другие...</p>
                        </div>
                    </li>
                </ul>
            </div>
            <WikiCategories />
        </>
    )
}