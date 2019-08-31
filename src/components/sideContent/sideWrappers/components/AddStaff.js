import React, { Component } from 'react';
import { connect } from 'react-redux';
import axios from 'axios';

class AddStaff extends Component {

    state = {
        name: '',
        position: '',
        email: '',
        error: null
    }

    getData = (event) => {
        event.preventDefault();
        axios.post('./php/addStaff.php', {
            token: this.props.token,
            name: this.state.name,
            position: this.state.position,
            email: this.state.email
        }).then(response => {
            this.setState({
                error: 'Added Staff Successfully.'
            });
        });
    }

    handleNameChange = e => {
        this.setState({
            name: e.target.value
        });
    }

    handlePositionChange = e => {
        this.setState({
            position: e.target.value
        });
    }

    handleEmailChange = e => {
        this.setState({
            email: e.target.value
        });
    }

    render() {
        return(
            <div className="addStaffComp">
                <h3>Add Staff Member</h3>
                <form onSubmit={this.getData}>
                {this.state.error === "" ? null : <p className="errorMsg">{this.state.error}</p>}
                    <label>Full Name:</label>
                    <br />
                    <input type="text" maxLength="300" value={this.state.name} placeholder="Eg. Puru Thakkar" onChange={this.handleNameChange} />
                    <br />
                    <label>Position:</label>
                    <br />
                    <input type="text" maxLength="300" value={this.state.position} placeholder="Eg. HOD Software Dept." onChange={this.handlePositionChange} />
                    <br />
                    <label>Email:</label>
                    <br />
                    <input type="email" maxLength="500" value={this.state.email} placeholder="Eg. puru@example.com" onChange={this.handleEmailChange} />
                    <br />
                    <input type="submit" value="Add" />
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

export default connect(mapStateToProps)(AddStaff);