import React from 'react'
import { ScrollView, Text, Image } from 'react-native'
import { Result } from 'antd-mobile-rn'

export default class ResultExample extends React.Component {
  render () {
    return (
      <ScrollView style={{ backgroundColor: '#F5F5F9', flex: 1 }}>
        <Text style={{ margin: 10, color: '#999' }}>Image URI</Text>
        <Result imgUrl={{ uri: 'https://zos.alipayobjects.com/rmsportal/GcBguhrOdlYvGfnsXgrE.png' }} title=' Successful verification' message='The submitted content has been successfully verified' />

        <Text style={{ margin: 10, color: '#999' }}>Image source</Text>
        <Result imgUrl={require('./alipay.png')} title=' Successful verification' message='The submitted content has been successfully verified' />

        <Text style={{ margin: 10, color: '#999' }}>Image element</Text>
        <Result img={<Image source={require('./alipay.png')} style={{ width: 60, height: 60 }} />} title=' Successful verification' message={<Text>The submitted content has been successfully verified</Text>} />

        <Text style={{ margin: 10, color: '#999' }}>With button</Text>
        <Result img={<Image source={require('./alipay.png')} style={{ width: 60, height: 60 }} />} title=' Successful verification' message='The submitted content has been successfully verified' buttonText='Complete' buttonType='primary' buttonClick={e => alert(e.toString())} />
      </ScrollView>
    )
  }
}
