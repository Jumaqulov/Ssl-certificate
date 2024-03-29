import React from 'react';
import { TbError404 } from "react-icons/tb";
import { useLocation, Navigate } from 'react-router-dom';

export default function NotFound() {
    const location = useLocation();
    document.title = 'Страница не найдена';
    return (
        <div className='certificates'>
            <div className="not-found">
                <h3 title='about this page'>Извините, страница не найдена</h3>
                <p>
                    <a href="/">Главная страница</a>
                </p>
                <div><TbError404 /></div>
                {location.pathname !== "/404" && <Navigate to="/404" replace />}
            </div>
        </div>
    )
}
