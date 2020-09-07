import React from 'react';
import ReactDOM from 'react-dom';
import PageTeste from './pages/Teste'
import store from './config/store/Index';
import { Provider } from 'react-redux';

ReactDOM.render(
    <Provider store={store}>
        <PageTeste />
    </Provider>,
    document.getElementById('root')
);