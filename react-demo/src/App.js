import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import { render } from '@testing-library/react';


class MyButton extends Component{
  render(){
    return <button onclick={() =>{ this.props.handleClick(this.props.label) }}
    > 
      {this.props.label}
    </button>
  }

}

class MyLabel extends Component{
  render(){
    console.log(this.props);
    return <p>Antes da props: {this.props.text}</p>

  }
}


class App extends Component{
  
  constructor(props){
    super(props);
    
    this.state = {
      labelText : '',
      color: props.color,
      initialColor: props.color,
    };

    this.setLabelText = this.setLabelText.bind(this);

   }

   setLabelText(labelText){
     this.setState({labelText});
   }

  render(){
    return (

      <div className="App">
       <MyLabel text={this.state.labelText} outroText="1"></MyLabel>
 
       <MyButton handleClick={this.setLabelText} label="Botão 1"></MyButton>
       <MyButton handleClick={this.setLabelText} label="Botão 2"></MyButton>
       <MyButton handleClick={this.setLabelText} label="Botão 3"></MyButton>
       <MyButton handleClick={this.setLabelText} label="Botão 4"></MyButton>
 
      </div> 
 
   );
  }
  
}

export default App;

