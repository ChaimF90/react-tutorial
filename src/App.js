import React, { Component } from 'react';
import logo from './logo.svg';
import Form from './Form';
import './App.css';

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        firstName: '',
        lastName: '',
        age: 0
      }
    }
    this.changeHandler = this.changeHandler.bind(this);
  }

  changeHandler(e) {
    let person = this.state.person;
    person[e.target.name] = e.target.value;
    this.setState({person})
  }

  render() {
    return (
      <div className="App">
       <Form
       handler={this.changeHandler} 
       person={this.state.person} />
      </div>
    );
  }
}

export default App;
