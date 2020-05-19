import React, { Component } from 'react';
import Card from './Card';
import AddTask from './AddTask';

class Board extends Component {
  constructor(props) {
    super(props);
    this.state = {
      tasks: props.tasks
    };
    this.drop = this.drop.bind(this);
    this.allowDrop = this.allowDrop.bind(this);
    this.addTaskToList = this.addTaskToList.bind(this);
  }

  drop(e) {
    e.preventDefault();
    var data = e.dataTransfer.getData("id");
    e.target.appendChild(document.getElementById(data));
  }

  allowDrop(e) {
    e.preventDefault();
  }

  addTaskToList(title, description) {
    var newId = this.state.tasks[this.state.tasks.length - 1].id + 1;
    var task =  {
      id: newId,
      name: title,
      description: description
    };
    this.setState({ 
      tasks: this.state.tasks.concat([task])
    })
  }

  render() {
    const cards = this.state.tasks.map((task) =>
    <Card key={task.id}
          id={task.id}
          name={task.name}
          description={task.description}/>
  );
    return <div id={this.props.id} 
                className="board"
                onDrop={(e) => this.drop(e)} 
                onDragOver={(e) => this.allowDrop(e)}>
              <div className="board-title">{this.props.title}</div> 
              {cards}
              <AddTask addTaskToList={this.addTaskToList}/>
            </div>
  }
}
export default Board; 