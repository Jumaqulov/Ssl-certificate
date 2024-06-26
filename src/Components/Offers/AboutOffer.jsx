import React from 'react'
import { MdOutlineWorkspacePremium } from "react-icons/md";

export default function AboutOffer() {
    return (
        <div className='about-offer'>
            <div>
                <h3>Доверенные SSL-сертификаты</h3>
                <p className='d-flex view-lg'>
                    <span>
                        <MdOutlineWorkspacePremium className='platinium-svg' />
                    </span>
                    <span>
                        Starlab - известный и надежный бренд на рынке с более чем 101 500 клиентами из 180+ стран. Мы продаем цифровые сертификаты от ведущих центров сертификации уже более 10 лет. В нашем магазине можно найти <a className='small-link' href="/ssl-certificates">самые дешевые SSL-сертификаты</a> для защиты любых сайтов, приложений и онлайн-транзакций. Наши сертификаты выпускаются такими ведущими провайдерами, как Digicert, Geotrust, RapidSSL, Thawte и Sectigo.
                    </span>
                </p>
                <p className='view-sm'>
                    <span className='d-flex'>
                        <span>
                            <MdOutlineWorkspacePremium className='platinium-svg' />
                        </span>
                        <p>Starlab - известный и надежный бренд на рынке с более чем 101 500 клиентами.</p>
                    </span>
                    <span>
                        из 180 с лишним стран. Мы продаем цифровые сертификаты от ведущих центров сертификации уже более 10 лет. Наш магазин - это отличное место для поиска <a className='small-link' href="/ssl-certificates">самые дешевые SSL-сертификаты</a> для защиты любых веб-сайтов, приложений и онлайн-транзакций. Наши сертификаты выданы такими ведущими провайдерами, как Digicert, Geotrust, RapidSSL, Thawte и Sectigo.
                    </span>
                </p>
                <p className='about-offer-p'>У нас есть SSL-сертификаты с проверкой домена, проверкой организации, расширенной проверкой, сертификаты wildcard и, конечно, сертификаты для нескольких доменов. Каждый сертификат поставляется с зеленым замком в адресной строке и улучшением рейтинга сайта в поисковой системе Google. С сертификатами EV вы получаете еще большее мгновенное доверие благодаря зеленой адресной строке с проверенным именем компании.</p>
                <p className='about-offer-p'>Протокол SSL - один из самых мощных способов защиты вашего трафика от хакеров и злоумышленников. Помните, что потеря конфиденциальных данных ваших клиентов означает потерю их доверия!</p>
            </div>
            <div>
                <p className='big-link big-link-2'>Сравнение SSL</p>
                <p>Наши эксперты по безопасности потратили несколько недель на подготовку полного и самого подробного сравнение инструмент, доступный сегодня. Сравнивайте цифровые сертификаты по цене, типу проверки, гарантии, совместимости с мобильными устройствами и уровню доверия конечного пользователя. Более двадцати пяти различных критериев, доступных при детальном сравнении.</p>
                <p>Она бесплатна и подходит для любого пользователя, не знакомого с технологией. Используйте его для быстрого и простого выбора наиболее подходящего сертификата для ваших нужд.</p>
                <p>Наш отдел продаж будет рад помочь вам, если у вас возникнут сомнения при выборе подходящего SSL-сертификата.</p>
            </div>
        </div>
    )
}