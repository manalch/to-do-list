import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class ToDoGenerator extends Component {

    onAddToDoItem = (event) => {
        event.preventDefault();
        const id = uuidv4();
        const text = event.target.toDoInput.value;
        const toDo = { id, text, status: false };
        this.props.addToDoItem(toDo);
        event.target.toDoInput.value = "";
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onAddToDoItem}>
                    <div>
                        <h3>Add to do list</h3>
                        <input type="text" name="toDoInput" id="toDoInput" />
                        <input type="submit" value="Add" id="toDoSubmit" />
                    </div>
                </form>
            </div>
        );
    }
}

export default ToDoGenerator;