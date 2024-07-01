import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'
import { Circles } from 'react-loader-spinner';
import axios from 'axios';
import { NewsList, Url } from '../../Requests/request';

export default function NewsDetail() {
    const { id } = useParams()
    const [newsDetail, setNewsDetail] = useState(null);
    const [loading, setLoading] = useState(true);
    const [error, setError] = useState(null);

    useEffect(() => {
        const fetchNewsDetail = async () => {
            try {
                const response = await axios.get(`${Url + NewsList}/${id}`);
                setNewsDetail(response.data);
            } catch (error) {
                setError('Ошибка при загрузке новостей');
            } finally {
                setLoading(false);
            }
        };

        fetchNewsDetail();
    }, [id]);

    if (loading) {
        return <div className="loader">
            <Circles height="80" width="80" color="#dc8510" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
        </div>;;
    }

    if (!newsDetail) {
        return <div>Новость не найдена</div>;
    }
    console.log(newsDetail);
    return (
        <div className='certificates'>
            <div className='news-detail'>
                <h1>{newsDetail.title}</h1>
                <p>{newsDetail.description}</p>
            </div>
        </div>
    )
}