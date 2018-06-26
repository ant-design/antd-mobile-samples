import { PickerView } from 'antd-mobile-rn'
import React from 'react'

const seasons = [
  [
    {
      label: '2013',
      value: '2013'
    },
    {
      label: '2014',
      value: '2014'
    }
  ],
  [
    {
      label: 'Spring',
      value: 'Spring'
    },
    {
      label: 'Summer',
      value: 'Summer'
    }
  ]
]

export default class PickerViewExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      value: null
    }
  }

  onChange = value => this.setState({ value })

  render () {
    return (
      <PickerView
        onChange={this.onChange}
        value={this.state.value}
        data={seasons}
        cascade={false}
      />
    )
  }
}
