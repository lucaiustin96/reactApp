import React, { Component } from 'react';
class Card extends Component {
  constructor(props) {
    super(props);

    this.drag = this.drag.bind(this);
  }

  drag(e) {
    e.preventDefault();
    e.dataTransfer.setData("id", e.target.id);
  }

  dragOver(e) {
    e.stopPropagation();
  }

  render() {
    return <div id={"id" + this.props.id} 
                className="card" 
                draggable="true" 
                onDragStart={(e) => this.drag(e)}
                onDragOver={(e) => this.dragOver(e)}>
      <div className="title">{this.props.name}</div>
      <div className="description">{this.props.description}</div>
    </div>
  }
}
export default Card; 