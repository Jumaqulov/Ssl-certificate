import React from 'react'

export default function LeiTable() {
    return (
        <div className="lei-table">
            <p>Структура кода LEI</p>
            <table className="lei-table-code">
                <thead>
                    <tr>
                        <th className="blue-one">
                            <span>1</span>
                        </th>
                        <th className="blue-one">
                            <span>2</span>
                        </th>
                        <th className="blue-one">
                            <span>3</span>
                        </th>
                        <th className="blue-one">
                            <span>4</span>
                        </th>
                        <th className="blue-two">
                            <span>5</span>
                        </th>
                        <th className="blue-two">
                            <span>6</span>
                        </th>
                        <th className="green-one">
                            <span>7</span>
                        </th>
                        <th className="green-one">
                            <span>8</span>
                        </th>
                        <th className="green-one">
                            <span>9</span>
                        </th>
                        <th className="green-one">
                            <span>10</span>
                        </th>
                        <th className="green-one">
                            <span>11</span>
                        </th>
                        <th className="green-one">
                            <span>12</span>
                        </th>
                        <th className="green-one">
                            <span>13</span>
                        </th>
                        <th className="green-one">
                            <span>14</span>
                        </th>
                        <th className="green-one">
                            <span>15</span>
                        </th>
                        <th className="green-one">
                            <span>16</span>
                        </th>
                        <th className="green-one">
                            <span>17</span>
                        </th>
                        <th className="green-one">
                            <span>18</span>
                        </th>
                        <th className="green-two">
                            <span>19</span>
                        </th>
                        <th className="green-two">
                            <span>20</span>
                        </th>
                    </tr>
                </thead>
                <tbody>
                    <tr>
                        <td className='blue-one' colSpan='4'>
                            <p>Идентификатор LOU</p>
                        </td>
                        <td className='blue-two' colSpan='2'>
                            <p>Персонажи-резервисты</p>
                        </td>
                        <td className='green-one' colSpan='12'>
                            <p>Идентификатор субъекта</p>
                        </td>
                        <td className="green-two" colSpan='2'>
                            <p>Идентификатор проверки</p>
                        </td>
                    </tr>
                    <tr className='td-line'>
                        <td></td>
                    </tr>
                    <tr className='td-data'>
                        <td className='gray-one' colSpan='4'>
                            <span>Четырехсимвольный префикс, уникальный для каждого LOU</span>
                        </td>
                        <td className="gray-two" colSpan='2'>
                            <span>Два зарезервированных символа, установленных на ноль</span>
                        </td>
                        <td className="gray-three" colSpan='12'>
                            <span>Часть кода, относящаяся к конкретной организации, генерируется и назначается LOU в соответствии с прозрачной, обоснованной и роботизированной политикой распределения</span>
                        </td>
                        <td className="gray-four" colSpan='2'>
                            <span>Две контрольные цифры, как описано в стандарте ISO 17422</span>
                        </td>
                    </tr>
                </tbody>
            </table>
        </div>
    )
}