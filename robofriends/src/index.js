import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import './containers/app.css'

ReactDOM.render(<App />, document.getElementById('root'));
registerServiceWorker();
