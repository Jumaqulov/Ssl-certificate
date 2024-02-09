import React, { useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom'
import { Tab, Tabs, TabList, TabPanel } from 'react-tabs';
import { VscSettings } from "react-icons/vsc";
import { GiGearHammer, GiPriceTag } from "react-icons/gi";
import Perproduct from '../../../Requests/Perproduct';


export default function DigicertTabs({ filteredProducts }) {
    const [product, setProduct] = useState([])
    const navigate = useNavigate()

    const filterID = filteredProducts.length > 0 ? filteredProducts.map(id => { return id.id }) : []

    async function perProd() {
        const items = [];
        if (filterID.length > 0) {
            await Promise.all(filterID.map(async i => {
                const current = await Perproduct.getPerProduct(i);
                items.push(current);
            }));
        } else {
            console.log('sorov jonatilmadi');
        }
        setProduct(items);
    }

    function formatAndRoundNumber(number) {
        const roundedNumber = Math.round(number);
        const formattedNumber = new Intl.NumberFormat('en-US').format(roundedNumber);
        return formattedNumber.replace(/,/g, ' ');
    }

    function validation(product_type) {
        if (product_type === "business_validation") {
            return <p className='validation-busines'>Бизнес</p>
        } else if (product_type === "extended_validation") {
            return <p className='validation-extended'>Расширенный</p>
        } else if (product_type === "domain_validation") {
            return <p className='domian-extended'>Расширенный</p>
        }
    }

    function arrow_link() {
        return (
            <span className='arrow-link'>
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
        )
    }

    function send(items) {
        navigate(`/digicert/${items.id}`, {
            state: items
        })
    }

    function calculatePeriodInYears(months) {
        const years = Math.floor(months / 12);
        const remainingMonths = months % 12;
        let result = '';

        if (years > 0) {
            result += years + (years === 1 ? ' год ' : ' года ');
        }

        if (remainingMonths > 0) {
            result += remainingMonths + (remainingMonths === 1 ? ' месяц' : ' месяца');
        }

        return result.trim();
    }

    const combinedArray = filteredProducts.map((item, index) => [item, product[index]]);

    const mappedArray = combinedArray.map((item, index) => {
        return {
            value1: item[0],
            value2: item[1]
        };
    });

    console.log(mappedArray);
    console.log(product);

    useEffect(() => {
        perProd()
    }, [])

    return (
        <Tabs>
            <TabList className='tab-list'>
                <Tab className='tab-list-items'>
                    <VscSettings />
                    <span>Основные свойства</span>
                </Tab>
                <Tab className='tab-list-items'>
                    <GiGearHammer />
                    <span>Технические</span>
                </Tab>
                <Tab className='tab-list-items'>
                    <GiPriceTag />
                    <span>Гарантия/Срок</span>
                </Tab>
            </TabList>
            <TabPanel>
                <table className='table-list'>
                    <thead>
                        <tr className='title-details'>
                            <th className='digicert-product-title'>Название продукта</th>
                            <th>Выпуск</th>
                            <th>Цена/год</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mappedArray.length > 0 ?
                                mappedArray.map((item, index) => {
                                    console.log(item.value1.product);
                                    return (
                                        <tr key={index} className='product-list-details'>
                                            <td className='product-name'>{item.value1.product}</td>
                                            <td>{item.value2.estimate}</td>
                                            <td>{item.value1.prices[12]}$</td>
                                            <td className='details-btn'>
                                                <button onClick={() => send(product)} className='details-arrow-btn'>
                                                    {arrow_link()}
                                                    <span>Подробности</span>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                <tr>
                                    <td colSpan={4}>There is no product</td>
                                </tr>
                        }
                    </tbody>
                </table>
            </TabPanel>
            <TabPanel>
                <table className='table-list'>
                    <thead>
                        <tr className='title-details'>
                            <th className='digicert-product-title'>Название продукта</th>
                            <th>Печать сайта</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mappedArray.length > 0 ?
                                mappedArray.map((item, index) => {
                                    console.log(item.value1.product);
                                    return (
                                        <tr key={index} className='product-list-details'>
                                            <td className='product-name'>{item.value1.product}</td>
                                            <td>{item.value2.site_seal}</td>
                                            <td className='details-btn'>
                                                <button onClick={() => send(product)} className='details-arrow-btn'>
                                                    {arrow_link()}
                                                    <span>Подробности</span>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                <tr>
                                    <td colSpan={4}>There is no product</td>
                                </tr>
                        }
                    </tbody>
                </table>
            </TabPanel>
            <TabPanel>
                <table className='table-list'>
                    <thead>
                        <tr className='title-details'>
                            <th className='digicert-product-title'>Название продукта</th>
                            <th>Гарантия</th>
                            <th>Срок</th>
                            <th></th>
                        </tr>
                    </thead>
                    <tbody>
                        {
                            mappedArray.length > 0 ?
                                mappedArray.map((item, index) => {
                                    console.log(item.value1.product);
                                    return (
                                        <tr key={index} className='product-list-details'>
                                            <td className='product-name'>{item.value1.product}</td>
                                            <td>{item.value2.ssl_warranty}</td>
                                            <td>{calculatePeriodInYears(item.value2.terms)}</td>
                                            <td className='details-btn'>
                                                <button onClick={() => send(product)} className='details-arrow-btn'>
                                                    {arrow_link()}
                                                    <span>Подробности</span>
                                                </button>
                                            </td>
                                        </tr>
                                    )
                                })
                                :
                                <tr>
                                    <td colSpan={4}>There is no product</td>
                                </tr>
                        }
                    </tbody>
                </table>
            </TabPanel>
        </Tabs>
    )
}