import React from 'react';
import Warehouses from './components/Warehouses';
import Stock from './components/Stock';

const Resources = props => {
    return(
        <div className="dashboardComp">
            <Stock />
            <Warehouses />
        </div>
    );
}

export default Resources;