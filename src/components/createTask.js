import React from "react";
import { Input } from "antd";

export default class CreatorTask extends React.Component {
  constructor(props) {
    super(props);
    this.state = { value: "" };

    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(event) {
    this.setState({ value: event.target.value });
  }

  handleSubmit(event) {
    this.props.createTask(this.state.value);
    this.state.value = "";
    event.preventDefault();
  }
  render() {
    return (
      <form onSubmit={this.handleSubmit}>
        <label>
          Name:
          <Input
            placeholder="Basic usage"
            type="text"
            value={this.state.value}
            onChange={this.handleChange}
          />
        </label>
        <input type="submit" value="Submit" />
      </form>
    );
  }

  onSubmit(e) {
    this.props.createTask(this.refs.taskMessage.value);
    this.refs.taskMessage.value = "";
    e.preventDefault();
  }
}
