/** @format */
import React, { Component } from 'react';
import {AppRegistry} from 'react-native';
import {name as appName} from './app.json';
//Redux
import { createStore, applyMiddleware} from 'redux';
import { Provider } from 'react-redux';

//saga
import createSagaMiddleware from 'redux-saga';
const sagaMiddleware = createSagaMiddleware();

let store = createStore(allReducers, applyMiddleware(sagaMiddleware));
const App = () => {
    <Provider store={store}>
        
    </Provider>
};

AppRegistry.registerComponent(appName, () => App);
