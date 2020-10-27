import React, { Component } from 'react';

class ToDoItem extends Component {
    render() {
        const todoIsDone = this.props.toDo.status;

        const style = {
          textDecoration: todoIsDone ? 'line-through' : '',
          color: todoIsDone ? 'gray' : 'white'
        }
        return (
            <div>
                <div>
                    <span style={style} onClick={() => this.props.updateItemStatus(this.props.toDo.id)}>{this.props.toDo.text}</span>
                    <span onClick={() => this.props.deleteToDoItem(this.props.toDo.id)}><span>X</span></span>
                </div>
            </div>
        );
    }
}

export default ToDoItem;