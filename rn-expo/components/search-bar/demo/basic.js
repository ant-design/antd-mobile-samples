import React from 'react'
import { View, Alert } from 'react-native'
import { SearchBar } from 'antd-mobile-rn'

export default class SearchBarDemo extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: 'Food'
    }
  }

  onChange = value => this.setState({ value })

  clear = () => this.setState({ value: '' })

  render () {
    return (
      <View style={{ marginTop: 30 }}>
        <SearchBar
          defaultValue='Initial value'
          placeholder='search for'
          cancelText='Cancel'
        />
        <SearchBar
          value={this.state.value}
          placeholder='search for'
          onSubmit={(value) => Alert.alert(value)}
          onCancel={this.clear}
          onChange={this.onChange}
          cancelText='Cancel'
          showCancelButton
        />
      </View>
    )
  }
}
