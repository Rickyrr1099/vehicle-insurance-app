import React, { Component } from 'react';
import { Form, Button } from 'react-bootstrap';

import './TransactionDetails.css';

class transactionDetails extends Component{

    state = {
       
    }    
    render() {
        return (
            <div className='TransactionDetails'>
                <div className='Header'>
                    <h4>Transaction Details</h4>
                </div>
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
                        <Button variant= 'secondary'>Cancel</Button>
                        <Button style={{marginLeft: 20, width: 80}} variant='primary'>Pay</Button>
                    </div>
                </div>
            </div>
        );
    }
}

export default transactionDetails;