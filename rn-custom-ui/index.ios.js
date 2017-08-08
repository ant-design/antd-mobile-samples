/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, StyleSheet, View } from 'react-native';
import { Tag, InputItem, List } from 'antd-mobile';
import inputStyle from './inputStyle';

console.log(inputStyle)

export default class rncustomui extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Tag>brand_primary 为 red 的 tag，border为 green  点击看效果</Tag>
        <List renderHeader={() => '基本'}>
          <InputItem styles={inputStyle} placeholder="自定义 input 样式">Name</InputItem>
        </List>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    // alignItems: 'center',
  },
});

AppRegistry.registerComponent('rncustomui', () => rncustomui);
