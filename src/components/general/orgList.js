import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class OrgList extends Component {

    state = {
        error: '',
        orgs: null
    }

    componentDidMount() {
        axios.post('./php/getOrgs.php', {
            token: this.props.token
        })
            .then(response => {
                if(typeof response.data === 'string' && response.data.trim() === 'nores') {
                    this.setState({
                        error: 'No more tasks to show.'
                    });
                } else {
                    this.setState({orgs: response.data});
                }
            });
    }

    render() {
        return(
            <div className="orgList">
                <table>
                    {this.state.error !== '' ? <p className="errorMsg">{this.state.error}</p> : null}
                    <tbody>
                        <tr>
                            <th>Organisation Name</th>
                            <th>Location</th>
                            <th>Email</th>
                        </tr>
                        {this.state.orgs === null ? "Loading..." : Object.values(this.state.orgs).map(thisOrg => {
                            return(
                                <tr key={thisOrg.id}>
                                    <td>{thisOrg.name}</td>
                                    <td>{thisOrg.location}</td>
                                    <td>{thisOrg.email}</td>
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

export default connect(mapStateToProps)(OrgList);