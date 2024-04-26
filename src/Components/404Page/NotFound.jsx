import React, { useEffect } from 'react';
import { useNavigate } from 'react-router-dom';
import { TbError404 } from "react-icons/tb";

export default function NotFound() {
    const navigate = useNavigate();

    useEffect(() => {
        // 404 status kodi bilan qaytaring
        navigate('/404', { state: { status: 404 } });
    }, [navigate]);
    document.title = 'Страница не найдена';

    return (
        <div className='certificates'>
            <div className="not-found">
                <h3 title='about this page'>Извините, страница не найдена</h3>
                <p>
                    <a href="/">Главная страница</a>
                </p>
                <div><TbError404 /></div>
            </div>
        </div>
    );
}