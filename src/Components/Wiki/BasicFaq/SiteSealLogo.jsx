import React, { useEffect } from 'react'
import { FaQuestionCircle } from 'react-icons/fa'
import { Helmet } from 'react-helmet';
import { siteSealDigicert, siteSealGogetssl, siteSealRapid, siteSealSectigo, siteSealSectigo2, siteSealSectigo3, siteSealThawte, siteSealgeotrust } from '../../../Data/SiteSeal';
import sectigo from '../../../assets/Images/Wiki-Img/sectigo_trust_seal_lg_140x54.png'
import sectigo1 from '../../../assets/Images/Wiki-Img/instantssl_trust_seal_lg_210x54.png'
import sectigo2 from '../../../assets/Images/Wiki-Img/positivessl_trust_seal_lg_222x54.png'
import rapidgif from '../../../assets/Images/RapidSSL_SEAL-90x50.gif'
import geotrust from '../../../assets/Images/Wiki-Img/geotrust-seal.png'
import thawte from '../../../assets/Images/Wiki-Img/thawte-seal.png'
import digicert from '../../../assets/Images/Wiki-Img/digicert-seal.png'

export default function SiteSealLogo() {
    useEffect(() => {
        document.title = 'Логотип Site Seal'
    }, [])
    return (
        <>
            <Helmet>
                <script src="https://gogetssl-cdn.s3.eu-central-1.amazonaws.com/site-seals/gogetssl-seal.js" type="text/javascript" />
            </Helmet>
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
                <a href='/wiki/ssl-basics'>Основы SSL / FAQ</a>
                <span className='next'>
                    <svg viewBox='0 0 19 32'>
                        <path
                            d="M5.66962.995l12.304 12.89c.642.643.964 1.287.961 2.144s-.326 1.501-.97 2.144l-12.353 12.839c-.539.643-1.288.856-2.254.854-.858-.001-1.609-.218-2.25-.863-1.392-1.397-1.39-2.79.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9.009-4.289.645-.641 1.396-.854 2.253-.852.966 0 1.716.218 2.25.86v.001z">
                        </path>
                    </svg>
                </span>
                <span className='current'>Логотип Site Seal</span>
            </div>
            <div className="wiki-main">
                <h3>Логотип Site Seal</h3>
                <p className='cert-txt-item'>
                    <span className='wiki-about-svg'>
                        <FaQuestionCircle className='cert-txt-svg' />
                    </span>
                    <span>По мере того как Интернет вплетается в нашу повседневную жизнь, уровень цифрового мошенничества растет, и пользователи прекрасно это понимают. Поставщики товаров и услуг должны завоевать доверие своих потенциальных клиентов, и это особенно актуально для мира электронной коммерции: если нет доверия, то нет и желания совершить покупку. Самый первый способ завоевать доверие клиента - заверить его в том, что его данные защищены. Если клиент видит, что владелец сайта делает все возможное для обеспечения безопасности его транзакций, то вероятность совершения покупки значительно возрастает.</span>
                </p>
                <p>Верно и обратное: если покупатель понимает, что владелец сайта не особенно заботится о безопасности пользовательских данных, он совершит покупку на другом сайте, где будет чувствовать себя в большей безопасности. Это элементарное здравомыслие: какой интернет-магазин вызывает больше доверия - с печатью доверия SSL или без нее?</p>
                <ul className="wiki-guide">
                    <li>
                        <div className='wiki-guide-num'>
                            <span>1</span>
                        </div>
                        <div>
                            <h4 className="term-title">Влияние уплотнения сайта на конверсию</h4>
                            <p>Осознав это, нетрудно догадаться, и это подтверждается статистикой, что наличие SSL-сертификата и печати доверия, которую поставляет сертификационный центр, напрямую влияют на показатели привлечения клиентов, причем эффект этот весьма значителен. Например, согласно исследованию DigiCert (Symantec), проведенному на сайте службы бронирования гостиничных номеров Central Reservation Service, конверсия увеличилась на 30 % после размещения печати доверия, которая гласила, что SSL защищен сертификатом.</p>
                        </div>
                    </li>
                    <li>
                        <div className='wiki-guide-num'>
                            <span>2</span>
                        </div>
                        <div>
                            <h4 className="term-title">Пломбы на сайте увеличивают средний контроль в магазине</h4>
                            <p>Печать доверия SSL влияет не только на конверсию. Когда пользователь больше доверяет сайту, он готов не только совершить покупку, но и потратить больше денег. Это значит, что на сайте с установленным знаком доверия и конверсия, и средний чек являются важнейшими показателями эффективности интернет-магазина. Как сообщается в отчете об одном из тематических исследований Comodo, конверсия на сайте клиента увеличилась на 11 %, но помимо этого посетители сайта тратили на одну покупку на 23 % больше, чем до установки SSL-сертификата и печати доверия от Comodo (теперь Sectigo). В свете такой статистики совсем не удивительно, что аналитическая компания Netcraft в 2011 году определила, что почти все крупнейшие сайты в мире имеют либо SSL-сертификат с расширенной проверкой (Extended Validation), либо просто с проверкой компании (Organizational Validation).</p>
                            <h4 className="term-title">Преимущества печати сайта</h4>
                            <ul className="pri-policy-lists">
                                <li>повышение доверия к веб-сайту и онлайн-бизнесу;</li>
                                <li>подтверждение того, что организация была проверена доверенным центром сертификации;</li>
                                <li>создание у посетителей чувства надежности, необходимого для совершения сделок;</li>
                                <li>повысить уровень конверсии сайта.</li>
                            </ul>
                        </div>
                    </li>
                </ul>
                <h4 className='term-title'>Примеры печатей сайта</h4>
                <p>Здесь приведен список наиболее распространенных логотипов Site Seal и логотипов доверия для сертификатов, которые мы продаем в нашем магазине SSL:</p>
                <div className="wiki-bg-dark">
                    <div className="flex-box">
                        <div>
                            {siteSealGogetssl.map((name, i) => {
                                return (
                                    <p key={i}>{name}</p>
                                )
                            })}
                        </div>
                        <div>
                            <div id="gogetssl-animated-seal" style={{ width: '180px', height: '58px' }}></div>
                        </div>
                    </div>
                </div>
                <div className="wiki-bg-dark">
                    <div className="flex-box">
                        <div>
                            {siteSealSectigo.map((name, i) => {
                                return (
                                    <p key={i}>{name}</p>
                                )
                            })}
                        </div>
                        <div>
                            <img src={sectigo} alt="sectigo logo" title='sectigo logo' />
                        </div>
                    </div>
                </div>
                <div className="wiki-bg-dark">
                    <div className="flex-box">
                        <div>
                            {siteSealSectigo2.map((name, i) => {
                                return (
                                    <p key={i}>{name}</p>
                                )
                            })}
                        </div>
                        <div>
                            <img src={sectigo1} alt="sectigo logo" title='sectigo logo' />
                        </div>
                    </div>
                </div>
                <div className="wiki-bg-dark">
                    <div className="flex-box">
                        <div>
                            {siteSealSectigo3.map((name, i) => {
                                return (
                                    <p key={i}>{name}</p>
                                )
                            })}
                        </div>
                        <div>
                            <img src={sectigo2} alt="sectigo logo" title='sectigo logo' />
                        </div>
                    </div>
                </div>
                <div className="wiki-bg-dark">
                    <div className="flex-box">
                        <div>
                            {siteSealRapid.map((name, i) => {
                                return (
                                    <p key={i}>{name}</p>
                                )
                            })}
                        </div>
                        <div>
                            <img src={rapidgif} alt="rapid gif" title='rapid gif' />
                        </div>
                    </div>
                </div>
                <div className="wiki-bg-dark">
                    <div className="flex-box">
                        <div>
                            {siteSealgeotrust.map((name, i) => {
                                return (
                                    <p key={i}>{name}</p>
                                )
                            })}
                        </div>
                        <div>
                            <img src={geotrust} alt="geotrust logo" title='geotrust logo' />
                        </div>
                    </div>
                </div>
                <div className="wiki-bg-dark">
                    <div className="flex-box">
                        <div>
                            {siteSealThawte.map((name, i) => {
                                return (
                                    <p key={i}>{name}</p>
                                )
                            })}
                        </div>
                        <div>
                            <img src={thawte} alt="thawte logo" title='thawte logo' />
                        </div>
                    </div>
                </div>
                <div className="wiki-bg-dark">
                    <div className="flex-box">
                        <div>
                            {siteSealDigicert.map((name, i) => {
                                return (
                                    <p key={i}>{name}</p>
                                )
                            })}
                        </div>
                        <div>
                            <img src={digicert} alt="digicert logo" title='digicert logo' />
                        </div>
                    </div>
                </div>
            </div>
            <div className='wiki-main-link-box'>
                <a className='wiki-main-link' href="/wiki">Вернуться в SSL Wiki</a>
            </div>
        </>
    )
}