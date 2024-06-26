import React, { useEffect } from 'react'
import { IoMdRefresh } from 'react-icons/io'

export default function ReissueSSL() {
    useEffect(() => {
        document.title = 'Переоформление SSL / Изменение доменного имени'
    })
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
                <a href='/wiki/ssl-reissue-renewal'>Перевыпуск и возобновление SSL</a>
                <span className='next'>
                    <svg viewBox='0 0 19 32'>
                        <path
                            d="M5.66962.995l12.304 12.89c.642.643.964 1.287.961 2.144s-.326 1.501-.97 2.144l-12.353 12.839c-.539.643-1.288.856-2.254.854-.858-.001-1.609-.218-2.25-.863-1.392-1.397-1.39-2.79.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9.009-4.289.645-.641 1.396-.854 2.253-.852.966 0 1.716.218 2.25.86v.001z">
                        </path>
                    </svg>
                </span>
                <span className='current'>Переоформление SSL / Изменение доменного имени</span>
            </div>
            <div className="wiki-main">
                <h3>Переоформление SSL / Изменение доменного имени</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <IoMdRefresh className='cert-txt-svg' />
                    </span>
                    <span>Мы предоставляем неограниченное количество бесплатных переизданий для любого SSL, приобретенного в нашем магазине. Перевыпуск требуется, если вы потеряли закрытый ключ, сменили сервер или по любой другой причине. Перевыпуск SSL-сертификата возможен только со статусом "активный/выпущенный". Невозможно перевыпустить SSL, если он находится в процессе обработки или ожидается другой запрос на перевыпуск.</span>
                </p>
                <div className='wiki-bg-dark'>
                    <h4 className='term-title'>Наиболее распространенные причины для перевыпуска SSL</h4>
                    <ul className='pri-policy-lists'>
                        <li>Вы потеряли закрытый ключ (ключ RSA);</li>
                        <li>Вы переносите сайт на новый веб-сервер;</li>
                        <li>В процессе установки вы получили ошибку "modulus mismatch";</li>
                        <li>Вы решили изменить общее название;</li>
                        <li>Вы добавляете/изменяете элементы SAN для мультидоменных сертификатов;</li>
                        <li>Центру сертификации требуется перевыпустить SSL в связи с существенными изменениями в отрасли или по другим серьезным причинам;</li>
                    </ul>
                </div>
                <div className='wiki-bg-dark'>
                    <h4 className='term-title'>Как перевыпустить SSL</h4>
                    <ul className='pri-policy-lists'>
                        <li>Войдите в клиентскую зону: <a className='wiki-ssl-link' target='_blank' href="https://my.sslcert.com">https://my.sslcert.com</a></li>
                        <li>Перейдите в раздел "SSL-сертификаты" и найдите свой SSL, нажмите кнопку "Подробнее".</li>
                        <li>Нажмите кнопку "Переиздать".</li>
                        <li>Отправьте новый код CSR в форму</li>
                        <li>Выберите метод проверки DCV</li>
                        <li>Следуйте процессу переиздания</li>
                        <li>SSL с проверкой домена будет перевыпущен, как только вы завершите процесс проверки домена. Сертификаты OV/EV требуют короткой перепроверки центром сертификации, которая занимает 12-24 часа</li>
                        <li>Переустановите новые файлы на свой сервер после получения переизданных файлов</li>
                    </ul>
                </div>
                <div className="wiki-bg-dark">
                    <h4 className='term-title'>Изменение элементов SAN</h4>
                    <p>Вы можете обновить элементы SAN для вашего многодоменного SSL-сертификата в процессе перевыпуска. Обратите внимание, что мы игнорируем SAN-элементы, указанные в коде CSR, и используем те, которые указаны в специальных полях формы перевыпуска.</p>
                    <h4 className='term-title'>Изменение общего названия</h4>
                    <ul className='pri-policy-lists'>
                        <li>SSL-сертификаты позволяют изменять общее имя (Domain) в процессе перевыпуска. Все, что вам нужно, - это предоставить новый CSR с новым общим именем во время перевыпуска. Обратите внимание, что предыдущий SSL-сертификат будет немедленно аннулирован.</li>
                    </ul>
                    <h4 className='term-title'>Что нужно помнить!</h4>
                    <ul className='pri-policy-lists'>
                        <li>Если вы используете тот же (оригинальный) CSR-код, SSL будет перевыпущен автоматически без какой-либо процедуры повторной проверки.</li>
                        <li>Предыдущий SSL будет аннулирован мгновенно, если вы укажете новое имя в коде CSR.</li>
                        <li>Вам нужно будет подтвердить элемент NEW SAN только в том случае, если вы повторно выпускаете Multi-Domain SSL, используя оригинальный код CSR.</li>
                    </ul>
                </div>
                <div className="wiki-bg-dark">
                    <h4 className="term-title">Перевыпуск сертификата подписи кодов Sectigo</h4>
                    <ul className='pri-policy-lists'>
                        <li>Войдите на сайт <a className='wiki-ssl-link' target='_blank' href="https://secure.trust-provider.com">https://secure.trust-provider.com</a>, используя учетные данные, использованные при заполнении формы для запроса SSL;</li>
                        <li>Найдите кнопку "Заменить" и нажмите ее.</li>
                        <li>Sectigo начнет оформление переиздания для вас.</li>
                    </ul>
                </div>
                <div className="wiki-bg-dark">
                    <h4 className="term-title">Перевыпуск сертификата подписи кода Thawte/DigiCert</h4>
                    <ul className='pri-policy-lists'>
                        <li>Зайдите на сайт <a className='wiki-ssl-link' target='_blank' href="https://www.digicert.com/secure/">CertCentral</a> и запросите доступ к вашему заказу</li>
                        <li>Замена/перевыпуск SSL с подписью кода с помощью портала конечного пользователя</li>
                    </ul>
                </div>
            </div>
            <div className='wiki-main-link-box'>
                <a className='wiki-main-link' href="/wiki">Вернуться в SSL Wiki</a>
            </div>
        </>
    )
}