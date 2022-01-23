import React, { Component } from 'react';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    person:[
      {name:'kumar',age:"26"},
      {name:'manju',age:"24"},
      {name:'lathu',age:"21"}
    ]
}

switchNameHandler = () => {
  //console.log("was switch clicked")
  this.setState({
    person:[
      {name:'kumar jujare',age:"26"},
      {name:'manju',age:"24"},
      {name:'lathu',age:"21"}
    ]

  })
}

  render() {
    return (
      <div className="App">
       <h1>Hi, I'm a React App</h1>
       <button onClick={this.switchNameHandler}>switch here </button>
       <Person name={this.state.person[0].name} age={this.state.person[0].age} />
       <Person name={this.state.person[1].name} age={this.state.person[1].age} >My Hobbies: Racing</Person>
       <Person name={this.state.person[2].name} age={this.state.person[2].age} />
      </div>
    );
    // return React.createElement('div', {className: 'App'}, React.createElement('h1', null, 'Does this work now?'));
  }
}

export default App;
