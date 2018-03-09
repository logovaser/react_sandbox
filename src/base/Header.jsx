import React from 'react';
import {
    Link
} from 'react-router-dom'

import loadingSpinner from '../_res/Gear-0.5s-30px.svg'

const Header = () => {
    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <a className="navbar-brand" href="#">fLuent</a>

            <img alt="" src={loadingSpinner}/>
        </nav>
    );
};

export default Header;
