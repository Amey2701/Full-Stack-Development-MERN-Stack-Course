import { Component } from "react";
import "./App.css";
import DisplayCounter from "./components/DisplayCounter";
import UserList from "./components/UserList";

class App extends Component {
  state = {
    counter: 0,
    flag: false,
  };

  componentDidMount() {
    console.log("mounted after first render");
  }

  handleClick = () => {
    this.setState(
      { counter: this.state.counter + 1 },
      () => console.log("counter", this.state.counter)
    );
  };

  handleToggle = () => {
    this.setState({ flag: !this.state.flag });
  };

  componentDidUpdate(prevProps, prevState) {
    if (prevState.counter != this.state.counter) {
      alert("state updated");
    }
  }

  render() {
    return (
      <div>
        <h1>Hello</h1>
        {this.state.flag && <DisplayCounter counter={this.state.counter} />}
        <button onClick={this.handleClick}>Increase</button>
        <button onClick={this.handleToggle}>Toggle</button>
        <UserList />
      </div>
    );
  }
}

export default App;
