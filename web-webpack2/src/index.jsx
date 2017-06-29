import React from 'react';
import ReactDOM from 'react-dom';

import App from './components/App';
import Stage1 from './components/Stage1';
import Stage2 from './components/Stage2';
import Stage3 from './components/Stage3';

import './index.less';

ReactDOM.render(
  <div className="body">
    <h1>Stages list</h1>
    <ul role="nav">
      <li><h3>ListView + Carousel</h3></li>
      <li><h3>Tabs + ...</h3></li>
      <li><h3>Form + ...</h3></li>
    </ul>
    <App><Stage3 /></App>
  </div>
, document.getElementById('example'));
