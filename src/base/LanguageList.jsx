import React, {Component} from 'react';
import {connect} from 'react-redux';
import PropTypes from 'prop-types';

import {requestLanguages, setSelected} from '../redux/languages'

const styles = {
    listItem: {
        cursor: 'pointer',
        userSelect: 'none',
    }
};

const formatNumber = n => n.toString().replace(/\B(?=(\d{3})+(?!\d))/g, ",");

class LanguageList extends Component {

    componentDidMount = () => {
        this.refreshLanguages();
    };

    refreshLanguages = () => {
        const {dispatch} = this.props;
        dispatch(requestLanguages());
    };

    selectLanguage = (item) => {
        const {dispatch} = this.props;
        dispatch(setSelected(item, !item.selected));
    };

    render() {
        let {languages} = this.props;

        return (
            <div>
                <button onClick={this.refreshLanguages}>refresh</button>
                <div className="list-group">
                    {languages.data.map(item => (
                        <label className="list-group-item list-group-item-action px-2"
                               htmlFor={'customControlValidation' + item.id}
                               key={item.id}
                               style={styles.listItem}>
                            <div className="row no-gutters align-items-center">
                                <div className="custom-control custom-checkbox">
                                    <input type="checkbox" className="custom-control-input"
                                           id={'customControlValidation' + item.id}
                                           defaultChecked={item.selected}
                                           onChange={() => this.selectLanguage(item)}
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
            </div>
        );
    }
}

LanguageList.propTypes = {};

const mapStateToProps = state => ({
    languages: state.languages,
});

export default connect(mapStateToProps)(LanguageList);
