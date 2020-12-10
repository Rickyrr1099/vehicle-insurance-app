import React, { Component } from 'react';
import { connect } from 'react-redux';
import { Button, Alert } from 'react-bootstrap';

import axios from '../../axios';
import Spinner from '../../components/Spinner/Spinner';
import withErrorHandler from '../../hoc/withErrorHandler/withErrorHandler';
import './Details.css';

class Details extends Component {

    state = {
        vehicleDetails: {
            email: this.props.customerEmail,
            vehicleType: 'Car',
            hasPersonalAccidentCover: false,
            city: 'Delhi',
            manufacturer: 'Honda',
            model: 'Apache',
            registrationYear: 2020
        },
        loading: false,
        isregistered: false
    }

    componentDidMount () {
        console.log( this.props );
        if ( this.props.customerEmail !== '' ) {
            this.setState({ ...this.state, isregistered: true});
        }
    }
    

    detailsResetHandler = () => {
        this.setState(
            {
                vehicleDetails: {
                    email: this.props.customerEmail,
                    vehicleType: 'Car',
                    hasPersonalAccidentCover: false,
                    city: 'Delhi',
                    manufacturer: 'Honda',
                    model: 'Apache',
                    registrationYear: 2020
                },
                isregistered: false
            }
        );
    }

    detailsSubmitHandler = () => {

        this.setState( { ...this.state, loading: true } );

        const data = {            
            email: this.state.vehicleDetails.email,
            vehicleType: this.state.vehicleDetails.vehicleType,
            hasPersonalAccidentCover: this.state.vehicleDetails.hasPersonalAccidentCover,
            city: this.state.vehicleDetails.city,
            manufacturer: this.state.vehicleDetails.manufacturer,
            model: this.state.vehicleDetails.model,
            registrationYear: this.state.vehicleDetails.registrationYear
        };
        console.log(data);

        axios.post( '/details', data )
            .then( response => {
                console.log( response );
                this.setState( { ...this.state, loading: false } );
                this.props.history.push('/results/'+data.email);
            } )
            .catch( error => {
                console.log( error );
                this.setState( { ...this.state, loading: false } );
            } );
    }  

    vehicleTypeHandler = (event) => {
        this.setState({
            ...this.state,
            vehicleDetails: {
                 ...this.state.vehicleDetails,
                vehicleType: event.target.value                                        
             }                                    
         })
    }

    accidentCoverHandler = (event) => {

        let checked = this.state.vehicleDetails.hasPersonalAccidentCover;
        if (checked === false) {
            checked = true
        }
        else {
            checked = false
        }
        
        this.setState({
            ...this.state,
            vehicleDetails: {
                 ...this.state.vehicleDetails,
                accidentCoverHandler: checked                                       
             }                                    
         })
    }

    cityHandler = (event) => {
        this.setState({
            ...this.state,
            vehicleDetails: {
                 ...this.state.vehicleDetails,
                city: event.target.value                                        
             }                                    
         })
    }

    manufacturerHandler = (event) => {
        this.setState({
            ...this.state,
            vehicleDetails: {
                 ...this.state.vehicleDetails,
                manufacturer: event.target.value                                        
             }                                    
         })
    }

    modelHandler = (event) => {
        this.setState({
            ...this.state,
            vehicleDetails: {
                 ...this.state.vehicleDetails,
                model: event.target.value                                        
             }                                    
         })
    }

    yearHandler = (event) => {
        this.setState({
            ...this.state,
            vehicleDetails: {
                 ...this.state.vehicleDetails,
                registrationYear: event.target.value                                        
             }                                    
         })
    }

    render () {

        let form = (
            <div>
                <div className='Vehicle'>
                    <label className='Label'>Vehicle Insurance</label>                    
                    <div>
                        <input style={{ paddingRight: 20 }} type='radio' value='Car' name='vehicle-type' onChange={this.vehicleTypeHandler}/> Car
                    </div>
                    <div style={{ paddingLeft: 20 }}>                      
                        <input style={{ paddingRight: 20 }} type='radio' value='Two wheeler' name='vehicle-type' onChange={this.vehicleTypeHandler}/>Two wheeler                        
                    </div>
                </div>
                <div className='VehicleDetails'>
                    <div className='Input'>
                        <label className='Label'>Personal Accident Cover</label>
                        <input className='InputElement' type='checkbox' onChange= {this.accidentCoverHandler}></input>
                    </div>
                    <div className='Input'>            
                        <label className='Label'>City</label>
                        <select className='InputElement' onChange={this.cityHandler}>
                            <option value="Delhi">Delhi</option>
                            <option value="Mumbai">Mumbai</option>
                            <option value="Bangalore">Bangalore</option>
                            <option value="Hyderabad">Hyderabad</option>
                        </select>
                    </div>
                    <div className='Input'>
                        <label className='Label'>Manufacturer</label>
                        <select className='InputElement' onChange={this.manufacturerHandler}>
                            <option value="Honda">Honda</option>
                            <option value="Maruti">Maruti Suzuki</option>
                            <option value="Hyundai">Hyundai</option>
                            <option value="Mahindra">Mahindra</option>
                        </select>
                    </div>
                    <div className='Input'>
                        <label className='Label'>Model</label>
                        <select className='InputElement' onChange={this.modelHandler}>
                            <option value="Amaze">Amaze</option>
                            <option value="Civic">Civic</option>
                            <option value="Apache">Apache</option>
                            <option value="Creta">Creta</option>
                        </select>
                    </div>
                    <div className='Input'>
                        <label className='Label'>Registration Year</label>
                        <select className='InputElement' onChange={this.yearHandler}>
                            <option value="2020">I have a brand New Bike</option>
                            <option value="2019">2019</option>
                            <option value="2018">2018</option>
                            <option value="2017">2017</option>
                            <option value="2016">2016</option>
                            <option value="2015">2015</option>
                            <option value="2014">2014</option>
                            <option value="2013">2013</option>
                            <option value="2012">2012</option>
                            <option value="2011">2011</option>
                            <option value="2010">2010</option>
                            <option value="2009">2009</option>
                            <option value="2008">2008</option>
                            <option value="2007">2007</option>
                            <option value="2006">2006</option>
                            <option value="2005">2005</option>
                            <option value="2004">2004</option>
                            <option value="2003">2003</option>
                            <option value="2002">2002</option>
                        </select>
                    </div>
                    <div style={{marginLeft: 200, paddingTop: 20 }} >
                        <Button type='reset' 
                                variant='secondary'
                                onClick={this.detailsResetHandler}
                                >Reset</Button>
                        <Button style={{marginLeft: 30}} 
                                type='submit' 
                                variant='primary'
                                onClick={this.detailsSubmitHandler}
                                >Continue</Button>
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
                     Kindly register/login in order to enter vehicle details.
                     </p>
                 </Alert>
            );
        }

        return(
            <div className='Details'>
                <div className='Header'>
                    <h4>Details</h4>
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

export default connect(mapStateToProps)(withErrorHandler( Details, axios ));