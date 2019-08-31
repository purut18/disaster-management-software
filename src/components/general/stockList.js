import React, { Component } from 'react';
import { connect } from 'react-redux';

class StockList extends Component {

    state = {
        items: {
            "1": {
                id: 1,
                item: 'Rice',
                quantity: '500',
                unit: 'Kg',
                warehouse: 'Gujarat Food Storage'
            }
        }
    }

    render() {
        return(
            <div className="stockList">
                <table>
                    <tbody>
                        <tr>
                            <th>Stock ID</th>
                            <th>Item</th>
                            <th>Quantity</th>
                            <th>Warehouse</th>
                        </tr>
                        {this.state.items === null ? "Loading..." : Object.values(this.state.items).map(thisItem => {
                            return(
                                <tr key={thisItem.id}>
                                    <td>{thisItem.id}</td>
                                    <td>{thisItem.item}</td>
                                    <td>{thisItem.quantity} {thisItem.unit}</td>
                                    <td>{thisItem.warehouse}</td>
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

export default connect(mapStateToProps)(StockList);