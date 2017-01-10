---
order: 0
title: 类型、尺寸
---


````jsx
import { Button } from 'antd_custom_ui';

const ButtonExample = React.createClass({
  render() {
    return (
      <div style={{ margin: '0 8px' }}>

        <div style={{ margin: '32px 0' }}>
          <Button type="primary">按钮</Button>
          <div style={{ height: 8 }} />
          <Button disabled>default disabled 按钮</Button>
        </div>

      </div>
    );
  },
});

ReactDOM.render(<ButtonExample />, mountNode);
````
