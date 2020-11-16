import React from 'react';
import { NavLink } from 'react-router-dom';
import './Menubar.css';
import deloittelogo from '../Deloitte-logo.jpg';

const menubar = (props) => {

    return(
        <header className='Menubar'>
            <div className='Logo' style={{height: props.height}}>
                <img src={deloittelogo} alt="Deloitte Logo" />
            </div>
            <nav>
                <NavLink
                    to='#login'>Login</NavLink>
                <NavLink
                    to='#details'>Details</NavLink>
                <NavLink
                    to='#results'>Results</NavLink>
            </nav>
        </header>
    );
}

export default menubar;