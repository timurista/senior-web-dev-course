import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware } from 'redux';
import { createLogger } from 'redux-logger';
import { searchRobots } from './reducers';
import './index.css';
import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import './containers/app.css'

const logger = createLogger();
const store = createStore(searchRobots, applyMiddleware(logger));

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
