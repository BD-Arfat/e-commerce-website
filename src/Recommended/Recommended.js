import React from 'react';
import './Recommended.css'

const Recommended = () => {
    return (
        <>
      <div>
        <h2 className="recommended-title">Recommended</h2>
        <div className="recommended-flex">
          <button className='btns' value="" title="All Products">All Product </button>
          <button className='btns' value="Nike" title="Nike">Nike</button>
          <button className='btns' value="Adidas" title="Adidas">Adidas</button>
          <button className='btns' value="Puma" title="Puma">Puma</button>
          <button className='btns' value="Vans" title="Vans">Vans</button>
        </div>
      </div>
    </>
    );
};

export default Recommended;