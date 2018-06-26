/* tslint:disable:no-console */
import React from 'react'
import { View, Text } from 'react-native'
import { Modal, Button, WingBlank, WhiteSpace } from 'antd-mobile-rn'

export default class BasicModalExample extends React.Component {
  constructor (props) {
    super(props)
    this.state = {
      visible: false,
      visible2: false
    }
  }

  showModal = () => this.setState({ visible: true })

  showModal2 = () => this.setState({ visible2: true })

  onClose = () => this.setState({ visible: false })

  onClose2 = () => this.setState({ visible2: false })

  onButtonClick = () => {
    Modal.alert('Alert title', ('Alert details'), [
      { text: 'Cancel', onPress: () => console.log('cancel'), style: 'cancel' },
      { text: 'OK', onPress: () => console.log('ok') }
    ])
  }

  onButtonClick2 = () => {
    Modal.operation([
      { text: 'Unread', onPress: () => console.log('Unread was clicked') },
      { text: 'Chat', onPress: () => console.log('Chat was clicked') }
    ])
  }

  onButtonClick3 = () => {
    Modal.prompt('Login', 'Enter user name and password', (login, password) => console.log(`login: ${login}, password: ${password}`), 'login-password', '', ['login', 'passwords'])
  }

  onButtonClick4 = () => {
    Modal.prompt('Password', 'This is a password message', password => console.log(`password: ${password}`), 'secure-text', 'defaultValue')
  }

  render () {
    const footerButtons = [
      { text: 'Cancel', onPress: () => console.log('cancel') },
      { text: 'Ok', onPress: () => console.log('ok') }
    ]

    return (
      <View style={{ paddingTop: 30, marginTop: 64 }}>
        <WingBlank>
          <Button onClick={this.showModal}>Display dialog box</Button>
          <WhiteSpace />
          <Button onClick={this.showModal2}>Display full scree dialog</Button>
          <WhiteSpace />
          <Button onClick={this.onButtonClick}>Display Modal.alert</Button>
          <WhiteSpace />
          <Button onClick={this.onButtonClick2}>Display Modal.opertation</Button>
          <WhiteSpace />
          <Button onClick={this.onButtonClick3}>Display Modal.propmt (login-password)</Button>
          <WhiteSpace />
          <Button onClick={this.onButtonClick4}>Display Modal.propmt (secure-text)</Button>
        </WingBlank>
        <Modal transparent={false} visible={this.state.visible2} animationType='slide-up' onClose={this.onClose2}>
          <View style={{ paddingVertical: 220 }}>
            <Text style={{ textAlign: 'center' }}>This is content 1...</Text>
            <Text style={{ textAlign: 'center' }}>This is content 2...</Text>
          </View>
          <Button type='primary' inline onClick={this.onClose2}>close modal</Button>
        </Modal>
        <Modal title='Test' transparent onClose={this.onClose} maskClosable visible={this.state.visible} closable footer={footerButtons}>
          <View style={{ paddingVertical: 20 }}>
            <Text style={{ textAlign: 'center' }}>This is content 1...</Text>
            <Text style={{ textAlign: 'center' }}>This is content 2...</Text>
          </View>
          <Button type='primary' inline onClick={this.onClose}>close modal</Button>
        </Modal>
      </View>
    )
  }
}
