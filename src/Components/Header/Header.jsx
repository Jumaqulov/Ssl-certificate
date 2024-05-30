import React from 'react';
import { RiShoppingCartLine, RiUserLine } from "react-icons/ri";
import { SlSupport } from "react-icons/sl";
import logo from '../../assets/Images/copylogo.webp';

export default function Header() {
    return (
        <div className='header'>
            <div className='left-side'>
                <a href="/">
                    <img src={logo} alt="ssl certificate logo" loading="lazy" />
                </a>
                <div>
                    <b>SSL-сертификаты</b>
                    <br />
                    <span>Доверительные решения</span>
                </div>
            </div>
            <div className='right-side'>
                {/* Komponentlarni aktiv qilish yoki olib tashlash
                <a className='right-side-link' href="/cart" target='_blank'>
                    <RiShoppingCartLine className='ri-shopping-cart' />
                    <span className='right-side-link-span'>Новый заказ</span>
                    <span className='right-side-link-span right-side-link-d-none'>Заказать</span>
                </a>
                <a className='right-side-link' href="" target='_blank'>
                    <RiUserLine className='ri-user-line' />
                    <span className='right-side-link-span'>Мой аккаунт</span>
                    <span className='right-side-link-span right-side-link-d-none'>Аккаунт</span>
                </a> */}
                <a className='right-side-link' href="/support">
                    <SlSupport className='sl-support' />
                    <span className='right-side-link-last-span'>Поддержка</span>
                </a>
            </div>
        </div>
    );
}
