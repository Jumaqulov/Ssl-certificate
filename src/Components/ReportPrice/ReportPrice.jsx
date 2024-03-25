import React from 'react'
import { PiTarget } from "react-icons/pi";

export default function ReportPrice() {
    return (
        <div className='certificates'>
            <div className="cert-txt">
                <h1 title='about this page'>Сообщить о лучшей цене</h1>
                <p className='cert-txt-item'>
                    <span>
                        <PiTarget className='cert-txt-svg' />
                    </span>
                    <span>Нашли предложение по более выгодной цене в другом месте? Нет проблем! Мы готовы предложить любую цену, которую вы найдете в других местах, со 100% гарантией. GoGetSSL™ является крупным игроком на рынке SSL, и у нас достаточно вариантов и возможностей, чтобы предложить вам лучшую цену. Пожалуйста, заполните форму отчета, и один из наших менеджеров свяжется с вами в ближайшее время с нашим предложением.</span>
                </p>
            </div>
        </div>
    )
}