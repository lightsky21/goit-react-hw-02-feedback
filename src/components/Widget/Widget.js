import React, { Component } from 'react';
import PropTypes from 'prop-types';

export class Widget extends Component {
  static defaultProps = {};

  static propTypes = {};

  state = {
    good: 0,
    neutral: 0,
    bad: 0,
  };

  handleClick = key => {
    this.setState(prevState => {
      return {
        [key]: prevState[key] + 1,
      };
    });
  };

  render() {
    return (
      <div>
        <h2>Please leave feedback</h2>
        <div>
          {Object.keys(this.state).map(key => (
            <button
              type="button"
              key={key}
              onClick={() => this.handleClick(key)}
            >
              {key}
            </button>
          ))}
        </div>
        <h2>Statistics</h2>
        <ul>
          {Object.keys(this.state).map(key => (
            <li key={key}>
              {key} : {this.state[key]}
            </li>
          ))}
        </ul>
      </div>
    );
  }
}
