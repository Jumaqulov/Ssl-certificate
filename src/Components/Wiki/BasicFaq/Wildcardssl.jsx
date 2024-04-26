import React, { useEffect } from 'react'
import { TbCircleLetterW } from 'react-icons/tb'

export default function Wildcardssl() {
    useEffect(() => {
        document.title = 'Сертификаты Wildcard SSL'
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
                <span className='current'>Сертификаты Wildcard SSL</span>
            </div>
            <div className="wiki-main">
                <h3>Сертификаты Wildcard SSL</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <TbCircleLetterW className='cert-txt-svg' />
                    </span>
                    <span>SSL-сертификаты Wildcard - это отличные помощники, когда вам нужно защитить несколько поддоменов в рамках одного доменного имени. Стандартный однодоменный SSL может защищать один домен или его поддомен, например domain.tld ИЛИ sub.domain.tld <br /> Однако современная инфраструктура включает в себя множество сервисов, использующих собственные субдомены. Если вам нужно защитить всего несколько субдоменов и вы уже знаете их имена, выбирайте сертификаты <a className='wiki-ssl-link' href="/wildcard-ssl">Multi-domain SSL</a> (SAN). Однако если у вас много субдоменов и вы не знаете всех субдоменов на данный момент, воспользуйтесь сертификатами Wildcard SSL.</span>
                </p>
                <p>Wildcard SSL-сертификат защищает неограниченное количество субдоменов, но только для домена следующего уровня. Если заказ сделан на *.domain.tld, это означает, что SSL будет защищать домен domain.tld (базовый домен) и все его поддомены (следующего уровня), например any.domain.tld, mail.domain.tld и т. д., но НЕ *.*.domain.tld. По сути, двойных подстановочных сертификатов не существует, как и EV Wildcards.</p>
                <p>Также можно использовать Wildcard SSL для почтовых серверов и серверов обмена, поскольку большинство современных программ могут работать с ними, как и с сертификатами UCC (Unified Communication SSL).</p>
                <p>Существует также новый тип сертификатов Wildcard под названием Multi-Domain Wildcard. Они способны защитить до 250 различных доменов с дикой картой, что означает неограниченное количество субдоменов в 250 доменах. Большинство наших Wildcard-сертификатов поставляются с неограниченным лицензированием серверов, поэтому вы можете устанавливать различные варианты субдоменов на разных серверах и IP-адресах.</p>
            </div>
            <div className='wiki-main-link-box'>
                <a className='wiki-main-link' href="/wildcard-ssl">Купить сертификаты Wildcard</a>
                <a className='wiki-main-link' href="/wiki">Вернуться в SSL Wiki</a>
            </div>
        </>
    )
}