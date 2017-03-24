import React from 'react';
import ReactDOM from 'react-dom';
import { Router, Route, hashHistory, IndexRoute } from 'react-router';

import App from './components/App';
import Detail from './components/Detail';

class Base extends React.Component{
  render() {
    return <div className="root">
      {this.props.children}
    </div>
  }
};

ReactDOM.render((
  <Router history={hashHistory}>
    <Route path="/" component={Base}>
      <IndexRoute component={App}/>
      <Route path="app" component={App}></Route>
      <Route path="next" component={Detail}></Route>
    </Route>
  </Router>
), document.getElementById('example'));
