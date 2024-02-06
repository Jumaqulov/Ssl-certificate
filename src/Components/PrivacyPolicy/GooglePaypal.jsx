import React from 'react'
import { FaGoogle, FaCcPaypal } from "react-icons/fa";
import { SiWebmoney } from "react-icons/si";

function Google1() {
    return (
        <ul>
            <li className='lei-info privacy-info'>
                <div className='lei-info-left'>
                    <span>
                        <FaGoogle className='privacy-premium' />
                    </span>
                </div>
                <div className='lei-info-right'>
                    <h4>Google Аналитика</h4>
                    <p>Google Analytics - это служба веб-аналитики, предлагаемая компанией Google, которая отслеживает и сообщает о посещаемости веб-сайта. Google использует собранные данные для отслеживания и мониторинга использования нашего Сервиса. Эти данные передаются другим службам Google. Google может использовать собранные данные для контекстной и персонализированной рекламы в своей рекламной сети.</p>
                    <p>Вы можете отказаться от предоставления вашей активности на Сервисе в распоряжение Google Analytics, установив дополнение Google Analytics opt-out для браузера. Дополнение не позволяет JavaScript Google Analytics (ga.js, analytics.js и dc.js) передавать Google Analytics информацию о посещениях.</p>
                    <p>Дополнительную информацию о правилах конфиденциальности Google можно найти на веб-странице <a className='privacy-link-1' href="https://www.google.com/intl/en/policies/privacy/">Условия конфиденциальности Google</a>.</p>
                </div>
            </li>
        </ul>
    )
}

function Google2() {
    return (
        <ul>
            <li className='lei-info privacy-info'>
                <div className='lei-info-left'>
                    <span>
                        <FaGoogle className='privacy-premium' />
                    </span>
                </div>
                <div className='lei-info-right'>
                    <h4>Реклама Google</h4>
                    <p>Услуга ремаркетинга Google Ads предоставляется компанией Google Inc. Вы можете отказаться от использования Google Analytics для дисплейной рекламы и настроить рекламу Google Display Network, посетив страницу настроек <a className='privacy-link-1' href="https://www.google.com/settings/ads">Google Ads.</a></p>
                    <p>Google также рекомендует установить дополнение Google Analytics Opt-out Browser Add-on для вашего веб-браузера. Дополнение Google Analytics Opt-out Browser Add-on предоставляет посетителям возможность предотвратить сбор и использование их данных в Google Analytics.</p>
                </div>
            </li>
        </ul>
    )
}

function Paypal() {
    return (
        <ul>
            <li className='lei-info privacy-info'>
                <div className='lei-info-left'>
                    <span>
                        <FaCcPaypal className='payment-symbol'/>
                    </span>
                </div>
                <div className='lei-info-right'>
                    <h4>PayPal или Braintree</h4>
                    <p>PayPal - мировой лидер в области онлайн-платежей, насчитывающий более 203 миллионов счетов по всему миру. Она доступна в 202 странах и 25 валютах по всему миру. Мы принимаем прямые платежи со счетов PayPal, а также платежи по кредитным картам с использованием услуг PayPal. <a className='privacy-link-1' href="https://www.paypal.com/webapps/mpp/ua/privacy-full">Политика конфиденциальности</a></p>
                </div>
            </li>
            <li className='lei-info privacy-info'>
                <div className='lei-info-left'>
                    <span>
                        <svg className='payment-symbol' viewBox="0 0 32 11">
                            <path d="M22.936 2.681a1.304 1.304 0 1 0 0-2.607 1.304 1.304 0 0 0 0 2.607zm-9.988.704c-.059.148-.482 1.344-1.506 2.584V.667l-2.73.54v9.61h2.73v-2.97c.79 1.185 1.18 2.97 1.18 2.97h3.27c-.324-1.345-1.738-3.823-1.738-3.823a11.976 11.976 0 0 0 1.915-3.609h-3.12zm7.175-.1c-2.444.078-3.685 1.175-3.685 3.355v4.177h2.667V7.41c0-1.306.17-1.865 1.72-1.919v-2.17c-.26-.054-.702-.037-.702-.037zM4.135 4.443c-.334-.022-1.108-.072-1.108-.769 0-.84 1.114-.84 1.532-.84.735 0 1.687.217 2.366.42 0 0 .38.134.702.27l.03.009V1.23l-.041-.012C6.814.938 5.88.668 4.152.668 1.17.667.114 2.403.114 3.891c0 .858.368 2.877 3.782 3.11.29.017 1.058.061 1.058.781 0 .595-.63.945-1.687.945A8.3 8.3 0 0 1 .3 8.152v2.372c1.023.268 2.175.402 3.526.402 2.916 0 4.221-1.643 4.221-3.272 0-1.847-1.46-3.047-3.912-3.21zm17.479 6.374h2.645V3.393h-2.645v7.424zM29.24 1.14v9.676h2.646V.667l-2.646.474zm-3.86 0l2.643-.474v10.15H25.38V1.14z"></path>
                        </svg>
                    </span>
                </div>
                <div className='lei-info-right'>
                    <h4>Skrill (MoneyBookers)</h4>
                    <p>Skrill - поистине глобальная компания. Она базируется в Лондоне и имеет офисы по всей Европе и США. В штате компании более 500 сотрудников, представляющих более 30 национальностей. Мы принимаем прямые платежи со счетов Skrill, а также платежи по кредитным картам с использованием их услуг. <a className='privacy-link-1' href="https://www.skrill.com/en/footer/privacypolicy/">Политика конфиденциальности</a></p>
                </div>
            </li>
            <li className='lei-info privacy-info'>
                <div className='lei-info-left'>
                    <span>
                        <SiWebmoney className='webmoney-symbol'/>
                    </span>
                </div>
                <div className='lei-info-right'>
                    <h4>Webmoney</h4>
                    <p>WebMoney Transfer - это глобальная расчетная система и среда для ведения онлайн-бизнеса, основанная в 1998 году. С тех пор к системе присоединилось более 36 миллионов человек со всего мира. Мы принимаем прямые платежи в различных валютах, используя платформу обработки платежей Webmoney. <a className='privacy-link-1' href="https://wiki.wmtransfer.com/projects/webmoney/wiki/Privacy_Policy">Политика конфиденциальности</a></p>
                </div>
            </li>
        </ul>
    )
}

export { Google1, Google2, Paypal }