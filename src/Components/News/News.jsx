import axios from 'axios';
import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner';
import Pagination from './Pagination';
import { BASE_URL, NewsList } from '../../Requests/request';

export default function News() {
    const [news, setNews] = useState([]);
    const [loading, setLoading] = useState(true);
    const [currentPage, setCurrentPage] = useState(1);
    const newsPerPage = 10;

    function truncateText(text, wordLimit = 30) {
        const words = text.split(' ');
        if (words.length > wordLimit) {
            return words.slice(0, wordLimit).join(' ') + ' ...';
        }
        return text;
    }

    const indexOfLastNews = currentPage * newsPerPage;
    const indexOfFirstNews = indexOfLastNews - newsPerPage;
    const currentNews = Array.isArray(news) ? news.slice(indexOfFirstNews, indexOfLastNews) : [];

    const paginate = (pageNumber) => setCurrentPage(pageNumber);

    useEffect(() => {
        const fetchNews = async () => {
            try {
                const response = await axios.get(`${BASE_URL + NewsList}`);
                setNews(response.data);
            } catch (error) {
                console.error('Ошибка при загрузке новостей:', error);
            } finally {
                setLoading(false);
            }
        };

        fetchNews();
    }, []);

    if (loading) {
        return (
            <div className="loader">
                <Circles height="80" width="80" color="#dc8510" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
            </div>
        );
    }

    return (
        <div className='certificates'>
            <h1 className='title-news'>Корпоративные новости</h1>
            <ul className='news-box'>
                {currentNews.length > 0 ? (
                    currentNews.map((item) => (
                        <li key={item.id} className='news-item'>
                            <div className='news-item-left'>
                                <div>
                                    <img src={item.image} alt={item.title} />
                                </div>
                            </div>
                            <div className='news-item-right'>
                                <h3>
                                    <a href={`/news/${item.id}`}>{item.title}</a>
                                </h3>
                                <p className='news-date-category'>Опубликован: {item.published_at} | Категория: {item.category}</p>
                                <p>{truncateText(item.description)}</p>
                            </div>
                        </li>
                    ))
                ) : (
                    <div>
                        <p className='no-result'>Нет новостей</p>
                    </div>
                )}
            </ul>
            {currentNews.length > 0 ? <Pagination newsPerPage={newsPerPage} totalNews={news.length} paginate={paginate} currentPage={currentPage} /> : ''}
        </div>
    );
}