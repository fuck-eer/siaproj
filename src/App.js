
import { Component } from 'react';

import classes from  './App.module.css';
import DocArea from './Docarea/DocArea';
import Header from './Header/header';
import Sidebar from './Sidebar/Sidebar';

class App extends Component {

componentDidMount(){

}

  render(){

    return (
      <div className={classes.App}>
  <Header/>

  <div className={classes.Content}>
    <Sidebar/>
    <DocArea/>
</div> 
  

  

    
      </div>
    );
  }
}




export default App;
