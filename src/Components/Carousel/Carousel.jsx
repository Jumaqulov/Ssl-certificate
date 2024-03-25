import React, { useState, useEffect } from 'react'
import Slider from 'react-slick';
import 'slick-carousel/slick/slick.css';
import 'slick-carousel/slick/slick-theme.css';
import { USD } from '../../Requests/request'

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
                <path d="M7.208 17.045V7.005L3.876 8.398v9.691c0 5.45 4.324 7.346 4.369 7.365l4.676 1.978 4.766-1.978c.002-.001.063-.02.14-.057l-4.906-2.03-2.703-1.154c-.126-.053-3.01-1.326-3.01-5.168zm1.587 0c0 2.353 1.89 3.178 1.909 3.186l2.217.935 4.284 1.74v-4.064l-4.284-1.74V14.89l4.284 1.75v-4.065l-4.284-1.74V8.624l4.284 1.75V6.31L12.92 4.57l-4.126 1.74v10.736zm13.329-8.647l-3.332-1.393v16.598l.954.4c1.155-1.13 2.378-3.012 2.378-5.914v-9.69zM12.153.44L6.322 2.876l-4.99 2.089L.066 5.5V18.09c0 2.87.847 5.534 2.472 7.705 1.187 1.585 2.82 2.92 4.378 3.57l5.24 2.198.764.334.838-.334 5.293-2.198c.101-.042 1.106-.465 2.302-1.408a11.736 11.736 0 0 0 1.911-1.9c1.77-2.21 2.668-4.89 2.668-7.967V5.5l-1.281-.535-5.01-2.09L13.793.455l-.838-.321h-.035V.104l-.768.335zm.768 29.194l-5.242-2.198C5.747 26.63 2.13 23.64 2.13 18.089V6.893l5.014-2.159h-.036l5.813-2.367 5.884 2.367h.025l5.04 2.159v11.196c0 3.052-1.051 5.21-2.23 6.677 0 0-.6.786-1.567 1.55-.968.763-1.803 1.105-1.84 1.12l-5.312 2.197z"></path>
            </svg>
        )
    }

    const ttSymbol = () => {
        return (
            <svg className='tt-symbol' role='img' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 181 144">
                <path d="M170.895 59.18c-6.31 16.971-15.373 29.092-22.045 36.406l-2.748-24.499 24.793-11.907zM143.149 44.73l34.646-16.087c-.79 8.568-2.401 16.405-4.536 23.504l-27.832 12.925-2.278-20.343z" /><path d="M180.363.673l-45.155 20.97L95.52 40.074v21.398l23.4-10.865 3.985 35.544 20.443 8.136-5.863-52.301 40.822-18.96L180.363.674zM122.093 95.624c-8.916 11.326-22.815 20.508-30.466 25.064 0 0-.827.39-1.127.39-.295 0-1.122-.39-1.122-.39-7.656-4.556-21.555-13.738-30.471-25.064l-17.96 8.34c15.092 21.712 43.89 36.491 45.164 37.138l4.389 2.225 4.389-2.225c1.274-.647 30.076-15.426 45.164-37.138l-17.96-8.34zM10.105 59.18c6.31 16.971 15.373 29.092 22.045 36.406l2.748-24.499L10.105 59.18zM37.851 44.73L3.205 28.642c.79 8.568 2.401 16.405 4.536 23.504l27.832 12.925 2.278-20.343z" /><path d="M45.792 21.643L.637.673l2.054 22.354 40.823 18.959-5.863 52.301 20.443-8.136 3.984-35.544 23.4 10.865V40.074L45.793 21.643zM90.5 33.231l15.07-11.036 15.073-11.047S100.18 2.446 90.5 2.446c-9.681 0-30.143 8.702-30.143 8.702l15.074 11.047L90.5 33.23z" />
            </svg>
        )
    }

    const doneSVG = () => {
        return (
            <svg className='slide-txt-small-svg' role='img' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 88 88">
                <path style={{ stroke: 'none', fill: '#dc8510' }} d="M.195 44C.195 68.192 19.808 87.805 44 87.805S87.805 68.192 87.805 44 68.192.195 44 .195.195 19.808.195 44zm60.979-17.522 6.919 6.89-30.504 30.344-.02-.03-.03.03-3.883-3.912-2.987-2.977.02-.02-8.592-8.661 6.92-6.89 8.591 8.672 23.566-23.446z" />
            </svg>
        )
    }

    function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
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
                                <path d="M7.208 17.045V7.005L3.876 8.398v9.691c0 5.45 4.324 7.346 4.369 7.365l4.676 1.978 4.766-1.978c.002-.001.063-.02.14-.057l-4.906-2.03-2.703-1.154c-.126-.053-3.01-1.326-3.01-5.168zm1.587 0c0 2.353 1.89 3.178 1.909 3.186l2.217.935 4.284 1.74v-4.064l-4.284-1.74V14.89l4.284 1.75v-4.065l-4.284-1.74V8.624l4.284 1.75V6.31L12.92 4.57l-4.126 1.74v10.736zm13.329-8.647l-3.332-1.393v16.598l.954.4c1.155-1.13 2.378-3.012 2.378-5.914v-9.69zM12.153.44L6.322 2.876l-4.99 2.089L.066 5.5V18.09c0 2.87.847 5.534 2.472 7.705 1.187 1.585 2.82 2.92 4.378 3.57l5.24 2.198.764.334.838-.334 5.293-2.198c.101-.042 1.106-.465 2.302-1.408a11.736 11.736 0 0 0 1.911-1.9c1.77-2.21 2.668-4.89 2.668-7.967V5.5l-1.281-.535-5.01-2.09L13.793.455l-.838-.321h-.035V.104l-.768.335zm.768 29.194l-5.242-2.198C5.747 26.63 2.13 23.64 2.13 18.089V6.893l5.014-2.159h-.036l5.813-2.367 5.884 2.367h.025l5.04 2.159v11.196c0 3.052-1.051 5.21-2.23 6.677 0 0-.6.786-1.567 1.55-.968.763-1.803 1.105-1.84 1.12l-5.312 2.197z"></path>
                            </svg>
                        </div>
                        <div className='slide-txt-1 slide-txt'>
                            <div className={`fade-left ${show ? 'show' : ''}`}>
                                <svg className='slide-txt-big-svg' role='img' xmlns="http://www.w3.org/2000/svg" viewBox='0 0 200 88'>
                                    <path d="M19.087 40.577h-8.018v3.776h3.314v4.538c-.382.192-1.273.32-2.389.32-3.982 0-6.756-2.637-6.756-7.08 0-4.703 3.06-7.04 7.107-7.04 2.359 0 3.83.423 5.014.943l1.022-3.894c-1.054-.506-3.198-1.046-5.972-1.046-7.043 0-12.218 4.062-12.25 11.292-.032 3.156 1.047 5.99 3.016 7.838 1.967 1.9 4.804 2.882 8.723 2.882 2.838 0 5.683-.696 7.189-1.204V40.577zM36.09 39.756h-7.932v-4.428h8.41v-3.997H23.316v21.558h13.699V48.89h-8.857v-5.138h7.931v-3.997zM44.93 52.881h4.843V35.432h5.885v-4.109H39.142v4.11h5.789V52.88z"></path><path d="M146.43 35.701h.61c.846 0 1.54.318 1.54 1.12 0 .84-.694 1.145-1.478 1.145-.297 0-.501 0-.672-.024v-2.24zm0-3.141c.153-.023.375-.047.763-.047.81 0 1.266.32 1.266.925 0 .592-.504.985-1.441.985h-.588V32.56zm-1.762 6.581c.398.057 1.052.114 1.923.114 1.522 0 2.47-.252 3.045-.696.49-.388.82-.948.82-1.666 0-1.027-.67-1.708-1.573-1.954v-.023c.935-.328 1.338-.992 1.338-1.702 0-.723-.393-1.259-.933-1.548-.565-.338-1.229-.441-2.317-.441-.891 0-1.836.069-2.303.163v7.753zM156.25 34.418h-2.91v-1.77h3.085v-1.406h-4.847v7.877h5.01v-1.407h-3.248v-1.888h2.91v-1.406zM160.07 39.119h4.903v-1.407h-3.142V31.22h-1.762v7.899zM170.582 34.418h-2.907v-1.77h3.082v-1.406h-4.844v7.877h5.01v-1.407h-3.248v-1.888h2.907v-1.406zM178.6 34.66h-2.952v1.396h1.212v1.656c-.139.072-.464.119-.874.119-1.456 0-2.47-.965-2.47-2.596 0-1.797 1.118-2.705 2.598-2.705.864 0 1.41.163 1.846.365l.38-1.404c-.39-.177-1.184-.368-2.2-.368-2.577 0-4.49 1.432-4.5 4.205-.012 1.163.388 2.197 1.113 2.868.728.686 1.765 1.041 3.199 1.041 1.038 0 2.092-.251 2.647-.434V34.66zM182.05 35.84l.468-1.708c.13-.511.247-1.13.365-1.62h.023c.118.49.259 1.096.4 1.585l.49 1.742h-1.747zm2.005 1.287l.61 2.014h1.922l-2.45-7.921h-2.344l-2.416 7.921h1.853l.563-2.014h2.262zM187.59 39.119h4.905v-1.407h-3.144V31.22h-1.762v7.899zM151.158 48.637h-2.953v1.397h1.214v1.655c-.141.072-.467.119-.876.119-1.456 0-2.47-.965-2.47-2.596 0-1.797 1.12-2.705 2.598-2.705.864 0 1.409.163 1.848.365l.378-1.404c-.39-.177-1.185-.367-2.201-.367-2.577 0-4.487 1.43-4.499 4.205-.012 1.162.387 2.196 1.113 2.867.728.686 1.764 1.041 3.198 1.041 1.039 0 2.093-.251 2.65-.434v-4.143zM157.197 48.395h-2.91v-1.77h3.085V45.22h-4.846v7.877h5.009v-1.407h-3.248v-1.887h2.91v-1.407zM160.146 53.118h1.762v-6.492h2.159v-1.407h-6.043v1.407h2.122v6.492zM168.756 53.118h1.762v-6.492h2.156v-1.407h-6.04v1.407h2.122v6.492zM175.414 46.55c.123-.026.357-.06.772-.06.785.012 1.256.377 1.256 1.11 0 .696-.503 1.145-1.357 1.145h-.671V46.55zm-1.762 6.568h1.762v-3.084h.515c.694.012 1.02.278 1.222 1.256.224.967.407 1.606.535 1.828h1.821c-.15-.303-.397-1.327-.641-2.21-.2-.724-.504-1.25-1.051-1.472v-.034c.676-.247 1.389-.94 1.389-1.955 0-.733-.257-1.275-.723-1.64-.56-.435-1.365-.605-2.485-.605-.92 0-1.772.069-2.344.16v7.756zM180.443 45.197v4.415c0 2.52 1.152 3.602 3.121 3.602 2.044 0 3.26-1.142 3.26-3.578v-4.44h-1.762v4.556c0 1.4-.51 2.056-1.44 2.056-.906 0-1.417-.694-1.417-2.056v-4.555h-1.762zM187.957 52.753c.44.237 1.308.461 2.216.461 2.223 0 3.205-1.08 3.205-2.406 0-1.132-.631-1.87-1.998-2.396-1.081-.392-1.555-.62-1.555-1.13 0-.417.4-.775 1.219-.775.8 0 1.34.227 1.646.383l.385-1.407c-.452-.202-1.086-.382-1.994-.382-1.92 0-3.018.99-3.018 2.337 0 1.167.837 1.905 2.15 2.369 1.006.345 1.404.631 1.404 1.132 0 .523-.46.869-1.33.869-.783 0-1.503-.25-1.972-.501l-.358 1.446zM195.92 53.118h1.762v-6.492h2.16v-1.407h-6.044v1.407h2.122v6.492z"></path><path d="M83.37 46.87V19.286l-9.157 3.827V49.74c0 14.976 11.882 20.183 12.005 20.235l12.847 5.436 13.096-5.436c.005-.002.173-.054.383-.155l-13.479-5.577-7.425-3.171c-.346-.146-8.27-3.645-8.27-14.202zm4.358 0c0 6.465 5.195 8.733 5.247 8.755l6.09 2.57 11.771 4.782v-11.17l-11.77-4.782V40.95l11.77 4.81V34.59l-11.77-4.782v-6.075l11.77 4.81v-11.17l-11.77-4.782-11.338 4.782V46.87zm36.624-23.757l-9.155-3.827v45.603l2.623 1.098c3.173-3.102 6.532-8.274 6.532-16.247V23.113zM96.955 1.244L80.935 7.94l-13.713 5.74-3.472 1.471v34.59c0 7.887 2.324 15.206 6.79 21.17 3.263 4.356 7.75 8.023 12.03 9.807l14.395 6.041 2.1.918 2.305-.918 14.542-6.038c.279-.116 3.04-1.279 6.325-3.87 2.936-2.317 4.837-4.686 5.251-5.222 4.864-6.068 7.33-13.434 7.33-21.888V15.15l-3.52-1.47-13.767-5.74-16.065-6.656-2.305-.881h-.096V.324l-2.11.92zm2.11 80.216l-14.401-6.041c-5.309-2.211-15.246-10.424-15.246-25.68V18.978l13.775-5.932h-.099l15.971-6.502 16.169 6.502h.069l13.846 5.932V49.74c0 8.385-2.887 14.318-6.127 18.345 0 0-1.646 2.162-4.304 4.26-2.66 2.097-4.955 3.034-5.056 3.076L99.065 81.46z" fill="currentColor"></path>
                                </svg>
                            </div>
                            <div className={`fade-up ${show ? 'show' : ''}`}>
                                <h3>НАДЕЖНЫЙ И СОВРЕМЕННЫЙ СПОСОБ ИДЕНТИФИКАЦИИ КОМПАНИИ</h3>
                                <h2>{formatNumber(49 * USD)} UZS</h2>
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
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 25 32">
                                <path d="M7.725 1.718A8.037 8.037 0 0 1 12.503.125c1.934 0 3.868.683 5.233 2.048 1.706 1.479 2.73 3.754 2.844 6.03l-3.754-1.707c-.455-1.252-1.48-2.162-2.73-2.617-1.138-.455-2.39-.455-3.413.114-1.365.569-2.39 1.82-2.73 3.185-.114.455-.114.91-.228 1.365 1.479-.455 2.73-1.365 4.323-1.479 1.024-.113 1.934.114 2.844.57l7.167 3.07c1.592.797 2.616 2.617 2.502 4.437-.227 3.3-.568 6.826-2.275 9.784-1.251 2.275-3.299 3.867-5.346 5.233-1.366 1.023-3.072 1.82-4.892 1.706-1.934-.228-3.527-1.251-5.006-2.389-1.25-.91-2.502-1.934-3.526-3.185a15.747 15.747 0 0 1-2.048-4.437c-.682-2.161-.91-4.436-1.024-6.712-.113-1.365.456-2.73 1.366-3.64.796-.682 1.82-1.024 2.616-1.365.114-1.024 0-2.048.114-3.072.341-2.047 1.479-4.095 3.185-5.346m4.095 8.418c-.34 0-.568.228-.91.341-2.161 1.024-4.436 1.934-6.598 2.958a1.235 1.235 0 0 0-.91.91c-.114.341 0 .683 0 1.024.114 1.934.341 3.868.91 5.802.342 1.251.91 2.502 1.707 3.526 1.137 1.251 2.502 2.162 3.754 3.072.796.568 1.706 1.137 2.73 1.137s1.934-.569 2.73-1.137c1.138-.797 2.275-1.593 3.3-2.617 1.023-1.024 1.706-2.389 2.16-3.754.114-.569-.227-1.024-.682-1.251-2.389-1.024-4.778-2.162-7.167-3.185a.725.725 0 0 0-.682 0c-.57.227-1.138.455-1.707.796-.227.114-.341.341-.227.682 0 .57.227 1.138.455 1.707.682 1.251 2.161 1.82 3.413 2.389.34.113.455.682.113.91-.341.341-.796.569-1.137.91-.342.227-.797.114-1.138-.114-.682-.341-1.365-.91-1.934-1.365a5.037 5.037 0 0 1-1.365-1.706c-.455-1.024-.682-2.162-.91-3.3 0-.34-.114-.796 0-1.137 0-.341.341-.455.569-.569.91-.455 1.706-.796 2.503-1.137a6.578 6.578 0 0 1 1.592-.57c.455 0 .91.115 1.252.342 2.275 1.024 4.55 2.048 6.825 2.958.341.227.91 0 .91-.455.114-.91.228-1.707.228-2.503.113-.569-.342-1.137-.91-1.365-2.276-1.024-4.665-2.048-6.94-3.071a2.294 2.294 0 0 0-1.934-.228z"></path>
                            </svg>
                        </div>
                        <div className='slide-txt-2 slide-txt'>
                            <div className={`fade-left ${show ? 'show' : ''}`}>
                                <h3>ДОСТУПНА НОВАЯ ФУНКЦИЯ FLEX SSL</h3>
                                <h2>{formatNumber(44 * USD)} UZS</h2>
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
                                    <path style={{ stroke: 'none', fill: '#ec9924' }} d="M10.285 31.25h9.844c4.076 0 7.383 3.307 7.383 7.392v55.106c0 4.085-3.307 7.393-7.383 7.393h-9.844c-4.075 0-7.383-3.308-7.383-7.393V38.642c0-4.085 3.308-7.393 7.383-7.393z" /><path style={{ stroke: 'none', fill: '#ea8d11' }} d="M18.16 31.25h9.844c4.076 0 7.383 3.307 7.383 7.392v55.106c0 4.085-3.307 7.393-7.383 7.393H18.16c-4.075 0-7.382-3.308-7.382-7.393V38.642c0-4.085 3.307-7.393 7.382-7.393z" /><path style={{ stroke: 'none', fill: '#dc8510' }} d="M26.035 31.25h9.844c4.076 0 7.383 3.307 7.383 7.392v55.106c0 4.085-3.307 7.393-7.383 7.393h-9.844c-4.075 0-7.382-3.308-7.382-7.393V38.642c0-4.085 3.307-7.393 7.382-7.393z" /><path style={{ stroke: 'none', fill: '#d18010' }} d="M33.91 31.25h9.844c4.076 0 7.383 3.307 7.383 7.392v55.106c0 4.085-3.307 7.393-7.383 7.393h-9.843c-4.076 0-7.383-3.308-7.383-7.393V38.642c0-4.085 3.307-7.393 7.383-7.393z" /><path style={{ stroke: 'none', fill: '#ececec' }} d="m229.114 59.294-1.172 2.688h-.04l-1.19-2.668-1.172.67 1.802 2.342v.04l-2.816-.364v1.309l2.835-.374v.04l-1.82 2.342 1.092.699 1.25-2.707h.04l1.151 2.687 1.211-.699-1.85-2.303v-.04l2.903.355V62l-2.904.384v-.039l1.831-2.402-1.151-.65zM233.297 72.249c.69 0 1.113-.473 1.113-1.103 0-.65-.443-1.102-1.093-1.102-.65 0-1.112.453-1.112 1.102 0 .63.442 1.103 1.092 1.103zM242.954 68.558c0 .255-.02.482-.079.698-.315 1.073-1.388 1.772-2.56 1.772-1.88 0-2.834-1.457-2.834-3.219 0-1.929 1.073-3.366 2.874-3.366 1.31 0 2.264.827 2.52 1.83.06.198.079.473.079.67v1.615zm0-9.992v5.965h-.04c-.433-.748-1.427-1.417-2.893-1.417-2.343 0-3.997 1.86-3.977 4.764 0 2.648 1.456 4.519 3.78 4.519 1.565 0 2.736-.788 3.248-1.802h.03l.059 1.713h1.309c-.06-.61-.079-1.516-.079-2.303V58.566h-1.437zM251.39 64.423c2.215 0 3.081 1.85 3.081 3.308 0 1.929-1.339 3.337-3.12 3.337-1.821 0-3.12-1.428-3.12-3.308 0-1.634.954-3.337 3.16-3.337zm.05-1.29c-2.846 0-4.647 1.802-4.647 4.686 0 2.717 1.693 4.538 4.479 4.538 2.48 0 4.636-1.506 4.636-4.685 0-2.629-1.525-4.538-4.469-4.538zM258.31 72.308h1.438v-5.414c0-.276.039-.551.128-.797.255-.808.984-1.625 1.978-1.625 1.22 0 1.831 1.034 1.831 2.461v5.375h1.447v-5.542c0-.295.06-.59.148-.817.325-.797 1.171-1.477 2.264-1.477 1.545 0 2.284 1.034 2.284 2.757v5.079h1.447v-5.276c0-3.14-1.644-3.948-3.032-3.948-1.004 0-1.703.237-2.333.66-.433.285-.837.689-1.083 1.191h-.03c-.354-1.083-1.2-1.85-2.401-1.85-1.448 0-2.265.826-2.747 1.702h-.05l-.068-1.604h-1.3c.06.758.08 1.526.08 2.47v6.655zM279.051 69.217c0 .069-.04.246-.098.404-.276.728-1.044 1.447-2.245 1.447-.866 0-1.594-.483-1.594-1.497 0-1.683 2.087-1.988 3.937-1.949v1.595zm1.585 3.091c-.108-.63-.148-1.398-.148-2.195v-3.554c0-1.575-.61-3.425-3.346-3.425-1.172 0-2.245.334-2.895.856l.325.994c.561-.344 1.457-.56 2.323-.56 1.9 0 2.117 1.121 2.117 1.751v.158c-3.593-.02-5.345 1.329-5.345 3.544 0 1.112.827 2.48 2.598 2.48 1.32 0 2.324-.67 2.835-1.417h.05l.118 1.368h1.368zM284.377 59.294c-.423 0-.719.453-.719 1.054 0 .58.286 1.033.7 1.033.462 0 .757-.452.737-1.033 0-.6-.275-1.054-.718-1.054zm.718 13.014v-9.125h-1.437v9.125h1.437zM288.265 72.308h1.437v-5.394c0-.286.04-.562.118-.768.296-.906 1.201-1.664 2.353-1.664 1.654 0 2.235 1.201 2.235 2.648v5.178h1.437v-5.365c0-3.1-1.762-3.869-3.091-3.869-1.595 0-2.717.867-3.17 1.743h-.03l-.078-1.634h-1.29c.06.758.08 1.526.08 2.47v6.655zM299.34 72.249c.688 0 1.112-.473 1.112-1.103 0-.65-.443-1.102-1.093-1.102-.65 0-1.112.453-1.112 1.102 0 .63.443 1.103 1.092 1.103zM302.854 60.899v2.235h-1.438v1.29h1.438v4.911c0 1.053.147 1.86.57 2.363.355.453.906.708 1.694.708.65 0 1.171-.098 1.496-.236l-.079-1.26c-.206.06-.531.108-.974.108-.945 0-1.27-.63-1.27-1.742v-4.853h2.421v-1.29h-2.421v-2.677l-1.437.443zM308.996 72.308h1.437V58.566h-1.437v13.742zM319.746 68.558c0 .255-.02.482-.08.698-.314 1.073-1.387 1.772-2.559 1.772-1.88 0-2.835-1.457-2.835-3.219 0-1.929 1.073-3.366 2.875-3.366 1.31 0 2.264.827 2.52 1.83.059.198.079.473.079.67v1.615zm0-9.992v5.965h-.04c-.433-.748-1.427-1.417-2.894-1.417-2.333 0-3.996 1.86-3.977 4.764 0 2.648 1.457 4.519 3.78 4.519 1.565 0 2.737-.788 3.249-1.802h.03l.068 1.713h1.3c-.06-.61-.07-1.516-.07-2.303V58.566h-1.446z" /><path style={{ stroke: 'none', fill: '#ececec' }} d="M225.294 107.884v12.964h1.437v-12.964h-1.437zM231.338 109.272c.296-.08.857-.138 1.605-.138 1.87 0 3.1.797 3.1 2.421 0 1.713-1.25 2.648-3.297 2.648-.571 0-1.034-.04-1.408-.128v-4.803zm-1.437 11.576h1.437v-5.414c.394.088.857.108 1.369.108 1.653 0 3.12-.472 3.917-1.417.561-.64.857-1.516.857-2.639 0-1.102-.364-1.998-.975-2.598-.699-.69-1.93-1.073-3.603-1.073-1.368 0-2.313.108-3.002.246v12.787zM248.329 117.757c0 .069-.04.246-.099.404-.266.728-1.033 1.447-2.244 1.447-.866 0-1.595-.483-1.595-1.497 0-1.683 2.097-1.988 3.938-1.949v1.595zm1.594 3.09c-.118-.62-.157-1.397-.157-2.194v-3.554c0-1.575-.61-3.426-3.337-3.426-1.172 0-2.245.335-2.904.857l.325.994c.56-.344 1.466-.561 2.333-.561 1.9 0 2.106 1.122 2.106 1.752v.158c-3.593-.02-5.335 1.329-5.335 3.543 0 1.113.817 2.481 2.589 2.481 1.329 0 2.323-.67 2.835-1.417h.05l.117 1.368h1.378zM259.078 117.097c0 .256-.02.483-.079.7-.315 1.072-1.388 1.771-2.559 1.771-1.88 0-2.835-1.457-2.835-3.219 0-1.93 1.073-3.366 2.874-3.366 1.31 0 2.264.827 2.52 1.83.06.198.08.473.08.67v1.614zm0-9.991v5.965h-.04c-.432-.748-1.427-1.417-2.893-1.417-2.343 0-3.997 1.86-3.977 4.764 0 2.648 1.457 4.518 3.78 4.518 1.565 0 2.736-.787 3.248-1.8h.03l.069 1.712h1.3c-.06-.61-.08-1.516-.08-2.304v-11.438h-1.437zM269.828 117.097c0 .256-.02.483-.08.7-.314 1.072-1.387 1.771-2.549 1.771-1.89 0-2.835-1.457-2.835-3.219 0-1.93 1.063-3.366 2.875-3.366 1.3 0 2.254.827 2.51 1.83.059.198.079.473.079.67v1.614zm0-9.991v5.965h-.04c-.433-.748-1.427-1.417-2.894-1.417-2.333 0-3.996 1.86-3.977 4.764 0 2.648 1.467 4.518 3.78 4.518 1.565 0 2.737-.787 3.249-1.8h.03l.068 1.712h1.3c-.05-.61-.07-1.516-.07-2.304v-11.438h-1.446zM274.435 120.848h1.447v-4.932c0-.285.039-.561.078-.787.227-1.26 1.073-2.166 2.264-2.166.227 0 .404.02.571.06v-1.3a1.818 1.818 0 0 0-.482-.05c-1.132 0-2.146.64-2.55 1.733h-.068l-.05-1.683h-1.28c.05.846.07 1.772.07 2.845v6.28zM281.276 115.64c.148-1.141.975-2.677 2.865-2.677 2.096 0 2.598 1.624 2.588 2.678h-5.453zm6.841 1.29c.02-.177.05-.472.05-.837 0-1.712-.71-4.42-3.879-4.42-2.992 0-4.469 2.265-4.469 5.1 0 2.352 1.546 4.134 4.705 4.134 1.635 0 2.639-.305 3.17-.58l-.256-1.123c-.56.226-1.329.394-2.667.394-1.86 0-3.475-.778-3.515-2.668h6.861zM289.525 120.247c.62.394 1.457.65 2.609.65 2.589 0 3.71-1.191 3.71-2.717 0-1.27-.728-2.018-2.43-2.589-1.487-.423-2.176-.748-2.176-1.457 0-.64.689-1.171 1.91-1.171 1.073 0 1.712.285 2.037.502l.374-1.21c-.462-.316-1.2-.582-2.362-.582-2.323 0-3.396 1.25-3.396 2.639 0 1.033.699 1.88 2.48 2.431 1.536.433 2.127.837 2.127 1.585 0 .709-.71 1.28-2.225 1.28-1.014 0-1.801-.325-2.244-.62l-.414 1.26zM297.213 120.247c.61.394 1.447.65 2.599.65 2.599 0 3.711-1.191 3.711-2.717 0-1.27-.728-2.018-2.431-2.589-1.487-.423-2.176-.748-2.176-1.457 0-.64.69-1.171 1.92-1.171 1.063 0 1.703.285 2.027.502l.375-1.21c-.453-.316-1.201-.582-2.363-.582-2.313 0-3.396 1.25-3.396 2.639 0 1.033.699 1.88 2.48 2.431 1.536.433 2.127.837 2.127 1.585 0 .709-.709 1.28-2.225 1.28-1.014 0-1.801-.325-2.244-.62l-.404 1.26z" /><path style={{ stroke: 'none', fill: '#dc8513' }} d="M185.013 114.43c0 7.885 6.389 14.273 14.274 14.273 7.885 0 14.273-6.388 14.273-14.273s-6.388-14.274-14.273-14.274-14.274 6.389-14.274 14.274zm19.865-5.71 2.254 2.245-9.932 9.883s-.01.01-.02 0l-1.26-1.27s0-.01-.965-.974l-2.805-2.826 2.254-2.244 2.806 2.825 7.668-7.639z" /><path style={{ stroke: 'none', fill: '#464646' }} d="M43.833 31.25h96.312c5.207 0 9.43 4.222 9.43 9.43v51.03c0 5.208-4.223 9.43-9.43 9.43H43.833c-5.207 0-9.43-4.222-9.43-9.43V40.68c0-5.208 4.223-9.43 9.43-9.43z" /><path style={{ stroke: 'none', fill: '#ececec' }} d="M62.674 82.664V62.238h5.473V57.62h-5.522v-1.467c0-3.514 1.083-6.506 4.233-6.506 1.132 0 2.018.236 2.687.531l.463-4.587c-1.034-.325-2.373-.561-4.076-.561-2.175 0-4.656.61-6.467 2.215-2.097 1.89-2.953 5.453-2.953 9.145v1.23h-3.406v4.617h3.406v20.426h6.162zM72.164 82.664h6.162V45.789h-6.162v36.875zM90.03 67.1c.256-2.49 1.93-5.925 5.887-5.925 4.282 0 5.325 3.681 5.266 5.926H90.03zm16.961 4.48c.108-.571.207-1.516.207-2.707 0-5.405-2.697-12.177-10.917-12.177-8.111 0-12.344 6.615-12.344 13.476 0 8.397 4.794 13.25 13.023 13.25 3.652 0 6.664-.65 8.84-1.487l-.935-4.4c-1.92.807-4.046 1.27-7.019 1.27-4.065 0-7.658-2.185-7.816-7.225h16.961zM109.295 57.591l8.416 12.305-8.722 12.768h7.019l2.894-4.991c.827-1.398 1.546-2.628 2.274-4.075h.098c.729 1.397 1.448 2.736 2.274 4.075l3.101 4.99h7.176l-8.574-13.023 8.417-12.049h-6.92l-2.786 4.637c-.719 1.28-1.447 2.57-2.166 3.957h-.157c-.719-1.28-1.447-2.52-2.274-3.859l-2.993-4.735h-7.077z" /><path style={{ stroke: 'none', fill: '#464646' }} d="M163.357 66.687c0-1.083.886-1.969 1.969-1.969 1.082 0 1.968.886 1.968 1.97a1.975 1.975 0 0 1-1.968 1.968 1.975 1.975 0 0 1-1.97-1.969zM173.2 66.687c0-1.083.887-1.969 1.97-1.969 1.082 0 1.968.886 1.968 1.97a1.975 1.975 0 0 1-1.969 1.968 1.975 1.975 0 0 1-1.968-1.969zM162.372 107.047c0-1.083.886-1.969 1.97-1.969 1.082 0 1.968.886 1.968 1.969a1.975 1.975 0 0 1-1.969 1.969 1.975 1.975 0 0 1-1.969-1.97zM172.216 110.984c0-1.082.886-1.968 1.969-1.968 1.083 0 1.969.886 1.969 1.968a1.975 1.975 0 0 1-1.969 1.97 1.975 1.975 0 0 1-1.969-1.97zM152.529 103.11c0-1.083.886-1.97 1.968-1.97 1.083 0 1.97.887 1.97 1.97a1.975 1.975 0 0 1-1.97 1.968 1.975 1.975 0 0 1-1.968-1.969zM162.372 28.296c0 1.083.886 1.969 1.97 1.969a1.975 1.975 0 0 0 1.968-1.969 1.975 1.975 0 0 0-1.969-1.968 1.975 1.975 0 0 0-1.969 1.968zM172.216 24.359c0 1.083.886 1.969 1.969 1.969a1.975 1.975 0 0 0 1.969-1.97 1.975 1.975 0 0 0-1.969-1.968 1.975 1.975 0 0 0-1.969 1.969zM152.529 32.234c0 1.083.886 1.969 1.968 1.969a1.975 1.975 0 0 0 1.97-1.97 1.975 1.975 0 0 0-1.97-1.968 1.975 1.975 0 0 0-1.968 1.969zM153.513 66.687c0-1.083.886-1.969 1.969-1.969 1.083 0 1.969.886 1.969 1.97a1.975 1.975 0 0 1-1.97 1.968 1.975 1.975 0 0 1-1.968-1.969z" /><path style={{ stroke: '#464646', strokeWidth: '2', strokeLinejoin: "round", strokeLinecap: "round", fill: "none" }} d="M199.287 1.718h118.126c9.519 0 17.226 7.708 17.226 17.227s-7.707 17.226-17.226 17.226H199.287c-9.52 0-17.227-7.707-17.227-17.226 0-9.52 7.708-17.227 17.227-17.227zM199.287 48.968h118.126c9.519 0 17.226 7.708 17.226 17.227s-7.707 17.227-17.226 17.227H199.287c-9.52 0-17.227-7.708-17.227-17.227s7.708-17.227 17.227-17.227zM199.287 97.203h118.126c9.519 0 17.226 7.708 17.226 17.227s-7.707 17.226-17.226 17.226H199.287c-9.52 0-17.227-7.707-17.227-17.226 0-9.52 7.708-17.227 17.227-17.227z" /><path style={{ stroke: 'none', fill: '#dc8513' }} d="M185.013 66.195c0 7.885 6.389 14.274 14.274 14.274 7.885 0 14.273-6.39 14.273-14.274 0-7.885-6.388-14.274-14.273-14.274s-14.274 6.39-14.274 14.274zm19.865-5.71 2.254 2.245-9.932 9.883s-.01.01-.02 0l-1.26-1.27s0-.01-.965-.974l-2.805-2.825 2.254-2.245 2.806 2.825 7.668-7.638zM185.013 18.945c0 7.885 6.389 14.273 14.274 14.273 7.885 0 14.273-6.388 14.273-14.273S207.172 4.67 199.287 4.67s-14.274 6.389-14.274 14.274zm19.865-5.71 2.254 2.245-9.932 9.883s-.01.01-.02 0l-1.26-1.27s0-.01-.965-.975l-2.805-2.825 2.254-2.244 2.806 2.825 7.668-7.639z" /><path style={{ stroke: 'none', fill: '#ececec' }} d="M231.988 20.295c0 .256-.02.483-.079.7-.325 1.072-1.388 1.771-2.56 1.771-1.88 0-2.834-1.457-2.834-3.219 0-1.93 1.073-3.366 2.874-3.366 1.31 0 2.264.826 2.52 1.83.06.197.079.473.079.67v1.614zm0-9.991v5.965h-.04c-.442-.748-1.427-1.417-2.894-1.417-2.342 0-3.996 1.86-3.976 4.764 0 2.648 1.456 4.518 3.78 4.518 1.565 0 2.726-.787 3.238-1.801h.04l.059 1.713h1.309c-.06-.61-.079-1.516-.079-2.313v-11.43h-1.437zM240.424 16.16c2.205 0 3.081 1.852 3.081 3.299 0 1.939-1.339 3.346-3.12 3.346-1.821 0-3.12-1.427-3.12-3.307 0-1.634.954-3.337 3.16-3.337zm.05-1.298c-2.846 0-4.647 1.81-4.647 4.685 0 2.717 1.693 4.548 4.47 4.548 2.49 0 4.645-1.506 4.645-4.686 0-2.628-1.525-4.547-4.469-4.547zM247.344 24.046h1.438v-5.414c0-.276.039-.552.127-.798.256-.817.985-1.634 1.98-1.634 1.21 0 1.83 1.044 1.83 2.471v5.375h1.437v-5.542c0-.296.07-.59.158-.817a2.446 2.446 0 0 1 2.264-1.487c1.545 0 2.284 1.044 2.284 2.766v5.08h1.437V18.76c0-3.13-1.634-3.938-3.022-3.938-1.004 0-1.703.227-2.333.65-.433.295-.837.699-1.083 1.2h-.04c-.344-1.082-1.19-1.85-2.391-1.85-1.448 0-2.265.827-2.747 1.703h-.05l-.068-1.604h-1.3c.06.748.08 1.525.08 2.47v6.655zM268.075 20.955c0 .059-.039.246-.088.403-.276.729-1.044 1.447-2.254 1.447-.857 0-1.585-.482-1.585-1.506 0-1.673 2.087-1.978 3.927-1.939v1.595zm1.595 3.09c-.108-.63-.148-1.407-.148-2.204v-3.544c0-1.575-.61-3.435-3.346-3.435-1.172 0-2.245.344-2.904.866l.334.994c.552-.345 1.457-.561 2.323-.561 1.9 0 2.107 1.122 2.107 1.752v.148c-3.583-.01-5.335 1.339-5.335 3.553 0 1.113.817 2.481 2.598 2.481 1.32 0 2.314-.68 2.835-1.417h.05l.118 1.368h1.368zM273.41 11.022c-.423 0-.728.463-.728 1.064 0 .57.296 1.033.71 1.033.452 0 .757-.462.737-1.033 0-.6-.285-1.064-.718-1.064zm.72 13.024V14.92h-1.448v9.125h1.447zM277.3 24.046h1.436v-5.404c0-.276.04-.552.118-.758a2.47 2.47 0 0 1 2.353-1.674c1.654 0 2.235 1.21 2.235 2.658v5.178h1.437V18.68c0-3.1-1.762-3.869-3.091-3.869-1.595 0-2.717.867-3.17 1.733h-.03l-.088-1.624h-1.28c.06.748.08 1.525.08 2.47v6.655zM288.373 23.987c.69 0 1.113-.473 1.113-1.103 0-.65-.443-1.102-1.093-1.102-.65 0-1.112.453-1.112 1.102 0 .63.443 1.103 1.092 1.103zM291.888 12.637v2.225h-1.438v1.299h1.438v4.902c0 1.063.147 1.87.57 2.363.345.462.906.718 1.694.718.65 0 1.171-.098 1.496-.236l-.079-1.26c-.207.05-.531.108-.974.108-.945 0-1.27-.63-1.27-1.742V16.16h2.421v-1.3h-2.421v-2.667l-1.437.443zM298.03 24.046h1.437V10.304h-1.437v13.742zM308.78 20.295c0 .256-.02.483-.08.7-.314 1.072-1.387 1.771-2.559 1.771-1.88 0-2.835-1.457-2.835-3.219 0-1.93 1.073-3.366 2.875-3.366 1.31 0 2.264.826 2.52 1.83.059.197.079.473.079.67v1.614zm0-9.991v5.965h-.04c-.433-.748-1.427-1.417-2.894-1.417-2.343 0-3.996 1.86-3.977 4.764 0 2.648 1.457 4.518 3.78 4.518 1.565 0 2.737-.787 3.249-1.801h.03l.068 1.713h1.3c-.06-.61-.08-1.516-.08-2.313v-11.43h-1.436z" />
                                </svg>
                            </div>
                        </div>
                    </div>
                    <div className='slide-three slides'>
                        <div className='sliders-back'>
                            <svg xmlns='http://www.w3.org/2000/svg' viewBox="0 0 181 144">
                                <path d="M170.895 59.18c-6.31 16.971-15.373 29.092-22.045 36.406l-2.748-24.499 24.793-11.907zM143.149 44.73l34.646-16.087c-.79 8.568-2.401 16.405-4.536 23.504l-27.832 12.925-2.278-20.343z" /><path d="M180.363.673l-45.155 20.97L95.52 40.074v21.398l23.4-10.865 3.985 35.544 20.443 8.136-5.863-52.301 40.822-18.96L180.363.674zM122.093 95.624c-8.916 11.326-22.815 20.508-30.466 25.064 0 0-.827.39-1.127.39-.295 0-1.122-.39-1.122-.39-7.656-4.556-21.555-13.738-30.471-25.064l-17.96 8.34c15.092 21.712 43.89 36.491 45.164 37.138l4.389 2.225 4.389-2.225c1.274-.647 30.076-15.426 45.164-37.138l-17.96-8.34zM10.105 59.18c6.31 16.971 15.373 29.092 22.045 36.406l2.748-24.499L10.105 59.18zM37.851 44.73L3.205 28.642c.79 8.568 2.401 16.405 4.536 23.504l27.832 12.925 2.278-20.343z" /><path d="M45.792 21.643L.637.673l2.054 22.354 40.823 18.959-5.863 52.301 20.443-8.136 3.984-35.544 23.4 10.865V40.074L45.793 21.643zM90.5 33.231l15.07-11.036 15.073-11.047S100.18 2.446 90.5 2.446c-9.681 0-30.143 8.702-30.143 8.702l15.074 11.047L90.5 33.23z" />
                            </svg>
                        </div>
                        <div className='slide-txt-3 slide-txt'>
                            <div className={`fade-left ${show ? 'show' : ''}`}>
                                <svg className='tt-logo' xmlns='http://www.w3.org/2000/svg' viewBox="0 0 423 150">
                                    <path d="M218.738 90.467h-14.956l6.104-10.27h33.593v10.27h-11.503v28.997h-13.238V90.467zM269 91.618c-.9-.81-2.249-1.212-4.043-1.212h-4.825v9.201h4.825c1.794 0 3.142-.401 4.043-1.204.894-.803 1.34-1.939 1.34-3.393 0-1.461-.446-2.59-1.34-3.392zm-5.278 17.97h-3.59v9.876h-13.237V80.198h18.902c3.628 0 6.786.598 9.482 1.802 2.688 1.196 4.763 2.915 6.225 5.157 1.454 2.242 2.188 4.862 2.188 7.853 0 2.802-.636 5.248-1.908 7.346-1.273 2.098-3.105 3.756-5.498 4.99l8.247 12.118h-14.14l-6.67-9.876zM293.393 115.48c-3.362-3.256-5.051-7.815-5.051-13.684V80.198h13.238v21.204c0 2.878.515 4.975 1.544 6.286 1.03 1.302 2.515 1.96 4.461 1.96 1.939 0 3.43-.658 4.46-1.96 1.023-1.31 1.538-3.408 1.538-6.286V80.198h13.01v21.598c0 5.869-1.681 10.428-5.043 13.684-3.363 3.257-8.058 4.877-14.079 4.877-6.02 0-10.715-1.62-14.078-4.877zM337.786 119.267c-3.09-.727-6.71-2.363-8.686-3.598l5.346-8.996c1.871 1.083 3.969 1.954 6.286 2.612 2.317.652 4.544.977 6.672.977 1.833 0 3.143-.174 3.923-.53.787-.356 1.181-.886 1.181-1.598 0-.825-.515-1.439-1.545-1.855-1.022-.409-2.719-.856-5.074-1.34-3.029-.637-5.55-1.318-7.573-2.053-2.014-.727-3.779-1.923-5.27-3.59-1.492-1.658-2.242-3.915-2.242-6.754 0-2.47.689-4.71 2.075-6.733 1.378-2.014 3.446-3.605 6.195-4.763 2.749-1.159 6.088-1.742 10.011-1.742 2.696 0 5.339.288 7.937.87 2.597.576 6.119 2.242 8.103 3.363l-5.21 8.777c-3.855-1.946-7.498-2.915-10.944-2.915-3.4 0-5.104.825-5.104 2.469 0 .787.508 1.37 1.522 1.764 1.008.394 2.666.818 4.991 1.265 2.984.56 5.513 1.204 7.573 1.93a13.205 13.205 0 015.354 3.568c1.515 1.643 2.272 3.885 2.272 6.725 0 2.468-.697 4.702-2.075 6.702-1.386 2.007-3.453 3.59-6.202 4.77-2.75 1.182-6.081 1.765-10.012 1.765-3.249 0-6.422-.363-9.504-1.09zM380.93 90.467h-14.965l6.104-10.27h33.594v10.27h-11.496v28.997H380.93V90.467z" fill="#9d6e40" />
                                    <path d="M268.667 43.908c-.893-.81-2.241-1.212-4.036-1.212h-4.824v9.201h4.824c1.795 0 3.143-.401 4.036-1.204.901-.803 1.348-1.939 1.348-3.393 0-1.461-.447-2.59-1.348-3.392zm-5.27 17.97h-3.59v9.876h-13.238V32.488h18.902c3.628 0 6.786.598 9.482 1.802 2.688 1.196 4.763 2.916 6.225 5.157 1.454 2.242 2.188 4.862 2.188 7.853 0 2.802-.636 5.248-1.908 7.346-1.272 2.098-3.105 3.756-5.498 4.99l8.247 12.118h-14.139l-6.672-9.876zM293.068 67.77c-3.37-3.256-5.052-7.815-5.052-13.684V32.488h13.238v21.204c0 2.878.515 4.975 1.545 6.286 1.022 1.302 2.514 1.961 4.453 1.961 1.946 0 3.438-.659 4.46-1.961 1.03-1.31 1.545-3.408 1.545-6.286V32.488h13.01v21.598c0 5.869-1.68 10.428-5.043 13.684-3.37 3.257-8.058 4.877-14.078 4.877s-10.716-1.62-14.078-4.877zM332.326 32.488h13.238v28.997h17.72v10.269h-30.958V32.488zM386.337 57.509v14.245h-13.238v-14.42l-14.805-24.846h13.964l8.02 13.578 8.08-13.578h12.784l-14.805 25.02zM218.413 42.757h-14.957l6.104-10.27h33.586v10.27H231.65v28.997h-13.237V42.757z" fill="#ba8d5a" />
                                    <g fill="#ba8d5a">
                                        <path d="M126.158 99.562c-9.224 11.715-23.597 21.22-31.518 25.93 0 0-.856.401-1.167.401v23.022l4.544-2.302c1.318-.667 31.11-15.957 46.726-38.418l-18.585-8.633zM176.648 61.863c-6.528 17.554-15.911 30.095-22.81 37.66l-2.84-25.346 25.65-12.314zM147.938 46.907l35.843-16.638c-.817 8.868-2.484 16.97-4.687 24.317L150.3 67.952l-2.363-21.045z" />
                                        <path d="M186.44 1.332L139.73 23.03 98.667 42.098v22.136l24.211-11.246L127 89.762l21.144 8.421-6.059-54.109L184.32 24.46l2.12-23.128zM93.473 3.165v31.852l15.593-11.42 15.593-11.428s-21.167-9.004-31.186-9.004z" /></g>
                                    <g fill="#9d6e40">
                                        <path d="M93.072 125.492c-7.921-4.71-22.303-14.215-31.527-25.93l-18.576 8.633c15.608 22.461 45.408 37.751 46.725 38.418l4.537 2.302v-23.022c-.31 0-1.16-.401-1.16-.401zM11.056 61.863c6.528 17.554 15.911 30.095 22.81 37.66l2.84-25.346-25.65-12.314zM39.766 46.907L3.922 30.269c.818 8.868 2.484 16.97 4.688 24.317l28.793 13.366 2.363-21.045z" />
                                        <path d="M47.982 23.029L1.264 1.332 3.392 24.46 45.62 44.074l-6.058 54.11 21.144-8.422 4.12-36.774 24.21 11.246V42.098l-41.053-19.07zM63.045 12.17l15.6 11.427 15.586 11.42V3.165c-10.012 0-31.186 9.004-31.186 9.004z" />
                                    </g>
                                    <g fill="#9d6e3d"><path d="M406.08 28.05v.901h2.302v7.55h1.113v-7.55h2.295v-.901h-5.71zM420.794 28.11l-3.097 6.937-3.098-6.937h-1.189v8.391h1.106v-6.263l2.802 6.263h.772l2.787-6.247V36.5h1.106v-8.39h-1.19z" /></g>
                                </svg>
                            </div>
                            <div className={`fade-up ${show ? 'show' : ''}`}>
                                <h3>СКАНЕР УЯЗВИМОСТЕЙ БЕЗ КОМПРОМИССОВ</h3>
                                <h2>{formatNumber(15 * USD)} UZS</h2>
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