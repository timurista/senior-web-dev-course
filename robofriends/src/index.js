import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import Card from './components/card';
import registerServiceWorker from './registerServiceWorker';
import { robots } from './robots';
import 'tachyons';

ReactDOM.render(<div>
  {robots.map(({id, name, username, email}) => (
    <Card id={id} name={name} username={username} email={email} />
  ))}
</div>, document.getElementById('root'));
registerServiceWorker();
