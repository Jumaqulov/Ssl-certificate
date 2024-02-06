import React, { useEffect, useState } from 'react'
import { AiOutlineSecurityScan  } from "react-icons/ai";
import { GiPriceTag } from "react-icons/gi";
import Overview from './Overview';
import Price from './Price';

export default function TrustlyScaner() {
  const [activeSection, setActiveSection] = useState('overview');

  function renderSection(section) {
    switch (section) {
      case 'overview':
        return <Overview />
        break;
      case 'price':
        return <Price />
        break;
        default:
          return null;
    }
  }

  useEffect(()=>{
    document.title = 'TrustlyTrust - Сканер уязвимостей'
  },[])

  return (
    <div className='certificates'>
      <div className="tscaner">
        <h3>TrulyTrust™ - сканер</h3>
        <div className='tscaner-header'>
          <div>
            <AiOutlineSecurityScan className='ts-code-svg'/>
          </div>
          <div>
            <p>Важно, чтобы ваш сайт и веб-приложения были защищены и безопасны, а проверка на всевозможные уязвимости - непростая задача даже для опытных пользователей. Вы должны знать, как настроить свою систему на использование правильных шифров SSL/TLS, заголовков безопасности, защиту от межсайтового скриптинга и других возможных проблем безопасности. Есть ли у вас время для этого на еженедельной/ежемесячной основе?</p>
          </div>
        </div>
        <div className='ts-section-change'>
          <button onClick={() => { renderSection('overview'); setActiveSection('overview') }} className={`tscaner-btn ${activeSection === 'overview' ? 'tscaner-active' : ''}`}>
            <svg viewBox="0 0 181 144">
              <path
                d="M170.895 59.18c-6.31 16.971-15.373 29.092-22.045 36.406l-2.748-24.499 24.793-11.907zM143.149 44.73l34.646-16.087c-.79 8.568-2.401 16.405-4.536 23.504l-27.832 12.925-2.278-20.343z" />
              <path
                d="M180.363.673l-45.155 20.97L95.52 40.074v21.398l23.4-10.865 3.985 35.544 20.443 8.136-5.863-52.301 40.822-18.96L180.363.674zM122.093 95.624c-8.916 11.326-22.815 20.508-30.466 25.064 0 0-.827.39-1.127.39-.295 0-1.122-.39-1.122-.39-7.656-4.556-21.555-13.738-30.471-25.064l-17.96 8.34c15.092 21.712 43.89 36.491 45.164 37.138l4.389 2.225 4.389-2.225c1.274-.647 30.076-15.426 45.164-37.138l-17.96-8.34zM10.105 59.18c6.31 16.971 15.373 29.092 22.045 36.406l2.748-24.499L10.105 59.18zM37.851 44.73L3.205 28.642c.79 8.568 2.401 16.405 4.536 23.504l27.832 12.925 2.278-20.343z" />
              <path
                d="M45.792 21.643L.637.673l2.054 22.354 40.823 18.959-5.863 52.301 20.443-8.136 3.984-35.544 23.4 10.865V40.074L45.793 21.643zM90.5 33.231l15.07-11.036 15.073-11.047S100.18 2.446 90.5 2.446c-9.681 0-30.143 8.702-30.143 8.702l15.074 11.047L90.5 33.23z" />
            </svg>
            <span>Обзор</span>
          </button>
          <button onClick={() => { renderSection('price'); setActiveSection('price') }} className={`tscaner-btn ${activeSection === 'price' ? 'tscaner-active' : ''}`}>
            <GiPriceTag />
            <span>Цена</span>
          </button>
        </div>
        {renderSection(activeSection)}
      </div>
    </div>
  )
}