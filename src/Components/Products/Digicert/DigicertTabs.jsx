import React, { useEffect, useState } from 'react';
import { useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

export default function DigicertTabs({ filteredProducts }) {
    const navigate = useNavigate();

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

    const send = (item) => {
        fetch(`https://my.gogetssl.com/api/products/details/${item.id}?auth_key=3e317d975d4cd3206b13a56167d8bbeaac41a872`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch product details');
                }
                return response.json();
            })
            .then(data => {
                navigate(`/product/${item.id}`, {
                    state: { productDetails: data, item }
                });
            })
            .catch(error => console.error('Error fetching product details:', error));
    }

    const firstTextColor = (text) => {
        let words = text.split(' ');
        let firstWord = words[0];
        let remainingWords = words.slice(1).join(' ');
        let highlightedProductName = (
            <>
                <span style={{ color: '#0274c4' }}>{firstWord}</span>
                <span style={{ color: '#9e9e9e' }}> {remainingWords}</span>
            </>
        );
        return highlightedProductName;
    }

    return (
        <table className='table-list'>
            <thead>
                <tr className='title-details'>
                    <th className='digicert-product-title'>Название продукта</th>
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
                                    <td className='product-price'>{item.prices[12]} $</td>
                                    <td className='details-btn'>
                                        <button onClick={() => send(item)} className='details-arrow-btn'>
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
    )
}
