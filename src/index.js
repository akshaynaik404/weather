import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import 'normalize.css';
import { AppContainer } from './containers';
import registerServiceWorker from './registerServiceWorker';

ReactDOM.render(<AppContainer />, document.getElementById('root'));
registerServiceWorker();
