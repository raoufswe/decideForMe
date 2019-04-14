import React, { Component } from 'react';
import './App.css';
import Button from '@material-ui/core/Button';

class App extends Component {
  
  state = {
    appTitle: "Decide for me",
    subtitle: "No more wasting of time to decide, let computers do it for you!",
    options : []
  }

   onFormSubmit = (e) => {
    e.preventDefault() 
    let option = e.target.elements.option.value
    let options = this.state.options
    if(option) {
      this.state.options.push(option)
      this.setState({
       options: options
      })
      e.target.elements.option.value = ''
    }
  }
  
  // the remove options button 
   removeAll  = () =>{
    this.setState({
      options : []
    })
  }
  
  // the decision logic button
   decide = () => {
    let randomNum = Math.floor(Math.random() *  this.state.options.length);
    let option =  this.state.options[randomNum];
    alert(option);
  }


  render() {
   
    let options = this.state.options.map(function(name){
      return <li>{name}</li>;
    })

    return (
      <div className="App">
        <h2>{ this.state.appTitle}</h2>
        <p>{ this.state.subtitle}</p>
        <p>{ this.state.options.length > 0 ? "here are your options" : "No options"}</p>
        <ol>
        {options}
        </ol>
        <Button  onClick={this.decide} variant="contained" color="primary">Decide for me</Button>
        <span>         </span>
        
        <Button onClick={this.removeAll} variant="contained" color="secondary">Clear</Button>
        <br />
        <br />
        <form onSubmit={this.onFormSubmit} >
          <input type="text" name="option" placeholder="Enter an option"/>
          <br />
          <br />
          <button className="button">Add option</button>
        </form>
      </div>
    );
  }
}

export default App;
