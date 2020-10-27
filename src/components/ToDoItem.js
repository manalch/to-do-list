import React, { Component } from 'react';

class ToDoItem extends Component {
    render() {
        return (
            <div>
                <input type="text" />
                <input type="button" value="x" />
            </div>
        );
    }
}

export default ToDoItem;