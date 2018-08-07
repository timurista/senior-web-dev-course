import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { createStore, applyMiddleware, combineReducers } from 'redux';
// import { createLogger } from 'redux-logger';
import { searchRobots, requestRobots } from './reducers';
import thunkMiddleware from 'redux-thunk';
import './index.css';
import App from './containers/app';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';
import './containers/app.css'

// const logger = createLogger();
const rootReducer = combineReducers({
  searchRobots,
  requestRobots,
});
const store = createStore(rootReducer, applyMiddleware(thunkMiddleware));

ReactDOM.render(
<Provider store={store}>
  <App />
</Provider>, document.getElementById('root'));
registerServiceWorker();
