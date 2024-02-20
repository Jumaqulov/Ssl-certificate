import React, { useEffect, useState } from 'react';
import { Circles } from 'react-loader-spinner'
import Allproducts from '../../../Requests/Allproducts';
import SectigoTab from './SectigoTab';


export default function Sectigo() {
    const [productList, setProductList] = useState([]);
    const [loading, setLoading] = useState(true);

    async function products() {
        setLoading(true)
        const currentProducts = await Allproducts.getProducts()
        setProductList(currentProducts)
        setLoading(false)
    }

    const filteredProducts = productList.length > 0 ? productList.filter(digicert => {
        return digicert.brand === "comodo";
    }) : [];

    useEffect(() => {
        document.title = 'Сертификаты от Sectigo'
        products()
    }, []);
    return (
        <div className='certificates'>
            <div className="cert-txt">
                <h3>SSL-сертификаты Sectigo</h3>
                <p className='cert-txt-item'>
                    <span>
                        <svg className='sectigo-svg' viewBox='0 0 25 32'>
                            <path
                                d="M9.785.272C8.416.429 7.088.858 6.151 1.444c-1.058.66-2.155 1.837-2.681 2.886-.557 1.11-.937 2.79-1.104 4.902-.177 2.196-.231 2.88-.38 4.48-.22 2.462-.166 3.658.223 4.826.34 1.01.827 1.805 1.472 2.416.778.73 1.771 1.261 2.924 1.553.984.245 1.497.294 3.56.324 1.86.024 1.9.024 2.175-.084.364-.139.562-.335.65-.655.108-.383.389-3.76.33-3.963a1.116 1.116 0 0 0-.438-.611c-.171-.108-.236-.113-1.535-.147-1.173-.024-1.405-.046-1.72-.134-.447-.133-.595-.207-.846-.432-.37-.335-.58-.95-.587-1.685 0-.393.51-6.33.597-6.965.187-1.36.729-2.054 1.841-2.38.272-.077.729-.087 5.145-.112l4.85-.025.359-.132a2.987 2.987 0 0 0 1.191-.753c.296-.301 2.052-2.832 2.222-3.2a1.205 1.205 0 0 0 .039-.798 1.12 1.12 0 0 0-.448-.488C23.8.168 10.635.174 9.784.272h.001z">
                            </path>
                            <path
                                d="M12.755 9.207a.926.926 0 0 0-.287.182c-.299.281-.314.36-.478 2.212-.191 2.146-.191 2.254-.022 2.512a1.074 1.074 0 0 0 .645.467c.104.025.7.046 1.324.046.96 0 1.196.014 1.513.093.851.22 1.23.58 1.436 1.369.139.537.119.944-.398 6.735-.099 1.126-.216 1.713-.434 2.17-.226.48-.501.77-.935.98-.699.345-.497.336-5.962.365l-4.922.03-.346.138A3.19 3.19 0 0 0 2.451 27.6c-.489.643-1.885 2.803-1.916 2.951-.059.324 0 .695.148.881.265.35-.316.324 7.275.324 5.859 0 6.953-.007 7.475-.072 2.438-.301 4.263-1.29 5.564-3.018.811-1.083 1.368-2.497 1.594-4.072.074-.526.256-2.437.57-6.104.267-3.043.164-4.28-.48-5.776-.513-1.187-1.414-2.098-2.689-2.717a7.8 7.8 0 0 0-2.746-.783c-.568-.064-4.285-.064-4.49-.006z">
                            </path>
                        </svg>
                    </span>
                    <span>Sectigo SSL (ранее Comodo CA) - второй по величине коммерческий провайдер доверия в мире. Опытные и хорошо обученные сотрудники помогают частным лицам и корпоративным клиентам защищать веб-сайты, онлайн-приложения и электронную почту. SSL-сертификаты Sectigo популярны во всем мире и хорошо представлены во всех сегментах рынка и типах SSL-сертификатов, таких как сертификаты с проверкой домена, Business и Extended Validation, Multi-Domain, Wildcard, SMIME и Code Signing.</span>
                </p>
                <div className='ad-brand'>
                    <div>
                        <div className='ad-brand-box'>
                            <div className='comodo'>
                                <svg className='comodo-svg' viewBox='0 0 73 10'>
                                    <path
                                        d="M54.9.322h-4.187l.008.286c.014.624.225 1.41 1.278 1.41h1.232l1.57-.001c1.633 0 2.503.536 2.255 2.361l-.198 1.46c-.243 1.889-1.597 2.165-2.792 2.165H52.48l.444-3.632c.066-.521-.199-1.378-1.19-1.378h-1.372l-.367 2.994-.346 2.628c-.096.703.419 1.096 1.525 1.096l3.218-.001c3.277 0 4.163-1.185 4.613-1.929.246-.425.42-.944.52-1.544.021-.118.243-1.99.243-1.99.135-1.134-.076-1.997-.645-2.638C58.366.76 56.986.322 54.9.322M18.614 4.21l-.204 1.55c-.09.691-.278 1.219-.574 1.611-.41.52-1.034.845-1.902.845h-.507c-.863 0-1.487-.299-1.752-.792-.179-.368-.225-.893-.133-1.59l.201-1.548c.11-.832.376-1.443.811-1.865.423-.413 1.028-.61 1.754-.61H16.783c.5 0 1.161.082 1.532.571.309.407.405 1.006.299 1.828M16.896.107h-.464c-3.294.035-5.014 1.405-5.377 4.027l-.218 1.7c-.138 1.172.07 2.048.637 2.686.702.786 1.927 1.354 3.79 1.373h.463c3.22-.033 4.939-1.362 5.343-3.8l.028-.175.217-1.697c.145-1.218-.07-2.125-.651-2.78C19.96.655 18.739.127 16.896.108M69.759 4.21l-.205 1.55c-.09.691-.277 1.219-.573 1.611-.408.52-1.033.845-1.901.845h-.509c-.863 0-1.486-.299-1.751-.792-.179-.368-.224-.893-.134-1.59l.203-1.548c.11-.832.375-1.443.81-1.865.421-.413 1.026-.61 1.756-.61H67.928c.501 0 1.162.082 1.531.571.31.407.408 1.006.3 1.828m2.05-2.768C71.106.654 69.884.126 68.041.107h-.463c-3.295.035-5.015 1.405-5.378 4.027l-.219 1.7c-.137 1.172.073 2.048.638 2.686.701.786 1.927 1.354 3.79 1.373h.461c3.223-.033 4.94-1.362 5.346-3.8l.028-.175.216-1.697c.145-1.218-.07-2.125-.65-2.78M45.142 4.21l-.203 1.55c-.09.691-.279 1.219-.575 1.611-.408.52-1.033.845-1.901.845h-.509c-.861 0-1.486-.299-1.75-.792-.18-.368-.225-.893-.133-1.59l.201-1.548c.111-.832.375-1.443.811-1.865.422-.413 1.027-.61 1.755-.61H43.31c.501 0 1.162.082 1.533.571.31.407.406 1.006.298 1.828M43.426.107h-.465c-3.295.035-5.014 1.405-5.378 4.027l-.217 1.7c-.138 1.172.07 2.048.638 2.686.7.786 1.927 1.354 3.788 1.373h.463c3.221-.033 4.939-1.362 5.344-3.8l.029-.175.216-1.697c.144-1.218-.07-2.125-.652-2.78C46.491.655 45.267.127 43.426.108M33.006.841L29.39 4.945 26.847.882c-.243-.376-.738-.566-1.467-.566h-1.148l-1.145 9.396h1.4c.467 0 .795-.2.987-.368.295-.256.492-.622.543-1.01l.508-4.123 1.876 3.563c.084.133.312.434.612.437h.023c.317-.003.583-.296.666-.394l2.846-3.59-.68 5.481 1.351.002c.466 0 .795-.2.986-.368.295-.256.492-.622.542-1.01l.995-8.016h-1.196c-.706 0-1.225.177-1.54.525M5.938.32c-.469 0-.893.04-1.296.1C2.304.768 1.045 2.045.747 4.206l-.21 1.642C.402 6.979.604 7.826 1.15 8.44c.635.712 1.722 1.288 3.336 1.288h2.836c1.643 0 1.84-1.72 1.84-1.72h-3.76c-.51-.004-1.002-.043-1.35-.172-.474-.173-.76-.479-.859-1.034-.038-.218-.027-.704.014-1.012l.186-1.437c.056-.368.17-.778.223-.91.14-.343.362-.697.729-.954.214-.15.718-.457 1.99-.457H8.42c1.45 0 1.717-1.714 1.717-1.713H5.938z">
                                    </path>
                                </svg>
                            </div>
                            <div className='arrows'>
                                <span className='arrow'>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 32">
                                            <path d="M5.66962,0.995l12.304,12.89c0.642,0.643,0.964,1.287,0.961,2.144s-0.326,1.501-0.97,2.144l-12.353,12.839c-0.539,0.643-1.288,0.856-2.254,0.854-0.858-0.001-1.609-0.218-2.25-0.863-1.392-1.397-1.39-2.79,0.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9,0.009-4.289,0.645-0.641,1.396-0.854,2.253-0.852,0.966,0,1.716,0.218,2.25,0.86" />
                                        </svg>
                                    </span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 32">
                                            <path d="M5.66962,0.995l12.304,12.89c0.642,0.643,0.964,1.287,0.961,2.144s-0.326,1.501-0.97,2.144l-12.353,12.839c-0.539,0.643-1.288,0.856-2.254,0.854-0.858-0.001-1.609-0.218-2.25-0.863-1.392-1.397-1.39-2.79,0.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9,0.009-4.289,0.645-0.641,1.396-0.854,2.253-0.852,0.966,0,1.716,0.218,2.25,0.86" />
                                        </svg>
                                    </span>
                                    <span>
                                        <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 19 32">
                                            <path d="M5.66962,0.995l12.304,12.89c0.642,0.643,0.964,1.287,0.961,2.144s-0.326,1.501-0.97,2.144l-12.353,12.839c-0.539,0.643-1.288,0.856-2.254,0.854-0.858-0.001-1.609-0.218-2.25-0.863-1.392-1.397-1.39-2.79,0.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9,0.009-4.289,0.645-0.641,1.396-0.854,2.253-0.852,0.966,0,1.716,0.218,2.25,0.86" />
                                        </svg>
                                    </span>
                                </span>
                            </div>
                            <div className="sectigo">
                                <svg viewBox="0 0 100 21">
                                    <path
                                        d="M19.15.351a.706.706 0 0 0-.172.077.825.825 0 0 0-.233.325c-.013.035-.157 1.621-.326 3.526-.513 5.877-1.155 13.219-1.28 14.677l-.12 1.388.07.15a.484.484 0 0 0 .172.217c.105.064.14.064 5.571.064 5.3 0 5.469-.003 5.584-.06.24-.122.312-.282.357-.747.125-1.328.192-2.218.176-2.285-.042-.179-.093-.262-.205-.329l-.114-.073-3.549-.016c-3.902-.016-3.615 0-3.672-.207-.029-.1.086-1.685.217-3.047.035-.396.08-.907.096-1.14.028-.437.044-.494.16-.6.07-.063.13-.063 3.011-.08l2.939-.015.13-.07c.192-.102.326-.268.348-.431.01-.077.067-.677.128-1.337.115-1.235.115-1.311 0-1.487a.521.521 0 0 0-.185-.14c-.128-.058-.258-.06-3.031-.06h-2.9l-.093-.093c-.051-.051-.093-.122-.093-.157s.064-.8.144-1.7l.175-2.071c.042-.495.067-.6.18-.705l.082-.077 3.567-.016 3.568-.016.124-.099c.23-.188.23-.188.348-1.474.13-1.43.134-1.554.035-1.7a.52.52 0 0 0-.182-.163c-.105-.054-.43-.058-5.52-.054-2.974.003-5.453.012-5.507.025zM36.597.37a5.782 5.782 0 0 0-1.88.527c-1.435.682-2.364 1.94-2.721 3.695-.07.357-.112.772-.4 4.106-.114 1.334-.302 3.478-.414 4.764-.242 2.737-.255 3.159-.13 3.905.089.514.248 1.012.436 1.356.59 1.076 1.752 1.793 3.226 2.004.265.038.801.048 2.747.048 2.263 0 2.445-.003 2.882-.064 1.324-.188 2.275-.632 3.091-1.452.785-.781 1.267-1.787 1.465-3.047.073-.46.217-2.128.204-2.335-.019-.25-.127-.39-.357-.457-.147-.041-.393-.048-1.698-.041l-1.528.01-.134.076a.822.822 0 0 0-.22.198c-.096.137-.109.233-.204 1.305-.067.781-.134 1.1-.294 1.43-.143.296-.427.58-.68.672-.44.166-.513.173-2.042.186-1.33.012-1.46.01-1.758-.052-.73-.14-1.024-.462-1.113-1.215-.02-.17.067-1.248.446-5.6.077-.897.18-2.08.224-2.632.092-1.127.194-2.183.24-2.476.108-.693.446-1.107 1.08-1.324.298-.103.805-.131 2.174-.118 1.2.012 1.311.019 1.54.082.345.096.505.173.639.307.236.236.373.65.373 1.13 0 .133-.028.539-.064.9-.086.88-.083 1.078.01 1.215.038.057.128.14.198.178.127.074.127.074 1.69.074 1.456 0 1.574-.007 1.692-.06a.686.686 0 0 0 .367-.41c.045-.175.223-2.118.223-2.45 0-.603-.146-1.43-.35-1.956C45.1 1.67 44.052.801 42.696.485c-.628-.147-.985-.163-3.442-.16-1.66.004-2.4.016-2.658.045zM48.125.373c-.131.067-.29.227-.332.329-.045.109-.227 2.16-.227 2.543 0 .271.007.303.083.392a.664.664 0 0 0 .154.14c.05.03.577.042 2.1.055l2.028.016.083.077c.064.06.083.108.083.217 0 .076-.316 3.73-.705 8.123-.39 4.435-.692 8.034-.683 8.095a.548.548 0 0 0 .281.364c.099.045.297.05 1.72.05h1.608l.147-.092a.778.778 0 0 0 .194-.169c.1-.153.125-.392.326-2.785.025-.316.076-.906.112-1.308.035-.406.086-.986.111-1.293.026-.306.1-1.097.16-1.755.06-.657.249-2.776.415-4.706.443-5.147.386-4.655.548-4.76.08-.055.23-.058 2.132-.074l2.045-.016.134-.09c.243-.159.252-.194.38-1.617.064-.715.105-1.32.092-1.385a.515.515 0 0 0-.332-.363C60.687.33 59.104.322 54.44.322c-5.561 0-6.228.007-6.314.051zM63.488.408c-.312.16-.29.048-.51 2.563-.106 1.203-.272 3.088-.367 4.195l-.32 3.67-.481 5.456c-.185 2.09-.332 3.883-.326 3.992.013.207.08.325.243.433.08.055.214.058 1.723.058 1.36 0 1.653-.006 1.726-.045.125-.067.313-.284.335-.39.026-.123.156-1.534.275-2.931.054-.632.13-1.545.175-2.026l.112-1.293c.019-.23.099-1.11.175-1.962.198-2.154.973-11.126.973-11.27 0-.188-.086-.367-.22-.446l-.115-.074-1.611-.01L63.664.32l-.176.09zM73.97.373c-1.22.16-2.269.62-2.99 1.315a5.101 5.101 0 0 0-1.461 2.559c-.153.664-.173.83-.51 4.802l-.384 4.41c-.124 1.39-.223 2.683-.223 2.871 0 .651.134 1.468.319 1.95.415 1.085 1.35 1.901 2.569 2.256.16.044.446.114.638.15.335.067.462.07 2.792.08 2.728.012 2.925.003 3.72-.199 1.522-.382 2.594-1.263 3.283-2.702.447-.929.492-1.225.878-5.737.178-2.07.182-2.154.089-2.313a.53.53 0 0 0-.217-.201l-.14-.07h-6.771l-.144.089a1.074 1.074 0 0 0-.236.23c-.083.12-.096.166-.096.363v.227l.454.91c.245.5.494.979.552 1.062.105.156.418.402.619.485.274.115.494.153 1.037.172.769.026.705-.118.58 1.347a28.498 28.498 0 0 1-.134 1.336c-.111.594-.389 1.057-.753 1.254-.09.045-.28.115-.427.154-.252.067-.358.073-1.621.083-1.452.015-1.768-.007-2.16-.154-.335-.127-.568-.42-.67-.845-.087-.37-.064-.75.338-5.246.086-.973.21-2.374.271-3.11.21-2.467.268-2.863.491-3.297.154-.296.572-.587 1.012-.698.195-.052.399-.058 1.704-.058 1.33 0 1.506.006 1.69.058.664.181.885.418 1.01 1.059.05.271.05.322-.004.912a7.33 7.33 0 0 0-.042.827c.013.191.023.21.15.325a.692.692 0 0 0 .236.137c.058.01.808.016 1.672.01l1.567-.01.137-.095c.204-.144.243-.236.297-.686.147-1.222.153-1.915.035-2.575-.105-.58-.204-.89-.415-1.308A3.295 3.295 0 0 0 81.97 1.5C81.292.849 80.377.47 79.238.357c-.552-.054-4.825-.041-5.268.016zM90.482.357c-.977.103-1.896.412-2.582.872-1.068.717-1.764 1.805-2.09 3.273-.089.402-.13.83-.433 4.324-.106 1.228-.288 3.296-.402 4.594-.201 2.278-.208 2.387-.195 3.095.02.935.09 1.29.38 1.947.418.947 1.19 1.624 2.278 2.003.37.128.676.195 1.21.262.57.07 4.983.07 5.525 0 1.379-.182 2.304-.6 3.14-1.42.632-.622 1.005-1.26 1.273-2.182.214-.744.265-1.174.559-4.646.063-.727.226-2.636.366-4.24.278-3.156.304-3.72.208-4.359-.147-.976-.488-1.704-1.066-2.285C98.005.948 97.275.594 96.206.412c-.399-.067-.498-.07-2.932-.077-1.385-.003-2.642.006-2.792.022zm4.275 3.584c.654.217.894.58.897 1.359 0 .185-.109 1.563-.24 3.063-.133 1.5-.248 2.82-.258 2.935-.37 4.356-.383 4.49-.517 4.87-.172.488-.348.692-.746.87-.457.205-.53.211-2.183.211-1.633 0-1.882-.022-2.217-.191a1.243 1.243 0 0 1-.514-.584c-.153-.409-.156-.386.143-3.756l.355-4.02c.178-2.084.274-3.133.303-3.331.038-.236.137-.565.226-.744.189-.37.645-.663 1.146-.73.096-.013.91-.02 1.803-.016 1.477.006 1.643.013 1.802.064z">
                                    </path>
                                    <path
                                        d="M6.575.37c-.887.102-1.748.38-2.355.76-.686.427-1.397 1.19-1.738 1.87-.361.72-.607 1.808-.715 3.177-.115 1.423-.15 1.867-.246 2.904-.143 1.595-.108 2.37.144 3.127.22.654.536 1.17.954 1.566.504.473 1.148.817 1.895 1.006.638.159.97.191 2.307.21 1.206.016 1.232.016 1.41-.054.236-.09.364-.217.421-.425.07-.248.252-2.437.214-2.568a.723.723 0 0 0-.284-.396c-.111-.07-.153-.073-.995-.095-.76-.016-.91-.03-1.114-.087-.29-.086-.386-.134-.549-.28-.239-.217-.376-.616-.38-1.092 0-.255.33-4.103.387-4.514.121-.881.472-1.331 1.193-1.542.176-.05.472-.057 3.334-.073l3.143-.016.233-.086c.32-.115.549-.262.772-.488.192-.195 1.33-1.835 1.44-2.074a.781.781 0 0 0 .025-.517.726.726 0 0 0-.29-.316C15.658.303 7.126.307 6.574.37z"
                                        fill="currentColor"></path>
                                    <path
                                        d="M8.5 6.161a.6.6 0 0 0-.186.118c-.194.182-.204.233-.31 1.433C7.88 9.103 7.88 9.173 7.99 9.34a.696.696 0 0 0 .418.303c.067.016.453.03.858.03.622 0 .775.009.98.06.552.143.797.376.931.887.09.348.077.612-.258 4.365-.064.73-.14 1.11-.281 1.407-.147.31-.325.498-.606.635-.453.223-.322.217-3.864.236l-3.19.019-.224.09c-.396.159-.677.373-.932.708C1.505 18.497.6 19.897.58 19.993c-.038.21 0 .45.096.571.172.227-.205.21 4.715.21 3.797 0 4.506-.005 4.844-.047 1.58-.195 2.763-.836 3.606-1.956.526-.702.887-1.618 1.033-2.639.048-.341.166-1.579.37-3.956.173-1.972.106-2.773-.312-3.743-.332-.769-.916-1.36-1.742-1.761a5.055 5.055 0 0 0-1.78-.507c-.368-.042-2.777-.042-2.91-.004z"
                                        fill="currentColor"></path>
                                </svg>
                            </div>
                        </div>
                        <p>Те же сертификаты, только новый бренд</p>
                    </div>
                    <a className='ad-brand-link' href="/news">Читать далее</a>
                </div>
                <div className='tabs'>
                    {
                        loading ? (
                            <div className="loader">
                                <Circles height="80" width="80" color="#4fa94d" ariaLabel="circles-loading" wrapperStyle={{}} wrapperClass="" visible={true} />
                            </div>
                        ) : (
                            filteredProducts.length > 0 && <SectigoTab filteredProducts={filteredProducts} />
                        )
                    }
                </div>
            </div>
        </div >
    )
}