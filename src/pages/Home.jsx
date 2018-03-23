import React, {Component} from 'react';
import InstantChat from "../components/InstantChat";
import {connect} from "react-redux";
import {formatNumber} from "../helpers";

class Home extends Component {

    render() {
        let {languages} = this.props;

        return <div className='row'>
            {languages.data.filter(lang => lang.selected).map(lang => (
                <div className='col-xs-12 col-sm-6 col-md-4'
                     key={lang.id}>
                    <InstantChat
                        name={lang.name}
                        description={`${formatNumber(lang.speakerCount)} speakers`}/>
                </div>
            ))}
        </div>;
    }
}

function mapStateToProps(state) {
    return {
        languages: state.languages,
    }
}

export default connect(
    mapStateToProps,
)(Home);
