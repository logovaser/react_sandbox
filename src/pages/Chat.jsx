import React, {Component} from 'react';
import {connect} from 'react-redux';

class Chat extends Component {
    render() {
        return (
            <div>
                {JSON.stringify(this.props.match)}
            </div>
        );
    }
}

function mapStateToProps(state) {
    return {};
}

export default connect(
    mapStateToProps,
)(Chat);
