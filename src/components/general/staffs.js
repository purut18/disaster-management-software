import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class Staffs extends Component {

    state = {
        staff: null,
        error: 'Loading...'
    }

    componentDidMount() {
        axios.post('./php/getStaffs.php', {
            token: this.props.token
        }).then(response => {
            if(typeof response.data === 'string' && response.data.trim() === 'nores') {
                this.setState({
                    staff: null,
                    error: 'No staff to show.'
                });
            } else {
                this.setState({staff: response.data});
            }
        });
    }

    render() {
        return(
            <div className="staffsList">
                <table>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Position</th>
                            <th>Email</th>
                        </tr>
                        {this.state.staff === null ? this.state.error : Object.values(this.state.staff).map(oneStaff => {
                            return(
                                <tr key={oneStaff.id}>
                                    <td>{oneStaff.id}</td>
                                    <td>{oneStaff.name}</td>
                                    <td>{oneStaff.position}</td>
                                    <td>{oneStaff.email}</td>
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

export default connect(mapStateToProps)(Staffs);