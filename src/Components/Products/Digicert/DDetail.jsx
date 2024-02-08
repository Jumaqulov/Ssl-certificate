import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Perproduct from '../../../Requests/Perproduct';


export default function DDetail() {
    const [item, setItem] = useState({})
    const [selectedRadio, setSelectedRadio] = useState('radio-1');
    const { state } = useLocation()

    async function getItem() {
        const curentItem = await Perproduct.getPerProduct(state.id)
        setItem(curentItem)
    }

    const handleRadioChange = (event) => {
        setSelectedRadio(event.target.id);
      };

    // console.log(state);
    // console.log(item);

    useEffect(() => {
        getItem()
        document.title = state.product
        setSelectedRadio('radio-1');
    }, [])
    return (
        <div className='certificates'>
            <div className="crt-txt">
                <h3 className='title-certificate'>{state.product}</h3>
                <form action="" className='pro-pricing'>
                    <div className='form-left'>
                        <div className='offer-year'>
                            <input type="radio" id={`radio-1`} name='year' checked={selectedRadio === 'radio-1'} onChange={handleRadioChange}
                            />
                            <label htmlFor={`radio-1`}>
                                <span className='span-year'>1 год </span>
                                <span className='span-price'>{state.prices[12]}$ </span>
                                <span className='span-txt'>В ГОД</span>
                            </label>
                        </div>
                        <div className='offer-year'>
                            <input type="radio" id={`radio-2`} name='year' checked={selectedRadio === 'radio-2'} onChange={handleRadioChange}
                            />
                            <label htmlFor={`radio-2`}>
                                <span className='span-year'>2 год </span>
                                <span className='span-price'>{state.prices[24]}$ </span>
                                <span className='span-txt'>В ГОД</span>
                            </label>
                        </div>
                        <div className='offer-year'>
                            <input type="radio" id={`radio-3`} name='year' checked={selectedRadio === 'radio-3'} onChange={handleRadioChange}
                            />
                            <label htmlFor={`radio-3`}>
                                <span className='span-year'>3 год </span>
                                <span className='span-price'>{state.prices[36]}$ </span>
                                <span className='span-txt'>В ГОД</span>
                            </label>
                        </div>
                    </div>
                </form>
            </div>
        </div>
    )
}