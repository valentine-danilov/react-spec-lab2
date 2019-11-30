import React from 'react';
import ReactDOM from 'react-dom';
import App from './components/App';
import { BrowserRouter } from 'react-router-dom';
import '../src/css/index.css';
import '../src/css/bootstrap.css';

import thunk from 'redux-thunk'
import { Provider } from 'react-redux'
import {
    createStore,
    applyMiddleware,
    compose
} from 'redux'
import { reducer } from './store/reducer'

const store = compose(applyMiddleware(thunk))(createStore)(reducer);

ReactDOM.render((
    <Provider store={store}>
        <BrowserRouter>
            <App />
        </BrowserRouter>
    </Provider>
), document.getElementById('main')
);
