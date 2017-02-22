import React from 'react';
import { DatePicker, List, Button, Icon } from 'antd-mobile';

const MobileDemo = React.createClass({
  render() {
    return (
      <div>
        <List renderHeader={ () => '选择时间'}>
          <DatePicker mode="datetime">
            <List.Item arrow="horizontal">日期+时间</List.Item>
          </DatePicker>
        </List>
        <Button loading style={{ margin: '16px 0', padding: '0 16px' }}>
          按钮
        </Button>

        <Icon type="check" />
      </div>
    );
  },
});

export default MobileDemo;
