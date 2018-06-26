/* tslint:disable:no-console */
import React from 'react'
import { View, Text } from 'react-native'
import { SegmentedControl, WhiteSpace } from 'antd-mobile-rn'

export default class BasicTagExample extends React.Component {
  onChange = (e) => console.log(`selectedIndex:${e.nativeEvent.selectedSegmentIndex}`)

  onValueChange = value => console.log(value)

  render () {
    return (
      <View style={{ paddingTop: 60, paddingHorizontal: 20 }}>
        <Text>Disabled</Text>
        <SegmentedControl values={['Switch 1', 'Switch 2']} disabled />
        <WhiteSpace size='lg' />
        <Text>Set tintColor, style</Text>
        <SegmentedControl values={['Switch 1', 'Switch 2', 'Switch 3']} tintColor={'#ff0000'} style={{ height: 40, width: 280 }} />
        <WhiteSpace size='lg' />
        <Text>Set by default selectedIndex</Text>
        <SegmentedControl selectedIndex={1} values={['Switch 1', 'Switch 2', 'Switch 3']} />
        <WhiteSpace size='lg' />
        <Text>Event onChange/onValueChange</Text>
        <SegmentedControl values={['Switch 1', 'Switch 2', 'Switch 3']} onChange={this.onChange} onValueChange={this.onValueChange} />
      </View>
    )
  }
}
