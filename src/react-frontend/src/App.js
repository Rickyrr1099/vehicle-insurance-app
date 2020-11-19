import { Component } from 'react';
import './App.css';
import Menubar from './components/Menubar/Menubar';
import Registration from './containers/Registration/Registration';


class App extends Component{

  render() {
    return (
      <div>
        <Menubar />
        <Registration />    
      </div>  
    );
  }
}

export default App;
