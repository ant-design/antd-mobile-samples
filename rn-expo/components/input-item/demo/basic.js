/* tslint:disable:jsx-no-multiline-js */
import React from 'react'
import { ScrollView, Text } from 'react-native'
import { InputItem, List, Button } from 'antd-mobile-rn'

export default class BasicInputItemExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: '',
      value1: '',
      value2: '',
      value3: '',
      value4: '',
      labelnum1: '',
      labelnum2: '',
      labelnum3: '',
      text: '',
      bankCard: '',
      phone: '',
      password: '',
      number: '',
      focused: false
    }
  }

  render () {
    return (
      <ScrollView
        style={{ flex: 1 }}
        automaticallyAdjustContentInsets={false}
        showsHorizontalScrollIndicator={false}
        showsVerticalScrollIndicator={false}
      >
        <List renderHeader={() => 'Basic'}>
          <InputItem
            clear
            error
            onErrorPress={() => alert('clicked me')}
            value={this.state.value}
            onChange={(value) => this.setState({ value })}
            extra='$'
            placeholder='Label'
          >
            Input box
          </InputItem>
          <InputItem
            clear
            onErrorPress={() => { alert(1) }}
            value='Not editable'
            onChange={(value) => this.setState({ value })}
            extra={<Text>$</Text>}
            placeholder='Not editable'
            editable={false}
          >
            Input box
          </InputItem>
          <InputItem
            clear
            value={this.state.value1}
            onChange={(value) => this.setState({ value1: value })}
            placeholder='No label'
          />
          <InputItem
            defaultValue='xx'
            clear
            placeholder='Get cursor automatically'
            autoFocus
          >
            Title
          </InputItem>
          <InputItem
            clear
            placeholder='Click the button below to get the cursor'
            focused={this.state.focused}
            onFocus={() => this.setState({ focused: false })}
          >
            Title
          </InputItem>
          <List.Item>
            <Button
              onClick={() => this.setState({ focused: true })}
              type='primary'
            >
              Click to get the cursor
            </Button>
          </List.Item>
        </List>
        <List renderHeader={() => 'Fixed tags'} >
          <InputItem
            clear
            value={this.state.labelnum1}
            onChange={(value) => this.setState({ labelnum1: value })}
            labelNumber={2}
            placeholder='Tag 2'
          >
            One
          </InputItem>
          <InputItem
            clear
            value={this.state.labelnum2}
            onChange={(value) => this.setState({ labelnum2: value })}
            labelNumber={3}
            placeholder='Tag 3'
          >
            Two
          </InputItem>
          <InputItem
            clear
            value={this.state.labelnum3}
            onChange={(value) => this.setState({ labelnum3: value })}
            labelNumber={4}
            placeholder='Tag 4'
          >
            Three
          </InputItem>
        </List>
        <List renderHeader={() => 'Format'}>
          <InputItem
            clear
            error
            value={this.state.text}
            onChange={(value) => this.setState({ text: value })}
            placeholder='text'
          >
            Text
          </InputItem>
          <InputItem
            clear
            type='bankCard'
            value={this.state.bankcard}
            onChange={(value) => this.setState({ bankcard: value })}
            placeholder='bankCard'
          >
            Card
          </InputItem>
          <InputItem
            clear
            type='phone'
            value={this.state.phone}
            onChange={(value) => this.setState({ phone: value })}
            placeholder='phone'
          >
            Phone
          </InputItem>
          <InputItem
            clear
            type='password'
            value={this.state.password}
            onChange={(value) => this.setState({ password: value })}
            placeholder='password'
          >
            Password
          </InputItem>
          <InputItem
            clear
            type='number'
            value={this.state.number}
            onChange={(value) => this.setState({ number: value })}
            placeholder='number'
          >
            Number
          </InputItem>
        </List>
      </ScrollView>
    )
  }
}
