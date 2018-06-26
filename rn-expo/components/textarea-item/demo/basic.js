/* tslint:disable:no-console */
import React from 'react'
import { ScrollView } from 'react-native'
import { TextareaItem, List } from 'antd-mobile-rn'

export default class BasicTextAreaItemExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 'Default value'
    }
  }

  onChange = value => this.setState({ value })

  render () {
    return (<ScrollView style={{ flex: 1 }} automaticallyAdjustContentInsets={false} showsHorizontalScrollIndicator={false} showsVerticalScrollIndicator={false}>
      <List renderHeader={() => 'Basic'}>
        <TextareaItem rows={4} placeholder='Fixed row number' />

        <TextareaItem rows={4} placeholder='Multi-line counting' count={100} />

        <TextareaItem rows={4} placeholder='autoHeight' autoHeight />

        <TextareaItem value={this.state.value} onChange={this.onChange} />

        <TextareaItem value='editable={false}' editable={false} />

        <TextareaItem clear={false} placeholder='clear={false}' />

        <TextareaItem error defaultValue='error={true}' onErrorClick={() => console.log('err')} />
      </List>
    </ScrollView>)
  }
}
