import React from 'react';

import loadingSpinner from '../_res/Gear-0.5s-30px.svg'
import {connect} from "react-redux";

const mapStateToProps = state => ({
    languages: state.languages,
});

const Header = ({languages}) => {

    let showSpinner = languages.isFetching;

    return (
        <nav className="navbar navbar-expand-lg navbar-light bg-light mb-3">
            <a className="navbar-brand" href="javascript:void(0);">fLuent</a>

            {showSpinner && <img alt="" src={loadingSpinner}/>}
        </nav>
    );
};

export default connect(mapStateToProps)(Header);
