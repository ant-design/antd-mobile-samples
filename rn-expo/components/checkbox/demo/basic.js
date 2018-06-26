import React from 'react'
import { View, Text } from 'react-native'
import { WhiteSpace, Checkbox, List } from 'antd-mobile-rn'

const AgreeItem = Checkbox.AgreeItem
const CheckboxItem = Checkbox.CheckboxItem

export default class BasicCheckboxExample extends React.Component {
  constructor (props, context) {
    super(props, context)
    this.state = {
      checkBox1: true,
      agreeItem1: true,
      checkboxItem1: true
    }
  }

  render () {
    return (
      <View>
        <View style={{ padding: 10 }}>
          <Checkbox checked={this.state.checkBox1} style={{ tintColor: '#f00' }} onChange={(event) => { this.setState({ checkBox1: event.target.checked }) }} />
          <WhiteSpace />
          <Checkbox>Checkbox</Checkbox>
          <WhiteSpace />
          <Checkbox checked disabled />
          <WhiteSpace />
          <Checkbox disabled />
        </View>

        <WhiteSpace />
        <AgreeItem>Agree agree agree</AgreeItem>
        <WhiteSpace />
        <AgreeItem checked={this.state.agreeItem1} checkboxStyle={{ tintColor: '#f00' }} onChange={(event) => { this.setState({ agreeItem1: event.target.checked }) }}>
        Agree Credit Payment Service Contract
        </AgreeItem>
        <WhiteSpace />
        <AgreeItem disabled>(unchecked, not editable) Credit Payment Service Contract</AgreeItem>
        <WhiteSpace />
        <AgreeItem checked disabled>(forced selection, not editable) Credit Payment Service Contract</AgreeItem>

        <List style={{ marginTop: 12 }}>
          <Text style={{ marginTop: 12 }}>Form with multiple options (List)</Text>
          <CheckboxItem checked={this.state.checkboxItem1} onChange={(event) => { this.setState({ checkboxItem1: event.target.checked }) }}>
            Contract
          </CheckboxItem>
          <CheckboxItem>Material laying</CheckboxItem>
          <CheckboxItem disabled>Machine maintenance (cannot be selected)</CheckboxItem>
          <CheckboxItem disabled checked>Product problem solving (required)</CheckboxItem>
        </List>
      </View>
    )
  }
}
