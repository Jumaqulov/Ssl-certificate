import React from 'react'
import { TfiTimer } from "react-icons/tfi";
import { PiTargetBold } from "react-icons/pi";
import { BsShieldLockFill } from "react-icons/bs";
import { FaMoneyBillTransfer } from "react-icons/fa6";

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
      <div className='promos promo2'>
        <h3>
          <span>
            <PiTargetBold className='target-svg' />
          </span>
          <span>
            <b>Соответствие цен</b>
            <p>100% гарантия</p>
          </span>
        </h3>
        <p className='promo2-text promos-text'>
          Нашли лучшую цену? Мы<a href="/report-better-price">соответствовать</a> - гарантировано. Получите лучшую цену в мире вместе с нами. Правильное место для сохранения ваших денег.
        </p>
      </div>
      <div className='promos promo3'>
        <h3>
          <span>
            <BsShieldLockFill className='shield-svg' />
          </span>
          <span>
            <b>Бесплатный SSL</b>
            <p>90 дней бесплатно</p>
          </span>
        </h3>
        <p className='promo3-text promos-text'>
          <a href="/ssl-certs/free-ssl">Попробуйте 90-дневную пробную версию</a> SSL-сертификат перед реальной покупкой для проверки работоспособности сертификата. Поддержка 99,9% браузеров и мобильных устройств. Бесплатные повторные выпуски.
        </p>
      </div>
      <div className='promos promo4'>
        <h3>
          <span>
            <FaMoneyBillTransfer className='money-back-svg' />
          </span>
          <span>
            <b>Возврат денег</b>
            <p>30-дневная гарантия</p>
          </span>
        </h3>
        <p className='promo4-text promos-text'>
          Удовлетворение потребностей клиентов - наша главная задача. <a href="/refund-policy">Получите полный возврат</a> в течение 30 дней на любую покупку SSL-сертификатов со 100% гарантией.
        </p>
      </div>
    </div>
  )
}