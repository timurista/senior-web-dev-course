import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import CardList from './components/card-list';
import { robots } from './robots';
import registerServiceWorker from './registerServiceWorker';
import 'tachyons';

ReactDOM.render(<CardList robots={robots} />, document.getElementById('root'));
registerServiceWorker();
