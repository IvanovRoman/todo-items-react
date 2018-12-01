import React from "react";
import { Alert } from "antd";

class Item extends React.Component {
  constructor(props) {
    super(props);

    this.state = {
      isEditing: false
    };
  }

  render() {
    return <div>{this.renderTask()}</div>;
  }
  renderTask() {
    const { task } = this.props;

    return <div>{task}</div>;
    // return (
    //   <div>
    //     <Alert message={task} type="success" />
    //   </div>
    // );
    // <div>{task}</div>
    // <div onClick={this.toggleTask.bind(this)}>{task}</div>;
  }

  toggleTask() {
    this.props.toggleTask(this.props.id);
  }
}

export default Item;
