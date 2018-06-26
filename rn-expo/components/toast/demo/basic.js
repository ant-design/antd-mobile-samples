/* tslint:disable:no-console */
import React from 'react'
import { Toast, WhiteSpace, WingBlank, Button } from 'antd-mobile-rn'
import { DeviceEventEmitter } from 'react-native'

export default class ToastExample extends React.Component {
  alwaysShowToast = () => {
    Toast.info('This is a toast with a duration of 0!!!', 0)
    this.timer = setTimeout(() => {
      Toast.hide()
    }, 5000)
  }

  showToast = () => Toast.info('This is a toast tip!!!')

  successToast = () => Toast.success('Successful loading!!!', 1)

  showToastNoMask = () => Toast.info('Toast without mask!!!', 1, null, false)

  failToast = () => Toast.fail('Failed to load!!!')

  offline = () => Toast.offline('Network connection failed!!!')

  loadingToast = () => Toast.loading('Loading...', 1, () => console.log('Loading completed!!!'))

  componentDidMount () {
    DeviceEventEmitter.addListener('navigatorBack', () => {
      Toast.hide()
    })
  }

  componentWillUnmount () {
    DeviceEventEmitter.removeAllListeners('navigatorBack')
    if (this.timer) {
      clearTimeout(this.timer)
      this.timer = null
    }
  }

  render () {
    return (
      <WingBlank style={{ marginTop: 80 }}>
        <WhiteSpace />
        <Button onClick={this.showToastNoMask}>No mask</Button>
        <WhiteSpace />
        <Button onClick={this.showToast}>Plain text toast</Button>
        <WhiteSpace />
        <Button onClick={this.successToast}>Success toast</Button>
        <WhiteSpace />
        <Button onClick={this.failToast}>Fail toast</Button>
        <WhiteSpace />
        <Button onClick={this.offline}>Internet toast</Button>
        <WhiteSpace />
        <Button onClick={this.loadingToast}>Loading toast</Button>
        <WhiteSpace />
        <Button onClick={this.alwaysShowToast}>Toast with 0 duration</Button>
        <WhiteSpace />
      </WingBlank>
    )
  }
}
