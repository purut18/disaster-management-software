import React from 'react';

import OrgList from '../../../general/orgList';
import './orgTable.css';

const OrgTable = props => {
    return(
          <div className="OrgTable">
                <h3>All Organisations</h3>
                <OrgList />
     </div>
    );
}

export default OrgTable; 
