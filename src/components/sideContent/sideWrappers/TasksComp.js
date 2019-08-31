import React from 'react';

import Tasks from '../../sideContent/sideWrappers/components/Tasks';
import AddTask from './components/AddTask';

const TasksComp = props => {
    return(
        <div className="dashboardComp">
            <Tasks numberTasks="5" loadMore="1" />
            <AddTask />
        </div>
    );
}

export default TasksComp;