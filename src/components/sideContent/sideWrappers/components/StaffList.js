import React, { Component } from 'react';

import './staffList.css';
import Staffs from '../../../general/staffs';

class StaffList extends Component {
    render() {
        return(
            <div className="staffComp">
                <h3>All Staff</h3>
                <Staffs />
            </div> 
        );
    }
}

export default StaffList;