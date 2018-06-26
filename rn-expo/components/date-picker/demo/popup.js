/* tslint:disable:no-console */
import { View } from 'react-native'
import { DatePicker, List } from 'antd-mobile-rn'
import React from 'react'
import enUS from '../locale/en_US'

const now = new Date()

export default class PopupExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: undefined
    }
  }

  onChange = value => this.setState({ value })

  render () {
    return (
      <View>
        <List>
          <DatePicker
            defaultDate={now}
            value={this.state.value}
            mode='date'
            minDate={this.date1MinDate || (this.date1MinDate = new Date(2015, 7, 6))}
            maxDate={this.date1MaxDate || (this.date1MaxDate = new Date(2016, 11, 3))}
            onChange={this.onChange}
            format='YYYY-MM-DD'
            locale={enUS}
          >
            <List.Item arrow='horizontal'>
              Select Date
            </List.Item>
          </DatePicker>
        </List>
      </View>
    )
  }
}
