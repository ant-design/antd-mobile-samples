/* eslint-disable no-plusplus, global-require */
import React from 'react';
import { connect } from 'dva';
import { DatePicker, List, Button, Icon, Tabs, WhiteSpace, Badge } from 'antd-mobile';
import { createForm } from 'rc-form';

function callback() {
}

class MobileDemo extends React.Component {
  render() {
    const tabs = [
      { title: 'First Tab' },
      { title: 'Second Tab' },
      { title: <Badge dot>Third Tab</Badge> },
    ];
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
          <Tabs tabs={tabs} onChange={callback}>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
              Content of first tab
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
              Content of second tab
            </div>
            <div style={{ display: 'flex', alignItems: 'center', justifyContent: 'center', height: '150px', backgroundColor: '#fff' }}>
              Content of third tab
            </div>
          </Tabs>
          <WhiteSpace />
        </div>
      </div>
    );
  }
}

const MobileDemoWrapper = createForm()(MobileDemo);
export default connect()(MobileDemoWrapper);
