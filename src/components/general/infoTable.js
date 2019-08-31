import React, { Component } from 'react';
import axios from 'axios';
import { connect } from 'react-redux';

class InfoTable extends Component {

    state = {
        error: '',
        infos: null
    }

    componentDidMount() {
        axios.post('./php/getInfo.php', {
            user_id: this.props.userId,
            token: this.props.token
        }).then(response => {
            if(typeof response.data === 'string' && response.data.trim() === 'nores') {
                this.setState({error: 'No Informations from Organisations Found'});
            } else {
                this.setState({infos: response.data});
            }
            
        });
    }

    render() {
        return(
            <div className="infoList">
                <table>
                    {this.state.error !== '' ? <p className="errorMsg">{this.state.error}</p> : null}
                    <tbody>
                        <tr>
                            <th>Information</th>
                            <th>Info By</th>
                            <th>Location</th>
                        </tr>
                        {this.state.infos === null ? "Loading..." : Object.values(this.state.infos).map(thisInfo => {
                            return(
                                <tr key={thisInfo.id}>
                                    <td width="60%">{thisInfo.info}</td>
                                    <td width="20%">{thisInfo.by}</td>
                                    <td width="20%">{thisInfo.location}</td>
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

export default connect(mapStateToProps)(InfoTable);