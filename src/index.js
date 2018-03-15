import React from 'react';
import ReactDOM from 'react-dom';
import { combineReducers, createStore, applyMiddleware } from 'redux';
import {Provider} from 'react-redux'
import createSagaMiddleware from 'redux-saga'

import 'bootstrap/dist/css/bootstrap.min.css';
import './index.css'
import App from './base/App.jsx';
import registerServiceWorker from './registerServiceWorker';

import * as reducers from './redux';
import rootSaga from './sagas/index'

const rootReducer = combineReducers(reducers);
const sagaMiddleware = createSagaMiddleware();
const store = createStore(
    rootReducer,
    applyMiddleware(sagaMiddleware),
);
sagaMiddleware.run(rootSaga);

ReactDOM.render(
    <Provider store={store}>
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();
