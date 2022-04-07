import React, { useState } from 'react';
import Father from '../Fateher/Father';
import Uncle from '../Uncle/Uncle';
import Aunty from '../Aunty/Aunty';
import './Grandpa.css';

const Grandpa = () => {
    const [house, setHouse] = useState(1)

    const handlrAHouse = () =>{
        setHouse(house + 1);
    }

    const ornament = "Diamond Ring";

    return (
        <div className='grandpa'>
            <h2>Grandpa</h2>
            <p>House: {house}</p>
            <button onClick={handlrAHouse}>Buy A House</button>
            <section style={{display: 'flex' }}>
                <Father house={house} ornament={ornament}></Father>
                <Uncle house={house}></Uncle>
                <Aunty house={house}></Aunty>
            </section>
            
        </div>
    );
};

export default Grandpa;