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
  countTotalFeedback = () => {
    return Object.values(this.state).reduce((previousValue, number) => {
      return previousValue + number;
    }, 0);
  };

  countPositiveFeedbackPercentage = () => {
    const TotalFeedbackNumber = this.countTotalFeedback();
    const GoodFeedbackNumber = this.state.good;
    const PositiveFeedbackPercentage =
      (GoodFeedbackNumber * 100) / TotalFeedbackNumber;
    //
    return isNaN(PositiveFeedbackPercentage.toFixed(0))
      ? '0'
      : PositiveFeedbackPercentage.toFixed(0);
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
        <p>Total : {this.countTotalFeedback()}</p>
        <p>Positive feedback : {this.countPositiveFeedbackPercentage()} %</p>
      </div>
    );
  }
}
