import React, { Component } from "react";
import InputTask from "./components/InputTask";
import ListTasks from "./components/ListTasks";
import "./App.css";

export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      name: "Matthew",
      tasks: [{ taskName: "Do dishes", completed: false }],
    };
  }

  addTask = (task) => {
    console.log("line 15");
    console.log(task);
    task.key = Math.floor(Math.random() * 10000);
    this.setState({
      tasks: [
        ...this.state.tasks,
        { taskName: task.taskName, completed: false },
      ],
    });
  };

  updateTask = (task) => {
    console.log(task);
    this.setState({
      tasks: this.state.tasks.map((taskInArray) => {
        return taskInArray.taskName === task.taskName
          ? {
              taskName: taskInArray.taskName,
              completed: !taskInArray.completed,
            }
          : taskInArray;
      }),
    });
  };

  deleteTask = (task) => {
    this.setState({
      tasks: this.state.tasks.filter((item) => {
        return item.taskName !== task.taskName;
      }),
    });
  };

  render() {
    return (
      <div>
        <InputTask name={this.state.name} addTask={this.addTask} />
        <div>To do</div>
        {this.state.tasks.map((item) => {
          return (
            item.completed === false && (
              <ListTasks
                taskInfo={item}
                updateTask={this.updateTask}
                deleteTask={this.deleteTask}
              />
            )
          );
        })}
        <div>Completed Tasks</div>
        {this.state.tasks.map((item) => {
          return (
            item.completed === true && (
              <ListTasks
                taskInfo={item}
                updateTask={this.updateTask}
                deleteTask={this.deleteTask}
              />
            )
          );
        })}
      </div>
    );
  }
}
