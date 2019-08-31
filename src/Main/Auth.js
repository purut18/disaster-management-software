import React, { Component } from 'react';
import { connect } from 'react-redux';

import * as actions from '../store/actions/auth';

import './Auth.css';

class Auth extends Component {

    state = {
        email: '',
        pass: ''
    }

    handleEmailChange = e => {
        this.setState({
            email: e.target.value
        });
    }

    handlePassChange = e => {
        this.setState({
            pass: e.target.value
        });
    }

    submitHandler = event => {
        event.preventDefault();
        this.props.onAuth(this.state.email, this.state.pass);
    }

    render() {

        let loadingPara = <p style={{color: "red"}}>Loading...</p>;

        let errorMessage = null;

        if(this.props.error !== null) {
            errorMessage = (
                <p style={{color: "red"}}>{this.props.error}</p>
            );
        }

        return(
            <div className="auth">
                <form onSubmit={this.submitHandler}>
                    <h3>Login</h3>
                    {this.props.loading ? loadingPara : null}
                    {errorMessage}
                    <label>Email:</label>
                    <br />
                    <input type="email" value={this.state.email} placeholder="Eg. puru@example.com" onChange={this.handleEmailChange} />
                    <br />
                    <label>Password:</label>
                    <br />
                    <input type="password" value={this.state.pass}  onChange={this.handlePassChange} placeholder="Eg. p@$$w0rd" />
                    <br />
                    <input type="submit" value="Login" />
                </form>
            </div>
        );
    }
}

const mapStateToProps = state => {
    return {
        loading: state.loading,
        error: state.error
    };
};


const mapDispatchToProps = dispatch => {
    return {
        onAuth: (email, password) => dispatch(actions.auth(email, password))
    };
};

export default connect(mapStateToProps, mapDispatchToProps)(Auth);