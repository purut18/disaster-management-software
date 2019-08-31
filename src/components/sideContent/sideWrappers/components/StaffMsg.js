import React, { Component } from 'react';
import MsgList from '../../../general/msgList';

class StaffMsg extends Component {
    render() {
        return(
            <div className="staffMsg">
                <h3>Messages you Sent</h3>
                <MsgList  />
            </div>
        );
    }
}

export default StaffMsg;