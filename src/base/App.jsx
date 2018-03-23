import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

import Home from "../pages/Home";
import Header from "./Header";
import Footer from "./Footer";
import LanguagePick from "../pages/LanguagePick";
import {requestLanguages} from "../redux/languages";
import {connect} from "react-redux";
import PartnerSearch from "../pages/PartnerSearch";
import Chat from "../pages/Chat";

class App extends Component {

    componentDidMount = () => {
        const {dispatch} = this.props;
        dispatch(requestLanguages());
    };

    render() {
        return (
            <Router>
                <div className="d-flex flex-column" style={{height: '100%'}}>
                    <Header/>

                    <div className="col">
                        <Route exact path="/" component={Home}/>
                        <Route path="/languages" component={LanguagePick}/>
                        <Route path="/partner_search" component={PartnerSearch}/>
                        <Route path="/chat/:id" component={Chat}/>
                    </div>

                    <div className="container">
                        <Footer/>
                    </div>
                </div>
            </Router>
        );
    }
}

const mapStateToProps = state => ({
    languages: state.languages,
});

export default connect(mapStateToProps)(App);
