import React from 'react';

import './stock.css';
import StockList from '../../../general/stockList';

const Stock = props => {
    return(
        <div className="stockComp">
            <h3>Stock</h3>
            <StockList />
        </div>
    );
}

export default Stock;