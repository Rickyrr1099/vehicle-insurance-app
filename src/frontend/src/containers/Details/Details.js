import React, { Component } from 'react';
import { Button } from 'react-bootstrap';

import './Details.css';

class details extends Component {
    render () {
        return(
            <div className='Details'>
                <div className='Header'>
                    <h4>Details</h4>
                </div>
                <div className='Vehicle'>
                    <label className='Label'>Vehicle Insurance</label>                    
                    <div>
                        <input style={{ paddingRight: 20 }} type='radio' value='Car' name='vehicle-type'/> Car
                    </div>
                    <div style={{ paddingLeft: 20 }}>                      
                        <input style={{ paddingRight: 20 }} type='radio' value='Two wheeler' name='vehicle-type'/>Two wheeler                        
                    </div>
                </div>
                <div className='VehicleDetails'>
                    <div className='Input'>
                        <label className='Label'>Personal Accident Cover</label>
                        <input className='InputElement' type='checkbox'></input>
                    </div>
                    <div className='Input'>            
                        <label className='Label'>City</label>
                        <select className='InputElement'>
                            <option value="delhi">Delhi</option>
                            <option value="mumbai">Mumbai</option>
                            <option value="bangalore">Bangalore</option>
                            <option value="hyderabad">Hyderabad</option>
                        </select>
                    </div>
                    <div className='Input'>
                        <label className='Label'>Manufacturer</label>
                        <select className='InputElement'>
                            <option value="honda">Honda</option>
                            <option value="maruti">Maruti Suzuki</option>
                            <option value="hyundai">Hyundai</option>
                            <option value="mahindra">Mahindra</option>
                        </select>
                    </div>
                    <div className='Input'>
                        <label className='Label'>Model</label>
                        <select className='InputElement'>
                            <option value="amaze">Amaze</option>
                            <option value="civic">Civic</option>
                            <option value="apache">Apache</option>
                            <option value="creta">Creta</option>
                        </select>
                    </div>
                    <div className='Input'>
                        <label className='Label'>Registration Year</label>
                        <select className='InputElement'>
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
                        <Button type='reset' variant='secondary'>Reset</Button>
                        <Button style={{marginLeft: 30}} type='submit' variant='primary'>Continue</Button>
                    </div> 
                </div>                
            </div>
        );
    }
}

export default details;