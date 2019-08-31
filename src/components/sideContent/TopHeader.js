import React, { Component } from 'react';
import { withRouter } from 'react-router-dom';
import { connect } from 'react-redux';
import * as actions from '../../store/actions/auth';

import '../../containers/sideContent.css';

class TopHeader extends Component {

    beginLogout = e => {
        e.preventDefault();
        this.props.handleLogout();
    }

    render() {
        return(
            <div className="topHeader">
                <div className="titleDiv">{this.props.location.pathname.slice(1) === "" ? "Dashboard" : this.props.location.pathname.slice(1)}</div>
                <div className="topMenu">
                    <li><button onClick={this.beginLogout}><i className="fa fa-user" aria-hidden="true"></i>Logout</button></li>    
                </div>
            </div>
        );
    }
}

const mapDispatchToProps = dispatch => {
    return {
        handleLogout: () => dispatch(actions.logout())
    };
}

export default connect(null, mapDispatchToProps)(withRouter(TopHeader));