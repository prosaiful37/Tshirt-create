import React from 'react';
import Myself from '../Myself/Myself';
import Brother from '../Brother/Brother';
import Sister from '../Sister/Sister';
import './Father.css';

const Father = ({house}) => {

    return (
        <div className='father' >
            <h3>father</h3>
            <p>House: {house}</p>
            <div style={{display: 'flex'}}>
                <Myself house={house}></Myself>
                <Brother house={house}></Brother>
                <Sister Sister house={house}></Sister>
            </div>
            
        </div>
    );
};

export default Father;