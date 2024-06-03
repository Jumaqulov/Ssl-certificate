import React, { useState, useEffect } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { USD } from '../../Requests/request.js'

export default function Carousel() {
    const [show, setShow] = useState(false);
    const [sliderSettings, setSliderSettings] = useState({
        dots: false,
        infinite: true,
        speed: 500,
        fade: true,
        cssEase: 'linear',
        slidesToShow: 1,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 5000,
    });

    const leiSVG = () => {
        return (
            <svg className='slide-txt-small-svg' role='img' viewBox="0 0 26 32">
                <use xlinkHref='/skin.svg#getlei-symbol'></use>
            </svg>
        )
    }

    const ttSymbol = () => {
        return (
            <svg className='tt-symbol' role='img' viewBox="0 0 181 144">
                <use xlinkHref='/skin.svg#tt-symbol'></use>
            </svg>
        )
    }

    const doneSVG = () => {
        return (
            <svg className='slide-txt-small-svg' role='img' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88">
                <use xlinkHref='/skin.svg#round-check'></use>
            </svg>
        )
    }

    function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    const roundToTwoDecimalPlaces = (number) => {
        let roundedNumber = Math.ceil(number);
        let result = (Math.ceil(roundedNumber / 100) * 100);
        return result;
    }

    useEffect(() => {
        setShow(true);
        setSliderSettings(prevSettings => ({
            ...prevSettings,
        }));
    }, []);

    return (
        <div className='carousel'>
            <div className="carousel-slider">
                <Slider {...sliderSettings}>
                    <div className='slide-one slides'>
                        <div className='sliders-back'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 26 32">
                                <use xlinkHref='/skin.svg#getlei-symbol'></use>
                            </svg>
                        </div>
                        <div className='slide-txt-1 slide-txt'>
                            <div className={`fade-left ${show ? 'show' : ''}`}>
                                <svg className='slide-txt-big-svg' role='img' xmlns="http://www.w3.org/2000/svg" viewBox='0 0 200 88'>
                                    <use xlinkHref='/skin.svg#getlei'></use>
                                </svg>
                            </div>
                            <div className={`fade-up ${show ? 'show' : ''}`}>
                                <h1 title='НАДЕЖНЫЙ И СОВРЕМЕННЫЙ СПОСОБ ИДЕНТИФИКАЦИИ КОМПАНИИ'>НАДЕЖНЫЙ И СОВРЕМЕННЫЙ СПОСОБ ИДЕНТИФИКАЦИИ КОМПАНИИ</h1>
                                <h2>{formatNumber(roundToTwoDecimalPlaces(62 * USD))} UZS</h2>
                                <a href="/lei">Проверить предложение</a>
                            </div>
                            <div className={`fade-right ${show ? 'show' : ''} slide-txt-box`}>
                                <p>
                                    <span>{leiSVG()}</span>
                                    <span>Зарегистрированные компании</span>
                                </p>
                                <p>
                                    <span>{leiSVG()}</span>
                                    <span>Некоммерческие организации, фонды и трасты</span>
                                </p>
                                <p>
                                    <span>{leiSVG()}</span>
                                    <span>Государственные учреждения</span>
                                </p>
                                <p>
                                    <span>{leiSVG()}</span>
                                    <span>Индивидуальные предприниматели/физические лица</span>
                                </p>
                            </div>
                        </div>
                    </div>
                    <div className='slide-two slides'>
                        <div className='sliders-back'>
                            <svg viewBox="0 0 25 32">
                                <use xlinkHref='/skin.svg#logo-symbol'></use>
                            </svg>
                        </div>
                        <div className='slide-txt-2 slide-txt'>
                            <div className={`fade-left ${show ? 'show' : ''}`}>
                                <h3 title='ДОСТУПНА НОВАЯ ФУНКЦИЯ FLEX SSL'>ДОСТУПНА НОВАЯ ФУНКЦИЯ FLEX SSL</h3>
                                <h2>{formatNumber(roundToTwoDecimalPlaces(44 * USD))} UZS</h2>
                                <a href="/multi-domian-ssl">Проверить предложение</a>
                            </div>
                            <div className={`fade-up ${show ? 'show' : ''} slide-txt-box`}>
                                <p>
                                    <span>{doneSVG()}</span>
                                    <span>Защитите до 250 доменов</span>
                                </p>
                                <p>
                                    <span>{doneSVG()}</span>
                                    <span>Wildcard домены</span>
                                </p>
                                <p>
                                    <span>{doneSVG()}</span>
                                    <span>Единый и субдомены</span>
                                </p>
                                <p>
                                    <span>{doneSVG()}</span>
                                    <span>Публичные IP-адреса</span>
                                </p>
                            </div>
                            <div className={`fade-right ${show ? 'show' : ''}`}>
                                <svg className='flex-svg' role='img' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 339 133">
                                    <use xlinkHref='/skin.svg#flex-full'></use>
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='slide-three slides'>
                        <div className='sliders-back'>
                            <svg viewBox="0 0 181 144">
                                <use xlinkHref='/skin.svg#tt-symbol'></use>
                            </svg>
                        </div>
                        <div className='slide-txt-3 slide-txt'>
                            <div className={`fade-left ${show ? 'show' : ''}`}>
                                <svg className='tt-logo' xmlns='http://www.w3.org/2000/svg' viewBox="0 0 423 150">
                                    <use xlinkHref='/skin.svg#tt-logo'></use>
                                </svg>
                            </div>
                            <div className={`fade-up ${show ? 'show' : ''}`}>
                                <h3 title='СКАНЕР УЯЗВИМОСТЕЙ БЕЗ КОМПРОМИССОВ'>СКАНЕР УЯЗВИМОСТЕЙ БЕЗ КОМПРОМИССОВ</h3>
                                <h2>{formatNumber(roundToTwoDecimalPlaces(15 * USD))} UZS</h2>
                                <a href="/multi-domian-ssl">Проверить предложение</a>
                            </div>
                            <div className={`fade-up ${show ? 'show' : ''} slide-txt-box`}>
                                <p>
                                    <span>{ttSymbol()}</span>
                                    <span>OWASP Top 10 Сканирование</span>
                                </p>
                                <p>
                                    <span>{ttSymbol()}</span>
                                    <span>Многостраничные веб-приложения</span>
                                </p>
                                <p>
                                    <span>{ttSymbol()}</span>
                                    <span>REST API и сканирование на JavaScript</span>
                                </p>
                                <p>
                                    <span>{ttSymbol()}</span>
                                    <span>Установите его за несколько минут</span>
                                </p>
                            </div>
                        </div>
                    </div>
                </Slider>
            </div>
        </div>
    )
}