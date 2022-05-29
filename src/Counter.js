import React, { Component } from 'react';

export default class Counter extends Component {
  constructor(props) {
    super(props);
    this.state = {
      count: 0,
    };
  }
  increase = () => {
    this.setState((state) => ({ count: state.count + 1 }));
  };
  render() {
    return (
      <div>
        <p>Tou clicked {this.state.count} Times</p>
        <button onClick={this.increase}>Click Me</button>
      </div>
    );
  }
}
