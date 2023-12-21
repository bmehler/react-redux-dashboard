import React from 'react';
import * as ReactDOM from 'react-dom/client';
import { Provider } from "react-redux";
import './styles.scss';
import setupStore from './store'
window.React = React

import App from "./App";

const store = setupStore()

const root = ReactDOM.createRoot(document.getElementById('app'))
root.render(
    <Provider store={store}>
        <App />
    </Provider>
) 