import React, {Component} from 'react';
import PropTypes from 'prop-types';
import LanguageList from "../base/LanguageList";

class LanguagePick extends Component {
    render() {
        return (
            <div>
                <LanguageList/>
            </div>
        );
    }
}

LanguagePick.propTypes = {};

export default LanguagePick;
