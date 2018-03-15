import React from 'react';
import {NavLink} from "react-router-dom";

const styles = {
    nav: {
        margin: 10,
    }
};

const Footer = () => {
    return (
        <ul className="nav nav-pills nav-fill" style={styles.nav}>
            <li className="nav-item">
                <NavLink to="/" exact={true}
                         className="nav-link"
                         activeClassName="active">Home</NavLink>
            </li>
            <li className="nav-item">
                <NavLink to="/languages"
                         className="nav-link"
                         activeClassName="active">Lang</NavLink>
            </li>
            <li className="nav-item">
                <a className="nav-link" href="javascript:void(0);">Link</a>
            </li>
        </ul>
    );
};

export default Footer;
