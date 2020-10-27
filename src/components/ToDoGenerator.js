import React, { Component } from 'react';

class ToDoGenerator extends Component {
    render() {
        return (
            <section>
                <input type="text" />
                <input type="button" value="add" />
            </section>
        );
    }
}

export default ToDoGenerator;