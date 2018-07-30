import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './app';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import './app.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
