import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import Input from '../../components/Input/Input'
import './Registration.css';

class registration extends Component{

    state = {
        registrationform: {
            firstname: null,
            lastname: null,
            dob: null,
            email: null,
            contactnumber: null,
            vehiclenumber: null
        },
        isregistered: false
    }

    render() {
        let formElements = [];
        for (let key in this.state.registrationform) {
            formElements.push(key);
        }
        const labels = {
            'firstname': 'First name *',
            'lastname': 'Last name *',
            'dob': 'DOB *',
            'email': 'E-mail *',
            'contactnumber': 'Contact number *',
            'vehiclenumber': 'Vehicle number'
        }
        const elements = (formElements.map((e, key) => {
            // e = e.charAt(0).toUpperCase().concat(e.substring(1));
            return(<Input key={e} labelName={labels[e]}></Input>);
        }));

        return (
            <div className='Registration'>
                <div className='Header'>
                    <h4>New User Registration</h4>
                </div>
                <div style={{ paddingTop: 20, paddingBottom: 20}}>
                    {elements}
                </div>
                <div style={{paddingTop: 20}}>
                    <Button variant= 'primary'>Register User</Button>
                    <Button style={{marginLeft: 20}} variant='secondary'>Cancel</Button>
                </div>
            </div>
        );
    }
}

export default registration;