import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { Provider } from 'mobx-react';
import  progApplicationStore from './stores/app';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';


const Root = (
    <Provider progApplicationStore={progApplicationStore} >
        <App />
    </Provider>

);

ReactDOM.render(Root, document.getElementById('root'));
registerServiceWorker();
