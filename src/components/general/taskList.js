import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import ProgressBar from './progressBar';
import MarkDoneSelect from './markDoneSelect';
import ViewAllBtn from '../general/viewAllBtn';

import './nextprevdiv.css';

class TaskList extends Component {

    state = {
        // tasks: null,
        startFrom: 0,
        error: '',
        page: 0,
        tasks:  null
    }

    getData = (startNo = 0, pageMove = "next") => {
        axios.post('./php/getTasks.php', {
                        noOfTasks: this.props.numberTasks,
                        startFrom: startNo,
                        token: this.props.token
                    }
            ).then(response => {
                if(typeof response.data === 'string' && response.data.trim() === 'nores') {
                    this.setState({
                        error: 'No more tasks to show.'
                    });
                } else {
                    let updatePageWith = 0
                    if(pageMove === "next") {
                        updatePageWith = 1;
                    } else if(pageMove === "prev") {
                        updatePageWith = -1;
                    }
                    this.setState((prevState, props) => ({
                        tasks: response.data,
                        startFrom: startNo + parseInt(this.props.numberTasks),
                        error: '',
                        page: parseInt(prevState.page) + parseInt(updatePageWith)
                        // numberTasks: parseInt(prevState.numberTasks) + parseInt(this.props.numberTasks)
                    }));
                }
            });

    }

    componentDidMount() {
        setTimeout(this.getData(), 10000);
    }

    changeProgress = (event, id) => {
        const progressIs = event.target.value;
        axios.post('./php/changeProgress.php', 
                    {
                        task_id: id,
                        newProgress: progressIs
                    }
        ).then(response => {
                this.state.tasks[id].progress = progressIs;
                this.forceUpdate();
        });
    }

    loadMoreTasks = (startFrom, pageMove) => {
        if(startFrom >= 0) {
            this.getData(startFrom, pageMove);
        } else {
            this.setState({
                error: 'These are the latest tasks.'
            });
        }
    }

    render() {
        return(
            <div className="taskList">
                <table>
                    {this.state.error !== '' ? <p className="errorMsg">{this.state.error}</p> : null}
                    <tbody>
                        <tr>
                            <th>Task</th>
                            <th>Task Given By</th>
                            <th>Task For</th>
                            <th>Progress</th>
                            <th>Priority</th>
                            <th>Task Status</th>
                        </tr>
                        {this.state.tasks === null ? "Loading..." : Object.values(this.state.tasks).map(thisTask => {
                            return(
                                <tr key={thisTask.id}>
                                    <td width="23%">{thisTask.task}</td>
                                    <td width="15%">{thisTask.byDept}</td>
                                    <td width="15%">{thisTask.dept}</td>
                                    <td width="20%"><ProgressBar progress={thisTask.progress} /></td>
                                    <td width="15%"><i className={"fa fa-circle " + thisTask.priority} aria-hidden="true"></i> {thisTask.priority} Priority</td>
                                    <td width="7%"><MarkDoneSelect 
                                                        progress={thisTask.progress} 
                                                        key={thisTask.id - 1} 
                                                        changed={(event) => this.changeProgress(event, thisTask.id)} />
                                    </td>
                                </tr>
                            );
                        })}
                       
                        {/* <tr>
                            <td>Make Design</td>
                            <td><ProgressBar progress="done" /></td>
                            <td><i class="fa fa-circle" aria-hidden="true"></i> Low Priority</td>
                            <td>Mark Done</td>
                        </tr>
                        <tr>
                            <td>Make App</td>
                            <td><ProgressBar progress="todo" /></td>
                            <td><i class="fa fa-circle" aria-hidden="true"></i> Medium Priority</td>
                            <td>Mark Done</td>
                        </tr>
                        <tr>
                            <td>Send Food Packets and Water to Vadodara</td>
                            <td><ProgressBar progress="doing" /></td>
                            <td><i class="fa fa-circle" aria-hidden="true"></i> Medium Priority</td>
                            <td>Mark Done</td>
                        </tr> */}
                    </tbody>
                </table>
                {this.props.loadMore === "1" 
                ? <div className="nextPrevDiv">
                    <p>Page {this.state.page}</p>
                    <button onClick={() => this.loadMoreTasks(parseInt(this.state.startFrom) - 10, "prev")}> Previous Page</button>
                    <button onClick={() => this.loadMoreTasks(this.state.startFrom, "next")}> Next Page</button>
                </div> 
                : <ViewAllBtn whereTo="tasks" />}
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    };
}

export default connect(mapStateToProps)(TaskList);