import React, { Component } from 'react';
import axios from 'axios';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';


class App extends Component{
  
  constructor(props){
    super(props);

    this.state = {
      data:[]
    }

   }

  componentDidMount(){
    axios.get('https://api.github.com/repositories')
      .then(({data})=>{
        this.setState({data});
      })    
  } 

  render(){
    const { data } = this.state

    return (

      <div className="App">
          <ul>
            {data.map(item => <li>{item.full_name}</li>)}
          </ul>
      </div> 
 
   );
  }
  
}

export default App;

