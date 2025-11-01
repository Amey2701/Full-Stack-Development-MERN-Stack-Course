import { Component } from "react";

class DisplayCounter extends Component {
  shouldComponentUpdate(nextProps, nextState) {
    if (this.props.counter != nextProps.counter) {
      return true;
    }
    return false;
  }

  componentWillUnmount() {
    console.log("componentWillUnmount called, cleanup!");
  }

  render() {
    return <h2>{this.props.counter}</h2>;
  }
}

export default DisplayCounter;
