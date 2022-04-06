import React, { useState } from 'react';
import useTshirt from '../../hook/useTshirt';
import Cart from '../Cart/Cart';
import Tshirt from '../Tshirt/Tshirt';
import './Home.css';

const Home = () => {
    const [tshirts , setTshirts] =  useTshirt();
    const [cart, setCart] = useState([])

    const handleAddToCart = (selectedItem) => {
        const exits = cart.find(tshirt => tshirt._id === selectedItem._id)
        if(!exits){
            const newCart = [...cart, selectedItem];
            setCart(newCart);
        }else{
            alert('item already added')
        }
        
    }

    const handleRemoveFromCart = (selectedItem) => {
        const rest = cart.filter(tshirt => tshirt._id !== selectedItem._id)
        setCart(rest);
    }



    return (
        <div className='home-container'>
            <div className='shop-container'>
                {
                    tshirts.map(tShirt => <Tshirt key={tShirt._id} tShirt={tShirt} handleAddToCart={handleAddToCart}></Tshirt>)
                }
            </div>
            <div className="cart-container">
                <Cart 
                    cart={cart}
                    handleRemoveFromCart={handleRemoveFromCart}
                ></Cart>
            </div>
        </div>
    );
};

export default Home;