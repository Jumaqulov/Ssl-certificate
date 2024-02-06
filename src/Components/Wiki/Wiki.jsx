import React, { useEffect } from 'react'
import { TfiBook } from "react-icons/tfi";
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
                        <TfiBook className='cert-txt-svg'/>
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
