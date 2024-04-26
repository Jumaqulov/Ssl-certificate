import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner'
import DigicertTabs from './DigicertTabs';
import Allproducts from '../../../Requests/Allproducts';
import { Helmet } from 'react-helmet';


export default function Digicert() {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    async function products() {
        setLoading(true)
        const currentProducts = await Allproducts.getProducts()
        setProductList(currentProducts)
        setLoading(false)
    }

    const filteredProducts = productList.length > 0 ? productList.filter(digicert => {
        return digicert.brand === "digicert";
    }) : [];

    useEffect(() => {
        products()
    }, []);

    return (
        <>
            <Helmet>
                <meta name="description" content="SSL-сертификаты от DigiCert обеспечивают безопасное соединение между вашим веб-сайтом и его посетителями. Защитите данные своих пользователей и повысьте доверие к вашему сайту с помощью надежных SSL-сертификатов." />
                <meta property="og:description" content="SSL-сертификаты от DigiCert обеспечивают безопасное соединение между вашим веб-сайтом и его посетителями. Защитите данные своих пользователей и повысьте доверие к вашему сайту с помощью надежных SSL-сертификатов." />
                <meta name="keywords" content="SSL, сертификаты, безопасность, DigiCert, защита данных, шифрование, онлайн безопасность, веб-сайт, защита пользователей, безопасное соединение" />
                <meta property="og:locale" content="ru_RU" />
                <meta property="og:type" content="website" />
                <meta property="og:title" content="Сертификаты SSL от DigiCert" />
                <meta property="og:site_name" content="SSL Certificate" />
                <meta property="og:url" content="https://sslcertificate.uz" />
                <title>Сертификаты SSL от DigiCert</title>
            </Helmet>
            <div className='certificates'>
                <div className="cert-txt">
                    <h1 title='DigiCert SSL'>DigiCert SSL</h1>
                    <p className='cert-txt-item'>
                        <span>
                            <svg viewBox="0 0 33 33" className='digicert-svg'>
                                <path
                                    d="M31.8090735 18.6542805c-.5074733-5.8866902-4.5672596-9.8449819-7.713594-14.1077575 1.3194305-1.9283985 4.2627756-1.3194305 6.3941634-.913452C27.7492871 1.7046727 24.5014581.5882314 21.0506397.2837475 14.453487.1822527 9.1757647 4.0390497 4.3040212 8.3018254c-2.9433451-.913452-.913452-4.0597864-.913452-6.2926688C.8532028 5.4599749.0412455 9.3167719.1427402 13.2750636c.1014946 3.552313 1.6239145 7.0031314 3.6538077 10.1494658l4.2627756 4.8717436c-1.4209252 2.3343771-4.2627756 1.3194305-6.3941635.9134519 3.4508184 2.5373664 7.3076154 3.3493237 11.265907 3.247829 3.5523131-.1014946 7.0031315-1.6239145 10.0479712-3.6538076l4.8717436-4.2627757c1.4209252 1.6239146 1.7254092 4.3642703.913452 6.3941635 2.4358717-3.4508184 3.3493236-7.713594 3.0448397-12.2808536zm-4.6687543.2029893c-1.2179359 1.5224199-2.7403558 3.3493237-2.7403558 3.3493237-1.5224198 1.7254092-2.8418504 2.5373664-3.4508183 3.0448397-2.0298932 1.52242-4.5672596 2.4358718-7.1046261 2.5373665h-.608968l-.1014946-.1014947-2.8418504-2.8418504c-.913452-1.1164412-1.7254092-1.6239145-2.9433451-3.3493237-1.5224199-2.1313878-2.4358718-4.5672596-2.5373665-7.104626V13.4780528l2.8418505-2.5373664c3.3493237-2.9433451 7.0031314-5.5822062 11.570391-5.5822062h.2029893l2.2328825 2.943345c2.1313878 2.9433451 4.9732382 5.7851956 5.3792168 9.8449819 0 0 .1014947.608968.1014947.7104626z">
                                </path>
                            </svg>
                        </span>
                        <span>SSL-сертификаты защищают все конфиденциальные и частные данные, передаваемые через веб-сайты и онлайн-системы. SSL-сертификаты вызывают доверие у конечных покупателей и повышают продажи за счет увеличения конверсии. Сертификаты помогают занять более высокие позиции в рейтинге, поскольку Google добавил SSL-сертификаты в свой алгоритм. GoGetSSL предоставляет все возможные SSL-сертификаты, доступные на рынке, начиная с сертификатов с проверкой домена и заканчивая сертификатами с расширенной проверкой.</span>
                    </p>
                    <div className='tabs'>
                        {
                            loading ? (
                                <div className="loader">
                                    <Circles height="80" width="80" color="#dc8510" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
                                </div>
                            ) : (
                                filteredProducts.length > 0 && <DigicertTabs filteredProducts={filteredProducts} />
                            )
                        }
                    </div>
                </div>
            </div >
        </>
    );
}
