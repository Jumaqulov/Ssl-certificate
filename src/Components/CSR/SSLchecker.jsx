import React, { useEffect } from 'react'
import { GiBigGear } from 'react-icons/gi'
import { Helmet } from 'react-helmet';

export default function SSLchecker() {

    useEffect(() => {
        document.title = ''
    }, [])

    return (
        <>
            <Helmet>
                <meta name="description" content="Сгенерируйте SSL-сертификат онлайн с помощью автоматического генератора SHA-256 CSR и 2048-битного закрытого ключа. Сохраните ключ в безопасном месте, чтобы установить выпущенный SSL." />
                <meta name="keywords" content="SSL, сертификат, онлайн-генератор, CSR, SHA-256, ключ" />
                <meta property="og:description" content="Сгенерируйте SSL-сертификат онлайн с помощью автоматического генератора SHA-256 CSR и 2048-битного закрытого ключа. Сохраните ключ в безопасном месте, чтобы установить выпущенный SSL." />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Проверка установки SSL" />
                <meta property="og:site_name" content="SSL Certificate" />
                <meta property="og:url" content="https://sslcertificate.uz" />
                <title>Проверка установки SSL</title>
            </Helmet>
            <div className='certificates'>
                <h1 title='about this page' className='csr-title'>Онлайновая проверка SSL</h1>
                <div className="csr-main">
                    <div>
                        <GiBigGear className='sslcheck-svg' />
                    </div>
                    <div>
                        <p>Существует множество различных серверных программ и настроек, поэтому процесс установки может пойти не так, как нужно. Наиболее распространенной проблемой является отсутствие файлов Intermediate CA, из-за чего SSL не работает на большинстве мобильных устройств. Мы настоятельно рекомендуем использовать инструмент диагностики SSL Labs для проверки установки SSL, чтобы убедиться в отсутствии ошибок и корректной работе SSL. Программа показывает дату истечения срока действия SSL, размер ключа, алгоритм подписи, эмитента, а также шифры и возможные проблемы TLS.</p>
                    </div>
                </div>
                <div className='check-ssl'>
                    <p>Решение работает на базе Qualys SSL Labs</p>
                    <a href="https://www.ssllabs.com/ssltest/">Запуск диагностики SSL</a>
                </div>
            </div>
        </>
    )
}