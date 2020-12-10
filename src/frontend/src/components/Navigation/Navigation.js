import React from 'react';
import { Route, NavLink, Switch, Redirect } from 'react-router-dom';

import Login from '../../containers/Login/Login';
import Details from '../../containers/Details/Details';
import Results from '../../containers/Results/Results';
import './Navigation.css';
import deloittelogo from '../../assets/images/Deloitte-logo.jpg'
import Registration from '../../containers/Registration/Registration';
import TransactionDetails from '../../containers/TransactionDetails/TransactionDetails';

const Navigation = (props) => {

    return(
        <div className='Navigation'>
            <header style={{display: "flex"}}>
                <div className='Logo' style={{height: props.height}}>
                    <img src={deloittelogo} alt="Deloitte Logo" />
                </div>
                <nav>
                    <ul>
                        <li >
                            <NavLink
                            to='/login'
                            activeClassName='my-active'
                            activeStyle={{color: 'orange'}}
                            >Login</NavLink>
                        </li>
                        <li>
                            <NavLink
                            to='/details'
                            activeClassName='my-active'
                            activeStyle={{color: 'orange'}}
                            >Details</NavLink>
                        </li>
                        <li>
                            <NavLink
                            to='/results'
                            activeClassName='my-active'
                            activeStyle={{color: 'orange'}}
                            >Results</NavLink>
                        </li>
                    </ul>    
                </nav>
            </header>
            <Switch>
                <Route path='/login' component={Login} />
                <Route path='/details' component={Details} />
                <Route path='/results' component={Results}/>
                <Route path='/payment' component={TransactionDetails}/>                             
                <Route path='/register' component={Registration} />
                <Redirect to='/register'/>
            </Switch>
            {/* <Route render={() => <h1>Not found</h1>}/> */}
        </div>
    );
}

export default Navigation;