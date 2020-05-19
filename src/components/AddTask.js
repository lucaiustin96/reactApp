import React, { Component } from 'react';
class AddTask extends Component {
  constructor(props) {
    super(props);

    this.state = {
        title: '',
        description: ''
      };

    this.drag = this.drag.bind(this);
    this.addTaskToList = this.addTaskToList.bind(this);
  }

  addTaskToList() {
    this.props.addTaskToList(this.state.title, this.state.description);
  }

  updateTitleValue(e) {
    this.setState({
      title: e.target.value
    });
  }

  updateDescriptionValue(e) {
    this.setState({
      description: e.target.value
    });
  }

  drag(e) {
    e.preventDefault();
    e.dataTransfer.setData("id", e.target.id);
  }

  dragOver(e) {
    e.stopPropagation();
  }

  render() {
    return <div>
                <div className="new-task">
                    <input type="text" 
                            value={this.state.title} 
                            onChange={e => this.updateTitleValue(e)} 
                            name="name" placeholder="Title"/>
                    <input type="text" 
                            onChange={e => this.updateDescriptionValue(e)} 
                            value={this.state.description} 
                            name="description" 
                            placeholder="Description"/>
                </div>
                <div className="add-task-button" onClick={this.addTaskToList}>Add Task</div>
            </div>
  }
}
export default AddTask; 