import React from 'react';
import './Cart.css';

const Cart = ({cart, handleRemoveFromCart}) => {
        //condational randaring option
        // 1. Element variable
        // 2. tarnary oprator condation ?  true : false 
        // 3. && oprator and short oprator
        // 4. || 
        let messege;
        if(cart.length === 0){
            messege = <div>
                <h3>Oh kipta khoros kor</h3>
                <p>Kenos na kan</p>
            </div>
        }
        else if (cart.length === 1){
            messege = <p>Please add more</p>
        }
        else{
            messege = <p><small>Thanks for adding item</small></p>
        }


    return (
        <div>
            <h2>cart lenght: {cart.length}</h2>
            
            {
                cart.map(tshirt => <p> {tshirt.name} 
                 <button onClick={() => handleRemoveFromCart(tshirt)}>X</button>
                </p>)
            }
            {cart.length === 0 || <p className='orange'>Yay you are buying !! </p> }
            {cart.length === 3 && <div className='orange'>
                <h3>Trigonal</h3>
                <p>Tin jon ki gift detam</p>
            </div> }
            {messege}
            {cart.length !== 4 ?  <p>keep adding</p> : <button>Remove All</button>}
        </div>
    );
};

export default Cart;