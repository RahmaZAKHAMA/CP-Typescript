import React, { Component } from "react";

interface State {
  count: number;
}
interface CounterProps{
    inc:number;
}
export default class Counter extends Component<CounterProps, State> {
  constructor(props: CounterProps) {
    super(props);
    this.state = { count: 0 };
  }

  increment = () => {
    this.setState({count: this.state.count+this.props.inc});
  };
  render() {
    return <div><h2>Counter: {this.state.count}</h2>
    <button onClick={this.increment}>Plus</button></div>;
  }
}
