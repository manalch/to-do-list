import React, { Component } from 'react';
import ToDoItem from './ToDoItem';

class ToDoGroup extends Component {
    render() {
        return (
            <div>
                <ToDoItem />
            </div>
        );
    }
}

export default ToDoGroup;