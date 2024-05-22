import React from 'react'
import { MdOutlineDoneOutline } from "react-icons/md";
import { USD } from '../../Requests/request.js';


export default function Price() {

  function DesktopTitle1(txt) {
    return (
      <tr>
        <td className='ts-table-title' colSpan={5}>{txt}</td>
      </tr>
    )
  }

  function DesktopOnceYes({ title, txt }) {
    return (
      <tr>
        <td className='ts-brown-1'>
          <h4>{title}</h4>
          <p>{txt}</p>
        </td>
        <td className='ts-brown-2' colSpan={2}></td>
        <td className='ts-td-center ts-brown-3' colSpan={2}>
          <MdOutlineDoneOutline className='ts-check' />
        </td>
      </tr>
    )
  }

  function DesktopDoubleYes({ title, txt }) {
    return (
      <tr>
        <td className='ts-brown-1'>
          <h4>{title}</h4>
          <p>{txt}</p>
        </td>
        <td className='ts-td-center ts-brown-2' colSpan={2}>
          <MdOutlineDoneOutline className='ts-check' />
        </td>
        <td className='ts-td-center ts-brown-3' colSpan={2}>
          <MdOutlineDoneOutline className='ts-check' />
        </td>
      </tr>
    )
  }

  function Doubleyes() {
    return (
      <tr>
        <td className='ts-td-center ts-brown-2'>
          <MdOutlineDoneOutline className='ts-check' />
        </td>
        <td className='ts-td-center ts-brown-3'>
          <MdOutlineDoneOutline className='ts-check' />
        </td>
      </tr>
    )
  }

  function Onceyes() {
    return (
      <tr>
        <td className='ts-td-center ts-brown-2'></td>
        <td className='ts-td-center ts-brown-3'>
          <MdOutlineDoneOutline className='ts-check' />
        </td>
      </tr>
    )
  }

  function MobileTitle1(title) {
    return (
      <tr>
        <td className='ts-brown-1' colSpan={4}>{title}</td>
      </tr>
    )
  }

  function MobileTitle2(title) {
    return (
      <tr>
        <td className='ts-table-title' colSpan={4}>{title}</td>
      </tr>
    )
  }

  function MobileSpan1(text) {
    return (
      <td className='ts-brown-2 ts-td-center'>
        <span>{text}</span>
      </td>
    )
  }

  function MobileSpan2(text) {
    return (
      <td className='ts-brown-3 ts-td-center'>
        <span>{text}</span>
      </td>
    )
  }

  function formatNumber(number) {
    return number.toString().replace(/\B(?=(\d{3})+(?!\d))/g, " ");
  }

  const roundToTwoDecimalPlaces = (number) => {
    let roundedNumber = Math.ceil(number);
    let result = (Math.ceil(roundedNumber / 100) * 100).toFixed(2);
    return result;
}
  return (
    <div className='ts-price-table'>
      <div className="ts-desktop-table">
        <table>
          <thead>
            <th></th>
            <th className='ts-brown-2' colSpan={2}>Основной</th>
            <th className='ts-brown-3' colSpan={2}>Профессионал</th>
          </thead>
          <tbody>
            {DesktopTitle1('Общие характеристики')}
            <tr>
              <td className='ts-brown-1'>
                <h4>Тип сканера</h4>
                <p>Полное сканирование требует проверки домена через файл проверки (HTTPS)</p>
              </td>
              <td className='ts-brown-2 ts-td-center' colSpan={2}>
                <p>Быстрое сканирование</p>
              </td>
              <td className='ts-brown-3 ts-td-center' colSpan={2}>
                <p>Полное сканирование</p>
              </td>
            </tr>
            {DesktopOnceYes({ title: "OWASP Top 10 сканирование уязвимостей", txt: 'Сканирование на наличие 10 лучших уязвимостей OWASP. Полный список наших сканеров на вкладке "Возможности".' })}
            {DesktopOnceYes({ title: 'Автоматизированная проверка доменов', txt: 'Проверьте цели для инвазивного сканирования, разместив файл на вашей системе или определенный API-ответ на GET-запрос.' })}
            {DesktopOnceYes({ title: 'Ускорение сканирования', txt: 'Позволяет регулировать количество запросов на сканирование в секунду.' })}
            {DesktopDoubleYes({ title: 'Доступ к вики по безопасности', txt: 'Содержит общие описания, фрагменты кода для исправления и видеоролики.' })}
            {DesktopDoubleYes({ title: 'Регулярные обновления', txt: 'Мы регулярно обновляем и добавляем новые функции в наши сканеры и пользовательский интерфейс.' })}
            {DesktopTitle1('Цели сканирования')}
            {DesktopDoubleYes({ title: 'Многостраничные веб-приложения', txt: 'Приложение, состоящее из нескольких отдельных страниц. Обычно это происходит, если на каждой странице в браузере отображается HTML, JSP и т. д.' })}
            {DesktopOnceYes({ title: 'Deep Scan - автоматическое сканирование JavaScript', txt: 'Приложение, основанное на JavaScript. Обычно это происходит, если приложение основано или использует такие фреймворки, как Angular, React, Vue, jQuery или подобные.' })}
            {DesktopOnceYes({ title: 'Сканирование REST API', txt: 'Интерфейс прикладного программирования (API), который документирован в файле Swagger / OpenAPI версии 2. Обычно документация хранится в файле swagger.json, который может быть импортирован сканером.' })}
            {DesktopTitle1('Авторизация')}
            {DesktopOnceYes({ title: 'Вход в приложение с учетными данными', txt: 'Войдите в приложение через BasicAuth или с помощью учетных данных пользователя (пользователь/пароль).' })}
            {DesktopOnceYes({ title: 'Вход в расширенное приложение', txt: 'Войдите в свое приложение, определив ключи и значения для Cookies, заголовков HTTP или параметров GET.' })}
            {DesktopTitle1('Планирование / автоматизация')}
            {DesktopDoubleYes({ title: 'Подробные отчеты в формате PDF', txt: 'Получите подробный отчет в формате pdf с резюме сканирования на высоком уровне, подробными результатами сканирования, общими и конкретными описаниями найденных векторов атак, а также поддержкой по устранению последствий.' })}
            {DesktopOnceYes({ title: 'Сканирование по расписанию', txt: 'Создайте расписание сканирования для своего проекта, чтобы запускать сканирование ежедневно или еженедельно.' })}
            {DesktopOnceYes({ title: 'Машиночитаемые отчеты', txt: 'Получайте наши машиночитаемые отчеты в формате CSV, JSON или XML.' })}
            {DesktopTitle1('Сканирование уязвимостей и проблем безопасности')}
            {DesktopDoubleYes({ txt: 'Отпечатки версии сервера' })}
            {DesktopDoubleYes({ txt: 'Отпечатки версий веб-приложений' })}
            {DesktopDoubleYes({ txt: 'Сравнение CVE' })}
            {DesktopDoubleYes({ txt: 'Heartbleed' })}
            {DesktopDoubleYes({ txt: 'ROBOT, BREACH, BEAST' })}
            {DesktopDoubleYes({ txt: 'Старая версия SSL/TLS' })}
            {DesktopDoubleYes({ txt: 'Порядок шифрования SSL/TLS' })}
            {DesktopDoubleYes({ txt: 'SSL/TLS Perfect Forward Secrecy' })}
            {DesktopDoubleYes({ txt: 'Возобновление сеанса SSL/TLS' })}
            {DesktopDoubleYes({ txt: 'Безопасный алгоритм SSL/TLS' })}
            {DesktopDoubleYes({ txt: 'Размер ключа SSL/TLS' })}
            {DesktopDoubleYes({ txt: 'Цепочка доверия SSL/TLS' })}
            {DesktopDoubleYes({ txt: 'Дата истечения срока действия SSL/TLS' })}
            {DesktopDoubleYes({ txt: 'Отзыв SSL/TLS (CRL, OCSP)' })}
            {DesktopDoubleYes({ txt: 'Сшивание SSL/TLS OCSP' })}
            {DesktopDoubleYes({ txt: 'Заголовок безопасностиs' })}
            {DesktopDoubleYes({ txt: 'Заголовки Content-Security-Policy' })}
            {DesktopDoubleYes({ txt: 'Portscan' })}
            {DesktopOnceYes({ txt: 'Слепая SQL-инъекция на основе булевых значений' })}
            {DesktopOnceYes({ txt: 'Слепая SQL-инъекция, основанная на времени' })}
            {DesktopOnceYes({ txt: 'SQL-инъекция на основе ошибок' })}
            {DesktopOnceYes({ txt: 'SQL-инъекция на основе запроса UNION' })}
            {DesktopOnceYes({ txt: 'SQL-инъекция в стекированных запросах' })}
            {DesktopOnceYes({ txt: 'Внеполосная инъекция SQL' })}
            {DesktopOnceYes({ txt: 'Отраженный межсайтовый скриптинг (XSS)' })}
            {DesktopOnceYes({ txt: 'Хранящийся межсайтовый скриптинг (XSS)' })}
            {DesktopOnceYes({ txt: 'Подделка межсайтовых запросов (CSRF)' })}
            {DesktopOnceYes({ txt: 'Включение файлов' })}
            {DesktopOnceYes({ txt: 'Фаззер каталогов' })}
            {DesktopOnceYes({ txt: 'Фазер файлов' })}
            {DesktopOnceYes({ txt: 'Инъекция команд' })}
            {DesktopOnceYes({ txt: 'Обработка внешних сущностей XML (XXE)' })}
            {DesktopTitle1('Цикл выставления счетов')}
            <tr>
              <td className='ts-brown-1'>Тип платежа</td>
              <td className='ts-brown-2 ts-txt-price'>
                <span>Одноразовый</span>
              </td>
              <td className='ts-brown-2 ts-txt-price'>
                <span>Ежегодно</span>
              </td>
              <td className='ts-brown-3 ts-txt-price'>
                <span>Одноразовый</span>
              </td>
              <td className='ts-brown-3 ts-txt-price'>
                <span>Ежегодно</span>
              </td>
            </tr>
            <tr>
              <td className='ts-brown-1'>Количество сканирований в год</td>
              <td className='ts-brown-2 ts-td-center'>
                <span>1</span>
              </td>
              <td className='ts-brown-2 ts-td-center'>
                <span>12</span>
              </td>
              <td className='ts-brown-3 ts-td-center'>
                <span>1</span>
              </td>
              <td className='ts-brown-3 ts-td-center'>
                <span>12</span>
              </td>
            </tr>
            <tr>
              <td className='ts-brown-1'>1 год</td>
              <td className='ts-brown-2 ts-td-center'>
                <span>{formatNumber(roundToTwoDecimalPlaces(15 * USD))} UZS</span>
              </td>
              <td className='ts-brown-2 ts-td-center'>
                <span>{formatNumber(roundToTwoDecimalPlaces(150 * USD))} UZS</span>
              </td>
              <td className='ts-brown-3 ts-td-center'>
                <span>{formatNumber(roundToTwoDecimalPlaces(48 * USD))} UZS</span>
              </td>
              <td className='ts-brown-3 ts-td-center'>
                <span>{formatNumber(roundToTwoDecimalPlaces(480 * USD))} UZS</span>
              </td>
            </tr>
            <tr>
              <td className='ts-brown-1'>2 года</td>
              <td className='ts-brown-2'></td>
              <td className='ts-brown-2 ts-td-center'>
                <span>{formatNumber(roundToTwoDecimalPlaces(262.5 * USD))} UZS</span>
              </td>
              <td className='ts-brown-3'></td>
              <td className='ts-brown-3 ts-td-center'>
                <span>{formatNumber(roundToTwoDecimalPlaces(840 * USD))} UZS</span>
              </td>
            </tr>
            <tr>
              <td className='ts-brown-1'>3 года</td>
              <td className='ts-brown-2'></td>
              <td className='ts-brown-2 ts-td-center'>
                <span>{formatNumber(roundToTwoDecimalPlaces(375 * USD))} UZS</span>
              </td>
              <td className='ts-brown-3'></td>
              <td className='ts-brown-3 ts-td-center'>
                <span>{formatNumber(roundToTwoDecimalPlaces(1200 * USD))} UZS</span>
              </td>
            </tr>
            <tr>
              <td className='ts-brown-1'></td>
              <td className='ts-brown-2'>
                <a className='ts-order' href="#">Заказать</a>
              </td>
              <td className='ts-brown-2'>
                <a className='ts-order' href="#">Заказать</a>
              </td>
              <td className='ts-brown-3'>
                <a className='ts-order' href="#">Заказать</a>
              </td>
              <td className='ts-brown-3'>
                <a className='ts-order' href="#">Заказать</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
      <div className="ts-mobile-table">
        <table>
          <thead>
            <th className='ts-brown-2'>Основной</th>
            <th className='ts-brown-3'>Профессионал</th>
          </thead>
          <tbody>
            {MobileTitle2('Общие характеристики')}
            {MobileTitle1('OWASP Top 10 сканирование уязвимостей')}
            {MobileTitle1('Тип сканирования')}
            <tr>
              <td className="ts-brown-2">Быстрое сканирование</td>
              <td className="ts-brown-3">Полное сканирование</td>
            </tr>
            {Onceyes()}
            {MobileTitle1('Автоматизированная проверка доменов')}
            {Onceyes()}
            {MobileTitle1('Ускорение сканирования')}
            {Onceyes()}
            {MobileTitle1('Доступ к вики по безопасности')}
            {Onceyes()}
            {MobileTitle1('Регулярные обновления')}
            {Onceyes()}
            {MobileTitle2('Цели сканирования')}
            {MobileTitle1('Многостраничные веб-приложения')}
            {Doubleyes()}
            {MobileTitle1('Deep Scan - автоматическое сканирование JavaScript')}
            {Onceyes()}
            {MobileTitle1('Сканирование REST API')}
            {Onceyes()}
            {MobileTitle2('Авторизация')}
            {MobileTitle1('Вход в приложение с учетными данными')}
            {Onceyes()}
            {MobileTitle1('Вход в расширенное приложение')}
            {Onceyes()}
            {MobileTitle2('Планирование / автоматизация')}
            {MobileTitle1('Подробные отчеты в формате PDF')}
            {Doubleyes()}
            {MobileTitle1('Сканирование по расписанию')}
            {Onceyes()}
            {MobileTitle1('Машиночитаемые отчеты')}
            {Onceyes()}
            {MobileTitle2('Сканирование уязвимостей и проблем безопасности')}
            {MobileTitle1('Отпечатки версии сервера')}
            {Doubleyes()}
            {MobileTitle1('Отпечатки версий веб-приложений')}
            {Doubleyes()}
            {MobileTitle1('Сравнение CVE')}
            {Doubleyes()}
            {MobileTitle1('Heartbleed')}
            {Doubleyes()}
            {MobileTitle1('ROBOT, BREACH, BEAST')}
            {Doubleyes()}
            {MobileTitle1('Старая версия SSL/TLS')}
            {Doubleyes()}
            {MobileTitle1('Порядок шифрования SSL/TLS')}
            {Doubleyes()}
            {MobileTitle1('SSL/TLS Perfect Forward Secrecy')}
            {Doubleyes()}
            {MobileTitle1('Возобновление сеанса SSL/TLS')}
            {Doubleyes()}
            {MobileTitle1('Безопасный алгоритм SSL/TLS')}
            {Doubleyes()}
            {MobileTitle1('Размер ключа SSL/TLS')}
            {Doubleyes()}
            {MobileTitle1('Цепочка доверия SSL/TLS')}
            {Doubleyes()}
            {MobileTitle1('Дата истечения срока действия SSL/TLS')}
            {Doubleyes()}
            {MobileTitle1('Отзыв SSL/TLS (CRL, OCSP)')}
            {Doubleyes()}
            {MobileTitle1('Сшивание SSL/TLS OCSP')}
            {Doubleyes()}
            {MobileTitle1('Заголовки безопасности')}
            {Doubleyes()}
            {MobileTitle1('Заголовки Content-Security-Policy')}
            {Doubleyes()}
            {MobileTitle1('Portscan')}
            {Doubleyes()}
            {MobileTitle1('Слепая SQL-инъекция на основе булевых значений')}
            {Onceyes()}
            {MobileTitle1('Слепая SQL-инъекция, основанная на времени')}
            {Onceyes()}
            {MobileTitle1('SQL-инъекция на основе ошибок')}
            {Onceyes()}
            {MobileTitle1('SQL-инъекция на основе запроса UNION')}
            {Onceyes()}
            {MobileTitle1('SQL-инъекция в стекированных запросах')}
            {Onceyes()}
            {MobileTitle1('Внеполосная инъекция SQL')}
            {Onceyes()}
            {MobileTitle1('Отраженный межсайтовый скриптинг (XSS)')}
            {Onceyes()}
            {MobileTitle1('Хранимый межсайтовый скриптинг (XSS)')}
            {Onceyes()}
            {MobileTitle1('Подделка межсайтовых запросов (CSRF)')}
            {Onceyes()}
            {MobileTitle1('Включение файлов')}
            {Onceyes()}
            {MobileTitle1('Фаззер каталогов')}
            {Onceyes()}
            {MobileTitle1('Фазер файлов')}
            {Onceyes()}
            {MobileTitle1('Инъекция команд')}
            {Onceyes()}
            {MobileTitle1('Обработка внешних сущностей XML (XXE)')}
            {Onceyes()}
            {MobileTitle2('Цикл выставления счетов')}
            {MobileTitle1('Тип платежа')}
            <tr>
              {MobileSpan1('Одноразовый')}
              {MobileSpan1('Ежегодно')}
            </tr>
            <tr>
              {MobileSpan2('Одноразовый')}
              {MobileSpan2('Ежегодно')}
            </tr>
            {MobileTitle1('Количество сканирований в год')}
            <tr>
              {MobileSpan1('1')}
              {MobileSpan1('12')}
            </tr>
            <tr>
              {MobileSpan2('1')}
              {MobileSpan2('12')}
            </tr>
            {MobileTitle1('1 год')}
            <tr>
              {MobileSpan1(`${formatNumber(roundToTwoDecimalPlaces(15 * USD))} UZS`)}
              {MobileSpan1(`${formatNumber(roundToTwoDecimalPlaces(150 * USD))} UZS`)}
            </tr>
            <tr>
              {MobileSpan2(`${formatNumber(roundToTwoDecimalPlaces(48 * USD))} UZS`)}
              {MobileSpan2(`${formatNumber(roundToTwoDecimalPlaces(480 * USD))} UZS`)}
            </tr>
            {MobileTitle1('2 года')}
            <tr>
              {MobileSpan1('')}
              {MobileSpan1(`${formatNumber(roundToTwoDecimalPlaces(262.5 * USD))} UZS`)}
            </tr>
            <tr>
              {MobileSpan2('')}
              {MobileSpan2(`${formatNumber(roundToTwoDecimalPlaces(840 * USD))} UZS`)}
            </tr>
            {MobileTitle1('3 года')}
            <tr>
              {MobileSpan1('')}
              {MobileSpan1(`${formatNumber(roundToTwoDecimalPlaces(375 * USD))} UZS`)}
            </tr>
            <tr>
              {MobileSpan2('')}
              {MobileSpan2(`${formatNumber(roundToTwoDecimalPlaces(1200 * USD))} UZS`)}
            </tr>
            <tr>
              <td className='ts-brown-2'>
                <a className='ts-order' href="">Заказать</a>
              </td>
              <td className='ts-brown-2'>
                <a className='ts-order' href="">Заказать</a>
              </td>
            </tr>
            <tr>
              <td className='ts-brown-3'>
                <a className='ts-order' href="">Заказать</a>
              </td>
              <td className='ts-brown-3'>
                <a className='ts-order' href="">Заказать</a>
              </td>
            </tr>
          </tbody>
        </table>
      </div>
    </div>
  )
}