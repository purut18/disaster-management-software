import React from 'react';
import { NavLink } from 'react-router-dom';

import './viewAllBtn.css';

const viewAllBtn = props => {
    return(
       <div className="viewAllBtn">
           <NavLink to={"/"+props.whereTo} exact> View More </NavLink>
       </div>
    );
}

export default viewAllBtn;