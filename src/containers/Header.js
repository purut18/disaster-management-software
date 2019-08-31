import React, { Component } from 'react';

import './Header.css';
import Logos from '../components/header/Logos';
import Menu from '../components/header/Menu';

class Header extends Component {

    state = {
        headerOut: false
    };

    bigHeadChnager = () => {
        this.setState((prevState, props) => {
            return {headerOut: !prevState.headerOut}
        });
    }

    render() {
        return(
            <header className={this.state.headerOut ? "bigWidth" : "smallWidth" }>
                <Logos headOut={this.state.headerOut} clicked={this.bigHeadChnager} />
                <Menu headOut={this.state.headerOut} classes={this.state.headerOut ? "menu" : "menu smallmenu" } />
            </header>
        );
    };
    
}

export default Header;