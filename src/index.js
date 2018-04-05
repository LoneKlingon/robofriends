import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
import Hello from './Hello.js'
import registerServiceWorker from './registerServiceWorker';
import 'tachyons'

ReactDOM.render(<Hello greeting = {"Hello Master Anthony"}/>, document.getElementById('root'));
registerServiceWorker();
