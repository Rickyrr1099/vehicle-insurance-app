import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import './Login.css'

class login extends Component {
    render () {
        return(
            <div className='Login'>
                <div className='Header'>
                    <h4>Already a User?</h4>
                </div>
                <div>
                    <label style={{ paddingTop: 20, paddingBottom: 20}}>E-mail</label>
                    <input style={{marginLeft: 20, width: 300}} type='text' placeholder='Enter registered e-mail here'></input>             
                </div>
                <Button style={{ float: 'bottom' }} type='submit' variant='primary'>Login</Button>  
            </div>
        );
    }
}

export default login;