/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import { DatePicker, List } from 'antd-mobile-rn';
import { View } from 'react-native';

export default class App extends Component {
  render() {
    return (<View style={{ marginTop: 30 }}>
      <List>
        <DatePicker mode="datetime">
          <List.Item arrow="horizontal">
            选择时间
          </List.Item>
        </DatePicker>
      </List>
    </View>);
  }
}
