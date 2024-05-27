import React, { useEffect, useState } from 'react'
import {FaHandshake} from 'react-icons/fa'
import { PiGearSix } from "react-icons/pi";
import { GiPriceTag, GiGearHammer, GiBigGear } from "react-icons/gi";
import { SlSupport } from "react-icons/sl";
import { IoIosNotificationsOutline } from "react-icons/io";
import { MdOutlineWorkspacePremium, MdOutlineBusinessCenter } from "react-icons/md";
import { LiaFileContractSolid } from "react-icons/lia";
import { BsGearWideConnected } from "react-icons/bs";



export default function Sidebar() {
    const [link, setLink] = useState({
        link1: false,
        link2: false,
        link3: false,
        link4: false,
        link5: false,
        link6: false,
        link7: false,
        link8: false,
        link9: false,
        link10: false,
        link11: false,
    });

    useEffect(() => {
        const pageAddress = window.location.pathname;
        if (pageAddress === '/reseller-program') {
            setLink((prevLink) => ({ ...prevLink, link1: !prevLink.link1 }));
        } else if (pageAddress === '/refund-policy') {
            setLink((prevLink) => ({ ...prevLink, link2: !prevLink.link2 }));
        } else if (pageAddress === '/support') {
            setLink((prevLink) => ({ ...prevLink, link3: !prevLink.link3 }));
        } else if (pageAddress == '/wiki') {
            setLink((prevLink) => ({ ...prevLink, link4: !prevLink.link4 }));
        } else if (pageAddress === '/news') {
            setLink((prevLink) => ({ ...prevLink, link5: !prevLink.link5 }));
        } else if (pageAddress === '/company') {
            setLink((prevLink) => ({ ...prevLink, link6: !prevLink.link6 }));
        } else if (pageAddress === '/privacy-policy') {
            setLink((prevLink) => ({ ...prevLink, link7: !prevLink.link7 }));
        } else if (pageAddress === '/terms-and-conditions') {
            setLink((prevLink) => ({ ...prevLink, link8: !prevLink.link8 }));
        } else if (pageAddress === '/online-csr-generator') {
            setLink((prevLink) => ({ ...prevLink, link9: !prevLink.link9 }));
        } else if (pageAddress === '/online-csr-decoder') {
            setLink((prevLink) => ({ ...prevLink, link10: !prevLink.link10 }));
        } else if (pageAddress === '/check-ssl-installation') {
            setLink((prevLink) => ({ ...prevLink, link11: !prevLink.link11 }));
        } else if (pageAddress.startsWith('/wiki/')) {
            setLink((prevLink) => ({ ...prevLink, link4: !prevLink.link4 }));
        }
    }, []);

    return (
        <div className='side-bar-main'>
            <div className="list-link">
                <ul>
                    <li>
                        <a className={`${link.link2 ? 'activeLink' : ''}`} href="/refund-policy">
                            <GiPriceTag className='side-bar-svg' />
                            <span>Платежи</span>
                        </a>
                    </li>
                    <li>
                        <a className={`${link.link3 ? 'activeLink' : ''}`} href="/support">
                            <SlSupport className='side-bar-svg' />
                            <span>Контакты/поддержка</span>
                        </a>
                    </li>
                    <li>
                        <a className={`${link.link4 ? 'activeLink' : ''}`} href="/wiki">
                            <GiGearHammer className='side-bar-svg' />
                            <span>Вики и руководства</span>
                        </a>
                    </li>
                    <li>
                        <a className={`${link.link5 ? 'activeLink' : ''}`} href="/news">
                            <IoIosNotificationsOutline className='side-bar-svg' />
                            <span>Корпоративные новости</span>
                        </a>
                    </li>
                    <li>
                        <a className={`${link.link6 ? 'activeLink' : ''}`} href="/company">
                            <MdOutlineBusinessCenter className='side-bar-svg' />
                            <span>О компании</span>
                        </a>
                    </li>
                    <li>
                        <a className={`${link.link7 ? 'activeLink' : ''}`} href="/privacy-policy">
                            <MdOutlineWorkspacePremium className='side-bar-svg' />
                            <span>Конфиденциальности</span>
                        </a>
                    </li>
                    <li>
                        <a className={`${link.link8 ? 'activeLink' : ''}`} href="/terms-and-conditions">
                            <LiaFileContractSolid className='side-bar-svg' />
                            <span>Условия и положения</span>
                        </a>
                    </li>
                </ul>
            </div>
            <div className='list-link list-link-2'>
                <ul>
                    <li>
                        <a className={`${link.link9 ? 'activeLink' : ''}`} href="/online-csr-generator">
                            <PiGearSix className='side-bar-svg-gear' />
                            <span>Генератор CSR</span>
                        </a>
                    </li>
                    <li>
                        <a className={`${link.link10 ? 'activeLink' : ''}`} href="/online-csr-decoder">
                            <BsGearWideConnected className='side-bar-svg-decoder' />
                            <span>Декодер CSR</span>
                        </a>
                    </li>
                    <li>
                        <a className={`${link.link11 ? 'activeLink' : ''}`} href="/check-ssl-installation">
                            <GiBigGear className='side-bar-svg-checker' />
                            <span>Проверка SSL</span>
                        </a>
                    </li>
                </ul>
            </div>
        </div>
    )
}