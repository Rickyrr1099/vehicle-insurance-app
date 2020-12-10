import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Alert, Table } from 'react-bootstrap';

import axios from '../../axios';
import Spinner from '../../components/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';

import './Results.css';

class Results extends Component {

    state = {
        email: '',
        city: '',
        manufacturer: '',
        model: '',
        year: null,
        insurer: '',
        idv: null,
        premium: null,
        loading: false,
        isregistered: false
    }

    componentDidMount () {
        console.log( this.props );

        if ( this.props.customerEmail !== '' ) {
            this.setState({ 
                ...this.state, 
                email: this.props.customerEmail,
                isregistered: true});
        }

        axios.get('/results/'+this.state.email)
            .then(response => {
                
                this.setState({
                    ...this.state,
                    city: response.city,
                    manufacturer: response.manufacturer,
                    model: response.model,
                    year: response.registrationYear
                });
            }).catch( error => {
                console.log( error );
            } );

    }

    saveInsuranceHandler = ( event ) => {
        switch (event.target.value) {
            case 'bajaj':
                this.setState({
                    ...this.state,
                    insurer: 'Bajaj Allianz',
                    idv: 50634,
                    premium: 4314
                });
                break;
            case 'kotak':
                this.setState({
                    ...this.state,
                    insurer: 'Kotak General Insurance',
                    idv: 49000,
                    premium: 3500
                });
                break;
            case 'hdfc':
                this.setState({
                    ...this.state,
                    insurer: 'HDFC ERGO',
                    idv: 55000,
                    premium: 4900
                });
                break;
            case 'oriental':
                this.setState({
                    ...this.state,
                    insurer: 'Oriental Insurance',
                    idv: 48000,
                    premium: 3800
                });
                break;
            default: 
            this.setState({
                ...this.state,
                insurer: '',
                idv: 0,
                premium: 0
            });
        }
        console.log(this.state);
    }

    // make loading false
    insuranceSubmitHandler = () => {

        const data = {            
            email: this.state.email,
            insurer: this.state.insurer,
            idv: this.state.idv,
            premium: this.state.premium
        };
        console.log(data);

        axios.post( '/results', data )
            .then( response => {
                console.log( response );
                this.setState( { ...this.state, loading: false } );
                this.props.history.push('/payment/'+data.email);
            } )
            .catch( error => {
                console.log( error );
                this.setState( { ...this.state, loading: false } );
            } );
    }

    toDetailsHandler = () => {
        this.props.history.push('/details/'+this.state.email);
    }

    render () {      

        let form = (
            <div>
                <div className='ResultsBody'>
                    <h8><strong>Your Vehicle Details</strong></h8>  
                    <div className='VehicleSummary'>
                        <span>
                            <p>CITY:  <strong style={{color:'mediumseagreen'}}>{this.state.city}</strong>
                            <p style={{paddingRight: 80}}>MANUFACTURER:  <strong style={{color:'mediumseagreen'}}>
                            {this.state.manufacturer}</strong></p></p>
                        </span>
                        <span>
                            <p>MODEL:  <strong style={{color:'mediumseagreen'}}>{this.state.model}</strong>
                            <p>REGISTRATION YEAR:  <strong style={{color:'mediumseagreen'}}>{this.state.year}</strong></p></p>
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
                            <td><input type='radio' value='bajaj' name='insurance' onClick={this.saveInsuranceHandler}/></td>
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
                        <Button type='reset' 
                                variant='secondary' 
                                onClick={this.toDetailsHandler}>Back</Button>
                        <Button style={{marginLeft: 30}} 
                                type='submit' 
                                variant='primary' 
                                onClick={this.insuranceSubmitHandler}>Continue</Button>
                    </div> 
                </div>              
            </div>
        );


        if ( this.state.loading === true && this.state.isregistered === false ) {
            form = <Spinner />
        }

        let alertMessage = null;
        if ( this.state.isregistered === false) {
            alertMessage = (
                <Alert variant="danger" dismissible>
                     <Alert.Heading>Oops, you are not registered!</Alert.Heading>
                     <p>
                     Kindly register/login in order to enter insurance details.
                     </p>
                 </Alert>
            );
        }

        return(
            <div className='Results'>
                <div className='Header'>
                    <h4>Results</h4>
                </div>
                {alertMessage}
                {form}
            </div>
            
        );
    }
}

const mapStateToProps = state => {
    return {
        customerEmail: state.email       
    }
}

export default connect(mapStateToProps)(withErrorHandler( Results, axios ));