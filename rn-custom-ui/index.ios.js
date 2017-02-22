/**
 * Sample React Native App
 * https://github.com/facebook/react-native
 * @flow
 */

import React, { Component } from 'react';
import {AppRegistry, StyleSheet, View } from 'react-native';
import { Tag } from 'antd-mobile';

export default class rncustomui extends Component {
  render() {
    return (
      <View style={styles.container}>
        <Tag>brand_primary 为 red 的 tag，border为 green  点击看效果</Tag>
      </View>
    );
  }
}

const styles = StyleSheet.create({
  container: {
    flex: 1,
    marginTop: 100,
    alignItems: 'center',
  },
});

AppRegistry.registerComponent('rncustomui', () => rncustomui);
