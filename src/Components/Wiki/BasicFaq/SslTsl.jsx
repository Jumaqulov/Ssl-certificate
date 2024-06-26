import React, { useEffect } from 'react'
import { FaQuestionCircle } from "react-icons/fa";
import image from '../../../assets/Images/Wiki-Img/whatisssl.png'

export default function SslTsl() {
    useEffect(() => {
        document.title = 'Что такое сертификат SSL/TLS'
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
                <a href='/wiki/ssl-basics'>Основы SSL / FAQ</a>
                <span className='next'>
                    <svg viewBox='0 0 19 32'>
                        <path
                            d="M5.66962.995l12.304 12.89c.642.643.964 1.287.961 2.144s-.326 1.501-.97 2.144l-12.353 12.839c-.539.643-1.288.856-2.254.854-.858-.001-1.609-.218-2.25-.863-1.392-1.397-1.39-2.79.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9.009-4.289.645-.641 1.396-.854 2.253-.852.966 0 1.716.218 2.25.86v.001z">
                        </path>
                    </svg>
                </span>
                <span className='current'>Что такое сертификат SSL/TLS</span>
            </div>
            <div className="wiki-main">
                <h3>Что такое сертификат SSL/TLS</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <FaQuestionCircle className='cert-txt-svg' />
                    </span>
                    <span>Информационная безопасность в Сети - один из главных вопросов, которому владельцы сайтов должны уделять пристальное внимание. В мире стремительно растущих киберугроз они должны четко понимать, как предотвратить утечку данных или защитить свой ресурс от доступа к нему третьих лиц.</span>
                </p>
                <p>Установка SSL-сертификатов стала современным стандартом безопасности сайтов. Однако такой механизм защиты является относительно новым и сложным для массового пользователя. Давайте разберемся, что представляет собой эта технология и как она обеспечивает безопасность информации на веб-ресурсах.</p>
                <h4 className='term-title text-center'>Что такое сертификат SSL?</h4>
                <p>Прежде чем перейти к вопросу о том, зачем сайту нужен SSL-сертификат, стоит остановиться на концепции самого SSL-протокола. Это криптографический протокол, обеспечивающий надежную передачу данных по сети. Он является гарантией безопасного соединения между браузером пользователя и ресурсом.</p>
                <h4 className='term-title text-center'>HTTP против HTTPS</h4>
                <p>HTTPS значительно повысил безопасность данных, передаваемых по протоколу HTTP. Если на сайте установлен SSL, то все данные передаются по HTTPS - защищенной версии протокола HTTP. Он шифрует данные пользователя и пересылает их владельцу сайта по транспортному протоколу TCP. Другими словами, вся информация, передаваемая пользователем, скрывается с помощью шифрования от третьих лиц: операторов, администраторов Wi-Fi и провайдеров.</p>
                <div className='example_images text-center'>
                    <img title='Что такое SSL-сертификат' src={image} alt="Что такое SSL-сертификат" />
                </div>
                <ul className='wiki-guide'>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>1</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Как работает протокол SSL</h4>
                            <p>Как известно, в основе всех методов шифрования лежит ключ, который помогает зашифровать или прочитать информацию. Протокол SSL использует асимметричный шифр с двумя видами ключей:</p>
                            <p><b>Публичный</b>. Это фактически сертификат SSL. Он шифрует данные и используется при передаче информации о пользователе на сервер. Например, посетитель вводит на сайте номер своей банковской карты и нажимает кнопку "Оплатить".</p>
                            <p><b>Private</b>. Необходим для декодирования сообщения на сервере. Он не передается вместе с информацией, как в случае с открытым ключом, и всегда остается на сервере.</p>
                            <p>Чтобы сайт мог работать с такими соединениями, его владельцу необходим SSL-сертификат. Это своего рода цифровая подпись, которая индивидуальна для каждой платформы.</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>2</span>
                        </div>
                        <div>
                            <h4 className="term-title">Что находится внутри SSL-сертификата</h4>
                            <p>Сертификат SSL может содержать следующую важную информацию:</p>
                            <p>домен сайта, на котором установлен сертификат;</p>
                            <p>имя владельца компании;</p>
                            <p>страна, город регистрации компании;</p>
                            <p>Срок действия сертификата SSL;</p>
                            <p>Информация о центре сертификации;</p>
                            <p>Серийный номер SSL;</p>
                            <p>Элементы SAN (многодоменный SSL);</p>
                            <p>Доверенные и недоверенные сертификаты.</p>
                            <p>Основным источником SSL-сертификатов являются доверенные центры сертификации или центры сертификации (CA). Это организации, имеющие неоспоримый авторитет на рынке ИТ-услуг и использующие известный открытый криптографический ключ. В браузерах их список обычно можно найти в разделе "Доверенные корневые центры сертификации".</p>
                            <p>Цифровая подпись, заверенная сертификатом такого центра, является доказательством подлинности компании-владельца доменного имени и определяет право владельца на законное использование секретного ключа. Такая подпись называется доверенной.</p>
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