import React from 'react'
import { VscGear } from "react-icons/vsc";

export default function CSR_SSlmain() {
    return (
        <div className='wiki-menu-box'>
            <h5>
                <span>
                    <VscGear className='wm-csr'/>
                </span>
                <a href="/wiki/csr-generation">Генерация CSR / SSL</a>
            </h5>
            <ul>
                <li>
                    <span className='next'>
                        <svg className='wiki-arrow' viewBox='0 0 19 32'>
                            <path
                                d="M5.66962.995l12.304 12.89c.642.643.964 1.287.961 2.144s-.326 1.501-.97 2.144l-12.353 12.839c-.539.643-1.288.856-2.254.854-.858-.001-1.609-.218-2.25-.863-1.392-1.397-1.39-2.79.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9.009-4.289.645-.641 1.396-.854 2.253-.852.966 0 1.716.218 2.25.86v.001z">
                            </path>
                        </svg>
                    </span>
                    <a className='wiki-link' href="/wiki/csr-generation/generate-csr-without-cn">Как сгенерировать CSR без общего имени</a>
                </li>
                <li>
                    <span className='next'>
                        <svg className='wiki-arrow' viewBox='0 0 19 32'>
                            <path
                                d="M5.66962.995l12.304 12.89c.642.643.964 1.287.961 2.144s-.326 1.501-.97 2.144l-12.353 12.839c-.539.643-1.288.856-2.254.854-.858-.001-1.609-.218-2.25-.863-1.392-1.397-1.39-2.79.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9.009-4.289.645-.641 1.396-.854 2.253-.852.966 0 1.716.218 2.25.86v.001z">
                            </path>
                        </svg>
                    </span>
                    <a className='wiki-link' href="/wiki/csr-generation/generate-ecc-apache">Как сгенерировать ECC CSR/KEY с помощью Apache</a>
                </li>
                <li>
                    <span className='next'>
                        <svg className='wiki-arrow' viewBox='0 0 19 32'>
                            <path
                                d="M5.66962.995l12.304 12.89c.642.643.964 1.287.961 2.144s-.326 1.501-.97 2.144l-12.353 12.839c-.539.643-1.288.856-2.254.854-.858-.001-1.609-.218-2.25-.863-1.392-1.397-1.39-2.79.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9.009-4.289.645-.641 1.396-.854 2.253-.852.966 0 1.716.218 2.25.86v.001z">
                            </path>
                        </svg>
                    </span>
                    <a className='wiki-link' href="/wiki/csr-generation/generate-csr-iis-7">Как сгенерировать CSR на IIS 7 и 8</a>
                </li>
                <li>
                    <span className='next'>
                        <svg className='wiki-arrow' viewBox='0 0 19 32'>
                            <path
                                d="M5.66962.995l12.304 12.89c.642.643.964 1.287.961 2.144s-.326 1.501-.97 2.144l-12.353 12.839c-.539.643-1.288.856-2.254.854-.858-.001-1.609-.218-2.25-.863-1.392-1.397-1.39-2.79.008-4.288l10.314-10.7-10.272-10.74c-1.391-1.505-1.39-2.9.009-4.289.645-.641 1.396-.854 2.253-.852.966 0 1.716.218 2.25.86v.001z">
                            </path>
                        </svg>
                    </span>
                    <a className='wiki-link' href="/wiki/csr-generation/generate-csr-iis-10">Как сгенерировать CSR на IIS 10</a>
                </li>
            </ul>
        </div>
    )
}