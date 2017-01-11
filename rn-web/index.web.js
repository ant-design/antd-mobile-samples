import { DatePicker, List, Button, Icon } from 'antd-mobile';
import { createForm } from 'rc-form';
import React from 'react';
import ReactDOM from 'react-dom';

let MobileDemo = React.createClass({
  render() {
    return (
      <div>
        <List renderHeader={ () => '选择时间'}>
          <DatePicker
            mode="datetime"
            {...this.props.form.getFieldProps('datetime')}
          >
            <List.Item arrow="horizontal">日期+时间</List.Item>
          </DatePicker>
        </List>
        <Button type="primary" style={{ margin: '16px 0', padding: '0 16px' }}>
          按钮
        </Button>

        <Icon type="aliwangwang" />
      </div>
    );
  },
});

MobileDemo = createForm()(MobileDemo);

ReactDOM.render(<MobileDemo />, document.getElementById('root'));
