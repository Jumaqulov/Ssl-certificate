import React, { useEffect } from 'react'
import { RiSettings5Line } from "react-icons/ri";
import image from '../../../assets/Images/Wiki-Img/gen_csr_1.png'
import image2 from '../../../assets/Images/Wiki-Img/gen_csr_2.png'
import image3 from '../../../assets/Images/Wiki-Img/gen_csr_3.png'
import image4 from '../../../assets/Images/Wiki-Img/gen_csr_4.png'

export default function HowToCSR() {
    useEffect(() => {
        document.title = 'Как сгенерировать CSR без общего имени'
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
                <span className='current'>Как сгенерировать CSR без общего имени</span>
            </div>
            <div className="wiki-main">
                <h3>Как сгенерировать CSR без общего имени</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <RiSettings5Line className='cert-txt-svg' />
                    </span>
                    <span>Данное руководство по генерации CSR поможет вам сгенерировать запрос на подписание сертификата (CSR) без обязательного общего имени (CN) с помощью Nginx (OpenSSL). CSR без CN является обязательным правилом для генерации <a className='wiki-ssl-link' href="/product/gogetssl-public-ip-san">GoGetSSL™ Public IP SAN</a>. Это очень индивидуальный продукт, позволяющий защитить публичные IP-адреса с помощью процесса проверки домена. Большинство устройств заставляют устанавливать SSL с основным доменом в качестве публичного IP-адреса, без какого-либо FQDN (Fully Qualified Domain name).</span>
                </p>
                <ul className="wiki-guide">
                    <li>
                        <div className='wiki-guide-num'>
                            <span>1</span>
                        </div>
                        <div>
                            <h4 className="term-title">Шаг 1: Войдите на свой сервер</h4>
                            <p>Войдите на свой сервер, используя SSH-соединение, чтобы открыть окно терминала. Если вы работаете локально, SSH-соединение не требуется, просто нажмите <b><i>CTRL+ALT+T</i></b> или <b><i>CTRL+ALT+F1</i></b>, чтобы открыть окно терминала в большинстве систем Linux.</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>2</span>
                        </div>
                        <div>
                            <h4 className="term-title">Шаг 2: Создание CSR и закрытого ключа</h4>
                            <p>Выполните приведенную ниже команду, чтобы начать генерацию. Замените "new" на ваш реальный публичный IP без DOTS или просто используйте любое пользовательское имя, которое вы хотите.</p>
                            <div className='example_images'>
                                <img title='SSL-сертификат для Localhost' src={image} alt="SSL-сертификат для Localhost" />
                            </div>
                            <p>Мы рекомендуем генерировать новый закрытый ключ для каждого нового кода CSR. Описание команд:</p>
                            <p>--- openssl - активирует софт OpenSSLwarereq - индикатор того, что нам нужен код CSR;</p>
                            <p>--- -new -newkey - сгенерировать новый ключ;</p>
                            <p>--- rsa:2048 - сгенерировать 2048-битный математический ключ RSA;</p>
                            <p>--- -nodes - нет DES, то есть не шифровать закрытый ключ в файле PKCS#12;</p>
                            <p>--- -keyout - указывает домен, для которого генерируется ключ;</p>
                            <p>--- -out - задает имя файла, в котором будет сохранен ваш CSR;</p>
                            <p>Примечание: мы рекомендуем использовать классические 2048-битные пары ключей. Более безопасный 4096-битный ключ требует больше ресурсов сервера. В качестве альтернативы можно использовать <a href="/wiki/ssl-basics/ecc-sha-ssl">алгоритм ECC</a>.</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>3</span>
                        </div>
                        <div>
                            <h4 className="term-title">Шаг 3: Предоставьте данные CSR</h4>
                            <p>Следуйте процессу и предоставьте все данные.</p>
                            <p>1. Общее название: "KEEP EMPTY"</p>
                            <p>2. Организация: Нет, или любое другое название;</p>
                            <p>3. Организационное подразделение (OU): ИТ, безопасность или любое другое;</p>
                            <p>4. Город или населенный пункт: Укажите свой город;</p>
                            <p>5. Штат или провинция: укажите свой штат, регион, провинцию;</p>
                            <p>6. Страна: Код страны ISO-2, например US, LV, RU, CN, убедитесь, что это разрешенная страна;</p>
                            <p>Примечание: Не вводите ключевую фразу, это помешает процессу генерации SSL.</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>4</span>
                        </div>
                        <div>
                            <h4 className="term-title">Шаг 4: Найдите файл CSR</h4>
                            <p>Вы сможете найти файл CSR в рабочем каталоге после того, как программа завершит процесс генерации. Альтернативная команда для получения списка всех CSR в вашей системе.</p>
                            <div className='example_images'>
                                <img title='SSL-сертификат для Localhost' src={image2} alt="SSL-сертификат для Localhost" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>5</span>
                        </div>
                        <div>
                            <h4 className="term-title">Шаг 5: Открытие CSR в консоли (необязательно)</h4>
                            <p>Созданный файл .csr можно открыть в редакторе с помощью следующей команды.</p>
                            <div className='example_images'>
                                <img title='SSL-сертификат для Localhost' src={image3} alt="SSL-сертификат для Localhost" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>*</span>
                        </div>
                        <div>
                            <h4 className="term-title">Пример кода</h4>
                            <p>Созданный файл .csr можно открыть в редакторе с помощью следующей команды.</p>
                            <div className='example_images'>
                                <img title='SSL-сертификат для Localhost' src={image4} alt="SSL-сертификат для Localhost" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span className='ssl-validation-txt'>✔</span>
                        </div>
                        <div>
                            <h4 className='term-title ssl-validation-txt'>Заключение</h4>
                            <p>Эти шаги являются обязательными для приобретения и заказа Public IP SSL. Вы можете использовать эту инструкцию для генерации классического CSR, просто введите общее имя.</p>
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