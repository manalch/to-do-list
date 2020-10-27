import React, { Component } from 'react';
import ToDoItem from './ToDoItem';
import ToDoGenerator from './ToDoGenerator';

class ToDoList extends Component {
    render() {
        return (
            <div>
                <ToDoItem />
                <ToDoGenerator />
            </div>
        );
    }
}

export default ToDoList;