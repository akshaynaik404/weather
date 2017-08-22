import React from 'react';
import ReactDOM from 'react-dom';
import 'normalize.css';
import './index.css';
import { AppContainer } from './containers';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();
