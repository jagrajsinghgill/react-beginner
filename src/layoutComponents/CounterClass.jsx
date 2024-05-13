import React from "react";

export class CounterClass extends React.Component {
  constructor(props) {
    super(props)
    this.state = {
      counter: 0
    }
  }

  render () {

    const handleClick = () => {

      // To directly increase the counter
      this.setState({counter: this.state.counter + 1})

      // To use the counter value multiple times so
      // that it can be increased twice using single click.
      
      // this.setState((currState) => {
      //   return {counter: currState.counter + 1}
      // })

      // this.setState((currState) => {
      //   return {counter: currState.counter + 1}
      // })
    }

    return (
      <>
      <h1 onClick={handleClick}>Class Counter : {this.state.counter}</h1>
      </>
    )
  }
}