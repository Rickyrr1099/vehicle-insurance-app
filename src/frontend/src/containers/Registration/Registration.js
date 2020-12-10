import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Alert } from 'react-bootstrap';


import axios from '../../axios';
import Spinner from '../../components/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import * as actionTypes from '../../store/actions';

import './Registration.css';

class Registration extends Component{

    state = {
        registrationform: {
            firstName: '',
            lastName: '',
            dob: '',
            email: '',
            contactNumber: null,
            vehicleNumber: ''
        },
        loading: false,
        isregistered: false
    }

    componentDidMount () {
        console.log( this.props );
    }

    registrationCheckHandler = ( email ) => {

        console.log('B');
        let matched = false        

        axios.get('/registered-emails')
            .then(response => {
                console.log(email);
                
                response.data.forEach(registeredMail => {
                    if (email === registeredMail) {
                        matched = true
                    }
                });

                if ( matched === true) { 
                    this.setState({
                        ...this.state,
                        isregistered: true});
                    console.log('Matched email found: '+this.state.isregistered);                        
                }
                else {
                    this.props.saveEmail(email);
                    
                    const data = {
                        firstName: this.state.registrationform.firstName,
                        lastName: this.state.registrationform.lastName,
                        dob: this.state.registrationform.dob,
                        email: this.state.registrationform.email,
                        contactNumber: this.state.registrationform.contactNumber,
                        vehicleNumber: this.state.registrationform.vehicleNumber
                    };
                    console.log(data);

                    axios.post( '/register', data )
                        .then( response => {
                            console.log( response );
                            this.setState( { ...this.state, loading: false } );
                            this.props.history.push('/details/'+data.email);
                        } )
                        .catch( error => {
                            console.log( error );
                            this.setState( { ...this.state, loading: false } );
                        } );  
                } 
            }).catch( error => {
                console.log( error );
            } );
    }    
    
    registrationHandler = () => {
        console.log('A');
        this.registrationCheckHandler(this.state.registrationform.email);
    };


    render() {

        let form = (
            <div>
            <div style={{ paddingTop: 20, paddingBottom: 20}}>
                    <div className='Input'>
                        <label className='Label'>First Name *</label>
                        <input className='InputElement' 
                                
                               onChange={( event ) => this.setState({
                                   ...this.state,
                                   registrationform: {
                                        ...this.state.registrationform,
                                       firstName: event.target.value                                        
                                    }                                    
                                })} />
                    </div>
                    <div className='Input'>
                        <label className='Label'>Last Name *</label>
                        <input className='InputElement' 
                               
                               onChange={( event ) => this.setState({ 
                                    ...this.state,
                                    registrationform: {
                                        ...this.state.registrationform,
                                       lastName: event.target.value
                                    }
                                })} />
                    </div>
                    <div className='Input'>
                        <label className='Label'>DOB *</label>
                        <input className='InputElement' 
                               
                               onChange={( event ) => this.setState({ 
                                    ...this.state,
                                    registrationform: {
                                        ...this.state.registrationform,
                                       dob: event.target.value
                                    }
                                })} />
                    </div>
                    <div className='Input'>
                        <label className='Label'>E-mail *</label>
                        <input className='InputElement' 
                                
                               onChange={( event ) => this.setState({ 
                                    ...this.state,
                                    registrationform: {
                                        ...this.state.registrationform,
                                       email: event.target.value 
                                    }
                                })} />
                    </div>
                    <div className='Input'>
                        <label className='Label'>Contact Number *</label>
                        <input className='InputElement' 
                               
                               onChange={( event ) => this.setState({ 
                                    ...this.state,
                                    registrationform: {
                                          ...this.state.registrationform,
                                       contactNumber: event.target.value
                                    }
                                })} />
                    </div>
                    <div className='Input'>
                        <label className='Label'>Vehicle Number </label>
                        <input className='InputElement' 
                               
                               onChange={( event ) => this.setState({ 
                                    ...this.state,
                                    registrationform: {
                                        ...this.state.registrationform,
                                       vehicleNumber: event.target.value
                                    }
                                })} />
                    </div>
                </div>
                <div style={{paddingTop: 20}}>
                    <Button variant= 'primary' onClick={this.registrationHandler}>Register User</Button>
                    <Button style={{marginLeft: 20}} variant='secondary'>Cancel</Button>
                </div>
                </div>
        );
        if ( this.state.loading === true && this.state.isregistered === false) {
            form = <Spinner />;
        }
        let alertMessage = null;
        if ( this.state.isregistered ) {
            alertMessage = (
                <Alert variant="danger" dismissible>
                     <Alert.Heading>E-mail already registered!</Alert.Heading>
                     <p>
                     The e-mail you entered has already been registered. Kindly 
                     enter a different e-mail or go to the login page to continue.
                     </p>
                 </Alert>
            );
        }
             
        return (
            <div className='Registration'>
                <div className='Header'>
                    <h4>New User Registration</h4>
                </div>
                {alertMessage}
                {form}                
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        saveEmail: (registeredEmail) => dispatch({type: actionTypes.LOGIN_EMAIL, email: registeredEmail})       
    }
}

export default connect(null, mapDispatchToProps)(withErrorHandler( Registration, axios ));