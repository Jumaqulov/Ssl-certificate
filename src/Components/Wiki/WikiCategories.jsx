import React from 'react'
import { TfiBook } from "react-icons/tfi";

export default function WikiCategories() {
    return (
        <div className='wiki-categories'>
            <h3>
                <TfiBook />
                <span>Проверьте другие категории</span>
            </h3>
            <a href="/wiki/general">Общие вопросы</a>
            <a href="/wiki/ssl-reissue-renewal">Перевыпуск и возобновление SSL</a>
            <a href="/wiki/validation">Валидация</a>
            <a href="/wiki/ssl-basics">Основы SSL / FAQ</a>
            <a href="/wiki/csr-generation">Генерация CSR / SSL</a>
            <a href="/wiki/installation">Руководства по установке</a>
            <a href="/wiki/problems">Проблемы и вопросы</a>
            <a href="/wiki/intermediate-certificates">Промежуточные сертификаты</a>
        </div>
    )
}