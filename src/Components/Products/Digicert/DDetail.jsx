import React, { useEffect, useState } from 'react';
import axios from 'axios';
import { useParams } from 'react-router-dom';

export default function DDetail() {
    const [item, setItem] = useState({});
    const [selectedRadio, setSelectedRadio] = useState('radio-1');
    const id = useParams();

    var config = {
        method: 'get',
        url: `https://my.gogetssl.com/api/products/details/${id.id}?auth_key=3e317d975d4cd3206b13a56167d8bbeaac41a872`,
    };

    console.log(item);

    const handleRadioChange = (event) => {
        setSelectedRadio(event.target.id);
    };

    useEffect(() => {
        axios(config)
            .then(function (response) {
                setItem(response.data)
            })
            .catch(function (error) {
                console.log(error);
            });

        document.title = `${item.product_name}`
        setSelectedRadio('radio-1');
    }, [item.length !== 0]);

    return (
        <>
            {
                item.length !== 0 ?
                    <div className='certificates'>
                        <div className="crt-txt">
                            <h3 className='title-certificate'></h3>
                            <form action="" className='pro-pricing'>
                                <div className='form-left'>
                                    <div className='offer-year'>
                                        <div className='offer-price'>
                                            <input type="radio" id={`radio-1`} name='year' checked={selectedRadio === 'radio-1'} onChange={handleRadioChange} />
                                            <label htmlFor={`radio-1`}>
                                                <span className='span-year'>1 год </span>
                                                <span className='span-price'> $ </span>
                                                <span className='span-txt'>В ГОД</span>
                                            </label>
                                        </div>
                                        <div className="san-price">
                                        </div>
                                    </div>
                                </div>
                            </form>
                        </div>
                    </div>
                    :
                    <p>salom</p>
            }
        </>
    );
}
