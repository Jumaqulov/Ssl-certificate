import React from 'react'

export default function WikiCategories() {
    return (
        <div className='wiki-categories'>
            <h3>
                <svg viewBox='0 0 32 26'>
                    <path
                        d="M1.703 20.116V4.666c-.545.144-1.09.32-1.603.48v19.506a20.66 20.66 0 0 1 13.031.673 15.066 15.066 0 0 0-10.69-4.471.753.753 0 0 1-.738-.738z" />
                    <path
                        d="M3.21.45l-.048 19.01a16.893 16.893 0 0 1 12.133 6.09V7.422A16.028 16.028 0 0 0 3.21.45zm27.087 4.248v15.434a.753.753 0 0 1-.737.738 14.97 14.97 0 0 0-10.66 4.47v.016a20.628 20.628 0 0 1 12.999-.705V5.178a15.61 15.61 0 0 0-1.603-.48h.001z">
                    </path>
                    <path d="M28.854.45a15.852 15.852 0 0 0-12.117 6.972V25.55a16.894 16.894 0 0 1 12.117-6.09V.45z"></path>
                </svg>
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