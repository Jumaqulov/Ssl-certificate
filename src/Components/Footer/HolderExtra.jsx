import React from 'react'
import { USD } from '../../Requests/request.js'

export default function HolderExtra() {
    function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    const roundToTwoDecimalPlaces = (number) => {
        let roundedNumber = Math.ceil(number);
        let result = (Math.ceil(roundedNumber / 100) * 100);
        return result;
    }
    return (
        <div className='holder-extra'>
            <div className="left">
                <div className="holder-logo">
                    <a href="/" aria-label='GetLEI'>
                        <svg viewBox='0 0 200 88'>
                            <use xlinkHref='/skin.svg#getlei'></use>
                        </svg>
                    </a>
                    <span>Аккредитованный РА</span>
                </div>
                <div className="holder-text">
                    <h3><b>Ускорение</b> выдачи SSL</h3>
                    <p>GoGetSSL® предлагает самую быструю выдачу SSL благодаря использованию кода LEI и автоматизации API. Идентификатор юридического лица (LEI) - это глобальный идентификационный код, такой же, как DUNS. <a href="/lei">Узнайте, как</a> LEI работает.</p>
                </div>
            </div>
            <div className="right">
                <div className="block-one">
                    <p>{formatNumber(roundToTwoDecimalPlaces(62 * USD))} UZS</p>
                    <a href="/lei">Регистрация LEI</a>
                </div>
                <div className="block-two">
                    <div>
                        <p className='num'>1,422,468+</p>
                        <p className='txt'>Всего выданных LEI</p>
                    </div>
                    <div>
                        <p className='num'>224+</p>
                        <p className='txt'>Поддерживаемые юрисдикции</p>
                    </div>
                </div>
            </div>
        </div>
    )
}