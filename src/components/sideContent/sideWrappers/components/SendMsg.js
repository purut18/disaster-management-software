import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class SendMsg extends Component {

    state = {
        message: '',
        staffName: null,
        messageTo: 'select',
        error: ''
    }

    componentDidMount() {
        axios.post('./php/getStaffs.php', {
            token: this.props.token
        }).then(response => {
            if(typeof response.data === 'string' && response.data.trim() === 'nores') {
                this.setState({
                    staffName: null,
                    error: 'No staff to send message to. Please add staff.'
                });
            } else {
                this.setState({staffName: response.data});
            }
        });
    }

    handleMessageChange = e => {
        this.setState({
            message: e.target.value
        });
    }

    handleStaffChange = e => {
        this.setState({
            messageTo: e.target.value
        });
    }

    sendData = event => {
        event.preventDefault();
        if(this.state.messageTo === "select" || this.state.messageTo === "" || this.state.messageTo === null) {
            this.setState({
                error: 'Please Select a staff to send the message to'
            });
        } else {
            axios.post('./php/sendMsg.php', {
                token: this.props.token,
                msg: this.state.message,
                msgTo: this.state.messageTo
            }).then(response => {
                this.setState({
                    error: 'Message sent!'
                });
            });
        }
    }

    render() {
        return(
            <div className="sendMsg">
                <h3>Send Message</h3>
                <form onSubmit={this.sendData}>
                {this.state.error === '' ? null : <p className="errorMsg">{this.state.error}</p>}
                    <label>Message:</label>
                    <br />
                    <input type="text" maxLength="300" value={this.state.message} placeholder="Eg. Reply to Message ID - 2: Files submitted." onChange={this.handleMessageChange} />
                    <br />
                    <label>Message To:</label>
                    <br />
                    <select onChange={this.handleStaffChange}>
                        <option value="select">Select One</option>
                        {this.state.staffName === null ? null : Object.values(this.state.staffName).map(thisStaff => {
                            return(
                                <option key={thisStaff.id} value={thisStaff.id}>{thisStaff.name}</option>
                            );
                        })}
                    </select>
                    <br />
                    <input type="submit" value="Send" />
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

export default connect(mapStateToProps)(SendMsg);