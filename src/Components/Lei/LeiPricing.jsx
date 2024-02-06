import React from 'react'
import { MdOutlineDoneOutline } from "react-icons/md";


export default function LeiPricing() {
    return (
        <div className="lei-pricing">
            <p className='lei-pricing-title'>LEI Ценообразование/Планы</p>
            <table className='lei-pricing'>
                <thead>
                    <tr>
                        <th className='desktop'></th>
                        <th>Основной</th>
                        <th>Передача</th>
                        <th>Про</th>
                    </tr>
                </thead>
                <tbody>
                    <tr className='mobile'>
                        <td colSpan='4'>План ценообразования</td>
                    </tr>
                    <tr>
                        <td className='desktop'>План ценообразования</td>
                        <td className='lie-price'>
                            <span>$62.00</span>
                            <span>годовой счет</span>
                        </td>
                        <td className='lie-price'>
                            <span>$62.00</span>
                            <span>годовой счет</span>
                        </td>
                        <td className='lie-price'>
                            <span>$155.00</span>
                            <span>годовой счет</span>
                        </td>
                    </tr>
                    <tr className='mobile'>
                        <td colSpan='3'></td>
                    </tr>
                    <tr>
                        <td className='desktop'>Период</td>
                        <td className='lie-price'>
                            <span>До 5 лет</span>
                        </td>
                        <td className='lie-price'>
                            <span>1 год</span>
                        </td>
                        <td className='lie-price'>
                            <span>До 5 лет</span>
                        </td>
                    </tr>
                    <tr className='mobile'>
                        <td colSpan='3'>Регистрация LEI</td>
                    </tr>
                    <tr>
                        <td className='desktop'>Регистрация LEI</td>
                        <td className='lei-yes'>
                            <MdOutlineDoneOutline />
                        </td>
                        <td className='lei-yes'>
                            <MdOutlineDoneOutline />
                        </td>
                        <td className='lei-yes'>
                            <MdOutlineDoneOutline />
                        </td>
                    </tr>
                    <tr className='mobile'>
                        <td>Обновление данных LEI</td>
                    </tr>
                    <tr>
                        <td className='desktop'>Обновление данных LEI</td>
                        <td className='lei-yes'>
                            <MdOutlineDoneOutline />
                        </td>
                        <td className='lei-yes'>
                            <MdOutlineDoneOutline />
                        </td>
                        <td className='lei-yes'>
                            <MdOutlineDoneOutline />
                        </td>
                    </tr>
                    <tr className='mobile'>
                        <td colSpan='3'>Ускорение проверки SSL</td>
                    </tr>
                    <tr>
                        <td className='desktop'>Ускорение проверки SSL</td>
                        <td className='lei-yes'>
                            <MdOutlineDoneOutline />
                        </td>
                        <td className='lei-yes'>
                            <MdOutlineDoneOutline />
                        </td>
                        <td className='lei-yes'>
                            <MdOutlineDoneOutline />
                        </td>
                    </tr>
                    <tr className='mobile'>
                        <td className='lei-detailed' colSpan='3'>
                            <span>
                                <a href="">Бесплатный SSL-сертификат</a>
                            </span>
                            <span>Надежный и профессиональный SSL поставляется с каждым планом</span>
                        </td>
                    </tr>
                    <tr>
                        <td className='lei-detailed desktop'>
                            <span>
                                <a href="">Бесплатный SSL-сертификат</a>
                            </span>
                            <span>Надежный и профессиональный SSL поставляется с каждым планом</span>
                        </td>
                        <td>
                            <span className='lei-yes'>
                                <MdOutlineDoneOutline />
                            </span>
                        </td>
                        <td>
                            <span className='lei-yes'>
                                <MdOutlineDoneOutline />
                            </span>
                            <i className='yes-num'>
                                GoGetSSL® Доменный SSL-сертификат
                            </i>
                        </td>
                        <td>
                            <span className='lei-yes'>
                                <MdOutlineDoneOutline />
                            </span>
                            <i className='yes-num'>
                                GoGetSSL® Доменный SSL-сертификат
                            </i>
                        </td>
                    </tr>
                    <tr>
                        <td className='desktop'></td>
                        <td>
                            <a href="">
                                <span className='desktop'>Выберите <br /> Этот план</span>
                                <span className='mobile'>Заказать</span>
                            </a>
                        </td>
                        <td>
                            <a href="">
                                <span className='desktop'>Выберите <br /> Этот план</span>
                                <span className='mobile'>Заказать</span>
                            </a>
                        </td>
                        <td>
                            <a href="">
                                <span className='desktop'>Выберите <br /> Этот план</span>
                                <span className='mobile'>Заказать</span>
                            </a>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}