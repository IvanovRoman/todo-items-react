import React from "react";
import { Input } from "antd";

export default class CreatorTask extends React.Component {
  render() {
    return (
      <form onSubmit={this.onSubmit.bind(this)} className="">
        <Input
          type="text"
          placeholder=" create task"
          ref="taskMessage"
          size="large"
        />
        <input type="text" placeholder=" create task" ref="taskMessage" />
        <button>Add Task</button>
      </form>
    );
  }

  onSubmit(e) {
    this.props.createTask(this.refs.taskMessage.value);
    this.refs.taskMessage.value = "";
    e.preventDefault();
  }
}
