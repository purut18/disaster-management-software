import React from 'react';
import { withRouter, NavLink } from 'react-router-dom'


const Menu = props => {

    return (
        <ul className={props.classes}>
            <NavLink to={'/'} activeClassName="activeNav" exact>
                <li><i className="fa fa-dashboard" aria-hidden="true"></i> {props.headOut ? "Dashboard" : null}</li>    
            </NavLink> 
            <NavLink to={'/organisations'} activeClassName="activeNav" exact>
                <li><i className="fa fa-sitemap" aria-hidden="true"></i> {props.headOut ? "Organisations" : null}</li>
            </NavLink>
            <NavLink to={'/staff'} activeClassName="activeNav" exact>
                <li><i className="fa fa-user" aria-hidden="true"></i> {props.headOut ? "Staff" : null}</li>
            </NavLink>
            <NavLink to={'/tasks'} activeClassName="activeNav" exact>
                <li><i className="fa fa-thumb-tack" aria-hidden="true"></i> {props.headOut ? "Tasks" : null}</li>
            </NavLink>
            <NavLink to={'/resources'} activeClassName="activeNav" exact>
                <li><i className="fa fa-wrench" aria-hidden="true"></i> {props.headOut ? "Resources" : null}</li>
            </NavLink>
        </ul>
    );
}

export default Menu;