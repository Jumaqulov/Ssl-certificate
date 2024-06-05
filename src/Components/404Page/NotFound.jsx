import React, { useEffect } from 'react';
import { TbError404 } from "react-icons/tb";

export default function NotFound() {
    document.title = 'Страница не найдена';

    useEffect(() => {
        if (window.dataLayer) {
            window.dataLayer.push({
                event: '404_pageview',
                page: {
                    url: window.location.pathname,
                    title: document.title
                }
            });
        }
    }, []);

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