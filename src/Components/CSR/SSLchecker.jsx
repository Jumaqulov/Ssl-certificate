import React, { useEffect } from 'react'
import {GiBigGear} from 'react-icons/gi'

export default function SSLchecker() {

    useEffect(() => {
        document.title = 'Проверка установки SSL'
    }, [])

    return (
        <div className='certificates'>
            <h1 title='about this page' className='csr-title'>Онлайновая проверка SSL</h1>
            <div className="csr-main">
                <div>
                    <GiBigGear className='sslcheck-svg'/>
                </div>
                <div>
                    <p>Существует множество различных серверных программ и настроек, поэтому процесс установки может пойти не так, как нужно. Наиболее распространенной проблемой является отсутствие файлов Intermediate CA, из-за чего SSL не работает на большинстве мобильных устройств. Мы настоятельно рекомендуем использовать инструмент диагностики SSL Labs для проверки установки SSL, чтобы убедиться в отсутствии ошибок и корректной работе SSL. Программа показывает дату истечения срока действия SSL, размер ключа, алгоритм подписи, эмитента, а также шифры и возможные проблемы TLS.</p>
                </div>
            </div>
            <div className='check-ssl'>
                <p>Решение работает на базе Qualys SSL Labs</p>
                <a href="">Запуск диагностики SSL</a>
            </div>
        </div>
    )
}