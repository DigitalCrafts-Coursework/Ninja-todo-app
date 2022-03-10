import React, { Component } from "react";

export default class ListTasks extends Component {
  render() {
    return (
      <div className="task" key={Math.floor(Math.random() * 10000)}>
        <input
          type="checkbox"
          onChange={() => this.props.updateTask(this.props.taskInfo)}
        />
        <span>{this.props.taskInfo.taskName}</span>
        <input
          type="checkbox"
          onChange={() => this.props.deleteTask(this.props.taskInfo)}
        />
      </div>
    );
  }
}
