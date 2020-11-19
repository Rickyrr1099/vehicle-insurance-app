import React, { Component } from 'react';
import Input from '../../components/Input/Input'
import './Registration.css';

class Registration extends Component{

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

        const elements = (formElements.map(e => (
            <Input labelName={e}></Input>
        )));

        return (
            <div className='Registration'>
                <h2>New User Registration</h2>
                {elements}
                <button type='button' class='btn btn-primary'>Register User</button>
                <button type='button' class='btn btn-secondary'>Cancel</button>
            </div>
        );
    }
}

export default Registration;