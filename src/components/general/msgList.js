import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';
import { resolve } from 'path';

class MsgList extends Component {

    state = {
        msgs: null,
        error: ''
    }

    componentDidMount() {
        axios.post('./php/getStaffMsgs.php', {
            token: this.props.token
        }).then(response => {
            if(typeof response.data === 'string' && response.data.trim() === 'nores') {
                this.setState({
                    error: 'No messages to show.'
                });
            } else {
                this.setState({
                    msgs: response.data
                });
            }
        })
    }

    render() {
        return(
            <div className="msgList">
                <table>
                    <tbody>
                        <tr>
                            <th>Message ID</th>
                            <th>Date</th>
                            <th>Message</th>
                            <th>To</th>
                        </tr>
                        {this.state.msgs === null ? "Loading..." : Object.values(this.state.msgs).map(thisMsg => {
                            return(
                                <tr key={thisMsg.id}>
                                    <td>{thisMsg.id}</td>
                                    <td>{thisMsg.date}</td>
                                    <td>{thisMsg.message}</td>
                                    <td>{thisMsg.to}</td>
                                </tr>
                            );
                        })}
                    </tbody>
                </table>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        token: state.token
    };
}

export default connect(mapStateToProps)(MsgList);