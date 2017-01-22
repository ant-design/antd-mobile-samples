import React from 'react';
import ReactDOM from 'react-dom';

import Misc from './components/Misc';
import Carousel from './components/Carousel';
import Form from './components/Form';
import RefreshControl from './components/RefreshControl';
import Modal from './components/Modal';
import Popup from './components/Popup';

import './index.less';

const App = React.createClass({
  render() {
    return (<div className="container">
      <div className="body">
        <Misc />
        <Carousel />
        <Modal /> <Popup />
        <Form /> <hr />
        <RefreshControl /> <hr />
      </div>
    </div>);
  }
})

ReactDOM.render(<App></App>, document.getElementById('example'));
