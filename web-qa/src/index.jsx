import React from 'react';
import ReactDOM from 'react-dom';

import TapTest from './components/Tap';

const App = React.createClass({
  render() {
    return (<div>
      {/* TapTest 测试是否有 点击穿透 问题 */}
      <TapTest />
    </div>);
  }
})

ReactDOM.render(<App />, document.getElementById('example'));
