import { Component } from 'react';

import './App.css';
import Menubar from './components/Menubar/Menubar';


class App extends Component{

  render() {
    return (
      <div className='App'>
        <Menubar />  
      </div>  
    );
  }
}

export default App;
