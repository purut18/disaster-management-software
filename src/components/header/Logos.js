import React from 'react';

import cury from '../../assets/imgs/cury.png';

const Logos = props => {
    return (
        <div className="logos" onClick={props.clicked}>
            {
                props.headOut 
                ? 
                    <div><img src={cury} alt="Incury Logo Cury" /> <span>incury</span></div> 
                : 
                    <div><i className="fa fa-bars" aria-hidden="true"></i></div> 
            }
        </div>
    );
}

export default Logos;