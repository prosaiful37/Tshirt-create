import React from 'react';
import './Tshirt.css';

const Tshirt = ({handleAddToCart, tShirt}) => {
    const {name, picture, price} = tShirt;
    return (
        <div className='t-shirt'>
            <img src={picture} alt="" />
            <h2>{name} t-shirt</h2>
            <p>Price: ${price}</p>
            <button onClick={() => handleAddToCart(tShirt)}>Add To Cart</button>
        </div>
    );
};

export default Tshirt;