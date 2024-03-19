import React from 'react'
import { CiWarning } from 'react-icons/ci'
import example1 from '../../../assets/Images/Wiki-Img/ssl_error_rx_record_too_long.png'
import example2 from '../../../assets/Images/Wiki-Img/Screenshot 2024-03-19 104309.png'
import example3 from '../../../assets/Images/Wiki-Img/Screenshot 2024-03-19 104549.png'

export default function ErrErxRecord() {
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
                <span className='current'>Как исправить ошибку SSL_Error_rx_Record_too_long в Firefox</span>
            </div>
            <div className="wiki-main">
                <h3>Как исправить ошибку SSL_Error_rx_Record_too_long в Firefox</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <CiWarning className='cert-txt-svg' />
                    </span>
                    <span>Наиболее распространенная проблема в браузере Mozilla Firefox возникает в результате неправильной настройки сертификата на сервере хостинга. Порт, к которому пытается подключиться клиент, открыт на сервере, однако на стороне сервера не найден правильно настроенный SSL-сертификат для этого порта. Не волнуйтесь, мы подготовили несколько рабочих решений для исправления ошибки <b>SSL_Error_rx_record_too_long</b>.</span>
                </p>
                <div className='example_images text-center'>
                    <img src={example1} alt="Как исправить ошибку SSL_Error_rx_Record_too_long в Firefox , How to FIX SSL_Error_rx_Record_too_long in Firefox" />
                </div>
                <p className='text-center'>Вы можете подтвердить проблему с помощью команды OpenSSL:</p>
                <div className='example_images text-center'>
                    <img src={example2} alt="Как исправить ошибку SSL_Error_rx_Record_too_long в Firefox , How to FIX SSL_Error_rx_Record_too_long in Firefox" />
                </div>
                <p className='text-center'>При подтверждении ошибки вы получите следующее сообщение:</p>
                <div className='example_images text-center'>
                    <img src={example3} alt="Как исправить ошибку SSL_Error_rx_Record_too_long в Firefox , How to FIX SSL_Error_rx_Record_too_long in Firefox" />
                </div>
                <p>Результат показывает, что соединение успешно, однако рукопожатие не удалось, так как для порта не был найден настроенный SSL-сертификат, и соединение было прервано. Мы подготовили несколько решений для устранения проблемы <b>SSL_Error_rx_record_too_long</b>, пожалуйста, следуйте статье.</p>
                <ul className="wiki-guide">
                    <li>
                        <div className='wiki-guide-num'>
                            <span>1</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Решение 1: Попробуйте перезагрузить браузер Firefox</h4>
                            <p>Хорошим решением, позволяющим избежать использования нежелательных программ в браузере, является сброс настроек Firefox на стандартные.</p>
                            <p>1. Введите "about:support" в адресную строку;</p>
                            <p>2. Теперь вы увидите окно устранения неполадок;</p>
                            <p>3. Нажмите на кнопку Refresh Firefox и подтвердите обновление;</p>
                            <p>4. Переходите к следующему решению, если это не помогло.</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>2</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Решение 2: Попытайтесь обновить Firefox</h4>
                            <p>1. Нажмите, чтобы открыть меню &gt; Справка &gt; О программе</p>
                            <p>2. В новом окне будет показано, обновлен ли ваш браузер Firefox или требуется обновление.</p>
                            <p>3. Нажмите "Перезапустить для обновления Firefox", если обновление доступно.</p>
                            <p>4. Перезагрузите проблемный сайт после обновления, чтобы проверить, устранена ли ошибка.</p>
                            <p>5. Перейдите к следующему решению, если проблема осталась прежней.</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>3</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Решение 3: Попробуйте отключить расширения браузера</h4>
                            <p>Существуют сотни расширений, и некоторые из них могут блокировать/влиять на ваше соединение. Попробуйте отключить их, чтобы решить проблему.</p>
                            <p>1. Перейдите в меню Открыть -&gt; Дополнения;</p>
                            <p>2. Рядом с каждым расширением вы увидите кнопку Отключить, которую нужно нажать для всех расширений.</p>
                            <p>3. Перезапустите браузер и повторите попытку открыть веб-сайт.</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>!</span>
                        </div>
                        <div>
                            <h4 className='term-title text-danger'>Избегайте следующих решений!</h4>
                            <p>1. Старайтесь НЕ обходить протокол безопасности, заменяя URL на HTTP:// вместо HTTPS://. Это небезопасное решение, так как с 2018 года все сайты должны использовать защищенное соединение.</p>
                            <p>2. Не отключайте антивирус, это очень плохая идея. Это обязанность вебмастера правильно настроить сайт, а не ваша, чтобы избежать проблем.</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span className='ssl-validation-txt'>✔</span>
                        </div>
                        <div>
                            <h4 className='term-title ssl-validation-txt'>Выводы для подведения итогов</h4>
                            <p>1. <b>Для владельцев сайтов</b>. Проверьте конфигурацию вашего сервера. Проверьте свой SSL-сертификат и сервер с помощью онлайн-тестов <a href="https://www.ssllabs.com/">SSL Labs</a>, так как, возможно, вам нужно использовать правильный и профессиональный <a href="/ssl-certificates">SSL-сертификат</a>.</p>
                            <p>2. <b>Для посетителей сайта</b>. Избегайте использования сайта, если ошибка не устранена даже после перечисленных решений. Пользоваться подобными сайтами небезопасно, лучшее, что вы можете сделать, - это связаться с веб-мастерами / владельцами сайтов и позволить им исправить ошибку.</p>
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