import React, { Component } from 'react';

class ToDoItem extends Component {
    render() {
        const isDone = this.props.toDo.status;
        const style = {
            textDecoration: isDone ? 'line-through' : '',
            color: isDone ? 'gray' : 'black'
        }
        return (
            <div className="borderFrame">
                <span style={style} onClick={() => this.props.updateItemStatus(this.props.toDo.id)}>{this.props.toDo.text}</span>
                <span className="removeClass" onClick={() => this.props.deleteToDoItem(this.props.toDo.id)}>x</span>
            </div>
        );
    }
}

export default ToDoItem;