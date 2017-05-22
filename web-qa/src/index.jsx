import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './components/App';
import Index from './components/1';
import IndexD from './components/1-1';

ReactDOM.render(
  <Router history={hashHistory}>
    <Route path="/" component={App}>
      <IndexRoute component={Index} />
      <Route path="next" component={IndexD} />
    </Route>
  </Router>
, document.getElementById('example'));
