import React from 'react'
import { List, Switch } from 'antd-mobile-rn'
export default class SwitchExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      checked: false
    }
  }

  onSwitchChange = value => this.setState({ checked: value })

  render () {
    return (
      <List style={{ marginTop: 20 }}>
        <List.Item extra={<Switch checked />}>Default on (controlled)</List.Item>
        <List.Item extra={<Switch />}>Default off (controlled)</List.Item>
        <List.Item extra={<Switch checked={this.state.checked} onChange={this.onSwitchChange} />}>
          onChange event, switch state：{this.state.checked ? 'open' : 'close'}
        </List.Item>
        <List.Item extra={<Switch disabled />}>Default can not be modified</List.Item>
      </List>
    )
  }
}
