import React from 'react'
import { CiWarning } from 'react-icons/ci'
import example1 from '../../../assets/Images/Wiki-Img/Screenshot 2024-03-19 145708.png'
import example2 from '../../../assets/Images/Wiki-Img/Screenshot 2024-03-19 150035.png'
import example3 from '../../../assets/Images/Wiki-Img/mmc_certificate_export.png'
import example4 from '../../../assets/Images/Wiki-Img/Screenshot 2024-03-19 151549.png'
import example5 from '../../../assets/Images/Wiki-Img/Screenshot 2024-03-19 152601.png'
import example6 from '../../../assets/Images/Wiki-Img/1.png'
import example7 from '../../../assets/Images/Wiki-Img/2.png'
import example8 from '../../../assets/Images/Wiki-Img/3.png'
import example9 from '../../../assets/Images/Wiki-Img/4.png'
import example10 from '../../../assets/Images/Wiki-Img/5.png'
import example11 from '../../../assets/Images/Wiki-Img/webuzo_keys.png'

export default function LostPrivateKey() {
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
                <a href='/wiki/problems'>Проблемы и вопросы</a>
                <span className='next'>
                    <svg viewBox='0 0 19 32'>
                        <path
                            d="M5.66962.995l12.304 12.89c.642.643.964 1.287.961 2.144s-.326 1.501-.97 2.144l-12.353 12.839c-.539.643-1.288.856-2.254.854-.858-.001-1.609-.218-2.25-.863-1.392-1.397-1.39-2.79.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9.009-4.289.645-.641 1.396-.854 2.253-.852.966 0 1.716.218 2.25.86v.001z">
                        </path>
                    </svg>
                </span>
                <span className='current'>Потерянный личный ключ</span>
            </div>
            <div className="wiki-main">
                <h3>Потерянный личный ключ</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <CiWarning className='cert-txt-svg' />
                    </span>
                    <span>Потеря закрытого ключа - самая распространенная проблема, с которой сталкиваются веб-мастера при установке SSL-сертификата. Эта статья поможет вам решить эту проблему и поможет понять возможные сценарии восстановления ключа или регенерации и повторного выпуска SSL.</span>
                </p>
                <ul className="wiki-guide">
                    <li>
                        <div className='wiki-guide-num'>
                            <span>1</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Немного теории</h4>
                            <p>Вы получаете закрытый ключ, когда генерируете запрос на подписание сертификата (CSR). Вы отправляете код CSR в CA (центр сертификации) и храните закрытый ключ в безопасном месте. Это означает, что ни мы (GoGetSSL), ни центры сертификации никогда не имели вашего закрытого ключа. Мы не можем его восстановить, но мы можем перевыпустить SSL с новым ключом. Есть несколько способов, с помощью которых вы можете сгенерировать CSR/KEY:</p>
                            <p>Использование онлайн-генератора CSR;</p>
                            <p>Использование OpenSSL на вашем сервере;</p>
                            <p>Использование платформ управления хостингом, таких как cPanel, Plesk, Synology NAS DSM, WHM и других.</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>2</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Как выглядит закрытый ключ</h4>
                            <p>Ключ RSA выглядит как массив закодированных данных, начинающийся и заканчивающийся заголовками, такими как -----BEGIN PRIVATE KEY----- и -----END PRIVATE KEY-----.</p>
                            <div className='example_images'>
                                <img src={example1} alt="Потерянный личный ключ , Lost private key" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>3</span>
                        </div>
                        <div>
                            <h4 className='term-title'>ОС Windows (IIS, Exchange)</h4>
                            <p>На серверах Windows нет возможности просмотра закрытого ключа в виде обычного текста. Соответствующий закрытый ключ подключается автоматически при импорте сертификата через IIS или MMC, однако CSR и KEY должны быть сгенерированы на одном и том же сервере.</p>
                            <p>Вы можете экспортировать ключ с помощью защищенного паролем файла PFX (PKCS#12), если необходимо достать закрытый ключ для установки SSL на другом сервере. Откройте сертификаты MMC, выполнив следующие действия:</p>
                            <div className='example_images'>
                                <img src={example2} alt="Потерянный личный ключ , Lost private key" />
                            </div>
                            <p>Затем перейдите в раздел "Личные &gt; Сертификаты", щелкните сертификат правой кнопкой мыши, затем "Все задачи" &gt; "Экспорт". Вы сможете экспортировать сертификат, следуя инструкциям мастера экспорта. Ознакомьтесь с дополнительными инструкциями на странице <a href="https://docs.microsoft.com/en-us/previous-versions/windows/it-pro/windows-server-2008-R2-and-2008/cc754329(v=ws.11)?redirectedfrom=MSDN">Windows Docs</a>.</p>
                            <div className='example_images text-center'>
                                <img src={example3} alt="Потерянный личный ключ , Lost private key" />
                            </div>
                            <p>После завершения процесса экспорта вы получите файл .pfx, содержащий ваш SSL-сертификат, закрытый ключ и связку CA. Вы можете использовать <a href="https://www.sslshopper.com/ssl-converter.html">онлайн-инструмент</a> для преобразования файла "PKCS12" в "PEM". После преобразования вам будет доступен ваш закрытый ключ.</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>4</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Mac OS X</h4>
                            <p>В Mac OS X нет возможности получить закрытый ключ через графический интерфейс инструмента Keychain. Для этого необходимо использовать Терминал. Откройте каталог /etc/certificates/ и найдите файл вида "*.key.pem". Используйте следующие команды терминала:</p>
                            <div className='example_images'>
                                <img src={example4} alt="Потерянный личный ключ , Lost private key" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>5</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Tomcat</h4>
                            <p></p>
                            <p>Закрытый ключ должен храниться в защищенном паролем файле Keystore, если ваш SSL-коннектор Tomcat настроен в стиле JSSE. Чтобы получить закрытый ключ, необходимо преобразовать Keystore в файл PFX с помощью следующей команды:</p>
                            <div className='example_images'>
                                <img src={example5} alt="Потерянный личный ключ , Lost private key" />
                            </div>
                            <p>Замените "Keystore.jks" на реальное имя хранилища ключей;</p>
                            <p>"Keystore.p12" - это имя нового файла PKCS12, который вы получите;</p>
                            <p> &lt;jkskeyalias&gt;,  &lt;jkspassword&gt; и  &lt;keypassword&gt; - это псевдоним, ключ и пароль Keystore, которые были введены при создании Keystore;</p>
                            <p>&lt;jkskeyalias&gt;,  &lt;jkspassword&gt; и  &lt;keypassword&gt; должны быть заменены на псевдоним файла JKS, его пароль и пароль закрытого ключа соответственно;</p>
                            <p>&lt;newp12password&gt; и &lt;newkeypassword&gt; должны быть заменены паролями, которые вы хотите установить для вашего нового PKCS12-файла и закрытого ключа;</p>
                            <p>Вы можете преобразовать новый файл PKCS12 в файл PEM, чтобы получить отдельные файлы сертификата, CA-bindle и ключа, используя приведенную ниже команду терминала или онлайн-инструмент. Вы можете переименовать файл <i>"Private.key"</i> в любое имя по своему усмотрению.</p>
                            <div className='example_images'>
                                <img src={example6} alt="Потерянный личный ключ , Lost private key" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>6</span>
                        </div>
                        <div>
                            <h4 className='term-title'>VestaCP</h4>
                            <p>Вы должны сохранить закрытый ключ во время генерации CSR с помощью VestaCP. В дальнейшем ключ не будет доступен ни в одной области веб-клиента. Однако есть возможность восстановить закрытый ключ с помощью SSH, проверив временный файл в папке "/tmp". Путь может выглядеть, например, так:</p>
                            <div className='example_images'>
                                <img src={example7} alt="Потерянный личный ключ , Lost private key" />
                            </div>
                            <p>Обратите внимание, что при каждой перезагрузке сервера папка будет удаляться. Вы можете попробовать использовать старую команду Linux, чтобы узнать точный путь к файлу:</p>
                            <div className='example_images'>
                                <img src={example8} alt="Потерянный личный ключ , Lost private key" />
                            </div>
                            <p>Замените "domain.tld" на фактическое имя домена. Альтернативный вариант - попробовать команду "grep"</p>
                            <div className='example_images'>
                                <img src={example9} alt="Потерянный личный ключ , Lost private key" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>7</span>
                        </div>
                        <div>
                            <h4 className='term-title'>DirectAdmin</h4>
                            <p>Закрытый ключ сохраняется на сервере в последней версии DirectAdmin. Он будет получен в процессе установки в поле "Вставить предварительно сгенерированный сертификат и ключ"." Раздел будет пуст, если вы сгенерировали CSR и ключ в другом месте или панель имеет внутреннюю проблему. Вы можете попробовать использовать SSH, чтобы найти ключ, так как обычно он сохраняется в следующей директории:</p>
                            <div className='example_images'>
                                <img src={example10} alt="Потерянный личный ключ , Lost private key" />
                            </div>
                            <p>где &lt;user&gt; и &lt;domain&gt; - это ваше имя пользователя DirectAdmin и домен, для которого вы пытаетесь восстановить ключ.</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>8</span>
                        </div>
                        <div>
                            <h4 className='term-title'>Webuzo</h4>
                            <p>Восстановление закрытого ключа на панели управления Webuzo - простая задача, если пара CSR и закрытый ключ были сгенерированы с помощью этой панели.</p>
                            <p>Перейдите на главную страницу управления SSL;</p>
                            <p>Нажмите кнопку "перо" в правом верхнем углу;</p>
                            <p>На экране появится код ключа.</p>
                            <div className='example_images text-center'>
                                <img src={example11} alt="Потерянный личный ключ , Lost private key" />
                            </div>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span className='ssl-validation-txt'>✔</span>
                        </div>
                        <div>
                            <h4 className='term-title ssl-validation-txt'>Заключение</h4>
                            <p>Потеря закрытого ключа не является фатальной в случае, если вы использовали панели управления. Однако мы настоятельно рекомендуем хранить закрытый ключ в очень надежном месте. Перевыпустите SSL, если вы подозреваете, что ключ может попасть в руки третьих лиц.</p>
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