import React, { Component } from 'react';
import './css/App.css';
import Model from "./Model"
import { Button, Input } from "reactstrap";
class App extends Component {
  
  state = {
    appTitle: "Decide for me 😕",
    subtitle: "No more wasting of time to decide, let computers do it for you 💻",
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
  
  // the decision logic button -- function
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
        <p><strong>{ this.state.options.length > 0 ? "here are your options" : "No options"}</strong></p>
        <ol>
        {options}
        </ol>
        <Model 
        options={this.state.options}
        />
       
        <span>         </span>
        
        <Button onClick={this.removeAll} color="danger" type="button" >Clear</Button>
        <br />
        <br />
        <form onSubmit={this.onFormSubmit}  >
        <div className="container">
          <Input type="text" name="option" placeholder="Enter an option"/>
          </div>
          <br />

          <Button type="submit" color="primary">Add option</Button>
        </form>
     
      </div>
      
    );
  }
}

export default App;
