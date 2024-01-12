import React from 'react'

export default function Certificates() {
    return (
        <div className='main-sect main-sect-res'>
            <ul className='sect-one'>
                <li className='sect-one-1'>
                    <a href="/dv-ssl/" className="dv nav-link-box">
                        <div className='img-text-icon'>
                            <svg fill="#25958b" width={'30px'} height={'33px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 32">
                                <path d="M2.935 3.425l-2.204.04-.225 2.163C-.587 16.326 2.911 25.146 12.15 31.041l1.35.862 1.35-.862c9.239-5.895 12.737-14.715 11.644-25.413l-.225-2.164-2.204-.039c-3.304-.07-6.43-.822-9.262-2.536L13.5.097 12.197.89C9.365 2.603 6.239 3.356 2.935 3.425zM13.5 29.08l-.403-.256C4.408 23.276 1.988 16.628 3.02 6.583l.062-.652.66-.016c3.622-.07 6.267-.907 9.37-2.784l.388-.24.388.24c3.103 1.877 5.748 2.715 9.37 2.784l.66.016.062.652c1.032 10.045-1.388 16.693-10.077 22.24l-.403.256z"></path>
                            </svg>
                            <span className="symbol-d">D</span>
                        </div>
                        <div className='text-box'>
                            <span className="title">Domain Validation</span>
                            <br />
                            <p>Issued within 2-3 minutes<br />Low trust level. No paperwork</p>
                        </div>
                    </a>
                </li>
                <li className='sect-one-2'>
                    <a href="/multi-domain-ssl/" className="dv nav-link-box">
                        <div className='img-text-icon'>
                            <svg fill="#d2143ce6" width={'30px'} height={'33px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 32">
                                <path d="M2.935 3.425l-2.204.04-.225 2.163C-.587 16.326 2.911 25.146 12.15 31.041l1.35.862 1.35-.862c9.239-5.895 12.737-14.715 11.644-25.413l-.225-2.164-2.204-.039c-3.304-.07-6.43-.822-9.262-2.536L13.5.097 12.197.89C9.365 2.603 6.239 3.356 2.935 3.425zM13.5 29.08l-.403-.256C4.408 23.276 1.988 16.628 3.02 6.583l.062-.652.66-.016c3.622-.07 6.267-.907 9.37-2.784l.388-.24.388.24c3.103 1.877 5.748 2.715 9.37 2.784l.66.016.062.652c1.032 10.045-1.388 16.693-10.077 22.24l-.403.256z"></path>
                            </svg>
                            <span className="symbol-s">S</span>
                        </div>
                        <div className='text-box'>
                            <span className="title">Multi-Domain (SAN)</span>
                            <br />
                            <p>Secure up to 250 domains with one SSL Certificate</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/ov-ssl/" className="dv nav-link-box">
                        <div className='img-text-icon'>
                            <svg fill="#dc8510e6" width={'30px'} height={'33px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 32">
                                <path d="M2.935 3.425l-2.204.04-.225 2.163C-.587 16.326 2.911 25.146 12.15 31.041l1.35.862 1.35-.862c9.239-5.895 12.737-14.715 11.644-25.413l-.225-2.164-2.204-.039c-3.304-.07-6.43-.822-9.262-2.536L13.5.097 12.197.89C9.365 2.603 6.239 3.356 2.935 3.425zM13.5 29.08l-.403-.256C4.408 23.276 1.988 16.628 3.02 6.583l.062-.652.66-.016c3.622-.07 6.267-.907 9.37-2.784l.388-.24.388.24c3.103 1.877 5.748 2.715 9.37 2.784l.66.016.062.652c1.032 10.045-1.388 16.693-10.077 22.24l-.403.256z"></path>
                            </svg>
                            <span className="symbol-b">B</span>
                        </div>
                        <div className='text-box'>
                            <span className="title">Business Validation</span>
                            <br />
                            <p>Issued within 1-3 days<br />Advanced trust level</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/wildcard-ssl/" className="dv nav-link-box">
                        <div className='img-text-icon'>
                            <svg fill="#9d7040e6" width={'30px'} height={'33px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 32">
                                <path d="M2.935 3.425l-2.204.04-.225 2.163C-.587 16.326 2.911 25.146 12.15 31.041l1.35.862 1.35-.862c9.239-5.895 12.737-14.715 11.644-25.413l-.225-2.164-2.204-.039c-3.304-.07-6.43-.822-9.262-2.536L13.5.097 12.197.89C9.365 2.603 6.239 3.356 2.935 3.425zM13.5 29.08l-.403-.256C4.408 23.276 1.988 16.628 3.02 6.583l.062-.652.66-.016c3.622-.07 6.267-.907 9.37-2.784l.388-.24.388.24c3.103 1.877 5.748 2.715 9.37 2.784l.66.016.062.652c1.032 10.045-1.388 16.693-10.077 22.24l-.403.256z"></path>
                            </svg>
                            <span className="symbol-w">W</span>
                        </div>
                        <div className='text-box'>
                            <span className="title">Wildcard Certificates</span>
                            <br />
                            <p>Secure unlimited sub-domains<br />with one SSL Certificate</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/ev-ssl/" className="dv nav-link-box">
                        <div className='img-text-icon'>
                            <svg fill="#78a22ee6" width={'30px'} height={'33px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 32">
                                <path d="M2.935 3.425l-2.204.04-.225 2.163C-.587 16.326 2.911 25.146 12.15 31.041l1.35.862 1.35-.862c9.239-5.895 12.737-14.715 11.644-25.413l-.225-2.164-2.204-.039c-3.304-.07-6.43-.822-9.262-2.536L13.5.097 12.197.89C9.365 2.603 6.239 3.356 2.935 3.425zM13.5 29.08l-.403-.256C4.408 23.276 1.988 16.628 3.02 6.583l.062-.652.66-.016c3.622-.07 6.267-.907 9.37-2.784l.388-.24.388.24c3.103 1.877 5.748 2.715 9.37 2.784l.66.016.062.652c1.032 10.045-1.388 16.693-10.077 22.24l-.403.256z"></path>
                            </svg>
                            <span className="symbol-e">E</span>
                        </div>
                        <div className='text-box'>
                            <span className="title">Extended Validation</span>
                            <br />
                            <p>Issued within 2-7 days<br />Highest trust level</p>
                        </div>
                    </a>
                </li>
                <li>
                    <a href="/smime-ssl/" className="dv nav-link-box">
                        <div className='img-text-icon'>
                            <svg fill="#c63200e6" width={'30px'} height={'33px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 32">
                                <path d="M2.935 3.425l-2.204.04-.225 2.163C-.587 16.326 2.911 25.146 12.15 31.041l1.35.862 1.35-.862c9.239-5.895 12.737-14.715 11.644-25.413l-.225-2.164-2.204-.039c-3.304-.07-6.43-.822-9.262-2.536L13.5.097 12.197.89C9.365 2.603 6.239 3.356 2.935 3.425zM13.5 29.08l-.403-.256C4.408 23.276 1.988 16.628 3.02 6.583l.062-.652.66-.016c3.622-.07 6.267-.907 9.37-2.784l.388-.24.388.24c3.103 1.877 5.748 2.715 9.37 2.784l.66.016.062.652c1.032 10.045-1.388 16.693-10.077 22.24l-.403.256z"></path>
                            </svg>
                            <span className="symbol-a">@</span>
                        </div>
                        <div className='text-box'>
                            <span className="title">Email & Document Signing</span>
                            <br />
                            <p>Designed for MS Exchange and OCS environments</p>
                        </div>
                    </a>
                </li>
                <li className='sect-one-3'>
                    <a href="/code-signing-ssl/" className="dv nav-link-box">
                        <div className='img-text-icon'>
                            <svg fill="rgb(140 140 140)" width={'30px'} height={'33px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 32">
                                <path d="M2.935 3.425l-2.204.04-.225 2.163C-.587 16.326 2.911 25.146 12.15 31.041l1.35.862 1.35-.862c9.239-5.895 12.737-14.715 11.644-25.413l-.225-2.164-2.204-.039c-3.304-.07-6.43-.822-9.262-2.536L13.5.097 12.197.89C9.365 2.603 6.239 3.356 2.935 3.425zM13.5 29.08l-.403-.256C4.408 23.276 1.988 16.628 3.02 6.583l.062-.652.66-.016c3.622-.07 6.267-.907 9.37-2.784l.388-.24.388.24c3.103 1.877 5.748 2.715 9.37 2.784l.66.016.062.652c1.032 10.045-1.388 16.693-10.077 22.24l-.403.256z"></path>
                            </svg>
                            <span className="symbol-c">C</span>
                        </div>
                        <div className='text-box'>
                            <span className="title">Code Signing Certificates</span>
                            <br />
                            <p>Trust for software downloads<br />by verifying code integrity</p>
                        </div>
                    </a>
                </li>
                <li className='sect-one-4'>
                    <a href="/digicert/vmc-certificates/" className="dv nav-link-box">
                        <div className='img-text-icon'>
                            <svg fill="#23a095e6" width={'30px'} height={'33px'} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 27 32">
                                <path d="M2.935 3.425l-2.204.04-.225 2.163C-.587 16.326 2.911 25.146 12.15 31.041l1.35.862 1.35-.862c9.239-5.895 12.737-14.715 11.644-25.413l-.225-2.164-2.204-.039c-3.304-.07-6.43-.822-9.262-2.536L13.5.097 12.197.89C9.365 2.603 6.239 3.356 2.935 3.425zM13.5 29.08l-.403-.256C4.408 23.276 1.988 16.628 3.02 6.583l.062-.652.66-.016c3.622-.07 6.267-.907 9.37-2.784l.388-.24.388.24c3.103 1.877 5.748 2.715 9.37 2.784l.66.016.062.652c1.032 10.045-1.388 16.693-10.077 22.24l-.403.256z"></path>
                            </svg>
                            <span className="symbol-v">V</span>
                        </div>
                        <div className='text-box'>
                            <span className="title">Code Signing Certificates</span>
                            <br />
                            <p>Trust for software downloads<br />by verifying code integrity</p>
                        </div>
                    </a>
                </li>
            </ul>
        </div>
    )
}