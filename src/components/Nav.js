import React from "react";
import {NavLink} from "react-router-dom";

// Component renders navigation links
const Nav = () => {
    return (
        <nav className="main-nav">
            <ul>
            <li><NavLink exact to="/cats">Cats</NavLink></li>
            <li><NavLink exact to="/dogs">Dogs</NavLink></li>
            <li><NavLink exact to="/Bo%20Burnham">Bo</NavLink></li>
            </ul>
        </nav>
    );
}

export default Nav;