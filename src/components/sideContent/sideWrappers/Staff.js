import React from 'react';

import StaffList from './components/StaffList';
import AddStaff from './components/AddStaff';
import StaffMsg from './components/StaffMsg';
import SendMsg from './components/SendMsg';

const Staff = props => {
    return(
        <div className="dashboardComp">
            <StaffMsg />
            <SendMsg />
            <StaffList />
            <AddStaff />
        </div>
    );
}

export default Staff;