import React, { useEffect } from 'react'
import GeneralMain from './GeneralQuestion'
import SSL_ValidationMain from './SslValidation'
import Problems_IssuesMain from './Problems&Issues'
import IntermediatMain from './IntermediateCertificate'
import Reissue_RenewalMain from './Reissue'
import Basic_FaqMain from './BasicFaq'
import CSR_SSlmain from './CSR'
import InstallitionsMain from './Installitions'

export default function Wiki() {
    useEffect(() => {
        document.title = 'Руководства по установке и решения | SSL Wiki'
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
                <span className='current'>Wiki</span>
            </div>
            <div className='wiki-main'>
                <h3>Общие руководства по вики и установке</h3>
                <p className='cert-txt-item'>
                    <span>
                        <svg className='cert-txt-svg' viewBox="0 0 32 26">
                            <path
                                d="M1.703 20.116V4.666c-.545.144-1.09.32-1.603.48v19.506a20.66 20.66 0 0 1 13.031.673 15.066 15.066 0 0 0-10.69-4.471.753.753 0 0 1-.738-.738z" />
                            <path
                                d="M3.21.45l-.048 19.01a16.893 16.893 0 0 1 12.133 6.09V7.422A16.028 16.028 0 0 0 3.21.45zm27.087 4.248v15.434a.753.753 0 0 1-.737.738 14.97 14.97 0 0 0-10.66 4.47v.016a20.628 20.628 0 0 1 12.999-.705V5.178a15.61 15.61 0 0 0-1.603-.48h.001z">
                            </path>
                            <path d="M28.854.45a15.852 15.852 0 0 0-12.117 6.972V25.55a16.894 16.894 0 0 1 12.117-6.09V.45z"></path>
                        </svg>
                    </span>
                    <span>Наша команда опубликовала собственную библиотеку SSL Wiki с наиболее распространенными темами о SSL-сертификатах и других наших услугах. Эти простые статьи помогут вам решить большинство вопросов и проблем, с которыми вы можете столкнуться.</span>
                </p>
                <div className='wiki-menu'>
                    <div className="wiki-left">
                        <GeneralMain />
                        <SSL_ValidationMain />
                        <Problems_IssuesMain />
                        <IntermediatMain />
                    </div>
                    <div className="wiki-right">
                        <Reissue_RenewalMain />
                        <Basic_FaqMain />
                        <CSR_SSlmain />
                        <InstallitionsMain />
                    </div>
                </div>
            </div>
        </>
    )
}
