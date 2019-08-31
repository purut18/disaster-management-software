import React from 'react';

import OrgTable from './components/OrgTable';
import OrgNews from './components/OrgNews';

const Organisations = props => {
    return(
        <div className="dashboardComp">
            <OrgNews width='1' />
            <OrgTable />
        </div>
    );
}

export default Organisations;