import React, {Component} from 'react';
import PropTypes from 'prop-types';
import uuid from "uuid";

const languages = [
    {
        id: uuid.v1(),
        name: 'English',
        src: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/1x1/gb.svg',
        speakerCount: 4234,
    },
    {
        id: uuid.v1(),
        name: 'Ukrainian',
        src: 'https://cdnjs.cloudflare.com/ajax/libs/flag-icon-css/3.1.0/flags/1x1/ua.svg',
        speakerCount: 1004,
    },
];

const styles = {
    listItem: {
        cursor: 'pointer',
        userSelect: 'none',
    }
};

const formatNumber = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

class LanguageList extends Component {
    render() {
        return (
            <div className="list-group">
                {languages.map(item => (
                    <label className="list-group-item list-group-item-action px-2"
                       htmlFor={'customControlValidation' + item.id}
                       key={item.id}
                    style={styles.listItem}>
                        <div className="row no-gutters align-items-center">
                            <div className="custom-control custom-checkbox">
                                <input type="checkbox" className="custom-control-input"
                                       id={'customControlValidation' + item.id}
                                       required/>
                                <div className="custom-control-label"/>
                            </div>
                            <img src={item.src} alt=""
                                 style={{maxWidth: 30, maxHeight: 30}}/>
                            <b className="col mx-3">{item.name}</b>
                            <small>{formatNumber(item.speakerCount)} speakers</small>
                        </div>
                    </label>
                ))}
            </div>
        );
    }
}

LanguageList.propTypes = {};

export default LanguageList;
