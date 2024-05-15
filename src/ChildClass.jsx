import React from "react";

export class ChildClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
    };
  }

  componentDidUpdate(prevProps, prevState) {
    console.log("From Class : Render");

    if (
      prevState.name !== this.state.name ||
      prevState.age !== this.state.age
    ) {
      console.log(
        `From Class : My name is ${this.state.name} and I am ${this.state.age} years old`
      );
    }

    if (prevState.name !== this.state.name) {
      document.title = this.state.name;

      if (this.timeoutHandler != null) {
        clearTimeout(this.timeoutHandler);
      }
      this.timeoutHandler = setTimeout(() => {
        console.log(`From Class : My name is ${this.state.name}`);
      }, 1000);
    }
  }
  componentDidMount() {
    console.log("From Class : Render");
    console.log("From Class : Hi");
  }

  componentWillUnmount() {
    if (this.timeoutHandler != null) {
      clearTimeout(this.timeoutHandler);
    }
    console.log("From Class : Bye");
  }

  render() {
    return (
      <div>
        <input
          type="text"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <br />
        <br />
        <button
          onClick={() =>
            this.setState((currState) => {
              return { age: currState.age - 1 };
            })
          }
        >
          -
        </button>
        {this.state.age}
        <button
          onClick={() =>
            this.setState((currState) => {
              return { age: currState.age + 1 };
            })
          }
        >
          +
        </button>
        <br />
        <br />
        My name is {this.state.name} and I am {this.state.age} years old.
      </div>
    );
  }
}
