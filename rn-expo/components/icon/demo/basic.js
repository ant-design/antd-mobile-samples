import React from 'react'
import { Icon, Grid } from 'antd-mobile-rn'

const list = [
  'check-circle', 'check', 'check-circle-o',
  'cross-circle', 'cross', 'cross-circle-o',
  'up', 'down', 'left',
  'right', 'ellipsis'
]

export default class IConDemo extends React.Component {
  render () {
    const data = list.map(item => ({
      icon: (<Icon type={item} />),
      text: item
    })).concat([{
      icon: (<Icon type={'\ue601'} size={55} color='red' />),
      text: 'Customized'
    }])

    return (
      <Grid data={data} columnNum={3} hasLine={false} />
    )
  }
}
