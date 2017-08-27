import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      contestant: '',
      contestants: [],
      winners: [],
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

  drawWinners = contestants => {
    const winners = shuffle(contestants).slice(0, 3);
    this.setState({ winners });
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
        <button id="drawBtn" onClick={() => this.drawWinners(this.state.contestants)}>
          Draw Winners
        </button>
      </div>
    );
  }
}

export default App;

/* Courtesy of the fisher-yates shuffle algorithm
 * https://www.frankmitchell.org/2015/01/fisher-yates/
 */
export function shuffle(arr) {
  const array = arr.slice();
  var i = 0,
    j = 0,
    temp = null;

  for (i = array.length - 1; i > 0; i -= 1) {
    j = Math.floor(Math.random() * (i + 1));
    temp = array[i];
    array[i] = array[j];
    array[j] = temp;
  }

  return array;
}
