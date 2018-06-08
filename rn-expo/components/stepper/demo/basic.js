/* tslint:disable:no-console */
import React from 'react'
import { View } from 'react-native'
import { Stepper, List } from 'antd-mobile-rn'

export default class StepperExample extends React.Component {
  onChange = value => console.log('changed', value)

  render () {
    const readOnly = (<Stepper size='small' key='1' max={10} min={1} readOnly={false} defaultValue={1} onChange={this.onChange} />)

    return (
      <View style={{ marginTop: 20 }}>
        <List>
          <List.Item extra={<Stepper key='0' max={10} min={1} defaultValue={3} onChange={this.onChange} />}>
            readOnly: true
          </List.Item>
          <List.Item extra={readOnly}>readOnly: false</List.Item>
          <List.Item extra={<Stepper key='2' disabled max={10} min={1} defaultValue={3} onChange={this.onChange} />}>
            Disabled
          </List.Item>
        </List>
      </View>
    )
  }
}
