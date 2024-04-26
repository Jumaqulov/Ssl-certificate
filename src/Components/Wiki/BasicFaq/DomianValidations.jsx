import React, { useEffect } from 'react'
import { GrNext } from 'react-icons/gr';
import { TbCircleLetterD } from "react-icons/tb";

export default function DomianValidations() {
    useEffect(() => {
        document.title = 'SSL-сертификаты с проверкой домена'
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
                <span className='current'>SSL-сертификаты с проверкой домена</span>
            </div>
            <div className='wiki-main'>
                <h3>SSL-сертификаты с проверкой домена</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <TbCircleLetterD className='cert-txt-svg' />
                    </span>
                    <span>SSL-сертификаты с проверкой домена, или, как их еще называют, сертификаты начального уровня, являются самыми распространенными в мире, и это неудивительно, ведь скорость выпуска таких сертификатов варьируется от 2-10 минут в зависимости от бренда. Для получения такого сертификата не требуется никаких документов, весь процесс предельно прост, необходимо подтвердить право собственности на домен, а для этого существует 3 способа, один основной и два альтернативных.</span>
                </p>
                <p>SSL-сертификаты начального уровня с проверкой домена - один из самых быстро выпускаемых типов сертификатов, так как не требуют никаких документов. Мы рекомендуем такие сертификаты для небольших сайтов и небольших проектов, когда вам не требуется большого доверия со стороны клиентов и посетителей сайта, проекта. С таким сертификатом чаще всего используются статические логотипы безопасности, однако есть и такие, которые предлагают динамические, например: Thawte SSL 123, Sectigo SSL Certificate.</p>
                <ul className='wiki-guide'>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>1</span>
                        </div>
                        <div>
                            <h4 className="term-title">Методы валидации</h4>
                            <p>Здесь представлен краткий обзор доступных методов проверки сертификатов Domain Validation.</p>
                            <p className='file-title'>
                                <span><GrNext /></span>
                                <span>Проверка по электронной почте (DCV Email)</span>
                            </p>
                            <p className='download-file'>Этот способ описан на многих сайтах и блогах, суть его заключается в том, что центр сертификации вышлет вам проверочное письмо, в котором будет ссылка для подтверждения права собственности на домен. Такое письмо может быть отправлено либо на e-mail, указанный в Whois вашего домена, либо на один из золотой пятерки: admin @, administrator @, hostmaster @, postmaster @, webmaster @</p>
                            <p className='file-title'>
                                <span><GrNext /></span>
                                <span>Проверка через DNS CNAME</span>
                            </p>
                            <p className='download-file'>Довольно популярный метод, для тех, у кого может быть не настроен почтовый сервер, а whois e-mail закрыт частной регистрацией. Суть проста, вам нужно сделать специальную запись в DNS, а центр сертификации проверит ее. Метод полностью автоматический.</p>
                            <p className='file-title'>
                                <span><GrNext /></span>
                                <span>Проверка с помощью хэш-файла (HTTP CSR Hash)</span>
                            </p>
                            <p className='download-file'>Еще более простой метод заключается в том, что вам будет предоставлен специальный файл .txt, который вы должны загрузить на свой сервер, центр сертификации проверит его наличие и выдаст сертификат. Этот метод полностью автоматический.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='wiki-main-link-box'>
                <a className='wiki-main-link' href="/dv-ssl">Купить сертификаты DV</a>
                <a className='wiki-main-link' href="/wiki">Вернуться в SSL Wiki</a>
            </div>
        </>
    )
}