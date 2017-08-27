import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contestant: '',
      contestants: [],
    };
  }

  updateContestant = event => {
    console.log(event);
    this.setState({
      contestant: event,
    });
  };

  addContestant = contestant => {
    if (contestant && !this.state.contestants.includes(contestant)) {
      const contestants = this.state.contestants.slice();
      contestants.push(contestant);
      this.setState({ contestants });
    }
  };

  render() {
    return (
      <div className="App">
        <input onChange={event => this.updateContestant(event)} />
        <button id="addBtn" onClick={() => this.addContestant(this.state.contestant)}>
          Add Contestant
        </button>
      </div>
    );
  }
}

export default App;
