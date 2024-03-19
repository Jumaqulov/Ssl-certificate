import React from 'react'
import { CiWarning } from 'react-icons/ci'
import example1 from '../../../assets/Images/Wiki-Img/no_green_padlock.png'
import example2 from '../../../assets/Images/Wiki-Img/err_ssl_version_or_cipher_mismatch2.png'
import example3 from '../../../assets/Images/Wiki-Img/no_green_padlock2.png'
import example4 from '../../../assets/Images/Wiki-Img/no_green_padlock3.png'

export default function NoPadlock() {
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
                <span className='current'>Почему нет замка</span>
            </div>
            <div className="wiki-main">
                <h3>Почему нет замка</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <CiWarning className='cert-txt-svg' />
                    </span>
                    <span>Очень распространенная проблема, связанная с SSL, - отсутствие зеленого/серого замка в адресной строке у клиентов и владельцев сайтов. Это может происходить во всех браузерах, включая Chrome, Firefox, MS Edge, Safari и другие. Причин может быть множество, однако у нас есть надежный сценарий, как обнаружить проблему и устранить ее.</span>
                </p>
                <div className='example_images text-center'>
                    <img src={example1} alt="Как исправить ошибку ERR_CERT_DATE_INVALID , How to FIX ERR_CERT_DATE_INVALID" />
                </div>
                <ul className="wiki-guide">
                    <li>
                        <div className='wiki-guide-num'>
                            <span>1</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Лаборатории Qualys SSL</h4>
                            <p>Мы настоятельно рекомендуем начать проверку вашего сертификата SSL/TLS с помощью самого профессионального инструмента тестирования SSL от <a href="https://www.ssllabs.com/ssltest/">SSL Labs</a>. Вы получите множество сообщений об ошибках, если ваш сертификат сломан или устарел. Есть возможность скрыть результаты от общественности, установив флажок "Не показывать результаты на досках". Проверка вашего веб-сервера займет около двух минут. Для начала введите имя вашего домена в поле "Имя хоста" и нажмите "Отправить".</p>
                            <div className='example_images text-center'>
                                <img src={example2} alt="Как исправить ошибку ERR_CERT_DATE_INVALID , How to FIX ERR_CERT_DATE_INVALID" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>2</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Проверка на наличие небезопасного содержимого</h4>
                            <p>В большинстве случаев причина в том, что на вашем сайте или странице есть сторонние небезопасные ссылки и контент. Это могут быть изображения, стили CSS или скрипты, внедренные со сторонних сайтов без установленного SSL-сертификата.</p>
                            <p>1. Нажмите "F12" в браузере Chrome;</p>
                            <p>2. Найдите вкладку "Безопасность";</p>
                            <p>3. Проверьте, есть ли у вас какие-либо проблемы.</p>
                            <p>На скриншоте ниже видно, что соединение защищено и сертификат SSL действителен. Однако в "ресурсах" отображается "смешанное содержимое", что подтверждает наличие небезопасного содержимого на вашем сайте.</p>
                            <div className='example_images text-center'>
                                <img src={example3} alt="Как исправить ошибку ERR_CERT_DATE_INVALID , How to FIX ERR_CERT_DATE_INVALID" />
                            </div>
                            <p>Еще один скриншот, показывающий, как выглядит небезопасное содержимое в HTML-коде. Вам нужно найти все подобные строки в коде вашего сайта и изменить их с HTTP:// на HTTPS://, это должно устранить проблему.</p>
                            <div className='example_images text-center'>
                                <img src={example4} alt="Как исправить ошибку ERR_CERT_DATE_INVALID , How to FIX ERR_CERT_DATE_INVALID" />
                            </div>  
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span className='ssl-validation-txt'>✔</span>
                        </div>
                        <div>
                            <h4 className='term-title ssl-validation-txt'>Заключение</h4>
                            <p>Известная проблема, и существует множество решений для ее устранения.</p>
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