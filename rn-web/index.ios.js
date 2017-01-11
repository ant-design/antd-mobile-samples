/* tslint:disable:no-console */
import { View, AppRegistry } from 'react-native';
import { DatePicker, List } from 'antd-mobile';
import React from 'react';
import { createForm } from 'rc-form';

let MobileDemo = React.createClass({
  render() {
    return (<View style={{ marginTop: 20 }}>
      <List>
        <DatePicker
          mode="datetime"
          {...this.props.form.getFieldProps('datetime')}
        >
          <List.Item
            arrow="horizontal"
            last
          >
            选择时间
          </List.Item>
        </DatePicker>
      </List>
    </View>);
  }
});

MobileDemo = createForm()(MobileDemo);

AppRegistry.registerComponent('MobileDemo', () => MobileDemo);
