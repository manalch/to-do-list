import React, { Component } from 'react';
import ToDoGeneratorContainer from '../containers/ToDoGeneratorContainer';
import ToDoGroupContainer from '../containers/ToDoContainer';

class ToDoList extends Component {
    render() {
        return (
            <div>
                <ToDoGroupContainer />
                <ToDoGeneratorContainer />
            </div>
        );
    }
}

export default ToDoList;