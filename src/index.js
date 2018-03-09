import React from 'react';
import ReactDOM from 'react-dom';
import {Provider} from 'react-redux'
import MuiThemeProvider from 'material-ui/styles/MuiThemeProvider';

import store from './redux/store/index'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './base/App.jsx';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(
    <MuiThemeProvider>
        <Provider store={store}>
            <App/>
        </Provider>
    </MuiThemeProvider>,
    document.getElementById('root')
);
registerServiceWorker();
