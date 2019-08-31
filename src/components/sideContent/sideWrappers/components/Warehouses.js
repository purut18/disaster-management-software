import React from 'react';

import './warehouses.css';
import WareHouseList from '../../../general/wareHouseList';

const Warehouses = props => {
        return(
            <div className="wareComp">
                <h3>Warehouses</h3>
                <WareHouseList />
            </div> 
        );
}

export default Warehouses;