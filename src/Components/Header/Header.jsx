import React, { Suspense, lazy } from 'react';
import { SlSupport } from "react-icons/sl";
import logo from '../../assets/Images/copylogo.png';
import OptimizedImg from './OptimizedImg';

// const RiShoppingCartLine = lazy(() => import('react-icons/ri').then(module => ({ default: module.RiShoppingCartLine })));
// const RiUserLine = lazy(() => import('react-icons/ri').then(module => ({ default: module.RiUserLine })));

export default function Header() {
    return (
        <div className='header'>
            <div className='left-side'>
                <a href="/">
                    <OptimizedImg src={logo} alt="ssl certificate logo" width="100" height="50" />
                </a>
                <div className='hhgg'>
                    <b>SSL-сертификаты</b>
                    <br />
                    <span>Доверительные решения</span>
                </div>
            </div>
            <div className='right-side'>
                {/* <Suspense fallback={<div>Загрузка...</div>}>
                    <a className='right-side-link' href="/cart" target='_blank'>
                        <RiShoppingCartLine className='ri-shopping-cart' />
                        <span className='right-side-link-span'>Новый заказ</span>
                        <span className='right-side-link-span right-side-link-d-none'>Заказать</span>
                    </a>
                </Suspense>
                <Suspense fallback={<div>Загрузка...</div>}>
                    <a className='right-side-link' href="" target='_blank'>
                        <RiUserLine className='ri-user-line' />
                        <span className='right-side-link-span'>Мой аккаунт</span>
                        <span className='right-side-link-span right-side-link-d-none'>Аккаунт</span>
                    </a>
                </Suspense> */}
                <a className='right-side-link' href="/support">
                    <SlSupport className='sl-support' />
                    <span className='right-side-link-last-span'>Поддержка</span>
                </a>
            </div>
        </div>
    );
}