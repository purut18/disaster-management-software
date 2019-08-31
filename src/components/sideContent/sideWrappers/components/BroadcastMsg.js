import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

import './broadcastmsg.css';

class BroadcastMsg extends Component {

    state = {
        message: '',
        location: '',
        infoTo: 'select',
        orgNames: null,
        error: ''
    }

    componentDidMount() {
        axios.post('./php/getBroadcastOptions.php', {
            token: this.props.token
        })
            .then(response => {
                console.log(response);
                this.setState({
                    orgNames: response.data
                });
            });
    }

    handleMsgChange = (e) => {
        this.setState({message: e.target.value});
    }

    handleLocChange = (e) => {
        this.setState({location: e.target.value});
    }

    handleToChange = (e) => {
        this.setState({infoTo: e.target.value});
    }

    broadcastSubmit = (event) => {
        event.preventDefault();
        if(this.state.infoTo === "select") {
            this.setState({
                error: 'Please select a valid organisation to send the message to.'
            });
        } else {
            axios.post('./php/broadcastMsg.php', {
                msg: this.state.message,
                loc: this.state.location,
                to: this.state.infoTo
            }).then(() => {
                this.setState({
                    error: "The message has been successfully broadcasted."
                });
            });
        }      
    }

    render() {
        return(
            <div className="broadcastComp">
                <h3>Broadcast Information</h3>
                <form onSubmit={this.broadcastSubmit}>
                    {this.state.error === "" ? null : <p className="errorMsg">{this.state.error}</p>}
                    <label>Message: </label>
                    <br />
                    <input type="text" maxLength="500" value={this.state.message} placeholder="Eg. Fast Winds Expected in Coastal Areas" onChange={this.handleMsgChange} />
                    <br />
                    <label>Location: </label>
                    <br />
                    <input type="text" maxLength="500" value={this.state.location} placeholder="Eg. Gujarat" onChange={this.handleLocChange} />
                    <br />
                    <label>Send Information To:</label>
                    <br />
                    <select name="infoTo" value={this.state.infoTo} onChange={this.handleToChange}>
                        <option value="select">Select One</option>
                        {this.state.orgNames === null ? null : Object.values(this.state.orgNames).map(thisOrg => {
                            return(
                                <option value={thisOrg.id} key={thisOrg.id}>{thisOrg.name}</option>
                            );
                        })}
                    </select>
                    <br />
                    <input type="submit" value="Broadcast" />
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

export default connect(mapStateToProps)(BroadcastMsg);