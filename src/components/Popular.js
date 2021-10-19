import React from 'react';
import './Popular.css';
import PopularItem from './PopularItem';

function Popular() {
  return (
    <div className='cards'>
      <h1>POPULAR</h1>
      <div className='cards__container'>
        <div className='cards__wrapper'>
          <ul className='cards__items'>
            <PopularItem
              src="images/img1.jpg"
              text='Jabón antibacteriano'
              label='Jabón'
              path='/products'
            />
            <PopularItem
              src='images/img2.jpg'
              text='Para el cuidado del cuerpo'
              label='Cuerpo'
              path='/products'
            />
            <PopularItem
              src='images/img3.jpg'
              text='Para el cuidado de tu piel'
              label='Piel'
              path='/products'
            />
          </ul>
        </div>
      </div>
    </div>
  );
}

export default Popular;