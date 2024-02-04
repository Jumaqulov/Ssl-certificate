import React, { useEffect } from 'react'

export default function ComodoSectigo() {
    useEffect(() => {
        document.title = 'Comodo теперь Sectigo | SSL Wiki'
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
                <a href='/wiki/general'>Общие вопросы</a>
                <span className='next'>
                    <svg viewBox='0 0 19 32'>
                        <path
                            d="M5.66962.995l12.304 12.89c.642.643.964 1.287.961 2.144s-.326 1.501-.97 2.144l-12.353 12.839c-.539.643-1.288.856-2.254.854-.858-.001-1.609-.218-2.25-.863-1.392-1.397-1.39-2.79.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9.009-4.289.645-.641 1.396-.854 2.253-.852.966 0 1.716.218 2.25.86v.001z">
                        </path>
                    </svg>
                </span>
                <span className='current'>Comodo теперь Sectigo</span>
            </div>
            <div className="wiki-main">
                <h3>Comodo теперь Sectigo</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <svg className='cert-txt-svg' viewBox="0 0 32 28">
                            <path
                                d="M19.98352 19.12144c0 .30824-.1128.57526-.33783.80017-.22528.22553-.49218.33808-.80042.33808h-5.69041c-.30844 0-.57508-.11255-.80036-.33808-.22522-.22485-.33784-.49186-.33784-.80017v-2.84511H.0667v8.53576c0 .7823.27848 1.45199.83574 2.00913.55714.5572 1.22707.8358 2.00956.8358h26.1762c.7823 0 1.45218-.2786 2.00938-.8358.55739-.55714.83574-1.22683.83574-2.00913v-8.53576H19.98352v2.8451z" />
                            <path
                                d="M13.72364 16.27633h4.55278v2.2762h-4.55278zM31.0975 5.73112c-.55713-.55726-1.22707-.83573-2.00936-.83573h-6.2597V2.05003c0-.47424-.16586-.87722-.4979-1.2092-.33167-.3318-.73496-.49784-1.20901-.49784H10.87866c-.47411 0-.87716.16605-1.2092.49784s-.4979.7349-.4979 1.2092v2.84536H2.91198c-.78242 0-1.45236.27847-2.00956.83573-.55726.5572-.83574 1.22677-.83574 2.00925v6.82866h31.86656V7.74037c0-.78248-.2783-1.45205-.83574-2.00925zM20.55244 4.8954H11.4477V2.61906h9.10474V4.8954z">
                            </path>
                        </svg>
                    </span>
                    <span>1 ноября 2018 года компания Comodo CA объявила о ребрендинге в Sectigo. Текущие изменения затрагивают только нейминг и не касаются продуктов или цен. Однако принципиальной связи между Comodo и Sectigo нет, так как теперь это разные компании. Есть одно положительное изменение - Sectigo решила разрешить использование ресурсов Yellow Pages для проверки телефона, что является хорошим шагом, который поможет людям по всему миру легче получать сертификаты OV/EV.</span>
                </p>
                <div className='wiki-bg-dark'>
                    <h4 className='term-title'>Похожие статьи/пресс-релизы</h4>
                    <ul className='pri-policy-lists'>
                        <li>
                            <a className='wiki-link' href="https://sectigo.com/sectigo-story-faq">Sectigo FAQ</a>
                        </li>
                        <li>
                            <a className='wiki-link' href="https://sectigo.com/sectigo-story-faq">Official Press Release</a>
                        </li>
                    </ul>
                </div>
                <div className='wiki-bg-dark'>
                    <h4 className='term-title'>Ребрендированный портфель продуктов</h4>
                    <ul className='pri-policy-lists'>
                        <li>Мы обновим всю связанную с этим информацию на нашем сайте www.gogetssl.uz до 1 марта 2019 года.</li>
                        <li>Клиентская зона и информация, связанная с API, будут обновляться до 14 февраля 2019 года</li>
                    </ul>
                </div>
                <div className="wiki-bg-dark">
                    <h4 className='term-title'>Ребрендированный портфель продуктов</h4>
                    <p>Comodo PositiveSSL ---- PositiveSSL</p>
                    <p>Comodo PositiveSSL Wildcard ---- PositiveSSL Wildcard</p>
                    <p>Comodo PositiveSSL Multi-Domain ---- PositiveSSL Multi-Domain</p>
                    <p>Comodo PositiveSSL Multi-Domain Wildcard ---- PositiveSSL Multi-Domain Wildcard</p>
                    <p>Comodo Trial SSL ---- PositiveSSL Trial SSL</p>
                    <p>Comodo PositiveSSL EV ---- PositiveSSL EV</p>
                    <p>Comodo PositiveSSL EV MDC ---- PositiveSSL EV MDC</p>
                    <p>Comodo Essential SSL ---- Essential SSL</p>
                    <p>Comodo Essential Wildcard SSL ---- Essential Wildcard SSL</p>
                    <p>Comodo InstantSSL ---- InstantSSL</p>
                    <p>Comodo InstantSSL Pro ---- InstantSSL Pro</p>
                    <p>Comodo InstantSSL Premium ---- InstantSSL Premium</p>
                    <p>Comodo Premium Wildcard SSL ---- InstantSSL Premium Wildcard SSL</p>
                    <p>Comodo Multi-Domain SSL ---- Sectigo Multi-Domain SSL</p>
                    <p>Comodo EV SSL ---- Sectigo EV SSL</p>
                    <p>Comodo Multi-Domain EV SSL ---- Sectigo Multi-Domain EV SSL</p>
                    <p>Comodo Code Signing SSL ---- Sectigo Code Signing SSL</p>
                    <p>Comodo EV Code Signing SSL ---- SectigoEV Code Signing SSL</p>
                    <p>Comodo SSL Certificate ---- SectigoSSL Certificate</p>
                    <p>Comodo SSL UCC ---- Sectigo SSL UCC</p>
                    <p>Comodo Intel vPro AMT ---- Sectigo Intel vPro AMT</p>
                    <p>Comodo Multi-Domain Wildcard SSL ---- Sectigo Multi-Domain Wildcard SSL</p>
                    <p>Comodo SSL Wildcard ---- Sectigo SSL Wildcard</p>
                    <p>EnterpriseSSL ---- EnterpriseSSL</p>
                    <p>EnterpriseSSL Pro ---- EnterpriseSSL Pro</p>
                    <p>EnterpriseSSL Pro Wildcard ---- EnterpriseSSL Pro Wildcard</p>
                    <p>EnterpriseSSL Pro EV ---- EnterpriseSSL Pro EV</p>
                    <p>EnterpriseSSL Pro EV MDC ---- EnterpriseSSL Pro EV MDC</p>
                    <p>Strict Mailbox ---- Strict Mailbox</p>
                    <p>Multipurpose Mailbox ---- Multipurpose Mailbox</p>
                    <p>Multipurpose Organization ---- Multipurpose Organization</p>
                </div>
            </div>
            <div className='wiki-main-link-box'>
                <a className='wiki-main-link' href="/wiki">Вернуться в SSL Wiki</a>
            </div>
        </>
    )
}