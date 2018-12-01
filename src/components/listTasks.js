import React from "react";
import Item from "./item";

class ListTasks extends React.Component {
  renderItems() {
    return this.props.todos.map((c, index) => {
      return (
        <Item
          key={index}
          {...c}
          id={index}
          toggleTask={this.props.toggleTask} // Не понятно
        />
      );
    });
  }

  render() {
    if (!this.props.todos.length) {
      return <p>Create you first task!</p>;
    }

    return <div>{this.renderItems()}</div>;
  }
}

export default ListTasks;
