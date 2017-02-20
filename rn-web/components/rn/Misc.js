import React from 'react';
import { View, Text } from 'react-native';
import { Button, Tabs } from 'antd-mobile';

const TabPane = Tabs.TabPane;

export default class Misc extends React.Component {
  render() {
    return (
      <View>
        <Button>按钮</Button>
        <Tabs defaultActiveKey="1">
          <TabPane tab="选项卡一" key="1">
              <View style={{
                alignItems: 'center', justifyContent: 'center', height: 100,
              }}>
                <Text>选项卡一内容</Text>
              </View>
            </TabPane>
            <TabPane tab="选项卡二" key="2">
              <View style={{
                alignItems: 'center', justifyContent: 'center', height: 100,
              }}>
                <Text>选项卡二内容</Text>
              </View>
            </TabPane>
            <TabPane tab="选项卡三" key="3">
              <View style={{
                alignItems: 'center', justifyContent: 'center', height: 100,
              }}>
                <Text>选项卡三内容</Text>
              </View>
            </TabPane>
        </Tabs>
      </View>
    )
  }
}
