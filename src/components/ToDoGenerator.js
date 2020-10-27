import React, { Component } from 'react';
import { v4 as uuidv4 } from 'uuid';

class ToDoGenerator extends Component {

    onAddToDoItem = (event) => {
        event.preventDefault();
        const id = uuidv4();
        const text = event.target.toDoInput.value;
        const toDo = { id, text, status: false };
        console.log(this.props);
        this.props.addToDoItem(toDo);
    }

    render() {
        return (
            <div>
                <form onSubmit={this.onAddToDoItem}>
                    <section>
                        <input type="text" name="toDoInput" id="toDoInput" />
                        <input type="submit" value="Add" id="toDoSubmit" />
                    </section>
                </form>
            </div>
        );
    }
}

export default ToDoGenerator;