import React, { useEffect } from 'react'
import { TfiBook } from "react-icons/tfi";
import WikiCategories from '../WikiCategories'

export default function General() {
    useEffect(() => {
        document.title = 'Общие вопросы | Вики'
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
                <span className='current'>Общие </span>
            </div>
            <div className="wiki-main">
                <h3>Вики - Общие сведения</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <TfiBook className='cert-txt-svg' />
                    </span>
                    <span>Раздел "Общие вопросы" нашей SSL Wiki включает в себя наиболее распространенные вопросы, связанные с нашими бизнес-процессами. Здесь вы найдете всю информацию о налогах для разных стран, значительных обновлениях на рынке и другую полезную информацию.</span>
                </p>
                <ul className='wiki-guide'>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>1</span>
                        </div>
                        <div>
                            <a href="/wiki/general/disalowed-domains">Запрещенные доменные имена / регионы</a>
                            <p>У каждого центра сертификации (ЦС) есть свои правила и список запрещенных доменных имен или запрещенных регионов/стран. На эти правила также влияют правила эмбарго страны, в которой находится штаб-квартира центра сертификации...</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>2</span>
                        </div>
                        <div>
                            <a href="/wiki/general/comodo-is-now-sectigo">Comodo теперь Sectigo</a>
                            <p>1 ноября 2018 года компания Comodo CA объявила о ребрендинге в Sectigo. Текущие изменения затрагивают только название и не касаются продуктов или цен...</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>3</span>
                        </div>
                        <div>
                            <a href="/wiki/general/multi-year-subscription-ssl">Многолетняя подписка SSL</a>
                            <p>Отличная новость для рынка SSL! Теперь большинство SSL-сертификатов доступны для 6-летних планов подписки. В целях безопасности ваш сертификат будет выпущен с максимальным сроком действия 13 месяцев...</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>4</span>
                        </div>
                        <div>
                            <a href="/wiki/general/code-signing-2023">Новые стандарты подписания кодов (2023)</a>
                            <p>Начиная с 1 июня 2023 года в 00:00 UTC, отраслевые стандарты будут требовать, чтобы закрытые ключи для сертификатов подписи кода OV хранились на оборудовании, сертифицированном по стандартам FIPS 140 Level 2, Common Criteria EAL 4+ или эквивалентному.</p>
                        </div>
                    </li>
                </ul>
            </div>
            <WikiCategories />
        </>
    )
}