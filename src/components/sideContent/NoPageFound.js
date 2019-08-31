import React from 'react';
import { Link } from 'react-router-dom';

import '../../containers/sideContent.css';

const NoPageFound = props => {
    return(
        <div className="dashboardComp"> 
            <div className="Comp404">
                <h3>404: Page Not Found</h3>
                <p>It seems like the page you're looking for does not exist. You can head back to <Link to="../">Dashboard</Link></p>
                <p>If you think this is an error from our side, you can email us on <a href="mailto:puru@incury.org">puru@incury.org</a></p>
            </div>
        </div>
    );
}

export default NoPageFound;