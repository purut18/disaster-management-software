import React, { Component } from 'react';

import InfoTable from '../../../general/infoTable';
import './orgNews.css';

class OrgNews extends Component {
    render() {
        return(
            <div className={this.props.width === "1" ? 'StaffNewsComp width100pct' : 'StaffNewsComp' }>
                <h3>Information From Organisations</h3>
                <InfoTable />
            </div>
        );
    }
}

export default OrgNews;