import React, { useEffect } from 'react'
import { MdOutlineBusinessCenter } from "react-icons/md";

export default function Support() {
    useEffect(() => {
        document.title = 'Поддержка 24/7'
    }, [])
    return (
        <div className='support'>
            <div className="support-main">
                <div className="suport-m-left">
                    <div>
                        <h3>Центр поддержки SSL</h3>
                        <p>Не стесняйтесь обращаться к нашей дружной команде в любое время. Мы готовы помочь вам по любым вопросам, связанным с SSL-сертификатами, TrulyTrust или кодами LEI. Сотрудники службы поддержки доступны днем и ночью в течение всего года, даже в Рождество. Менеджеры по продажам доступны в рабочее время с 9.00 до 20.00 (GMT +3 часа).</p>
                    </div>
                    <div>
                        <h4>Выберите правильный SSL</h4>
                        <p>Выбрать подходящий SSL-сертификат из всего спектра предлагаемых нами продуктов - задача не из легких, особенно если вы новичок в сфере подобных услуг. Наши менеджеры по продажам и поддержке всегда готовы подсказать и помочь найти подходящие сертификаты. Вы можете воспользоваться нашим профессиональным <a href="/compare-dv-ssl">инструментом сравнения</a> SSL-сертификатов для быстрого выбора или отправить запрос в службу поддержки с подробным описанием вашего сайта, требований и бюджета, чтобы получить персональную консультацию.</p>
                    </div>
                </div>
                <div className="suport-m-right">
                    <div className="m-right-1">
                        <h4>
                            <MdOutlineBusinessCenter />
                            <span>Сведения о компании</span>
                        </h4>
                        <b>Digicert Uzbekistan Limited</b>
                        <p>НДС/НАЛОГ:IE3500071PH</p>
                    </div>
                    <div className="m-right-2">
                        <p>Банк: Turon Bank</p>
                        <p>IBAN: IE28BOFA99006156558063</p>
                        <p>Номер счета: 56558063</p>
                        <p>SWIFT Код: BOFAIE3X</p>
                    </div>
                    <div className="m-right-3">
                        <p>Адрес: Tashkent</p>
                        <p>Поддержка: <a href="mailto:avazjonjumqulov@gmail.com">avazjonjumqulov@gmail.com</a></p>
                        <p>Продажи: <a href="mailto:avazjonjumqulov@gmail.com">avazjonjumqulov@gmail.com</a></p>
                        <p>Телефон: +998 94 617 10 12</p>
                    </div>
                </div>
            </div>
            <div className="support-extra">
                <div>
                    <h5>Потенциальные клиенты</h5>
                    <p>По вопросам продаж/поддержки, партнерства и другим вопросам, пожалуйста, нажмите кнопку HELP в правом нижнем углу</p>
                </div>
                <div>
                    <h5>Существующие клиенты</h5>
                    <p>Пожалуйста, отправьте тикет в службу поддержки через клиентскую зону</p>
                    <a href="/my.cabinet">Клиентская зона</a>
                </div>
            </div>
        </div>
    )
}