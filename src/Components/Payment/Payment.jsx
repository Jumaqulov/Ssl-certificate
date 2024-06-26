import React, { useEffect } from 'react'
import { GiPriceTag } from 'react-icons/gi'
import { FaCcPaypal } from "react-icons/fa6";
import { RiBankLine } from "react-icons/ri";
import { MdOutlineCurrencyExchange } from "react-icons/md";
import { Helmet } from 'react-helmet';

export default function Payment() {
    useEffect(() => {
        document.title = ''
    }, [])
    return (
        <>
            <Helmet>
                <meta name="description" content="Оплатите SSL с помощью PayPal, кредитной карты, Skrill или webmoney с 30-дневной гарантией возврата денег" />
                <meta property="og:description" content="Оплатите SSL с помощью PayPal, кредитной карты, Skrill или webmoney с 30-дневной гарантией возврата денег" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Способы оплаты" />
                <meta property="og:site_name" content="SSL Certificate" />
                <meta property="og:url" content="https://sslcertificate.uz" />
                <title>Способы оплаты</title>
            </Helmet>
            <div className='certificates'>
                <div className="cert-txt">
                    <h1 title='Способы оплаты'>Способы оплаты</h1>
                    <p className='cert-txt-item'>
                        <span>
                            <GiPriceTag className='cert-txt-svg' />
                        </span>
                        <span>Нашли ли вы лучшее решение или просто передумали - неважно, какова причина отказа. Мы возвращаем платежи в те же источники, из которых они поступили. Мы принимаем PayPal, Skrill, Webmoney (Paymaster24), прямые банковские переводы или можем вернуть деньги на баланс вашего счета для будущих покупок.</span>
                    </p>
                    <h4 className='term-title'>Правила и способы оплаты</h4>
                    <p>Мы принимаем несколько способов оплаты, чтобы наилучшим образом обслужить вас. Свяжитесь с нами, чтобы обсудить любые предложения, поскольку мы можем рассмотреть возможность принятия различных способов оплаты. Текущие платежные шлюзы, которые мы принимаем, перечислены ниже:</p>
                    <ul>
                        <li className='lei-info'>
                            <div className='lei-info-left'>
                                <span>
                                    <FaCcPaypal className='payment-symbol' />
                                </span>
                            </div>
                            <div className='lei-info-right'>
                                <h4>PayPal + кредитные карты</h4>
                                <p>Мы принимаем шлюз PayPal, поскольку он является одним из лучших и наиболее популярных платежных систем во всем мире. Для оплаты наших услуг с помощью PayPal можно использовать кредитные карты Visa, Mastercard, Discover и American Express, прямые банковские переводы. Все возвраты обрабатываются немедленно.</p>
                            </div>
                        </li>
                        <li className='lei-info'>
                            <div className='lei-info-left'>
                                <span>
                                    <svg className='payment-skrill' viewBox='0 0 32 11'>
                                        <path d="M22.936 2.681a1.304 1.304 0 1 0 0-2.607 1.304 1.304 0 0 0 0 2.607zm-9.988.704c-.059.148-.482 1.344-1.506 2.584V.667l-2.73.54v9.61h2.73v-2.97c.79 1.185 1.18 2.97 1.18 2.97h3.27c-.324-1.345-1.738-3.823-1.738-3.823a11.976 11.976 0 0 0 1.915-3.609h-3.12zm7.175-.1c-2.444.078-3.685 1.175-3.685 3.355v4.177h2.667V7.41c0-1.306.17-1.865 1.72-1.919v-2.17c-.26-.054-.702-.037-.702-.037zM4.135 4.443c-.334-.022-1.108-.072-1.108-.769 0-.84 1.114-.84 1.532-.84.735 0 1.687.217 2.366.42 0 0 .38.134.702.27l.03.009V1.23l-.041-.012C6.814.938 5.88.668 4.152.668 1.17.667.114 2.403.114 3.891c0 .858.368 2.877 3.782 3.11.29.017 1.058.061 1.058.781 0 .595-.63.945-1.687.945A8.3 8.3 0 0 1 .3 8.152v2.372c1.023.268 2.175.402 3.526.402 2.916 0 4.221-1.643 4.221-3.272 0-1.847-1.46-3.047-3.912-3.21zm17.479 6.374h2.645V3.393h-2.645v7.424zM29.24 1.14v9.676h2.646V.667l-2.646.474zm-3.86 0l2.643-.474v10.15H25.38V1.14z"></path>
                                    </svg>
                                </span>
                            </div>
                            <div className='lei-info-right'>
                                <h4>Skrill + credit cards</h4>
                                <p>Skrill, ранее известный как MoneyBookers, является вторым по величине поставщиком онлайн-платежей в мире. Мы разрешаем использовать Skrill в качестве шлюза для кредитных карт, даже для карт Maestro. Skrill обрабатывает методы SkrilDirect, Sofort, Neteller, PaySafeCard и SWIFT. Однако они имеют строгие правила обработки кредитных карт и могут отклонить платежи с обычных кредитных карт. В таких случаях мы предлагаем использовать PayPal.</p>
                            </div>
                        </li>
                        <li className='lei-info'>
                            <div className='lei-info-left'>
                                <span>
                                    <RiBankLine className='payment-bank' />
                                </span>
                            </div>
                            <div className='lei-info-right'>
                                <h4>Банковские переводы (SWIFT)</h4>
                                <p>Для всех наших клиентов и партнеров приветствуются платежи по банковским переводам (SWIFT). Получите автоматически сгенерированный счет-фактуру в формате PDF, включающий все реквизиты компании и банка, при каждой покупке в нашей системе. Получение платежей в Европе занимает около 1-2 рабочих дней, в других странах может занять немного больше времени. Отправьте нам подтверждение платежа для мгновенной обработки.</p>
                            </div>
                        </li>
                        <li className='lei-info'>
                            <div className='lei-info-left'>
                                <span>
                                    <MdOutlineCurrencyExchange className='payment-money' />
                                </span>
                            </div>
                            <div className='lei-info-right'>
                                <h4>Chargebacks</h4>
                                <p>Есть люди, которые пытаются обмануть и сделать возврат средств после успешного получения заказанных товаров. В этом случае мы приостановим работу таких аккаунтов с отзывом SSL-сертификата. Мы также можем предупредить других онлайн-провайдеров SSL о ваших методах работы, чтобы запретить вам покупать SSL в других местах. Если вы хотите возобновить работу своего аккаунта, вам необходимо оплатить неоплаченный счет и штраф в размере 100$.</p>
                            </div>
                        </li>
                    </ul>
                </div>
            </div>
        </>
    )
}
