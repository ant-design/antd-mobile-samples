import React from 'react'
import { View, ScrollView, Text } from 'react-native'
import { Drawer, List, Button, WhiteSpace } from 'antd-mobile-rn'

export default class DrawerExample extends React.Component {
  onOpenChange = isOpen => console.log('Drawer is open: ', (isOpen).toString())

  render () {
    const itemArr = Array.apply(null, Array(20)).map(function (_, i) { return i }).map((_i, index) => {
      if (index === 0) {
        return (
          <List.Item key={index} thumb='https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png' multipleLine>
            <View style={{ flexDirection: 'row', justifyContent: 'space-between', alignItems: 'center' }}>
              <Text>Item - {index}</Text>
              <Button type='primary' size='small' onClick={() => this.drawer.closeDrawer()}>
                Close drawer
              </Button>
            </View>
          </List.Item>
        )
      }
      return (
        <List.Item key={index} thumb='https://zos.alipayobjects.com/rmsportal/eOZidTabPoEbPeU.png'>
          <Text>Item - {index}</Text>
        </List.Item>
      )
    })

    const sidebar = (
      <ScrollView style={{ flex: 1 }}>
        <List>{itemArr}</List>
      </ScrollView>
    )

    return (
      <Drawer sidebar={sidebar} position='left' open={false} drawerRef={el => (this.drawer = el)} onOpenChange={this.onOpenChange} drawerBackgroundColor='#ccc'>
        <View style={{ flex: 1, marginTop: 114, padding: 8 }}>
          <Button onClick={() => this.drawer && this.drawer.openDrawer()}>Open drawer(from version 1.1.4)</Button>
          <WhiteSpace />
        </View>
      </Drawer>
    )
  }
}
