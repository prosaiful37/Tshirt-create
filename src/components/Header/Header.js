import React from 'react';
import { Link } from 'react-router-dom';
import CustomLink from '../CustomLink/CustomLink';
import './Header.css';

const Header = () => {
    return (
        <div>
            <h2>Welcome to thirt-mania website !!! </h2>
           
           <nav>
               <CustomLink to="/home">Home</CustomLink>
               <CustomLink to="orderreview">OrderReview</CustomLink>
           </nav>

        </div>
    );
};

export default Header;