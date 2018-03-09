import React, {Component} from 'react';
import {
    BrowserRouter as Router,
    Route,
} from 'react-router-dom'

import List from "../components/List";
import Form from "../components/Form";
import Home from "../pages/Home";
import Header from "./Header";
import Footer from "./Footer";
import LanguagePick from "../pages/LanguagePick";

class App extends Component {
    render() {
        return (
            <Router>
                <div className="d-flex flex-column" style={{height: '100%'}}>
                    <Header/>

                    <div className="col">
                        <div className="container">
                            <Route exact path="/" component={Home}/>
                            <Route path="/languages" component={LanguagePick}/>
                        </div>
                    </div>

                    <div className="container">
                        <Footer/>
                    </div>
                </div>
            </Router>
        );
    }
}

export default App;
