import React, { Component } from 'react';
import { Button, Table } from 'react-bootstrap';

import './Results.css';

class results extends Component {
    render () {
        return(
            <div className='Results'>
                <div className='Header'>
                    <h4>Results</h4>
                </div>
                <div className='ResultsBody'>
                    <h8><strong>Your Vehicle Details</strong></h8>  
                    <div className='VehicleSummary'>
                        <span>
                            <p>CITY:  <strong style={{color:'mediumseagreen'}}>City</strong>
                            <p style={{paddingRight: 80}}>MANUFACTURER:  <strong style={{color:'mediumseagreen'}}>
                                Manufacturer</strong></p></p>
                        </span>
                        <span>
                            <p>MODEL:  <strong style={{color:'mediumseagreen'}}>Model</strong>
                            <p>REGISTRATION YEAR:  <strong style={{color:'mediumseagreen'}}>Year</strong></p></p>
                        </span>
                    </div>
                    <div style={{paddingTop: 30, textAlign: "left" }}>
                        <p> <strong style={{color:'red'}}>
                        Your IDV (Insured Declared Value) is the maximum amount payable by 
                        the Insurer in the event of claim for total loss/theft</strong></p>
                    </div>
                    <Table striped bordered hover>
                        <thead>
                            <tr style={{ backgroundColor: '#01a01b', fontWeight: 'bold'}}>
                            <th>Select</th>
                            <th>Insurer</th>
                            <th>IDV</th>
                            <th>Premium</th>
                            </tr>
                        </thead>
                        <tbody>
                            <tr>
                            <td><input type='radio' value='bajaj' name='insurance'/></td>
                            <td>Bajaj Allianz</td>
                            <td className='currSign'>50634</td>
                            <td className='currSign'>4314</td>
                            </tr>
                            <tr>
                            <td><input type='radio' value='kotak' name='insurance'/></td>
                            <td>Kotak General Insurance</td>
                            <td className='currSign'>49000</td>
                            <td className='currSign'>3500</td>
                            </tr>
                            <tr>
                            <td><input type='radio' value='hdfc' name='insurance'/></td>
                            <td>HDFC ERGO</td>
                            <td className='currSign'>55000</td>
                            <td className='currSign'>4900</td>
                            </tr>
                            <tr>
                            <td><input type='radio' value='oriental' name='insurance'/></td>
                            <td>Oriental Insurance</td>
                            <td className='currSign'>48000</td>
                            <td className='currSign'>3800</td>
                            </tr>
                        </tbody>
                    </Table>  
                    <div style={{marginLeft: 200, paddingTop: 20 }} >
                        <Button type='reset' variant='secondary'>Back</Button>
                        <Button style={{marginLeft: 30}} type='submit' variant='primary'>Continue</Button>
                    </div> 
                </div>              
            </div>
        );
    }
}

export default results;