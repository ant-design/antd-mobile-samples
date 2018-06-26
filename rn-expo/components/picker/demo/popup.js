import { View } from 'react-native'
import { Picker, List } from 'antd-mobile-rn'
import React from 'react'
import { district } from 'antd-mobile-demo-data'

export default class PopupExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      data: [],
      value: []
    }
  }

  onClick = () => {
    // console.log('start loading data')
    setTimeout(() => {
      this.setState({
        data: district
      })
    }, 500)
  }

  onChange = value => this.setState({ value })

  render () {
    return (
      <View style={{ marginTop: 30 }}>
        <List>
          <Picker data={this.state.data} cols={2} value={this.state.value} onChange={this.onChange}>
            <List.Item arrow='horizontal' last onClick={this.onClick}>Choose Province and City (asynchronous loading)</List.Item>
          </Picker>
        </List>
      </View>
    )
  }
}
