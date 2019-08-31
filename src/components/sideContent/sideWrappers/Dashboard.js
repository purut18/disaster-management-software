import React from 'react';

import Tasks from '../../sideContent/sideWrappers/components/Tasks';
import BroadcastMsg from '../../sideContent/sideWrappers/components/BroadcastMsg';
import OrgNews from '../../sideContent/sideWrappers/components/OrgNews';

const Dashboard = props => {
    return(
        <div className="dashboardComp">
            <Tasks numberTasks="3" loadMore="0" />
            <BroadcastMsg />
            <OrgNews width='0' />
        </div>
    );
}

export default Dashboard;