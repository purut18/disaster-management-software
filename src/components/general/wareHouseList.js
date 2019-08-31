import React, { Component } from 'react';
import { connect } from 'react-redux';

class WareHouseList extends Component {

    state = {
        warehouses: {
            "1": {
                id: 1,
                name: 'Gujarat Food Storage',
                location: 'Gujarat',
                for_what: 'Ready to Eat Food Packets',
                email: 'food@gujarat.com'
            }
        }
    }

    render() {
        return(
            <div className="wareList">
                <table>
                    <tbody>
                        <tr>
                            <th>ID</th>
                            <th>Name</th>
                            <th>Location</th>
                            <th>Used to Store</th>
                            <th>Email</th>
                        </tr>
                        {this.state.warehouses === null ? "Loading..." : Object.values(this.state.warehouses).map(thisHouse => {
                            return(
                                <tr key={thisHouse.id}>
                                    <td>{thisHouse.id}</td>
                                    <td>{thisHouse.name}</td>
                                    <td>{thisHouse.location}</td>
                                    <td>{thisHouse.for_what}</td>
                                    <td>{thisHouse.email}</td>
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

export default connect(mapStateToProps)(WareHouseList);