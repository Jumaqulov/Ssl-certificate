import React from 'react'
import { CiWarning } from 'react-icons/ci'
import example1 from '../../../assets/Images/Wiki-Img/err_ssl_protocol_error.png'
import example2 from '../../../assets/Images/Wiki-Img/err_ssl_protocol_error2.png'
import example3 from '../../../assets/Images/Wiki-Img/ssl_error_err_cert_common_name_invalid2.png'
import example4 from '../../../assets/Images/Wiki-Img/err_ssl_protocol_error3.png'
import example5 from '../../../assets/Images/Wiki-Img/err_ssl_protocol_error4.png'

export default function ErrProtocol() {
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
                <span className='current'>Как исправить ошибку ERR_SSL_PROTOCOL_ERROR</span>
            </div>
            <div className="wiki-main">
                <h3>Как исправить ошибку ERR_SSL_PROTOCOL_ERROR</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <CiWarning className='cert-txt-svg' />
                    </span>
                    <span>Google Chrome - один из самых популярных и надежных браузеров для большинства пользователей Интернета, однако иногда во время работы в сети вы можете увидеть ошибку SSL "Этот сайт не может обеспечить безопасное соединение - ERR_SSL_PROTOCOL_ERROR". Обновление страницы (кнопка F5) может решить проблему, но в некоторых случаях для ее устранения необходимо выполнить дополнительные действия.</span>
                </p>
                <div className='example_images text-center'>
                    <img src={example1} alt="Как исправить ошибку ERR_SSL_PROTOCOL_ERROR , How to FIX ERR_SSL_PROTOCOL_ERROR" />
                </div>
                <ul className="wiki-guide">
                    <li>
                        <div className='wiki-guide-num'>
                            <span>1</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Решение 1: Проверьте правильность даты и времени</h4>
                            <p>Браузер Chrome может показывать ошибку ERR_SSL_PROTOCOL_ERROR, если на вашем компьютере или мобильном устройстве неправильно указаны дата и время. Пожалуйста, перепроверьте и настройте их в настройках вашего компьютера.</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>2</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Решение 2: Очистить данные браузера</h4>
                            <p>Проблемная ошибка SSL может появляться снова и снова из-за зацикленной даты браузера, и вам придется очистить ее, чтобы устранить проблему.</p>
                            <p>1. Откройте браузер Chrome;</p>
                            <p>2. Нажмите комбинацию из трех кнопок "CTRL + SHIFT + DELETE";</p>
                            <p>3. Убедитесь, что установлен диапазон "Все время";</p>
                            <p>4. Установите "Cookies и другие данные сайта";</p>
                            <p>5. Установите параметр "Кэшированные изображения и файлы";</p>
                            <p>6. Нажмите кнопку "Очистить данные";</p>
                            <p>7. Попробуйте открыть проблемные сайты после завершения процесса очистки.</p>
                            <div className='example_images text-center'>
                                <img src={example2} alt="Как исправить ошибку ERR_SSL_PROTOCOL_ERROR , How to FIX ERR_SSL_PROTOCOL_ERROR" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>3</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Решение 3: Очистите кэш SSL</h4>
                            <p>Проблема может заключаться в кэше SSL браузера. Чтобы устранить ошибку, попробуйте очистить кэш.</p>
                            <p>Для IE/Edge. Нужно открыть свойства Интернета и найти вкладку "Содержание", там будет кнопка "Очистить состояние SSL".</p>
                            <p>Для браузера Chrome процесс аналогичен: нажмите кнопку "Три точки" в правом верхнем углу браузера, найдите пункт "Настройки". Внизу страницы вы найдете "Дополнительные настройки". Теперь найдите "Открыть настройки прокси", а там - вкладку "Содержание" с пунктом "Очистить состояние SSL".</p>
                            <div className='example_images text-center'>
                                <img src={example3} alt="Как исправить ошибку ERR_SSL_PROTOCOL_ERROR , How to FIX ERR_SSL_PROTOCOL_ERROR" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>4</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Решение 4: Отключите протокол QUIC в Chrome</h4>
                            <p>Не повезло, если вы все еще читаете это руководство. Попробуем изменить настройки браузера Chrome, отключив протокол QUIC.</p>
                            <p>1. перейдите в адресную строку браузера, введите/вставьте chrome://flags/#enable-quic и нажмите Enter;</p>
                            <p>2. Вы увидите состояние "По умолчанию" для параметра Under the Experimental QUIC Protocol. Измените его на "Отключено";</p>
                            <p>3. Перезапустите браузер и повторите попытку посещения сайта.</p>
                            <div className='example_images text-center'>
                                <img src={example4} alt="Как исправить ошибку ERR_SSL_PROTOCOL_ERROR , How to FIX ERR_SSL_PROTOCOL_ERROR" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>5</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Решение 5: Проверка брандмауэра/антивируса</h4>
                            <p>Мы рекомендуем проверить настройки брандмауэра и антивируса, а также LOG-файлы, чтобы убедиться, что они не блокируют сайт, который вы пытаетесь посетить. Внимательно изучите причину блокировки, если вы обнаружили блокировку, так как, возможно, они пытаются защитить вас от вредоносного сайта. Мы не рекомендуем отключать антивирус.</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>6</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Шаг 6: Обзор уровня конфиденциальности и безопасности Интернета</h4>
                            <p>Последняя идея - настройка уровня безопасности и конфиденциальности в Интернете. Попробуйте снизить уровень, чтобы не блокировать доступ к определенным сайтам. Вот шаги, которые необходимо выполнить:</p>
                            <p>1. Откройте Панель управления и найдите "Параметры Интернета" ИЛИ нажмите на логотип Пуск/Windows слева внизу и введите в поиске "Параметры Интернета";</p>
                            <p>2. Появится новое окно, в котором нужно перейти на вкладку "Безопасность";</p>
                            <p>3. Теперь попробуйте опустить ползунок до "Среднего уровня", если он имеет более высокую шкалу. Теперь перезапустите браузер и попробуйте снова открыть свой сайт.</p>
                            <div className='example_images text-center'>
                                <img src={example5} alt="Как исправить ошибку ERR_SSL_PROTOCOL_ERROR , How to FIX ERR_SSL_PROTOCOL_ERROR" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span className='ssl-validation-txt'>✔</span>
                        </div>
                        <div>
                            <h4 className='term-title ssl-validation-txt'>Выводы для подведения итогов</h4>
                            <p>По крайней мере, одно из описанных нами решений обязательно поможет вам справиться с ошибкой ERR_SSL_PROTOCOL_ERROR.</p>
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