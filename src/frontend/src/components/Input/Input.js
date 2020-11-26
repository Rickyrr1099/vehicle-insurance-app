import React from 'react';
import './Input.css';

const input = (props) => {
    return (
        <div className='Input'>
            <label className='Label'>{props.labelName}</label>
            <input className='InputElement'></input>
        </div>
    );
}

export default input;