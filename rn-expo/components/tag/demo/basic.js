/* tslint:disable:no-console */
import React from 'react'
import { View } from 'react-native'
import { Tag, WhiteSpace } from 'antd-mobile-rn'

export default class BasicTagExample extends React.Component {
  onChange = selected => console.log(`tag selected: ${selected}`)

  render () {
    return (
      <View style={{ padding: 10 }}>
        <Tag>Basic</Tag>
        <WhiteSpace />
        <Tag selected>Selected</Tag>
        <WhiteSpace />
        <Tag disabled>Disabled</Tag>
        <WhiteSpace />
        <Tag onChange={this.onChange}>Callback</Tag>
        <WhiteSpace />
        <Tag closable onClose={() => { console.log('onClose') }} afterClose={() => { console.log('afterClose') }}>
          Closable
        </Tag>
        <WhiteSpace />
        <Tag small>Small and Readonly</Tag>
      </View>
    )
  }
}
