import React, { useEffect } from 'react'
import { GiGearHammer } from 'react-icons/gi'
import image from '../../../assets/Images/Wiki-Img/http_https_1.png'
import image2 from '../../../assets/Images/Wiki-Img/http_https_2.png'
import image3 from '../../../assets/Images/Wiki-Img/http_https_3.png'
import image4 from '../../../assets/Images/Wiki-Img/http_https_4.png'
import image5 from '../../../assets/Images/Wiki-Img/http_https_5.png'
import image6 from '../../../assets/Images/Wiki-Img/http_https_6.png'
import image7 from '../../../assets/Images/Wiki-Img/http_https_7.png'


export default function HttpToHttps() {
    useEffect(() => {
        document.title = 'Как перенаправить HTTP на HTTPS в Nginx и Apache?'
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
                <a href='/wiki/installation'>Руководства по установке</a>
                <span className='next'>
                    <svg viewBox='0 0 19 32'>
                        <path
                            d="M5.66962.995l12.304 12.89c.642.643.964 1.287.961 2.144s-.326 1.501-.97 2.144l-12.353 12.839c-.539.643-1.288.856-2.254.854-.858-.001-1.609-.218-2.25-.863-1.392-1.397-1.39-2.79.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9.009-4.289.645-.641 1.396-.854 2.253-.852.966 0 1.716.218 2.25.86v.001z">
                        </path>
                    </svg>
                </span>
                <span className='current'>Как перенаправить HTTP на HTTPS в Nginx и Apache?</span>
            </div>
            <div className="wiki-main">
                <h3>Руководства по установке DigiCert и Sectigo SSL</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <GiGearHammer className='cert-txt-svg' />
                    </span>
                    <span>Для того чтобы изменить URL страницы, отображаемой в результатах поиска, Google рекомендует использовать 301 Redirect. Это лучший способ убедиться, что поисковые системы и пользователи будут направлены на нужную страницу, а также защитить себя от потери трафика из поисковых систем.</span>
                </p>
                <ul className="wiki-guide">
                    <li>
                        <div className='wiki-guide-num'>
                            <span>1</span>
                        </div>
                        <div>
                            <h4 className="term-title">В каких случаях стоит использовать 301 редирект?</h4>
                            <p>При наличии нескольких одинаковых версий на разных поддоменах или в разных папках, например http://domain.site.tld или http://site.tld или httpS://domain.site.tld, перенаправить посетителя на основную версию сайта.</p>
                            <p>В связи с ребрендингом (или по другим причинам), когда вы хотите, чтобы пользователи не заметили разницы при нажатии на один и тот же URL. При склеивании (объединении) двух сайтов, чтобы ссылки со всех страниц первого перенаправляли на новый.</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>2</span>
                        </div>
                        <div>
                            <h4 className="term-title">Как настроить 301 перенаправление с HTTP на HTTPS в Apache</h4>
                            <p>Обычно при использовании SSL-сертификата используется как минимум два виртуальных хоста. Обычные запросы сервера должны обслуживаться через порт 80, а SSL-запросы - через порт 443. Используйте обычную директиву redirect, если вы хотите перенаправить пользователей с не SSL-сайта на SSL-сайт. Чтобы включить перенаправление с помощью Apache, необходимо включить mod_rewrite:</p>
                            <div className='example_images'>
                                <img src={image} alt="http to https" />
                            </div>
                            <p>Чтобы изменения вступили в силу, перезагрузите веб-сервер Apache:</p>
                            <div className='example_images'>
                                <img src={image2} alt="http to https" />
                            </div>
                            <p>В .htaccess для перенаправления с HTTP на HTTPS добавьте:</p>
                            <div className='example_images'>
                                <img src={image3} alt="http to https" />
                            </div>
                            <p>Сохраните и закройте файл, а затем перезапустите HTTP-сервер с помощью следующей команды:</p>
                            <div className='example_images'>
                                <img src={image4} alt="http to https" />
                            </div>
                            <h4 className="term-title">Перенаправление одной страницы, а не всего сайта</h4>
                            <div className='example_images'>
                                <img src={image5} alt="http to https" />
                            </div>
                            <h4 className="term-title">Подсказки о перенаправлениях .htaaccess</h4>
                            <p>Не дублировать RewriteEngine On;</p>
                            <p>RewriteCond и RewriteRule должны следовать непосредственно за RewriteEngin на</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>3</span>
                        </div>
                        <div>
                            <h4 className="term-title">Перенаправление NGNIX с HTTP на HTTPS</h4>
                            <p>Воспользуйтесь этим руководством, чтобы перенаправить всех своих посетителей на HTTPS с использованием префикса домена WWW. Этот метод использует технику 301 редиректа и безопасен для SEO в соответствии с лучшими практиками Google. Вам нужно будет отредактировать файл конфигурации виртуального хоста Nginx, чтобы принудительно перенаправить всех пользователей на HTTPS://www.domain.tld, используя описанный ниже пример.</p>
                            <div className='example_images'>
                                <img src={image6} alt="http to https" />
                            </div>
                            <p>Перезапустите веб-сервер Nginx, чтобы изменения вступили в силу, используя команду:</p>
                            <div className='example_images'>
                                <img src={image7} alt="http to https" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span className='ssl-validation-txt'>✔</span>
                        </div>
                        <div>
                            <h4 className='term-title ssl-validation-txt'>Заключение</h4>
                            <p>Сегодня обязательно использование протокола HTTPS для защиты всего трафика между посетителями вашего сайта и сервером. Мы предлагаем веб-сервер Nginx как самый мощный и простой способ настроить ваш сайт с постоянными 301 редиректами.</p>
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