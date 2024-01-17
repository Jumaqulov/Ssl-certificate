import React from 'react'
import { Link } from 'react-router-dom'
import click from '../../assets/svg/click-up.svg'

export default function FooterMiddle() {
    return (
        <div className="footer-middle-contain gb-padding">
            <div className='wrapper'>
                <div className="content">
                    <div className='middle-left'>
                        <ul className='link-box'>
                            <li>
                                <Link className='title-link' to="/company">Company</Link>
                                <Link className='box-link-item' to="/">Homepage</Link>
                                <Link className='box-link-item' to="/reseller-program">Reseller Program</Link>
                                <Link className='box-link-item' to="/refund-policy">Payments/Refunds</Link>
                                <Link className='box-link-item' to="/news">Corporate News</Link>
                                <Link className='box-link-item' to="/terms-and-conditions">Terms & Conditions</Link>
                                <Link className='box-link-item' to="/support">Company contacts</Link>
                                <Link className='box-link-item' to="/sitemap">Sitemap</Link>
                            </li>
                            <li>
                                <Link className='title-link' to="/ssl-certificates">Vendors</Link>
                                <Link className='box-link-item' to="/digicert">DigiCert</Link>
                                <Link className='box-link-item' to="/sslcerts">GoGetSSL</Link>
                                <Link className='box-link-item' to="/geotrust">GeoTrust</Link>
                                <Link className='box-link-item' to="/rapidssl">RapidSSL</Link>
                                <Link className='box-link-item' to="/sectigo">Sectigo</Link>
                                <Link className='box-link-item' to="/thawte">Thawte</Link>
                            </li>
                            <li>
                                <Link className='title-link' to='/dv-ssl'>Categories</Link>
                                <Link className='box-link-item' to='/dv-ssl'>Domain Validation</Link>
                                <Link className='box-link-item' to='/ov-ssl'>Business Validation</Link>
                                <Link className='box-link-item' to='/ev-ssl'>Extended Validation</Link>
                                <Link className='box-link-item' to='/wildcard-ssl'>Wildcard SSL</Link>
                                <Link className='box-link-item' to='/multi-domian-ssl'>UCC/SAN Certificates</Link>
                                <Link className='box-link-item' to='/code-signing-ssl'>CodeSigning SSL</Link>
                                <Link className='box-link-item' to='/vcm-certificates'>VMC Certificates</Link>
                            </li>
                        </ul>
                    </div>
                    <div className='middle-right'>
                        <div className="box">
                            <div className="payment">
                                <img src={click} alt="click up" />
                            </div>
                            <div className="social">
                                <div className="social-holder">
                                    <div className="row-one">
                                        <a className='footer-social-medias facebook' href='https://www.facebook.com/gogetssl' aria-label="facebook" rel="noopener" target='_blank'>
                                            <svg role='img' xmlns="http://www.w3.org/2000/svg" viewBox='0 0 18 32'>
                                                <path d="M16.93219.14008l-4.11507-.0066c-4.62313 0-7.6108 3.06525-7.6108 7.80954v3.60073H1.0688c-.35753 0-.64705.28985-.64705.64738v5.21704c0 .35753.28985.64705.64705.64705h4.13752v13.16424c0 .35753.28952.64706.64705.64706h5.39828c.35753 0 .64705-.28986.64705-.64706V18.05522h4.83772c.35753 0 .64705-.28952.64705-.64705l.00198-5.21704c0-.17167-.06833-.33607-.18949-.45756-.12116-.12149-.28622-.18982-.45789-.18982H11.8987V8.49137c0-1.4671.3496-2.21187 2.26073-2.21187l2.7721-.00099c.3572 0 .64672-.28985.64672-.64705V.78714c0-.35687-.2892-.6464-.64606-.64705V.14008z"></path>
                                            </svg>
                                        </a>
                                        <a className='footer-social-medias twitter' href='https://twitter.com/gogetssl' aria-label='twitter' rel="noopener" target='_blank'>
                                            <svg role='img' xmlns="http://www.w3.org/2000/svg" viewBox='0 0 32 26'>
                                                <path d="M31.93701 3.11786c-1.17314.51983-2.4319.87237-3.75447 1.02977 1.35043-.80868 2.38415-2.09135 2.87408-3.61506-1.26673.74889-2.66497 1.29267-4.15482 1.58746C25.70876.8473 24.01177.05457 22.12954.05457c-3.61104 0-6.53893 2.92788-6.53893 6.53694 0 .51186.05776 1.0118.16932 1.48986C10.32644 7.80846 5.5084 5.20525 2.28375 1.24958c-.56368.96404-.88435 2.08734-.88435 3.28642 0 2.26863 1.15523 4.27035 2.908 5.44146-1.07159-.03583-2.07943-.33062-2.96174-.8206v.08166c0 3.16689 2.25467 5.80994 5.24427 6.41148-.54774.1474-1.12533.22906-1.72287.22906-.42222 0-.83054-.04182-1.2309-.1215.83253 2.59924 3.24658 4.4894 6.10675 4.54121-2.23675 1.75277-5.05709 2.79446-8.12039 2.79446-.5278 0-1.04768-.03188-1.55954-.08964 2.89404 1.85833 6.32982 2.94184 10.02253 2.94184 12.0282 0 18.603-9.96278 18.603-18.603l-.02192-.84649c1.28465-.91627 2.39602-2.06749 3.27043-3.37808z"></path>
                                            </svg>
                                        </a>
                                        <a className='footer-social-medias shopper' href='https://www.shopperapproved.com/reviews/gogetssl.com/' aria-label='shopper approved' rel="noopener" target='_blank'>
                                            <svg role='img' xmlns="http://www.w3.org/2000/svg" viewBox='0 0 30 32'>
                                                <path d="M2.873 29.222a2.65 2.65 0 1 1 5.299 0 2.65 2.65 0 0 1-5.299 0zm9.949 0a2.65 2.65 0 1 1 5.298 0 2.65 2.65 0 0 1-5.298 0zm5.622-22.517c-3.002 2.767-5.357 5.71-7.3 8.595-.53-1.236-1-2.59-1.53-3.827-.295-.647-.471-1.942-1.472-1.824h-3.65c.824 1.766 1.413 3.532 2.002 5.357.353 1.06.706 2.237 1 3.473.53 2.06 1.413 6.24 1.413 6.416v.354H4.374c-.824-.06-2.237-1.06-2.354-2.002C1.43 18.95.312 10.414.312 10.297V8.53C.43 7.824 1.55 6.705 2.255 6.705h16.189zM29.688.112c-6.83 8.241-9.831 16.836-11.185 25.137h-6.417l.059-.471C14.853 16.595 20.033 7.529 29.51.112h.176z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                    <div className='row-two'>
                                        <a className='footer-social-medias youtube' href='https://www.youtube.com/c/GoGetSSL_official' aria-label='you tube' rel="noopener" target='_blank'>
                                            <svg role='img' xmlns="http://www.w3.org/2000/svg" viewBox='0 0 30 32'>
                                                <path d="M4.914.125l2.36 8.525v4.09h2.044V8.65L11.71.125H9.65l-.856 3.88c-.24 1.132-.395 1.937-.465 2.417h-.062c-.1-.671-.255-1.482-.465-2.433L6.976.125H4.914zm9.18 3.217c-.693 0-1.252.137-1.678.413-.427.275-.74.716-.94 1.317-.2.602-.301 1.397-.301 2.389v1.337c0 .981.09 1.769.265 2.36.175.592.47 1.029.885 1.31.416.28.99.421 1.722.423.711 0 1.278-.14 1.693-.416.415-.276.716-.709.901-1.306.185-.597.278-1.386.278-2.368V7.46c0-.992-.096-1.784-.286-2.381-.19-.596-.489-1.036-.9-1.317-.412-.28-.959-.42-1.64-.42zm3.9.182v6.884c0 .852.146 1.48.436 1.88.292.4.742.6 1.353.6.882 0 1.544-.425 1.984-1.277h.044l.182 1.127h1.623V3.524h-2.072v7.318c-.08.171-.203.313-.369.423a.914.914 0 0 1-.52.166.47.47 0 0 1-.451-.265c-.09-.175-.135-.465-.135-.877V3.524h-2.075zm-3.947 1.247c.29 0 .496.153.61.46.116.304.172.786.172 1.448v2.872c0 .682-.057 1.172-.172 1.473-.114.3-.319.45-.607.451-.29 0-.493-.15-.603-.451-.112-.3-.166-.792-.166-1.473V6.68c0-.66.06-1.143.174-1.449.114-.304.311-.46.592-.46zM3.699 14.618A3.323 3.323 0 0 0 .375 17.94v10.637a3.323 3.323 0 0 0 3.324 3.324H26.3a3.323 3.323 0 0 0 3.324-3.324V17.94a3.323 3.323 0 0 0-3.324-3.323H3.7zm11.379 3.056h1.688v4.1h.013c.151-.296.367-.534.646-.716.28-.183.582-.273.904-.273.415 0 .739.11.974.33.235.22.409.576.514 1.067.105.492.158 1.173.158 2.044v1.228c0 1.16-.138 2.011-.418 2.558-.279.546-.717.82-1.308.82-.33 0-.63-.077-.902-.228a1.475 1.475 0 0 1-.607-.623h-.04l-.176.734h-1.446V17.674zm-10.47.395h5.19v1.41h-1.74v9.236H6.346V19.48H4.608v-1.41zm18.525 2.721c.6 0 1.062.108 1.384.327.32.221.549.565.68 1.029.13.465.195 1.109.195 1.929v1.335h-2.929v.394c0 .5.014.874.044 1.122.03.249.092.433.185.546.093.114.237.171.43.171.263 0 .442-.102.54-.304.098-.202.151-.542.16-1.015l1.508.088c.008.067.013.162.013.28 0 .72-.196 1.257-.59 1.61-.393.357-.95.535-1.67.535-.862 0-1.466-.271-1.814-.812-.349-.541-.52-1.38-.52-2.514v-1.358c0-1.167.181-2.02.54-2.558.36-.538.973-.805 1.844-.805zm-10.86.143h1.753v7.78h-.005v.002H12.65l-.15-.953h-.04c-.372.721-.93 1.08-1.675 1.08-.517 0-.896-.167-1.142-.506-.246-.337-.369-.868-.369-1.586v-5.814h1.756v5.712c0 .346.038.597.114.743.077.149.202.22.382.22a.765.765 0 0 0 .436-.14.87.87 0 0 0 .311-.355v-6.183zm10.824 1.039c-.186 0-.327.054-.416.163-.089.11-.148.29-.176.54-.03.249-.044.629-.044 1.135v.558h1.28v-.558c0-.5-.016-.877-.05-1.135-.033-.259-.092-.439-.181-.545-.09-.105-.226-.158-.413-.158zm-5.557.057a.673.673 0 0 0-.47.202c-.144.136-.246.31-.304.52v4.417a.773.773 0 0 0 .298.304.826.826 0 0 0 .4.103.542.542 0 0 0 .444-.202c.11-.136.189-.364.234-.686.047-.32.07-.765.07-1.332v-1.002c0-.61-.018-1.08-.057-1.41-.037-.33-.107-.566-.202-.704a.476.476 0 0 0-.413-.21z"></path>
                                            </svg>
                                        </a>
                                        <a className='footer-social-medias linkedin' href='https://www.linkedin.com/company/envers-group-sia/about/' aria-label='linkedin' rel="noopener" target='_blank'>
                                            <svg role='img' xmlns="http://www.w3.org/2000/svg" viewBox='0 0 32 31'>
                                                <path d="M31.895 18.938v11.75h-6.816V19.72c0-2.757-.983-4.632-3.45-4.632-1.886 0-2.998 1.27-3.495 2.49-.179.44-.233 1.056-.233 1.664v11.446h-6.81s.092-18.57 0-20.494h6.811v2.905c-.01.024-.029.043-.038.07h.038v-.07c.91-1.396 2.522-3.386 6.142-3.386 4.493 0 7.851 2.929 7.851 9.226zM3.961.312C1.63.312.105 1.84.105 3.856c0 1.962 1.48 3.542 3.768 3.542h.041c2.382 0 3.858-1.58 3.858-3.542C7.725 1.84 6.296.312 3.96.312zM.51 30.688h6.813V10.192H.512v20.496z"></path>
                                            </svg>
                                        </a>
                                    </div>
                                </div>
                                <div className='gdpr'>
                                    <a href="/privacy-policy">
                                        <svg role='img' xmlns="http://www.w3.org/2000/svg" viewBox='0 0 28 32'>
                                            <path d="M14.0015 9.25c-1.375 0-2.438 1.063-2.438 2.375v1.688h4.875v-1.688c0-1.313-1.125-2.375-2.438-2.375h.001zm13.999-5.312C26.5015 2.875 24.1885.25 24.1885.25s-2.063 1.313-4.875 1.313c-2.875 0-5.313-1.563-5.313-1.563s-2.5 1.563-5.313 1.563c-2.813 0-4.938-1.313-4.938-1.313s-2.25 2.625-3.75 3.688c.625.875 3.938 6.063 1.625 12.875-2.188 6.563-1.813 8.188 1.313 10.625 3.5 2.625 6.75.688 11.063 4.438 4.313-3.75 7.563-1.813 11-4.438 3.188-2.438 3.563-4.063 1.375-10.625-2.375-6.813 1-12 1.625-12.875zm-7.75 17.687c0 .563-.5 1.063-1.063 1.063H8.8135c-.563 0-1.063-.5-1.063-1.063v-7.25c0-.563.5-1.063 1.063-1.063h.938v-1.688c0-2.313 1.875-4.188 4.25-4.188 2.313 0 4.25 1.875 4.25 4.188v1.688h.938c.563 0 1.063.5 1.063 1.063v7.25h-.002z"></path>
                                        </svg>
                                        <span>GDPR compliant</span>
                                    </a>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}