import React from 'react'
import { Link } from 'react-router-dom';
import { FaSitemap } from "react-icons/fa";
import { brand, corporate } from './SitemapLinks';

export default function Sitemap() {
    // const generateSitemap = () => {
    //     const sitemapXML = `<?xml version="1.0" encoding="UTF-8"?>
    //         <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    //             ${pages.map(page => `<url><loc>${window.location.origin}${page.url}</loc></url>`).join('')}
    //         </urlset>`;

    //     const blob = new Blob([sitemapXML], { type: 'text/xml' });
    //     const url = URL.createObjectURL(blob);

    //     const link = document.createElement('a');
    //     link.href = url;
    //     link.download = 'sitemap.xml';
    //     link.click();

    //     URL.revokeObjectURL(url);
    // };
    return (
        <div className='certificates'>
            <div className="cert-txt">
                <h1 title='Sitemap и структура страниц'>Sitemap и структура страниц</h1>
                <p className='cert-txt-item'>
                    <span>
                        <FaSitemap className='cert-txt-svg' />
                    </span>
                    <span>На нашем сайте есть несколько навигаций: верхняя навигация с языковой панелью и страницами поддержки, основная навигация со списком наиболее распространенных страниц и продуктов, левая навигация со списком подстраниц и нижняя навигация с дублированием основных страниц. На сайте более 100 страниц, и мы считаем, что вы не должны заблудиться, однако мы опубликовали для вас карту сайта.</span>
                </p>
                <div className="sitemap-list">
                    <div className="sitemap-left">
                        <h2 className='sitemap-title'>Корпоративные страницы</h2>
                        <ul>
                            {corporate.map(page => (
                                <li key={page.url}>
                                    <Link to={page.url}>{page.title}</Link>
                                </li>
                            ))}
                        </ul>
                        <h2 className='sitemap-title st-mt'>Бренды SSL</h2>
                        <ul>
                            {brand.map(page => (
                                <li key={page.url}>
                                    <Link to={page.url}>{page.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="sitemap-right"></div>
                </div>
            </div>
        </div>
    )
}