import React, { Component } from 'react';
import { Form, Button, Alert } from 'react-bootstrap';

import Spinner from '../../components/Spinner/Spinner';
import './TransactionDetails.css';

class TransactionDetails extends Component{
  
    state = {
        cancelled: false,
        purchased: false
    }

    cancelHandler = () => {
        this.setState({...this.state, cancelled: true});
    }
    purchasedHandler = () => {
        this.setState({...this.state, purchased: true});
    }

    render() {

        let form = <Spinner />;

        form = (
            <div>
                <div style={{padding: 30}}>
                    <Form>
                        <Form.Group controlId='formBasicText'>
                            <Form.Label>Name On Card</Form.Label>
                            <Form.Control size='sm' type='text'/>                        
                        </Form.Group>

                        <Form.Group controlId="formBasicText">
                            <Form.Label>Card Number</Form.Label>
                            <Form.Control size='sm' type='text' placeholder="XXXX XXXX XXXX XXXX"/>
                        </Form.Group>

                        <Form.Group controlId='formBasicPassword' style={{display: 'flex'}}>
                            <div style={{width: 80}}>
                            <Form.Label>CVV</Form.Label>
                            <Form.Control size='sm' type='password' placeholder='ex. 123'/>
                            <Form.Text className="text-muted">
                            Never share your CVV with anyone else.
                            </Form.Text>
                            </div>
                            <div style={{ paddingLeft:50, width: 250}}>
                                <Form.Label>Expiration</Form.Label>
                                <div style={{display: 'flex', justifyContent: 'space-between'}}>
                                    <Form.Control style={{width: 80}} size='sm' type='text' placeholder='MM'/>                        
                                    <Form.Control style={{width: 80}} size='sm' type='text' placeholder='YYYY'/>                            
                                </div>
                            </div>
                        </Form.Group>
                    </Form>
                    <div className='BillAmount'><strong>4314</strong></div>
                    <div style={{paddingLeft: 100}}>
                        <Button variant= 'secondary' 
                                onClick={this.cancelHandler}>Cancel</Button>
                        <Button style={{marginLeft: 20, width: 80}} 
                                variant='primary'
                                onClick={this.purchasedHandler}>Pay</Button>
                    </div>
                </div>
            </div>
        );

        if (this.state.cancelled === true) {
            form = (
                <Alert variant="danger" dismissible>
                    <Alert.Heading>Payment cancelled!</Alert.Heading>
                    <p>
                        Kindly re-select insurance details and complete payment process.
                    </p>
                </Alert>
            );
        }
        if (this.state.purchased === true) {
            form = (
                <Alert variant="success" dismissible>
                    <Alert.Heading>Payment successful!</Alert.Heading>
                    <p>
                        You will receive an e-mail confirmation for your payment.
                    </p>
                </Alert>
            );
        }

        return (
            <div className='TransactionDetails'>
                <div className='Header'>
                    <h4>Transaction Details</h4>
                </div>
                {form}
            </div>
        );
    }
}

export default TransactionDetails;