import React, { useState, useEffect } from 'react';
import axios from 'axios';
import './assets/styles/main.css';
import svg1 from './assets/svg/1.svg';

export default function App() {
  const [jsonData, setJsonData] = useState(null);

  const url = '/data/ca_brands.js '
  useEffect(() => {
    axios.get(url)
      .then(response => {
        setJsonData(response.data);
        console.log(response.data);
      })
      .catch(error => {
        console.error('Xatolik:', error);
      });
  }, []);


  return (
    <div>
      <h1>JSON Fayl Ma'lumotlari</h1>
      {jsonData ? (
        <p>salom</p>
      )
        : (
          <p>Ma'lumotlar yuklanmoqda...</p>
        )}
    </div>
  );
}