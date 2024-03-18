import React from 'react';
import { IoIosArrowForward } from "react-icons/io";
import { USD } from '../../../Requests/request';

export default function GoGetSslTabs({ filteredProducts }) {
    const arrow_link = () => {
        return (
            <span className='arrow-link'>
                <span>
                    <IoIosArrowForward className='arrow-1' />
                </span>
                <span>
                    <IoIosArrowForward className='arrow-2' />
                </span>
                <span>
                    <IoIosArrowForward className='arrow-3' />
                </span>
            </span>
        )
    }

    const firstTextColor = (text) => {
        let words = text.split(' ');
        let firstWord = words[0];
        let remainingWords = words.slice(1).join(' ');
        let highlightedProductName = (
            <>
                <span style={{ color: '#dc8510' }}>{firstWord}</span>
                <span style={{ color: '#9e9e9e' }}> {remainingWords}</span>
            </>
        );
        return highlightedProductName;
    }

    function formatNumber(number) {
        return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
    }

    const roundToTwoDecimalPlaces = (number) => {
        return Math.round(number * 100) / 100;
    }

    return (
        <table className='table-list'>
            <thead>
                <tr className='title-details'>
                    <th className='gogetssl-product-title' >Название продукта</th>
                    <th>Цена/год</th>
                    <th></th>
                </tr>
            </thead>
            <tbody>
                {
                    filteredProducts.length > 0 ?
                        filteredProducts.map((item, index) => {
                            return (
                                <tr key={index} className='product-list-details'>
                                    <td className='product-name'>{firstTextColor(item.product)}</td>
                                    <td className='product-price'>{item.max_period >= 12 ? formatNumber(roundToTwoDecimalPlaces(item.prices[12] * USD + item.prices[12] * USD * 0.12)) : formatNumber(roundToTwoDecimalPlaces(item.prices[item.max_period] * USD + item.prices[item.max_period] * USD * 0.12))} UZS</td>
                                    <td className='details-btn'>
                                        <a href={`/product/${item.product_id}`} className='details-arrow-btn'>
                                            {arrow_link()}
                                            <span>Подробности</span>
                                        </a>
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
    )
}