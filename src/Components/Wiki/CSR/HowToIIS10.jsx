import React, { useEffect } from 'react'
import { RiSettings5Line } from 'react-icons/ri'
import image from '../../../assets/Images/Wiki-Img/csr-generation-iis10_1.png'
import image2 from '../../../assets/Images/Wiki-Img/csr-generation-iis10_2.png'
import image3 from '../../../assets/Images/Wiki-Img/csr-generation-iis7_3.png'
import image4 from '../../../assets/Images/Wiki-Img/csr-generation-iis7_4.png'
import image5 from '../../../assets/Images/Wiki-Img/csr-generation-iis10_5.png'

export default function HowToIIS10() {
    useEffect(() => {
        document.title = 'Как сгенерировать CSR на IIS 10.x'
    }, [])
    return (
        <>
            <div className="wiki-path">
                <a href="/">Главная</a>
                <span className='next'>
                    <svg viewBox='0 0 19 32'>
                        <path
                            d="M5.66962.995l12.304 12.89c.642.643.964 1.287.961 2.144s-.326 1.501-.97 2.144l-12.353 12.839c-.539.643-1.288.856-2.254.854-.858-.001-1.609-.218-2.25-.863-1.392-1.397-1.39-2.79.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9.009-4.289.645-.641 1.396-.854 2.253-.852.966 0 1.716.218 2.25.86v.001z">
                        </path>
                    </svg>
                </span>
                <a href='/wiki'>Wiki</a>
                <span className='next'>
                    <svg viewBox='0 0 19 32'>
                        <path
                            d="M5.66962.995l12.304 12.89c.642.643.964 1.287.961 2.144s-.326 1.501-.97 2.144l-12.353 12.839c-.539.643-1.288.856-2.254.854-.858-.001-1.609-.218-2.25-.863-1.392-1.397-1.39-2.79.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9.009-4.289.645-.641 1.396-.854 2.253-.852.966 0 1.716.218 2.25.86v.001z">
                        </path>
                    </svg>
                </span>
                <a href='/wiki/csr-generation'>Генерация CSR / SSL</a>
                <span className='next'>
                    <svg viewBox='0 0 19 32'>
                        <path
                            d="M5.66962.995l12.304 12.89c.642.643.964 1.287.961 2.144s-.326 1.501-.97 2.144l-12.353 12.839c-.539.643-1.288.856-2.254.854-.858-.001-1.609-.218-2.25-.863-1.392-1.397-1.39-2.79.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9.009-4.289.645-.641 1.396-.854 2.253-.852.966 0 1.716.218 2.25.86v.001z">
                        </path>
                    </svg>
                </span>
                <span className='current'>Как сгенерировать CSR на IIS 10.x</span>
            </div>
            <div className="wiki-main">
                <h3>Как сгенерировать CSR на IIS 10.x</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <RiSettings5Line className='cert-txt-svg' />
                    </span>
                    <span>IIS (Internet Information Services) - это набор служб, предназначенных для реализации веб-сервера в операционной системе Windows с поддержкой HTML-сайтов и приложений ASP.NET или ASP. Здесь представлено полное руководство по генерации CSR и закрытых ключей в IIS 10.x.</span>
                </p>
                <p>На самом деле, процесс примерно такой же, как и в IIS 7 и IIS 8. Мы рекомендуем записать пароль и сделать резервную копию ключа, так как в случае утери их невозможно будет восстановить, и мы не сможем вам помочь. Для сохранения резервных копий рекомендуется использовать любое хранилище.</p>
                <ul className="wiki-guide">
                    <li>
                        <div className='wiki-guide-num'>
                            <span>1</span>
                        </div>
                        <div>
                            <h4 className="term-title">ШАГ 1</h4>
                            <p>Выполните следующие действия, чтобы создать код CSR в Microsoft Server 2016, используя IIS 10 или 10.5.</p>
                            <p>1. Сначала зайдите в меню "Пуск" и найдите "Диспетчер информационных служб Интернета (IIS)". На экране появится Диспетчер информационных служб Интернета (IIS);</p>
                            <p>2. Нажмите на имя сервера, расположенное в левой части панели;</p>
                            <p>3. Теперь перейдите в раздел IIS на средней панели и дважды щелкните на Server Certificates..;</p>
                            <div className='example_images'>
                                <img title='Генерация CSR с помощью IIS 10' src={image} alt="Генерация CSR с помощью IIS 10" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>2</span>
                        </div>
                        <div>
                            <h4 className="term-title">ШАГ 2</h4>
                            <p>С правой стороны находится раздел "Действия", в котором нужно нажать на "Создать запрос на сертификат".</p>
                            <div className='example_images'>
                                <img title='Генерация CSR с помощью IIS 10' src={image2} alt="Генерация CSR с помощью IIS 10" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>3</span>
                        </div>
                        <div>
                            <h4 className="term-title">ШАГ 3</h4>
                            <p>Откроется мастер создания формы запроса сертификата. В окне Distinguished Name Properties (Свойства отличительного имени) введите следующую информацию:</p>
                            <p>1. Поле Common Name должно содержать Fully Qualified Domain Name (FQDN) - веб-адрес, для которого вы планируете использовать сертификат IIS SSL. Вы должны быть уверены, что общее имя, которое вы проверили с помощью CSR, является правильным доменным именем / FQDN, для которого вы собираетесь использовать сертификат. Для сертификата Wildcard SSL общее имя должно содержать как минимум одну звездочку (*) Например: * .domain.tld, * .sub.domain.tld</p>
                            <p>2. Введите организацию (название компании) и подразделение организации;</p>
                            <p>3. Укажите местоположение компании: страна, город, регион;</p>
                            <p>4. Нажмите кнопку Далее.</p>
                            <div className='example_images'>
                                <img title='Генерация CSR с помощью IIS 10' src={image3} alt="Генерация CSR с помощью IIS 10" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>4</span>
                        </div>
                        <div>
                            <h4 className="term-title">ШАГ 4</h4>
                            <p>В окне "Cryptographic Service Provider Properties" оставьте оба параметра по умолчанию (Microsoft RSA SChannel и 2048), а затем нажмите Next.</p>
                            <div className='example_images'>
                                <img title='Генерация CSR с помощью IIS 10' src={image4} alt="Генерация CSR с помощью IIS 10" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>5</span>
                        </div>
                        <div>
                            <h4 className="term-title">ШАГ 5</h4>
                            <p>Введите имя файла и место для сохранения файла CSR. Этот CSR понадобится для регистрации SSL-сертификата IIS;</p>
                            <p>Нажмите кнопку Готово;</p>
                            <p>Ваш новый CSR содержится в файле \Desktop\cert_req.txt</p>
                            <div className='example_images'>
                                <img title='Генерация CSR с помощью IIS 10' src={image5} alt="Генерация CSR с помощью IIS 10" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>6</span>
                        </div>
                        <div>
                            <h4 className="term-title">Чтобы сохранить закрытый ключ:</h4>
                            <p>1. Перейти к: Сертификаты в оснастке MMC;</p>
                            <p>2. Выберите запросы;</p>
                            <p>3. Выберите Все задания;</p>
                            <p>4. Выберите Экспорт;</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>*</span>
                        </div>
                        <div>
                            <h4 className="term-title">Подсказки!</h4>
                            <p>Убедитесь, что вы вставили весь CSR в форму генерации SSL, включая</p>
                            <p>----- НАЧАТЬ ЗАПРОС СЕРТИФИКАТА -----</p>
                            <p>----- ЗАПРОС НА ЗАВЕРШЕНИЕ СЕРТИФИКАТА -----</p>
                        </div>
                    </li>
                </ul>
            </div>
            <div className='wiki-main-link-box'>
                <a className='wiki-main-link' href="/wiki">Вернуться в SSL Wiki</a>
            </div>
        </>
    )
}