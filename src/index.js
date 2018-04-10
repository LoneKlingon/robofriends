import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
//import App from './App';
//import Hello from './Hello.js'
import ACard from './components/Card.js'
import './bootstrap.min.css';
import Main from './containers/Main.js'
import registerServiceWorker from './registerServiceWorker';
import {Container, Row, Col} from 'reactstrap';
import App from './containers/App.js'
ReactDOM.render(
    
    <div>

        <style>{'body { background-color: #357EDD; }'}</style>

        <App />

    
    </div>,
                
                
                document.getElementById('root'));
registerServiceWorker();
