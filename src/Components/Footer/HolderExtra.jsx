import React from 'react'
import { USD } from '../../Requests/request'

export default function HolderExtra() {
    function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }
    return (
        <div className='holder-extra'>
            <div className="left">
                <div className="holder-logo">
                    <a href="/" aria-label='GetLEI'>
                        <svg role='img' xmlns="http://www.w3.org/2000/svg" viewBox='0 0 200 88'>
                            <path d="M19.087 40.577h-8.018v3.776h3.314v4.538c-.382.192-1.273.32-2.389.32-3.982 0-6.756-2.637-6.756-7.08 0-4.703 3.06-7.04 7.107-7.04 2.359 0 3.83.423 5.014.943l1.022-3.894c-1.054-.506-3.198-1.046-5.972-1.046-7.043 0-12.218 4.062-12.25 11.292-.032 3.156 1.047 5.99 3.016 7.838 1.967 1.9 4.804 2.882 8.723 2.882 2.838 0 5.683-.696 7.189-1.204V40.577zM36.09 39.756h-7.932v-4.428h8.41v-3.997H23.316v21.558h13.699V48.89h-8.857v-5.138h7.931v-3.997zM44.93 52.881h4.843V35.432h5.885v-4.109H39.142v4.11h5.789V52.88z"></path><path d="M146.43 35.701h.61c.846 0 1.54.318 1.54 1.12 0 .84-.694 1.145-1.478 1.145-.297 0-.501 0-.672-.024v-2.24zm0-3.141c.153-.023.375-.047.763-.047.81 0 1.266.32 1.266.925 0 .592-.504.985-1.441.985h-.588V32.56zm-1.762 6.581c.398.057 1.052.114 1.923.114 1.522 0 2.47-.252 3.045-.696.49-.388.82-.948.82-1.666 0-1.027-.67-1.708-1.573-1.954v-.023c.935-.328 1.338-.992 1.338-1.702 0-.723-.393-1.259-.933-1.548-.565-.338-1.229-.441-2.317-.441-.891 0-1.836.069-2.303.163v7.753zM156.25 34.418h-2.91v-1.77h3.085v-1.406h-4.847v7.877h5.01v-1.407h-3.248v-1.888h2.91v-1.406zM160.07 39.119h4.903v-1.407h-3.142V31.22h-1.762v7.899zM170.582 34.418h-2.907v-1.77h3.082v-1.406h-4.844v7.877h5.01v-1.407h-3.248v-1.888h2.907v-1.406zM178.6 34.66h-2.952v1.396h1.212v1.656c-.139.072-.464.119-.874.119-1.456 0-2.47-.965-2.47-2.596 0-1.797 1.118-2.705 2.598-2.705.864 0 1.41.163 1.846.365l.38-1.404c-.39-.177-1.184-.368-2.2-.368-2.577 0-4.49 1.432-4.5 4.205-.012 1.163.388 2.197 1.113 2.868.728.686 1.765 1.041 3.199 1.041 1.038 0 2.092-.251 2.647-.434V34.66zM182.05 35.84l.468-1.708c.13-.511.247-1.13.365-1.62h.023c.118.49.259 1.096.4 1.585l.49 1.742h-1.747zm2.005 1.287l.61 2.014h1.922l-2.45-7.921h-2.344l-2.416 7.921h1.853l.563-2.014h2.262zM187.59 39.119h4.905v-1.407h-3.144V31.22h-1.762v7.899zM151.158 48.637h-2.953v1.397h1.214v1.655c-.141.072-.467.119-.876.119-1.456 0-2.47-.965-2.47-2.596 0-1.797 1.12-2.705 2.598-2.705.864 0 1.409.163 1.848.365l.378-1.404c-.39-.177-1.185-.367-2.201-.367-2.577 0-4.487 1.43-4.499 4.205-.012 1.162.387 2.196 1.113 2.867.728.686 1.764 1.041 3.198 1.041 1.039 0 2.093-.251 2.65-.434v-4.143zM157.197 48.395h-2.91v-1.77h3.085V45.22h-4.846v7.877h5.009v-1.407h-3.248v-1.887h2.91v-1.407zM160.146 53.118h1.762v-6.492h2.159v-1.407h-6.043v1.407h2.122v6.492zM168.756 53.118h1.762v-6.492h2.156v-1.407h-6.04v1.407h2.122v6.492zM175.414 46.55c.123-.026.357-.06.772-.06.785.012 1.256.377 1.256 1.11 0 .696-.503 1.145-1.357 1.145h-.671V46.55zm-1.762 6.568h1.762v-3.084h.515c.694.012 1.02.278 1.222 1.256.224.967.407 1.606.535 1.828h1.821c-.15-.303-.397-1.327-.641-2.21-.2-.724-.504-1.25-1.051-1.472v-.034c.676-.247 1.389-.94 1.389-1.955 0-.733-.257-1.275-.723-1.64-.56-.435-1.365-.605-2.485-.605-.92 0-1.772.069-2.344.16v7.756zM180.443 45.197v4.415c0 2.52 1.152 3.602 3.121 3.602 2.044 0 3.26-1.142 3.26-3.578v-4.44h-1.762v4.556c0 1.4-.51 2.056-1.44 2.056-.906 0-1.417-.694-1.417-2.056v-4.555h-1.762zM187.957 52.753c.44.237 1.308.461 2.216.461 2.223 0 3.205-1.08 3.205-2.406 0-1.132-.631-1.87-1.998-2.396-1.081-.392-1.555-.62-1.555-1.13 0-.417.4-.775 1.219-.775.8 0 1.34.227 1.646.383l.385-1.407c-.452-.202-1.086-.382-1.994-.382-1.92 0-3.018.99-3.018 2.337 0 1.167.837 1.905 2.15 2.369 1.006.345 1.404.631 1.404 1.132 0 .523-.46.869-1.33.869-.783 0-1.503-.25-1.972-.501l-.358 1.446zM195.92 53.118h1.762v-6.492h2.16v-1.407h-6.044v1.407h2.122v6.492z"></path><path d="M83.37 46.87V19.286l-9.157 3.827V49.74c0 14.976 11.882 20.183 12.005 20.235l12.847 5.436 13.096-5.436c.005-.002.173-.054.383-.155l-13.479-5.577-7.425-3.171c-.346-.146-8.27-3.645-8.27-14.202zm4.358 0c0 6.465 5.195 8.733 5.247 8.755l6.09 2.57 11.771 4.782v-11.17l-11.77-4.782V40.95l11.77 4.81V34.59l-11.77-4.782v-6.075l11.77 4.81v-11.17l-11.77-4.782-11.338 4.782V46.87zm36.624-23.757l-9.155-3.827v45.603l2.623 1.098c3.173-3.102 6.532-8.274 6.532-16.247V23.113zM96.955 1.244L80.935 7.94l-13.713 5.74-3.472 1.471v34.59c0 7.887 2.324 15.206 6.79 21.17 3.263 4.356 7.75 8.023 12.03 9.807l14.395 6.041 2.1.918 2.305-.918 14.542-6.038c.279-.116 3.04-1.279 6.325-3.87 2.936-2.317 4.837-4.686 5.251-5.222 4.864-6.068 7.33-13.434 7.33-21.888V15.15l-3.52-1.47-13.767-5.74-16.065-6.656-2.305-.881h-.096V.324l-2.11.92zm2.11 80.216l-14.401-6.041c-5.309-2.211-15.246-10.424-15.246-25.68V18.978l13.775-5.932h-.099l15.971-6.502 16.169 6.502h.069l13.846 5.932V49.74c0 8.385-2.887 14.318-6.127 18.345 0 0-1.646 2.162-4.304 4.26-2.66 2.097-4.955 3.034-5.056 3.076L99.065 81.46z" fill="currentColor"></path>
                        </svg>
                    </a>
                    <span>Аккредитованный РА</span>
                </div>
                <div className="holder-text">
                    <h3><b>Ускорение</b> выдачи SSL</h3>
                    <p>GoGetSSL® предлагает самую быструю выдачу SSL благодаря использованию кода LEI и автоматизации API. Идентификатор юридического лица (LEI) - это глобальный идентификационный код, такой же, как DUNS. <a href="/lei">Узнайте, как</a> LEI работает.</p>
                </div>
            </div>
            <div className="right">
                <div className="block-one">
                    <p>{formatNumber(62 * USD)} UZS</p>
                    <a href="/lei">Регистрация LEI</a>
                </div>
                <div className="block-two">
                    <div>
                        <p className='num'>1,422,468+</p>
                        <p className='txt'>Всего выданных LEI</p>
                    </div>
                    <div>
                        <p className='num'>224+</p>
                        <p className='txt'>Поддерживаемые юрисдикции</p>
                    </div>
                </div>
            </div>
        </div>
    )
}