import React from 'react'
import { Helmet } from 'react-helmet';
import { MdOutlineBusinessCenter } from "react-icons/md";
import { FaHandsHoldingCircle } from "react-icons/fa6";
import { BsPiggyBankFill, BsBank2, BsFillShieldLockFill } from "react-icons/bs";
import { GrUserExpert } from "react-icons/gr";
import { HiBuildingOffice2 } from "react-icons/hi2";
import { TbApi, TbArrowsExchange2 } from "react-icons/tb";
import LeiTable from './LeiTable'
import LeiPricing from './LeiPricing'
import { USD } from '../../Requests/request';

export default function Lei() {
    return (
        <>
            <Helmet>
                <title>Коды LEI</title>
                <meta name="description" content={`Стоимость кодов LEI начинается от ${62 * USD} UZS в год. Надежный и современный способ идентификации любой международной компании, участвующей в финансовых операциях`} />
                <meta name='keywords' content='Starlab Ssl, starlab ssl, ssl sertificate, сертификаты ssl, get lei, lei certificate , сертификаты Lei, lei ,Lei buy' />
                <meta name="author" content="Starlab" />
            </Helmet>
            <div className='certificates'>
                <div className="cert-txt">
                    <h1 title='about this page'>Коды LEI. Знайте своего клиента</h1>
                    <div className='lei-header'>
                        <div>
                            <svg className='getlie-svg' viewBox="0 0 26 32">
                                <path
                                    d="M7.208 17.045V7.005L3.876 8.398v9.691c0 5.45 4.324 7.346 4.369 7.365l4.676 1.978 4.766-1.978c.002-.001.063-.02.14-.057l-4.906-2.03-2.703-1.154c-.126-.053-3.01-1.326-3.01-5.168zm1.587 0c0 2.353 1.89 3.178 1.909 3.186l2.217.935 4.284 1.74v-4.064l-4.284-1.74V14.89l4.284 1.75v-4.065l-4.284-1.74V8.624l4.284 1.75V6.31L12.92 4.57l-4.126 1.74v10.736zm13.329-8.647l-3.332-1.393v16.598l.954.4c1.155-1.13 2.378-3.012 2.378-5.914v-9.69zM12.153.44L6.322 2.876l-4.99 2.089L.066 5.5V18.09c0 2.87.847 5.534 2.472 7.705 1.187 1.585 2.82 2.92 4.378 3.57l5.24 2.198.764.334.838-.334 5.293-2.198c.101-.042 1.106-.465 2.302-1.408a11.736 11.736 0 0 0 1.911-1.9c1.77-2.21 2.668-4.89 2.668-7.967V5.5l-1.281-.535-5.01-2.09L13.793.455l-.838-.321h-.035V.104l-.768.335zm.768 29.194l-5.242-2.198C5.747 26.63 2.13 23.64 2.13 18.089V6.893l5.014-2.159h-.036l5.813-2.367 5.884 2.367h.025l5.04 2.159v11.196c0 3.052-1.051 5.21-2.23 6.677 0 0-.6.786-1.567 1.55-.968.763-1.803 1.105-1.84 1.12l-5.312 2.197z">
                                </path>
                            </svg>
                        </div>
                        <div>
                            <p>Код идентификатора юридического лица (LEI) - один из самых надежных и современных способов идентификации любой международной компании, участвующей в финансовых операциях. Целью использования кода LEI является существенная помощь в мониторинге и измерении системного риска, поддержка более недорогого соблюдения требований регуляторов по отчетности. Страны G20 одобрили использование кодов LEI. Частным лицам не нужно получать код LEI. Нет LEI - нет торговли.</p>
                            <a className='to-lei-site' href="https://www.getlei.com" target='_blank' >Посетите веб-сайт GetLei</a>
                        </div>
                    </div>
                    <div className='lei-support'>
                        <div>
                            <h6>Поддерживаемые организации</h6>
                        </div>
                        <div className="lei-support-box">
                            <div className="lei-support-boxes">
                                <span>
                                    <MdOutlineBusinessCenter className='lei-svg lei-business' />
                                </span>
                                <span>Зарегистрированные компании</span>
                            </div>
                            <div className="lei-support-boxes">
                                <span>
                                    <FaHandsHoldingCircle className='lei-svg lei-charity' />
                                </span>
                                <span>Некоммерческая/благотворительная организация</span>
                            </div>
                            <div className="lei-support-boxes">
                                <span>
                                    <BsPiggyBankFill className='lei-svg lei-funds' />
                                </span>
                                <span>Фонды и трасты</span>
                            </div>
                            <div className="lei-support-boxes">
                                <span>
                                    <BsBank2 className='lei-svg lei-bank' />
                                </span>
                                <span>Государственные учреждения</span>
                            </div>
                            <div className="lei-support-boxes">
                                <span>
                                    <GrUserExpert className='lei-svg lei-veriuser' />
                                </span>
                                <span>Индивидуальные предприниматели</span>
                            </div>
                            <div className="lei-support-boxes">
                                <span>
                                    <HiBuildingOffice2 className='lei-svg lei-office' />
                                </span>
                                <span>Филиалы</span>
                            </div>
                        </div>
                        <LeiTable />
                        <LeiPricing />
                        <ul>
                            <li className='lei-info'>
                                <div className='lei-info-left'>
                                    <span>
                                        <svg className='lei-lsymbol' viewBox='0 0 26 32'>
                                            <path
                                                d="M7.208 17.045V7.005L3.876 8.398v9.691c0 5.45 4.324 7.346 4.369 7.365l4.676 1.978 4.766-1.978c.002-.001.063-.02.14-.057l-4.906-2.03-2.703-1.154c-.126-.053-3.01-1.326-3.01-5.168zm1.587 0c0 2.353 1.89 3.178 1.909 3.186l2.217.935 4.284 1.74v-4.064l-4.284-1.74V14.89l4.284 1.75v-4.065l-4.284-1.74V8.624l4.284 1.75V6.31L12.92 4.57l-4.126 1.74v10.736zm13.329-8.647l-3.332-1.393v16.598l.954.4c1.155-1.13 2.378-3.012 2.378-5.914v-9.69zM12.153.44L6.322 2.876l-4.99 2.089L.066 5.5V18.09c0 2.87.847 5.534 2.472 7.705 1.187 1.585 2.82 2.92 4.378 3.57l5.24 2.198.764.334.838-.334 5.293-2.198c.101-.042 1.106-.465 2.302-1.408a11.736 11.736 0 0 0 1.911-1.9c1.77-2.21 2.668-4.89 2.668-7.967V5.5l-1.281-.535-5.01-2.09L13.793.455l-.838-.321h-.035V.104l-.768.335zm.768 29.194l-5.242-2.198C5.747 26.63 2.13 23.64 2.13 18.089V6.893l5.014-2.159h-.036l5.813-2.367 5.884 2.367h.025l5.04 2.159v11.196c0 3.052-1.051 5.21-2.23 6.677 0 0-.6.786-1.567 1.55-.968.763-1.803 1.105-1.84 1.12l-5.312 2.197z">
                                            </path>
                                        </svg>
                                    </span>
                                </div>
                                <div className='lei-info-right'>
                                    <h4>Работает под управлением GetLEI®</h4>
                                    <p>Сервис GetLEI®, управляемый нашей компанией Digicert Ireland, - это новый проект, созданный в начале 2019 года для предоставления кодов LEI в глобальном масштабе, помогающих идентифицировать предприятия/организации. Код LEI является обязательным условием для представления компании в финансовых транзакциях или при подтверждении личности.</p>
                                </div>
                            </li>
                            <li className='lei-info'>
                                <div className='lei-info-left'>
                                    <span>
                                        <TbApi className='lei-api' />
                                    </span>
                                </div>
                                <div className='lei-info-right'>
                                    <h4>Мощность API</h4>
                                    <p>Автоматизируйте регистрацию кодов LEI с помощью нашего API для быстрого и простого массового заказа. API позволяет создавать новые LEI-коды, обновлять LEI и проверять статус заказа. Программа для реселлеров LEI доступна для всех наших клиентов. Мы являемся первой компанией, выпустившей WHMCS LEI модуль для реселлинга, чтобы автоматизировать этот процесс.</p>
                                </div>
                            </li>
                            <li className='lei-info'>
                                <div className='lei-info-left'>
                                    <span>
                                        <TbArrowsExchange2 className='lei-exchange' />
                                    </span>
                                </div>
                                <div className='lei-info-right'>
                                    <h4>Бесплатный 1 год SSL в рамках передачи LEI</h4>
                                    <p>Мы предлагаем бесплатный SSL-сертификат GoGetSSL® Domain сроком на 1 год при каждом переводе LEI в нашу систему. Вы получите SSL-сертификат домена или расширенной проверки бесплатно во время продления срока действия переданного кода LEI для вашего переданного кода. Обратите внимание, EV SSL поставляется с PRO-планом.</p>
                                </div>
                            </li>
                            <li className='lei-info'>
                                <div className='lei-info-left'>
                                    <span>
                                        <BsFillShieldLockFill className='lei-shield' />
                                    </span>
                                </div>
                                <div className='lei-info-right'>
                                    <h4>Защита данных / совместимость с GDPR</h4>
                                    <p>Мы берем на себя ответственность за защиту всех ваших персональных данных в соответствии с правилами и руководствами GDPR. Наша команда безопасности отслеживает и анализирует нашу систему на предмет любых возможных уязвимостей, используя инструменты PCI-сканирования и советы лучших экспертов по безопасности на рынке. Ознакомьтесь с руководством по политике конфиденциальности.</p>
                                </div>
                            </li>
                        </ul>
                    </div>
                </div>
            </div>
        </>
    )
}