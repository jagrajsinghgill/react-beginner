import React from "react";

export class CounterWithNameClass extends React.Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "",
      age: 0,
    };
  }

  render() {
    const decrementAge = () => {
      this.setState((currentState) => {
        return { age: currentState.age - 1 };
      });
    };

    const incrementAge = () => {
      this.setState((currentState) => {
        return { age: currentState.age + 1 };
      });
    };

    return (
      <div>
        <input
          type="text"
          name="name"
          value={this.state.name}
          onChange={(e) => this.setState({ name: e.target.value })}
        />
        <br />
        <button onClick={decrementAge}>-</button>
        {this.state.age}
        <button onClick={incrementAge}>+</button>
        <br />
        <p>
          My name is {this.state.name} and I am {this.state.age} years old.
        </p>
      </div>
    );
  }
}
