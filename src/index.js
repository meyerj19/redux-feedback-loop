import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './components/App/App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, combineReducers, applyMiddleware } from 'redux';
import logger from 'redux-logger';
import { Provider } from 'react-redux';

const review = [];

const feedbackReducer = (state = '', action) => {

    if (action.type === 'GET_FEELING') {
        review.push(action.payload)
        console.log('review', review)
        //return state = action.payload;
        return [...state, action.payload];
    }
    else if (action.type === 'GET_UNDERSTANDING'){
        review.push(action.payload)
        return [...state, action.payload];
    }
    else if (action.type === 'GET_SUPPORT'){
        review.push(action.payload)
        console.log('support', review)
        return [...state, action.payload];
    }

    return state;
}


const reduxStore = createStore(
    combineReducers({
        feedbackReducer
    }),
    applyMiddleware(logger)
);

ReactDOM.render(<Provider store={reduxStore}><App /></Provider>, document.getElementById('root'));
//registerServiceWorker();
