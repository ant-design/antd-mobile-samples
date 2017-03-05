/* eslint-disable no-plusplus, global-require */
import React from 'react';
import { connect } from 'dva';
import { DatePicker, List, Button, Icon, Tabs, WhiteSpace } from 'antd-mobile';
import { createForm } from 'rc-form';

const TabPane = Tabs.TabPane;

function callback() {
}


const makeTabPane = (key) => {
  return (
    <TabPane tab={`选项${key}`} key={key}>
      <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '5rem', backgroundColor: '#fff' }}>
        {`选项${key}内容`}
      </div>
    </TabPane>
  );
};

const makeMultiTabPane = (count) => {
  const result = [];
  for (let i = 0; i <= count; i++) {
    result.push(makeTabPane(i));
  }
  return result;
};

class MobileDemo extends React.Component {
  render() {
    return (
      <div>
        <List renderHeader={() => '选择时间'}>
          <DatePicker
            mode="datetime"
            {...this.props.form.getFieldProps('datetime')}
          >
            <List.Item arrow="horizontal">日期+时间</List.Item>
          </DatePicker>
        </List>
        <Button loading style={{ margin: '16px 0', padding: '0 16px' }} type="primary">
          按钮
        </Button>

        <Icon type="check" />
        <Icon type={require('../svg/fortune.svg')} />
        <div>
          <Tabs defaultActiveKey="8" onChange={callback}>
            {makeMultiTabPane(11)}
          </Tabs>
          <WhiteSpace />
        </div>
      </div>
    );
  }
}

const MobileDemoWrapper = createForm()(MobileDemo);
export default connect()(MobileDemoWrapper);
