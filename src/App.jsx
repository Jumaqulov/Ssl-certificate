import React, { useState, useEffect } from 'react';
import Navbar from './Components/Navbar';

export default function App() {
  const [jsonData, setJsonData] = useState(null);

  // const url = '/data/ca_brands.js '
  // useEffect(() => {
  //   axios.get(url)
  //     .then(response => {
  //       setJsonData(response.data);
  //       console.log(response.data);
  //     })
  //     .catch(error => {
  //       console.error('Xatolik:', error);
  //     });
  // }, []);


  return (
    <div className='wrapper'>
      <Navbar />
    </div>
  );
}