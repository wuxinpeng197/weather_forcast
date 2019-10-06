import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import { Provider } from 'react-redux'
import {createStore, applyMiddleware, combineReducers} from 'redux'
import thunk from 'redux-thunk';
import { BrowserRouter } from 'react-router-dom';
import productsReducer from './reducer/Weather'
import Router from './Router';
import * as serviceWorker from './serviceWorker';


const app = (
    <BrowserRouter>
        <Router />
    </BrowserRouter>
);
const store = createStore(productsReducer,applyMiddleware(thunk));

ReactDOM.render(<Provider store={store}>{app}</Provider>, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: https://bit.ly/CRA-PWA
serviceWorker.unregister();
