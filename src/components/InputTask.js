import React, { Component } from "react";

export default class InputTask extends Component {
  constructor(props) {
    super(props);
    this.state = { newTask: { taskName: null, completed: null } };
  }

  handleChange = (event) => {
    this.setState({
      newTask: { taskName: event.target.value, completed: false },
    });
  };

  handleSubmit = (event) => {
    event.preventDefault();
    this.props.addTask(this.state.newTask);
  };

  render() {
    return (
      <div>
        <div>Hi {this.props.name}, what would you like to do today?</div>
        <form onSubmit={this.handleSubmit}>
          <input type="text" onChange={this.handleChange} />
          <button>Submit</button>
        </form>
      </div>
    );
  }
}
