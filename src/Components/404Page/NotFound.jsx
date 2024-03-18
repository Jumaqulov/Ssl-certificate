import React from 'react'
import { TbError404 } from "react-icons/tb";

export default function NotFound() {
    return (
        <div className='certificates'>
            <div className="not-found">
                <h3>Извините, страница не найдена</h3>
                <p>
                    <a href="/">Главная страница</a>
                </p>
                <div>
                    <TbError404 />
                </div>
            </div>
        </div>
    )
}