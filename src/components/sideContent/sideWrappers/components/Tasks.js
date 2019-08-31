import React, { Component } from 'react';

import TaskList from '../../../general/taskList';
import './tasks.css';

class Tasks extends Component {
    render() {
        return(
            <div className="taskComp">
                <h3>All Tasks</h3>
                <TaskList numberTasks={this.props.numberTasks} loadMore={this.props.loadMore} />
            </div> 
        );
    }
}

export default Tasks;