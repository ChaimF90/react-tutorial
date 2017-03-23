import React, { Component } from 'react';
import logo from './logo.svg';
import Form from './Form';
import Ppl from './Ppl';
import './App.css';
import axios from 'axios';

class App extends Component {
  constructor() {
    super();
    this.state = {
      person: {
        firstName: '',
        lastName: '',
        age: 0
      },
      ppl: []
    }
    this.changeHandler = this.changeHandler.bind(this);
    this.savePerson = this.savePerson.bind(this);
  }

  componentDidMount() {
    console.log('did mount')
  }

  changeHandler(e) {
    let person = this.state.person;
    person[e.target.name] = e.target.value;
    this.setState({person})
  }

  savePerson() {
    let foo = this.state.ppl;
    let newPerson = Object.assign({}, this.state.person)
    foo.push(newPerson);
    this.setState({foo});
  }

  render() {
    return (
      <div className="App">
       <Form
       save={this.savePerson}
       handler={this.changeHandler} 
       person={this.state.person} />
       <br />
       <Ppl ppl={this.state.ppl} />
      </div>
    );
  }
}

export default App;
