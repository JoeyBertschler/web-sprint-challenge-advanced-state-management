import React from "react";
import ReactDOM from "react-dom";
import {createStore, applyMiddleware} from "redux"
//store holds all app states, middleware: for logging, crash reporting and other stuff
//i.e. middleware necessary for thunk and logger
import {Provider} from 'react-redux'
//provider in turn holds store for all app
import logger from 'redux-logger'
// log actions
import thunk from 'redux-thunk'
// "Redux Thunk middleware allows you to write action creators that return a function instead of an action. 
// The thunk can be used to delay the dispatch of an action, or to dispatch only if a certain condition is met. 
// The inner function receives the store methods dispatch and getState as parameters."
import "./index.css";
import {reducer} from './reducers/index' //{} not necessary if default but I like
import App from "./App";

const { worker } = require('./mocks/browser');
worker.start();

//stuff here
const store = createStore(reducer, applyMiddleware(thunk, logger))

const rootElement = document.getElementById("root");

ReactDOM.render(
    <Provider>
    <App />
    <p>wrap app with provider</p>
    </Provider>, 
    rootElement
);

//Task List:
//1. Add in all necessary components and libary methods.
//2. Create a store that includes thunk and logger middleware support.
//3. Wrap the App component in a react-redux Provider element.