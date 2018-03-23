import React, {Component} from 'react';
import {connect} from 'react-redux';
import {Link, Redirect} from "react-router-dom";

import loadingSpinner from '../_res/Gear-0.5s-30px.svg'

class PartnerSearch extends Component {

    state = {};

    componentDidMount = () => {
        setTimeout(() => this.setState({shouldRedirect: true}), 3000);
    };

    render() {
        const {shouldRedirect} = this.state;

        return (
            <div style={{
                display: 'flex',
                justifyContent: 'center',
                alignItems: 'center',
                height: '100%',
            }}>

                <img alt="" src={loadingSpinner}
                     style={{
                         width: 200,
                         height: 200,
                     }}/>

                {shouldRedirect && <Redirect to='/chat/1'/>}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(PartnerSearch);
