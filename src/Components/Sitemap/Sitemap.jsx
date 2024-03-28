import React from 'react'
import { Link } from 'react-router-dom';
import { FaSitemap } from "react-icons/fa";
import { brand, categories, corporate, otherService, tools, wiki } from './SitemapLinks';

export default function Sitemap() {
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
                        <h2 className='sitemap-title st-mt'>Wiki и руководства</h2>
                        <ul>
                            {wiki.map(page => (
                                <li key={page.url}>
                                    <Link to={page.url}>{page.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                    <div className="sitemap-right">
                        <h2 className='sitemap-title'>Категории SSL</h2>
                        <ul>
                            {categories.map(page => (
                                <li key={page.url}>
                                    <Link to={page.url}>{page.title}</Link>
                                </li>
                            ))}
                        </ul>
                        <h2 className='sitemap-title st-mt'>Другие услуги</h2>
                        <ul>
                            {otherService.map(page => (
                                <li key={page.url}>
                                    <Link to={page.url}>{page.title}</Link>
                                </li>
                            ))}
                        </ul>
                        <h2 className='sitemap-title st-mt'>Инструменты и функции</h2>
                        <ul>
                            {tools.map(page => (
                                <li key={page.url}>
                                    <Link to={page.url}>{page.title}</Link>
                                </li>
                            ))}
                        </ul>
                    </div>
                </div>
            </div>
        </div>
    )
}