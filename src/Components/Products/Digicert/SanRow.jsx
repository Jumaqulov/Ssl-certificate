import React from 'react'
import { GiSandsOfTime, GiThumbUp } from "react-icons/gi";
import { LiaFileContractSolid } from "react-icons/lia";
import { MdOutlineWorkspacePremium } from "react-icons/md";
import { FaTruckFast, FaInfinity } from "react-icons/fa6";
import { TiDeleteOutline } from "react-icons/ti";
import { TbWorldWww, TbLockCheck  } from "react-icons/tb";
import { HiOutlineDevicePhoneMobile } from "react-icons/hi2";
import { AiOutlineReload } from "react-icons/ai";
import { RiExchangeDollarLine } from "react-icons/ri";



export default function SanRow({ product, productDetails }) {
    console.log(product);
    console.log(productDetails);

    const validationDay = () => {
        if (product.estimate === "5 minutes") {
            return (
                <div className="san-yes">
                    <FaTruckFast />
                    <p>Валидация</p>
                    <p>Экспресс 5 мин выдача</p>
                </div>
            )
        } else if (product.estimate == null) {
            return (
                <div className="san-yes">
                    <GiSandsOfTime />
                    <p>Валидация</p>
                    <p>1-5 дней</p>
                </div>
            )
        } else {
            return (
                <div className="san-yes">
                    <GiSandsOfTime />
                    <p>Валидация</p>
                    <p>{product.estimate}</p>
                </div>
            )
        }
    }

    const validation = () => {
        if (productDetails.product_type === "extended_validation") {
            return (
                <div className="san-yes">
                    <LiaFileContractSolid />
                    <p>Расширенная проверка</p>
                </div>
            )
        } else if (productDetails.product_type === "business_validation") {
            return (
                <div className="san-yes">
                    <LiaFileContractSolid />
                    <p>Проверка бизнеса</p>
                </div>
            )
        } else if (productDetails.product_type === "domain_validation") {
            return (
                <div className="san-yes">
                    <LiaFileContractSolid />
                    <p>Проверка домена</p>
                </div>
            )
        } else {
            return (
                <div className="san-yes">
                    <LiaFileContractSolid />
                    <p>Расширенная проверка</p>
                </div>
            )
        }
    }

    const organization = () => {
        if (product.product_organization === 'yes') {
            return (
                <div className="san-no">
                    <GiThumbUp />
                    <p>Нет Бумажная работа</p>
                    <div></div>
                    <TiDeleteOutline className='no-aviable-svg' />
                </div>
            )
        } else {
            return (
                <div className="san-yes">
                    <GiThumbUp />
                    <p>Нет Бумажная работа</p>
                </div>
            )
        }
    }

    const siteSeal = () => {
        if (product.site_seal === "dynamic") {
            return (
                <div className="san-yes">
                    <MdOutlineWorkspacePremium />
                    <p>Бесплатная динамическая Печать сайта</p>
                </div>
            )
        } else {
            return (
                <div className="san-yes">
                    <MdOutlineWorkspacePremium />
                    <p>Бесплатная статика Печать сайта</p>
                </div>
            )
        }
    }

    const www = () => {
        return (
            <div className="san-yes">
                <TbWorldWww className='www-svg' />
                <p>www и <br />не-www</p>
            </div>
        )
    }

    const mobile = () => {
        return (
            <div className="san-yes">
                <HiOutlineDevicePhoneMobile className='www-svg' />
                <p>Мобильный Дружелюбный</p>
            </div>
        )
    }

    const unlimeted = () => {
        if (product.product_unlimited_servers === 'yes') {
            return (
                <div className="san-yes">
                    <FaInfinity />
                    <p>Бесплатное неограниченное лицензирование серверов</p>
                </div>
            )
        } else {
            return (
                <div className="san-no">
                    <FaInfinity />
                    <p>Бесплатное неограниченное лицензирование серверов</p>
                    <div></div>
                    <TiDeleteOutline className='no-aviable-svg' />
                </div>
            )
        }
    }

    const greenBar = () => {
        if (productDetails.trust_logo === 0) {
            return (
                <div className="san-yes">
                    <TbLockCheck className='www-svg'/>
                    <p>Зеленый адресная <br /> строка</p>
                </div>
            )
        } else {
            return (
                <div className="san-no">
                    <TbLockCheck className='www-svg'/>
                    <p>Зеленый адресная <br /> строка</p>
                    <div></div>
                    <TiDeleteOutline className='no-aviable-svg' />
                </div>
            )
        }
    }

    const reIssue = () => {
        if (product.free_reissues == true) {
            return (
                <div className="san-yes">
                    <AiOutlineReload/>
                    <p>Бесплатно <br />Переиздания</p>
                </div>
            )
        } else {
            return (
                <div className="san-no">
                    <AiOutlineReload/>
                    <p>Бесплатно <br />Переиздания</p>
                    <div></div>
                    <TiDeleteOutline className='no-aviable-svg' />
                </div>
            )
        }
    }

    const warranty = () => {
        return (
            <div className="san-yes">
                <RiExchangeDollarLine />
                <p>{product.ssl_warranty} <br /> Гарантия</p>
            </div>
        )
    }

    return (
        <div className="san-row">
            {validationDay()}
            {validation()}
            {organization()}
            {www()}
            {siteSeal()}
            {mobile()}
            {unlimeted()}
            {greenBar()}
            {reIssue()}
            {warranty()}
        </div>
    )
}