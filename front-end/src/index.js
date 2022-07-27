import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import * as serviceWorker from './serviceWorker';
import 'bootstrap/dist/css/bootstrap.min.css';
import "react-phone-number-input/style.css";
import 'font-awesome/css/font-awesome.min.css';
import {Provider} from 'react-redux';
import store from './services/store';
ReactDOM.render(<Provider store={store}><App /></Provider>, document.getElementById('root'));

serviceWorker.unregister();
