import React from "react";

export class TodoListItemClass extends React.Component {

  // Excercise for Chapter 12 - Props - as class component.
  render() {
    return (
      <>
        <div>
          <input type="checkbox" name="class_checkbox" id="myclasscheckbox" defaultChecked={this.props.isComplete} />
          <label htmlFor="myclasscheckbox">{this.props.children}</label>
        </div>
      </>
    )
  }
}