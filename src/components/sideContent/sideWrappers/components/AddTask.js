import React, { Component } from 'react';
import { connect } from 'react-redux';

import './addTask.css';
import axios from 'axios';

class AddTask extends Component {

    state = {
        error: '',
        orgs: null,
        task: null,
        task_for: 'select',
        priority: null
    }

    componentDidMount() {
        axios.post('./php/getBroadcastOptions.php', {
            token: this.props.token
        })
            .then(response => {
                this.setState({
                    orgs: response.data
                });
            });
    }

    handleTaskChange = e => {
        this.setState({
            task: e.target.value
        });
    }

    handlePriorityChange = e => {
        this.setState({
            priority: e.target.value
        });
    }

    handleTaskForChange = e => {
        this.setState({
            task_for: e.target.value
        });
    }

    addTask = (event) => {
        event.preventDefault();
        axios.post('./php/addTask.php',{
            token: this.props.token,
            task: this.state.task,
            priority: this.state.priority,
            task_for: this.state.task_for
        }).then(response => {
            this.setState({
                error: 'Added Task!'
            });
        });
    }

    render() {
        return(
            <div className="addTaskComp">
                <h3>Add Task</h3>
                <form onSubmit={this.addTask}>
                    {this.state.error === "" ? null : <p className="errorMsg">{this.state.error}</p>}
                    <label>Task: </label>
                    <br />
                    <input type="text" name="task" maxLength="500" value={this.state.task} placeholder="Eg. Send Food Packets to Jaipur" onChange={this.handleTaskChange} />
                    <br />
                    <label>Task For: </label>
                    <br />
                    <select name="taskFor" value={this.state.taskFor} onChange={this.handleTaskForChange}>
                        <option value="select">Select One</option>
                        {this.state.orgs === null ? null : Object.values(this.state.orgs).map(thisOrg => {
                            return(
                                <option value={thisOrg.name} key={thisOrg.id}>{thisOrg.name}</option>
                            );
                        })}
                    </select>
                    <br />
                    <label>Priority:</label>
                    <br />
                    <select name="priority" value={this.state.priority} onChange={this.handlePriorityChange}>
                        <option value="High">High</option>
                        <option value="Medium">Medium</option>
                        <option value="Low">Low</option>
                    </select>
                    <br />
                    <input type="submit" value="Add Task" />
                </form>
            </div> 
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    };
}

export default connect(mapStateToProps)(AddTask);