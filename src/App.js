import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contestant: '',
    };
  }

  updateContestant = event => {
    console.log(event);
    this.setState({
      contestant: event,
    });
  };

  render() {
    return (
      <div className="App">
        <input onChange={event => this.updateContestant(event)} />
      </div>
    );
  }
}

export default App;
