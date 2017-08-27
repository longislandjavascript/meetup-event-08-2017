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
    this.setState({
      contestant: event,
    });
  };

  addContestant = contestant => {
    const lowCaseContestants = this.state.contestants.map(contestant => contestant.toLowerCase());
    if (contestant && !lowCaseContestants.includes(contestant.toLowerCase())) {
      const contestants = this.state.contestants.slice();
      contestants.push(contestant);
      this.setState({ contestants });
    }
  };

  render() {
    const contestants = this.state.contestants.map(contestant =>
      <li key={contestant}>
        {contestant}
      </li>,
    );

    return (
      <div className="App">
        <input onChange={event => this.updateContestant(event)} />
        <button id="addBtn" onClick={() => this.addContestant(this.state.contestant)}>
          Add Contestant
        </button>
        <ul>
          {contestants}
        </ul>
      </div>
    );
  }
}

export default App;
