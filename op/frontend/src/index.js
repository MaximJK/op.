import React from 'react'
import {render} from 'react-dom'
import {BrowserRouter} from 'react-router-dom'
import App from './components/App';
import { Provider } from "react-redux";
import store from './store';
import jwt_decode from "jwt-decode";
import {loginUser, fetchUserById} from "./actions/auth"
import {fetchOps} from './actions/ops';
import axiosInstance from './actions/axiosApi'

let refresh = window.localStorage.getItem('refresh_token');

if (refresh !== undefined && refresh !== null) {
    
    let decoded = jwt_decode(refresh);
    store.dispatch(fetchUserById(decoded.user_id));
    store.dispatch({type: 'LOG_IN'});
    store.dispatch(fetchOps(decoded.user_id));
} else (
    store.dispatch({type: 'LOG_OUT'})
)

render((
    <Provider store={store}>
    <BrowserRouter>
        <App  />
    </BrowserRouter>
    </Provider>
), document.getElementById('root'));