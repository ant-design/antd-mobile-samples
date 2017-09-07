import React from 'react';
import ReactDOM from 'react-dom';

import PerfProfiler from './PerfProfiler';

import Misc from './components/Misc';
import Modal from './components/Modal';

import './index.less';

const App = React.createClass({
  render() {
    var rs = window.renderStart = new Date().getTime();
    loger('从 react / react-dom / fastclick / component (2 个 http 链接)，加载和执行\
      到第一次进入 entry component render 函数的耗时：', rs - bodyStart);

    return (<div className="container">
      <PerfProfiler />
      <div className="body">
        <Misc />
        <Modal />
      </div>
    </div>);
  }
})

ReactDOM.render(<App />, document.getElementById('example'));
