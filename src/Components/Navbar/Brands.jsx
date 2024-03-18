import React, { useEffect, useState } from 'react'
import { Link } from 'react-router-dom'
import Allproducts from '../../Requests/Allproducts'
import { corsUrl } from '../../Requests/request'

export default function Brands() {
    const [productList, setProductList] = useState([])

    function handleClick(href) {
        if (href === 'digicert') {
            window.location.href = '/digicert'
        } else if (href === 'gogetssl') {
            window.location.href = '/ssl-certs'
        } else if (href === 'sectigo') {
            window.location.href = '/sectigo'
        } else if (href === 'geotrust') {
            window.location.href = '/geotrust'
        } else if (href === 'rapidssl') {
            window.location.href = '/rapidssl'
        } else if (href === 'thawte') {
            window.location.href = '/thawte'
        } else if (href === 'report-better-price') {
            window.location.href = '/report-better-price'
        } else if (href === 'compare-dv-ssl') {
            window.location.href = '/compare-dv-ssl'
        }
    }

    async function products() {
        const currentProducts = await Allproducts.getProducts()
        setProductList(currentProducts)
    }

    const removeFirsttWord = (text) => {
        let words = text.split(' ');
        let remainingWords = words.slice(1).join(' ');
        return remainingWords;
    }

    const digicert = productList.length > 0 ? productList.filter(digicert => {
        return digicert.brand === "digicert";
    }) : [];

    const gogetssl = productList.length > 0 ? productList.filter(gogetssl => {
        return gogetssl.brand === "comodo_ggssl";
    }) : [];

    const sectigo = productList.length > 0 ? productList.filter(sectigo => {
        return sectigo.brand === "comodo";
    }) : [];

    const geotrust = productList.length > 0 ? productList.filter(geotrust => {
        return geotrust.brand === "geotrust";
    }) : [];

    const rapidssl = productList.length > 0 ? productList.filter(rapidssl => {
        return rapidssl.brand === "rapidssl";
    }) : [];

    const thawte = productList.length > 0 ? productList.filter(thawte => {
        return thawte.brand === "thawte";
    }) : [];

    useEffect(() => {
        products()
    }, [])

    return (
        <div className='main-sect'>
            <div className='sect-two sect-res'>
                <div className='sect-two-item'>
                    <button onClick={() => handleClick('digicert')} className='sect-two-item-btn btn-digicert'>Digicert</button>
                    {
                        digicert.length > 0 ?
                            digicert.map((link, index) => {
                                return (
                                    <a className='product-link' key={index} href={`/product/${link.id}`}>{removeFirsttWord(link.product)}</a>
                                )
                            })
                            : <p>Loading</p>
                    }
                </div>
                <div className='sect-two-item'>
                    <button onClick={() => handleClick('gogetssl')} className='sect-two-item-btn btn-gogetssl'>GoGetSSL</button>
                    {
                        gogetssl.length > 0 ?
                            gogetssl.map((link, index) => {
                                return (
                                    <a className='product-link' key={index} href={`/product/${link.id}`}>{removeFirsttWord(link.product)}</a>
                                )
                            })
                            : <p>Loading</p>
                    }
                </div>
                <div className='sect-two-item'>
                    <button onClick={() => handleClick('sectigo')} className='sect-two-item-btn btn-sectigo'>Sectigo</button>
                    {
                        (sectigo.length > 0 && sectigo.length > 11) ?
                            <>
                                {sectigo.slice(0, 11).map((link, index) => (
                                    <a className='product-link' key={index} href={`/product/${link.id}`}>{removeFirsttWord(link.product)}</a>
                                ))}
                                <Link className='view-all' to="/sectigo">Смотреть все</Link>
                            </>
                            : <p>Loading</p>
                    }
                </div>
                <div className='sect-two-item'>
                    <button onClick={() => handleClick('geotrust')} className='sect-two-item-btn btn-geotrust'>GeoTrust</button>
                    {
                        geotrust.length > 0 ?
                            geotrust.map((link, index) => {
                                return (
                                    <a className='product-link' key={index} href={`/product/${link.id}`}>{removeFirsttWord(link.product)}</a>
                                )
                            })
                            : <p>Loading</p>
                    }
                    <button onClick={() => handleClick('rapidssl')} className='sect-two-item-btn btn-rapidssl'>RapidSSL</button>
                    {
                        rapidssl.length > 0 ?
                            rapidssl.map((link, index) => {
                                return (
                                    <a className='product-link' key={index} href={`/product/${link.id}`}>{removeFirsttWord(link.product)}</a>
                                )
                            })
                            : <p>Loading</p>
                    }
                </div>
                <div className='sect-two-item'>
                    <button onClick={() => handleClick('thawte')} className='sect-two-item-btn btn-thawte'>Thawte</button>
                    {
                        thawte.length > 0 ?
                            thawte.map((link, index) => {
                                return (
                                    <a className='product-link' key={index} href={`/product/${link.id}`}>{removeFirsttWord(link.product)}</a>
                                )
                            })
                            : <p>Loading</p>
                    }
                    <button onClick={() => handleClick('report-better-price')} className='sect-two-item-btn btn-target'>
                        <span>Соответствие цен</span>
                    </button>
                    {/* <button onClick={() => handleClick('compare-dv-ssl')} className='sect-two-item-btn btn-compare'>
                        <span>Сравнить</span>
                    </button> */}
                </div>
            </div>
        </div>
    )
}