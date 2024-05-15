import React from 'react'
import { TfiTimer } from "react-icons/tfi";

export default function HolderPromos() {
  return (
    <div className='holder-promos'>
      <div className='promos promo1'>
        <h3>
          <span>
            <TfiTimer className='timer-svg' />
          </span>
          <span>
            <b>Быстрая выдача</b>
            <p>в течение 3-5 минут</p>
          </span>
        </h3>
        <p className='promo1-text promos-text'>
          Получить подтверждение домена <a href="/ssl-certificates">SSL-сертификат</a> всего за 5 минут с помощью нашей дружелюбной автоматизированной системы. Никакой бумажной волокиты, обратного звонка или компании не требуется.
        </p>
      </div>
      <div className='promos promo3'>
        <h3>
          <span>
            <svg className='shield-svg' viewBox="0 0 28 32">
              <use xlinkHref='/skin.svg#shield-lock'></use>
            </svg>
          </span>
          <span>
            <b>Бесплатный SSL</b>
            <p>90 дней бесплатно</p>
          </span>
        </h3>
        <p className='promo3-text promos-text'>
          <a href="/product/gogetssl-90-day-trial-ssl">Попробуйте 90-дневную пробную версию</a> SSL-сертификат перед реальной покупкой для проверки работоспособности сертификата. Поддержка 99,9% браузеров и мобильных устройств. Бесплатные повторные выпуски.
        </p>
      </div>
    </div>
  )
}