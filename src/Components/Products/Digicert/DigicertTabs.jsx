import React, { useEffect, useState } from 'react';
import { Link, useNavigate } from 'react-router-dom';
import { IoIosArrowForward } from "react-icons/io";

export default function DigicertTabs({ filteredProducts }) {
    const navigate = useNavigate();

    function arrow_link() {
        return (
            <span className='arrow-link'>
                <span>
                    <IoIosArrowForward />
                </span>
                <span>
                    <IoIosArrowForward />
                </span>
                <span>
                    <IoIosArrowForward />
                </span>
            </span>
        )
    }

    function send(id) {
        fetch(`https://my.gogetssl.com/api/products/details/${id}?auth_key=3e317d975d4cd3206b13a56167d8bbeaac41a872`)
            .then(response => {
                if (!response.ok) {
                    throw new Error('Failed to fetch product details');
                }
                return response.json();
            })
            .then(data => {
                navigate(`/digicert/${id}`, {
                    state: { productDetails: data }
                });
            })
            .catch(error => console.error('Error fetching product details:', error));
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
                                    <td className='product-name'>{item.product}</td>
                                    <td>{item.prices[12]} $</td>
                                    <td className='details-btn'>
                                        <button onClick={() => send(item.id)} className='details-arrow-btn'>
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
