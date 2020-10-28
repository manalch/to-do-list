import React, { Component } from 'react';
import ToDoGeneratorContainer from '../containers/ToDoGeneratorContainer';
import ToDoGroupContainer from '../containers/ToDoContainer';

class ToDoList extends Component {
    render() {
        return (
            <div id="parent">
                <div id="generatorContainer" className="borderFrame">
                    <ToDoGeneratorContainer />
                </div>
                <div id="groupContainer">
                    <ToDoGroupContainer />
                </div>
            </div>
        );
    }
}

export default ToDoList;