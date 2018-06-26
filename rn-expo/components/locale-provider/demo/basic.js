import React from 'react'
import { View } from 'react-native'
import { Pagination, LocaleProvider, List, DatePicker, WhiteSpace, Button } from 'antd-mobile-rn'
import enUS from '../en_US'
import ruRU from '../ru_RU'

const maxDate = new Date(2018, 11, 3, 22, 0)
const minDate = new Date(2015, 7, 6, 8, 30)

const Page = () => (
  <View>
    <Pagination total={5} current={1} />
    <WhiteSpace />
    <List style={{ backgroundColor: 'white' }}>
      <DatePicker
        mode='date'
        title='Select date'
        extra='Click to see the internationalization'
        minDate={minDate}
        maxDate={maxDate}
      >
        <List.Item arrow='horizontal'>Date</List.Item>
      </DatePicker>
    </List>
  </View>
)

export default class LocaleProviderExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      isEnglish: true
    }
  }

  handleClick = () => this.setState({ isEnglish: !this.state.isEnglish })

  render () {
    const locale = this.state.isEnglish ? enUS : ruRU
    return (
      <View style={{ marginTop: 30 }}>
        <Button type='primary' onClick={this.handleClick}>
          {this.state.isEnglish ? 'Russian' : 'English'}
        </Button>
        <WhiteSpace />
        <LocaleProvider locale={locale}>
          <Page />
        </LocaleProvider>
      </View>
    )
  }
}
